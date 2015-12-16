/// <reference path="../typings/angular2-meteor.d.ts" />
/// <reference path="../typings/party.d.ts" />

export var Parties = new Mongo.Collection<Party>('parties');

Parties.allow({
	insert(userId: string, party: Party) {
		var user = Meteor.user();
		return !!user;
	},
	update(userId: string, party: Party, fields, modifier) {
		var user = Meteor.user();
		return !!user;
	},
	remove(userId: string, party: Party) {
		var user = Meteor.user();
		return !!user;
	}
});