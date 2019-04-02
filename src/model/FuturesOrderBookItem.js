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
    root.GateApi.FuturesOrderBookItem = factory(root.GateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The FuturesOrderBookItem model module.
   * @module model/FuturesOrderBookItem
   * @version 4.6.1
   */

  /**
   * Constructs a new <code>FuturesOrderBookItem</code>.
   * @alias module:model/FuturesOrderBookItem
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>FuturesOrderBookItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FuturesOrderBookItem} obj Optional instance to populate.
   * @return {module:model/FuturesOrderBookItem} The populated <code>FuturesOrderBookItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('p')) {
        obj['p'] = ApiClient.convertToType(data['p'], 'String');
      }
      if (data.hasOwnProperty('s')) {
        obj['s'] = ApiClient.convertToType(data['s'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Price
   * @member {String} p
   */
  exports.prototype['p'] = undefined;
  /**
   * Size
   * @member {Number} s
   */
  exports.prototype['s'] = undefined;



  return exports;
}));


