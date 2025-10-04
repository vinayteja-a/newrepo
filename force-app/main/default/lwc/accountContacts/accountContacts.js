import { LightningElement, api, wire } from 'lwc';
import getContactsByAccountId from '@salesforce/apex/AccountContactService.getContactsByAccountId';

export default class AccountContacts extends LightningElement {
    @api recordId;
    contacts;
    error;

    @wire(getContactsByAccountId, { accountId: '$recordId' })
    wiredContacts({ error, data }) {
        if (data) {
            this.contacts = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.contacts = undefined;
        }
    }
}
