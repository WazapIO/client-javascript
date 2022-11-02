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
 * The InstancesInstanceKeySendAudioPostRequest model module.
 * @module WhatsAPI/models/InstancesInstanceKeySendAudioPostRequest
 * @version 1.0.0
 */
class InstancesInstanceKeySendAudioPostRequest {
    /**
     * Constructs a new <code>InstancesInstanceKeySendAudioPostRequest</code>.
     * @alias module:WhatsAPI/models/InstancesInstanceKeySendAudioPostRequest
     * @param file {File} Audio file
     */
    constructor(file) { 
        
        InstancesInstanceKeySendAudioPostRequest.initialize(this, file);
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
     * Constructs a <code>InstancesInstanceKeySendAudioPostRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:WhatsAPI/models/InstancesInstanceKeySendAudioPostRequest} obj Optional instance to populate.
     * @return {module:WhatsAPI/models/InstancesInstanceKeySendAudioPostRequest} The populated <code>InstancesInstanceKeySendAudioPostRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstancesInstanceKeySendAudioPostRequest();

            if (data.hasOwnProperty('file')) {
                obj['file'] = ApiClient.convertToType(data['file'], File);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InstancesInstanceKeySendAudioPostRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InstancesInstanceKeySendAudioPostRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of InstancesInstanceKeySendAudioPostRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

InstancesInstanceKeySendAudioPostRequest.RequiredProperties = ["file"];

/**
 * Audio file
 * @member {File} file
 */
InstancesInstanceKeySendAudioPostRequest.prototype['file'] = undefined;






export default InstancesInstanceKeySendAudioPostRequest;

