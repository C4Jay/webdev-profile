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
    <v-btn href="https://imgstore-e819d.firebaseapp.com/" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-monitor-eye</v-icon>
    </v-btn>
               </div>
               </v-flex>

                      <v-flex xs12 sm4 offset-sm2 class="project">
               <h4>Wedding Arcade</h4>
               <p>Wedding arcade works as a hub to all wedding related service providers and consumers in Sri Lanka.I created their official website.Vendors can register and post ads or become featured members.Consumers can visit the site and find any service related to weddings with the help of filters such as location, price range, capacity and many more.</p>
               <h5>Vue, Firebase</h5>
               <div class="mt-4">
               <v-btn href="https://github.com/CanIRunIt" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-github</v-icon>
    </v-btn>
    <v-btn href="https://wedding-planner-project.web.app/" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-monitor-eye</v-icon>
    </v-btn>
               </div>
           </v-flex>

           <v-flex xs12 sm4 class="project">
                <h4>Visit Sri Lanka mobile app</h4>
               <p>I created visit sri lanka is a travelling app.It can be used by anyone who wishes to travel in Sri Lanka.The app provides a large number of attractions around the island.(I also try to add new places often).The app lists the places according to distance from user to each site.The app also provides the feature to create a favorites list so users can take as much out of their time in sri lanka.Users can use the built in navigation feature I created with google maps to get to any site with 100% accuracy.</p>
               <h5>React Native, Firebase</h5>
               <div class="mt-4">
               <v-btn href="https://github.com/CanIRunIt" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-github</v-icon>
    </v-btn>
    <v-btn href="https://wedding-planner-project.web.app/" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-monitor-eye</v-icon>
    </v-btn>
               </div>
           </v-flex>

                      <v-flex xs12 offset-sm2 sm4 class="project">
               <h4>Visit Sri Lanka web app</h4>
               <p>This is the official web site for my visit sri lanka mobile app.I created visit sri lanka is a travelling app.It can be used by anyone who wishes to travel in Sri Lanka.The app provides a large number of attractions around the island.(I also try to add new places often).The app lists the places according to distance from user to each site.The app also provides the feature to create a favorites list so users can take as much out of their time in sri lanka.</p>
               <h5>React , Firebase</h5>
               <div class="mt-4">
               <v-btn href="https://github.com/CanIRunIt" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-github</v-icon>
    </v-btn>
    <v-btn href="https://wedding-planner-project.web.app/" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-monitor-eye</v-icon>
    </v-btn>
               </div>
           </v-flex>

           <v-flex xs12 sm4 class="project">
               <h4>Treflor</h4>
               <p>Treflor provides routes in the wilderness where google maps doesn't provide any.The mobile app let users track their paths and submit them to the system.Then anyone can use that path to find their way in the wild.</p>
               <h5>Vue, Firebase, Node, Mongo</h5>
               <div class="mt-4">
               <v-btn href="https://github.com/CanIRunIt" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-github</v-icon>
    </v-btn>
    <v-btn href="https://wedding-planner-project.web.app/" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-monitor-eye</v-icon>
    </v-btn>
               </div>
           </v-flex>

                      <v-flex xs12 offset-sm2 sm4 class="project">
                <h4>The blings</h4>
               <p>E-commerce site for a polymer clay jewellery shop.Owner can put up products, manage orders etc.</p>
               <h5>Vue, Firebase, Node, Mongo</h5>
               <div class="mt-4">
               <v-btn href="https://github.com/CanIRunIt" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-github</v-icon>
    </v-btn>
    <v-btn href="https://wedding-planner-project.web.app/" class="mx-2" fab dark small color="pink">
      <v-icon dark>mdi-monitor-eye</v-icon>
    </v-btn>
               </div>
           </v-flex>





       </v-layout>

        <h1>Medium stories</h1>

         <v-layout row wrap class="text-center">
           <v-flex xs12 offset-sm2 sm4 class="project1">
              <h4>Vue Firestore photo upload</h4>
               <p>In this story I create a web app with vue to illustrate te photo uploading process to firebase storage.</p>
               <h5>Vue, Firebase</h5>
               <div class="mt-4">
               <v-btn href="https://medium.com/@choolakejay/upload-images-to-firebase-storage-with-vue-js-afb914566d9?source=friends_link&sk=06524d162059e5dc3a8d454854475ea0

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


         </v-layout>


   </main>


    </body>
<!-- </v-layout> -->

</template>

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
    align-items: center
    
}

.btn{
  position: fixed;
}

button {
    font-size: 15px
}
p {
    color: black;
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
</style>

