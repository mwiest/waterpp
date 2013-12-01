WaterPP.home = function (params) {
	var chartDataSource = ko.observableArray([]),
		currentDate = new Date,
		percent = ko.observable(43),
		viewModel = {
			
			viewShowing: function() {
				currentDate = new Date;
				updateWeeklyDrinks();
			},
			
			dailyStats: {
				count: {value: ko.observable(4), unit: "#"},
				amount: {value: ko.observable(1.2), unit: "l"},
				goal: {value: ko.observable(3.0), unit: "l"},
				percent: {value: percent, unit: "%"}
			},
			
			glassSizes: [
				{value: 0.2, name: "Small (<3dl)"},
				{value: 0.4, name: "Medium (3-5dl)"},
				{value: 0.6, name: "Large (>5dl)"},
			],
			
			glassTypes: [
				{value: 0, name: "Water"},
				{value: 1, name: "Tea"},
				{value: 2, name: "Coffee"},
				{value: 3, name: "Soft Drink"},
				{value: 4, name: "Milk"},
				{value: 5, name: "Other"},
			],
			
			glassDate: ko.observable(new Date),
			glassSize: ko.observable(0.4),
			glassType: ko.observable(0),
		
			hasData: ko.computed(function() {
				return chartDataSource().length;
			}),
			
			addConsumption: function() {
				this.overlayVisible(true);
			},
			
			addConsumptionDone: function() {
				this.dailyStats.count.value(this.dailyStats.count.value()+1);
				this.dailyStats.amount.value(this.dailyStats.amount.value()+this.glassSize());
				this.dailyStats.percent.value(this.dailyStats.amount.value()/3.0*100.0);
				this.overlayVisible(false);
				DevExpress.ui.notify("Glass successfully added!", "success", 3000);
			},
			
			addConsumptionCancel: function() {
				this.overlayVisible(false);
			},
			
			overlayVisible: ko.observable(false),

			multiChartData: [
				{
					chartOptions: {
						series: {
							type: 'doughnut'
						},
						title: {
							text: "Today",
							horizontalAlignment: "left",
							font: {
								size: "16px"
							}
						},
						legend: {
							visible: false
						},
						tooltip: {
							enabled: true,
							customizeText: function() {
								return this.done;
							}
						},
						dataSource: ko.computed(function(){ return [
							{arg:"Completed", val: percent()}, 
							{arg:"Missing", val: ko.computed(function(){return 100-percent();})()}
						];})
					}
				},
				{
					chartOptions: {
						series: {
							argumentField: 'drinkDate',
							valueField: 'count',
							color: '#09c'
						},
						title: {
							text: "This week",
							horizontalAlignment: "left",
							font: {
								size: "16px"
							}
						},
						legend: {
							visible: false
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
						dataSource: chartDataSource
					}
				}
			]
		};
		
	function updateWeeklyDrinks() {
		chartDataSource([
			{drinkDate: new Date(currentDate.getFullYear(), (currentDate.getMonth()), currentDate.getDate()-1), count: 3},
			{drinkDate: new Date(currentDate.getFullYear(), (currentDate.getMonth()), currentDate.getDate()-2), count: 1},
			{drinkDate: new Date(currentDate.getFullYear(), (currentDate.getMonth()), currentDate.getDate()-3), count: 7},
			{drinkDate: new Date(currentDate.getFullYear(), (currentDate.getMonth()), currentDate.getDate()-4), count: 3}
		]);
	}

    return viewModel;
};