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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.GateApi) {
      root.GateApi = {};
    }
    root.GateApi.MarginCurrencyPair = factory(root.GateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The MarginCurrencyPair model module.
   * @module model/MarginCurrencyPair
   */

  /**
   * Constructs a new <code>MarginCurrencyPair</code>.
   * @alias module:model/MarginCurrencyPair
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>MarginCurrencyPair</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MarginCurrencyPair} obj Optional instance to populate.
   * @return {module:model/MarginCurrencyPair} The populated <code>MarginCurrencyPair</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('base')) {
        obj['base'] = ApiClient.convertToType(data['base'], 'String');
      }
      if (data.hasOwnProperty('quote')) {
        obj['quote'] = ApiClient.convertToType(data['quote'], 'String');
      }
      if (data.hasOwnProperty('leverage')) {
        obj['leverage'] = ApiClient.convertToType(data['leverage'], 'Number');
      }
      if (data.hasOwnProperty('min_base_amount')) {
        obj['min_base_amount'] = ApiClient.convertToType(data['min_base_amount'], 'String');
      }
      if (data.hasOwnProperty('min_quote_amount')) {
        obj['min_quote_amount'] = ApiClient.convertToType(data['min_quote_amount'], 'String');
      }
      if (data.hasOwnProperty('max_quote_amount')) {
        obj['max_quote_amount'] = ApiClient.convertToType(data['max_quote_amount'], 'String');
      }
    }
    return obj;
  }

  /**
   * Currency pair
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Base currency
   * @member {String} base
   */
  exports.prototype['base'] = undefined;
  /**
   * Quote currency
   * @member {String} quote
   */
  exports.prototype['quote'] = undefined;
  /**
   * Leverage
   * @member {Number} leverage
   */
  exports.prototype['leverage'] = undefined;
  /**
   * Minimum base currency to loan, `null` means no limit
   * @member {String} min_base_amount
   */
  exports.prototype['min_base_amount'] = undefined;
  /**
   * Minimum quote currency to loan, `null` means no limit
   * @member {String} min_quote_amount
   */
  exports.prototype['min_quote_amount'] = undefined;
  /**
   * Maximum borrowable amount for quote currency. Base currency limit is calculated by quote maximum and market price. `null` means no limit
   * @member {String} max_quote_amount
   */
  exports.prototype['max_quote_amount'] = undefined;



  return exports;
}));


