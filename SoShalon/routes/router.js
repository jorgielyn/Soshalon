var express = require('express');
var router = express.Router();
var User = require('../model/user');
var userId;
const multer = require("multer");

// GET route for reading data
router.get('/', function (req, res, next) {
  return res.sendFile(path.join(__dirname + 'modules/basic/login.vue'));
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (!allowedTypes.includes(file.mimetype)) {
    const error = new Error("Incorrect file");
    error.code = "INCORRECT_FILETYPE";
    return cb(error, false)
  }
  cb(null, true);
}
const upload = multer({
  dest: './uploads',
  fileFilter,
  limits: {
    fileSize: 5000000
  }
});



router.post('/upload', upload.single('file'), (req, res) => {
  res.json({ file: req.file });
});

router.use((err, req, res, next) => {
  if (err.code === "INCORRECT_FILETYPE") {
    res.status(422).json({ error: 'Only images are allowed' });
    return;
  }
  if (err.code === "LIMIT_FILE_SIZE") {
    res.status(422).json({ error: 'Allow file size is 500KB' });
    return;
  }
});

//fetch current User
router.get('/profile', function (req, res) {
  User.find({ _id: userId }, (err, user) => {
    if (err) {
      res.send(err);
    }
    res.json({ data: user });
    //console.log(user)
  });
})

//login authentication
router.post('/auth', function (req, res, next) {
  if (req.body.username && req.body.password) {
    User.authenticate(req.body.username, req.body.password, function (error, user) {
      if (error || !user) {
        var err = new Error('Wrong email or password.');
        res.status(401).json({ message: err.message })
        return next(err);
      } else {
        req.session.userId = user._id;
        //req.session.password = user.password;
        userId = req.session.userId;
        res.status(200).json({ message: 'ok' })
        //return res.redirect('modules/basic/dashboard.vue');
      }
    });
  } else {
    var err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
})
//register save to db
router.post('/create', function (req, res) {
  let user = new User(req.body)
  user.save()
    .then(() => {
      res.status(200).json({ message: 'ok' })
      console.log('ok')
    })
    .catch(err => {
      res.status(401).json({ message: err.message })
      console.log('error')
    })
})

router.post('/updateProfile', function (req, res) {
  var email = req.body.email.trim();
  var username = req.body.username.trim();
  var fullname = req.body.fullname.trim();
  var fb = req.body.fb.trim();
  var contactNo = req.body.contactNo.trim();
  var service1 = req.body.service1
  var service2 = req.body.service2
  var description = req.body.description.trim();
  var Password = req.body.Password.trim();
  var image = req.body.imagepath;
  User.update({ _id :userId}, { $set: { fullname: fullname, email: email, username: username, fb: fb, contactNo: contactNo, service1: service1, service2, service2, description: description, password: Password, img: image } }, function (err, result) {
    if (err) {
      console.log(err);
      res.status(401).json({ message: err.message })
    }
    else {
      console.log(result);
      res.status(200).json({ message: 'ok' })
    }
  });
})

// GET route after registering
router.get('/dashboard', function (req, res, next) {
  User.findById(req.session.userId)
    .exec(function (error, user) {
      if (error) {
        return next(error);
      } else {
        if (user === null) {
          var err = new Error('Not authorized! Go back!');
          err.status = 400;
          return next(err);
        }
      }
    });
});

// GET for logout logout
router.get('/logout', function (req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      } else {
        return res.redirect('/');
      }
    });
  }
});

module.exports = router;