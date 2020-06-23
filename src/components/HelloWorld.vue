<template>
  <section class="VideoBg">
    <video autoplay playsinline loop :muted="muted" ref="video">
    
      <source src="@/assets/Hands Typing On Laptop - Free HD Stock Footage (No Copyright).mp4">
    </video>
    <div class="VideoBg__content">
      <!-- <slot> -->
        <v-container>
       <v-layout row wrap class="text-center">
        <v-flex class="title">
          <h1> Hi I`m Choolake Jinendra</h1>
          <h2> I do web and mobile development<span> |</span></h2>
        </v-flex>
          </v-layout>
          <div class="btngroup">
          <v-flex class="text-center btn">
            <v-btn text-color="green" to="/projects" outlined color="#09fbd3" class="btn">go in</v-btn>
          </v-flex>
          </div>
        </v-container>
      <!-- </slot> -->
    </div>
  </section>
</template>


<script>
  export default {
    props: {
      sources: {
        type: Array,
        required: true
      },
      img: {
        type: String
      },
      muted: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        show: false,
        videoRatio: null
      }
    },
    mounted () {
      this.setImageUrl()
      this.setContainerHeight()
      if (this.videoCanPlay()) {
        this.$refs.video.oncanplay = () => {
          if (!this.$refs.video) return
          this.videoRatio = this.$refs.video.videoWidth / this.$refs.video.videoHeight
          this.setVideoSize()
          this.$refs.video.style.visibility = 'visible'
        }
      }
      window.addEventListener('resize', this.resize)
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.resize)
    },
    methods: {
      showbox () {
        this.show = !this.show
      },
      resize () {
        this.setContainerHeight()
        if (this.videoCanPlay()) {
          this.setVideoSize()
        }
      },
      videoCanPlay () {
        return !!this.$refs.video.canPlayType
      },
      setImageUrl () {
        if (this.img) {
          this.$el.style.backgroundImage = `url(${this.img})`
        }
      },
      setContainerHeight () {
        this.$el.style.height = `${window.innerHeight}px`
      },
      setVideoSize () {
        var width, height, containerRatio = this.$el.offsetWidth / this.$el.offsetHeight
        if (containerRatio > this.videoRatio) {
          width = this.$el.offsetWidth
        } else {
          height = this.$el.offsetHeight
        }
        this.$refs.video.style.width = width ? `${width}px` : 'auto'
        this.$refs.video.style.height = height ? `${height}px` : 'auto'
      },
      getMediaType (src) {
        return 'video/' + src.split('.').pop()
      }
    }
  }
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Abel&family=Lobster&family=Montserrat:wght@100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Abel&family=Lobster&display=swap');

* {
       margin: 0;
      
   }

   .title {
     color: white;
     /* top: 40%;*/
     margin-top: 20%;
     text-align: center;
     /* position:absolute ;     */
    }

  .VideoBg {
    flex: 1;
    position: relative;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.6)
  }
  .VideoBg video {
    position: absolute;
    top: 50%;
    left: 50%;
    visibility: hidden;
    transform: translate(-50%, -50%);
     background-color: rgba(0, 0, 0, 0.6)
  }
  .VideoBg__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
     background-color: rgba(0, 0, 0, 0.6)
  }
  .main {
    text-align: center;
    justify-content: center;
    margin-top: 400px;
    background-color: none;
    color: white;
    font-size: 36px;
    font-family: 'Abel', sans-serif;
  }

  .btngroup {
    margin-top: 100px
  }

 

  .main1 {
    text-align: center;
    justify-content: center;
    margin-top: 10px;
    background-color: none;
    color: white;
    font-size: 20px;
    font-family: 'Abel', sans-serif;
  }

  /* .contact {
    text-align: center;
    color: white;
     font-family: 'Abel', sans-serif;
     margin-top: 40px}
 */
  /* .contacts {
     text-align: center;
     align-content: center;
    flex-direction: column
   
  } */

  h1 {
    color:#ebfaff;
     /* font-family: 'Abel', sans-serif; */
     margin-top: -10px;
     text-align: center;
     font-size: 60px;
     font-family: 'Montserrat', sans-serif;
     text-shadow: black 1px
  }

  h2 {
    color:#ebfaff;
     /* font-family: 'Abel', sans-serif; */
     margin-top: 5px;
     text-align: center;
     /* font-size: 80px; */
     font-family: 'Montserrat', sans-serif;
  }

  span {
    animation: blink 2s infinite;
    display: inline;
  }

  @media only screen and (max-width: 450px) {
    h1 {
      font-size: 36px;
      margin-top: 40px
    }

    h2 {
      font-size: 20px
    }
  }




  /* .btn {
    text-align: center;
    font-family: 'Montserrat', sans-serif;
   
    border-width: 1px;
    border-style: solid;
   
  } */

  .btn1 {
    background-color: #a832a8;
    color: white
  }

  a {
    text-decoration: none;
    color: white
  }

  .contact {
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 15px
  }

  .icon {
    size: 100%
  }

  .img {
    size: 100%;
    width: 35px;
    height: 35px;
    margin-right: -100px;
    margin-left:  80px
  }

  .img1 {
    size: 100%;
    width: 35px;
    height: 35px;
    margin-top: -35px;
    margin-right: -40px;
    margin-left: 40px
  }

  .mainimg {
    height: 444px;
    width: 400px;
    text-align: center;
    align-content: center;
    size: 150%;
    
  animation: bounce 4s infinite;
  
    
  }

  .imgflex {
    text-align: center;
    align-content: center;
    margin-top: -40px;
    animation: bounce 4s infinite;
  
  }

  @keyframes bounce {
  0%   {margin-top: -40px}
  25%  {margin-top: -42px}
  50%  {margin-top: -44px}
  75%  {margin-top: -42px}
  100% {margin-top: -40px}
}

@keyframes blink {
  0% {display: flex}
  50% {display: none}
}


</style>