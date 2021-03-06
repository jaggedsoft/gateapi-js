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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Contract', 'model/CurrencyPair', 'model/DeliveryContract', 'model/FundingBookItem', 'model/FundingRateRecord', 'model/FuturesCandlestick', 'model/FuturesOrderBook', 'model/FuturesOrderBookItem', 'model/FuturesTicker', 'model/FuturesTrade', 'model/InsuranceRecord', 'model/MarginCurrencyPair', 'model/OrderBook', 'model/Ticker', 'model/Trade', 'api/DeliveryApi', 'api/FuturesApi', 'api/MarginApi', 'api/SpotApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Contract'), require('./model/CurrencyPair'), require('./model/DeliveryContract'), require('./model/FundingBookItem'), require('./model/FundingRateRecord'), require('./model/FuturesCandlestick'), require('./model/FuturesOrderBook'), require('./model/FuturesOrderBookItem'), require('./model/FuturesTicker'), require('./model/FuturesTrade'), require('./model/InsuranceRecord'), require('./model/MarginCurrencyPair'), require('./model/OrderBook'), require('./model/Ticker'), require('./model/Trade'), require('./api/DeliveryApi'), require('./api/FuturesApi'), require('./api/MarginApi'), require('./api/SpotApi'));
  }
}(function(ApiClient, Contract, CurrencyPair, DeliveryContract, FundingBookItem, FundingRateRecord, FuturesCandlestick, FuturesOrderBook, FuturesOrderBookItem, FuturesTicker, FuturesTrade, InsuranceRecord, MarginCurrencyPair, OrderBook, Ticker, Trade, DeliveryApi, FuturesApi, MarginApi, SpotApi) {
  'use strict';

  /**
   * APIv4_provides_spot_margin_and_futures_trading_operations__There_are_public_APIs_to_retrieve_the_real_time_market_statistics_and_private_APIs_which_needs_authentication_to_trade_on_users_behalf_.<br>
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
     * The CurrencyPair model constructor.
     * @property {module:model/CurrencyPair}
     */
    CurrencyPair: CurrencyPair,
    /**
     * The DeliveryContract model constructor.
     * @property {module:model/DeliveryContract}
     */
    DeliveryContract: DeliveryContract,
    /**
     * The FundingBookItem model constructor.
     * @property {module:model/FundingBookItem}
     */
    FundingBookItem: FundingBookItem,
    /**
     * The FundingRateRecord model constructor.
     * @property {module:model/FundingRateRecord}
     */
    FundingRateRecord: FundingRateRecord,
    /**
     * The FuturesCandlestick model constructor.
     * @property {module:model/FuturesCandlestick}
     */
    FuturesCandlestick: FuturesCandlestick,
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
     * The MarginCurrencyPair model constructor.
     * @property {module:model/MarginCurrencyPair}
     */
    MarginCurrencyPair: MarginCurrencyPair,
    /**
     * The OrderBook model constructor.
     * @property {module:model/OrderBook}
     */
    OrderBook: OrderBook,
    /**
     * The Ticker model constructor.
     * @property {module:model/Ticker}
     */
    Ticker: Ticker,
    /**
     * The Trade model constructor.
     * @property {module:model/Trade}
     */
    Trade: Trade,
    /**
     * The DeliveryApi service constructor.
     * @property {module:api/DeliveryApi}
     */
    DeliveryApi: DeliveryApi,
    /**
     * The FuturesApi service constructor.
     * @property {module:api/FuturesApi}
     */
    FuturesApi: FuturesApi,
    /**
     * The MarginApi service constructor.
     * @property {module:api/MarginApi}
     */
    MarginApi: MarginApi,
    /**
     * The SpotApi service constructor.
     * @property {module:api/SpotApi}
     */
    SpotApi: SpotApi
  };

  return exports;
}));
