import {Parties} from 'collections/parties';

export function loadParties() {
	var parties: Array<Party>;
	if (Parties.find().count() === 0) {
		parties = [
	        {
	            'name': 'Dubstep-Free Zone',
	            'description': 'Can we please just for an evening not listen to dubstep.',
	            'location': 'Los Angeles'
	        },
	        {
	            'name': 'All dubstep all the time',
	            'description': 'Get it on!',
	            'location': 'Palo Alto'
	        },
	        {
	            'name': 'Savage lounging',
	            'description': 'Leisure suit required. And only fiercest manners.',
	            'location': 'San Francisco'
	        }
	    ];
		
		for (let party of parties) {
			Parties.insert(party);
		}
	}
};
