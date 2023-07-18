<template>
  <ParticlesBg />
  <header class="header">
    <h1>Nándor Bottyán</h1>
    <h2>
      <span>{{ typeValue }}</span>
      <span class="blinking-cursor">|</span>
      <span :class="{ typing: typeStatus }">&nbsp;</span>
    </h2>
    <AppClouds />
  </header>
</template>

<script lang="ts">
import ParticlesBg from "./ParticlesBg.vue";
import AppClouds from "./AppClouds.vue";

export default {
  name: "AppHero",
  components: {
    ParticlesBg,
    AppClouds,
  },
  data() {
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: [
        "BlockChain Architect",
        "IoT Solution Architect",
        "Supply Chain Manager",
        "Digital Transformation Expert",
        "Sustainability Enthusiast",
      ],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      displayTextArrayIndex: 0,
      charIndex: 0,
    };
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  methods: {
    typeText() {
      if (
        this.charIndex <
        this.displayTextArray[this.displayTextArrayIndex].length
      ) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[
          this.displayTextArrayIndex
        ].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[
          this.displayTextArrayIndex
        ].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
};
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
