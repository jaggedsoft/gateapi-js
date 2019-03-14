/**
 * Gate API v4
 * APIv4 provides spot, margin and futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user's behalf.
 *
 * OpenAPI spec version: 4.5.2
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
    root.GateApi.LoanRecord = factory(root.GateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The LoanRecord model module.
   * @module model/LoanRecord
   * @version 4.5.2
   */

  /**
   * Constructs a new <code>LoanRecord</code>.
   * @alias module:model/LoanRecord
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>LoanRecord</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LoanRecord} obj Optional instance to populate.
   * @return {module:model/LoanRecord} The populated <code>LoanRecord</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('loan_id')) {
        obj['loan_id'] = ApiClient.convertToType(data['loan_id'], 'String');
      }
      if (data.hasOwnProperty('create_time')) {
        obj['create_time'] = ApiClient.convertToType(data['create_time'], 'String');
      }
      if (data.hasOwnProperty('expire_time')) {
        obj['expire_time'] = ApiClient.convertToType(data['expire_time'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('borrow_user_id')) {
        obj['borrow_user_id'] = ApiClient.convertToType(data['borrow_user_id'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('rate')) {
        obj['rate'] = ApiClient.convertToType(data['rate'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
      }
      if (data.hasOwnProperty('days')) {
        obj['days'] = ApiClient.convertToType(data['days'], 'Number');
      }
      if (data.hasOwnProperty('auto_renew')) {
        obj['auto_renew'] = ApiClient.convertToType(data['auto_renew'], 'Boolean');
      }
      if (data.hasOwnProperty('repaid')) {
        obj['repaid'] = ApiClient.convertToType(data['repaid'], 'String');
      }
      if (data.hasOwnProperty('paid_interest')) {
        obj['paid_interest'] = ApiClient.convertToType(data['paid_interest'], 'String');
      }
      if (data.hasOwnProperty('unpaid_interest')) {
        obj['unpaid_interest'] = ApiClient.convertToType(data['unpaid_interest'], 'String');
      }
    }
    return obj;
  }

  /**
   * Loan record ID
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Loan ID the record belongs to
   * @member {String} loan_id
   */
  exports.prototype['loan_id'] = undefined;
  /**
   * Loan time
   * @member {String} create_time
   */
  exports.prototype['create_time'] = undefined;
  /**
   * Expiration time
   * @member {String} expire_time
   */
  exports.prototype['expire_time'] = undefined;
  /**
   * Loan record status
   * @member {module:model/LoanRecord.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Garbled user ID
   * @member {String} borrow_user_id
   */
  exports.prototype['borrow_user_id'] = undefined;
  /**
   * Loan currency
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * Loan rate
   * @member {String} rate
   */
  exports.prototype['rate'] = undefined;
  /**
   * Loan amount
   * @member {String} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * Loan days
   * @member {Number} days
   */
  exports.prototype['days'] = undefined;
  /**
   * Whether the record will auto renew on expiration
   * @member {Boolean} auto_renew
   * @default false
   */
  exports.prototype['auto_renew'] = false;
  /**
   * Repaid amount
   * @member {String} repaid
   */
  exports.prototype['repaid'] = undefined;
  /**
   * Repaid interest
   * @member {String} paid_interest
   */
  exports.prototype['paid_interest'] = undefined;
  /**
   * Interest not repaid
   * @member {String} unpaid_interest
   */
  exports.prototype['unpaid_interest'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "loaned"
     * @const
     */
    "loaned": "loaned",
    /**
     * value: "finished"
     * @const
     */
    "finished": "finished"  };


  return exports;
}));


