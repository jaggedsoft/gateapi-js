/**
 * Gate API v4
 * APIv4 futures provides all sorts of futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user's behalf.
 *
 * OpenAPI spec version: 1.2.1
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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Contract', 'model/FundingRateRecord', 'model/FuturesAccount', 'model/FuturesAccountBook', 'model/FuturesCandlestick', 'model/FuturesOrder', 'model/FuturesOrderBook', 'model/FuturesOrderBookItem', 'model/FuturesTicker', 'model/FuturesTrade', 'model/InsuranceRecord', 'model/MyFuturesTrade', 'model/Position', 'model/PositionClose', 'model/PositionCloseOrder', 'api/FuturesApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Contract'), require('./model/FundingRateRecord'), require('./model/FuturesAccount'), require('./model/FuturesAccountBook'), require('./model/FuturesCandlestick'), require('./model/FuturesOrder'), require('./model/FuturesOrderBook'), require('./model/FuturesOrderBookItem'), require('./model/FuturesTicker'), require('./model/FuturesTrade'), require('./model/InsuranceRecord'), require('./model/MyFuturesTrade'), require('./model/Position'), require('./model/PositionClose'), require('./model/PositionCloseOrder'), require('./api/FuturesApi'));
  }
}(function(ApiClient, Contract, FundingRateRecord, FuturesAccount, FuturesAccountBook, FuturesCandlestick, FuturesOrder, FuturesOrderBook, FuturesOrderBookItem, FuturesTicker, FuturesTrade, InsuranceRecord, MyFuturesTrade, Position, PositionClose, PositionCloseOrder, FuturesApi) {
  'use strict';

  /**
   * APIv4_futures_provides_all_sorts_of_futures_trading_operations_There_are_public_APIs_to_retrieve_the_real_time_market_statisticsand_private_APIs_which_needs_authentication_to_trade_on_users_behalf_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var GateApi = require('index'); // See note below*.
   * var xxxSvc = new GateApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new GateApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new GateApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new GateApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.2.1
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Contract model constructor.
     * @property {module:model/Contract}
     */
    Contract: Contract,
    /**
     * The FundingRateRecord model constructor.
     * @property {module:model/FundingRateRecord}
     */
    FundingRateRecord: FundingRateRecord,
    /**
     * The FuturesAccount model constructor.
     * @property {module:model/FuturesAccount}
     */
    FuturesAccount: FuturesAccount,
    /**
     * The FuturesAccountBook model constructor.
     * @property {module:model/FuturesAccountBook}
     */
    FuturesAccountBook: FuturesAccountBook,
    /**
     * The FuturesCandlestick model constructor.
     * @property {module:model/FuturesCandlestick}
     */
    FuturesCandlestick: FuturesCandlestick,
    /**
     * The FuturesOrder model constructor.
     * @property {module:model/FuturesOrder}
     */
    FuturesOrder: FuturesOrder,
    /**
     * The FuturesOrderBook model constructor.
     * @property {module:model/FuturesOrderBook}
     */
    FuturesOrderBook: FuturesOrderBook,
    /**
     * The FuturesOrderBookItem model constructor.
     * @property {module:model/FuturesOrderBookItem}
     */
    FuturesOrderBookItem: FuturesOrderBookItem,
    /**
     * The FuturesTicker model constructor.
     * @property {module:model/FuturesTicker}
     */
    FuturesTicker: FuturesTicker,
    /**
     * The FuturesTrade model constructor.
     * @property {module:model/FuturesTrade}
     */
    FuturesTrade: FuturesTrade,
    /**
     * The InsuranceRecord model constructor.
     * @property {module:model/InsuranceRecord}
     */
    InsuranceRecord: InsuranceRecord,
    /**
     * The MyFuturesTrade model constructor.
     * @property {module:model/MyFuturesTrade}
     */
    MyFuturesTrade: MyFuturesTrade,
    /**
     * The Position model constructor.
     * @property {module:model/Position}
     */
    Position: Position,
    /**
     * The PositionClose model constructor.
     * @property {module:model/PositionClose}
     */
    PositionClose: PositionClose,
    /**
     * The PositionCloseOrder model constructor.
     * @property {module:model/PositionCloseOrder}
     */
    PositionCloseOrder: PositionCloseOrder,
    /**
     * The FuturesApi service constructor.
     * @property {module:api/FuturesApi}
     */
    FuturesApi: FuturesApi
  };

  return exports;
}));
