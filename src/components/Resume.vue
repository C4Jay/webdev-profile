<template>
    <body>
   
      <!--  <nav>
       <ul class="nav-list">
        
       <li><a class="nav-links">resume</a></li>
       
       <li><a class="nav-links">projects</a></li>
       <li><a class="nav-links">contact</a></li>
       </ul>
   </nav> -->
   <v-layout row class="text-center">
       <!-- <v-flex class="item"><router-link to="/resume" class="link">resume</router-link></v-flex> -->
        <v-flex class="item"><router-link to="/projects" class="link">projects</router-link></v-flex>
        <v-flex class="item"><router-link to="/contact" class="link">contact</router-link></v-flex>
   </v-layout>

   <main>
       <h1>resume</h1>
        <v-layout row wrap>
            <v-flex xs12 sm4 offset-sm2 class="project1">
                <div class="inner">
                <h2>Choolake Jinendra Suwandarathna</h2>
                
                <v-img class="img1" height="200" src="@/assets/26586941.jpg"></v-img>

                <v-layout row>
                    <v-flex class="section">
                        <h4>about me</h4>
                        <p>Computer Science undergraduate at University Of Colombo School Of Computing.Full stack web developer with React,Vue, Node, Express 2+ years experience. Mobile app developer with 2+ years of React Native experience. </p>
                    </v-flex>
                </v-layout>

                 <v-layout row>
                    <v-flex class="section">
                        <h4>contact details</h4>
                        <h5>Address</h5>
                    <p>696, Kelanisiri Mw, Sinharamulla, Kelaniya, Sri Lanka</p>
                    <h5>Phone</h5>
                    <p>+94 77 976 6262</p>
                    <h5>mail</h5>
                    <p>choolakejay@gmail.com</p>             </v-flex>
                </v-layout>
                </div>
            </v-flex>

            <v-flex xs12 sm4 class="project">
                <div class="inner">
                <h2>academic</h2>

                 <v-flex class="section">
                        <h4 class="mb-6">University</h4>
                        <h5>University Of Colombo School Of Computing</h5><span>2017-2020</span> 
                        <p>Computer Science undergraduate currently on 3rd academic year with 3.4 Grade Point Average</p>
                        
                        
                        <h4 class="mb-6">School</h4>
                        <h5>Ananda College Colombo 10</h5><span>2008-2016</span> 
                        <p>I went to Ananda college from grade 6.Obtained 9 A's for my O/L 's.Studied physical science subjects for A/L's and obtained A-chem, B-phys, C-math.</p>

                        <h4 class="mb-6">Certificates</h4>
                        <h5>Cisco CCNA cybersecurity operations</h5><span>2018-2019</span> 
                        <p>Completed the cyberops professional program offered by SLIIT</p>
        
                 

                        </v-flex>



               <h2>projects</h2>    

               <v-flex class="section">
                        <h4>Visit Sri Lanka - Mobile app</h4>
                        <span>2020</span>
                        <h5>React Native, Firebase</h5>
                        <p>I created the app Visit Sri Lanka as a solo project using React Native.It is an app which shows places to visit in Sri Lanka.Users can view , mark places as favorites.the app also provides realtime navigation to each place.</p>
                        
                        <h4>Visit Sri Lanka - Web app</h4>
                        <span>2020</span>
                        <h5>React, CSS, Firebase</h5>
                        <p>Lists places to visit in Sri Lanka and their coordinates registered users can also mark their favorites.They can view favorites from either the web app or the mobile app afterwards.</p>
                        

                         <h4>Wedding Arcade</h4>
                        <span>2020</span>
                        <h5>Vue, Firebase</h5>
                        <p>I created the official web site of Wedding Arcade.They provide services related to weddings and similar occasions and act as a hub for all service providers.</p>
                        

                        <h4>Can I Run It</h4>
                        <span>2020</span>
                        <h5>React, Node, Python, Express, Firebase, CSS, Mongo</h5>
                        <p>Me and one of my friends created the web app CanIRunIt to check system requirements for 10000+ games since 2000's.We created our own API's for the games list, GPU, CPU, RAM scores with node. We also used python for data handling.Users can visit our site and select any game they want and fill out a simple form wit their rig specs and check how well the specific game would perform in their machine.</p>
                        

                        <h4>Can I Run It - Mobile app</h4>
                        <span>2020</span>
                        <h5>React Native, Firebase</h5>
                        <p>This is the mobile app for the CanIRunIt system.</p>
                        

                         <h4>Treflor</h4>
                        <span>2019</span>
                        <h5>Vue, Node, Mongo</h5>
                        <p>System which helps hikers to find routes in the wilderness.Users can use the site to view routes and admins have the admin panel in the site to manage users data and route data.</p>
                        

                        <h4>The blings</h4>
                        <span>2019</span>
                        <h5>Vue, Firebase</h5>
                        <p>E-commerce store for a polymer clay jewellery shop.</p>
                        
                      
                 

                        </v-flex>

                        <h2>Skills</h2>

                        <v-flex class="section">
                        <h5>Vue</h5>
                        <v-progress-linear
      color="teal"
      buffer-value="0"
      value="90"
      stream
      class="mb-4"
    ></v-progress-linear>

    <h5>React</h5>
                        <v-progress-linear
      color="teal"
      buffer-value="0"
      value="80"
      stream
      class="mb-4"
    ></v-progress-linear>

    <h5>React Native</h5>
                        <v-progress-linear
      color="teal"
      buffer-value="0"
      value="80"
      stream
      class="mb-4"
    ></v-progress-linear>

    <h5>Javascript</h5>
                        <v-progress-linear
      color="teal"
      buffer-value="0"
      value="80"
      stream
      class="mb-4"
    ></v-progress-linear>

    <h5>HTML</h5>
                        <v-progress-linear
      color="teal"
      buffer-value="0"
      value="90"
      stream
      class="mb-4"
    ></v-progress-linear>



    <h5>CSS</h5>
                        <v-progress-linear
      color="teal"
      buffer-value="0"
      value="90"
      stream
      class="mb-4"
    ></v-progress-linear>


    <h5>Sass</h5>
                        <v-progress-linear
      color="teal"
      buffer-value="0"
      value="80"
      stream
      class="mb-4"
    ></v-progress-linear>

    <h5>Node</h5>
                        <v-progress-linear
      color="teal"
      buffer-value="0"
      value="60"
      stream
      class="mb-4"
    ></v-progress-linear>

    <h5>Mongo</h5>
                        <v-progress-linear
      color="teal"
      buffer-value="0"
      value="60"
      stream
      class="mb-4"
    ></v-progress-linear>

    <h5>Python</h5>
                        <v-progress-linear
      color="teal"
      buffer-value="0"
      value="60"
      stream
      class="mb-4"
    ></v-progress-linear>

    <h5>Java</h5>
                        <v-progress-linear
      color="teal"
      buffer-value="0"
      value="60"
      stream
      class="mb-4"
    ></v-progress-linear>

    <h5>C</h5>
                        <v-progress-linear
      color="teal"
      buffer-value="0"
      value="70"
      stream
      class="mb-4"
    ></v-progress-linear>

    <h5>C++</h5>
                        <v-progress-linear
      color="teal"
      buffer-value="0"
      value="60"
      stream
      class="mb-4"
    ></v-progress-linear>

    <h5>CMS</h5>
                        <v-progress-linear
      color="teal"
      buffer-value="0"
      value="80"
      stream
      class="mb-4"
    ></v-progress-linear>

    <h5>E-commerce</h5>
                        <v-progress-linear
      color="teal"
      buffer-value="0"
      value="80"
      stream
      class="mb-4"
    ></v-progress-linear>

    

    
                        
                     
                 

                        </v-flex>  

                </div>   
            </v-flex>

        </v-layout>
   </main>
    </body>
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


h5 {
    color: white
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



span {
    color: black;
    font-size: 12px
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
h2 {
    
    font-family: 'Montserrat', sans-serif;
}

h4 {
    color: white;
    margin-top: 4px
}

.project {
    /* background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%); */
    /* height: 200px; */
    /* background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%); */
    background-color: #59A9B5;
    height: auto;
    padding: 20px;
    margin: 20px;
    margin-bottom: 40px;
    border-style: solid;
    border-width: 1px;
    border-color: black;
    font-family: 'Montserrat', sans-serif;
    box-shadow: 5px 5px rgba(136, 138, 143, 0.5)
}

.project1 {
    /* background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%); */
    /* height: 200px; */
    /* background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%); */
    background-color: #E2F3F9;
    height: auto;
    padding: 20px;
    margin: 20px;
    /* margin-bottom: 40px; */
    border-style: solid;
    border-width: 1px;
    border-color: black;
    font-family: 'Montserrat', sans-serif;
    box-shadow: 5px 5px rgba(136, 138, 143, 0.5)
}

.project1 h2{
    color: black
}


.project1 h4{
    color: black
}


.project1 h5{
    color: black
}


@media only screen and (max-width: 450px){
    .project {
    /* background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%); */
    /* height: 200px; */
    /* background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%); */
    /* background-color: #59A9B5; */
    height: auto;
    /* padding: 20px; */
    /* margin: 10px; */
    /* margin-bottom: 40px; */
    
    font-family: 'Montserrat', sans-serif;
    box-shadow: 5px 5px rgba(136, 138, 143, 0.5)
}

.project {
    /* background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%); */
    /* height: 200px; */
    /* background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%); */
    background-color: #59A9B5;
    height: auto;
    /* padding: 20px; */
    /* margin: 10px; */
    
    font-family: 'Montserrat', sans-serif;
    /* box-shadow: 5px 5px rgba(136, 138, 143, 0.5) */
}

} 

</style>

