/// <reference path="../typings/angular2-meteor.d.ts" />

import {Component, View, provide} from 'angular2/core';
import {bootstrap} from 'angular2-meteor';
import {Parties} from 'collections/parties';
import {PartiesForm} from 'client/parties-form/parties-form';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, APP_BASE_HREF} from 'angular2/router';
import {PartiesList} from 'client/parties-list/parties-list';
import {PartyDetails} from 'client/party-details/party-details';


@Component({
	selector: 'app'	
})
@View({
	templateUrl: 'client/app.html',
	// template: '<router-outlet></router-outlet>',
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', as: 'PartiesList', component: PartiesList },
    { path: '/party/:partyId', as: 'PartyDetails', component: PartyDetails }
])
class SimpleChat {
}

bootstrap(SimpleChat, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);