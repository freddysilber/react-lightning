({
    doInit: function (component, event, helper) {
        const action = component.get('c.getAccounts')
        action.setCallback(this, response => {
            const state = response.getState()
            console.log(state)
            if (state === 'SUCCESS') {
                console.log(response.getReturnValue())
                component.set('v.accounts', response.getReturnValue())
                console.log(component.get('v.accounts'))
            } else {
                console.log(response)
            }
        })
        $A.enqueueAction(action)
    },

    handleMessage: function (component, event, helper) {
        var message = event.getParams()
        component.set('v.message', message.payload.value)
    },

    handleError: function (component, event, helper) {
        var error = event.getParams()
        console.log(error)
    },

    handleSendClick: function (component, event, helper) {
        var messageText = component.get('v.message')
        var message = {
            name: "Send To React",
            value: messageText
        }
        component.find('jsApp').message(message)
    }
})