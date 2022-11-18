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
 * The GroupInviteMessagePayload model module.
 * @module WhatsAPI/models/GroupInviteMessagePayload
 * @version 1.0.0
 */
class GroupInviteMessagePayload {
    /**
     * Constructs a new <code>GroupInviteMessagePayload</code>.
     * @alias module:WhatsAPI/models/GroupInviteMessagePayload
     */
    constructor() { 
        
        GroupInviteMessagePayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GroupInviteMessagePayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:WhatsAPI/models/GroupInviteMessagePayload} obj Optional instance to populate.
     * @return {module:WhatsAPI/models/GroupInviteMessagePayload} The populated <code>GroupInviteMessagePayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GroupInviteMessagePayload();

            if (data.hasOwnProperty('caption')) {
                obj['caption'] = ApiClient.convertToType(data['caption'], 'String');
            }
            if (data.hasOwnProperty('expiry_minutes')) {
                obj['expiry_minutes'] = ApiClient.convertToType(data['expiry_minutes'], 'Number');
            }
            if (data.hasOwnProperty('invite_code')) {
                obj['invite_code'] = ApiClient.convertToType(data['invite_code'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GroupInviteMessagePayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GroupInviteMessagePayload</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['caption'] && !(typeof data['caption'] === 'string' || data['caption'] instanceof String)) {
            throw new Error("Expected the field `caption` to be a primitive type in the JSON string but got " + data['caption']);
        }
        // ensure the json data is a string
        if (data['invite_code'] && !(typeof data['invite_code'] === 'string' || data['invite_code'] instanceof String)) {
            throw new Error("Expected the field `invite_code` to be a primitive type in the JSON string but got " + data['invite_code']);
        }
        // ensure the json data is a string
        if (data['to'] && !(typeof data['to'] === 'string' || data['to'] instanceof String)) {
            throw new Error("Expected the field `to` to be a primitive type in the JSON string but got " + data['to']);
        }

        return true;
    }


}



/**
 * @member {String} caption
 */
GroupInviteMessagePayload.prototype['caption'] = undefined;

/**
 * @member {Number} expiry_minutes
 */
GroupInviteMessagePayload.prototype['expiry_minutes'] = undefined;

/**
 * @member {String} invite_code
 */
GroupInviteMessagePayload.prototype['invite_code'] = undefined;

/**
 * @member {String} to
 */
GroupInviteMessagePayload.prototype['to'] = undefined;






export default GroupInviteMessagePayload;

