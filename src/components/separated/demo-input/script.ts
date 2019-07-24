import Vue, { VueConstructor } from 'vue'

type TDemoInput = Vue & {
  $el: HTMLInputElement
}

// export default Vue.extend({
export default (Vue as VueConstructor<TDemoInput>).extend({
  name: 'DemoInput',
  data() {
    return {
      data: '',
    }
  },
  methods: {
    onFocus(): void {
      this.data = 'Focused'
    },
    focus(): void {
      // (this.$el as HTMLInputElement).focus()
      this.$el.focus()
    }
  }
})