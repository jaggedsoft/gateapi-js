/**
 * Gate API v4
 * APIv4 provides spot, margin and futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user's behalf.
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
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
    root.GateApi.DeliveryContract = factory(root.GateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The DeliveryContract model module.
   * @module model/DeliveryContract
   */

  /**
   * Constructs a new <code>DeliveryContract</code>.
   * Futures contract details
   * @alias module:model/DeliveryContract
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>DeliveryContract</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeliveryContract} obj Optional instance to populate.
   * @return {module:model/DeliveryContract} The populated <code>DeliveryContract</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('underlying')) {
        obj['underlying'] = ApiClient.convertToType(data['underlying'], 'String');
      }
      if (data.hasOwnProperty('cycle')) {
        obj['cycle'] = ApiClient.convertToType(data['cycle'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('quanto_multiplier')) {
        obj['quanto_multiplier'] = ApiClient.convertToType(data['quanto_multiplier'], 'String');
      }
      if (data.hasOwnProperty('leverage_min')) {
        obj['leverage_min'] = ApiClient.convertToType(data['leverage_min'], 'String');
      }
      if (data.hasOwnProperty('leverage_max')) {
        obj['leverage_max'] = ApiClient.convertToType(data['leverage_max'], 'String');
      }
      if (data.hasOwnProperty('maintenance_rate')) {
        obj['maintenance_rate'] = ApiClient.convertToType(data['maintenance_rate'], 'String');
      }
      if (data.hasOwnProperty('mark_type')) {
        obj['mark_type'] = ApiClient.convertToType(data['mark_type'], 'String');
      }
      if (data.hasOwnProperty('mark_price')) {
        obj['mark_price'] = ApiClient.convertToType(data['mark_price'], 'String');
      }
      if (data.hasOwnProperty('index_price')) {
        obj['index_price'] = ApiClient.convertToType(data['index_price'], 'String');
      }
      if (data.hasOwnProperty('last_price')) {
        obj['last_price'] = ApiClient.convertToType(data['last_price'], 'String');
      }
      if (data.hasOwnProperty('maker_fee_rate')) {
        obj['maker_fee_rate'] = ApiClient.convertToType(data['maker_fee_rate'], 'String');
      }
      if (data.hasOwnProperty('taker_fee_rate')) {
        obj['taker_fee_rate'] = ApiClient.convertToType(data['taker_fee_rate'], 'String');
      }
      if (data.hasOwnProperty('order_price_round')) {
        obj['order_price_round'] = ApiClient.convertToType(data['order_price_round'], 'String');
      }
      if (data.hasOwnProperty('mark_price_round')) {
        obj['mark_price_round'] = ApiClient.convertToType(data['mark_price_round'], 'String');
      }
      if (data.hasOwnProperty('basis_rate')) {
        obj['basis_rate'] = ApiClient.convertToType(data['basis_rate'], 'String');
      }
      if (data.hasOwnProperty('basis_value')) {
        obj['basis_value'] = ApiClient.convertToType(data['basis_value'], 'String');
      }
      if (data.hasOwnProperty('basis_impact_value')) {
        obj['basis_impact_value'] = ApiClient.convertToType(data['basis_impact_value'], 'String');
      }
      if (data.hasOwnProperty('settle_price')) {
        obj['settle_price'] = ApiClient.convertToType(data['settle_price'], 'String');
      }
      if (data.hasOwnProperty('settle_price_interval')) {
        obj['settle_price_interval'] = ApiClient.convertToType(data['settle_price_interval'], 'Number');
      }
      if (data.hasOwnProperty('settle_price_duration')) {
        obj['settle_price_duration'] = ApiClient.convertToType(data['settle_price_duration'], 'Number');
      }
      if (data.hasOwnProperty('expire_time')) {
        obj['expire_time'] = ApiClient.convertToType(data['expire_time'], 'Number');
      }
      if (data.hasOwnProperty('risk_limit_base')) {
        obj['risk_limit_base'] = ApiClient.convertToType(data['risk_limit_base'], 'String');
      }
      if (data.hasOwnProperty('risk_limit_step')) {
        obj['risk_limit_step'] = ApiClient.convertToType(data['risk_limit_step'], 'String');
      }
      if (data.hasOwnProperty('risk_limit_max')) {
        obj['risk_limit_max'] = ApiClient.convertToType(data['risk_limit_max'], 'String');
      }
      if (data.hasOwnProperty('order_size_min')) {
        obj['order_size_min'] = ApiClient.convertToType(data['order_size_min'], 'Number');
      }
      if (data.hasOwnProperty('order_size_max')) {
        obj['order_size_max'] = ApiClient.convertToType(data['order_size_max'], 'Number');
      }
      if (data.hasOwnProperty('order_price_deviate')) {
        obj['order_price_deviate'] = ApiClient.convertToType(data['order_price_deviate'], 'String');
      }
      if (data.hasOwnProperty('ref_discount_rate')) {
        obj['ref_discount_rate'] = ApiClient.convertToType(data['ref_discount_rate'], 'String');
      }
      if (data.hasOwnProperty('ref_rebate_rate')) {
        obj['ref_rebate_rate'] = ApiClient.convertToType(data['ref_rebate_rate'], 'String');
      }
      if (data.hasOwnProperty('orderbook_id')) {
        obj['orderbook_id'] = ApiClient.convertToType(data['orderbook_id'], 'Number');
      }
      if (data.hasOwnProperty('trade_id')) {
        obj['trade_id'] = ApiClient.convertToType(data['trade_id'], 'Number');
      }
      if (data.hasOwnProperty('trade_size')) {
        obj['trade_size'] = ApiClient.convertToType(data['trade_size'], 'Number');
      }
      if (data.hasOwnProperty('position_size')) {
        obj['position_size'] = ApiClient.convertToType(data['position_size'], 'Number');
      }
      if (data.hasOwnProperty('config_change_time')) {
        obj['config_change_time'] = ApiClient.convertToType(data['config_change_time'], 'Number');
      }
      if (data.hasOwnProperty('in_delisting')) {
        obj['in_delisting'] = ApiClient.convertToType(data['in_delisting'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Futures contract
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Underlying
   * @member {String} underlying
   */
  exports.prototype['underlying'] = undefined;
  /**
   * Cycle type, e.g. WEEKLY, QUARTERLY
   * @member {module:model/DeliveryContract.CycleEnum} cycle
   */
  exports.prototype['cycle'] = undefined;
  /**
   * Futures contract type
   * @member {module:model/DeliveryContract.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Multiplier used in converting from invoicing to settlement currency in quanto futures
   * @member {String} quanto_multiplier
   */
  exports.prototype['quanto_multiplier'] = undefined;
  /**
   * Minimum leverage
   * @member {String} leverage_min
   */
  exports.prototype['leverage_min'] = undefined;
  /**
   * Maximum leverage
   * @member {String} leverage_max
   */
  exports.prototype['leverage_max'] = undefined;
  /**
   * Maintenance rate of margin
   * @member {String} maintenance_rate
   */
  exports.prototype['maintenance_rate'] = undefined;
  /**
   * Mark price type, internal - based on internal trading, index - based on external index price
   * @member {module:model/DeliveryContract.MarkTypeEnum} mark_type
   */
  exports.prototype['mark_type'] = undefined;
  /**
   * Current mark price
   * @member {String} mark_price
   */
  exports.prototype['mark_price'] = undefined;
  /**
   * Current index price
   * @member {String} index_price
   */
  exports.prototype['index_price'] = undefined;
  /**
   * Last trading price
   * @member {String} last_price
   */
  exports.prototype['last_price'] = undefined;
  /**
   * Maker fee rate, where negative means rebate
   * @member {String} maker_fee_rate
   */
  exports.prototype['maker_fee_rate'] = undefined;
  /**
   * Taker fee rate
   * @member {String} taker_fee_rate
   */
  exports.prototype['taker_fee_rate'] = undefined;
  /**
   * Minimum order price increment
   * @member {String} order_price_round
   */
  exports.prototype['order_price_round'] = undefined;
  /**
   * Minimum mark price increment
   * @member {String} mark_price_round
   */
  exports.prototype['mark_price_round'] = undefined;
  /**
   * Fair basis rate
   * @member {String} basis_rate
   */
  exports.prototype['basis_rate'] = undefined;
  /**
   * Fair basis value
   * @member {String} basis_value
   */
  exports.prototype['basis_value'] = undefined;
  /**
   * Funding used for calculating impact bid, ask price
   * @member {String} basis_impact_value
   */
  exports.prototype['basis_impact_value'] = undefined;
  /**
   * Settle price
   * @member {String} settle_price
   */
  exports.prototype['settle_price'] = undefined;
  /**
   * Settle price update interval
   * @member {Number} settle_price_interval
   */
  exports.prototype['settle_price_interval'] = undefined;
  /**
   * Settle price update duration in seconds
   * @member {Number} settle_price_duration
   */
  exports.prototype['settle_price_duration'] = undefined;
  /**
   * Contract expiry timestamp
   * @member {Number} expire_time
   */
  exports.prototype['expire_time'] = undefined;
  /**
   * Risk limit base
   * @member {String} risk_limit_base
   */
  exports.prototype['risk_limit_base'] = undefined;
  /**
   * Step of adjusting risk limit
   * @member {String} risk_limit_step
   */
  exports.prototype['risk_limit_step'] = undefined;
  /**
   * Maximum risk limit the contract allowed
   * @member {String} risk_limit_max
   */
  exports.prototype['risk_limit_max'] = undefined;
  /**
   * Minimum order size the contract allowed
   * @member {Number} order_size_min
   */
  exports.prototype['order_size_min'] = undefined;
  /**
   * Maximum order size the contract allowed
   * @member {Number} order_size_max
   */
  exports.prototype['order_size_max'] = undefined;
  /**
   * deviation between order price and current index price. If price of an order is denoted as order_price, it must meet the following condition:      abs(order_price - mark_price) <= mark_price * order_price_deviate
   * @member {String} order_price_deviate
   */
  exports.prototype['order_price_deviate'] = undefined;
  /**
   * Referral fee rate discount
   * @member {String} ref_discount_rate
   */
  exports.prototype['ref_discount_rate'] = undefined;
  /**
   * Referrer commission rate
   * @member {String} ref_rebate_rate
   */
  exports.prototype['ref_rebate_rate'] = undefined;
  /**
   * Current orderbook ID
   * @member {Number} orderbook_id
   */
  exports.prototype['orderbook_id'] = undefined;
  /**
   * Current trade ID
   * @member {Number} trade_id
   */
  exports.prototype['trade_id'] = undefined;
  /**
   * Historical accumulation trade size
   * @member {Number} trade_size
   */
  exports.prototype['trade_size'] = undefined;
  /**
   * Current total long position size
   * @member {Number} position_size
   */
  exports.prototype['position_size'] = undefined;
  /**
   * Configuration's last changed time
   * @member {Number} config_change_time
   */
  exports.prototype['config_change_time'] = undefined;
  /**
   * Contract is delisting
   * @member {Boolean} in_delisting
   */
  exports.prototype['in_delisting'] = undefined;


  /**
   * Allowed values for the <code>cycle</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CycleEnum = {
    /**
     * value: "WEEKLY"
     * @const
     */
    "WEEKLY": "WEEKLY",
    /**
     * value: "BI-WEEKLY"
     * @const
     */
    "BI-WEEKLY": "BI-WEEKLY",
    /**
     * value: "QUARTERLY"
     * @const
     */
    "QUARTERLY": "QUARTERLY",
    /**
     * value: "BI-QUARTERLY"
     * @const
     */
    "BI-QUARTERLY": "BI-QUARTERLY"  };

  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "inverse"
     * @const
     */
    "inverse": "inverse",
    /**
     * value: "direct"
     * @const
     */
    "direct": "direct"  };

  /**
   * Allowed values for the <code>mark_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MarkTypeEnum = {
    /**
     * value: "internal"
     * @const
     */
    "internal": "internal",
    /**
     * value: "index"
     * @const
     */
    "index": "index"  };


  return exports;
}));

