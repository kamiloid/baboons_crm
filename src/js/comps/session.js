// --------------------------------------------------------------------------------
// IMPORTS [ ONLY WITH WEBPACK ]
// --------------------------------------------------------------------------------
// import [class name | variable]('file_path[.js]');
import Rapp from '../relast.js';
// // --------------------------------------------------------------------------------
// // --------------------------------------------------------------------------------

export default class Session extends Rapp
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
		this.state('user_name', '');
		this.state('first_name', '');
		this.state('last_name', '');
		this.state('email', '');
		this.state('token', '');
		this.state('user_picture', null);
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
		this.method('set_session_data', (args)=>
			{
				if(!args) return;
				if(!args) return;
				this.state('user_name', args.user_name);
				this.state('first_name', args.first_name);
				this.state('last_name', args.last_name);
				this.state('email', args.email);
				this.state('token', args.token);
				this._main._token = args.token;
			});
		this.method('get_session_data', (args)=>
			{
				let session = {
					user_name: this.get_state('user_name'),
					first_name: this.get_state('first_name'),
					last_name: this.get_state('last_name'),
					email: this.get_state('email'),
					token: this.get_state('token')
				};
				return session;
			});
		this.method('check_session', (args)=>
			{
				this.api(args.api, args.a, args.cmd, {}, (resp)=>
					{
						if(!resp.error && resp.logged)
							this.call_method('set_session_data', resp.session);
						if(args.callback)
							args.callback(resp);
					});
			});
		this.method('logout', (args)=>
			{
				this.api(args.api, args.a, args.cmd, {}, (resp)=>
					{
						this.call_method('clear_session');
						if(args.callback)
							args.callback(resp);
					});
			});
		this.method('clear_session', (args)=>
			{
				this._main._token = null;
				this.call_method('set_session_data', {
					user_name: '', 
					first_name: '',
					last_name: '',
					email: '',
					token: ''
				});
			});
	}
	run = function(props)
	{
		// --------------------------------------------------------------------------------
		// ACTIONS
		// --------------------------------------------------------------------------------
		// this.action('action_key', (args)=>{...});
		// this.call_action('action_key', args[object]);
		// --------------------------------------------------------------------------------
		// --------------------------------------------------------------------------------

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

		this._view.main = `<div></div>`;
		// --------------------------------------------------------------------------------
		// --------------------------------------------------------------------------------
	}
}
Session.default_props = {};


// --------------------------------------------------------------------------------
// INCLUDE INTO window OBJECT [ ONLY WITOUT WEBPACK ]
// --------------------------------------------------------------------------------
// window.Session = Session;