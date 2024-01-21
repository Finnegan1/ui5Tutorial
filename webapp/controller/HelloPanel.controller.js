sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
 ], (Controller, MessageToast) => {
    "use strict";
 
    return Controller.extend("ui5.walkthrough.controller.HelloPanel", {
        onPress(){

        },
        onOpenDialog() {
            // create dialog lazily
            this.pDialog ??= this.loadFragment({
                name: "ui5.walkthrough.view.HelloDialog"
            });
        
            this.pDialog.then((oDialog) => oDialog.open());
        },
        onCloseDialog() {
			// note: We don't need to chain to the pDialog promise, since this event handler
			// is only called from within the loaded dialog itself.
			this.byId("helloDialog").close();
		}
    });
 });