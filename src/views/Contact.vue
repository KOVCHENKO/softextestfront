<template>
  <div class="page-container">
    <div class="row">
      <div class="col-md-2">
      </div>
      <div class="col-md-6">
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name" placeholder="" name="name"
                     v-model="message.name" v-validate="'required|min:3'" required="">
                <span class="validation-error" v-show="errors.has('name')">{{ errors.first('name') }}</span>
            </div>
            <div class="col-md-6 mb-3">
              <label for="phone">Phone</label>
              <input type="text" class="form-control" id="phone" v-mask="'+7(###)###-##-##'" placeholder="" v-model="message.phone" required="">
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 mb-3">
              <textarea class="form-control" id="exampleFormControlTextarea1" v-model="message.message" rows="5" maxlength="250"></textarea>
              <div class="text-area-counter">Осталось: {{ counter }} символов</div>
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
    },
    counter () {
      return this.$store.state.message.checkMessageLength(250)
    }
  },
  methods: {
    send () {
      this.$store.dispatch('sendMessage', this.message)
    }
  }
}
</script>

<style>
    .text-area-counter {
        font-size: 9pt;
    }
    .validation-error {
        color: red;
        font-size: 12px;
    }
</style>
