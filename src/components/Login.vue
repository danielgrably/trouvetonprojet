<template>

  <form action="login.php" method="post" >
  <div class="outer-div">
    <fieldset>
      <h2 class="login-heading">Authentification</h2>
      <legend>Vos coordonnées :</legend>
      <div class="form-control">
        <label for="text">Identifiant</label>
        <input type="text" name="username" id="username" class="login-input" v-model="username" />
      </div>
      <div class="form-control mb-more">
        <label for="password">Mot de passe</label>
        <input type="password" name="password" id="password" class="login-input" v-model="password" />
      </div>
      <p><br>
        <input type="submit" value="Envoyer" />
        <input type="reset" value="Annuler" />
      </p>
    </fieldset>
  </div>

  </form>
  <!--
    <div class="login-form">
        <h2 class="login-heading">Authentification</h2>
        <form action="#" @submit.prevent="login">

            <div class="form-control">
                <label for="text">Username</label>
                <input type="text" name="username" id="username" class="login-input" v-model="username" />
            </div>

            <div class="form-control mb-more">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" class="login-input" v-model="password" />
            </div>
        </form>
    </div>
    -->
</template>

<style>
form {
 background-color:#FAFAFA;
 padding:10px;
 width:300px;
 }
fieldset {
 padding:0 20px 20px 20px;
 margin-bottom:10px;
 border:1px solid #DF3F3F;
 }
legend {
 color:#DF3F3F;
 font-weight:bold
 }
label {
 margin-top:10px;
 display:block;
 }
input, textarea, select, option {
 background-color:#FFF3F3;
 }
input, textarea, select {
 padding:3px;
 border:1px solid #F5C5C5;
 border-radius:5px;
 width:250px;
 box-shadow:1px 1px 2px #C0C0C0 inset;
 }
input[type=submit], input[type=reset] {
 width:100px;
 margin-left:5px;
 box-shadow:1px 1px 1px #D83F3D;
 cursor:pointer;
 }
 .outer-div{
   margin-left: 100px;
 }
</style>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('retrieveToken', {
        username: this.username,
        password: this.password
      })
    }
  }
}
</script>
