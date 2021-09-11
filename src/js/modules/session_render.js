// --------------------------------------------------------------------------------
// IMPORTS [ ONLY WITH WEBPACK ]
// --------------------------------------------------------------------------------
// import [class name | variable]('file_path[.js]');
import Rapp from '../relast.js';
// // --------------------------------------------------------------------------------
// // --------------------------------------------------------------------------------

export default class Session_render extends Rapp
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
	run = function(props)
	{
		// --------------------------------------------------------------------------------
		// ACTIONS
		// --------------------------------------------------------------------------------
		// this.action('action_key', (args)=>{...});
		// this.call_action('action_key', args[object]);
		// --------------------------------------------------------------------------------
		// --------------------------------------------------------------------------------
		this.action('logout', (args)=>
			{
				if(props.logout)
					this._parent.call_action(props.logout);
			});
		this.action('refresh', (args)=>
			{
				this.refresh();
			});
		this.action('goto_settings', (args)=>
			{
				this._main._mods.App_renderer.call_action('route_settings');
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
		.session_info_bbox
		{
			text-align: center;
		}
		.session_pic_bbox
		{
			padding: 5px;
		}
		.session_pic_bbox .session_pic_bg
		{
			background-color: #DDD;
		    border-radius: 100%;
		    max-width: 100px;
		    margin: 0px auto;
		}
		.session_pic_bbox .session_pic_bg > div
		{
			width: 95%;
		    height: 100px;
		    margin: 0px auto;
		    background-size: contain;
		    background-repeat: no-repeat;
		    background-position: center;
		}
		.session_info_bbox .session_info_title
		{
			text-align: center;
			font-size: 10pt;
			margin: 4px 0px 0px;
    		padding: 2px 0px 0px;
    		background-color: #92c1b0;
		    border-radius: 10px;
		    color: #2b5c52;
		}
		.session_info_bbox .session_info_value
		{
			text-align: center;
			font-size: 12pt;
    		margin: 0px 0px 4px;
    		padding: 2px 0px;
    		border-bottom: solid 0px #EEE;
		}
		`;

		let picture = this._main._mods.Session.get_state('user_picture');

		this._view.main = `<div class='session_info_bbox'>
			<div class='session_pic_bbox'>
				<div class='session_pic_bg'>
					<div style='background-image:url(${picture !== null ? picture : 'https://aclcode.com/media/icos/default_user.svg'})'></div>
				</div>
			</div>
			<div>
				<p class='session_info_title'>User name</p>
				<p class='session_info_value'>${this._main._mods.Session.get_state('user_name')}</p>
				<p class='session_info_title'>Full name</p>
				<p class='session_info_value'>${this._main._mods.Session.get_state('first_name')} ${this._main._mods.Session.get_state('last_name')}</p>
				<p class='session_info_title'>E-mail</p>
				<p class='session_info_value'>${this._main._mods.Session.get_state('email')}</p>
				<div>
					<button class='btn_link' onclick='goto_settings'>Settings</button>
					<button onclick='logout' class='btn_link'>Logout</button>
				</div>
			</div>
		</div>`;
		// --------------------------------------------------------------------------------
		// --------------------------------------------------------------------------------
	}
}
Session_render.default_props = {};


// --------------------------------------------------------------------------------
// INCLUDE INTO window OBJECT [ ONLY WITOUT WEBPACK ]
// --------------------------------------------------------------------------------
// window.Session_render = Session_render;