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

import ApiClient from '../ApiClient';

/**
 * The InstancesInstanceKeySendVideoPostRequest model module.
 * @module WhatsAPI/models/InstancesInstanceKeySendVideoPostRequest
 * @version 1.0.0
 */
class InstancesInstanceKeySendVideoPostRequest {
    /**
     * Constructs a new <code>InstancesInstanceKeySendVideoPostRequest</code>.
     * @alias module:WhatsAPI/models/InstancesInstanceKeySendVideoPostRequest
     * @param file {File} Video file
     */
    constructor(file) { 
        
        InstancesInstanceKeySendVideoPostRequest.initialize(this, file);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, file) { 
        obj['file'] = file;
    }

    /**
     * Constructs a <code>InstancesInstanceKeySendVideoPostRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:WhatsAPI/models/InstancesInstanceKeySendVideoPostRequest} obj Optional instance to populate.
     * @return {module:WhatsAPI/models/InstancesInstanceKeySendVideoPostRequest} The populated <code>InstancesInstanceKeySendVideoPostRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstancesInstanceKeySendVideoPostRequest();

            if (data.hasOwnProperty('file')) {
                obj['file'] = ApiClient.convertToType(data['file'], File);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InstancesInstanceKeySendVideoPostRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InstancesInstanceKeySendVideoPostRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of InstancesInstanceKeySendVideoPostRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

InstancesInstanceKeySendVideoPostRequest.RequiredProperties = ["file"];

/**
 * Video file
 * @member {File} file
 */
InstancesInstanceKeySendVideoPostRequest.prototype['file'] = undefined;






export default InstancesInstanceKeySendVideoPostRequest;
