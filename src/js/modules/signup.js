// --------------------------------------------------------------------------------
// IMPORTS [ ONLY WITH WEBPACK ]
// --------------------------------------------------------------------------------
// import [class name | variable]('file_path[.js]');
import Rapp from '../relast.js';
// // --------------------------------------------------------------------------------
// // --------------------------------------------------------------------------------

export default class Signup extends Rapp
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
		this.state('first_name', '');
		this.state('last_name', '');
		this.state('email', '');
		this.state('user_name', '');
		this.state('pass', '');
		this.state('conf_pass', '');
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
		this.action('first_name_kup', (args)=>
			{
				this.state('first_name', args.target.value);
			});
		this.action('last_name_kup', (args)=>
			{
				this.state('last_name', args.target.value);
			});
		this.action('email_kup', (args)=>
			{
				this.state('email', args.target.value);
			});
		this.action('user_name_kup', (args)=>
			{
				this.state('user_name', args.target.value);
			});
		this.action('pass_kup', (args)=>
			{
				this.state('pass', args.target.value);
			});
		this.action('conf_pass_kup', (args)=>
			{
				this.state('conf_pass', args.target.value);
			});
		//
		//
		//
		//
		this.action('create_user', (args)=>
			{
				let data = {
					first_name: this.get_state('first_name'),
					last_name: this.get_state('last_name'),
					email: this.get_state('email'),
					user_name: this.get_state('user_name'),
					pass1: this.get_state('pass'),
					pass2: this.get_state('conf_pass')
				}

				this.api()
			});
		this.action('create_user_resp', (args)=>
			{
				if(props.resp)
					this._parent.call_action(props.resp, args);
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
		.signup-bbox
		{
			margin: 10px;
			align-self: center;
		}
		.signup-bbox > div
		{
			padding: 10px;
		    background-color: #f4f4f4;
		    border-radius: 5px 5px 0px 0px;
		}
		.signup-bbox > form
		{
			background-color: #a6cdca;
			padding: 10px;
		    border-radius: 0px 0px 5px 5px;
		}
		.signup-login-btn
		{
			text-align: center;
		}
		`;

		this._view.main = `<div class='signup-bbox'>
			<div>Create account</div>
			<form onsubmit='create_user'>
				<div>
					<div>
						<p>First name:</p>
						<div><input type='text' value='[state:first_name]' onkeyup='first_name_kup'/></div>
					</div>
					<div>
						<p>Last name:</p>
						<div><input type='text' value='[state:last_name]' onkeyup='last_name_kup'/></div>
					</div>
					<div>
						<p>Email:</p>
						<div><input type='text' value='[state:email]' onkeyup='email_kup'/></div>
					</div>
					<div>
						<p>User name:</p>
						<div><input type='text' value='[state:user_name]' onkeyup='user_name_kup'/></div>
					</div>
					<div>
						<p>Password:</p>
						<div><input type='password' value='[state:pass]' onkeyup='pass_kup'/></div>
					</div>
					<div>
						<p>Confirm your password:</p>
						<div><input type='password' value='[state:conf_pass]' onkeyup='conf_pass_kup'/></div>
					</div>
				</div>
				<div>
					<div class='signup-login-btn'>
						<input type='reset' value='Clear' />
						<input type='submit' value='Save' />
					</div>
				</div>
			<form>
		</div>`;
		// --------------------------------------------------------------------------------
		// --------------------------------------------------------------------------------
	}
}
Signup.default_props = {};


// --------------------------------------------------------------------------------
// INCLUDE INTO window OBJECT [ ONLY WITOUT WEBPACK ]
// --------------------------------------------------------------------------------
// window.Signup = Signup;