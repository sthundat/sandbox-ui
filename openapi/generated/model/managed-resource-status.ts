/* tslint:disable */
/* eslint-disable */
/**
 * Red Hat Openshift SmartEvents Fleet Manager
 * The api exposed by the fleet manager of the SmartEvents service.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: openbridge-dev@redhat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @enum {string}
 */

export const ManagedResourceStatus = {
    Accepted: 'ACCEPTED',
    Provisioning: 'PROVISIONING',
    Ready: 'READY',
    Deprovision: 'DEPROVISION',
    Deleting: 'DELETING',
    Deleted: 'DELETED',
    Failed: 'FAILED'
} as const;

export type ManagedResourceStatus = typeof ManagedResourceStatus[keyof typeof ManagedResourceStatus];



