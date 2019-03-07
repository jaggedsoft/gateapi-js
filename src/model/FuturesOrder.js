/**
 * Gate API v4
 * APIv4 provides spot, margin and futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user's behalf.
 *
 * OpenAPI spec version: 4.5.0
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
    root.GateApi.FuturesOrder = factory(root.GateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The FuturesOrder model module.
   * @module model/FuturesOrder
   * @version 4.5.0
   */

  /**
   * Constructs a new <code>FuturesOrder</code>.
   * @alias module:model/FuturesOrder
   * @class
   * @param contract {String} Futures contract
   */
  var exports = function(contract) {
    var _this = this;

    _this['contract'] = contract;
  };

  /**
   * Constructs a <code>FuturesOrder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FuturesOrder} obj Optional instance to populate.
   * @return {module:model/FuturesOrder} The populated <code>FuturesOrder</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = ApiClient.convertToType(data['user'], 'Number');
      }
      if (data.hasOwnProperty('create_time')) {
        obj['create_time'] = ApiClient.convertToType(data['create_time'], 'Number');
      }
      if (data.hasOwnProperty('finish_time')) {
        obj['finish_time'] = ApiClient.convertToType(data['finish_time'], 'Number');
      }
      if (data.hasOwnProperty('finish_as')) {
        obj['finish_as'] = ApiClient.convertToType(data['finish_as'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('contract')) {
        obj['contract'] = ApiClient.convertToType(data['contract'], 'String');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
      if (data.hasOwnProperty('iceberg')) {
        obj['iceberg'] = ApiClient.convertToType(data['iceberg'], 'Number');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'String');
      }
      if (data.hasOwnProperty('close')) {
        obj['close'] = ApiClient.convertToType(data['close'], 'Boolean');
      }
      if (data.hasOwnProperty('is_close')) {
        obj['is_close'] = ApiClient.convertToType(data['is_close'], 'Boolean');
      }
      if (data.hasOwnProperty('reduce_only')) {
        obj['reduce_only'] = ApiClient.convertToType(data['reduce_only'], 'Boolean');
      }
      if (data.hasOwnProperty('is_reduce_only')) {
        obj['is_reduce_only'] = ApiClient.convertToType(data['is_reduce_only'], 'Boolean');
      }
      if (data.hasOwnProperty('is_liq')) {
        obj['is_liq'] = ApiClient.convertToType(data['is_liq'], 'Boolean');
      }
      if (data.hasOwnProperty('tif')) {
        obj['tif'] = ApiClient.convertToType(data['tif'], 'String');
      }
      if (data.hasOwnProperty('left')) {
        obj['left'] = ApiClient.convertToType(data['left'], 'Number');
      }
      if (data.hasOwnProperty('fill_price')) {
        obj['fill_price'] = ApiClient.convertToType(data['fill_price'], 'String');
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
      if (data.hasOwnProperty('tkfr')) {
        obj['tkfr'] = ApiClient.convertToType(data['tkfr'], 'String');
      }
      if (data.hasOwnProperty('mkfr')) {
        obj['mkfr'] = ApiClient.convertToType(data['mkfr'], 'String');
      }
      if (data.hasOwnProperty('refu')) {
        obj['refu'] = ApiClient.convertToType(data['refu'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Futures order ID
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * User ID
   * @member {Number} user
   */
  exports.prototype['user'] = undefined;
  /**
   * Order creation time
   * @member {Number} create_time
   */
  exports.prototype['create_time'] = undefined;
  /**
   * Order finished time. Not returned if order is open
   * @member {Number} finish_time
   */
  exports.prototype['finish_time'] = undefined;
  /**
   * How the order is finished.  - filled: all filled - cancelled: manually cancelled - liquidated: cancelled because of liquidation - ioc: time in force is `IOC`, finish immediately - auto_deleveraged: finished by ADL - reduce_only: cancelled because of increasing position while `reduce-only` set
   * @member {module:model/FuturesOrder.FinishAsEnum} finish_as
   */
  exports.prototype['finish_as'] = undefined;
  /**
   * Order status  - `open`: waiting to be traded - `finished`: finished
   * @member {module:model/FuturesOrder.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Futures contract
   * @member {String} contract
   */
  exports.prototype['contract'] = undefined;
  /**
   * Order size. Specify positive number to make a bid, and negative number to ask
   * @member {Number} size
   */
  exports.prototype['size'] = undefined;
  /**
   * Display size for iceberg order. 0 for non-iceberg. Note that you would pay the taker fee for the hidden size
   * @member {Number} iceberg
   */
  exports.prototype['iceberg'] = undefined;
  /**
   * Order price. 0 for market order with `tif` set as `ioc`
   * @member {String} price
   */
  exports.prototype['price'] = undefined;
  /**
   * Set as `true` to close the position, with `size` set to 0
   * @member {Boolean} close
   * @default false
   */
  exports.prototype['close'] = false;
  /**
   * Is the order to close position
   * @member {Boolean} is_close
   */
  exports.prototype['is_close'] = undefined;
  /**
   * Set as `true` to be post-only order
   * @member {Boolean} reduce_only
   * @default false
   */
  exports.prototype['reduce_only'] = false;
  /**
   * Is the order post-only
   * @member {Boolean} is_reduce_only
   */
  exports.prototype['is_reduce_only'] = undefined;
  /**
   * Is the order for liquidation
   * @member {Boolean} is_liq
   */
  exports.prototype['is_liq'] = undefined;
  /**
   * Time in force  - gtc: GoodTillCancelled - ioc: ImmediateOrCancelled, taker only - poc: PendingOrCancelled, post-only
   * @member {module:model/FuturesOrder.TifEnum} tif
   * @default 'gtc'
   */
  exports.prototype['tif'] = 'gtc';
  /**
   * Size left to be traded
   * @member {Number} left
   */
  exports.prototype['left'] = undefined;
  /**
   * Fill price of the order
   * @member {String} fill_price
   */
  exports.prototype['fill_price'] = undefined;
  /**
   * How order is created  - web: from web - api: from API - app: from mobile phones - auto_deleveraging: from ADL - liquidation: from liquidation - insurance: from insurance 
   * @member {String} text
   */
  exports.prototype['text'] = undefined;
  /**
   * Taker fee
   * @member {String} tkfr
   */
  exports.prototype['tkfr'] = undefined;
  /**
   * Maker fee
   * @member {String} mkfr
   */
  exports.prototype['mkfr'] = undefined;
  /**
   * Reference user ID
   * @member {Number} refu
   */
  exports.prototype['refu'] = undefined;


  /**
   * Allowed values for the <code>finish_as</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FinishAsEnum = {
    /**
     * value: "filled"
     * @const
     */
    "filled": "filled",
    /**
     * value: "cancelled"
     * @const
     */
    "cancelled": "cancelled",
    /**
     * value: "liquidated"
     * @const
     */
    "liquidated": "liquidated",
    /**
     * value: "ioc"
     * @const
     */
    "ioc": "ioc",
    /**
     * value: "auto_deleveraged"
     * @const
     */
    "auto_deleveraged": "auto_deleveraged",
    /**
     * value: "reduce_only"
     * @const
     */
    "reduce_only": "reduce_only"  };

  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "open"
     * @const
     */
    "open": "open",
    /**
     * value: "finished"
     * @const
     */
    "finished": "finished"  };

  /**
   * Allowed values for the <code>tif</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TifEnum = {
    /**
     * value: "gtc"
     * @const
     */
    "gtc": "gtc",
    /**
     * value: "ioc"
     * @const
     */
    "ioc": "ioc",
    /**
     * value: "poc"
     * @const
     */
    "poc": "poc"  };


  return exports;
}));


