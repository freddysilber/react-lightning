public with sharing class AccountService {
    @AuraEnabled
    public static Account[] getAccounts() {
        return [SELECT Id, Name FROM Account];
    }
}
