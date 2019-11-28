<template>
    <div id = "header">
        <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand @click = "dashboard()">
          <img id="logo" src="/logo.png" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="ml" class="mb-3" placeholder="Enter address"></b-form-input>
            </b-nav-form>

            <b-nav-item>
              <b-form-select  class="mb-3">
                <option :value="null">Please select an option</option>
                <option value="a">Nail Polish</option>
                <option value="b">Hair Cut</option>
              </b-form-select>
            </b-nav-item>

            <b-nav-item>
              <b-button pill variant="info" v-on:click="search()">Search</b-button>
            </b-nav-item>
            <img id="profile" src="/profile.jpeg" />
            <b-nav-item-dropdown
              id="my-nav-dropdown"
              toggle-class="nav-link-custom"
              right
            >
            <img id="editprofile" src="/profile.jpeg" />
            <p>Ashley Faith Benitez <br> @ashley01</p>
            <b-button variant="info" @click ="editprofile()">Edit</b-button>
            <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item  @click ="viewAppointments()">VIEW APPOINTMENTS</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item  href="/logout" @click ="logout()">SIGN OUT</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
</template>
<script>
import router from "router"
export default {
    methods:{
        format(value, event) {
            return value.toLowerCase();
        },
        editprofile(){
            router.push({ path: "/profile" });
        },
        logout(){
            router.push({ path: "/login" });
        },
        viewAppointments(){
            router.push({ path: "/appointments" });
        },
        dashboard(){
            router.push({ path: "/dashboard" });
        }
    }
}
</script>
<style>
    .mb-3,
.my-3 {
  margin-bottom: 0rem !important;
}
.mb-3,
.my-3 {
  margin-bottom: 1rem !important;
}
#logo {
  width: 200px;
  height: auto;
}
.bg-dark {
  background-color: black !important;
}
#notify {
  width: 50px;
  height: 50px;
}
#profile {
  width: 50px;
  height: 50px;
  border: 2px solid #ffff;
  border-radius: 50px;
}
#editprofile{
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border:2px solid #ffff;
  margin-left:-1px;
}
.dropdown-menu {
    top: 100%;
    z-index: 1000;
    min-width: 16rem;
    padding: 0.5rem 0;
    margin: 0.125rem 0 0;
    font-size: 1rem;
    color: white;
    text-align: center;
    list-style: none;
    background-color: #000;
    background-clip: padding-box;
    border: 2px solid #f8f9fa;
    border-radius: 0.25rem;
}
#search {
  background-color: rgba(0, 0, 0, 0.3);
}
.search-btn {
  background-color: rgba(0, 188, 212, 0.8);
  border-radius: 25px;
  border-color: #00bcd4;
  width: 110px;
  height: 35px;
  margin-left: 4%;
  color: #fff;
}
.btn-secondary {
  color: #545b62;
  background-color: rgba(255, 255, 255, 0.8);
  margin-left: 665%;
}
.btn-secondary:hover {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.8);
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 13px;
  font-weight: 200;
  line-height: 1.4;
  color: #212529;
  text-align: left;
  background-color: #fff;
  background-image: url("/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
#address {
  width: 195px;
  margin-left: 65%;
}
</style>