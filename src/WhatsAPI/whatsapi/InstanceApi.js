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
import MainAPIResponse from '../models/MainAPIResponse';
import StructsWebhookPayload from '../models/StructsWebhookPayload';

/**
* Instance service.
* @module WhatsAPI/whatsapi/InstanceApi
* @version 1.0.0
*/
export default class InstanceApi {

    /**
    * Constructs a new InstanceApi. 
    * @alias module:WhatsAPI/whatsapi/InstanceApi
    * @class
    * @param {module:WhatsAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:WhatsAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the instancesCreateGet operation.
     * @callback module:WhatsAPI/whatsapi/InstanceApi~instancesCreateGetCallback
     * @param {String} error Error message, if any.
     * @param {module:WhatsAPI/models/MainAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new instance key.
     * This endpoint is used to create a new WhatsApp Web instance.
     * @param {Object} opts Optional parameters
     * @param {String} opts.instanceKey Insert instance key if you want to provide custom key
     * @param {module:WhatsAPI/whatsapi/InstanceApi~instancesCreateGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:WhatsAPI/models/MainAPIResponse}
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
     * @callback module:WhatsAPI/whatsapi/InstanceApi~instancesInstanceKeyContactsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:WhatsAPI/models/MainAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get contacts.
     * Fetches the list of contacts in the instance.
     * @param {String} instanceKey Instance key
     * @param {module:WhatsAPI/whatsapi/InstanceApi~instancesInstanceKeyContactsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:WhatsAPI/models/MainAPIResponse}
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
     * @callback module:WhatsAPI/whatsapi/InstanceApi~instancesInstanceKeyDeleteDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:WhatsAPI/models/MainAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Instance.
     * Deletes the instance with the provided key.
     * @param {String} instanceKey Instance key
     * @param {module:WhatsAPI/whatsapi/InstanceApi~instancesInstanceKeyDeleteDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:WhatsAPI/models/MainAPIResponse}
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
     * @callback module:WhatsAPI/whatsapi/InstanceApi~instancesInstanceKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:WhatsAPI/models/MainAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Instance.
     * Returns the instance data of single instance with connection status.
     * @param {String} instanceKey Instance key
     * @param {module:WhatsAPI/whatsapi/InstanceApi~instancesInstanceKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:WhatsAPI/models/MainAPIResponse}
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
     * @callback module:WhatsAPI/whatsapi/InstanceApi~instancesInstanceKeyLogoutDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:WhatsAPI/models/MainAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Logout Instance.
     * Logouts of the instance with the provided key.
     * @param {String} instanceKey Instance key
     * @param {module:WhatsAPI/whatsapi/InstanceApi~instancesInstanceKeyLogoutDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:WhatsAPI/models/MainAPIResponse}
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
     * @callback module:WhatsAPI/whatsapi/InstanceApi~instancesInstanceKeyQrcodeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:WhatsAPI/models/MainAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get QrCode.
     * Returns the qrcode in the base64 format.
     * @param {String} instanceKey Instance key
     * @param {module:WhatsAPI/whatsapi/InstanceApi~instancesInstanceKeyQrcodeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:WhatsAPI/models/MainAPIResponse}
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
     * @callback module:WhatsAPI/whatsapi/InstanceApi~instancesInstanceKeyWebhookPutCallback
     * @param {String} error Error message, if any.
     * @param {module:WhatsAPI/models/MainAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change Webhook url.
     * Changes the webhook url of an instance.
     * @param {String} instanceKey Instance key
     * @param {module:WhatsAPI/models/StructsWebhookPayload} data Message data
     * @param {module:WhatsAPI/whatsapi/InstanceApi~instancesInstanceKeyWebhookPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:WhatsAPI/models/MainAPIResponse}
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
     * @callback module:WhatsAPI/whatsapi/InstanceApi~instancesListGetCallback
     * @param {String} error Error message, if any.
     * @param {module:WhatsAPI/models/MainAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all instances.
     * Fetches the list of all Instances with login status.
     * @param {module:WhatsAPI/whatsapi/InstanceApi~instancesListGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:WhatsAPI/models/MainAPIResponse}
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
