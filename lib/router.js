Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate:"loading"
});

Router.route('/', function() {
	this.render('fighters');
});

Router.route("/profile/:urlName", {
	name: "profile",
	controller: "FighterProfileController"
});

FighterProfileController = RouteController.extend({
	template: "fighterProfile",
	data: function () {
		var urlName = Router.current().params.urlName;
		return Fighters.findOne({
			name: urlName
		});
	}
});

Router.route("/fight/:urlName", {
	name: "fight",
	controller: "FightController"
});

FightController = RouteController.extend({
	template: "fight",
	data: function () {
		var urlName = Router.current().params.urlName;
		return Fighters.findOne({
			name: urlName
		});
	}
});