import Vue from 'vue'
import Vuex from 'vuex'
import Message from './domain/entities/Message'
import axios from 'axios'
import SuccessNotifier from './domain/util/notifications/SuccessNotifier'
import ErrorNotifier from './domain/util/notifications/ErrorNotifier'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: new Message('Deafult name', '000 000 000', 'Message by default')
  },
  mutations: {

  },
  actions: {
    sendMessage: (context, payload) => {
      axios.get('util/response.json')
        .then((response) => {
          context.state.message = new Message('', '', '')
          SuccessNotifier.notify('Отправка', 'Сообщение успешно отправлено')
        }).catch(() => {
          ErrorNotifier.notify()
        })
    }
  }
})
