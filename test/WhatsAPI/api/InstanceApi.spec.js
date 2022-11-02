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
    instance = new WhatsApi.InstanceApi();
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

  describe('InstanceApi', function() {
    describe('instancesCreateGet', function() {
      it('should call instancesCreateGet successfully', function(done) {
        //uncomment below and update the code to test instancesCreateGet
        //instance.instancesCreateGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('instancesInstanceKeyContactsGet', function() {
      it('should call instancesInstanceKeyContactsGet successfully', function(done) {
        //uncomment below and update the code to test instancesInstanceKeyContactsGet
        //instance.instancesInstanceKeyContactsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('instancesInstanceKeyDeleteDelete', function() {
      it('should call instancesInstanceKeyDeleteDelete successfully', function(done) {
        //uncomment below and update the code to test instancesInstanceKeyDeleteDelete
        //instance.instancesInstanceKeyDeleteDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('instancesInstanceKeyGet', function() {
      it('should call instancesInstanceKeyGet successfully', function(done) {
        //uncomment below and update the code to test instancesInstanceKeyGet
        //instance.instancesInstanceKeyGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('instancesInstanceKeyLogoutDelete', function() {
      it('should call instancesInstanceKeyLogoutDelete successfully', function(done) {
        //uncomment below and update the code to test instancesInstanceKeyLogoutDelete
        //instance.instancesInstanceKeyLogoutDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('instancesInstanceKeyQrcodeGet', function() {
      it('should call instancesInstanceKeyQrcodeGet successfully', function(done) {
        //uncomment below and update the code to test instancesInstanceKeyQrcodeGet
        //instance.instancesInstanceKeyQrcodeGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('instancesInstanceKeyWebhookPut', function() {
      it('should call instancesInstanceKeyWebhookPut successfully', function(done) {
        //uncomment below and update the code to test instancesInstanceKeyWebhookPut
        //instance.instancesInstanceKeyWebhookPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('instancesListGet', function() {
      it('should call instancesListGet successfully', function(done) {
        //uncomment below and update the code to test instancesListGet
        //instance.instancesListGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
