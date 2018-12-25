<template>
    <div>
        <cd-hero/>
        <cd-about/>
        <cd-infos/>
        <cd-contact/>
    </div>
</template>
<script>
import Hero from '~/pages/Hero.vue';
import About from '~/pages/About.vue';
import Contact from '~/pages/Contact.vue';
import ExtraInfos from '~/pages/Infos.vue';

export default{
  components: {
      'cd-hero':Hero,
      'cd-contact':Contact,
      'cd-infos':ExtraInfos,
      'cd-about':About
  }
}
</script>