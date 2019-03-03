<template>
  <v-container fluid id="contact">
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <v-card class="elevation12 my-4" color="#1c1c1c">
          <v-card-text>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              class="pa-4"
            >
              <!-- NETLIFY FORM NAME -->
              <input type="hidden" name="form-name" value="contact">
              <!-- NETLIFY BOT FIELD -->
              <input type="text" name="bot-field" class="hidden">
              <h2 class="primary--text text-xs-center display-2">Contact Us</h2>
              <input type="text" name="name" placeholder="Name" required class="my-4">
              <input type="email" name="email" placeholder="Email" required class="my-4">
              <textarea name="message" placeholder="Message" rows="4" required class="my-4"></textarea>
              <div class="text-xs-center">
                <v-btn type="submit" large class="primary mt-4">Submit</v-btn>
              </div>
            </form>
          </v-card-text>
        </v-card>
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
input,
textarea,
select,
.sixteen {
  font-size: 16px;
}

input,
textarea {
  width: 100%;
  display: block;
  border: none;
  padding: 30px 0 0 0;
  border-bottom: solid 1px var(--primary);
  transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  &:focus,
  &:valid {
    box-shadow: none;
    outline: none;
    background-position: 0 0;
    &::-webkit-input-placeholder {
      color: var(--primary);
      font-size: 11px;
      transform: translateY(-20px);
      visibility: visible !important;
    }
  }
}
.hidden {
  display: none;
}
</style>