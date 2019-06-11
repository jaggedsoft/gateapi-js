/**
 * Gate API v4
 * APIv4 provides spot, margin and futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user's behalf.
 *
 * OpenAPI spec version: 4.7.2
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
    root.GateApi.FuturesCandlestick = factory(root.GateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The FuturesCandlestick model module.
   * @module model/FuturesCandlestick
   * @version 4.7.2
   */

  /**
   * Constructs a new <code>FuturesCandlestick</code>.
   * data point in every timestamp
   * @alias module:model/FuturesCandlestick
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>FuturesCandlestick</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FuturesCandlestick} obj Optional instance to populate.
   * @return {module:model/FuturesCandlestick} The populated <code>FuturesCandlestick</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('t')) {
        obj['t'] = ApiClient.convertToType(data['t'], 'Number');
      }
      if (data.hasOwnProperty('v')) {
        obj['v'] = ApiClient.convertToType(data['v'], 'Number');
      }
      if (data.hasOwnProperty('c')) {
        obj['c'] = ApiClient.convertToType(data['c'], 'String');
      }
      if (data.hasOwnProperty('h')) {
        obj['h'] = ApiClient.convertToType(data['h'], 'String');
      }
      if (data.hasOwnProperty('l')) {
        obj['l'] = ApiClient.convertToType(data['l'], 'String');
      }
      if (data.hasOwnProperty('o')) {
        obj['o'] = ApiClient.convertToType(data['o'], 'String');
      }
    }
    return obj;
  }

  /**
   * Unix timestamp in seconds
   * @member {Number} t
   */
  exports.prototype['t'] = undefined;
  /**
   * size volume. Only returned if `contract` is not prefixed
   * @member {Number} v
   */
  exports.prototype['v'] = undefined;
  /**
   * Close price
   * @member {String} c
   */
  exports.prototype['c'] = undefined;
  /**
   * Highest price
   * @member {String} h
   */
  exports.prototype['h'] = undefined;
  /**
   * Lowest price
   * @member {String} l
   */
  exports.prototype['l'] = undefined;
  /**
   * Open price
   * @member {String} o
   */
  exports.prototype['o'] = undefined;



  return exports;
}));


