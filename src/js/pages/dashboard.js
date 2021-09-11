// --------------------------------------------------------------------------------
// IMPORTS [ ONLY WITH WEBPACK ]
// --------------------------------------------------------------------------------
// import [class name | variable]('file_path[.js]');
import Rapp from '../relast.js';
import Instagram_panel from './dashboard_panels/instagram_panel.js';
import Tiktok_panel from './dashboard_panels/tiktok_panel.js';
// // --------------------------------------------------------------------------------
// // --------------------------------------------------------------------------------

export default class Dashboard extends Rapp
{
	_loaded = false;
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
		this.add_comp('Instagram_panel', Instagram_panel);
		this.add_comp('Tiktok_panel', Tiktok_panel);

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
		this.state('insta_accounts', []);
		this.state('tiktok_accounts', []);
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
		this.action('run', ()=>
			{
				this.call_action('load_accounts');
			});
		this.action('load_accounts', (args)=>
			{
				this.api(this._main._api_main, 'sm_manager', 'get_accounts', {}, null, 'bind_panels');
			});
		this.action('update_accounts', ()=>
			{
				this.call_action('load_accounts');
			});
		this.action('bind_panels', (args)=>
			{
				this._loaded = true;
				if(!args.accounts) return;
				let insta_buffer = [];
				for(let a of args.accounts)
				{
					if(a.type === 'instagram')
						insta_buffer.push({k: 'Instagram_panel', p0: a.username, p1: a.id});
					else if(a.type === 'tiktok'){}
				}
				this.state('insta_accounts', insta_buffer);
			});

		if(!this._loaded)
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
		this._view.iterators.insta_panels = `<[k] account='[p0]' token='[p1]'></[k]>`;

		this._view.style =``;

		this._view.main = `<div>
			<div>
				<button onclick='update_accounts'>Refresh</button>
			</div>
			${this.render('insta_accounts', 'insta_panels')}
			<Tiktok_panel></Tiktok_panel>
		</div>`;
		// --------------------------------------------------------------------------------
		// --------------------------------------------------------------------------------
	}
}
Dashboard.default_props = {};


// --------------------------------------------------------------------------------
// INCLUDE INTO window OBJECT [ ONLY WITOUT WEBPACK ]
// --------------------------------------------------------------------------------
// window.Dashboard = Dashboard;