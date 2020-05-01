global with sharing class AccountService {
    @RemoteAction
    global static Account[] getAccounts() {
        return [SELECT Id, Name FROM Account];
    }
}
