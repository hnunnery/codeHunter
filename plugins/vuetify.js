import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/es5/util/colors";

Vue.use(Vuetify, {
  theme: {
    primary: "#22aa00",
    accent: colors.grey.darken3,
    secondary: "#212121",
    myblue: "#275cb2",
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3,
    mypurple: "#610eaf",
    orange: colors.orange.base
  },
  iconfont: "fa"
});
