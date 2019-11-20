import router from "../../router";
export default {
    currentUser: {
        fullname: "",
        username: "",
        email: "",
        fb: "",
        contactNo: "",
        service1: "",
        service2: "",
        description: "",
        currentPassword: "",
    },
    //store data of current user    
    storeData(fullname, username, email, fb, contactNo, service1, service2, description, currentPassword) { this.currentUser.fullname = fullname; this.currentUser.username = username; this.currentUser.email = email; this.currentUser.fb = fb; this.currentUser.contactNo = contactNo; this.currentUser.service1 = service1; this.currentUser.service2 = service2; this.currentUser.description = description; this.currentUser.currentPassword = currentPassword; }, loginValidate(logemail, logpass) {
        if (logemail == this.currentUser.email && logpass == this.currentUser.pass) {            // this.currentUser.fname = this.Users[i].fname           
            // this.currentUser.lname = this.Users[i].lname            
            // this.currentUser.email = this.Users[i].email            
            // this.currentUser.pass = this.Users[i].pass            
            sessionStorage.setItem("token", true);
            this.err = false;
            router.push({ path: '/dashboard' })
        }
        else {
            //alert("MyFirstApp doesn't reconized your account")            
            sessionStorage.setItem("token", false);
            alert("MyFirstApp doesn't reconized your account")
            //this.err = true;        
        }
    },
    passwordValidation(password) {
        var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if (password.length > 8 && password.match(passw)) {
            this.passwordValid =1;
            //alert("password passed")       
        }
        else {
            alert("password not valid")
            this.passwordValid =0;
        }
    }
}












