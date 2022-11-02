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


import ApiClient from "../ApiClient";
import MainAPIResponse from '../model/MainAPIResponse';
import StructsWebhookPayload from '../model/StructsWebhookPayload';

/**
* Instance service.
* @module api/InstanceApi
* @version 2.0
*/
export default class InstanceApi {

    /**
    * Constructs a new InstanceApi. 
    * @alias module:api/InstanceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the instancesCreateGet operation.
     * @callback module:api/InstanceApi~instancesCreateGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MainAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new instance key.
     * This endpoint is used to create a new WhatsApp Web instance.
     * @param {Object} opts Optional parameters
     * @param {String} opts.instanceKey Insert instance key if you want to provide custom key
     * @param {module:api/InstanceApi~instancesCreateGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MainAPIResponse}
     */
    instancesCreateGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'instance_key': opts['instanceKey']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = MainAPIResponse;
      return this.apiClient.callApi(
        '/instances/create', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesInstanceKeyContactsGet operation.
     * @callback module:api/InstanceApi~instancesInstanceKeyContactsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MainAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get contacts.
     * Fetches the list of contacts in the instance.
     * @param {String} instanceKey Instance key
     * @param {module:api/InstanceApi~instancesInstanceKeyContactsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MainAPIResponse}
     */
    instancesInstanceKeyContactsGet(instanceKey, callback) {
      let postBody = null;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeyContactsGet");
      }

      let pathParams = {
        'instance_key': instanceKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = MainAPIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/contacts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesInstanceKeyDeleteDelete operation.
     * @callback module:api/InstanceApi~instancesInstanceKeyDeleteDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MainAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Instance.
     * Deletes the instance with the provided key.
     * @param {String} instanceKey Instance key
     * @param {module:api/InstanceApi~instancesInstanceKeyDeleteDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MainAPIResponse}
     */
    instancesInstanceKeyDeleteDelete(instanceKey, callback) {
      let postBody = null;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeyDeleteDelete");
      }

      let pathParams = {
        'instance_key': instanceKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = MainAPIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/delete', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesInstanceKeyGet operation.
     * @callback module:api/InstanceApi~instancesInstanceKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MainAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Instance.
     * Returns the instance data of single instance with connection status.
     * @param {String} instanceKey Instance key
     * @param {module:api/InstanceApi~instancesInstanceKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MainAPIResponse}
     */
    instancesInstanceKeyGet(instanceKey, callback) {
      let postBody = null;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeyGet");
      }

      let pathParams = {
        'instance_key': instanceKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = MainAPIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesInstanceKeyLogoutDelete operation.
     * @callback module:api/InstanceApi~instancesInstanceKeyLogoutDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MainAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Logout Instance.
     * Logouts of the instance with the provided key.
     * @param {String} instanceKey Instance key
     * @param {module:api/InstanceApi~instancesInstanceKeyLogoutDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MainAPIResponse}
     */
    instancesInstanceKeyLogoutDelete(instanceKey, callback) {
      let postBody = null;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeyLogoutDelete");
      }

      let pathParams = {
        'instance_key': instanceKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = MainAPIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/logout', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesInstanceKeyQrcodeGet operation.
     * @callback module:api/InstanceApi~instancesInstanceKeyQrcodeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MainAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get QrCode.
     * Returns the qrcode in the base64 format.
     * @param {String} instanceKey Instance key
     * @param {module:api/InstanceApi~instancesInstanceKeyQrcodeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MainAPIResponse}
     */
    instancesInstanceKeyQrcodeGet(instanceKey, callback) {
      let postBody = null;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeyQrcodeGet");
      }

      let pathParams = {
        'instance_key': instanceKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = MainAPIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/qrcode', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesInstanceKeyWebhookPut operation.
     * @callback module:api/InstanceApi~instancesInstanceKeyWebhookPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MainAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change Webhook url.
     * Changes the webhook url of an instance.
     * @param {String} instanceKey Instance key
     * @param {module:model/StructsWebhookPayload} data Message data
     * @param {module:api/InstanceApi~instancesInstanceKeyWebhookPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MainAPIResponse}
     */
    instancesInstanceKeyWebhookPut(instanceKey, data, callback) {
      let postBody = data;
      // verify the required parameter 'instanceKey' is set
      if (instanceKey === undefined || instanceKey === null) {
        throw new Error("Missing the required parameter 'instanceKey' when calling instancesInstanceKeyWebhookPut");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling instancesInstanceKeyWebhookPut");
      }

      let pathParams = {
        'instance_key': instanceKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = MainAPIResponse;
      return this.apiClient.callApi(
        '/instances/{instance_key}/webhook', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the instancesListGet operation.
     * @callback module:api/InstanceApi~instancesListGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MainAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all instances.
     * Fetches the list of all Instances with login status.
     * @param {module:api/InstanceApi~instancesListGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MainAPIResponse}
     */
    instancesListGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = MainAPIResponse;
      return this.apiClient.callApi(
        '/instances/list', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
