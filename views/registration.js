WaterPP.registration = function (params) {

    var viewModel = {
		name: ko.observable(),
		nameDescription: "John Doe",
		email: ko.observable(),
		emailDescription: "john@doe.com",
		password: ko.observable(),
		passwordDescription: "Type a password",
		company: ko.observable(),
		companyDescription: "My Company Inc.",
		
		tabs: [{text: "Register"},{text: "Sign-in"}],
		selectedIndex: ko.observable(0),
		buttonText: ko.observable("Register"),
		
		tabSelected: function(e) {
			console.log(e.itemData);
			if (e.itemData.text == "Register") {
				$(".regField").show();
				this.buttonText("Register");
			} else {
				$(".regField").hide();
				this.buttonText("Login");
			}
		},
		proceed: function() {
			WaterPP.app.navigate("home", {root: true, direction: "none"});
		}
    };

    return viewModel;
};