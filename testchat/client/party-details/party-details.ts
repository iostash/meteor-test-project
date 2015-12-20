/// <reference path="../../typings/angular2-meteor.d.ts" />
/// <reference path="../../typings/meteor-accounts.d.ts" />

import {Component, View} from 'angular2/core';
import {RouteParams, RouterLink, CanActivate, ComponentInstruction} from 'angular2/router';
import {FORM_DIRECTIVES} from 'angular2/common';
import {RequireUser} from 'meteor-accounts';
import {Parties} from 'collections/parties';

function checkPremissions(instructions: ComponentInstruction): boolean {
	var partyId = instructions.params['partyId'];
	var party = Parties.findOne(partyId);
	return (party && party.owner == Meteor.userId());
}

@Component({
	selector: 'party-details'
})
@View({
	templateUrl: 'client/party-details/party-details.html',
	// template: '<div><h2>{{party.name}}</h2></div>',
	directives: [RouterLink, FORM_DIRECTIVES]
})
@CanActivate(checkPremissions)
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