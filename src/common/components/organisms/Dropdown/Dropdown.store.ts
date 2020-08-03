export const createDropdownStore = () => ({
  isOpened: false,
  close() {
    this.isOpened = false
  },
  open() {
    this.isOpened = true
  },
  toggle() {
    this.isOpened = !this.isOpened
  }
})
