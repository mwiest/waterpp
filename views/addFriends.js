WaterPP.addFriends = function (params) {
	var allFriends = [
		{name: "George II."},
		{name: "Joe Denver"},
		{name: "Marc Wiest"},
		{name: "Willem Alexander of the Netherlands"}
	];
    var viewModel = {
		allFriends: allFriends,
		addFriend: function(options) {
			console.log(options);
			WaterPP.app.navigate("addFriend/"+options.itemData.name, {direction: "backward"});
		}
    };

    return viewModel;
};