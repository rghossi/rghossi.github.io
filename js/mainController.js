var app = angular.module("myPersonalWebsite", []);

var projects = [
	{
		id: 1,
		name: "SCTI Website 2016",
		github: "https://github.com/peperrone/scti2016",
		live: "scti.uenf.br",
		desc: "Coming soon...",
		userStories: ["Login", "Signup", "Event Dashboard", 
			"Change Password", "Change Profile", "Payments with Paypal (integrated)", 
			"Redeem Code"],
		developedWith: ["MongoDB", "ExpressJS", "AngularJS", "Node.js", 
			"Materialize"],
		imgUrl: "imgs/scti_2016.png"
	},
	{
		id: 2,
		name: "Voting SPA",
		github: "https://github.com/rghossi/Vote4Real",
		live: "https://vote4real.herokuapp.com",
		desc: "This is a freeCodeCamp back-end challenge implementation.",
		userStories: ["As an authenticated user, I can keep my polls and come back later to access them",
			"As an authenticated user, I can share my polls with my friends",
			"As an authenticated user, I can see the aggregate results of my polls",
			"As an authenticated user, I can delete polls that I decide I don't want anymore",
			"As an authenticated user, I can create a poll with any number of possible items",
			"As an unauthenticated or authenticated user, I can see and vote on everyone's polls",
			"As an unauthenticated or authenticated user, I can see the results of polls in chart form",
			"As an authenticated user, if I don't like the options on a poll, I can create a new option"

		],
		developedWith: ["MongoDB", "ExpressJS", "React", "Node.js", 
			"Bootstrap", "PassportJS"],
		imgUrl: "imgs/voting_app.png"
	},
	{
		id: 3,
		name: "Nightlife Coordinator",
		github: "https://github.com/rghossi/nightlife-coordinator",
		live: "https://imgoingto.herokuapp.com",
		desc: "This is a freeCodeCamp back-end challenge implementation.",
		userStories: ["As an unauthenticated user, I can view all bars in my area.",
			"As an authenticated user, I can add myself to a bar to indicate I am going there tonight",
			"As an authenticated user, I can remove myself from a bar if I no longer want to go there",
			"As an unauthenticated user, when I login I should not have to search again"
		],
		developedWith: ["MongoDB", "ExpressJS", "React", "Redux", "Node.js", 
			"Bootstrap", "PassportJS", "Google Search API"],
		imgUrl: "imgs/nightlife_coord.png"
	},
	{
		id: 4,
		name: "Watch Stock Markets",
		github: "https://github.com/rghossi/watch-stock-market",
		live: "https://watch-stock-market.herokuapp.com",
		desc: "This is a freeCodeCamp back-end challenge implementation.",
		userStories: ["I can view a graph displaying the recent trend lines for each added stock",
			"I can add new stocks by their symbol name",
			"I can remove stocks",
			"I can see changes in real-time when any other user adds or removes a stock"
		],
		developedWith: ["ExpressJS", "React", "Redux", "Node.js", 
			"Bootstrap", "Socket.io (websockets)"],
		imgUrl: "imgs/watch_stocks.png"
	},
	{
		id: 5,
		name: "Climatempo Demo",
		github: "https://github.com/rghossi/challenge-accepted",
		live: "https://climatempo-demo.herokuapp.com/",
		desc: "This is a freeCodeCamp back-end challenge implementation.",
		userStories: ["I can search a place and see its weather forecast (since this is only a prototype demo, it only supports 'Sao Paulo' and 'Osasco' cities)",
			"I can view weather cards containing the following info: city name, temperature, rain forecast",
			"I can view it from my pc, laptop or smartphone with no bugs (should be responsive)"
		],
		developedWith: ["ExpressJS", "React", "Redux", "Node.js", 
			"Bootstrap"],
		imgUrl: "imgs/climatempo_demo.png"
	},
]

app.controller("mainCtrl", function($scope) {
	$scope.projects = projects;
});