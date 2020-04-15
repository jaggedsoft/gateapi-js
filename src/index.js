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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BatchOrder', 'model/CancelOrder', 'model/CancelOrderResult', 'model/Contract', 'model/CurrencyPair', 'model/FundingAccount', 'model/FundingBookItem', 'model/FundingRateRecord', 'model/FuturesAccount', 'model/FuturesAccountBook', 'model/FuturesCandlestick', 'model/FuturesInitialOrder', 'model/FuturesLiquidate', 'model/FuturesOrder', 'model/FuturesOrderBook', 'model/FuturesOrderBookItem', 'model/FuturesPriceTrigger', 'model/FuturesPriceTriggeredOrder', 'model/FuturesTicker', 'model/FuturesTrade', 'model/InsuranceRecord', 'model/Loan', 'model/LoanPatch', 'model/LoanRecord', 'model/MarginAccount', 'model/MarginAccountCurrency', 'model/MarginCurrencyPair', 'model/MyFuturesTrade', 'model/Order', 'model/OrderBook', 'model/Position', 'model/PositionClose', 'model/PositionCloseOrder', 'model/RepayRequest', 'model/Repayment', 'model/SpotAccount', 'model/SubAccountTransfer', 'model/Ticker', 'model/Trade', 'model/Transfer', 'model/TriggerOrderResponse', 'api/FuturesApi', 'api/MarginApi', 'api/SpotApi', 'api/WalletApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/BatchOrder'), require('./model/CancelOrder'), require('./model/CancelOrderResult'), require('./model/Contract'), require('./model/CurrencyPair'), require('./model/FundingAccount'), require('./model/FundingBookItem'), require('./model/FundingRateRecord'), require('./model/FuturesAccount'), require('./model/FuturesAccountBook'), require('./model/FuturesCandlestick'), require('./model/FuturesInitialOrder'), require('./model/FuturesLiquidate'), require('./model/FuturesOrder'), require('./model/FuturesOrderBook'), require('./model/FuturesOrderBookItem'), require('./model/FuturesPriceTrigger'), require('./model/FuturesPriceTriggeredOrder'), require('./model/FuturesTicker'), require('./model/FuturesTrade'), require('./model/InsuranceRecord'), require('./model/Loan'), require('./model/LoanPatch'), require('./model/LoanRecord'), require('./model/MarginAccount'), require('./model/MarginAccountCurrency'), require('./model/MarginCurrencyPair'), require('./model/MyFuturesTrade'), require('./model/Order'), require('./model/OrderBook'), require('./model/Position'), require('./model/PositionClose'), require('./model/PositionCloseOrder'), require('./model/RepayRequest'), require('./model/Repayment'), require('./model/SpotAccount'), require('./model/SubAccountTransfer'), require('./model/Ticker'), require('./model/Trade'), require('./model/Transfer'), require('./model/TriggerOrderResponse'), require('./api/FuturesApi'), require('./api/MarginApi'), require('./api/SpotApi'), require('./api/WalletApi'));
  }
}(function(ApiClient, BatchOrder, CancelOrder, CancelOrderResult, Contract, CurrencyPair, FundingAccount, FundingBookItem, FundingRateRecord, FuturesAccount, FuturesAccountBook, FuturesCandlestick, FuturesInitialOrder, FuturesLiquidate, FuturesOrder, FuturesOrderBook, FuturesOrderBookItem, FuturesPriceTrigger, FuturesPriceTriggeredOrder, FuturesTicker, FuturesTrade, InsuranceRecord, Loan, LoanPatch, LoanRecord, MarginAccount, MarginAccountCurrency, MarginCurrencyPair, MyFuturesTrade, Order, OrderBook, Position, PositionClose, PositionCloseOrder, RepayRequest, Repayment, SpotAccount, SubAccountTransfer, Ticker, Trade, Transfer, TriggerOrderResponse, FuturesApi, MarginApi, SpotApi, WalletApi) {
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
     * The BatchOrder model constructor.
     * @property {module:model/BatchOrder}
     */
    BatchOrder: BatchOrder,
    /**
     * The CancelOrder model constructor.
     * @property {module:model/CancelOrder}
     */
    CancelOrder: CancelOrder,
    /**
     * The CancelOrderResult model constructor.
     * @property {module:model/CancelOrderResult}
     */
    CancelOrderResult: CancelOrderResult,
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
     * The FundingAccount model constructor.
     * @property {module:model/FundingAccount}
     */
    FundingAccount: FundingAccount,
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
     * The FuturesInitialOrder model constructor.
     * @property {module:model/FuturesInitialOrder}
     */
    FuturesInitialOrder: FuturesInitialOrder,
    /**
     * The FuturesLiquidate model constructor.
     * @property {module:model/FuturesLiquidate}
     */
    FuturesLiquidate: FuturesLiquidate,
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
     * The FuturesPriceTrigger model constructor.
     * @property {module:model/FuturesPriceTrigger}
     */
    FuturesPriceTrigger: FuturesPriceTrigger,
    /**
     * The FuturesPriceTriggeredOrder model constructor.
     * @property {module:model/FuturesPriceTriggeredOrder}
     */
    FuturesPriceTriggeredOrder: FuturesPriceTriggeredOrder,
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
     * The Loan model constructor.
     * @property {module:model/Loan}
     */
    Loan: Loan,
    /**
     * The LoanPatch model constructor.
     * @property {module:model/LoanPatch}
     */
    LoanPatch: LoanPatch,
    /**
     * The LoanRecord model constructor.
     * @property {module:model/LoanRecord}
     */
    LoanRecord: LoanRecord,
    /**
     * The MarginAccount model constructor.
     * @property {module:model/MarginAccount}
     */
    MarginAccount: MarginAccount,
    /**
     * The MarginAccountCurrency model constructor.
     * @property {module:model/MarginAccountCurrency}
     */
    MarginAccountCurrency: MarginAccountCurrency,
    /**
     * The MarginCurrencyPair model constructor.
     * @property {module:model/MarginCurrencyPair}
     */
    MarginCurrencyPair: MarginCurrencyPair,
    /**
     * The MyFuturesTrade model constructor.
     * @property {module:model/MyFuturesTrade}
     */
    MyFuturesTrade: MyFuturesTrade,
    /**
     * The Order model constructor.
     * @property {module:model/Order}
     */
    Order: Order,
    /**
     * The OrderBook model constructor.
     * @property {module:model/OrderBook}
     */
    OrderBook: OrderBook,
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
     * The RepayRequest model constructor.
     * @property {module:model/RepayRequest}
     */
    RepayRequest: RepayRequest,
    /**
     * The Repayment model constructor.
     * @property {module:model/Repayment}
     */
    Repayment: Repayment,
    /**
     * The SpotAccount model constructor.
     * @property {module:model/SpotAccount}
     */
    SpotAccount: SpotAccount,
    /**
     * The SubAccountTransfer model constructor.
     * @property {module:model/SubAccountTransfer}
     */
    SubAccountTransfer: SubAccountTransfer,
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
     * The Transfer model constructor.
     * @property {module:model/Transfer}
     */
    Transfer: Transfer,
    /**
     * The TriggerOrderResponse model constructor.
     * @property {module:model/TriggerOrderResponse}
     */
    TriggerOrderResponse: TriggerOrderResponse,
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
    SpotApi: SpotApi,
    /**
     * The WalletApi service constructor.
     * @property {module:api/WalletApi}
     */
    WalletApi: WalletApi
  };

  return exports;
}));
