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
    instance = new WhatsApiGo.GroupManagementApi();
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

  describe('GroupManagementApi', function() {
    describe('instancesInstanceKeyGroupsAdminGet', function() {
      it('should call instancesInstanceKeyGroupsAdminGet successfully', function(done) {
        //uncomment below and update the code to test instancesInstanceKeyGroupsAdminGet
        //instance.instancesInstanceKeyGroupsAdminGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('instancesInstanceKeyGroupsCreatePost', function() {
      it('should call instancesInstanceKeyGroupsCreatePost successfully', function(done) {
        //uncomment below and update the code to test instancesInstanceKeyGroupsCreatePost
        //instance.instancesInstanceKeyGroupsCreatePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('instancesInstanceKeyGroupsGet', function() {
      it('should call instancesInstanceKeyGroupsGet successfully', function(done) {
        //uncomment below and update the code to test instancesInstanceKeyGroupsGet
        //instance.instancesInstanceKeyGroupsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('instancesInstanceKeyGroupsGroupIdAnnouncePut', function() {
      it('should call instancesInstanceKeyGroupsGroupIdAnnouncePut successfully', function(done) {
        //uncomment below and update the code to test instancesInstanceKeyGroupsGroupIdAnnouncePut
        //instance.instancesInstanceKeyGroupsGroupIdAnnouncePut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('instancesInstanceKeyGroupsGroupIdDelete', function() {
      it('should call instancesInstanceKeyGroupsGroupIdDelete successfully', function(done) {
        //uncomment below and update the code to test instancesInstanceKeyGroupsGroupIdDelete
        //instance.instancesInstanceKeyGroupsGroupIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('instancesInstanceKeyGroupsGroupIdDescriptionPut', function() {
      it('should call instancesInstanceKeyGroupsGroupIdDescriptionPut successfully', function(done) {
        //uncomment below and update the code to test instancesInstanceKeyGroupsGroupIdDescriptionPut
        //instance.instancesInstanceKeyGroupsGroupIdDescriptionPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('instancesInstanceKeyGroupsGroupIdGet', function() {
      it('should call instancesInstanceKeyGroupsGroupIdGet successfully', function(done) {
        //uncomment below and update the code to test instancesInstanceKeyGroupsGroupIdGet
        //instance.instancesInstanceKeyGroupsGroupIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('instancesInstanceKeyGroupsGroupIdInviteCodeGet', function() {
      it('should call instancesInstanceKeyGroupsGroupIdInviteCodeGet successfully', function(done) {
        //uncomment below and update the code to test instancesInstanceKeyGroupsGroupIdInviteCodeGet
        //instance.instancesInstanceKeyGroupsGroupIdInviteCodeGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('instancesInstanceKeyGroupsGroupIdLockPut', function() {
      it('should call instancesInstanceKeyGroupsGroupIdLockPut successfully', function(done) {
        //uncomment below and update the code to test instancesInstanceKeyGroupsGroupIdLockPut
        //instance.instancesInstanceKeyGroupsGroupIdLockPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('instancesInstanceKeyGroupsGroupIdNamePut', function() {
      it('should call instancesInstanceKeyGroupsGroupIdNamePut successfully', function(done) {
        //uncomment below and update the code to test instancesInstanceKeyGroupsGroupIdNamePut
        //instance.instancesInstanceKeyGroupsGroupIdNamePut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('instancesInstanceKeyGroupsGroupIdParticipantsAddPost', function() {
      it('should call instancesInstanceKeyGroupsGroupIdParticipantsAddPost successfully', function(done) {
        //uncomment below and update the code to test instancesInstanceKeyGroupsGroupIdParticipantsAddPost
        //instance.instancesInstanceKeyGroupsGroupIdParticipantsAddPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('instancesInstanceKeyGroupsGroupIdParticipantsDemotePut', function() {
      it('should call instancesInstanceKeyGroupsGroupIdParticipantsDemotePut successfully', function(done) {
        //uncomment below and update the code to test instancesInstanceKeyGroupsGroupIdParticipantsDemotePut
        //instance.instancesInstanceKeyGroupsGroupIdParticipantsDemotePut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('instancesInstanceKeyGroupsGroupIdParticipantsPromotePut', function() {
      it('should call instancesInstanceKeyGroupsGroupIdParticipantsPromotePut successfully', function(done) {
        //uncomment below and update the code to test instancesInstanceKeyGroupsGroupIdParticipantsPromotePut
        //instance.instancesInstanceKeyGroupsGroupIdParticipantsPromotePut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('instancesInstanceKeyGroupsGroupIdParticipantsRemoveDelete', function() {
      it('should call instancesInstanceKeyGroupsGroupIdParticipantsRemoveDelete successfully', function(done) {
        //uncomment below and update the code to test instancesInstanceKeyGroupsGroupIdParticipantsRemoveDelete
        //instance.instancesInstanceKeyGroupsGroupIdParticipantsRemoveDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('instancesInstanceKeyGroupsGroupIdProfilePicPut', function() {
      it('should call instancesInstanceKeyGroupsGroupIdProfilePicPut successfully', function(done) {
        //uncomment below and update the code to test instancesInstanceKeyGroupsGroupIdProfilePicPut
        //instance.instancesInstanceKeyGroupsGroupIdProfilePicPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('instancesInstanceKeyGroupsInviteInfoGet', function() {
      it('should call instancesInstanceKeyGroupsInviteInfoGet successfully', function(done) {
        //uncomment below and update the code to test instancesInstanceKeyGroupsInviteInfoGet
        //instance.instancesInstanceKeyGroupsInviteInfoGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));