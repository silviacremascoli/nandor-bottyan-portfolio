<template>
  <ParticlesBg />
  <div class="header">
    <h1>Nandor Bottyan</h1>
    <h2 class="typewriter">Blockchain Architect and IoT Solution Architect</h2>
  </div>
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
.header {
  padding: 30px 275px;
}
h1 {
  margin: 40px 0 0;
  font-size: 64px;
}
.typewriter {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid #ff4a57; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: typing 4s steps(47, end), blink-caret 0.75s step-end infinite;
  margin-top: 10px;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #ff4a57;
  }
}
</style>
