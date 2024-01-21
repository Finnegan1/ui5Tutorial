
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/resource/ResourceModel"
], function(Controller, MessageToast, ResourceModel) {
    'use strict';
    
    return Controller.extend("ui5.walktrough.controller.App", {
        onInit() {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		}
    })

});