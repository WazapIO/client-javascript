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
 * The SendDocumentRequest model module.
 * @module WhatsAPI/models/SendDocumentRequest
 * @version 1.0.0
 */
class SendDocumentRequest {
    /**
     * Constructs a new <code>SendDocumentRequest</code>.
     * @alias module:WhatsAPI/models/SendDocumentRequest
     * @param file {File} Document file
     */
    constructor(file) { 
        
        SendDocumentRequest.initialize(this, file);
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
     * Constructs a <code>SendDocumentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:WhatsAPI/models/SendDocumentRequest} obj Optional instance to populate.
     * @return {module:WhatsAPI/models/SendDocumentRequest} The populated <code>SendDocumentRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendDocumentRequest();

            if (data.hasOwnProperty('file')) {
                obj['file'] = ApiClient.convertToType(data['file'], File);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SendDocumentRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SendDocumentRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SendDocumentRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

SendDocumentRequest.RequiredProperties = ["file"];

/**
 * Document file
 * @member {File} file
 */
SendDocumentRequest.prototype['file'] = undefined;






export default SendDocumentRequest;

