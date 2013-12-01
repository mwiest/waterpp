WaterPP.stats = function (params) {
	WaterPP.friends = WaterPP.friends || ko.observableArray();
	var friends = WaterPP.friends,
		chartDataSourceDaily = ko.observableArray(),
		chartDataSourceWeekly = ko.observableArray(),
		chartDataSourceMonthly = ko.observableArray();
		
	if (params.newFriend) {
		friends.push(params.newFriend);
	}
    var viewModel = {
		viewShowing: function() {
			updateWeeklyDrinks();
		},
		friends: friends,
		renderAdd: function(itemData, itemIdx, itemElement) {
			return "<span style=\"display:inline-block; vertical-align: text-bottom; background-size: 18px 18px; width: 28px; height: 18px;\" class=\"dx-icon-find\"></span><span>"+itemData+"</span>";
		},
		renderDel: function(itemData, itemIdy, itemElement) {
			return "<span style=\"display:inline-block; vertical-align: text-bottom; background-size: 18px 18px; width: 28px; height: 18px;\" class=\"dx-icon-find\"></span><span>"+itemData+"</span>";
		},
		addFriend: function() {
			WaterPP.app.navigate("addFriends");
		},
		delFriend: function(opt) {
			var result = DevExpress.ui.dialog.confirm("You sure want to remove "+opt.model, "Confirm");
			result.done(function (dialogResult) {
				if (dialogResult) {
					var idx = friends.indexOf(opt.model);
					if (idx > -1)
						friends.splice(idx, 1);
					console.log(friends);
				}
			});
		},
		
		multiChartData: [
			{
				chartOptions: {
					commonSeriesSettings: {
						argumentField: 'drinkDate',
						type: 'bar'
					},
					series: [{
						valueField: 'count1',
						color: '#09c',
						name: 'me'
					},{
						valueField: 'count2',
						name: 'Marc Wiest'
					}],
					title: {
						text: "Today",
						horizontalAlignment: "left",
						font: {
							size: "16px"
						}
					},
					legend: {
						visible: true
					},
					argumentAxis: {
						label: {
							format: 'ddd'
						},
						grid: {
							visible: true
						},
						tickInterval: 'day',
						valueMarginsEnabled: false
					},
					valueAxis: {
						min: 0,
						tickInterval: 1,
						label: {
							customizeText: function (value) {
								return value.value
							}
						}
					},
					tooltip: {
						enabled: true,
						customizeText: function() {
							return this.value;
						}
					},
					dataSource: chartDataSourceDaily
				}
			},
			{
				chartOptions: {
					commonSeriesSettings: {
						argumentField: 'drinkDate',
					},
					series: [{
						valueField: 'count1',
						color: '#09c',
						name: 'me'
					},{
						valueField: 'count2',
						name: 'Marc Wiest'
					}],
					title: {
						text: "This week",
						horizontalAlignment: "left",
						font: {
							size: "16px"
						}
					},
					legend: {
						visible: true
					},
					argumentAxis: {
						label: {
							format: 'ddd'
						},
						grid: {
							visible: true
						},
						tickInterval: 'day',
						valueMarginsEnabled: false
					},
					valueAxis: {
						min: 0,
						tickInterval: 1,
						label: {
							customizeText: function (value) {
								return value.value
							}
						}
					},
					tooltip: {
						enabled: true,
						customizeText: function() {
							return this.value;
						}
					},
					dataSource: chartDataSourceWeekly
				}
			},
			{
				chartOptions: {
					commonSeriesSettings: {
						argumentField: 'drinkDate',
					},
					series: [{
						valueField: 'count1',
						color: '#09c',
						name: 'me'
					},{
						valueField: 'count2',
						name: 'Marc Wiest'
					}],
					title: {
						text: "This month",
						horizontalAlignment: "left",
						font: {
							size: "16px"
						}
					},
					legend: {
						visible: true
					},
					argumentAxis: {
						label: {
							format: 'shortDate'
						},
						grid: {
							visible: true
						},
						tickInterval: 'week',
						valueMarginsEnabled: false
					},
					valueAxis: {
						min: 0,
						tickInterval: 10,
						label: {
							customizeText: function (value) {
								return value.value
							}
						}
					},
					tooltip: {
						enabled: true,
						customizeText: function() {
							return this.value;
						}
					},
					dataSource: chartDataSourceMonthly
				}
			}
		]
    };
	
	function updateWeeklyDrinks() {
		var currentDate = new Date;
		chartDataSourceDaily([
			{drinkDate: new Date(currentDate.getFullYear(), (currentDate.getMonth()), currentDate.getDate()), count1: 3, count2: 5},
		]);
		chartDataSourceWeekly([
			{drinkDate: new Date(currentDate.getFullYear(), (currentDate.getMonth()), currentDate.getDate()-1), count1: 3, count2: 5},
			{drinkDate: new Date(currentDate.getFullYear(), (currentDate.getMonth()), currentDate.getDate()-2), count1: 1, count2: 2},
			{drinkDate: new Date(currentDate.getFullYear(), (currentDate.getMonth()), currentDate.getDate()-3), count1: 7, count2: 7},
			{drinkDate: new Date(currentDate.getFullYear(), (currentDate.getMonth()), currentDate.getDate()-4), count1: 3, count2: 1}
		]);
		chartDataSourceMonthly([
			{drinkDate: new Date(currentDate.getFullYear(), (currentDate.getMonth()), currentDate.getDate()-1), count1: 34, count2: 23},
			{drinkDate: new Date(currentDate.getFullYear(), (currentDate.getMonth()), currentDate.getDate()-7), count1: 13, count2: 12},
			{drinkDate: new Date(currentDate.getFullYear(), (currentDate.getMonth()), currentDate.getDate()-14), count1: 55, count2: 34},
			{drinkDate: new Date(currentDate.getFullYear(), (currentDate.getMonth()), currentDate.getDate()-21), count1: 44, count2: 55}
		]);
	}

    return viewModel;
};