<template>
  <ParticlesBg />
  <h1>Hi, I'm Nandor Bottyan.</h1>
  <h2>Blockchain Architect and IoT Solution Architect</h2>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ParticlesBg from "./ParticlesBg.vue";

@Options({
  components: {
    ParticlesBg,
  },
  props: {
    msg: String,
  },
})
export default class AppHero extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
  font-size: 64px;
}
</style>
