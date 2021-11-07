// @ts-nocheck
sap.ui.define([
    //"sap/ui/core/mvc/XMLView"
    "sap/ui/core/ComponentContainer"
],
    //*  @param {typeof sap.ui.core.mvc.XMLView} XMLView 
    // function(XMLView)
    /**
     *  @param {typeof sap.ui.core.ComponentContainer} ComponentContainer
    */

    function (ComponentContainer) {
        new ComponentContainer({
            name: "logaligroupa21.sapui5",
            settings: {
                id: "sapui5"
            },
            async:true
        }).placeAt("content");
        /*
           XMLView.create({
                viewName: "logaligroupa21.sapui5.view.App"
             }).then(function(oView) {
              oView.placeAt("content");
        
             })
         */
    });