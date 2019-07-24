import Vue, { PropType } from 'vue'

type TFoo = {
  a: string
  b: number
  c: boolean
}

type TMixin = {
  bar: {
    x: number
    y: string
    z: boolean
  }
  dataFoo: TFoo
}

export default Vue.extend({
  props: {
    foo: {
      type: Object as PropType<TFoo>
    }
  },
  data(): TMixin {
    return {
      bar: {
        x: 1,
        y: 'qwerty',
        z: true
      },
      dataFoo: this.foo
    }
  },
  methods: {
    fnFoo(): void {
      console.log(this.bar.x)
    }
  }
})