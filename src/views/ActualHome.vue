<template>
    <ion-page>
        <div class="vue-tempalte">
            <h3>Welcome</h3>
            <p>{{user.displayName}}</p>
            <p>{{user.email}}</p>
            
            <button 
            type="submit" 
            class="btn btn-dark btn-lg btn-block"
            @click="logOut()">
                Log out
            </button>
        </div>
    </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import firebase from "firebase";

export default defineComponent({
  data() {
    return {
      user: null
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
  methods: {
    logOut() {
      firebase.auth().signOut().then(() => {
        firebase.auth().onAuthStateChanged(() => {
          this.$router.push('/login')
        })
      })
    }
  }
});
</script>