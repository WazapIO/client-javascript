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
    instance = new WhatsApi.StructsFileUpload();
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

  describe('StructsFileUpload', function() {
    it('should create an instance of StructsFileUpload', function() {
      // uncomment below and update the code to test StructsFileUpload
      //var instance = new WhatsApi.StructsFileUpload();
      //expect(instance).to.be.a(WhatsApi.StructsFileUpload);
    });

    it('should have the property directPath (base name: "direct_path")', function() {
      // uncomment below and update the code to test the property directPath
      //var instance = new WhatsApi.StructsFileUpload();
      //expect(instance).to.be();
    });

    it('should have the property fileEncSha256 (base name: "file_enc_sha256")', function() {
      // uncomment below and update the code to test the property fileEncSha256
      //var instance = new WhatsApi.StructsFileUpload();
      //expect(instance).to.be();
    });

    it('should have the property fileLength (base name: "file_length")', function() {
      // uncomment below and update the code to test the property fileLength
      //var instance = new WhatsApi.StructsFileUpload();
      //expect(instance).to.be();
    });

    it('should have the property fileSha256 (base name: "file_sha256")', function() {
      // uncomment below and update the code to test the property fileSha256
      //var instance = new WhatsApi.StructsFileUpload();
      //expect(instance).to.be();
    });

    it('should have the property mediaKey (base name: "media_key")', function() {
      // uncomment below and update the code to test the property mediaKey
      //var instance = new WhatsApi.StructsFileUpload();
      //expect(instance).to.be();
    });

    it('should have the property mimeType (base name: "mime_type")', function() {
      // uncomment below and update the code to test the property mimeType
      //var instance = new WhatsApi.StructsFileUpload();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new WhatsApi.StructsFileUpload();
      //expect(instance).to.be();
    });

  });

}));
