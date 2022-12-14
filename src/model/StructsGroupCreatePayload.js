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
 * The StructsGroupCreatePayload model module.
 * @module model/StructsGroupCreatePayload
 * @version 1.0.0
 */
class StructsGroupCreatePayload {
    /**
     * Constructs a new <code>StructsGroupCreatePayload</code>.
     * @alias module:model/StructsGroupCreatePayload
     */
    constructor() { 
        
        StructsGroupCreatePayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StructsGroupCreatePayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StructsGroupCreatePayload} obj Optional instance to populate.
     * @return {module:model/StructsGroupCreatePayload} The populated <code>StructsGroupCreatePayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StructsGroupCreatePayload();

            if (data.hasOwnProperty('group_name')) {
                obj['group_name'] = ApiClient.convertToType(data['group_name'], 'String');
            }
            if (data.hasOwnProperty('participants')) {
                obj['participants'] = ApiClient.convertToType(data['participants'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StructsGroupCreatePayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StructsGroupCreatePayload</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['group_name'] && !(typeof data['group_name'] === 'string' || data['group_name'] instanceof String)) {
            throw new Error("Expected the field `group_name` to be a primitive type in the JSON string but got " + data['group_name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['participants'])) {
            throw new Error("Expected the field `participants` to be an array in the JSON data but got " + data['participants']);
        }

        return true;
    }


}



/**
 * @member {String} group_name
 */
StructsGroupCreatePayload.prototype['group_name'] = undefined;

/**
 * @member {Array.<String>} participants
 */
StructsGroupCreatePayload.prototype['participants'] = undefined;






export default StructsGroupCreatePayload;

