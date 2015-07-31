Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function() {
	this.route('fighters', {path: '/'});
	this.route('fighter', {path: '/:_id'})
});