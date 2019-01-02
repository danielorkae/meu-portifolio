<template>
  <div>
    <cd-nav/>
    <nuxt/>
    <cd-footer/>
  </div>
  
</template>
<script>
import Footer from '~/components/Footer.vue';
import Nav from '~/components/Nav.vue';

export default{
  components: {
      'cd-footer':Footer,
      'cd-nav':Nav
  }
}
</script>

<style>

    .grey-section {
        background: #ebebeb;
    }
    h5, .h05, h6, .h06 {
        font-family: "poppins-bold";
        margin-bottom: 1.2rem;
    }
    h5, .h05 {
        font-size: 1.4rem;
        line-height: 1.714;
        text-transform: uppercase;
        letter-spacing: .15rem;

    }
   p.lead{
        font-family: "lora-regular", serif;
        font-size: 1.2rem;
        line-height: 1.8;
        color: #888888;
    }
    .section-intro{
        text-align: center;
    }
    .section-intro>h5{
        color: #3273dc;
        font-size: 1.0rem;
        line-height: 1.875;
        margin-bottom: 0.3rem;
        letter-spacing: .2rem;
        font-weight: 700;
    }
    .section-intro>h1{
        font-family: "poppins-semibold", serif;
        font-size: 1.9rem;
        color: white;
        line-height: 1.25;
        margin-bottom: 1.2rem;
    }
    .button:hover,.fa:hover{
        -moz-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        -webkit-transition: all 0.3s ease-in-out;
        -ms-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }
</style>