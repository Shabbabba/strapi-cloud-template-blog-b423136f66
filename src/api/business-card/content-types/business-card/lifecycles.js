'use strict';

module.exports = {
  async afterCreate(event) {
    const { result } = event;
    const landingUrl = `https://landing.tagtech-uk.com/landing/${result.slug}/`;

    try {
      await strapi.plugin('email').service('email').send({
        to: 'info@tagtech-uk.com',
        subject: 'New Business Card Created',
        text: `
Woohoo—business card created!

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
        html: `
<p>Woohoo—business card created!</p>
<p>A new business card has been published.</p>
<ul>
  <li>Name: ${result.name}</li>
  <li>Email: ${result.email}</li>
  <li>Phone: ${result.phone_number}</li>
  <li>Website: ${result.website}</li>
  <li>Twitter: ${result.twitter}</li>
  <li>LinkedIn: ${result.linkedin}</li>
  <li>Instagram: ${result.instagram}</li>
  <li>Facebook: ${result.facebook}</li>
  <li>TikTok: ${result.tiktok}</li>
  <li>Shop: ${result.shop}</li>
</ul>
<p><a href="${landingUrl}">View Landing Page</a></p>
        `,
      });
    } catch (err) {
      strapi.log.error('Email send failed:', err);
    }
  },
};
