// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
//"logaligroupa21/sapui5/model/Models",
 //   "sap/ui/model/resource/ResourceModel"

],
    // @param {typeof sap.ui.model.json.JSONModel} JSONModel
    // @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
    */
    function (Controller, MessageToast, Models, ResourceModel) {
        "use strict";
        return Controller.extend("logaligroup.sapui5.controller.App", {
            onInit: function () {
                //Set data model on the view 
                /*
                this.getView().setModel(Models.createRecipient());
                //Set i18n model on the view
                var i18nModel = new ResourceModel({ bundleName: "logaligroupa21.sapui5.i18n.i18n" });
                this.getView().setModel(i18nModel, "i18n"); //cargando en el modelado el modelo json
                /*
                  var oData = {
                      company: {
                          name: "Treefish Inc",
                      }
                  }
                  var oModel = new JSONModel(oData);
                  this.getView().setModel(oModel); //cargando en el modelado el modelo json
                  */
            },

            onShowHello: function () {
                //read text from i18n model (acceso al fichero de i18n)
                //MessageToast.show("Hello Logali");
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                //read property from data model
                var sRecipient = this.getView().getModel().getProperty("/company/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMsg);
            }
        });
    });
