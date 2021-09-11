// --------------------------------------------------------------------------------
// IMPORTS [ ONLY WITH WEBPACK ]
// --------------------------------------------------------------------------------
// import [class name | variable]('file_path[.js]');
import Rapp from '../relast.js';
import Session_render from './session_render.js';
// // --------------------------------------------------------------------------------
// // --------------------------------------------------------------------------------

export default class Main_menu extends Rapp
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
		this.add_comp('Session_render', Session_render);

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
		this.state('device', 'pc');
		this.state('menu_items', []);
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
		if(props.device)
			this.state('device', props.device);
		// --------------------------------------------------------------------------------
		// ACTIONS
		// --------------------------------------------------------------------------------
		// this.action('action_key', (args)=>{...});
		// this.call_action('action_key', args[object]);
		// --------------------------------------------------------------------------------
		// --------------------------------------------------------------------------------
		this.action('logout_response', (args)=>
			{
				this._main._mods.App_controller.call_method('logout');
			});
		this.action('load', (args)=>
			{
				if(!args) return;
				let buffer = [];
				for(let i in args)
				{
					if(!args.hasOwnProperty(i)) continue;
					buffer.push({p1: args[i].name, k: args[i].mod, v: args[i].title});
				}
				this.state('menu_items', buffer);
			});
		this.action('route', (args)=>
			{
				this._parent.call_action(props.route, {k: args.target.key, v: args.target.innerHTML});
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
		this._view.iterators.btns_items = `<button key='[k]' class='mmenu_item idle' onclick='route'>[v]</button>`;

		this._view.style =`
		.main_menu{
			width: 250px;
		}
		.session_info
		{
			display: flex;
			justify-content: center;
		}
		.mmenu_item
		{
			margin: 5px;
		    border: 0px;
		    padding: 10px;
		    display: block;
		    width: calc(100% - 10px);
		    border-radius: 5px;
		    cursor: pointer;
		}
		.mmenu_item:hover
		{
			background-color: #50b69a;
			color: #cffaee;
		}
		.idle
		{
			background-color: #458f7b;
			color: #b6f8e6;
		}
		.active
		{
			background-color: #50b69a;
			color: #cffaee;
		}
		`;

		this._view.main = `<div class='main_menu'>
			<Session_render logout='logout_response' class='session_info'></Session_render>
			<div>
				<hr />
				${this.render('menu_items', 'btns_items')}
			</div>
		</div>`;
		// --------------------------------------------------------------------------------
		// --------------------------------------------------------------------------------
	}
}
Main_menu.default_props = {};


// --------------------------------------------------------------------------------
// INCLUDE INTO window OBJECT [ ONLY WITOUT WEBPACK ]
// --------------------------------------------------------------------------------
// window.Main_menu = Main_menu;