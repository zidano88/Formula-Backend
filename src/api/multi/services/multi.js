'use strict';

/**
 * multi service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::multi.multi');
