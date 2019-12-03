<template>
  <div>
    <Header2></Header2>
    <link
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
      rel="stylesheet"
    >
    <br>
    <br>
    <div class="container">
      <div class="row flex-lg-nowrap">
        <div class="col">
          <div class="row">
            <div class="col mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="e-profile">
                    <div class="row">
                      <div class="col-12 col-sm-auto mb-3">
                        <div class="mx-auto" style="width: 140px;">
                          <div
                            class="d-flex justify-content-center align-items-center rounded"
                            style="height: 140px; background-color: rgb(233, 236, 239);"
                          >
                            <img src class="image" id="img">
                          </div>
                        </div>
                      </div>
                      <div class="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                        <div class="text-center text-sm-left mb-2 mb-sm-0">
                          <h4 class="pt-sm-2 pb-1 mb-0 text-nowrap">{{this.fullname}}</h4>
                          <p class="mb-0">{{this.username}}</p>
                          <p class="mb-0">{{this.email}}</p>
                          <div class="input-group">
                            <form @submit.prevent="onSubmit" enctype="multipart/form-data">
                              <div class="fields">
                                <label id="service">Upload File</label>
                                <br>
                                <input type="file" ref="file" @change="onSelect()">
                              </div>
                              <div class="fields">
                                <button >Submit</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-content pt-3">
                      <div class="tab-pane active">
                        <form class="form" onsubmit="event.preventDefault();">
                          <div class="row">
                            <div class="col">
                              <!-- trying to put in a column -->
                              <b-container>
                                <b-row>
                                  <b-col cols="5">
                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <label id="service">Full Name</label>
                                          <input
                                            class="form-control"
                                            type="text"
                                            name="name"
                                            v-model="input.fullname"
                                            :placeholder="[[ this.fullname ]]"
                                          >
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col">
                                        
                                        <div class="form-group">
                                          <label id="service">Username</label>
                                          <input
                                            class="form-control"
                                            type="text"
                                            name="username"
                                            v-model="input.username"
                                            :placeholder="[[ this.username ]]"
                                          >
                                        </div>
                                      </div>
                                    </div>

                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <label id="service">Email</label>
                                          <input
                                            class="form-control"
                                            type="text"
                                            v-model="input.email"
                                            :placeholder="[[this.email]]"
                                          >
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <label id="service">Facebook Messenger</label>
                                          <input
                                            class="form-control"
                                            type="text"
                                            v-model="input.fb"
                                            :placeholder="[[this.fb]]"
                                          >
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <label id="service">Contact number</label>
                                          <input
                                            class="form-control"
                                            type="text"
                                            v-model="input.contactNo"
                                            :placeholder="[[this.contactNo]]"
                                          >
                                        </div>
                                      </div>
                                    </div>

                                    <div class="container">
                                      <b id="appointment">What service/s do you offer?</b>
                                      <br>
                                      <label class="checkbox-inline">
                                        <input
                                          type="checkbox"
                                          value="NailPolish"
                                          v-model="input.service1"
                                          :placeholder="[[this.service1]]"
                                        >Nail Polish
                                      </label>
                                      <br>
                                      <label class="checkbox-inline">
                                        <input
                                          type="checkbox"
                                          value="Haircut"
                                          v-model="input.service2"
                                          :placeholder="[[this.service2]]"
                                        >Hair cut
                                      </label>
                                    </div>
                                  </b-col>
                                  <!-- bigger -->
                                  <b-col cols="7">
                                    <div class="row">
                                      <b id="appointment">Set your Schedule</b>
                                      <br>
                                      <div class="col">
                                        <div class="form-group">
                                          <label id="appointment">From</label>
                                          <div class="row">
                                            <div class="col">
                                              <div class="form-group">
                                                <label id="service">Date:</label>
                                                <input
                                                  class="form-control"
                                                  type="date"
                                                  placeholder
                                                  v-model="input.date"
                                                >
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      
                                       <div class="col">
                                      <div class="form-group">
                                         <label id="appointment">From</label>
                                         <div class="row">
                                        <label id="service">Time:</label>
                                        <input
                                          class="form-control"
                                          type="time"
                                          placeholder
                                          v-model="input.time"
                                        >
                                      </div>
                                    </div>
                                    </div>
                                    </div>
                                   
                                    <div>
                                      <b id="appointment">Change Password</b>
                                    </div>
                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <label id="service">Current Password</label>
                                          <input
                                            class="form-control"
                                            type="password"
                                            placeholder=" "
                                            v-model="input.currentPassword"
                                          >
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <label id="service">New Password</label>
                                          <input
                                            class="form-control"
                                            type="password"
                                            placeholder
                                            v-model="input.newPassword"
                                          >
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <label id="service">
                                            Confirm
                                            <span class="d-none d-xl-inline" id="service">Password</span>
                                          </label>
                                          <input
                                            class="form-control"
                                            type="password"
                                            placeholder
                                            v-model="input.ConfirmPassword"
                                          >
                                        </div>
                                      </div>
                                    </div>
                                  </b-col>
                                </b-row>
                              </b-container>
                              <!-- trying to put in a column -->

                              <div class="row">
                                <div class="col mb-3">
                                  <div class="form-group">
                                    <label id="appointment">About</label>
                                    <textarea
                                      v-model="input.description"
                                      :placeholder="[[this.description]]"
                                      class="form-control"
                                      rows="5"
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="row">
                            <div class="col-12 col-sm-6 mb-3">
                              <div class="mb-2"></div>

                              <b id="appointment">Mark check to post Profile</b>
                              <br>
                              <label class="checkbox-inline">
                                <input
                                  type="checkbox"
                                  value="true"
                                  v-model="input.postCheck"
                                  :placeholder="[[this. postCheck]]"
                                >Post Profile
                              </label>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col d-flex justify-content-end">
                              <button
                                type="submit"
                                class="btn btn-primary"
                                v-on:click="updateProfile()"
                              >Save Changes</button>
                            </div>
                            <div class="col d-flex justify-content-end">
                              <button
                                type="submit"
                                class="btn btn-primary"
                                v-on:click="cancel()"
                              >cancel</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <br>
  </div>
</template>
<script>
import $ from "jquery";
import Header2 from "components/frame/Header2.vue";
import AUTH from "services/auth";
import axios from "axios";
import router from "router";
sessionStorage.setItem("token", false);
export default {
  name: "profile",
  data() {
    return {
      file: "",
      fullname: "",
      email: "",
      username: "",
      fb: "",
      contactNo: "",
      service1: "",
      service2: "",
      description: "",
      password: "",
      img: "",
      postCheck: "",
      time: "",
      input: {
        fullname: "",
        username: "",
        email: "",
        fb: "",
        contactNo: "",
        service1: "",
        service2: "",
        description: "",
        currentPassword: "",
        newPassword: "",
        ConfirmPassword: "",
        postCheck: "",
        time: ""
      }
    };
  },
  components: {
    Header2
  },
  mounted() {
    axios.get("http://localhost:3000/profile").then(response => {
      //this.username = response.data.data.username
      for (var i in response.data.data) {
        this.username = response.data.data[i].username;
        this.fullname = response.data.data[i].fullname;
        this.email = response.data.data[i].email;
        this.fb = response.data.data[i].fb;
        this.contactNo = response.data.data[i].contactNo;
        this.service1 = response.data.data[i].service1;
        this.service2 = response.data.data[i].service2;
        this.description = response.data.data[i].description;
        this.password = response.data.data[i].password;
      }
    });
  },
  methods: {
    cancel() {
       router.push({ path: "/dashboard" });
       this.$swal({
        title: "Are you sure?",
        text: "You can't revert your action",
        type: "warning",
        // showCancelButton: true,
        confirmButtonText: "Yes Cancel it!",
        // cancelButtonText: "No, Keep it!",
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then(result => {
        if (result.value) {
          this.$swal(
            "Cancelled",
            "You successfully cancelled your update",
            "success"
          );
        } else {
          this.$swal("Cancelled", "Your file is still intact", "info");
        }
      });
    },
    updateProfile() {
      if (this.input.fullname == "") {
        this.input.fullname = this.fullname;
      }
      if (this.input.fb == "") {
        this.input.fb = this.fb;
      }
      if (this.input.contactNo == "") {
        this.input.contactNo = this.contactNo;
      }
      if (this.input.service1 == "") {
        this.input.service1 = this.service1;
      }
      if (this.input.service2 == "") {
        this.input.service2 = this.service1;
      }
      if (this.input.description == "") {
        this.input.description = this.description;
      }
      if (this.input.Password == "") {
        this.input.Password = this.Password;
      }
      var data = {
        fullname: this.input.fullname,
        fb: this.input.fb,
        contactNo: this.input.contactNo,
        service1: this.input.service1,
        service2: this.input.service2,
        description: this.input.description,
        Password: this.input.newPassword,
        email: this.input.email,
        username: this.input.username,
        imagepath: this.img
      };

      if (this.input.newPassword != "") {
        AUTH.passwordValidation(this.input.newPassword);
        if (AUTH.passwordValid == 1) {
          if (this.input.newPassword == this.input.ConfirmPassword) {
            axios.post("http://localhost:3000/updateProfile", data).then(
              response => {
                if (response.data.message == "ok") {
                  console.log("ok");
                  //router.push({ path: "/login" });
                }
              },
              err => {
                console.log(err);
              }
            );
          } else {
            alert("Password did not match");
          }
        }
      } else {
        var data2 = {
          fullname: this.input.fullname,
          fb: this.input.fb,
          contactNo: this.input.contactNo,
          service1: this.input.service1,
          service2: this.input.service2,
          description: this.input.description,
          email: this.input.email,
          username: this.input.username,
          Password: this.password,
          imagepath: this.img
        };
        axios.post("http://localhost:3000/updateProfile", data2).then(
          response => {
            if (response.data.message == "ok") {
              console.log("ok");
              //router.push({ path: "/login" });
            }
          },
          err => {
            console.log(err);
          }
        );
        this.$swal({
        type: "success",
        title: "SUCCESS!",
        text: "Your profile has been updated!"
      });
      }
    },
    onSelect() {
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      const file = this.$refs.file.files[0];
      this.file = file;
      if (!allowedTypes.includes(file.type)) {
        this.message = "Filetype is wrong!!";
      }
      if (file.size > 500000) {
        this.message = "Too large, max size allowed is 500kb";
      }
      var img = URL.createObjectURL(file);
      //this.file = img;
      $("#img").attr("src", img);
    },
    async onSubmit() {
      const formData = new FormData();
      formData.append("file", this.file);
      try {
        await axios
          .post("http://localhost:3000/upload", formData)
          .then(response => {
            this.img = response.data.file.path;
            //console.log(response.data.file)
          });
      } catch (err) {
        console.log(err);
        this.message = err.response.data.error;
      }
    }
  }
};
</script>
<style scoped>
.image {
  width: 140px;
  height: 140px;
}
body {
  margin-top: 20px;
  background: #f8f8f8;
}
#appointment {
  color: #ff3377;
  font-weight: bold;
  font-family: "Times New Roman", Times, serif;
  text-align: center;
}
#service {
  color: #00bcd4;
  font-weight: bold;
}
</style>


       



