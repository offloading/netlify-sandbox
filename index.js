const Devices = {
    template:
    '<li class="device" v-on:click="popups">' +
      '<div class="img-box">' +
      '</div>' +
      '<div class="info-box">' +
          '<p>device : {{ name }}</p>' +
          '<p>made : {{ made }}</p>' +
          '<p>price : {{ price }}</p>' +
      '</div>' +
    '</li>',
    props: {
      name: String,
      made: String,
      price: Number
    },
    data: function() {
      return {
        name,
        made,
        price
      }
    },
    methods: {
      popups: function() {
        alert("商品名: " + this.name +
              "\n製造: " + this.made +
              "\n値段: " + this.price)
      }
    }
}

new Vue({
  el: '#contents',
  components: {
    'device-template': Devices
  }
})
