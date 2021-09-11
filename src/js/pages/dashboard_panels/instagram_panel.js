// --------------------------------------------------------------------------------
// IMPORTS [ ONLY WITH WEBPACK ]
// --------------------------------------------------------------------------------
// import [class name | variable]('file_path[.js]');
import Rapp from '../../relast.js';

import Linear_panel from '../../comps/panels/linear_panel.js';
// // --------------------------------------------------------------------------------
// // --------------------------------------------------------------------------------

export default class Instagram_panel extends Rapp
{
	constructor(conf)
	{
		super(conf);


		// --------------------------------------------------------------------------------
		// ADD COMPONENTS [ ONLY WITH WEBPACK ]
		// --------------------------------------------------------------------------------
		// this.add_comp([class_name:string], [class:class]);
		// this.add_comps([classes:Array]); --> item array: {name: [class_name:string], class: [class:imported-object]}
		// --------------------------------------------------------------------------------
		// --------------------------------------------------------------------------------
		this.add_comp('Linear_panel', Linear_panel);

		// --------------------------------------------------------------------------------
		// INCLUDES [ ONLY WITHOUT WEBPACK ]
		// --------------------------------------------------------------------------------
		// this.include('file_path[.js]', [class_name]);
		// --------------------------------------------------------------------------------
		// --------------------------------------------------------------------------------
	}
	states()
	{
		// --------------------------------------------------------------------------------
		// STATES
		// --------------------------------------------------------------------------------
		// - create or change state: this.state('state_key', [value]);
		// - get state: this.get_state('state_key');
		// --------------------------------------------------------------------------------
		// --------------------------------------------------------------------------------
	}
	methods()
	{
		// --------------------------------------------------------------------------------
		// METHODS: THESE METHODS DO NOT HAVE THE ABILITY TO CHANGE THE DOM OF THE COMPONENTS
		// BUT THEIR CAN CHANGE THE COMPONENT's STATES WITHOUT ANY CONSECUENCE
		// --------------------------------------------------------------------------------
		// - create a method: this.method('state_key', (args)=>{...});
		// - call a method: this.call_method('state_key', args...);
		// --------------------------------------------------------------------------------
		// --------------------------------------------------------------------------------
	}
	created(){}
	rendered(){}
	run = function(props)
	{
		// --------------------------------------------------------------------------------
		// ACTIONS
		// --------------------------------------------------------------------------------
		// this.action('action_key', (args)=>{...});
		// this.call_action('action_key', args[object]);
		// --------------------------------------------------------------------------------
		// --------------------------------------------------------------------------------
		this.action('run', (args)=>
			{
				this.call_action('user_query');
			});
		this.action('user_query', (args)=>
			{
			});
		this.call_action('run');

		// --------------------------------------------------------------------------------
		// HTML VIEWs
		// - include view:
		//		- this._view.[var] = `[html string]`;
		// - include styles:
		// 		- this._view.style = ``;
		// - include iterators: (ITERATORS MUST TO BE BEFORE TO this._view.main)
		// 		- this._view.iterators.[var] = `<tag key='[k]'>[v]</tag>`
		// - include components: THE TAG MUST TO BE THE SAME NAME TO THE NAME COMPONENT AND PROPERTIES AS ATTRIBUTES
		// --------------------------------------------------------------------------------
		//this._view.iterators.items = `<p key='[k]'>[v]</p>`;

		this._view.style =``;

		this._view.main = `<div>
			<Linear_panel title='Instagram | @${props.account}'></Linear_panel>
		</div>`;
		// --------------------------------------------------------------------------------
		// --------------------------------------------------------------------------------
	}
}
Instagram_panel.default_props = {};


// --------------------------------------------------------------------------------
// INCLUDE INTO window OBJECT [ ONLY WITOUT WEBPACK ]
// --------------------------------------------------------------------------------
// window.Instagram_panel = Instagram_panel;