// @ts-nocheck
sap.ui.define([
    "sap/ui/core/ComponentContainer",
],
    /**
     * 
     *@param {typeof sap.ui.core.mvc.ComponentContainer} ComponentContainer 
    */

    function (ComponentContainer) {
        new ComponentContainer({
            name: "logaligroup.sapui5", //la ruta para llegar al componente
            settings: {
                id: "sapui5"
            },
            async: true
        }).placeAt("content"); //metodo que tenemos del tipo javascript 
    });