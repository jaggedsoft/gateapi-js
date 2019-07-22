/**
 * Gate API v4
 * APIv4 provides spot, margin and futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user's behalf.
 *
 * OpenAPI spec version: 4.7.3
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
    root.GateApi.CurrencyPair = factory(root.GateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The CurrencyPair model module.
   * @module model/CurrencyPair
   * @version 4.7.3
   */

  /**
   * Constructs a new <code>CurrencyPair</code>.
   * Spot currency pair
   * @alias module:model/CurrencyPair
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>CurrencyPair</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CurrencyPair} obj Optional instance to populate.
   * @return {module:model/CurrencyPair} The populated <code>CurrencyPair</code> instance.
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
      if (data.hasOwnProperty('fee')) {
        obj['fee'] = ApiClient.convertToType(data['fee'], 'String');
      }
      if (data.hasOwnProperty('min_base_amount')) {
        obj['min_base_amount'] = ApiClient.convertToType(data['min_base_amount'], 'String');
      }
      if (data.hasOwnProperty('min_quote_amount')) {
        obj['min_quote_amount'] = ApiClient.convertToType(data['min_quote_amount'], 'String');
      }
      if (data.hasOwnProperty('precision')) {
        obj['precision'] = ApiClient.convertToType(data['precision'], 'Number');
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
   * Trading fee
   * @member {String} fee
   */
  exports.prototype['fee'] = undefined;
  /**
   * Minimum amount of base currency to trade, `null` means no limit
   * @member {String} min_base_amount
   */
  exports.prototype['min_base_amount'] = undefined;
  /**
   * Minimum amount of quote currency to trade, `null` means no limit
   * @member {String} min_quote_amount
   */
  exports.prototype['min_quote_amount'] = undefined;
  /**
   * Price scale
   * @member {Number} precision
   */
  exports.prototype['precision'] = undefined;



  return exports;
}));


