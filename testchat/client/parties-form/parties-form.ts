/// <reference path="../../typings/angular2-meteor.d.ts" />

import {Component, View} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators, NgIf} from 'angular2/common';
import {MeteorComponent} from 'angular2-meteor';
import {InjectUser} from 'meteor-accounts';
import {Parties} from 'collections/parties';

@Component({
	selector: 'parties-form'
})
@View({
	templateUrl: 'client/parties-form/parties-form.html',
	directives: [FORM_DIRECTIVES, NgIf]
})
@InjectUser()
export class PartiesForm extends MeteorComponent {
	partiesForm: 	ControlGroup;
	
	constructor() {
		super();
		var fb = new FormBuilder();
		this.partiesForm = fb.group({
			name: ['', Validators.required],
			description: [''],
			location: ['', Validators.required]
		});
		console.log(this.user);
	}
	
	addParty(party) {
		if (this.partiesForm.valid) {
			if (Meteor.userId()) {
				Parties.insert({
					name: party.name,
					description: party.description,
					location: party.location,
					owner: Meteor.userId()
				});
				
				(<Control>this.partiesForm.controls['name']).updateValue('');
				(<Control>this.partiesForm.controls['description']).updateValue('');
				(<Control>this.partiesForm.controls['location']).updateValue('');
			} else {
				alert('Please log in to add a party');
			}
		}
	}
}