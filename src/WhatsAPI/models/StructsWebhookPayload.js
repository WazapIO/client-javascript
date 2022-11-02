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
 * The StructsWebhookPayload model module.
 * @module WhatsAPI/models/StructsWebhookPayload
 * @version 1.0.0
 */
class StructsWebhookPayload {
    /**
     * Constructs a new <code>StructsWebhookPayload</code>.
     * @alias module:WhatsAPI/models/StructsWebhookPayload
     */
    constructor() { 
        
        StructsWebhookPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StructsWebhookPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:WhatsAPI/models/StructsWebhookPayload} obj Optional instance to populate.
     * @return {module:WhatsAPI/models/StructsWebhookPayload} The populated <code>StructsWebhookPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StructsWebhookPayload();

            if (data.hasOwnProperty('webhook_url')) {
                obj['webhook_url'] = ApiClient.convertToType(data['webhook_url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StructsWebhookPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StructsWebhookPayload</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['webhook_url'] && !(typeof data['webhook_url'] === 'string' || data['webhook_url'] instanceof String)) {
            throw new Error("Expected the field `webhook_url` to be a primitive type in the JSON string but got " + data['webhook_url']);
        }

        return true;
    }


}



/**
 * @member {String} webhook_url
 */
StructsWebhookPayload.prototype['webhook_url'] = undefined;






export default StructsWebhookPayload;

