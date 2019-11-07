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
    root.GateApi.LoanPatch = factory(root.GateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The LoanPatch model module.
   * @module model/LoanPatch
   */

  /**
   * Constructs a new <code>LoanPatch</code>.
   * @alias module:model/LoanPatch
   * @class
   * @param currency {String} Loan currency
   * @param side {module:model/LoanPatch.SideEnum} Loan side. Possible values are `lend` and `borrow`. For `LoanRecord` patching, only `lend` is supported
   * @param autoRenew {Boolean} Auto renew
   */
  var exports = function(currency, side, autoRenew) {
    var _this = this;

    _this['currency'] = currency;
    _this['side'] = side;
    _this['auto_renew'] = autoRenew;
  };

  /**
   * Constructs a <code>LoanPatch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LoanPatch} obj Optional instance to populate.
   * @return {module:model/LoanPatch} The populated <code>LoanPatch</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('side')) {
        obj['side'] = ApiClient.convertToType(data['side'], 'String');
      }
      if (data.hasOwnProperty('auto_renew')) {
        obj['auto_renew'] = ApiClient.convertToType(data['auto_renew'], 'Boolean');
      }
      if (data.hasOwnProperty('currency_pair')) {
        obj['currency_pair'] = ApiClient.convertToType(data['currency_pair'], 'String');
      }
      if (data.hasOwnProperty('loan_id')) {
        obj['loan_id'] = ApiClient.convertToType(data['loan_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * Loan currency
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * Loan side. Possible values are `lend` and `borrow`. For `LoanRecord` patching, only `lend` is supported
   * @member {module:model/LoanPatch.SideEnum} side
   */
  exports.prototype['side'] = undefined;
  /**
   * Auto renew
   * @member {Boolean} auto_renew
   */
  exports.prototype['auto_renew'] = undefined;
  /**
   * Currency pair. Required for borrowing side
   * @member {String} currency_pair
   */
  exports.prototype['currency_pair'] = undefined;
  /**
   * Loan ID. Required for `LoanRecord` patching
   * @member {String} loan_id
   */
  exports.prototype['loan_id'] = undefined;


  /**
   * Allowed values for the <code>side</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SideEnum = {
    /**
     * value: "lend"
     * @const
     */
    "lend": "lend",
    /**
     * value: "borrow"
     * @const
     */
    "borrow": "borrow"  };


  return exports;
}));


