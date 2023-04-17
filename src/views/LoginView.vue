<template>
    <main class="login">
        <nav class="mx-auto items-center relative container p-6 ">
        <!-- Flex container -->
        <div class="flex items-center justify-between ">
            <!-- Logo -->
            <div class="pt-2 px-6 ">
                <img src="../assets/quidly-logo.png" alt="">
            </div>
            <!-- Menu -->
            <div class="hidden space-x-12  md:flex ml-12 ">
                <a href="" class="hover:text-dodgerBlue">About Us</a>
                <a href="" class="hover:text-dodgerBlue">Services</a>
                <a href="" class="hover:text-dodgerBlue ">Pricing</a>
                <a href="" class="hover:text-dodgerBlue">FAQs</a>
                
            </div>
            <!-- Button -->
            <a href="" class="hidden p-3 px-6 pt-2 text-white bg-dodgerBlue rounded-full baseline hover:bg-lightBlue ml-6 md:block mr-12 ">
                Sign in
            </a>
             <!--Mobile menu-->
        <div class="md:hidden">
            <div id="menu" class="hidden absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Pricing</a>
                <a href="#">FAQs</a>

            </div>
        </div>

         <!-- Hamburger icon-->
         <button id="menu-btn" class="mr-6 mt-5 hamburger md:hidden focus:outline-none">
            <span class="hamburger-top"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
        </button>


            
        </div>
       

     </nav>
      <section class="pb-16 container mx-auto onboarding flex flex-col md:flex-row">
        <div class="register-form rounded overflow-hidden">
            
            <form  class="register " @submit.prevent="register"> 
              <p class=" font-bold mb-16 text-dodgerBlue">Sign up to be a Merchant with Quid<span class="text-deepRed">ly</span></p>
              <input class="input-box" type="email" placeholder="Email address" v-model="register_form.email"> <br>
              <input type="password" placeholder="Password" v-model="register_form.password"> <br>
              <input class="hover:bg-lightBlue" type="submit" value="register">
              <p class="text-black mt-8">Already have an account? <router-link class="text-dodgerBlue" to="">Login here</router-link> </p>
              <!-- <p class="mt-8 text-black">Already have an account? <router-link class="text-dodgerBlue hover:text-lightBlue" to="">Login here</router-link> </p> -->
          </form>
        </div>

        <div class="login-form">
            <form  class="login" @submit.prevent="login">
            <p class=" font-bold mb-16 text-dodgerBlue">Login to your Quid<span class="text-deepRed">ly</span> account</p>
            <input type="email" placeholder="Email address" v-model="login_form.email">
            <br>
            <input type="password" placeholder="Password" v-model="login_form.password">
            <br>
            <input type="submit" value="Login">
            <p class="text-black mt-8">Dont have an account? <router-link class="text-dodgerBlue" to="">Sign up here</router-link> </p>
        </form>
        </div>
         
      </section>

      <hr>
      
      <section id="footer-section" class="container mx-auto mt-12 mb-12">
    <div class="container px-12 pt-12 flex flex-col justify-between   md:flex md:flex-row md:space-y-0 md:space-x-12  ">
        <div class="flex flex-col mr-12 ">
            <a href=""  class="mb-3 text-xl hover:text-dodgerBlue">About</a> 
            <a href=""  class="mb-3 text-xl hover:text-dodgerBlue">Services</a> 
            <a href="" class="mb-3 text-xl hover:text-dodgerBlue"> Pricing</a> 
            <a href="" class="mb-3 text-xl hover:text-dodgerBlue"> FAQs</a> 

        </div>
       
        <div class=" mr-12">
            <h1 class="font-bold ">Connect with us on our Socials!</h1>
            <div class="mt-6 mb-6
             sm-links flex space-x-12 flex-row">
                <button class="hover:text-dodgerBlue">
                    <img class="w-15" src="../assets/facebook.png" alt="">
                </button>
                <button>
                    <img class="w-15" src="../assets/instagram-icon.png" alt="">
                </button>
                <button>
                    <img class="w-15"  src="../assets/linkedin.png" alt="">
                </button>
            </div>
            
        </div>
        <div class=" mr-12 md:justify-end">
            <h4 class=" text-xl font-bold">Address</h4>
            <h6>47 Progress college road, New Oko Oba, Abule egba, Ifako Ijaiye, Lagos</h6>
            <h4  class="mt-6 text-xl font-bold">Phone number</h4>
            <h6>0809224449</h6>
            <h6>08109190332</h6>
            <h4  class="mt-6 text-xl font-bold">Email address</h4>
            <h6>info@teinnovatecapital.ng</h6>
        </div>
        
    </div>

  </section>
 <hr>
    <section class="container mx-auto mt-12">
        <div class="text-center mt-6 mb-6 text-xl">
            <h4>Copyright @Teinnovate capital 2023</h4>
        </div>
    </section>
    <hr>
    <section>
       
      
    </section>
    </main>
  </template>
  
  <script>
  
  import { ref } from 'vue';
  import { useStore} from 'vuex'
  
  export default {
      setup(){
          const login_form = ref({});
          const register_form = ref({});
          const store = useStore();
  
          const login = () =>{
              store.dispatch('login', login_form.value);
  
          }
          const register = () =>{
              store.dispatch('register', register_form.value);
  
          }
  
          return {
              login_form,
              register_form,
              login,
              register
          }
  
      }
  
  }
  </script>
  
  <style>
  .forms {
      display: flex;
      min-height: 100vh;
  }
  form {
      flex: 1 1 0%;
  }
  form.register {
      margin-top: 100px;
      color: #FFF;
      height: 500px;
  }
  form.login{
      margin-top: 100px;
      color: #FFF;
      height: 500px;
  }
  h2 {
      font-size: 48px;
      font-weight: bolder;
      text-transform: uppercase;
      margin-bottom: 2rem;
  }
  input {
      appearance: none;
      border: none;
      outline: none;
      background: none;
      display: block;
      width: 100%;
      max-width: 400px;
      margin: 0 auto;
      font-size: 1.5rem;
      margin-bottom: 2rem;
      padding: 0.5rem 0rem;
  }
  input:not([type="submit"]) {
      opacity: 0.8;
      transition: 0.4s;
  }
  input:focus:not([type="submit"]) {
      opacity: 1;
  }
  input::placeholder {
      color: inherit;
  }
  .register-form{
    margin: auto;
    width: 40%;

    
   
  }
  .login-form{
    margin: auto;
    width: 40%;
   
  }
  form.register input:not([type="submit"]) {
      color: #2c3e50;
      border-bottom: 2px solid #2c3e50;
  }
  form.login input:not([type="submit"]) {
      color: #2c3e50;
      border-bottom: 2px solid #2c3e50;
  }
  form.login input[type="submit"] {
      background-color: #1E90FF;
      color: #FFF;
      font-weight: 700;
      border-radius: 0.5rem;
      cursor: pointer;
      text-transform: uppercase;
  }
  form.register input[type="submit"] {
      background-color:#1E90FF;
      color: white;
      font-weight: 700;
      border-radius: 0.5rem;
      cursor: pointer;
      text-transform: uppercase;
  }
  </style>