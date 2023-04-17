<template>
  <div class="home">
    <!-- NAVBAR -->
    <nav class="mx-auto items-center relative container p-6 ">
        <!-- Flex container -->
        <div class="flex items-center justify-between ">
            <!-- Logo -->
            <div class="pt-2 px-6 ">
                <img src="../assets/quidly-logo.png" alt="">
            </div>
            <!-- Menu -->
            <div class="hidden space-x-12  md:flex  ">
                <a href="" class="hover:text-dodgerBlue">About Us</a>
                <a href="" class="hover:text-dodgerBlue">Services</a>
                <a href="" class="hover:text-dodgerBlue ">Pricing</a>
                <a href="" class="hover:text-dodgerBlue">FAQs</a>
                
            </div>
            <!-- Button -->
            <a href="" class="sign-in hidden p-3 px-6 pt-2 text-white bg-dodgerBlue rounded-full baseline hover:bg-lightBlue ml-6 md:block mr-12 ">
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

     <!-- Hero section -->
     <section id="hero" class="container mx-auto">
        <!-- Flex container -->
        <div class="p-12 mb-32 container flex flex-col  md:items-center px-12 my-10 space-y-0  md:flex-row  md:space-y-0 ">
            <!-- left-item -->
            <div class="welcome flex flex-col mb-32 space-y-12 mt-12 ">
                <h1 class=" text-4xl font-bold text-center md:text-7xl md:text-left  ">
                    A Gateway for faster end-to end payments
                </h1>
                <p class="font-bold text-center text-stormGrey  md:text-left">
                    A digital financial product, making your financial transactions effortless and seamless
                </p>
                <div class="flex justify-center md:justify-start">
                 <router-link to="/login" class="p-3 px-6 pt-2 text-white font-bold bg-dodgerBlue rounded-full baseline hover:bg-lightBlue">Get started as a merchant</router-link>
                </div>
            </div>
            <!-- Hero-image -->
            
        </div>

    </section>

    <!-- Services section  -->
    <section id="services" class="container mx-auto mt-12 mb-12">
        <h1 class="mt-6 mb-12 text-center text-3xl">Quidly Services</h1>
        
      <!-- service-container -->
      <div class="items-center relative container flex flex-col px-6">
            <div class="block max-w-sm rounded-lg bg-white shadow-lg    dark:bg-neutral-700">
            <a href="#!">
                <img
                class="rounded-t-lg"
                src=""
                alt="" />
            </a>
            </div>
            <div class="p-6">
                <h5
                class="mb-2 text-2xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Card Payment
                </h5>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    Secure card data collection using our embeded Javascript and reliable transmission payment processing using our modern infrastructure.We are continuously innovating the payment space to reduce “time-to-pay” to improve customer payment experience. We promise to only deliver what works!   
                </p> 
            </div>
      </div>
      <div class="items-center relative container flex flex-col px-6">
        <div class="block max-w-sm rounded-lg bg-white shadow-lg    dark:bg-neutral-700">
        <a href="#!">
            <img
            class="rounded-t-lg"
            src=""
            alt="" />
        </a>
        </div>
        <div class="p-6">
            <h5
            class="mb-2 text-2xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Virtual POS
            </h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Our virtual-POS is a “POS-anywhere” offering that extends reach to payagents even in remote locations. Our innovation enables all transaction types possible on physical POS just with a twist “no papers”
             </p> 
        </div>
  </div>
      <!-- service-container -->
      <div class="items-center relative container flex flex-col px-6">
            <div class="block max-w-sm rounded-lg bg-white shadow-lg    dark:bg-neutral-700">
            <a href="#!">
                <img
                class="rounded-t-lg"
                src=""
                alt="" />
            </a>
            </div>
            <div class="p-6">
                <h5
                class="mb-2 text-2xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                QR Code
                </h5>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    With qr-code on stalls or restaurant tables, users can
                    securely initiate payment on own device and once complete,
                    merchant can be assured of guaranteed payment delivery
                    on quidly app before value disposition. All these is done
                    seamlessly through our modern infrastructure.
                </p> 
            </div>
      </div>
      <!-- service-container -->
      <div class="items-center relative container flex flex-col px-6">
            <div class="block max-w-sm rounded-lg bg-white shadow-lg    dark:bg-neutral-700">
            <a href="#!">
                <img
                class="rounded-t-lg"
                src=""
                alt="" />
            </a>
            </div>
            <div class="p-6">
                <h5
                class="mb-2 text-2xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                E naira
                </h5>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec nulla vel massa pellentesque consectetur in quis urna. Integer nec venenatis nunc, non faucibus quam. Sed egestas posuere diam eget ultrices. Nulla condimentum non augue a posuere.
                </p> 
            </div>
      </div>
  </section>

  <div class="benefits-section container mx-auto ">
    <h1 class="mt-6 mb-6 text-center text-3xl">Quidly benefits</h1>
    <div class="container px-12 mb-12 pt-12 flex flex-col justify-between   md:flex md:flex-row md:space-y-0 md:space-x-12  ">
        <div class="flex flex-col mr-12 ">
            <div class="  mt-12 space-y-6 ">
                <div class="icon-image">
                    <img class="icons" src="../assets/price.png" alt="">
                </div>
                
                <p class="text-2xl ">Lower costs of transactions</p>
                <div class="mt-4 flex flex-row mr-4">
                    <img class="" src="../assets/learn-arrow.png" alt="">
                    <button class="">
                        <a href="" class="ml-6 hover:text-dodgerBlue ">Learn more</a>
                    </button>
                </div>
            </div>
        </div>
        <div class="flex flex-col mr-12 ">
            <div class="  mt-12 space-y-6 ">
                <div class="icon-image">
                    <img class="icons" src="../assets/fast.png" alt="">
                </div>
                
                <p class="text-2xl ">Faster rate of services</p>
                <div class="mt-4 flex flex-row mr-4">
                    <img class="" src="../assets/learn-arrow.png" alt="">
                    <button class="">
                        <a href="" class="ml-6 hover:text-dodgerBlue ">Learn more</a>
                    </button>
                </div>
            </div>
        </div>
        <div class="flex flex-col mr-12 ">
            <div class="  mt-12 space-y-6 ">
                <div class="icon-image">
                    <img class="icons" src="../assets/access-icon.png" alt="">
                </div>
                
                <p class="text-2xl ">Better access to services</p>
                <div class="mt-4 flex flex-row mr-4">
                    <img class="" src="../assets/learn-arrow.png" alt="">
                    <button class="">
                        <a href="" class="ml-6 hover:text-dodgerBlue ">Learn more</a>
                    </button>
                </div>
            </div>
        </div>
        <div class="flex flex-col mr-12 ">
            <div class="  mt-12 space-y-6 ">
                <div class="icon-image">
                    <img class="icons" src="../assets/ease.png" alt="">
                </div>
                
                <p class="text-2xl ">Ease of payments collections</p>
                <div class="mt-4 flex flex-row mr-4">
                    <img class="" src="../assets/learn-arrow.png" alt="">
                    <button class="">
                        <a href="" class="ml-6 hover:text-dodgerBlue ">Learn more</a>
                    </button>
                </div>
            </div>
        </div>
        
       
        
       
        
    </div>
  </div>
  </div>
  
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
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
  
  }
}
</script>
<style>
#hero{
    text-align: center;
}

</style>
