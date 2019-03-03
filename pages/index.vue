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
import Jumbotron from "@/components/jumbotron";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
import Reviews from "@/components/reviews";
import About from "@/components/about";

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
