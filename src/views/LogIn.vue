<template>
    <ion-page>
    <div class="vue-tempalte">
        <form @submit.prevent=userLogin>
            <h3>Sign In</h3>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" v-model="user.email" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" v-model="user.password" />
            </div>

            <ion-button type="submit" v-on:click.prevent class="btn btn-dark btn-lg btn-block">Sign In</ion-button>

            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/ForgotPassword">Forgot password ?</router-link>
            </p>
        </form>
    </div>
    </ion-page>
</template>


<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import firebase from "firebase";

export default defineComponent({
  name: 'LogIn',
  components: {
    // IonContent,
    // IonHeader,
    IonButton,
    IonPage,
    // IonTitle,
    // IonToolbar
  },
  data() {
    return {
      user: {   
        email: '',
        password: ''
      }
    };
  },
  methods: {
    userLogin() {
      console.log(this.user)
      console.log("here")
        firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
          console.log("jere")
          this.$router.push({path: '/ActualHome'})
        })
        .catch((error) => {
          alert(error.message);
          console.log(error)
        });
    }
  }
});
</script>