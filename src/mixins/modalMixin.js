import Modal from 'bootstrap/js/dist/modal'

export default {
  methods: {
    showModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    }
  },
  mounted () {
    // modal進行實體化
    this.modal = new Modal(this.$refs.modal)
    this.modal.show()
  }
}
