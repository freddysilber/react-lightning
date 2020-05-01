({
    doInit: function (component, event, helper) {
        console.log('doinit')
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