import Vue, { VueConstructor } from "vue";
import DemoInput from "../demo-input";
import DemoMixin from "../demo-mixin";
import { Observable } from 'rxjs';

type TDemoButton = Vue & {
  $refs: {
    cmpInput: InstanceType<typeof DemoInput>;
  };
  $click: Observable<{event: Event; data: any}>
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
  domStreams: ["$click"],
  mounted() {
    this.$subscribeTo(this.$click, this.onClick);
  },
  methods: {
    onClick(): void {
      this.$refs.cmpInput.focus();
    },
    getMixinFields(): void {
      console.log(this.foo.a, this.bar, this.dataFoo);
      this.fnFoo();
    }
  }
});
