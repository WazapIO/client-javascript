/**
 * WhatsAPI Go
 * The V2 of WhatsAPI Go
 *
 * The version of the OpenAPI document: 2.0
 * Contact: manjit@sponsorbook.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.WhatsApiGo);
  }
}(this, function(expect, WhatsApiGo) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new WhatsApiGo.StructsUserInfoPayload();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('StructsUserInfoPayload', function() {
    it('should create an instance of StructsUserInfoPayload', function() {
      // uncomment below and update the code to test StructsUserInfoPayload
      //var instance = new WhatsApiGo.StructsUserInfoPayload();
      //expect(instance).to.be.a(WhatsApiGo.StructsUserInfoPayload);
    });

    it('should have the property userIds (base name: "user_ids")', function() {
      // uncomment below and update the code to test the property userIds
      //var instance = new WhatsApiGo.StructsUserInfoPayload();
      //expect(instance).to.be();
    });

  });

}));
