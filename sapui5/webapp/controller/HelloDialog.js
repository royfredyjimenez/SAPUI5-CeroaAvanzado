// @ts-nocheck
sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.base.ManagedObject} ManagedObject
     * @param {typeof sap.ui.base.Fragment} Fragment
     */
    function (ManagedObject, Fragment) {
        "use strict";
        //objeto manejado
        return ManagedObject.extend("logaligroup.sapui5.controller.HelloDialog", {
            constructor: function (oView) { //la instancia de la vista el parametro de la vista oView
                this._oView = oView; //instanciamos un objeto de la vista (solo va a existir en un controlador)
            },
            exit: function () {
                delete this._oView;
            },
            open: function () { //la funcion que se encarga de abrir el dialogo
                const oView = this._oView;
                //create dialog lazily
                if (!oView.byId("helloDialog")) {
                    let oFragmentController = {
                        onCloseDialog: function () {
                            oView.byId("helloDialog").close(); //estamos en el oview no en un controlador
                        }
                    };
                    //load asyncronous XML fragment 
                    Fragment.load({
                        id: oView.getId(),
                        name: "logaligroup.sapui5.view.HelloDialog",
                        controller: oFragmentController
                    }).then(function (oDialog) {
                        oView.addDependent(oDialog);
                        oDialog.open();
                    });
                } else {
                    oView.byId("helloDialog").open();
                }
            }
        });
    });