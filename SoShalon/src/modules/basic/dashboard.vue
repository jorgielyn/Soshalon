<template>
  <div id="dashboard">
    <Header2></Header2>
    <serviceProviderCard></serviceProviderCard>
  </div>
</template>

<script>
import serviceProviderCard from "components/card/card.vue";
import Header2 from "components/frame/Header2.vue";
import AUTH from "services/auth";
import { METHODS } from "http";
import { format } from "path";
import router from 'router';
export default {
  components: {
    Header2,
    serviceProviderCard
  },
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "Nail Polish" },
        { value: "b", text: "Hair Cut" }
      ],
      text: ""
    };
  },
  methods: {
    format(value, event) {
      return value.toLowerCase();
    }
  }
};
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
.card {
  position: relative;
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  margin-top: 25px;
  margin-left: 25px;
  min-width: 0;
  word-wrap: break-word;
  background-color: rgba(0, 0, 0, 0.9);
  background-clip: border-box;
  border: 0 solid rgba(0, 0, 0, 0.125);
  border-radius: 0;
  color: white;
}
hr {
  color: white;
}
</style>