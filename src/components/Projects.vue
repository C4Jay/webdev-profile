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
        <!-- <v-flex class="item"><router-link to="/projects" class="link">projects</router-link></v-flex> -->
        <v-flex class="item"><router-link to="/contact" class="link">contact</router-link></v-flex>
   </v-layout>

   <v-btn to="/" class="btn ml-10" fab dark small color="pink">
      <v-icon dark>mdi-home</v-icon>
    </v-btn>

   <main>

       <h1>projects</h1>
       <v-flex xs12 class="text-center">
     <h4>Visit Sri Lanka app is live on Google play store</h4>
     <a href='https://play.google.com/store/apps/details?id=com.tripproject.tripproject&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img class="google" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
     </v-flex>
       <v-layout row wrap class="text-center">
           <v-flex xs12 offset-sm2 sm4 class="project">
              <h4> Can I Run It</h4>
               <p>Can I Run It is a web app where you can test system requirements of 10000+ games since 2000's.This project was done by me and one of my friends.I used React to build the frontend of the website.The best part is we didn't use any existing API's for our system.We created several API's ourselves while building this project.One for the games list, and one for CPU, GPU, RAM scores.Users can select any game they want from our huge list and fill their machine details and our system tells how good that game would perform on that machine respective to each hardware(processor, ram, gpu).In the near future we will gfinish the module where users can get an estimate for pc builds in regards to prices from online sellers.00</p>
               <h5>React, Node, Mongo, Firebase, Python</h5>
               <div class="mt-4">
               <v-btn href="https://github.com/CanIRunIt" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-github</v-icon>
    </v-btn>
    <v-btn href="https://imgstore-e819d.firebaseapp.com/" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-monitor-eye</v-icon>
    </v-btn>
               </div>
               </v-flex>

               <v-flex xs12 sm4 class="project">
              <h4> Can I Run It mobile</h4>
               <p>Can I Run It mobile is the mobile app where you can test system requirements of 10000+ games since 2000's.This project was done by me and one of my friends.I used React to build the frontend of the website.The best part is we didn't use any existing API's for our system.We created several API's ourselves while building this project.One for the games list, and one for CPU, GPU, RAM scores.Users can select any game they want from our huge list and fill their machine details and our system tells how good that game would perform on that machine respective to each hardware(processor, ram, gpu).In the near future we will gfinish the module where users can get an estimate for pc builds in regards to prices from online sellers.00</p>
               <h5>React Native, Node, Mongo, Firebase, Python</h5>
               <div class="mt-4">
               <v-btn href="https://github.com/CanIRunIt" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-github</v-icon>
    </v-btn>
    <v-btn @click="this.showbox" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-monitor-eye</v-icon>
    </v-btn>
    <v-flex v-if="show" class="text-center" xs12>scan to get the android apk<v-flex class="text-center"><v-img class="qrimg" src="https://i.imgur.com/tOIr2ze.png"></v-img></v-flex></v-flex>
               </div>
               </v-flex>

               <v-flex xs12 offset-sm2 sm4 class="project">
               <h4>Visit Sri Lanka web app</h4>
               <p>This is the official web site for my visit sri lanka mobile app.I created visit sri lanka is a travelling app.It can be used by anyone who wishes to travel in Sri Lanka.The app provides a large number of attractions around the island.(I also try to add new places often).The app lists the places according to distance from user to each site.The app also provides the feature to create a favorites list so users can take as much out of their time in sri lanka.</p>
               <h5>React , Firebase</h5>
               <div class="mt-4">
               <v-btn href="https://github.com/C4Jay/visit-sri-lanka" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-github</v-icon>
    </v-btn>
    <v-btn href="https://visit-sri-lanka.netlify.app/" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-monitor-eye</v-icon>
    </v-btn>
               </div>
           </v-flex>

                      

           <v-flex xs12 sm4 class="project">
                <h4>Visit Sri Lanka mobile app(Google play store pending publication)</h4>
               <p>I created visit sri lanka is a travelling app.It can be used by anyone who wishes to travel in Sri Lanka.The app provides a large number of attractions around the island.(I also try to add new places often).The app lists the places according to distance from user to each site.The app also provides the feature to create a favorites list so users can take as much out of their time in sri lanka.Users can use the built in navigation feature I created with google maps to get to any site with 100% accuracy.</p>
               <h5>React Native, Firebase</h5>
               <div class="mt-4">
               <v-btn href="https://github.com/C4Jay/explore-app-rn" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-github</v-icon>
    </v-btn>
    <v-btn @click="this.showbox" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-monitor-eye</v-icon>
    </v-btn>
    <v-flex v-if="show" class="text-center" xs12>scan to get the android apk<v-flex class="text-center"><v-img class="qrimg" src="https://i.imgur.com/aUUhDkc.png"></v-img></v-flex></v-flex>
               </div>
           </v-flex>

                      <v-flex xs12 sm4 offset-sm2 class="project">
               <h4>Wedding Arcade</h4>
               <p>Wedding arcade works as a hub to all wedding related service providers and consumers in Sri Lanka.I created their official website.Vendors can register and post ads or become featured members.Consumers can visit the site and find any service related to weddings with the help of filters such as location, price range, capacity and many more.</p>
               <h5>Vue, Firebase</h5>
               <div class="mt-4">
               <v-btn href="https://github.com/C4Jay/Event-planner-vue" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-github</v-icon>
    </v-btn>
    <v-btn href="https://wedding-planner-project.web.app/" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-monitor-eye</v-icon>
    </v-btn>
               </div>
           </v-flex>

           <v-flex xs12 sm4 class="project">
                <h4>Profile creator with spring boot backend and AWSS3</h4>
               <p>This web app uses the spring backend which lets you create user profiles with profile pictures.These photos are uploaded to aws S3.Then it retrieves these images back from S3 and shows created profiles.</p>
               <h5>React, Spring Boot, AWS S3</h5>
               <div class="mt-4">
               <v-btn href="https://github.com/C4Jay/aws-spring-photo-upload-backend" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-github</v-icon>
    </v-btn>
    <v-btn href="https://aws-spring-profile-creator.netlify.app/" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-monitor-eye</v-icon>
    </v-btn>
               </div>
           </v-flex>


           <v-flex xs12 offset-sm2 sm4 class="project">
               <h4>Profile creator with JEE and MySql</h4>
               <p>This web app is created with Java Enterprise Edition.It lets you create profiles with profile pictures and store them in a Mysql database .</p>
               <h5>JEE</h5>
               <div class="mt-4">
               <v-btn href="https://github.com/C4Jay/JEE" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-github</v-icon>
    </v-btn>
   <!--  <v-btn href="https://visit-sri-lanka.netlify.app/" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-monitor-eye</v-icon>
    </v-btn> -->
               </div>
           </v-flex>

           <v-flex xs12 offset-sm2 sm4 class="project">
               

               <h4>KrushiGanudenuLK (delivery system) </h4>
               <p>This is our third year group project.The main goal of this project was to reduce wastage of crops in the island in growing, matching sellers and buyers and transporting phases.We designed two mobile apps and a web site.I created the driver's app and the delivery booking part of the other app in our system.Farmers and buyers can set a date,time and book a vehicle after selecting a suitable vehicle for their purpose from the list of drivers.They have the ability to view the driver's location on a map and the distance to the driver as well as vehicle information.Then driver's have the ability to accept or decline a booking.I also built the navigation feature which gives navigation for drivers with help of google maps.</p>
               <h5>Vue, Firebase, Node, Mongo</h5>
               <div class="mt-4">
               <v-btn href="https://github.com/Koratuwa-LK/drivers-mobile" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-github</v-icon>
    </v-btn>
   <!--  <v-btn href="https://wedding-planner-project.web.app/" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-monitor-eye</v-icon>
    </v-btn> -->
               </div>
           </v-flex>

                      <v-flex xs12 sm4 class="project">
                


               <h4>KrushiGanudenuLK (web site) </h4>
               <p>This is the web site of the KrushiGanudenuLK system.I designed the entire site except for the authorization module.Users of this web app are farmers and bulk buyers.There is an online marketplace which farmers can post stocks and buyers can checkout these stocks and send buy requests to farmers.Stock request module is another feature of this web app.Buyers can request stocks from farmers by filling out a form.They have the ability to specify the quantity and also the asking price.Then there is another feature which shows the total quantities requested by buyers and the average asking price for each crop.One more feature of this web app is the farmer locater.We collect farmers information such as their name growing crop of this season and the expected yield.Then I show these details in a map with pointers defining the crop for ease of use.</p>
               <h5>Vue, Firebase, Node, Mongo</h5>
               <div class="mt-4">
               <v-btn href="https://github.com/Koratuwa-LK/Krushiganudenu-web" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-github</v-icon>
    </v-btn>
    <v-btn href="https://krushiganudenulk.web.app/" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-monitor-eye</v-icon>
    </v-btn>
               </div>


           </v-flex>

           <v-flex xs12 offset-sm2 sm4 class="project">
                <h4>Treflor</h4>
               <p>Treflor provides routes in the wilderness where google maps doesn't provide any.The mobile app let users track their paths and submit them to the system.Then anyone can use that path to find their way in the wild.</p>
               <h5>Vue, Firebase, Node, Mongo</h5>
               <div class="mt-4">
               <v-btn href="https://github.com/Treflor/frontend" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-github</v-icon>
    </v-btn>
    <v-btn href="https://fire-tom.firebaseapp.com/" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-monitor-eye</v-icon>
    </v-btn>
               </div>
           </v-flex>

           


           <v-flex xs12 sm4 class="project">
                <h4>The blings</h4>
               <p>E-commerce site for a polymer clay jewellery shop.Owner can put up products, manage orders etc.</p>
               <h5>Vue, Firebase, Node, Mongo</h5>
               <div class="mt-4">
               <v-btn href="https://github.com/the-blings" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-github</v-icon>
    </v-btn>
    <!-- <v-btn href="https://wedding-planner-project.web.app/" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-monitor-eye</v-icon>
    </v-btn> -->
               </div>
           </v-flex>


           <v-flex xs12 offset-sm2 sm4 class="project">
                <h4>This site</h4>
               <p>I created this site with Vue.js with help of vuetify.</p>
               <!-- <h5>Vue, Firebase, Node, Mongo</h5> -->
               <div class="mt-4">
               <v-btn href="https://github.com/C4Jay/webdev-profile" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-github</v-icon>
    </v-btn>
  <!--   <v-btn href="https://fire-tom.firebaseapp.com/" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-monitor-eye</v-icon>
    </v-btn> -->
               </div>
           </v-flex>





       </v-layout>

        <h1>Medium stories</h1>

         <v-layout row wrap class="text-center">
           

              <v-flex xs12 offset-sm2 sm4 class="project1">
              <h4>Create and launch a JEE web project in IntelliJ</h4>
               <p>In this story I show steps to set up IntelliJ to create and launch aJava Enterprise Edition web project.Tomcat configuration is also included.</p>
               <h5>Java Enterprise Edition</h5>
               <div class="mt-4">
               <v-btn href="https://medium.com/@choolakejay/create-and-launch-a-jee-project-in-intellij-ultimate-edition-9eedebfbade7?sk=87a60c79302f2038958b16894545be6d

" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-book</v-icon>
    </v-btn>
   
               </div>
               </v-flex> 

               <v-flex xs12 sm4 class="project1">
              <h4>React Native Imagebackground design</h4>
               <p>In this story I create a mobile app with React Native and show how to create a beautiful cover background with buttons</p>
               <h5>React Native</h5>
               <div class="mt-4">
               <v-btn href="https://medium.com/@choolakejay/create-a-home-screen-with-image-background-on-react-native-d7769100bd07?source=friends_link&sk=abd1ecdf59511570930bbfd2b76de644" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-book</v-icon>
    </v-btn>
   
               </div>
               </v-flex>

               

               

               <v-flex xs12 offset-sm2 sm4 class="project1">
              <h4>Vue Firebase storage photo upload</h4>
               <p>In this story I create a web app with vue to illustrate te photo uploading process to firebase storage.</p>
               <h5>Vue, Firebase</h5>
               <div class="mt-4">
               <v-btn href="https://medium.com/@choolakejay/upload-images-to-firebase-storage-with-vue-js-afb914566d9?source=friends_link&sk=06524d162059e5dc3a8d454854475ea0

" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-book</v-icon>
    </v-btn>
   
               </div>
               </v-flex>

               


         </v-layout>


   </main>


    </body>
<!-- </v-layout> -->

</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods : {
showbox(){
  this.show = !this.show
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
    height: 100%;
    background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);

}
.nav-list {
    /* display: ; */
    height: 10vh;
    display: flex;
    width: 50%;
    list-style: none;
    justify-content: space-evenly;
    margin-left: auto;
    align-items: center;
    font-weight: bold
    
}

.btn{
  position: fixed;
}

button {
    font-size: 15px
}
p {
    color: black;
    font-weight: bold
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
h2 {
    
    font-family: 'Montserrat', sans-serif;
}

.qrimg {
  height: 100px;
  width: 100px;

}

.project {
    background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
    height: 200px auto;
    padding: 20px;
    margin: 20px;
    font-family: 'Montserrat', sans-serif;
    box-shadow: 5px 5px rgba(136, 138, 143, 0.5)

    
    
}

.project1{
    background-image: linear-gradient(to top, #c1dfc4 0%, #deecdd 100%);
  height: 200px auto;
    padding: 20px;
    margin: 20px;
    font-family: 'Montserrat', sans-serif;
    box-shadow: 5px 5px rgba(136, 138, 143, 0.5)
}

.project1 h4 {
  color: #eb4034
}
.google {
  width: 250px;
  height: auto;
  object-fit: cover;
}

h4 {
  font-family: 'Montserrat', sans-serif;
}
</style>

