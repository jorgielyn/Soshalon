var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  img: { 
<<<<<<< HEAD
    type:String,
    required: false
=======
   type:String,
   required: false
>>>>>>> 13b5decb83995ecfb07d1be15b0ab3c4702ed740
  },
  fullname: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: false
  },
  contactNo: {
    type: String,
    required: false
  },
  fb: {
    type: String,
    required: false
  },
  serviceOffered: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  }//,
  // schedule: {
  //   type: String,
  //   required: false,
  //   enum:[]
  // }
});

UserSchema.statics.authenticate = function (username, password, callback) {
  User.findOne({ username: username })
    .exec(function (err, user) {
      if (err) {
        return callback(err)
      } else if (!user) {
        var err = new Error('User not found.');
        err.status = 401;
        return callback(err);
      }
      if(password == user.password){
        return callback(null, user);
      }
      else{
        return callback();
      }
      
    });
}

var User = mongoose.model('User', UserSchema);
module.exports = User;