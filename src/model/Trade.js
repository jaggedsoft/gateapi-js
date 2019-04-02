/**
 * Gate API v4
 * APIv4 provides spot, margin and futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user's behalf.
 *
 * OpenAPI spec version: 4.6.1
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
    root.GateApi.Trade = factory(root.GateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Trade model module.
   * @module model/Trade
   * @version 4.6.1
   */

  /**
   * Constructs a new <code>Trade</code>.
   * @alias module:model/Trade
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Trade</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Trade} obj Optional instance to populate.
   * @return {module:model/Trade} The populated <code>Trade</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('create_time')) {
        obj['create_time'] = ApiClient.convertToType(data['create_time'], 'String');
      }
      if (data.hasOwnProperty('side')) {
        obj['side'] = ApiClient.convertToType(data['side'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'String');
      }
      if (data.hasOwnProperty('order_id')) {
        obj['order_id'] = ApiClient.convertToType(data['order_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * Trade ID
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Trading time
   * @member {String} create_time
   */
  exports.prototype['create_time'] = undefined;
  /**
   * Order side
   * @member {module:model/Trade.SideEnum} side
   */
  exports.prototype['side'] = undefined;
  /**
   * Trade amount
   * @member {String} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * Order price
   * @member {String} price
   */
  exports.prototype['price'] = undefined;
  /**
   * Related order ID. No value in public endpoints
   * @member {String} order_id
   */
  exports.prototype['order_id'] = undefined;


  /**
   * Allowed values for the <code>side</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SideEnum = {
    /**
     * value: "buy"
     * @const
     */
    "buy": "buy",
    /**
     * value: "sell"
     * @const
     */
    "sell": "sell"  };


  return exports;
}));


