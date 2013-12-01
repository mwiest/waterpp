WaterPP.startup = function (params) {

    var viewModel = {
		register: function() {
			WaterPP.app.navigate("registration", {root: true, direction: "none"});
		}
    };

    return viewModel;
};