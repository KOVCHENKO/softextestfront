class Message {
  constructor (name, phone, message) {
    this.name = name
    this.phone = phone
    this.message = message
  }

  checkMessageLength (symbolsNumber) {
    return (this.message.length - 250) * -1
  }
}

export default Message
