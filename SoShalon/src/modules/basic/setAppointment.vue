<template>
  <div id="setAppointment">
  <Header2></Header2>
    <link
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
      rel="stylesheet"
    />
    <br />
    <br />
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
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                        <div class="text-center text-sm-left mb-2 mb-sm-0">
                          <h4 class="pt-sm-2 pb-1 mb-0 text-nowrap">{{this.fullname}}</h4>
                          <p class="mb-0">@Kath</p>
                          <p class="mb-0">{{this.address}}</p>
                          <p class="mb-0">{{this.service}}</p>
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
                                  <label id="appointment">APPOINTMENT DETAILS</label>
                                  <div>
                                    <label id="service">Service:</label>
                                    <b-col sm="8">
                                      <b-form-select v-model="selectedItem">
                                        <option value="Nail Polish">Nail Polish</option>
                                        <option value="Haircut">Haircut</option>
                                      </b-form-select>
                                      <!-- <div>
                                        <strong>{{ selectedItem }}</strong>
                                      </div>-->
                                    </b-col>
                                  </div>
                                </div>
                                <div class="col">
                                  <label id="appointment">PERSONAL DETAILS</label>
                                  <div class="form-group">
                                    <label id="service">Home Address:</label>
                                    <input
                                      class="form-control"
                                      type="text"
                                      name="username"
                                      placeholder="Enter home address"
                                      value
                                      v-model="input.username"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label id="service">Date:</label>
                                    <input
                                      class="form-control"
                                      type="date"
                                      placeholder
                                      v-model="input.date"
                                    />
                                  </div>
                                </div>
                                <div class="col">
                                  <label id="appointment">CONTACT DETAILS</label>
                                  <div class="form-group">
                                    <label id="service">Contact number:</label>
                                    <input
                                      class="form-control"
                                      type="phone"
                                      placeholder="Enter phone number"
                                      v-model="input.contactNo"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="container">
                                  <b id="service">Time</b>
                                  <br />
                                  <label class="checkbox-inline">
                                    <input type="checkbox" value=" " v-model="input.service1" />9:00-10:00
                                  </label>
                                  <br />
                                  <label class="checkbox-inline">
                                    <input type="checkbox" value=" " v-model="input.service2" />1:00-2:00
                                  </label>
                                </div>
                                <div class="col col-sm-6 mb-3">
                                  <div class="form-group">
                                    <label id="service">Messenger:</label>
                                    <input
                                      class="form-control"
                                      type="messenger"
                                      placeholder="Add messenger here..."
                                      v-model="input.messenger"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col mb-3">
                                  <div class="form-group">
                                    <label id="service">Description:</label>
                                    <textarea
                                      v-model="input.description"
                                      class="form-control"
                                      rows="5"
                                      placeholder="Add description bere..."
                                    ></textarea>
                                  </div>
                                </div>
                                <br />
                                <br />
                                <br />
                                <br />
                                <div class="col mb-3">
                                  <div class="col d-flex justify-content-end">
                                    <button v-on:click="alertDisplay1" class="btn btn-danger">CANCEL</button>
                                    <br />
                                    <br />
                                    <button v-on:click="alertDisplay" class="btn btn-info">SUBMIT</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <!-- <div class="row"> -->

                          <!-- </div> -->
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
    <br />
    <br />
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
import Header2 from "components/frame/Header2.vue";
import AUTH from "services/auth";
import { constants } from "fs";
import axios from "axios";
import router from "router";
import { type } from "os";
sessionStorage.setItem("token", false);
export default {
  components:{
    Header2
  },
  name: "profile",
  data() {
    return {
      fullname: "sample",
      input: {
        fullname: "",
        username: "",
        date: "",
        time: "",
        messenger: "",
        text: "",
        phone: "",
        description: "",
        selectedItem: ""
      }
    };
  },
  methods: {
    alertDisplay() {
      // $swal function calls SweetAlert into the application with the specified configuration.
      // this.$swal('SUBMITTED', 'Your Appointment is Submmitted!', 'OK');
      this.$swal({
        type: "success",
        title: "SUCCESS!",
        text: "Your appointment has been submitted"
      });
    },
    alertDisplay1() {
      this.$swal({
        title: "Are you sure?",
        text: "You can't revert your action",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes Delete it!",
        cancelButtonText: "No, Keep it!",
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then(result => {
        if (result.value) {
          this.$swal(
            "Deleted",
            "You successfully deleted this file",
            "success"
          );
        } else {
          this.$swal("Cancelled", "Your file is still intact", "info");
        }
      });
    }
  }
};
</script>
<style scoped>
body {
  background-image: url("https://png.pngtree.com/thumb_back/fw800/background/20190223/ourmid/pngtree-dark-purple-geometric-minimalist-background-effectgradientbusiness-image_87387.jpg");
}
#logo {
  width: 200px;
  height: auto;
}
.bg-dark {
  background-color: black !important;
}
#notify {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 1449px;
  top: 25px;
}
#profile {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 1517px;
  top: 27px;
  border: 2px solid #ffff;
  border-radius: 50px;
}
h4 {
  color: #00bcd4;
}
p {
  color: #00bcd4;
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