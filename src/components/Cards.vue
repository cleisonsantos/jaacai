<template>
  <div>
    <v-container v-for="sabor in sabores" :key="sabor.title">
      <v-card hover>
        <v-container>
          <v-img :src="sabor.img" height="200px">
            <v-container fill-height fluid pa-2>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline white--text" v-text="sabor.title"></span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>

          <v-card-actions>
            <v-btn icon>
              <v-icon>shopping_basket</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>favorite</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>share</v-icon>
            </v-btn>
          </v-card-actions>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Cards",
  data() {
    return {
      sabores: []
    };
  },
  methods: {},
  created() {
    this.$http.get("sabores.json").then(res => {
      this.sabores = res.data;
      console.log(this.sabores);
    });
  }
};
</script>

<style>
</style>
