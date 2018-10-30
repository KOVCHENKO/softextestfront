<template>
  <div class="page-container">
    <div class="row">
      <div class="col-md-2">
      </div>
      <div class="col-md-6">
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="firstName">Name</label>
              <input type="text" class="form-control" id="firstName" placeholder="" v-model="message.name" required="">
            </div>
            <div class="col-md-6 mb-3">
              <label for="phone">Phone</label>
              <input type="text" class="form-control" id="phone" placeholder="" v-model="message.phone" required="">
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 mb-3">
              <textarea class="form-control" id="exampleFormControlTextarea1" v-model="message.message" rows="5" maxlength="250"></textarea>
            </div>
          </div>
          <button @click="send" class="btn btn-primary btn-lg btn-block">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  computed: {
    message () {
      return this.$store.state.message
    }
  },
  methods: {
    send () {
      this.$store.dispatch('sendMessage', this.message)
    }
  }
}
</script>
