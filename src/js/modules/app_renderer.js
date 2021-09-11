// --------------------------------------------------------------------------------
// IMPORTS [ ONLY WITH WEBPACK ]
// --------------------------------------------------------------------------------
// import [class name | variable]('file_path[.js]');
import Rapp from '../relast.js';

import Server_feedback from '../comps/server_feddback.js';
import Router from '../pages/Router.js';

import Main_menu from './main_menu.js';
import Login from './login.js';
import Signup from './signup.js';
// // --------------------------------------------------------------------------------
// // --------------------------------------------------------------------------------

export default class App_renderer extends Rapp
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
		this.add_comp('Server_feedback', Server_feedback);
		this.add_comp('Router', Router);
		this.add_comp('Main_menu', Main_menu);
		this.add_comp('Login', Login);
		this.add_comp('Signup', Signup);

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
		this.state('logged', false);
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
		this.action('checked_session', (args)=>
			{
				let logged = !args.error && args.logged;
				this.state('logged', logged);
				if(this.get_state('logged') === true)
				{
					this.call_action('load_main_menu');
				}
			});
		this.action('login_reponse', (args)=>
			{
				if(!args.error)
					this._main._mods.App_controller.call_method('check_session');
			});
		this.action('load_main_menu', (args)=>
			{
				this._main._mods.Main_menu.call_action('load', this._app_sections);
			});
		this.action('signup_response', (args)=>
			{
			});
		this.action('route', (args)=>
			{
				this._main._mods.Router.call_action('route', args);
			});
		this.action('route_settings', (args)=>
			{
				this._main._mods.Router.call_action('route_settings');
			});

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

		this._view.style =`
		.login_home
		{
			display: flex;
    		flex-wrap: wrap;
    		justify-content: center;
    		/*height: 100%;*/
		}
		.main_home
		{
			display: flex;
			height: 100%;
		}
		.main_menu_mod
		{
			width: 250px;
			height: 100%;
			border-right: solid 1px #EEE;
		}
		.body-content
		{
			flex-grow: 2;
		}`;

		this._view.main = `<div class='h100p'>
			<Server_feedback></Server_feedback>
			${
				!this.get_state('logged') ?
				`<div class='login_home'>
					<Login resp='login_reponse' api='${this._main._api_main}' addon='login' cmd='try'></Login>
					<Signup resp='signup_response' api='${this._main._api_main}' addon='login' cmd='signin'></Signup>
				</div>`
				:
				`
				<div class='main_home'>
					<Main_menu class='main_menu_mod' route='route'></Main_menu>
					<Router class='body-content'></Router>
				</div>
				`
			}
		</div>`;
		// --------------------------------------------------------------------------------
		// --------------------------------------------------------------------------------
	}
}
App_renderer.default_props = {};


// --------------------------------------------------------------------------------
// INCLUDE INTO window OBJECT [ ONLY WITOUT WEBPACK ]
// --------------------------------------------------------------------------------
// window.App_renderer = App_renderer;