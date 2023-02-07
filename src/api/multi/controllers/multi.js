'use strict';

/**
 * multi controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::multi.multi');
