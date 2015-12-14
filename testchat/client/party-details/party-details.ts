/// <reference path="../../typings/angular2-meteor.d.ts" />

import {Component, View} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Parties} from 'collections/parties';
import {RouterLink} from 'angular2/router';

@Component({
	selector: 'party-details'
})
@View({
	templateUrl: 'client/party-details/party-details.html',
	// template: '<div><h2>{{party.name}}</h2></div>',
	directives: [RouterLink]
})
export class PartyDetails {
	party: Object;
	constructor(param: RouteParams) {
		var partyId = param.get('partyId');
		this.party = Parties.findOne(partyId);
		console.log(this.party);
	}
}