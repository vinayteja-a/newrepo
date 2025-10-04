public with sharing class AccountContactService {
    
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactsByAccountId(Id accountId) {
        if (accountId == null) {
            throw new AuraHandledException('Account Id cannot be null');
        }

        return [
            SELECT Id, FirstName, LastName, Email, Phone 
            FROM Contact 
            WHERE AccountId = :accountId
        ];
    }
}
