<template>
  <div class="body">
    <div class="welcome">
      <span class="welcomeheader">Hello, Friend!!!!</span>
      <div class="text">To keep connected to us please give us your personal info.</div>
      <b-button pill variant="outline-light" class="welcomebtn"> Sign In</b-button>
    </div>
    <div class="main">
      <span class="header">Create Account</span>
      <b-form  id="form">
        <b-form-group id="input-group-1">
          <b-form-input
            id="input"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-form-group>
          <b-form-input id="input" v-model="form.name" required placeholder="Enter name"></b-form-input>
        </b-form-group>

        <b-form-group>
          <b-form-input id="input" v-model="form.password" required type="password" placeholder="Password"></b-form-input>
        </b-form-group>
        <b-button pill class="mainbtn" @click="signUp()">Sign Up</b-button>
      </b-form>
    </div>
  </div>
</template>
<style scoped>
.body {
  display: flex;
  padding-top: 0%;
}
.welcome {
  width: 40%;
  height: 101.1vh !important;
  background-color: rgb(24, 179, 127);
  color: #ffffff;
  margin-top: -5%;
  padding-top: 15%;
}
.welcomeheader {
  font-size: 38px;
  font-family: "Patua One", cursive;
}
.text {
  font-size: 24px;
  font-family: "Patua One", cursive;
  margin-top: 3%;
}
.welcomebtn{
  padding-top: 2.5%;
  padding-bottom: 2.5%;
  padding-right: 13%;
  padding-left: 13%;
  margin-top: 10%;
}
.main {
  width: 60%;
  padding-top: 5%;
}
.header {
  font-size: 38px;
  color: rgb(24, 179, 127);
  font-family: "Patua One", cursive;
}
#form {
  width: 75%;
  padding: 5%;
  margin: auto;
}
#input {
  height: 50px;
  background-color: rgb(239, 235, 247);
  /* width: 90%; */
  margin: auto;
}
.mainbtn{
  background-color: rgb(24, 179, 127);
  color: #ffffff;
  padding-top: 2.5%;
  padding-bottom: 2.5%;
  padding-right: 13%;
  padding-left: 13%;
}
@media screen  and (max-width: 600px){
  .welcome{
    display: none;
  }
  .main{
    width: 100%;
    padding-top: 15%;
  }
  #form{
    width: 97%;
    margin-top: 10%;
  }
  .header{
    margin-bottom: 10%;
  }
  .mainbtn{
    width: 100%;
  }
}
</style>
<script>
import { auth } from '../firebase/firebase.js'
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        password: ""
      },
    };
  },
  methods: {
    signUp() {
      auth.createUserWithEmailAndPassword(this.form.email, this.form.password).then(() => {
        this.$store.dispatch("uploadUserData", this.form)
      })
    }
  }
};
</script>