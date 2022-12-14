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
    instance = new WhatsApiGo.StructsGroupCreatePayload();
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

  describe('StructsGroupCreatePayload', function() {
    it('should create an instance of StructsGroupCreatePayload', function() {
      // uncomment below and update the code to test StructsGroupCreatePayload
      //var instance = new WhatsApiGo.StructsGroupCreatePayload();
      //expect(instance).to.be.a(WhatsApiGo.StructsGroupCreatePayload);
    });

    it('should have the property groupName (base name: "group_name")', function() {
      // uncomment below and update the code to test the property groupName
      //var instance = new WhatsApiGo.StructsGroupCreatePayload();
      //expect(instance).to.be();
    });

    it('should have the property participants (base name: "participants")', function() {
      // uncomment below and update the code to test the property participants
      //var instance = new WhatsApiGo.StructsGroupCreatePayload();
      //expect(instance).to.be();
    });

  });

}));
