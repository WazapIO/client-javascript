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
 * The StructsUserInfoPayload model module.
 * @module WhatsAPI/models/StructsUserInfoPayload
 * @version 1.0.0
 */
class StructsUserInfoPayload {
    /**
     * Constructs a new <code>StructsUserInfoPayload</code>.
     * @alias module:WhatsAPI/models/StructsUserInfoPayload
     * @param userIds {Array.<String>} 
     */
    constructor(userIds) { 
        
        StructsUserInfoPayload.initialize(this, userIds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, userIds) { 
        obj['user_ids'] = userIds;
    }

    /**
     * Constructs a <code>StructsUserInfoPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:WhatsAPI/models/StructsUserInfoPayload} obj Optional instance to populate.
     * @return {module:WhatsAPI/models/StructsUserInfoPayload} The populated <code>StructsUserInfoPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StructsUserInfoPayload();

            if (data.hasOwnProperty('user_ids')) {
                obj['user_ids'] = ApiClient.convertToType(data['user_ids'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StructsUserInfoPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StructsUserInfoPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of StructsUserInfoPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['user_ids'])) {
            throw new Error("Expected the field `user_ids` to be an array in the JSON data but got " + data['user_ids']);
        }

        return true;
    }


}

StructsUserInfoPayload.RequiredProperties = ["user_ids"];

/**
 * @member {Array.<String>} user_ids
 */
StructsUserInfoPayload.prototype['user_ids'] = undefined;






export default StructsUserInfoPayload;

