<template>
    

<!-- <v-layout class="main"> -->
    <body>
   
      <!--  <nav>
       <ul class="nav-list">
        
       <li><a class="nav-links">resume</a></li>
       
       <li><a class="nav-links">projects</a></li>
       <li><a class="nav-links">contact</a></li>
       </ul>
   </nav> -->
   <v-layout row class="text-center">
       <v-flex class="item"><router-link to="/resume" class="link">resume</router-link></v-flex>
        <v-flex class="item"><router-link to="/projects" class="link">projects</router-link></v-flex>
        <!-- <v-flex class="item"><router-link to="/contact" class="link">contact</router-link></v-flex> -->
   </v-layout>

   <v-btn class="btn ml-10" to="/" fab dark small color="pink">
      <v-icon dark>mdi-home</v-icon>
    </v-btn>

   <main>

       <h1>Contact</h1>
       <v-layout row wrap class="text-center">
           <v-flex xs12 offset-sm3 sm6 class="contact">
               <h2>send me a message or ask prices</h2>

               <v-layout row wrap class="text-center">
                   
                   <v-flex sm5 offset-sm1 xs10 class="textfield">
                       <span>name</span>
                       <v-text-field
                       v-model="name"
                       background-color="grey"
                       class="green--text"
                       label="name"
                       solo
                       placeholder="name">
                       </v-text-field>
                   </v-flex>
                   <v-flex sm5 xs10 class="textfield">
                       <span>mail/phone</span>
                       <v-text-field
                       v-model="mailphone"
                       background-color="grey"
                       solo
                       placeholder="mail/phone">
                       </v-text-field>
                   </v-flex>
            

               </v-layout>

               <v-layout row class="mb-9">
                   <v-flex offset-sm1 xs9>
                       <span>message</span>
                       <v-text-field
                       v-model="message"
                       background-color="grey"
                       class="text-input-black"
                       solo
                       placeholder="message">
                       </v-text-field>
                       
                   </v-flex>
                   <v-btn @click="this.send" class="mt-7 ml-4" ><v-icon light>mdi-chevron-triple-right</v-icon></v-btn>
               </v-layout>
                   
            </v-flex>
        </v-layout>
    </main>
    </body>

</template>

<script>
import axios from 'axios';
export default {
    
    data () {
        return {
            name: '',
            mailphone: '',
            message: ''
        }
    },

    methods: {
        send() {
            axios.post('https://choolakejinendra.firebaseio.com/messages.json', {name: this.name, mailphone: this.mailphone, message: this.message})
            .then(response => {
                console.log(response)
            }).catch(er => {
                console.log(er)
            })
        }
    }
}
</script>



<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Abel&family=Lobster&family=Montserrat:wght@100&display=swap');
.main {
    margin: 0 auto;
    height: 100%;
    background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
}

body {
    margin: 0 auto;
    height: 100vh;
    background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);

}
.contact {
    height: 340px;
    /* width: 600px; */
    background-color: aqua;
    /* color: white; */
     
     box-shadow: 10px 10px 8px #888888;
     animation: blink 15s infinite;
     padding: 20px;
     color: black
}

/* .contact, .textfield {
    color: white
} */

.textfield {
    /* background-color: white; */
    /* height: 55px; */
    /* margin: 20px; */
    padding: 20px;
    color: green    
}

.text-input-blue .v-text-field__slot input {
   color: black !important;
}

.nav-list {
    /* display: ; */
    height: 10vh;
    display: flex;
    width: 50%;
    list-style: none;
    justify-content: space-evenly;
    margin-left: auto;
    align-items: center
    
}


.btn {
    position: fixed;
}
span {
    color: white;
    font-size: 16px;
    font-weight: bold
}
p {
    font-weight: bold;
    font-size: 15px
}
.img1 {
    border-radius: 10px;
    width: 200px;
    margin-top: 20px
}
.nav-links {
    text-decoration: none;
    color: white;
    font-size: 18px

}
.link {
    text-decoration: none;
    color: white
}
.item {
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    color: white
}

@media only screen and (max-width: 450px){
    .contact {
    height: auto;
    /* width: 400px; */
    background-color: aqua;
    color: white;
     box-shadow: 10px 10px 8px #888888;
     padding: 20px;
    margin: 20px;
}
}

@keyframes blink {
    0% {box-shadow: 0px 10px 8px #888888}
    20% {box-shadow: 10px 0px 8px #888888}
    40% {box-shadow: 10px 10px 0px #888888}
        60% {box-shadow: 10px 0px 8px #888888}
            80% {box-shadow: 0px 10px 8px #888888}
            100% {box-shadow: 10px 0px 8px #888888}


}

</style>