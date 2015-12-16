/// <reference path="../../typings/angular2-meteor.d.ts" />

import {Component, View} from 'angular2/core';
import {RouteParams, RouterLink} from 'angular2/router';
import {Parties} from 'collections/parties';
import {FORM_DIRECTIVES} from 'angular2/common';

@Component({
	selector: 'party-details'
})
@View({
	templateUrl: 'client/party-details/party-details.html',
	// template: '<div><h2>{{party.name}}</h2></div>',
	directives: [RouterLink, FORM_DIRECTIVES]
})
export class PartyDetails {
	party: Party;
	constructor(param: RouteParams) {
		var partyId = param.get('partyId');
		this.party = Parties.findOne(partyId);
		console.log(this.party);
	}
	
	saveParty(party: Party) {
		if (Meteor.userId()) {
			Parties.update(party._id, {
				$set: {
					name: party.name,
					description: party.description,
					location: party.location
				}
			});
		} else {
			alert('Please lon in to change this party');
		}
	}
}