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
    root.GateApi.Transfer = factory(root.GateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Transfer model module.
   * @module model/Transfer
   */

  /**
   * Constructs a new <code>Transfer</code>.
   * @alias module:model/Transfer
   * @class
   * @param currency {String} Transfer currency name
   * @param from {module:model/Transfer.FromEnum} Account transferred from. `spot` - spot account. `margin` - margin account
   * @param to {module:model/Transfer.ToEnum} Account transferred to. `spot` - spot account. `margin` - margin account
   * @param amount {String} Transfer amount
   * @param currencyPair {String} Required if transfer from or to margin account
   */
  var exports = function(currency, from, to, amount, currencyPair) {
    var _this = this;

    _this['currency'] = currency;
    _this['from'] = from;
    _this['to'] = to;
    _this['amount'] = amount;
    _this['currency_pair'] = currencyPair;
  };

  /**
   * Constructs a <code>Transfer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Transfer} obj Optional instance to populate.
   * @return {module:model/Transfer} The populated <code>Transfer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('from')) {
        obj['from'] = ApiClient.convertToType(data['from'], 'String');
      }
      if (data.hasOwnProperty('to')) {
        obj['to'] = ApiClient.convertToType(data['to'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
      }
      if (data.hasOwnProperty('currency_pair')) {
        obj['currency_pair'] = ApiClient.convertToType(data['currency_pair'], 'String');
      }
    }
    return obj;
  }

  /**
   * Transfer currency name
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * Account transferred from. `spot` - spot account. `margin` - margin account
   * @member {module:model/Transfer.FromEnum} from
   */
  exports.prototype['from'] = undefined;
  /**
   * Account transferred to. `spot` - spot account. `margin` - margin account
   * @member {module:model/Transfer.ToEnum} to
   */
  exports.prototype['to'] = undefined;
  /**
   * Transfer amount
   * @member {String} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * Required if transfer from or to margin account
   * @member {String} currency_pair
   */
  exports.prototype['currency_pair'] = undefined;


  /**
   * Allowed values for the <code>from</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FromEnum = {
    /**
     * value: "spot"
     * @const
     */
    "spot": "spot",
    /**
     * value: "margin"
     * @const
     */
    "margin": "margin"  };

  /**
   * Allowed values for the <code>to</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ToEnum = {
    /**
     * value: "spot"
     * @const
     */
    "spot": "spot",
    /**
     * value: "margin"
     * @const
     */
    "margin": "margin"  };


  return exports;
}));


