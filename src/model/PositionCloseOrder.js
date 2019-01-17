/**
 * Gate API v4
 * APIv4 futures provides all sorts of futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user's behalf.
 *
 * OpenAPI spec version: 1.2.0
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
    root.GateApi.PositionCloseOrder = factory(root.GateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The PositionCloseOrder model module.
   * @module model/PositionCloseOrder
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>PositionCloseOrder</code>.
   * Current close order if any, or &#x60;null&#x60;
   * @alias module:model/PositionCloseOrder
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>PositionCloseOrder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PositionCloseOrder} obj Optional instance to populate.
   * @return {module:model/PositionCloseOrder} The populated <code>PositionCloseOrder</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'String');
      }
      if (data.hasOwnProperty('is_liq')) {
        obj['is_liq'] = ApiClient.convertToType(data['is_liq'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Close order ID
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Close order price
   * @member {String} price
   */
  exports.prototype['price'] = undefined;
  /**
   * Is the close order from liquidation
   * @member {Boolean} is_liq
   */
  exports.prototype['is_liq'] = undefined;



  return exports;
}));


