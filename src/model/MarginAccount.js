/**
 * Gate API v4
 * APIv4 provides spot, margin and futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user's behalf.
 *
 * Contact: support@mail.gate.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.4
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/MarginAccountCurrency'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MarginAccountCurrency'));
  } else {
    // Browser globals (root is window)
    if (!root.GateApi) {
      root.GateApi = {};
    }
    root.GateApi.MarginAccount = factory(root.GateApi.ApiClient, root.GateApi.MarginAccountCurrency);
  }
}(this, function(ApiClient, MarginAccountCurrency) {
  'use strict';



  /**
   * The MarginAccount model module.
   * @module model/MarginAccount
   */

  /**
   * Constructs a new <code>MarginAccount</code>.
   * Margin account detail. &#x60;base&#x60; refers to base currency, while &#x60;quotes to quote currency
   * @alias module:model/MarginAccount
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>MarginAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MarginAccount} obj Optional instance to populate.
   * @return {module:model/MarginAccount} The populated <code>MarginAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('currency_pair')) {
        obj['currency_pair'] = ApiClient.convertToType(data['currency_pair'], 'String');
      }
      if (data.hasOwnProperty('base')) {
        obj['base'] = MarginAccountCurrency.constructFromObject(data['base']);
      }
      if (data.hasOwnProperty('quote')) {
        obj['quote'] = MarginAccountCurrency.constructFromObject(data['quote']);
      }
    }
    return obj;
  }

  /**
   * Currency pair
   * @member {String} currency_pair
   */
  exports.prototype['currency_pair'] = undefined;
  /**
   * @member {module:model/MarginAccountCurrency} base
   */
  exports.prototype['base'] = undefined;
  /**
   * @member {module:model/MarginAccountCurrency} quote
   */
  exports.prototype['quote'] = undefined;



  return exports;
}));


