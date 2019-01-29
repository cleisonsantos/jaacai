<template>
  <v-bottom-nav :active.sync="bottomNav" :value="true" fixed color="purple">
    <v-btn color="yellow" flat value="home">
      <span>Home</span>
      <v-icon>store</v-icon>
    </v-btn>

    <v-btn color="yellow" flat value="favorites">
      <span>Favorites</span>
      <v-icon>favorite</v-icon>
    </v-btn>

    <v-btn color="yellow" flat value="account">
      <span>Account</span>
      <v-icon>account_circle</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script>
export default {
  data() {
    return {
      bottomNav: "home"
    };
  }
};
</script>

<style>
</style>
