import Vue from 'vue'

// Компонент для уведомлений (шаблон <notifications></notifications>)
import Notifications from 'vue-notification'

// Валидация
import ru from 'vee-validate/dist/locale/ru'
import VeeValidate, { Validator } from 'vee-validate'

// Маска для полей
import VueMask from 'v-mask'

// Карусель
import VueCarousel from 'vue-carousel'

Vue.use(VueCarousel)
Vue.use(VueMask)

Vue.use(Notifications)

Validator.localize('ru', ru)
Vue.use(VeeValidate, {
  fieldsBagName: 'formFields'
})

// Подключение bootstrap
require('bootstrap')
