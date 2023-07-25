<template>
  <ParticlesBg />
  <header class="header">
    <h1>Nándor Bottyán</h1>
    <h2>
      <span>{{ typingValue }}</span>
      <span class="blinking-cursor">|</span>
      <span :class="{ typing: typeStatus }">&nbsp;</span>
    </h2>
    <AppClouds />
  </header>
</template>

<script lang="ts">
import ParticlesBg from "./ParticlesBg.vue";
import AppClouds from "./AppClouds.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppHero",
  components: {
    ParticlesBg,
    AppClouds,
  },
  data() {
    return {
      typingValue: "" as string,
      typeStatus: false as boolean,
      displayRoleArray: [
        "BlockChain Architect",
        "IoT Solution Architect",
        "Supply Chain Manager",
        "Digital Transformation Expert",
        "Sustainability Enthusiast",
      ],
      typingSpeed: 100 as number,
      erasingSpeed: 100 as number,
      newTextDelay: 2000 as number,
      displayRoleArrayIndex: 0 as number,
      charIndex: 0 as number,
    };
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  methods: {
    typeText(): any {
      if (
        this.charIndex <
        this.displayRoleArray[this.displayRoleArrayIndex].length
      ) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typingValue += this.displayRoleArray[
          this.displayRoleArrayIndex
        ].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText(): any {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typingValue = this.displayRoleArray[
          this.displayRoleArrayIndex
        ].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayRoleArrayIndex += 1;
        if (this.displayRoleArrayIndex >= this.displayRoleArray.length)
          this.displayRoleArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
});
</script>
<style scoped>
h1 {
  margin-top: 80px;
  margin-bottom: 10px;
  font-size: 88px;
  font-family: var(--heading-font);
}

h2 {
  font-size: 48px;
  font-weight: 500;
  margin-bottom: 50px;
}

.blinking-cursor {
  font-size: 54px;
  color: var(--tertiary-color);
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: var(--tertiary-color);
  }
}

/* .text:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: none;
  border-left: 2px solid var(--tertiary-color);
  animation: animate 4s steps(12) infinite;
}

@keyframes animate {
  40%,
  60% {
    left: 100%;
  }

  100% {
    left: 0%;
  }
} */
.clouds {
  fill: var(--tertiary-color);
}
</style>
