<template>
  <v-app>
    <Menu/>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Abas/>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Abas from "./components/Abas";
import Menu from "./components/Menu";

export default {
  name: "App",
  components: {
    HelloWorld,
    Menu,
    Abas
  },
  data() {
    return {
      //
    };
  },
  
};
</script>
