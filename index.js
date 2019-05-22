const Devices = {
    template:
    '<div class="device" v-on:click="popups">' +
      '<div class="img-box">' +
      '</div>' +
      '<div class="info-box">' +
          '<p>Name : {{ name }}</p>' +
          '<p>price : {{ price }}</p>' +
          '<p>end : {{ end }}</p>' +
      '</div>' +
    '</div>',
    data: function() {
      return {
        name: "Big Campain",
        price: "$ -10",
        end: "2018/06/01"
      }
    },
    methods: {
      popups: function() {
        alert("name : " + this.name +
              "\nprice : " + this.price +
              "\nend : " + this.end)
      }
    }
}

new Vue({
  el: '#contents',
  components: {
    'device-template': Devices
  }
})
