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
    define(['ApiClient', 'model/PositionCloseOrder'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PositionCloseOrder'));
  } else {
    // Browser globals (root is window)
    if (!root.GateApi) {
      root.GateApi = {};
    }
    root.GateApi.Position = factory(root.GateApi.ApiClient, root.GateApi.PositionCloseOrder);
  }
}(this, function(ApiClient, PositionCloseOrder) {
  'use strict';



  /**
   * The Position model module.
   * @module model/Position
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>Position</code>.
   * @alias module:model/Position
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Position</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Position} obj Optional instance to populate.
   * @return {module:model/Position} The populated <code>Position</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('user')) {
        obj['user'] = ApiClient.convertToType(data['user'], 'Number');
      }
      if (data.hasOwnProperty('contract')) {
        obj['contract'] = ApiClient.convertToType(data['contract'], 'String');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
      if (data.hasOwnProperty('leverage')) {
        obj['leverage'] = ApiClient.convertToType(data['leverage'], 'String');
      }
      if (data.hasOwnProperty('risk_limit')) {
        obj['risk_limit'] = ApiClient.convertToType(data['risk_limit'], 'String');
      }
      if (data.hasOwnProperty('leverage_max')) {
        obj['leverage_max'] = ApiClient.convertToType(data['leverage_max'], 'String');
      }
      if (data.hasOwnProperty('maintenance_rate')) {
        obj['maintenance_rate'] = ApiClient.convertToType(data['maintenance_rate'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
      if (data.hasOwnProperty('margin')) {
        obj['margin'] = ApiClient.convertToType(data['margin'], 'String');
      }
      if (data.hasOwnProperty('entry_price')) {
        obj['entry_price'] = ApiClient.convertToType(data['entry_price'], 'String');
      }
      if (data.hasOwnProperty('liq_price')) {
        obj['liq_price'] = ApiClient.convertToType(data['liq_price'], 'String');
      }
      if (data.hasOwnProperty('mark_price')) {
        obj['mark_price'] = ApiClient.convertToType(data['mark_price'], 'String');
      }
      if (data.hasOwnProperty('unrealised_pnl')) {
        obj['unrealised_pnl'] = ApiClient.convertToType(data['unrealised_pnl'], 'String');
      }
      if (data.hasOwnProperty('realised_pnl')) {
        obj['realised_pnl'] = ApiClient.convertToType(data['realised_pnl'], 'String');
      }
      if (data.hasOwnProperty('history_pnl')) {
        obj['history_pnl'] = ApiClient.convertToType(data['history_pnl'], 'String');
      }
      if (data.hasOwnProperty('last_close_pnl')) {
        obj['last_close_pnl'] = ApiClient.convertToType(data['last_close_pnl'], 'String');
      }
      if (data.hasOwnProperty('adl_ranking')) {
        obj['adl_ranking'] = ApiClient.convertToType(data['adl_ranking'], 'Number');
      }
      if (data.hasOwnProperty('pending_orders')) {
        obj['pending_orders'] = ApiClient.convertToType(data['pending_orders'], 'Number');
      }
      if (data.hasOwnProperty('close_order')) {
        obj['close_order'] = PositionCloseOrder.constructFromObject(data['close_order']);
      }
    }
    return obj;
  }

  /**
   * User ID
   * @member {Number} user
   */
  exports.prototype['user'] = undefined;
  /**
   * Futures contract
   * @member {String} contract
   */
  exports.prototype['contract'] = undefined;
  /**
   * Position size
   * @member {Number} size
   */
  exports.prototype['size'] = undefined;
  /**
   * Position leverage
   * @member {String} leverage
   */
  exports.prototype['leverage'] = undefined;
  /**
   * Position risk limit
   * @member {String} risk_limit
   */
  exports.prototype['risk_limit'] = undefined;
  /**
   * Maximum leverage under current risk limit
   * @member {String} leverage_max
   */
  exports.prototype['leverage_max'] = undefined;
  /**
   * Maintenance rate under current risk limit
   * @member {String} maintenance_rate
   */
  exports.prototype['maintenance_rate'] = undefined;
  /**
   * Position value calculated in settlement currency
   * @member {String} value
   */
  exports.prototype['value'] = undefined;
  /**
   * Position margin
   * @member {String} margin
   */
  exports.prototype['margin'] = undefined;
  /**
   * Entry price
   * @member {String} entry_price
   */
  exports.prototype['entry_price'] = undefined;
  /**
   * Liquidation price
   * @member {String} liq_price
   */
  exports.prototype['liq_price'] = undefined;
  /**
   * Current mark price
   * @member {String} mark_price
   */
  exports.prototype['mark_price'] = undefined;
  /**
   * Unrealized PNL
   * @member {String} unrealised_pnl
   */
  exports.prototype['unrealised_pnl'] = undefined;
  /**
   * Realized PNL
   * @member {String} realised_pnl
   */
  exports.prototype['realised_pnl'] = undefined;
  /**
   * History realized PNL
   * @member {String} history_pnl
   */
  exports.prototype['history_pnl'] = undefined;
  /**
   * PNL of last position close
   * @member {String} last_close_pnl
   */
  exports.prototype['last_close_pnl'] = undefined;
  /**
   * ADL ranking, range from 1 to 5
   * @member {Number} adl_ranking
   */
  exports.prototype['adl_ranking'] = undefined;
  /**
   * Current open orders
   * @member {Number} pending_orders
   */
  exports.prototype['pending_orders'] = undefined;
  /**
   * @member {module:model/PositionCloseOrder} close_order
   */
  exports.prototype['close_order'] = undefined;



  return exports;
}));


