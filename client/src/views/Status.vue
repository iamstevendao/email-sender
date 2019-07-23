<template lang="pug">
.text-center
  h5 {{ header }}
  p(v-if="error") {{ error }}
</template>

<script>
export default {
  name: 'Status',
  props: {
    response: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    header() {
      if (this.response.success) {
        return 'Email sent';
      }
      return 'Failed to send';
    },
    error() {
      if (!this.response.success) {
        return JSON.stringify(this.response.errors);
      }
      return '';
    },
  },
};
</script>
