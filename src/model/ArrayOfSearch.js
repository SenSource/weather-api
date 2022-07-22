/*
 * Weather API
 *  # Introduction  WeatherAPI.com provides access to weather and geo data via a JSON/XML restful API. It allows developers to create desktop, web and mobile applications using this data very easy.    We provide following data through our API:     - Real-time weather - 14 day weather forecast - Astronomy - Time zone - Location data - Search or Autocomplete API - NEW: Historical weather - NEW: Future Weather (Upto 300 days ahead) - Weather Alerts - Air Quality Data  # Getting Started    You need to [signup](https://www.weatherapi.com/signup.aspx) and then you can find your API key under [your account](https://www.weatherapi.com/login.aspx), and start using API right away!    We have [code libraries](https://www.weatherapi.com/docs/code-libraries.aspx) for different programming languages like PHP, .net, JAVA, etc.  If you find any features missing or have any suggestions, please [contact us](https://www.weatherapi.com/contact.aspx).    # Authentication    API access to the data is protected by an API key. If at anytime, you find the API key has become vulnerable, please regenerate the key using Regenerate button next to the API key.  Authentication to the WeatherAPI.com API is provided by passing your API key as request parameter through an API .      ##  key parameter  key=<YOUR API KEY>  
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.27
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Search'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Search'));
  } else {
    // Browser globals (root is window)
    if (!root.WeatherApi) {
      root.WeatherApi = {};
    }
    root.WeatherApi.ArrayOfSearch = factory(root.WeatherApi.ApiClient, root.WeatherApi.Search);
  }
}(this, function(ApiClient, Search) {
  'use strict';

  /**
   * The ArrayOfSearch model module.
   * @module model/ArrayOfSearch
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ArrayOfSearch</code>.
   * @alias module:model/ArrayOfSearch
   * @class
   * @extends Array
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ArrayOfSearch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ArrayOfSearch} obj Optional instance to populate.
   * @return {module:model/ArrayOfSearch} The populated <code>ArrayOfSearch</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'Search');
    }
    return obj;
  }

  Object.setPrototypeOf(exports.prototype, new Array());

  return exports;

}));
