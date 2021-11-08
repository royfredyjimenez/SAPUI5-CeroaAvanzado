// @ts-nocheck
sap.ui.define([
    "sap/ui/core/UIComponent",
    "logaligroupa21/sapui5/model/Models",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (UIComponent, Models, ResourceModel) {
        return UIComponent.extend("logaligroup.sapui5.Component", {

            metadata: {
                "rootview": {
                    "viewName": "logaligroupa21.sapui5.view.App",
                    "type": "XML",
                    "async": true,
                    "id": "app"
                }
            },
            init: function () {
                //call the unit function of the paraent 
                UIComponent.prototype.init.apply(this, arguments);
                this.setModel(Models.createRecipient());
                //Set i18n model on the view
                var i18nModel = new ResourceModel({ bundleName: "logaligroupa21.sapui5.i18n.i18n" });
                this.setModel(i18nModel, "i18n"); //cargando en el modelado el modelo json
            }
        })
    });

