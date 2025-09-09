module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'smtp',
      providerOptions: {
        host: env('SMTP_HOST'),
        port: env.int('SMTP_PORT', 465),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
        secure: true, // SSL for port 465
      },
      settings: {
        defaultFrom: 'info@tagtech-uk.com',
        defaultReplyTo: 'info@tagtech-uk.com',
      },
    },
  },
});
