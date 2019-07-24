import Vue, { VueConstructor } from "vue";
import DemoInput from "../demo-input";
import DemoMixin from "../demo-mixin";

type TDemoButton = Vue & {
  $refs: {
    cmpInput: InstanceType<typeof DemoInput>;
  };
} & InstanceType<typeof DemoMixin>;

export default (Vue as VueConstructor<TDemoButton>).extend({
  name: "DemoButton",
  mixins: [DemoMixin],
  components: {
    DemoInput
  },
  props: {
    text: {
      type: String
    }
  },
  methods: {
    onClick() {
      this.$refs.cmpInput.focus();
    },
    getMixinFields() {
      console.log(this.foo.a, this.bar, this.dataFoo)
      this.fnFoo()
    },
  }
});
