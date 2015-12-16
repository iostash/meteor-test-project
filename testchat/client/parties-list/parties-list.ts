/// <reference path="../../typings/angular2-meteor.d.ts" />
/// <reference path="../../typings/meteor-accounts-ui.d.ts" />

import {Component, View} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Parties} from 'collections/parties';
import {PartiesForm} from 'client/parties-form/parties-form';
import {RouterLink} from 'angular2/router';
import {AccountsUI} from 'meteor-accounts-ui'


@Component({
	selector: 'parties-list'	
})
@View({
	templateUrl: 'client/parties-list/parties-list.html',
	directives: [NgFor, PartiesForm, RouterLink, AccountsUI]
})
export class PartiesList {
    public parties: Mongo.Cursor<Party>;
    
	constructor() {
        this.parties = Parties.find();
	}
	
	
	removeParty(party: Party) {
		Parties.remove(party._id);
	}
}