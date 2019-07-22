<template lang="pug">
.row
  .col-sm-12
    h2.text-center Compose an Email

  .col-sm-12.m-t-20
    h3 from
    .row
      .offset-sm-2.col-sm-3
        label(for="nameSender") Name
        b-form-input(name="senderName", v-model="model.senderName", required, autofocus=true)
      .col-sm-5
        label(for="senderEmail") Email*
        b-form-input(type="email", name="senderEmail", v-model="model.senderEmail", required)

  .col-sm-12.m-t-20
    h3 to
    .row
      .offset-sm-2.col-sm-3
        label(for="recipientName") Name
        b-form-input(name="recipientName", v-model="model.recipientName")
      .col-sm-5
        label(for="recipientEmail") Emails*
        b-form-input(name="recipientEmail",
                    placeholder="Use ; for multiple emails (no spaces)",
                    v-model="model.recipientEmail")

  .col-sm-12.m-t-20
    h3 content
    .row
      .offset-sm-2.col-sm-8
        label(for="subject") Subject*
        b-form-input(name="subject", v-model="model.subject", required)
      .offset-sm-2.col-sm-8
        label(for="body") Body
        b-form-textarea(name="body", v-model="model.body")

  .col-sm-12.text-center.m-t-20
    b-button.btn-primary(type="submit") Submit
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    model: {
      senderName: '',
      senderEmail: '',
      recipientName: '',
      subject: '',
      recipientEmail: '',
      body: '',
    },
  }),
  methods: {
    submit() {

    },
  },
};
</script>
