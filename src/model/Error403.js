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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WeatherApi) {
      root.WeatherApi = {};
    }
    root.WeatherApi.Error403 = factory(root.WeatherApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Error403 model module.
   * @module model/Error403
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Error403</code>.
   * @alias module:model/Error403
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Error403</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Error403} obj Optional instance to populate.
   * @return {module:model/Error403} The populated <code>Error403</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} code
   */
  exports.prototype.code = undefined;

  /**
   * @member {String} message
   */
  exports.prototype.message = undefined;


  return exports;

}));
