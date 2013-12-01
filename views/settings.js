WaterPP.settings = function (params) {

    var viewModel = {
		name: ko.observable("Marc Wiest"),
		nameDescription: "John Doe",
		email: ko.observable("marcwiest@domain.com"),
		emailDescription: "john@doe.com",
		password: ko.observable("1234"),
		passwordDescription: "Type a password",
		gender: ko.observable("Male"),
		age: ko.observable(30),
		reminderOn: ko.observable(true),
		reminderFrom: ko.observable(7),
		reminderTo: ko.observable(21),
		reminderFrequency: ko.observable("Every hour")
    };

    return viewModel;
};