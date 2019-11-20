<template>
  <div>
    <Header></Header>
    <!-- <Sidebar></Sidebar> -->
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
                            <!-- <span style="color: rgb(166, 168, 170); font: bold 8pt Arial;" class="image" src="">140x140</span> -->
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_h1-ndFdLmk7IIzAoADDo1GqzkdAXqI48XTKKuDyhBe5ZEH-R&s"
                              class="image"
                            >
                          </div>
                        </div>
                      </div>
                      <div class="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                        <div class="text-center text-sm-left mb-2 mb-sm-0">
                          <h4 class="pt-sm-2 pb-1 mb-0 text-nowrap">{{this.fullname}}</h4>
                          <p class="mb-0">{{this.username}}</p>
                          <p class="mb-0">{{this.email}}</p>
                          <div class="input-group">
                            <div class="custom-file">
                              <i class="fa fa-fw fa-camera"></i>
                              <input type="file" id="inputFile">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-content pt-3">
                      <div class="tab-pane active">
                        <form class="form" novalidate>
                          <div class="row">
                            <div class="col">
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label>Full Name</label>
                                    <input
                                      class="form-control"
                                      type="text"
                                      name="name"
                                      v-model="input.fullname"
                                      :placeholder="[[ this.fullname ]]"
                                    >
                                  </div>
                                </div>
                                <div class="col">
                                  <div class="form-group">
                                    <label>Username</label>
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
                                    <label>Email</label>
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
                                    <label>Facebook Messenger</label>
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
                                    <label>Contact number</label>
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
                                <b>What service/s do you offer?</b>
                                <br>
                                <label class="checkbox-inline">
                                  <input type="checkbox" value=" " v-model="input.service1" :placeholder="[[this.service1]]">Nail Polish
                                </label>
                                <br>
                                <label class="checkbox-inline">
                                  <input type="checkbox" value=" " v-model="input.service2" :placeholder="[[this.service2]]">Hair cut
                                </label>
                              </div>
                              <div class="row">
                                <div class="col mb-3">
                                  <div class="form-group">
                                    <label>About</label>
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
                            <b>Set your Schedule</b>
                            <br>
                            <div class="col">
                              <div class="form-group">
                                <label>From</label>
                                <input class="form-control" type="text" placeholder value>
                              </div>
                            </div>
                            <div class="col">
                              <div class="form-group">
                                <label>To</label>
                                <input class="form-control" type="text" name placeholder value>
                              </div>
                            </div>
                          </div>

                          <div class="row">
                            <div class="col-12 col-sm-6 mb-3">
                              <div class="mb-2">
                                <b>Change Password</b>
                              </div>
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label>Current Password</label>
                                    <input
                                      class="form-control"
                                      type="password"
                                      placeholder="••••••"
                                      v-model="input.currentPassword"
                                    >
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label>New Password</label>
                                    <input
                                      class="form-control"
                                      type="password"
                                      placeholder="••••••"
                                      v-model="input.newPassword"
                                    >
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label>
                                      Confirm
                                      <span class="d-none d-xl-inline">Password</span>
                                    </label>
                                    <input
                                      class="form-control"
                                      type="password"
                                      placeholder="••••••"
                                      v-model="input.ConfirmPassword"
                                    >
                                  </div>
                                </div>
                              </div>
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
$(function() {
  $("#inputFile").change(function(e) {
    var img = URL.createObjectURL(e.target.files[0]);
    $(".image").attr("src", img);
  });
});

import Header from "components/frame/Header.vue";
//import Sidebar from "components/frame/Sidebar.vue";
import AUTH from "services/auth";
import { constants } from "fs";
import axios from "axios";
import router from "router";
sessionStorage.setItem("token", false);

export default {
  name: "profile",
  data() {
    return {
      fullname: AUTH.currentUser.fullname,
      email: AUTH.currentUser.email,
      username: AUTH.currentUser.username,
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
        ConfirmPassword: ""
      }
    };
  },
  components: {
    Header
    //Sidebar
  },
  methods: {
    updateProfile() {
      //console.log(AUTH.fullname)
      var data = {
        fullname: this.input.fullname,
        fb: this.input.fb,
        contactNo: this.input.contactNo,
        service1: this.input.service1,
        service2: this.input.service2,
        description: this.input.description,
        currentPassword: this.input.currentPassword,
        newPassword: this.input.newPassword,
        ConfirmPassword: this.input.ConfirmPassword,
        email: this.input.email,
        username: this.input.username
      };
      AUTH.passwordValidation(this.input.newPassword);
      if (AUTH.passwordValid == 1) {
        if (this.input.newPassword == this.input.ConfirmPassword) {
          axios.post("http://localhost:3000/updateProfile", data).then(
            //console.log("fdf")

            response => {
              if (response.data.message == "ok") {
                console.log("ok");
                router.push({ path: "/login" });
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
</style>


       



