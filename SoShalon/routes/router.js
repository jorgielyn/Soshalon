var express = require('express');
var router = express.Router();
var User = require('../model/user');


//let data = sessionStorage.getItem('username');

// GET route for reading data
router.get('/', function (req, res, next) {
  return res.sendFile(path.join(__dirname + 'modules/basic/login.vue'));
});


//login authentication
router.post('/auth', function (req, res, next) {
  if (req.body.username && req.body.password) {
    User.authenticate(req.body.username, req.body.password, function (error, user) {
      if (error || !user) {
        var err = new Error('Wrong email or password.');
        res.status(401).json({ message: err.message })
        return next(err);
      } else {
        //data = user.username;
        req.session.userId = user._id;
        req.session.password = user.password;
        req.session.User = user.username;
        res.send(user)
        console.log(user)
        //res.status(200).json({ message: 'oks' })
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
   User.find({username: req.session.username }, function (err, user) {
     res.send(user)
     console.log(user)
    //console.log(req.session.userId)
    //if (req.body.currentPassword == req.session.password) {
     // console.log("ok kaayoss")
      // if (!user) {
      //   //res.send('error', 'No account found');
      //   //return res.redirect('/profile');
      //   console.log("user not found ")
      // }
      // console.log()
      // //console.log(user)
      // var email = req.body.email.trim();
      // var username = req.body.username.trim();
      // var fullname = req.body.fullname.trim();
      // var fb = req.body.fb.trim();
      // var contactNo = req.body.contactNo.trim();
      // var service1 = req.body.service1.trim();
      // var service2 = req.body.service2.trim();
      // var description = req.body.description.trim();
      // //var currentPassword = req.body.currentPassword.trim();
      // var newPassword = req.body.newPassword.trim();

      // user.email = email;
      // user.username = username;
      // user.fullname = fullname;
      // user.fb = fb;
      // user.contactNo = contactNo;
      // user.service1 = service1;
      // user.service2 = service2;
      // user.description = description;
      // user.password = newPassword
      // user.save()
      //   .then(() => {
      //     res.status(200).json({ message: 'ok' })
      //     console.log('ok')
      //   })
      //   .catch(err => {
      //     res.status(401).json({ message: err.message })
      //     console.log('error')
      //   })


    //}
   })

})

// GET route after registering
router.get('modules/basic/dashboard.vue', function (req, res, next) {
  User.findById(req.session.userId)
    .exec(function (error, user) {
      if (error) {
        return next(error);
      } else {
        if (user === null) {
          var err = new Error('Not authorized! Go back!');
          err.status = 400;
          return next(err);
        } //else {
        //   return res.send('<h1>Name: </h1>' + user.username + '<h2>Mail: </h2>' + user.email + '<br><a type="button" href="/logout">Logout</a>')
        // }
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