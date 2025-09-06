'use strict';

/**
 * business-card service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::business-card.business-card');
