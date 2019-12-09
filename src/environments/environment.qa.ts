// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  isMockEnabled: false, // You have to switch this, when your real back-end is done
  authTokenKey: 'authce9d77b308c149d5992a80073637e4d5',
  authUserKey: 'authus8g1465sdf4ew16gc222d5f7eg51h2c3',
  version: '1.0.0',
  ambiente: 'qa',

  rol: {
    operario: 'Operativo',
    administrador: 'Administrativo',
    mapa: 'Mapa',
  },

  folders: {
    imgMarkers: '/assets/media/icons/markers/'
  },

  endpoints: {
    parent: 'http://34.66.98.150:8181',
    views: 'http://34.66.98.150:8181/pescar/views',
    
    statistics: {
      airQualityMatch: 'http://34.66.98.150:8181/listado_estaciones/statistics/',
      miningProcessingRequestStates: 'http://34.66.98.150:8181/sae/mining/statistics/permissive_states/',
      miningProcessingRequestFilters: 'http://34.66.98.150:8181/sae/mining/statistics/expedients/processing_request/filters?',
      miningProcessingSanctioningStates: 'http://34.66.98.150:8181/sae/mining/statistics/penalty_classes/',
      miningProcessingSanctioningFilters: 'http://34.66.98.150:8181/sae/mining/statistics/expedients/penalty_processes/filters?'
    },

    listStation: {
      base: 'http://34.66.98.150:8181/listado_estaciones/',
      ica: '/ica'
    },

    geoServer: 'http://35.192.93.173:8080/geoserver',

    login: 'http://34.66.98.150:8080/login',
    refreshToken: 'http://34.66.98.150:8080/oauth/access_token',
    logout: 'http://34.66.98.150:8080/logout',

    meteosimAPI: {
      base: 'http://34.66.98.150:8181/meteosim/api/',
      setHysplitTraj: 'setHysplitTraj',
      getHysplitTraj: 'getHysplitTraj',
      setHysplitDisp: 'setHysplitDisp',
      getHysplitDisp: 'getHysplitDisp',
      getTabularPrediction: 'getTabularPrediction',
      getTabularProfiles: 'getTabularProfiles',
      getWindRose: 'getWindRose',
      getColormap: 'getColormap'
    },

    meteosimWMS: {
      base: 'http://34.66.98.150:8181/meteosim/wms/',
      getArchive: 'getArchive',
      getFeature: 'getFeature',
      getColorScale: 'getColorScale',
      getPredictionDates: 'getPredictionDates'
    },

    meteosimReports: {
      base: 'http://34.66.98.150:8181/meteosim/reports/',
      getHysplitTraj: 'getHysplitTraj',
      getHysplitDisp: 'getHysplitDisp'
    },

    miningReports: {
      base: 'http://34.66.98.150:8181/mining/analysis/',
      environmental_determinants: 'environmental_determinants/report',
      use_discovered_areas: 'use_discovered_areas/report',
      export_environmental_determinants: 'environmental_determinants/export/xlsx?',
      export_use_discovered_areas: 'use_discovered_areas/export/xlsx?'
    },
    
    saeExpDetail: "http://34.66.98.150:8181/sae",
    saeReports: "http://34.66.98.150:8181/sae/reports/",

    weatherStations: "http://34.66.98.150:8181/meteorological/stations/",

    bochicar: {
      base: 'http://34.66.98.150:8181/bochicar/',
      getStreamURL: "node/{node}/camera/{camera}",
      getStream: "http://35.237.34.166"
    }

  },

  firebase: {
    apiKey: "AIzaSyCTPuxKi63y8w9GT5fHBlrJWNOvXqKQPO8",
    authDomain: "test-project-fea98.firebaseapp.com",
    databaseURL: "https://test-project-fea98.firebaseio.com",
    projectId: "test-project-fea98",
    storageBucket: "test-project-fea98.appspot.com",
    messagingSenderId: "352314395680",
    appId: "1:352314395680:web:6423977f7f8d4ae7"
  }
};
