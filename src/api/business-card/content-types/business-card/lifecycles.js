'use strict';

module.exports = {
  async afterCreate(event) {
    const { result } = event;
    const landingUrl = `https://mylandingpage/landing/${result.slug}/`;

    try {
      await strapi.plugin('email').service('email').send({
        to: 'info@tagtech-uk.com', // or result.email if dynamic
        subject: 'New Business Card Created',
        text: `
A new business card has been published.

Name: ${result.name}
Email: ${result.email}
Phone: ${result.phone_number}
Website: ${result.website}
Twitter: ${result.twitter}
LinkedIn: ${result.linkedin}
Instagram: ${result.instagram}
Facebook: ${result.facebook}
TikTok: ${result.tiktok}
Shop: ${result.shop}

Landing Page: ${landingUrl}
        `,
      });
    } catch (err) {
      strapi.log.error('Email send failed:', err);
    }
  },
};
