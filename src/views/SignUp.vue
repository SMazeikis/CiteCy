<template>
    <ion-page>
      <ion-header>
      <ion-toolbar>
        <ion-title>Sign Up</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <div class="vue-tempalte">
            <form @submit.prevent="userRegistration">
                <h3>Sign Up</h3>

                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control form-control-lg" v-model="user.name" />
                </div>

                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control form-control-lg" v-model="user.email" />
                </div>

                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control form-control-lg" v-model="user.password" />
                </div>

                <button type="submit" class="btn btn-dark btn-lg btn-block">
                Sign Up
                </button>

                <p class="forgot-password text-right">
                    Already registered 
                    <router-link :to="{name: 'SignIn'}">sign in?</router-link>
                </p>
            </form>
        </div> 
       
      </ion-card>
    </ion-content>
    </ion-page>
</template>


<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import firebase from "firebase";

export default defineComponent ({
  name: 'SignUp',
  components: {
    // IonContent,
    // IonHeader,
    IonPage,
    // IonTitle,
    // IonToolbar
  },
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    userRegistration() {
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.user.email, this.user.password)
      .then((res) => {
        res.user
          .updateProfile({
            displayName: this.user.name
          })
          .then(() => {
            this.$router.push('/ActualHome')
          });
      })
      .catch((error) => {
         alert(error.message);
      });
    }
  },
});
</script>