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
 * The StructsContactMessagePayloadVcard model module.
 * @module WhatsAPI/models/StructsContactMessagePayloadVcard
 * @version 1.0.0
 */
class StructsContactMessagePayloadVcard {
    /**
     * Constructs a new <code>StructsContactMessagePayloadVcard</code>.
     * @alias module:WhatsAPI/models/StructsContactMessagePayloadVcard
     */
    constructor() { 
        
        StructsContactMessagePayloadVcard.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StructsContactMessagePayloadVcard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:WhatsAPI/models/StructsContactMessagePayloadVcard} obj Optional instance to populate.
     * @return {module:WhatsAPI/models/StructsContactMessagePayloadVcard} The populated <code>StructsContactMessagePayloadVcard</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StructsContactMessagePayloadVcard();

            if (data.hasOwnProperty('full_name')) {
                obj['full_name'] = ApiClient.convertToType(data['full_name'], 'String');
            }
            if (data.hasOwnProperty('organization')) {
                obj['organization'] = ApiClient.convertToType(data['organization'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StructsContactMessagePayloadVcard</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StructsContactMessagePayloadVcard</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['full_name'] && !(typeof data['full_name'] === 'string' || data['full_name'] instanceof String)) {
            throw new Error("Expected the field `full_name` to be a primitive type in the JSON string but got " + data['full_name']);
        }
        // ensure the json data is a string
        if (data['organization'] && !(typeof data['organization'] === 'string' || data['organization'] instanceof String)) {
            throw new Error("Expected the field `organization` to be a primitive type in the JSON string but got " + data['organization']);
        }
        // ensure the json data is a string
        if (data['phone'] && !(typeof data['phone'] === 'string' || data['phone'] instanceof String)) {
            throw new Error("Expected the field `phone` to be a primitive type in the JSON string but got " + data['phone']);
        }

        return true;
    }


}



/**
 * @member {String} full_name
 */
StructsContactMessagePayloadVcard.prototype['full_name'] = undefined;

/**
 * @member {String} organization
 */
StructsContactMessagePayloadVcard.prototype['organization'] = undefined;

/**
 * @member {String} phone
 */
StructsContactMessagePayloadVcard.prototype['phone'] = undefined;






export default StructsContactMessagePayloadVcard;

