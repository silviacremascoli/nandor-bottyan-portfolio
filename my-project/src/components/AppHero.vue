<template>
  <ParticlesBg />
  <div class="header">
    <h1>Nándor Bottyán</h1>
    <h2 class="typewriter mb-3">Blockchain and IoT Solution Architect</h2>
    <svg
      class="clouds"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="100%"
      height="100"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path
        d="M-5 100 Q 0 20 5 100 Z
                             M0 100 Q 5 0 10 100
                             M5 100 Q 10 30 15 100
                             M10 100 Q 15 10 20 100
                             M15 100 Q 20 30 25 100
                             M20 100 Q 25 -10 30 100
                             M25 100 Q 30 10 35 100
                             M30 100 Q 35 30 40 100
                             M35 100 Q 40 10 45 100
                             M40 100 Q 45 50 50 100
                             M45 100 Q 50 20 55 100
                             M50 100 Q 55 40 60 100
                             M55 100 Q 60 60 65 100
                             M60 100 Q 65 50 70 100
                             M65 100 Q 70 20 75 100
                             M70 100 Q 75 45 80 100
                             M75 100 Q 80 30 85 100
                             M80 100 Q 85 20 90 100
                             M85 100 Q 90 50 95 100
                             M90 100 Q 95 25 100 100
                             M95 100 Q 100 15 105 100 Z"
      ></path>
    </svg>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ParticlesBg from "./ParticlesBg.vue";

@Options({
  components: {
    ParticlesBg,
  },
})
export default class AppHero extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  padding-top: 70px;
}
h1 {
  margin-bottom: 20px;
  font-size: 64px;
}
.typewriter {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 3px solid var(--tertiary-color); /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 6px; /* Adjust as needed */
  animation: typing 4s steps(47, end), blink-caret 0.75s step-end infinite;
  max-width: 930px;
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
    border-color: var(--tertiary-color);
  }
}

.clouds {
  fill: var(--secondary-color);
}
</style>
