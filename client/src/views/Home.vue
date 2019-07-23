<template lang="pug">
.row
  .col-sm-12
    h2.text-center Send an email

  .offset-sm-2.col-sm-8
    .row
      .col-sm-2
        label(for="from") From:
      .col-sm-10
        b-form-input(name="from",
                    v-model="model.from",
                    :state="state.from",
                    required,
                    autofocus=true,
                    aria-describedby="feedback-from",
                    placeholder="example@email.com")

        b-form-invalid-feedback#feedback-from
          | Enter an valid email address
    .row
      .col-sm-2
        label(for="to") To:
      .col-sm-10
        b-form-input(name="to",
                     v-model="model.to",
                     :state="state.to",
                     required,
                     aria-describedby="feedback-to",
                     placeholder="example1@email.com, example2@email.com")
        b-form-invalid-feedback#feedback-to
          | Enter one or more valid email address(es), separate by comma (,)

    .row
      .col-sm-2
        label(for="cc") CC:
      .col-sm-10
        b-form-input(name="cc",
                    v-model="model.cc",
                    :state="state.cc",
                     aria-describedby="feedback-cc")
        b-form-invalid-feedback#feedback-cc
          | Enter one or more valid email address(es), separate by comma (,)
    .row
      .col-sm-2
        label(for="bcc") BCC:
      .col-sm-10
        b-form-input(name="bcc",
                     v-model="model.bcc",
                     :state="state.bcc",
                     aria-describedby="feedback-bcc")
        b-form-invalid-feedback#feedback-bcc
          | Enter one or more valid email address(es), separate by comma (,)

    .row
      .col-sm-2
        label(for="subject") Subject:
      .col-sm-10
        b-form-input(name="subject",
                     v-model="model.subject",
                     :state="state.subject",
                     aria-describedby="feedback-subject")
        b-form-invalid-feedback#feedback-subject
          | Subject is required

    .row
      .col-sm-2
        label(for="content") Content:
      .col-sm-10
        b-form-textarea(name="content",
                        v-model="model.content",
                        :state="state.content",
                        rows="5",
                        aria-describedby="feedback-content")
        b-form-invalid-feedback#feedback-content
          | Content is required

  .col-sm-12.text-center
    p.text-danger(v-if="showError && errorText") {{ errorText }}
    b-button.btn-primary(type="submit",
                        @click="submit",
                        :disabled="isSending")
      | {{ isSending ? 'Sending' : 'Submit' }}

  b-modal(ref="statusModal",
          title="Status")
    view-status(:response="response")
</template>

<script>
import ViewStatus from './Status.vue';

export default {
  name: 'Home',
  components: {
    ViewStatus,
  },
  data: () => ({
    response: {},
    isSending: false,
    showError: false,
    model: {
      from: 'hello@gmail.com',
      to: 'fukifaku@gmail.com',
      cc: '',
      bcc: '',
      subject: 'asdfsadf',
      content: '',
    },
  }),
  computed: {
    state() {
      return {
        from: this.model.from && this.isEmailValid(this.model.from),
        to: this.model.to && this.isEmailValid(this.model.to, true),
        cc: this.model.cc && this.isEmailValid(this.model.cc, true),
        bcc: this.model.bcc && this.isEmailValid(this.model.bcc, true),
      };
    },
    errorText() {
      if (!this.model.from) {
        return '"From" is required';
      }
      if (!this.model.to) {
        return '"To" is required';
      }
      if (!this.model.subject) {
        return '"Subject" is required';
      }
      if (!this.model.content) {
        return '"Content" is required';
      }
      if (Object.keys(this.state).some(key => this.state[key] === false)) {
        return 'One of the fields is invalid';
      }
      return '';
    },
  },
  methods: {
    isEmailValid(email, isMultiple) {
      const regSingle = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      const regMultiple = /^(\s?[^\s,]+@[^\s,]+\.[^\s,]+\s?,)*(\s?[^\s,]+@[^\s,]+\.[^\s,]+)$/;

      const reg = isMultiple ? regMultiple : regSingle;
      return reg.test(String(email).toLowerCase());
    },
    submit() {
      if (this.errorText) {
        this.showError = true;
        return;
      }
      this.isSending = true;
      fetch(process.env.VUE_APP_API_URL, {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.model),
      })
        .then(response => response.json())
        .then((data) => {
          this.response = data;
          this.isSending = false;
          this.$refs.statusModal.show();
        })
        .catch((error) => {
          this.response = error;
          this.isSending = false;
          this.$refs.statusModal.show();
        });
    },
  },
};
</script>
