export const environment = {
	production: true,
	isMockEnabled: false, // You have to switch this, when your real back-end is done
	authTokenKey: 'authce9d77b308c149d5992a80073637e4d5',
	authUserKey: 'authus8g1465sdf4ew16gc222d5f7eg51h2c3',
	version: '16082019',
	ambiente: 'prod',

	rol: {
		operario: 'Operativo',
		administrador: 'Administrativo',
		mapa: 'Mapa',
	},

	folders: {
		imgMarkers: '/assets/media/icons/markers/'
	},

	endpoints: {
		parent: 'http://34.73.27.5:8181',
		views: 'http://34.73.27.5:8181/pescar/views',
		geoServer: 'http://104.155.189.149:8080/geoserver/gwc/service/wmts',
		login: 'http://34.73.27.5:8080/login',
		logout: 'http://34.73.27.5:8080/logout',
		basicInfoPopup: 'http://demo2697882.mockable.io/sae/expediente/62271/proceso/43/'
	}
};
