({
    doInit: function (component, event, helper) {
        const action = component.get('c.getAccounts')
        action.setCallback(this, response => {
            if (response.getState() === 'SUCCESS') {
                component.set('v.accounts', response.getReturnValue())
            }
        })
        $A.enqueueAction(action)
    },

    handleMessage: function (component, event, helper) {
        const message = event.getParams()
        component.set('v.message', message.payload.value)
    },

    handleError: function (component, event, helper) {
        const error = event.getParams()
        console.error(error)
    },

    handleSendClick: function (component, event, helper) {
        const messageText = component.get('v.message')
        const message = {
            name: "Send To React",
            value: messageText
        }
        component.find('jsApp').message(message)
    }
})