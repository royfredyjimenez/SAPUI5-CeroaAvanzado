// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "logaligroup/sapui5/model/Models",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     *  @param {typeof sap.ui.core.mvc.Controller} Controller
     *  @param {typeof sap.m.MessageToast} MessageToast
     *  @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel 
    *  */

    function (Controller, MessageToast, Models, ResourceModel) {
        "use strict";
        return Controller.extend("logaligroup.sapui5.controller.App", {
            onInit: function () {
                this.getView().setModel(Models.createRecipient()); //cargando en el modelado el modelo json
                //set i18n model on the view
                var i18nModel = new ResourceModel({ bundleName: "logaligroup.sapui5.i18n.i18n" });
                this.getView().setModel(i18nModel, "i18n"); //cargando en el modelado el modelo json
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
            }
        });
    });
 