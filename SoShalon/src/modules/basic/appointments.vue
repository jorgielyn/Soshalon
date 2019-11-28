<template>
  <div id="dashboard">
  <Header2></Header2>

    <!-- search area -->
    <serviceProviderCard></serviceProviderCard>
  </div>
</template>

<script>
import Header2 from "components/frame/Header2.vue";
import Sidebar from "components/frame/Sidebar.vue";
import AUTH from "services/auth";
import { METHODS } from 'http';
import { format } from 'path';
export default {
  components:{
    Header2
  },
  data() {
    return {
      selected: "",
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "Nail Polish" },
        { value: "b", text: "Hair Cut" }
      ],
      text: ""
      }
      },
      methods:{
      format(value, event){
        return value.toLowerCase()
      }
    }
  };
</script>
<style>
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
  margin-top:-5px;
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