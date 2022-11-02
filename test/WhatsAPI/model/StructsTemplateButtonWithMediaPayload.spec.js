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
    define(['expect.js', process.cwd()+'/src/WhatsAPI/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/WhatsAPI/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.WhatsApi);
  }
}(this, function(expect, WhatsApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new WhatsApi.StructsTemplateButtonWithMediaPayload();
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

  describe('StructsTemplateButtonWithMediaPayload', function() {
    it('should create an instance of StructsTemplateButtonWithMediaPayload', function() {
      // uncomment below and update the code to test StructsTemplateButtonWithMediaPayload
      //var instance = new WhatsApi.StructsTemplateButtonWithMediaPayload();
      //expect(instance).to.be.a(WhatsApi.StructsTemplateButtonWithMediaPayload);
    });

    it('should have the property buttons (base name: "buttons")', function() {
      // uncomment below and update the code to test the property buttons
      //var instance = new WhatsApi.StructsTemplateButtonWithMediaPayload();
      //expect(instance).to.be();
    });

    it('should have the property contentText (base name: "content_text")', function() {
      // uncomment below and update the code to test the property contentText
      //var instance = new WhatsApi.StructsTemplateButtonWithMediaPayload();
      //expect(instance).to.be();
    });

    it('should have the property footer (base name: "footer")', function() {
      // uncomment below and update the code to test the property footer
      //var instance = new WhatsApi.StructsTemplateButtonWithMediaPayload();
      //expect(instance).to.be();
    });

    it('should have the property media (base name: "media")', function() {
      // uncomment below and update the code to test the property media
      //var instance = new WhatsApi.StructsTemplateButtonWithMediaPayload();
      //expect(instance).to.be();
    });

    it('should have the property to (base name: "to")', function() {
      // uncomment below and update the code to test the property to
      //var instance = new WhatsApi.StructsTemplateButtonWithMediaPayload();
      //expect(instance).to.be();
    });

  });

}));
