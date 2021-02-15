<template>
    <ion-page>
        <div class="vue-tempalte">
            <form @submit.prevent="forgetPassword">
                <h3>Forgot Password</h3>

                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control form-control-lg" v-model="user.email" />
                </div>

                <button type="submit" class="btn btn-dark btn-lg btn-block">Reset password</button>
            </form>
        </div>
    </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import firebase from "firebase";

export default defineComponent ({
  data() {
    return {
      user: {   
        email: ''
      }
    };
  },
  methods: {
    forgetPassword() {
        firebase
        .auth()
        .sendPasswordResetEmail(this.user.email)
        .then(() => {
            alert('Check your registered email to reset the password!')
            this.user = {   
              email: ''
            }
        }).catch((error) => {
          alert(error)
        })
    }
  }
});
</script>