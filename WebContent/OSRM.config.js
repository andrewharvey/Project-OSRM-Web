/*
This program is free software; you can redistribute it and/or modify
it under the terms of the GNU AFFERO General Public License as published by
the Free Software Foundation; either version 3 of the License, or
any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
or see http://www.gnu.org/licenses/agpl.txt.
*/

// OSRM config file
// [has to be loaded directly after OSRM.base]

OSRM.DEFAULTS = {
	ROUTING_ENGINES: [
		{	url: '/viaroute',
			timestamp: '/timestamp',
			metric: 0,
			label: 'ENGINE_0',
		}
	],
	
	WEBSITE_URL: document.URL.replace(/#*(\?.*|$)/i,""),					// truncates URL before first ?, and removes tailing #
	HOST_GEOCODER_URL: 'http://nominatim.openstreetmap.org/search',
	HOST_REVERSE_GEOCODER_URL: 'http://nominatim.openstreetmap.org/reverse',
	HOST_SHORTENER_URL: 'http://map.project-osrm.org/shorten/',
	
	SHORTENER_PARAMETERS: '%url&jsonp=%jsonp',
	SHORTENER_REPLY_PARAMETER: 'ShortURL',	
	
	ROUTING_ENGINE: 0,
	DISTANCE_FORMAT: 0,														// 0: km, 1: miles
	GEOCODER_BOUNDS: '',	
	ZOOM_LEVEL: 14,
	HIGHLIGHT_ZOOM_LEVEL: 16,
	JSONP_TIMEOUT: 10000,
	
	ONLOAD_ZOOM_LEVEL: 10,
	ONLOAD_LATITUDE: -33.85,
	ONLOAD_LONGITUDE: 151.20,
	ONLOAD_SOURCE: "",
	ONLOAD_TARGET: "",
	
	LANGUAGE: "en",
	LANUGAGE_ONDEMAND_RELOADING: true,
	LANGUAGE_SUPPORTED: [ 
		{encoding:"en", name:"English"},
		{encoding:"bg", name:"Български"},
		{encoding:"cs", name:"Česky"},
		{encoding:"de", name:"Deutsch"},
		{encoding:"dk", name:"Dansk"},
		{encoding:"es", name:"Español"},
		{encoding:"fi", name:"Suomi"},
		{encoding:"fr", name:"Français"},
		{encoding:"it", name:"Italiano"},
		{encoding:"lv", name:"Latviešu"},
		{encoding:"pl", name:"Polski"},
		{encoding:"ru", name:"Русский"}
	],
		
	TILE_SERVERS: [
		{	display_name: 'fosm (local)',
			url:'//tile.tianjara.net/fosm/mapnik/{z}/{x}/{y}.png',
			attribution:"Map Data &amp; Map Image &copy; <a href='http://www.openstreetmap.org/'>OpenStreetMap</a> &amp; <a href='http://www.fosm.org/'>FOSM</a> Contributors <a rel='license' href='http://creativecommons.org/licenses/by-sa/2.0/'>CC BY-SA 2.0</a>",
			options:{maxZoom: 19}
		},
		{	display_name: 'osm.org',
			url:'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
			attribution:"Map Image &copy; <a href='http://www.openstreetmap.org/'>OpenStreetMap</a> Contributors <a rel='license' href='http://creativecommons.org/licenses/by-sa/2.0/'>CC BY-SA 2.0</a>",
			options:{maxZoom: 18}
		}
	],

	NOTIFICATIONS: {
		LOCALIZATION:	1800000,	// 30min
		CLICKING: 		60000,		// 1min
		DRAGGING: 		120000,		// 2min 
		MAINTENANCE:	false
	},
	OVERRIDE_MAINTENANCE_NOTIFICATION_HEADER: undefined,
	OVERRIDE_MAINTENANCE_NOTIFICATION_BODY: undefined
};
