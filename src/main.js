import Rapp from './js/relast.js';
import App from './js/App.js';

// import './css/main.css';
// require('./css/main.css');

window.onload = function()
{
	Rapp.create_app({class: App, name: 'App', bbox: 'relast'});
}