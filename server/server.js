Meteor.startup(function () {
	if (Fighters.find().count() === 0) {
		[{
			name: "anderson",
			att: 1,
			def: 1,
			str: 1,
			exp: 1
		}, 
		{
			name: "georges",
			att: 2,
			def: 2,
			str: 2,
			exp: 2
		}, 
		{
			name: "jon",
			att: 3,
			def: 3,
			str: 3,
			exp: 3
		}].forEach(function(fighter) {Fighters.insert(fighter);});
	}
});