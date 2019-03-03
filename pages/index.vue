<template>
  <div class="home">
    <Jumbotron/>
    <Services/>
    <Portfolio/>
    <Reviews/>
    <About/>
  </div>
</template>

<script>
import Jumbotron from "@/components/Jumbotron";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import About from "@/components/About";

export default {
  name: "home",
  components: {
    Jumbotron,
    Services,
    Portfolio,
    Reviews,
    About
  }
};
</script>
