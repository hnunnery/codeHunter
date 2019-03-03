<template>
  <v-container fluid>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <!-- html form required for processing forms with netlify -->
        <form name="contact" method="POST" netlify-honeypot="bot-field" netlify>
          <h1 class="display-1">Contact Form</h1>
          <input type="hidden" name="form-name" value="contact">
          <!-- netlify honeypot for spam filtering -->
          <p class="hidden">
            <label>
              Don’t fill this out if you're human:
              <input name="bot-field">
            </label>
          </p>
          <input type="text" name="name" placeholder="Name" required>
          <input type="email" name="email" placeholder="Email" required>
          <textarea name="message" placeholder="Message" rows="4" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "contact"
};
</script>

<style lang="scss" scoped>
$my-form-color: #22aa00;

/* FORM STYLING */
h1,
input::-webkit-input-placeholder {
  transition: all 0.3s ease-in-out;
}

h1 {
  background: darken($my-form-color, 4%);
  line-height: 150%;
  border-radius: 3px 3px 0 0;
  box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.2);
}

form {
  box-sizing: border-box;
  text-align: center;
  background-color: #1c1c1c;
  width: 90%;
  margin: 55px auto;
  @media only screen and (min-width: 450px) {
    width: 400px;
    margin: 60px auto 0;
  }
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
  padding-bottom: 40px;
  border-radius: 3px;
  h1 {
    box-sizing: border-box;
    padding: 11px;
  }
}

input,
textarea {
  margin: 40px 25px;
  width: 90%;
  @media only screen and (min-width: 735px) {
    width: 350px;
  }
  display: block;
  border: none;
  padding: 30px 0 0 0;
  border-bottom: solid 1px $my-form-color;
  transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 96%,
    $my-form-color 4%
  );
  background-position: -200px 0;
  background-size: 200px 100%;
  background-repeat: no-repeat;
  &:focus,
  &:valid {
    box-shadow: none;
    outline: none;
    background-position: 0 0;
    &::-webkit-input-placeholder {
      color: $my-form-color;
      font-size: 11px;
      transform: translateY(-20px);
      visibility: visible !important;
    }
  }
}

button {
  font-size: 20px;
  border: none;
  background: $my-form-color;
  cursor: pointer;
  border-radius: 3px;
  padding: 6px;
  width: 200px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.2);
  }
}

.follow {
  width: 42px;
  height: 42px;
  border-radius: 50px;
  background: #03a9f4;
  display: inline-block;
  margin: 50px calc(50% - 21px);
  white-space: nowrap;
  padding: 13px;
  box-sizing: border-box;
  color: white;
  transition: all 0.2s ease;
  font-family: Roboto, sans-serif;
  text-decoration: none;
  box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.2);
  i {
    margin-right: 20px;
    transition: margin-right 0.2s ease;
  }
  &:hover {
    width: 134px;
    transform: translateX(-50px);
    i {
      margin-right: 10px;
    }
  }
}

// needed for netlify-honeypot field
.hidden {
  display: none;
}
</style>