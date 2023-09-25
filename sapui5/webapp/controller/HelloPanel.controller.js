sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
],
    /**
     *  @param {typeof sap.ui.core.mvc.Controller} Controller
     *  @param {typeof sap.m.MessageToast} MessageToast
     *  */

    function (Controller, MessageToast) {
        "use strict";
        return Controller.extend("logaligroup.sapui5.controller.HelloPanel", {
            onInit: function () {

            },
            onShowHello: function () {
                // MessageToast.show("Hola abaperos");
                //read text from i18n model (acceso al fichero de i18n)
                //Set i18n model on the view
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                //read property from data model
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);//le pasamos la clave y el parametro
                MessageToast.show(sMsg);
            },
            
            onOpenDialog: function () { //invocamos al componente component.js
              this.getOwnerComponent().openHelloDialog(); //desde cualquier controlador me devuelve el componente de la aplicaion 
            },
     

        });
    });
