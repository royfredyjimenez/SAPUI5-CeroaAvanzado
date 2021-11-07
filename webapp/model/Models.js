// @ts-nocheck
sap.ui.define([
    "sap/ui/model/json/JSONModel"
],
    /**
     *  @param {typeof sap.ui.model.json.JSONModel} JSONModel
     */
    function (JSONModel) {
        "use strict";
        return {
            createRecipient: function () {
                var oData = {
                    company: {
                        name: "SALISAP EDUCATION",
                    }
                }
                return new JSONModel(oData);

            }


        }


    });
