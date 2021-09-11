// --------------------------------------------------------------------------------
// IMPORTS [ ONLY WITH WEBPACK ]
// --------------------------------------------------------------------------------
// import [class name | variable]('file_path[.js]');
import Rapp from './relast.js';
import App_controller from './modules/app_controller.js';
import App_renderer from './modules/app_renderer.js';
import Session from './comps/session.js';
// // --------------------------------------------------------------------------------
// // --------------------------------------------------------------------------------

export default class App extends Rapp
{
	_api_main = 'main';
	constructor(conf)
	{
		super(conf);

		this._debug = false;
		if(this._debug)
			this.create_api(this._api_main, 'http://localhost:2000/kimba_app');
		else
			this.create_api(this._api_main, 'https://aclcode.com/kimba_app');

		// --------------------------------------------------------------------------------
		// ADD COMPONENTS [ ONLY WITH WEBPACK ]
		// --------------------------------------------------------------------------------
		// this.add_comp([class_name:string], [class:class]);
		// this.add_comps([classes:Array]); --> item array: {name: [class_name:string], class: [class:imported-object]}
		this.add_comp('App_controller', App_controller);
		this.add_comp('App_renderer', App_renderer);
		this.add_comp('Session', Session);
		// --------------------------------------------------------------------------------
		// --------------------------------------------------------------------------------

		// --------------------------------------------------------------------------------
		// INCLUDES [ ONLY WITHOUT WEBPACK ]
		// --------------------------------------------------------------------------------
		// this.include('file_path[.js]', [class_name]);
		// --------------------------------------------------------------------------------
		// --------------------------------------------------------------------------------
		// this.include('js/comps/Comp_test1.js', 'Comp_test1');


		//APP MAIN MENU SECTIONS
		this.add_section('dashboard', 'Dashboard', 'Dashboard');
	}
	states()
	{
		// --------------------------------------------------------------------------------
		// STATES
		// --------------------------------------------------------------------------------
		// this.state('state_key', [value]);
		// this.get_state('state_key');
		// --------------------------------------------------------------------------------
		// --------------------------------------------------------------------------------
		this.state('api_main', this._api_main);
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

		this._mods.App_controller.call_method('entry_point');

		// --------------------------------------------------------------------------------
		// HTML VIEWs
		// --------------------------------------------------------------------------------
		this._view.style =`
		.h100p
		{
			height: 100%;
		}`;

		this._view.main = `<div class='h100p'>
			<App_renderer class='h100p'></App_renderer>
		</div>`;
		// --------------------------------------------------------------------------------
		// --------------------------------------------------------------------------------
	}
}
App.default_props = {};


// --------------------------------------------------------------------------------
// INCLUDE INTO window OBJECT [ ONLY WITOUT WEBPACK ]
// --------------------------------------------------------------------------------
// window.App = App;