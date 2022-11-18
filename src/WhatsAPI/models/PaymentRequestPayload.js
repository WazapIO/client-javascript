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
 * The PaymentRequestPayload model module.
 * @module WhatsAPI/models/PaymentRequestPayload
 * @version 1.0.0
 */
class PaymentRequestPayload {
    /**
     * Constructs a new <code>PaymentRequestPayload</code>.
     * @alias module:WhatsAPI/models/PaymentRequestPayload
     */
    constructor() { 
        
        PaymentRequestPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaymentRequestPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:WhatsAPI/models/PaymentRequestPayload} obj Optional instance to populate.
     * @return {module:WhatsAPI/models/PaymentRequestPayload} The populated <code>PaymentRequestPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentRequestPayload();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('expiry_minutes')) {
                obj['expiry_minutes'] = ApiClient.convertToType(data['expiry_minutes'], 'Number');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaymentRequestPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaymentRequestPayload</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }
        // ensure the json data is a string
        if (data['to'] && !(typeof data['to'] === 'string' || data['to'] instanceof String)) {
            throw new Error("Expected the field `to` to be a primitive type in the JSON string but got " + data['to']);
        }

        return true;
    }


}



/**
 * @member {Number} amount
 */
PaymentRequestPayload.prototype['amount'] = undefined;

/**
 * @member {String} currency
 */
PaymentRequestPayload.prototype['currency'] = undefined;

/**
 * @member {Number} expiry_minutes
 */
PaymentRequestPayload.prototype['expiry_minutes'] = undefined;

/**
 * @member {String} to
 */
PaymentRequestPayload.prototype['to'] = undefined;






export default PaymentRequestPayload;

