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
    root.GateApi.FundingAccount = factory(root.GateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The FundingAccount model module.
   * @module model/FundingAccount
   */

  /**
   * Constructs a new <code>FundingAccount</code>.
   * @alias module:model/FundingAccount
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>FundingAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FundingAccount} obj Optional instance to populate.
   * @return {module:model/FundingAccount} The populated <code>FundingAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('available')) {
        obj['available'] = ApiClient.convertToType(data['available'], 'String');
      }
      if (data.hasOwnProperty('locked')) {
        obj['locked'] = ApiClient.convertToType(data['locked'], 'String');
      }
      if (data.hasOwnProperty('lent')) {
        obj['lent'] = ApiClient.convertToType(data['lent'], 'String');
      }
      if (data.hasOwnProperty('total_lent')) {
        obj['total_lent'] = ApiClient.convertToType(data['total_lent'], 'String');
      }
    }
    return obj;
  }

  /**
   * Currency name
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * Available assets to lend, which is identical to spot account `available`
   * @member {String} available
   */
  exports.prototype['available'] = undefined;
  /**
   * Locked amount. i.e. amount in `open` loans
   * @member {String} locked
   */
  exports.prototype['locked'] = undefined;
  /**
   * Amount that is loaned but not repaid
   * @member {String} lent
   */
  exports.prototype['lent'] = undefined;
  /**
   * Amount used for lending. total_lent = lent + locked
   * @member {String} total_lent
   */
  exports.prototype['total_lent'] = undefined;



  return exports;
}));


