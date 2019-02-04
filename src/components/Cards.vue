<template>
  <div>
    <v-container v-for="(sabor,key) in sabores" :key="key">
      <v-card hover>
        <v-container>
          <v-img :src="sabor.src" height="200px">
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
            <v-spacer></v-spacer>
            <v-btn :key="key" icon @click="show = !show">
              <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-slide-y-transition>
            <v-card-text v-show="show">
              <div class="acai-info">
                  <li :key="key" v-for="(ingrediente,key) in sabor.ingredientes">{{ ingrediente }}</li>
                </div>
                <hr >
                <div class="acai-info">
                  <li
                    :key="key"
                    v-for="(valor,key) in sabor.valores"
                  >{{ key + "ml" }} - {{ "R$ " + valor.toFixed(2).replace(".",",") }}</li>
                </div>
            </v-card-text>
          </v-slide-y-transition>
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
      sabores: [],
      show: false
    };
  },
  methods: {
    listIngredients() {
      sabor.ingredientes.forEach(element => {
        console.log(element);
        return element.values.toString;
      });
    }
  },
  created() {
    this.$http.get("sabores.json").then(res => {
      this.sabores = res.data;
      console.log(this.sabores);
    });
  }
};
</script>

<style >
.acai-info div {
}
.acai-info li {
  list-style: none;
}
</style>
