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
    root.GateApi.FuturesTicker = factory(root.GateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The FuturesTicker model module.
   * @module model/FuturesTicker
   * @version 4.7.3
   */

  /**
   * Constructs a new <code>FuturesTicker</code>.
   * @alias module:model/FuturesTicker
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>FuturesTicker</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FuturesTicker} obj Optional instance to populate.
   * @return {module:model/FuturesTicker} The populated <code>FuturesTicker</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('contract')) {
        obj['contract'] = ApiClient.convertToType(data['contract'], 'String');
      }
      if (data.hasOwnProperty('last')) {
        obj['last'] = ApiClient.convertToType(data['last'], 'String');
      }
      if (data.hasOwnProperty('change_percentage')) {
        obj['change_percentage'] = ApiClient.convertToType(data['change_percentage'], 'String');
      }
      if (data.hasOwnProperty('total_size')) {
        obj['total_size'] = ApiClient.convertToType(data['total_size'], 'String');
      }
      if (data.hasOwnProperty('low_24h')) {
        obj['low_24h'] = ApiClient.convertToType(data['low_24h'], 'String');
      }
      if (data.hasOwnProperty('high_24h')) {
        obj['high_24h'] = ApiClient.convertToType(data['high_24h'], 'String');
      }
      if (data.hasOwnProperty('volume_24h')) {
        obj['volume_24h'] = ApiClient.convertToType(data['volume_24h'], 'String');
      }
      if (data.hasOwnProperty('volume_24h_btc')) {
        obj['volume_24h_btc'] = ApiClient.convertToType(data['volume_24h_btc'], 'String');
      }
      if (data.hasOwnProperty('volume_24h_usd')) {
        obj['volume_24h_usd'] = ApiClient.convertToType(data['volume_24h_usd'], 'String');
      }
      if (data.hasOwnProperty('mark_price')) {
        obj['mark_price'] = ApiClient.convertToType(data['mark_price'], 'String');
      }
      if (data.hasOwnProperty('funding_rate')) {
        obj['funding_rate'] = ApiClient.convertToType(data['funding_rate'], 'String');
      }
      if (data.hasOwnProperty('funding_rate_indicative')) {
        obj['funding_rate_indicative'] = ApiClient.convertToType(data['funding_rate_indicative'], 'String');
      }
      if (data.hasOwnProperty('index_price')) {
        obj['index_price'] = ApiClient.convertToType(data['index_price'], 'String');
      }
      if (data.hasOwnProperty('quanto_base_rate')) {
        obj['quanto_base_rate'] = ApiClient.convertToType(data['quanto_base_rate'], 'String');
      }
    }
    return obj;
  }

  /**
   * Futures contract
   * @member {String} contract
   */
  exports.prototype['contract'] = undefined;
  /**
   * Last trading price
   * @member {String} last
   */
  exports.prototype['last'] = undefined;
  /**
   * Change percentage.
   * @member {String} change_percentage
   */
  exports.prototype['change_percentage'] = undefined;
  /**
   * Contract total size
   * @member {String} total_size
   */
  exports.prototype['total_size'] = undefined;
  /**
   * Lowest trading price in recent 24h
   * @member {String} low_24h
   */
  exports.prototype['low_24h'] = undefined;
  /**
   * Highest trading price in recent 24h
   * @member {String} high_24h
   */
  exports.prototype['high_24h'] = undefined;
  /**
   * Trade size in recent 24h
   * @member {String} volume_24h
   */
  exports.prototype['volume_24h'] = undefined;
  /**
   * Trade volume in recent 24h in BTC
   * @member {String} volume_24h_btc
   */
  exports.prototype['volume_24h_btc'] = undefined;
  /**
   * Trade volume in recent 24h in USD
   * @member {String} volume_24h_usd
   */
  exports.prototype['volume_24h_usd'] = undefined;
  /**
   * Recent mark price
   * @member {String} mark_price
   */
  exports.prototype['mark_price'] = undefined;
  /**
   * Funding rate
   * @member {String} funding_rate
   */
  exports.prototype['funding_rate'] = undefined;
  /**
   * Indicative Funding rate in next period
   * @member {String} funding_rate_indicative
   */
  exports.prototype['funding_rate_indicative'] = undefined;
  /**
   * Index price
   * @member {String} index_price
   */
  exports.prototype['index_price'] = undefined;
  /**
   * Exchange rate of base currency and settlement currency in Quanto contract. Not existed in contract of other types
   * @member {String} quanto_base_rate
   */
  exports.prototype['quanto_base_rate'] = undefined;



  return exports;
}));


