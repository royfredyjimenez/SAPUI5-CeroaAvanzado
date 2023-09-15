// @ts-nocheck
sap.ui.define([
    "sap/ui/core/UIComponent",
    "logaligroup/sapui5/model/Models",
    "sap/ui/model/resource/ResourceModel",
],
    /**
     * 
     * @param {typeof sap.ui.core.UIComponent} UiComponent  
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (UIComponent, Models, ResourceModel) {
        return UIComponent.extend("logaligroup.sapui5.Component", {
            metadata: {
                manifest: "json",
               /* 
               todo lo de rootview se puede encontrar en el manifest.json
                "rootview": {
                    "viewName": "logaligroup.sapui5.view.App",
                    "type": "XML", //instanciar vistas xml
                    "async": true,
                    "id": "app" //de la vista app
                }
                */
            },

            init: function () {
                //call the init function of the parent 
                UIComponent.prototype.init.apply(this, arguments);
                this.setModel(Models.createRecipient()); //cargando en el modelado el modelo json
                //set i18n model on the view
                var i18nModel = new ResourceModel({ bundleName: "logaligroup.sapui5.i18n.i18n" });
                this.setModel(i18nModel, "i18n"); //cargando en el modelado el modelo json
            }
        });
    });