"use strict";

window.WaterPP = {};

$(function() {
	DevExpress.devices.current("androidPhone");
    WaterPP.app = new DevExpress.framework.html.HtmlApplication({
        namespace: WaterPP,
        
        defaultLayout: "navbar",
        navigation: [
          {
            title: "Home",
            action: "#home",
            icon: "home"
          },
          {
            title: "Friends",
            action: "#stats",
            icon: "group"
          },
		  {
            title: "Settings",
            action: "#settings",
            icon: "preferences"
          },
		  {
            title: "About",
            action: "#about",
            icon: "info"
          }
        ]
    });

	ko.bindingHandlers.numericText = {
		update: function(element, valueAccessor, allBindingsAccessor) {
		   var value = ko.utils.unwrapObservable(valueAccessor()),
			   precision = ko.utils.unwrapObservable(allBindingsAccessor().precision) || ko.bindingHandlers.numericText.defaultPrecision,
			   formattedValue = value.toFixed(precision);

			ko.bindingHandlers.text.update(element, function() { return formattedValue; });
		},
		defaultPrecision: 1
	};
	WaterPP.app.router.register("addFriend/:newFriend", { view: "stats"});
    WaterPP.app.router.register(":view", {view: "registration"});
    WaterPP.app.navigate();   
});