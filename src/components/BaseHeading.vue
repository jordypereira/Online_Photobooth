<script>
export default {
  name: 'BaseHeading',
  render(h) {
    return h(
      'h' + this.level,
      {
        'class': ["text-center", this.classSize, this.classMargin]
      },
      this.$slots.default
    )
  },
  props: {
    level: {
      type: Number,
      default: 1
    }
  },
  computed: {
    classSize() {
      if(this.level === 2) {
        return 'text-4xl'
      }
      if(this.level === 3) {
        return 'text-3xl'
      }
      if(this.level === 4) {
        return 'text-2xl'
      }
      if(this.level === 5) {
        return 'text-xl'
      } 
      return 'text-5xl'
    },
    classMargin() {
      if(this.level === 2) {
        return 'm-16'
      }
      if(this.level === 3) {
        return 'm-12'
      }
      if(this.level === 4) {
        return 'm-8'
      }
      if(this.level === 5) {
        return 'm-4'
      } 
      return 'm-20'
    },
  }
}
</script>

