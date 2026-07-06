/* ============================================================
   CONTROLE DE CAIXAS - SÓ FOLHAS HORTIFRUTI
   ------------------------------------------------------------
   Modo atual:
   - Funciona imediatamente com dados locais no navegador.
   - Para uso multiusuário em tempo real, conecte o Firebase:
     1) cole o firebaseConfig abaixo
     2) altere USE_FIREBASE para true
   ============================================================ */

const APP_CONFIG = {
  USE_FIREBASE: true,
  FIREBASE_CONFIG: {
    apiKey: "AIzaSyBSMnSTQdj26Nd1IeulkLY5_FFhxSzsxw0",
    authDomain: "controle-de-caixas-61325.firebaseapp.com",
    databaseURL: "https://controle-de-caixas-61325-default-rtdb.firebaseio.com/",
    projectId: "controle-de-caixas-61325",
    storageBucket: "controle-de-caixas-61325.firebasestorage.app",
    messagingSenderId: "821543178927",
    appId: "1:821543178927:web:f354626f1115dff9877a5a",
    measurementId: "G-R5461FE4J7"
  },
  FIREBASE_PATH: 'sofolhasCaixasApp/root',
};

const STORAGE_KEY = 'sofolhas_caixas_app_local_v1';
const SESSION_KEY = 'sofolhas_caixas_session_v1';
const INITIAL_PASSWORD = '123456';

const BOX_TYPES = [
  { key: 'folhagens', label: 'Caixas de Folhagens', color: '#19853f' },
  { key: 'bandejas', label: 'Caixas de Bandejas', color: '#2f65c8' },
];

const LEGACY_BOX_KEYS = ['folhagemAzul', 'folhagemVerde', 'folhagemPreta', 'folhagemBranca'];
const GOIANIA_ROUTE_IDS = ['rota_goiania_vinicius', 'rota_goiania_maycon', 'rota_goiania_alexsandro', 'rota_goiania_edmar'];
const GOIANIA_TRUNK_ROUTE_ID = 'rota_goiania_vinicius';
const GOIANIA_TRUNK_DRIVER_IDS = ['user_motor_vinicius', 'user_motor_sebastiao'];
const SUPPORT_POINT_STORE_ID = 'loja_fazenda_neropolis_sr_carlinhos';
const SUPPORT_POINT_ROUTE_ID = 'rota_ponto_apoio_neropolis';
const RELIEF_DRIVER_CAIO_USER = {
  id: 'user_motor_caio',
  name: 'Caio',
  username: 'motorcaio',
  password: INITIAL_PASSWORD,
  role: 'driver',
  isReliefDriver: true,
  forcePasswordChange: true,
};


const SEPARATOR_STORE_LINKS = [
  {
    "storeName": "CASA ROCCA ASA SUL - MATRIZ",
    "storeKey": "casa rocca asa sul matriz",
    "separator": "Anderson",
    "separatorRaw": "9 - SEPARADOR ANDERSON",
    "rede": "11-MERCADOS ALEATÓRIOS",
    "network": "Mercados Aleatórios"
  },
  {
    "storeName": "COMPER ASA SUL",
    "storeKey": "comper asa sul",
    "separator": "Anderson",
    "separatorRaw": "9 - SEPARADOR ANDERSON",
    "rede": "3-COMPER/FORT",
    "network": "Comper/Fort"
  },
  {
    "storeName": "COSTA ADE",
    "storeKey": "costa ade",
    "separator": "Anderson",
    "separatorRaw": "9 - SEPARADOR ANDERSON",
    "rede": "15-COSTA ATACADÃO",
    "network": "Costa Atacadão"
  },
  {
    "storeName": "COSTA UNIEURO",
    "storeKey": "costa unieuro",
    "separator": "Anderson",
    "separatorRaw": "9 - SEPARADOR ANDERSON",
    "rede": "15-COSTA ATACADÃO",
    "network": "Costa Atacadão"
  },
  {
    "storeName": "DIA A DIA GUARA",
    "storeKey": "dia a dia guara",
    "separator": "Anderson",
    "separatorRaw": "9 - SEPARADOR ANDERSON",
    "rede": "2-DIA A DIA",
    "network": "Dia a Dia"
  },
  {
    "storeName": "DIA A DIA JARDIM BOTANICO",
    "storeKey": "dia a dia jardim botanico",
    "separator": "Anderson",
    "separatorRaw": "9 - SEPARADOR ANDERSON",
    "rede": "2-DIA A DIA",
    "network": "Dia a Dia"
  },
  {
    "storeName": "DIA A DIA SIA",
    "storeKey": "dia a dia sia",
    "separator": "Anderson",
    "separatorRaw": "9 - SEPARADOR ANDERSON",
    "rede": "2-DIA A DIA",
    "network": "Dia a Dia"
  },
  {
    "storeName": "DIA A DIA VICENTE PIRES RUA 04",
    "storeKey": "dia a dia vicente pires rua 04",
    "separator": "Anderson",
    "separatorRaw": "9 - SEPARADOR ANDERSON",
    "rede": "2-DIA A DIA",
    "network": "Dia a Dia"
  },
  {
    "storeName": "DIA A DIA VICENTE PIRES RUA 12",
    "storeKey": "dia a dia vicente pires rua 12",
    "separator": "Anderson",
    "separatorRaw": "9 - SEPARADOR ANDERSON",
    "rede": "2-DIA A DIA",
    "network": "Dia a Dia"
  },
  {
    "storeName": "DIA DIA RIACHO FUNDO",
    "storeKey": "dia a dia riacho fundo",
    "separator": "Anderson",
    "separatorRaw": "9 - SEPARADOR ANDERSON",
    "rede": "2-DIA A DIA",
    "network": "Dia a Dia"
  },
  {
    "storeName": "FORT TAGUATINGA",
    "storeKey": "fort taguatinga",
    "separator": "Anderson",
    "separatorRaw": "9 - SEPARADOR ANDERSON",
    "rede": "3-COMPER/FORT",
    "network": "Comper/Fort"
  },
  {
    "storeName": "VIVENDAS CAMPING CLUB AGUAS LINDAS",
    "storeKey": "vivendas camping club aguas lindas",
    "separator": "Anderson",
    "separatorRaw": "9 - SEPARADOR ANDERSON",
    "rede": "5-VIVENDAS",
    "network": "Vivendas"
  },
  {
    "storeName": "VIVENDAS COMERCIAL TAGN",
    "storeKey": "vivendas comercial tagn",
    "separator": "Anderson",
    "separatorRaw": "9 - SEPARADOR ANDERSON",
    "rede": "5-VIVENDAS",
    "network": "Vivendas"
  },
  {
    "storeName": "VIVENDAS EQNL",
    "storeKey": "vivendas eqnl",
    "separator": "Anderson",
    "separatorRaw": "9 - SEPARADOR ANDERSON",
    "rede": "5-VIVENDAS",
    "network": "Vivendas"
  },
  {
    "storeName": "VIVENDAS SETOR O",
    "storeKey": "vivendas setor o",
    "separator": "Anderson",
    "separatorRaw": "9 - SEPARADOR ANDERSON",
    "rede": "5-VIVENDAS",
    "network": "Vivendas"
  },
  {
    "storeName": "VIVENDAS SOL NASCENTE EQNP",
    "storeKey": "vivendas sol nascente eqnp",
    "separator": "Anderson",
    "separatorRaw": "9 - SEPARADOR ANDERSON",
    "rede": "5-VIVENDAS",
    "network": "Vivendas"
  },
  {
    "storeName": "NOSSA KAZA ANHANGUERA B",
    "storeKey": "nossa kaza anhanguera b",
    "separator": "Caio",
    "separatorRaw": "3 - SEPARADOR CAIO",
    "rede": "11-MERCADOS ALEATÓRIOS",
    "network": "Mercados Aleatórios"
  },
  {
    "storeName": "NOSSA KAZA BRAZLÂNDIA",
    "storeKey": "nossa kaza brazlandia",
    "separator": "Caio",
    "separatorRaw": "3 - SEPARADOR CAIO",
    "rede": "11-MERCADOS ALEATÓRIOS",
    "network": "Mercados Aleatórios"
  },
  {
    "storeName": "NOSSA KAZA CENTRO",
    "storeKey": "nossa kaza centro",
    "separator": "Caio",
    "separatorRaw": "3 - SEPARADOR CAIO",
    "rede": "11-MERCADOS ALEATÓRIOS",
    "network": "Mercados Aleatórios"
  },
  {
    "storeName": "NOSSA KAZA CHACARA YPIRANGA A",
    "storeKey": "nossa kaza chacara ypiranga a",
    "separator": "Caio",
    "separatorRaw": "3 - SEPARADOR CAIO",
    "rede": "11-MERCADOS ALEATÓRIOS",
    "network": "Mercados Aleatórios"
  },
  {
    "storeName": "NOSSA KAZA CÉU AZUL",
    "storeKey": "nossa kaza ceu azul",
    "separator": "Caio",
    "separatorRaw": "3 - SEPARADOR CAIO",
    "rede": "11-MERCADOS ALEATÓRIOS",
    "network": "Mercados Aleatórios"
  },
  {
    "storeName": "NOSSA KAZA ESPLANADA 3",
    "storeKey": "nossa kaza esplanada 3",
    "separator": "Caio",
    "separatorRaw": "3 - SEPARADOR CAIO",
    "rede": "11-MERCADOS ALEATÓRIOS",
    "network": "Mercados Aleatórios"
  },
  {
    "storeName": "NOSSA KAZA FUMAL",
    "storeKey": "nossa kaza fumal",
    "separator": "Caio",
    "separatorRaw": "3 - SEPARADOR CAIO",
    "rede": "11-MERCADOS ALEATÓRIOS",
    "network": "Mercados Aleatórios"
  },
  {
    "storeName": "NOSSA KAZA FUMAL 01",
    "storeKey": "nossa kaza fumal 01",
    "separator": "Caio",
    "separatorRaw": "3 - SEPARADOR CAIO",
    "rede": "11-MERCADOS ALEATÓRIOS",
    "network": "Mercados Aleatórios"
  },
  {
    "storeName": "NOSSA KAZA MARAVILHA",
    "storeKey": "nossa kaza maravilha",
    "separator": "Caio",
    "separatorRaw": "3 - SEPARADOR CAIO",
    "rede": "11-MERCADOS ALEATÓRIOS",
    "network": "Mercados Aleatórios"
  },
  {
    "storeName": "NOSSA KAZA PARK JK",
    "storeKey": "nossa kaza park jk",
    "separator": "Caio",
    "separatorRaw": "3 - SEPARADOR CAIO",
    "rede": "11-MERCADOS ALEATÓRIOS",
    "network": "Mercados Aleatórios"
  },
  {
    "storeName": "NOSSA KAZA PARQUE ALVORADA 1",
    "storeKey": "nossa kaza parque alvorada 1",
    "separator": "Caio",
    "separatorRaw": "3 - SEPARADOR CAIO",
    "rede": "11-MERCADOS ALEATÓRIOS",
    "network": "Mercados Aleatórios"
  },
  {
    "storeName": "NOSSA KAZA PARQUE ARAGUARI",
    "storeKey": "nossa kaza parque araguari",
    "separator": "Caio",
    "separatorRaw": "3 - SEPARADOR CAIO",
    "rede": "11-MERCADOS ALEATÓRIOS",
    "network": "Mercados Aleatórios"
  },
  {
    "storeName": "NOSSA KAZA PEDREGAL",
    "storeKey": "nossa kaza pedregal",
    "separator": "Caio",
    "separatorRaw": "3 - SEPARADOR CAIO",
    "rede": "11-MERCADOS ALEATÓRIOS",
    "network": "Mercados Aleatórios"
  },
  {
    "storeName": "NOSSA KAZA PONTE ALTA",
    "storeKey": "nossa kaza ponte alta",
    "separator": "Caio",
    "separatorRaw": "3 - SEPARADOR CAIO",
    "rede": "11-MERCADOS ALEATÓRIOS",
    "network": "Mercados Aleatórios"
  },
  {
    "storeName": "NOSSA KAZA SANTA MARIA",
    "storeKey": "nossa kaza santa maria",
    "separator": "Caio",
    "separatorRaw": "3 - SEPARADOR CAIO",
    "rede": "11-MERCADOS ALEATÓRIOS",
    "network": "Mercados Aleatórios"
  },
  {
    "storeName": "NOSSA KAZA TAGUATINGA NORTE",
    "storeKey": "nossa kaza taguatinga norte",
    "separator": "Caio",
    "separatorRaw": "3 - SEPARADOR CAIO",
    "rede": "11-MERCADOS ALEATÓRIOS",
    "network": "Mercados Aleatórios"
  },
  {
    "storeName": "NOSSA KAZA VALPARAISO",
    "storeKey": "nossa kaza valparaiso",
    "separator": "Caio",
    "separatorRaw": "3 - SEPARADOR CAIO",
    "rede": "11-MERCADOS ALEATÓRIOS",
    "network": "Mercados Aleatórios"
  },
  {
    "storeName": "NOSSA KAZA VIEGAS",
    "storeKey": "nossa kaza viegas",
    "separator": "Caio",
    "separatorRaw": "3 - SEPARADOR CAIO",
    "rede": "11-MERCADOS ALEATÓRIOS",
    "network": "Mercados Aleatórios"
  },
  {
    "storeName": "ATACADÃO DIA A DIA - ITUMBIARA",
    "storeKey": "dia a dia itumbiara",
    "separator": "Daniel",
    "separatorRaw": "8 - SEPARADOR DANIEL",
    "rede": "2-DIA A DIA",
    "network": "Dia a Dia"
  },
  {
    "storeName": "BRETAS ITUMBIARA",
    "storeKey": "bretas itumbiara",
    "separator": "Daniel",
    "separatorRaw": "8 - SEPARADOR DANIEL",
    "rede": "13-BRETAS",
    "network": "Bretas"
  },
  {
    "storeName": "BRETAS LARANJEIRAS",
    "storeKey": "bretas laranjeiras",
    "separator": "Daniel",
    "separatorRaw": "8 - SEPARADOR DANIEL",
    "rede": "13-BRETAS",
    "network": "Bretas"
  },
  {
    "storeName": "BRETAS MONTE CRISTO",
    "storeKey": "bretas monte cristo",
    "separator": "Daniel",
    "separatorRaw": "8 - SEPARADOR DANIEL",
    "rede": "13-BRETAS",
    "network": "Bretas"
  },
  {
    "storeName": "BRETAS MORADA DO SOL",
    "storeKey": "bretas morada do sol",
    "separator": "Daniel",
    "separatorRaw": "8 - SEPARADOR DANIEL",
    "rede": "13-BRETAS",
    "network": "Bretas"
  },
  {
    "storeName": "BRETAS SENADOR CANEDO",
    "storeKey": "bretas senador canedo",
    "separator": "Daniel",
    "separatorRaw": "8 - SEPARADOR DANIEL",
    "rede": "13-BRETAS",
    "network": "Bretas"
  },
  {
    "storeName": "BRETAS SOL NASCENTE",
    "storeKey": "bretas sol nascente",
    "separator": "Daniel",
    "separatorRaw": "8 - SEPARADOR DANIEL",
    "rede": "13-BRETAS",
    "network": "Bretas"
  },
  {
    "storeName": "BRETAS VEIGA JARDIM",
    "storeKey": "bretas veiga jardim",
    "separator": "Daniel",
    "separatorRaw": "8 - SEPARADOR DANIEL",
    "rede": "13-BRETAS",
    "network": "Bretas"
  },
  {
    "storeName": "BRETAS VILA JARAGUA",
    "storeKey": "bretas vila jaragua",
    "separator": "Daniel",
    "separatorRaw": "8 - SEPARADOR DANIEL",
    "rede": "13-BRETAS",
    "network": "Bretas"
  },
  {
    "storeName": "BRETAS VILA PEDROSO",
    "storeKey": "bretas vila pedroso",
    "separator": "Daniel",
    "separatorRaw": "8 - SEPARADOR DANIEL",
    "rede": "13-BRETAS",
    "network": "Bretas"
  },
  {
    "storeName": "COSTA AVENIDA GOIÁS",
    "storeKey": "costa avenida goias",
    "separator": "Daniel",
    "separatorRaw": "8 - SEPARADOR DANIEL",
    "rede": "15-COSTA ATACADÃO",
    "network": "Costa Atacadão"
  },
  {
    "storeName": "COSTA LARANJEIRAS",
    "storeKey": "costa laranjeiras",
    "separator": "Daniel",
    "separatorRaw": "8 - SEPARADOR DANIEL",
    "rede": "15-COSTA ATACADÃO",
    "network": "Costa Atacadão"
  },
  {
    "storeName": "COSTA RIO VERDE",
    "storeKey": "costa rio verde",
    "separator": "Daniel",
    "separatorRaw": "8 - SEPARADOR DANIEL",
    "rede": "15-COSTA ATACADÃO",
    "network": "Costa Atacadão"
  },
  {
    "storeName": "COSTA T-63",
    "storeKey": "costa t 63",
    "separator": "Daniel",
    "separatorRaw": "8 - SEPARADOR DANIEL",
    "rede": "15-COSTA ATACADÃO",
    "network": "Costa Atacadão"
  },
  {
    "storeName": "DIA A DIA CESAR LATES",
    "storeKey": "dia a dia cesar lates",
    "separator": "Daniel",
    "separatorRaw": "8 - SEPARADOR DANIEL",
    "rede": "2-DIA A DIA",
    "network": "Dia a Dia"
  },
  {
    "storeName": "DIA A DIA RIO VERDE",
    "storeKey": "dia a dia rio verde",
    "separator": "Daniel",
    "separatorRaw": "8 - SEPARADOR DANIEL",
    "rede": "2-DIA A DIA",
    "network": "Dia a Dia"
  },
  {
    "storeName": "BRETAS  AGUAS LINDAS",
    "storeKey": "bretas aguas lindas",
    "separator": "Geanderson",
    "separatorRaw": "5 - SEPARADOR GEANDERSON",
    "rede": "13-BRETAS",
    "network": "Bretas"
  },
  {
    "storeName": "CHACARA AGUA LIMPA",
    "storeKey": "chacara agua limpa",
    "separator": "Geanderson",
    "separatorRaw": "5 - SEPARADOR GEANDERSON",
    "rede": "11-MERCADOS ALEATÓRIOS",
    "network": "Mercados Aleatórios"
  },
  {
    "storeName": "COMPER AGUAS CLARAS",
    "storeKey": "comper aguas claras",
    "separator": "Geanderson",
    "separatorRaw": "5 - SEPARADOR GEANDERSON",
    "rede": "3-COMPER/FORT",
    "network": "Comper/Fort"
  },
  {
    "storeName": "COSTA TAGUATINGA",
    "storeKey": "costa taguatinga",
    "separator": "Geanderson",
    "separatorRaw": "5 - SEPARADOR GEANDERSON",
    "rede": "15-COSTA ATACADÃO",
    "network": "Costa Atacadão"
  },
  {
    "storeName": "DD AGUAS CLARAS",
    "storeKey": "dia a dia aguas claras",
    "separator": "Geanderson",
    "separatorRaw": "5 - SEPARADOR GEANDERSON",
    "rede": "2-DIA A DIA",
    "network": "Dia a Dia"
  },
  {
    "storeName": "DD CEILÂNDIA NORTE",
    "storeKey": "dia a dia ceilandia norte",
    "separator": "Geanderson",
    "separatorRaw": "5 - SEPARADOR GEANDERSON",
    "rede": "2-DIA A DIA",
    "network": "Dia a Dia"
  },
  {
    "storeName": "DIA A DIA 070",
    "storeKey": "dia a dia 070",
    "separator": "Geanderson",
    "separatorRaw": "5 - SEPARADOR GEANDERSON",
    "rede": "2-DIA A DIA",
    "network": "Dia a Dia"
  },
  {
    "storeName": "DIA A DIA AGUAS LINDAS",
    "storeKey": "dia a dia aguas lindas",
    "separator": "Geanderson",
    "separatorRaw": "5 - SEPARADOR GEANDERSON",
    "rede": "2-DIA A DIA",
    "network": "Dia a Dia"
  },
  {
    "storeName": "DIA A DIA CEILANDIA CENTRO",
    "storeKey": "dia a dia ceilandia centro",
    "separator": "Geanderson",
    "separatorRaw": "5 - SEPARADOR GEANDERSON",
    "rede": "2-DIA A DIA",
    "network": "Dia a Dia"
  },
  {
    "storeName": "DIA A DIA EPTG",
    "storeKey": "dia a dia eptg",
    "separator": "Geanderson",
    "separatorRaw": "5 - SEPARADOR GEANDERSON",
    "rede": "2-DIA A DIA",
    "network": "Dia a Dia"
  },
  {
    "storeName": "DIA A DIA GURUPI",
    "storeKey": "dia a dia gurupi",
    "separator": "Geanderson",
    "separatorRaw": "5 - SEPARADOR GEANDERSON",
    "rede": "2-DIA A DIA",
    "network": "Dia a Dia"
  },
  {
    "storeName": "DIA A DIA P SUL",
    "storeKey": "dia a dia p sul",
    "separator": "Geanderson",
    "separatorRaw": "5 - SEPARADOR GEANDERSON",
    "rede": "2-DIA A DIA",
    "network": "Dia a Dia"
  },
  {
    "storeName": "DIA A DIA SANTO ANTONIO",
    "storeKey": "dia a dia santo antonio",
    "separator": "Geanderson",
    "separatorRaw": "5 - SEPARADOR GEANDERSON",
    "rede": "2-DIA A DIA",
    "network": "Dia a Dia"
  },
  {
    "storeName": "DIA A DIA TAGUATINGA SUL",
    "storeKey": "dia a dia taguatinga sul",
    "separator": "Geanderson",
    "separatorRaw": "5 - SEPARADOR GEANDERSON",
    "rede": "2-DIA A DIA",
    "network": "Dia a Dia"
  },
  {
    "storeName": "FORT CEILANDIA",
    "storeKey": "fort ceilandia",
    "separator": "Geanderson",
    "separatorRaw": "5 - SEPARADOR GEANDERSON",
    "rede": "3-COMPER/FORT",
    "network": "Comper/Fort"
  },
  {
    "storeName": "FORT SOL NASCENTE",
    "storeKey": "fort sol nascente",
    "separator": "Geanderson",
    "separatorRaw": "5 - SEPARADOR GEANDERSON",
    "rede": "3-COMPER/FORT",
    "network": "Comper/Fort"
  },
  {
    "storeName": "VIVENDAS AGUAS LINDAS",
    "storeKey": "vivendas aguas lindas",
    "separator": "Geanderson",
    "separatorRaw": "5 - SEPARADOR GEANDERSON",
    "rede": "5-VIVENDAS",
    "network": "Vivendas"
  },
  {
    "storeName": "ATACADAO DIA A DIA SAMAMBAIA",
    "storeKey": "dia a dia samambaia",
    "separator": "João Victor",
    "separatorRaw": "7 - SEPARADOR JOÃO VICTOR",
    "rede": "2-DIA A DIA",
    "network": "Dia a Dia"
  },
  {
    "storeName": "BRETAS FORMOSA",
    "storeKey": "bretas formosa",
    "separator": "João Victor",
    "separatorRaw": "7 - SEPARADOR JOÃO VICTOR",
    "rede": "13-BRETAS",
    "network": "Bretas"
  },
  {
    "storeName": "CASA ROCCA LAGO NORTE - FILIAL",
    "storeKey": "casa rocca lago norte filial",
    "separator": "João Victor",
    "separatorRaw": "7 - SEPARADOR JOÃO VICTOR",
    "rede": "11-MERCADOS ALEATÓRIOS",
    "network": "Mercados Aleatórios"
  },
  {
    "storeName": "COMPER GAMA",
    "storeKey": "comper gama",
    "separator": "João Victor",
    "separatorRaw": "7 - SEPARADOR JOÃO VICTOR",
    "rede": "3-COMPER/FORT",
    "network": "Comper/Fort"
  },
  {
    "storeName": "COMPER SOBRADINHO",
    "storeKey": "comper sobradinho",
    "separator": "João Victor",
    "separatorRaw": "7 - SEPARADOR JOÃO VICTOR",
    "rede": "3-COMPER/FORT",
    "network": "Comper/Fort"
  },
  {
    "storeName": "COSTA LUZIÂNIA",
    "storeKey": "costa luziania",
    "separator": "João Victor",
    "separatorRaw": "7 - SEPARADOR JOÃO VICTOR",
    "rede": "15-COSTA ATACADÃO",
    "network": "Costa Atacadão"
  },
  {
    "storeName": "COSTA TAQUARI",
    "storeKey": "costa taquari",
    "separator": "João Victor",
    "separatorRaw": "7 - SEPARADOR JOÃO VICTOR",
    "rede": "15-COSTA ATACADÃO",
    "network": "Costa Atacadão"
  },
  {
    "storeName": "COSTA VALPARAISO",
    "storeKey": "costa valparaiso",
    "separator": "João Victor",
    "separatorRaw": "7 - SEPARADOR JOÃO VICTOR",
    "rede": "15-COSTA ATACADÃO",
    "network": "Costa Atacadão"
  },
  {
    "storeName": "DIA  A DIA PLANALTINA MESTRE D´ARMAS",
    "storeKey": "dia a dia planaltina mestre d armas",
    "separator": "João Victor",
    "separatorRaw": "7 - SEPARADOR JOÃO VICTOR",
    "rede": "2-DIA A DIA",
    "network": "Dia a Dia"
  },
  {
    "storeName": "DIA A DIA FORMOSA",
    "storeKey": "dia a dia formosa",
    "separator": "João Victor",
    "separatorRaw": "7 - SEPARADOR JOÃO VICTOR",
    "rede": "2-DIA A DIA",
    "network": "Dia a Dia"
  },
  {
    "storeName": "DIA A DIA PLANALTINA DF",
    "storeKey": "dia a dia planaltina df",
    "separator": "João Victor",
    "separatorRaw": "7 - SEPARADOR JOÃO VICTOR",
    "rede": "2-DIA A DIA",
    "network": "Dia a Dia"
  },
  {
    "storeName": "DIA A DIA PLANALTINA GO",
    "storeKey": "dia a dia planaltina go",
    "separator": "João Victor",
    "separatorRaw": "7 - SEPARADOR JOÃO VICTOR",
    "rede": "2-DIA A DIA",
    "network": "Dia a Dia"
  },
  {
    "storeName": "DIA A DIA SOBRADINHO",
    "storeKey": "dia a dia sobradinho",
    "separator": "João Victor",
    "separatorRaw": "7 - SEPARADOR JOÃO VICTOR",
    "rede": "2-DIA A DIA",
    "network": "Dia a Dia"
  },
  {
    "storeName": "FORT PLANALTINA",
    "storeKey": "fort planaltina",
    "separator": "João Victor",
    "separatorRaw": "7 - SEPARADOR JOÃO VICTOR",
    "rede": "3-COMPER/FORT",
    "network": "Comper/Fort"
  },
  {
    "storeName": "FORT VALPARAISO",
    "storeKey": "fort valparaiso",
    "separator": "João Victor",
    "separatorRaw": "7 - SEPARADOR JOÃO VICTOR",
    "rede": "3-COMPER/FORT",
    "network": "Comper/Fort"
  },
  {
    "storeName": "SUPER JOCKEY EMPORIO",
    "storeKey": "super jockey emporio",
    "separator": "João Victor",
    "separatorRaw": "7 - SEPARADOR JOÃO VICTOR",
    "rede": "11-MERCADOS ALEATÓRIOS",
    "network": "Mercados Aleatórios"
  },
  {
    "storeName": "SUPERVENDAS RECANTO 2 RCT",
    "storeKey": "supervendas recanto 2 rct",
    "separator": "João Victor",
    "separatorRaw": "7 - SEPARADOR JOÃO VICTOR",
    "rede": "5-VIVENDAS",
    "network": "Vivendas"
  },
  {
    "storeName": "ALVORADA",
    "storeKey": "alvorada",
    "separator": "Matheus",
    "separatorRaw": "2 - SEPARADOR MATHEUS",
    "rede": "11-MERCADOS ALEATÓRIOS",
    "network": "Mercados Aleatórios"
  },
  {
    "storeName": "BRETAS ALPHAVILLE",
    "storeKey": "bretas alphaville",
    "separator": "Matheus",
    "separatorRaw": "2 - SEPARADOR MATHEUS",
    "rede": "13-BRETAS",
    "network": "Bretas"
  },
  {
    "storeName": "BRETAS ANA LUCIA",
    "storeKey": "bretas ana lucia",
    "separator": "Matheus",
    "separatorRaw": "2 - SEPARADOR MATHEUS",
    "rede": "13-BRETAS",
    "network": "Bretas"
  },
  {
    "storeName": "BRETAS ANHANGUERA",
    "storeKey": "bretas anhanguera",
    "separator": "Matheus",
    "separatorRaw": "2 - SEPARADOR MATHEUS",
    "rede": "13-BRETAS",
    "network": "Bretas"
  },
  {
    "storeName": "BRETAS ARMAZEM",
    "storeKey": "bretas armazem",
    "separator": "Matheus",
    "separatorRaw": "2 - SEPARADOR MATHEUS",
    "rede": "13-BRETAS",
    "network": "Bretas"
  },
  {
    "storeName": "BRETAS BAIRRO GOIÁ",
    "storeKey": "bretas bairro goia",
    "separator": "Matheus",
    "separatorRaw": "2 - SEPARADOR MATHEUS",
    "rede": "13-BRETAS",
    "network": "Bretas"
  },
  {
    "storeName": "BRETAS CAMPINAS SAO JOSE",
    "storeKey": "bretas campinas sao jose",
    "separator": "Matheus",
    "separatorRaw": "2 - SEPARADOR MATHEUS",
    "rede": "13-BRETAS",
    "network": "Bretas"
  },
  {
    "storeName": "BRETAS CARDOSO",
    "storeKey": "bretas cardoso",
    "separator": "Matheus",
    "separatorRaw": "2 - SEPARADOR MATHEUS",
    "rede": "13-BRETAS",
    "network": "Bretas"
  },
  {
    "storeName": "BRETAS GARAVELO",
    "storeKey": "bretas garavelo",
    "separator": "Matheus",
    "separatorRaw": "2 - SEPARADOR MATHEUS",
    "rede": "13-BRETAS",
    "network": "Bretas"
  },
  {
    "storeName": "BRETAS GOIANIA SHOPPING",
    "storeKey": "bretas goiania shopping",
    "separator": "Matheus",
    "separatorRaw": "2 - SEPARADOR MATHEUS",
    "rede": "13-BRETAS",
    "network": "Bretas"
  },
  {
    "storeName": "COSTA GO-070",
    "storeKey": "costa go 070",
    "separator": "Matheus",
    "separatorRaw": "2 - SEPARADOR MATHEUS",
    "rede": "15-COSTA ATACADÃO",
    "network": "Costa Atacadão"
  },
  {
    "storeName": "COSTA GOIANIA",
    "storeKey": "costa goiania",
    "separator": "Matheus",
    "separatorRaw": "2 - SEPARADOR MATHEUS",
    "rede": "15-COSTA ATACADÃO",
    "network": "Costa Atacadão"
  },
  {
    "storeName": "COSTA JARDIM GOIÁS",
    "storeKey": "costa jardim goias",
    "separator": "Matheus",
    "separatorRaw": "2 - SEPARADOR MATHEUS",
    "rede": "15-COSTA ATACADÃO",
    "network": "Costa Atacadão"
  },
  {
    "storeName": "COSTA SENADOR CANEDO",
    "storeKey": "costa senador canedo",
    "separator": "Matheus",
    "separatorRaw": "2 - SEPARADOR MATHEUS",
    "rede": "15-COSTA ATACADÃO",
    "network": "Costa Atacadão"
  },
  {
    "storeName": "DIA A DIA APARECIDA DE GOIANIA",
    "storeKey": "dia a dia aparecida de goiania",
    "separator": "Matheus",
    "separatorRaw": "2 - SEPARADOR MATHEUS",
    "rede": "2-DIA A DIA",
    "network": "Dia a Dia"
  },
  {
    "storeName": "DIA A DIA HORACIO COSTA",
    "storeKey": "dia a dia horacio costa",
    "separator": "Matheus",
    "separatorRaw": "2 - SEPARADOR MATHEUS",
    "rede": "2-DIA A DIA",
    "network": "Dia a Dia"
  },
  {
    "storeName": "DIA DIA GOIANESIA",
    "storeKey": "dia a dia goianesia",
    "separator": "Matheus",
    "separatorRaw": "2 - SEPARADOR MATHEUS",
    "rede": "2-DIA A DIA",
    "network": "Dia a Dia"
  },
  {
    "storeName": "ATACADAO DIA A DIA RECANTO DAS EMAS",
    "storeKey": "dia a dia recanto das emas",
    "separator": "Ramon",
    "separatorRaw": "4 - SEPARADOR RAMON",
    "rede": "2-DIA A DIA",
    "network": "Dia a Dia"
  },
  {
    "storeName": "CERRAMIX SUPERMERCADOS",
    "storeKey": "cerramix supermercados",
    "separator": "Ramon",
    "separatorRaw": "4 - SEPARADOR RAMON",
    "rede": "22-CONSIGNADOS VARIADOS",
    "network": "Consignados Variados"
  },
  {
    "storeName": "COSTA SANTA MARIA",
    "storeKey": "costa santa maria",
    "separator": "Ramon",
    "separatorRaw": "4 - SEPARADOR RAMON",
    "rede": "15-COSTA ATACADÃO",
    "network": "Costa Atacadão"
  },
  {
    "storeName": "DIA A DIA FURNAS",
    "storeKey": "dia a dia furnas",
    "separator": "Ramon",
    "separatorRaw": "4 - SEPARADOR RAMON",
    "rede": "2-DIA A DIA",
    "network": "Dia a Dia"
  },
  {
    "storeName": "DIA A DIA GAMA",
    "storeKey": "dia a dia gama",
    "separator": "Ramon",
    "separatorRaw": "4 - SEPARADOR RAMON",
    "rede": "2-DIA A DIA",
    "network": "Dia a Dia"
  },
  {
    "storeName": "DIA A DIA LEM-BA",
    "storeKey": "dia a dia lem ba",
    "separator": "Ramon",
    "separatorRaw": "4 - SEPARADOR RAMON",
    "rede": "2-DIA A DIA",
    "network": "Dia a Dia"
  },
  {
    "storeName": "DIA A DIA LUZIANIA",
    "storeKey": "dia a dia luziania",
    "separator": "Ramon",
    "separatorRaw": "4 - SEPARADOR RAMON",
    "rede": "2-DIA A DIA",
    "network": "Dia a Dia"
  },
  {
    "storeName": "DIA A DIA NOVO GAMA",
    "storeKey": "dia a dia novo gama",
    "separator": "Ramon",
    "separatorRaw": "4 - SEPARADOR RAMON",
    "rede": "2-DIA A DIA",
    "network": "Dia a Dia"
  },
  {
    "storeName": "DIA A DIA PARK JK LUZIÂNIA",
    "storeKey": "dia a dia park jk luziania",
    "separator": "Ramon",
    "separatorRaw": "4 - SEPARADOR RAMON",
    "rede": "2-DIA A DIA",
    "network": "Dia a Dia"
  },
  {
    "storeName": "ECONOMART BARREIRAS",
    "storeKey": "economart barreiras",
    "separator": "Ramon",
    "separatorRaw": "4 - SEPARADOR RAMON",
    "rede": "22-CONSIGNADOS VARIADOS",
    "network": "Consignados Variados"
  },
  {
    "storeName": "ECONOMART LEM",
    "storeKey": "economart lem",
    "separator": "Ramon",
    "separatorRaw": "4 - SEPARADOR RAMON",
    "rede": "22-CONSIGNADOS VARIADOS",
    "network": "Consignados Variados"
  },
  {
    "storeName": "FORT RECANTO",
    "storeKey": "fort recanto",
    "separator": "Ramon",
    "separatorRaw": "4 - SEPARADOR RAMON",
    "rede": "3-COMPER/FORT",
    "network": "Comper/Fort"
  },
  {
    "storeName": "VIVENDAS LOJA 102",
    "storeKey": "vivendas loja 102",
    "separator": "Ramon",
    "separatorRaw": "4 - SEPARADOR RAMON",
    "rede": "5-VIVENDAS",
    "network": "Vivendas"
  },
  {
    "storeName": "VIVENDAS LOJA 112",
    "storeKey": "vivendas loja 112",
    "separator": "Ramon",
    "separatorRaw": "4 - SEPARADOR RAMON",
    "rede": "5-VIVENDAS",
    "network": "Vivendas"
  },
  {
    "storeName": "VIVENDAS NOVO GAMA LUNA",
    "storeKey": "vivendas novo gama luna",
    "separator": "Ramon",
    "separatorRaw": "4 - SEPARADOR RAMON",
    "rede": "5-VIVENDAS",
    "network": "Vivendas"
  },
  {
    "storeName": "VIVENDAS RECANTO NSF MATRIZ LOJA 29",
    "storeKey": "vivendas recanto nsf matriz loja 29",
    "separator": "Ramon",
    "separatorRaw": "4 - SEPARADOR RAMON",
    "rede": "5-VIVENDAS",
    "network": "Vivendas"
  },
  {
    "storeName": "VIVENDAS VS",
    "storeKey": "vivendas vs",
    "separator": "Ramon",
    "separatorRaw": "4 - SEPARADOR RAMON",
    "rede": "5-VIVENDAS",
    "network": "Vivendas"
  }
];


const ROLE_LABELS = {
  admin: 'Administrador',
  cd: 'CD',
  driver: 'Motorista',
  promoter: 'Promotor',
  viewer: 'Visualizador',
};


const ROUTE_DATASET_VERSION = 'rotas_motoristas_2026_05_14_v26_goiania_fretes';

const ROUTE_DATASET = {
  "users": [
    {
      "id": "user_admin",
      "name": "Richard Martins",
      "username": "richard martins",
      "password": "sofolhas2026",
      "role": "admin",
      "forcePasswordChange": false
    },
    {
      "id": "user_admin_matheus_reis",
      "name": "Matheus Reis",
      "username": "matheusreis",
      "password": "123456",
      "role": "admin",
      "forcePasswordChange": true
    },
    {
      "id": "user_admin_roberto_cesar",
      "name": "Roberto Cesar",
      "username": "robertocesar",
      "password": "123456",
      "role": "admin",
      "forcePasswordChange": true
    },
    {
      "id": "user_cd1",
      "name": "Carlos CD",
      "username": "cd1",
      "password": "123456",
      "role": "cd",
      "allowedBoxTypes": ["folhagens", "bandejas"]
    },
    {
      "id": "user_view",
      "name": "Gestão Comercial",
      "username": "gestao",
      "password": "123456",
      "role": "viewer"
    },
    {
      "id": "user_motor_caio",
      "name": "Caio",
      "username": "motorcaio",
      "password": "123456",
      "role": "driver",
      "isReliefDriver": true,
      "forcePasswordChange": true
    },
    {
      "id": "user_motor_vinicius",
      "name": "Vinicius",
      "username": "motorvinicius",
      "password": "123456",
      "role": "driver",
      "routeId": "rota_goiania_vinicius"
    },
    {
      "id": "user_motor_sebastiao",
      "name": "Sebastião",
      "username": "motorsebastiao",
      "password": "123456",
      "role": "driver",
      "routeId": "rota_goiania_vinicius",
      "sharedTruckId": "caminhao_goiania_vinicius_sebastiao",
      "forcePasswordChange": true
    },
    {
      "id": "user_motor_maycon",
      "name": "Maycon",
      "username": "motormaycon",
      "password": "123456",
      "role": "driver",
      "routeId": "rota_goiania_maycon"
    },
    {
      "id": "user_motor_alexsandro",
      "name": "Alexsandro",
      "username": "motoralexsandro",
      "password": "123456",
      "role": "driver",
      "routeId": "rota_goiania_alexsandro"
    },
    {
      "id": "user_motor_edmar",
      "name": "Edmar",
      "username": "motoredmar",
      "password": "123456",
      "role": "driver",
      "routeId": "rota_goiania_edmar",
      "forcePasswordChange": true
    },
    {
      "id": "user_motor_sem_motorista_fixo",
      "name": "Sem Motorista Fixo",
      "username": "motorsemmotoristafixo",
      "password": "123456",
      "role": "driver",
      "routeId": "rota_sem_motorista_fixo"
    },
    {
      "id": "user_motor_gabriel",
      "name": "Gabriel",
      "username": "motorgabriel",
      "password": "123456",
      "role": "driver",
      "routeId": "rota_gabriel"
    },
    {
      "id": "user_motor_junior",
      "name": "Junior",
      "username": "motorjunior",
      "password": "123456",
      "role": "driver",
      "routeId": "rota_gurupi_junior"
    },
    {
      "id": "user_motor_iran",
      "name": "Iran",
      "username": "motoriran",
      "password": "123456",
      "role": "driver",
      "routeId": "rota_lem_iran"
    },
    {
      "id": "user_motor_lindomar",
      "name": "Lindomar",
      "username": "motorlindomar",
      "password": "123456",
      "role": "driver",
      "routeId": "rota_lindomar"
    },
    {
      "id": "user_motor_stanio",
      "name": "Stanio",
      "username": "motorstanio",
      "password": "123456",
      "role": "driver",
      "routeId": "rota_stanio"
    },
    {
      "id": "user_motor_wanderson",
      "name": "Wanderson",
      "username": "motorwanderson",
      "password": "123456",
      "role": "driver",
      "routeId": "rota_wanderson_aguas_lindas"
    },
    {
      "id": "user_motor_nilton",
      "name": "Nilton",
      "username": "motornilton",
      "password": "123456",
      "role": "driver",
      "routeId": "rota_nilton"
    },
    {
      "id": "user_motor_sem_motorista_definido",
      "name": "Sem Motorista Definido",
      "username": "motorsemmotoristadefinido",
      "password": "123456",
      "role": "driver",
      "routeId": "rota_domingo_luziania"
    },
    {
      "id": "user_prom_alvorada",
      "name": "Promotor - ALVORADA",
      "username": "promalvorada",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_alvorada"
    },
    {
      "id": "user_prom_assai_asa_norte",
      "name": "Promotor - ASSAÍ ASA NORTE",
      "username": "promassaiasanorte",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_assai_asa_norte"
    },
    {
      "id": "user_prom_dia_a_dia_itumbiara",
      "name": "Promotor - ATACADÃO DIA A DIA - ITUMBIARA",
      "username": "promatacadaodiaadiaitumbiara",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_dia_a_dia_itumbiara"
    },
    {
      "id": "user_prom_dia_a_dia_recanto",
      "name": "Promotor - ATACADAO DIA A DIA RECANTO DAS EMAS",
      "username": "promatacadaodiaadiarecantodasemas",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_dia_a_dia_recanto"
    },
    {
      "id": "user_prom_dia_a_dia_samambaia",
      "name": "Promotor - ATACADAO DIA A DIA SAMAMBAIA",
      "username": "promatacadaodiaadiasamambaia",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_dia_a_dia_samambaia"
    },
    {
      "id": "user_prom_bretas_aguas_lindas",
      "name": "Promotor - BRETAS ÁGUAS LINDAS",
      "username": "prombretasaguaslindas",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_bretas_aguas_lindas"
    },
    {
      "id": "user_prom_bretas_alphaville",
      "name": "Promotor - BRETAS ALPHAVILLE",
      "username": "prombretasalphaville",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_bretas_alphaville"
    },
    {
      "id": "user_prom_bretas_ana_lucia",
      "name": "Promotor - BRETAS ANA LUCIA",
      "username": "prombretasanalucia",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_bretas_ana_lucia"
    },
    {
      "id": "user_prom_bretas_anhanguera",
      "name": "Promotor - BRETAS ANHANGUERA",
      "username": "prombretasanhanguera",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_bretas_anhanguera"
    },
    {
      "id": "user_prom_bretas_armazen",
      "name": "Promotor - BRETAS ARMAZEM",
      "username": "prombretasarmazem",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_bretas_armazen"
    },
    {
      "id": "user_prom_bretas_bairro_goia",
      "name": "Promotor - BRETAS BAIRRO GOIÁ",
      "username": "prombretasbairrogoia",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_bretas_bairro_goia"
    },
    {
      "id": "user_prom_bretas_campinas",
      "name": "Promotor - BRETAS CAMPINAS SAO JOSE",
      "username": "prombretascampinassaojose",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_bretas_campinas"
    },
    {
      "id": "user_prom_bretas_cardoso",
      "name": "Promotor - BRETAS CARDOSO",
      "username": "prombretascardoso",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_bretas_cardoso"
    },
    {
      "id": "user_prom_bretas_formosa",
      "name": "Promotor - BRETAS FORMOSA",
      "username": "prombretasformosa",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_bretas_formosa"
    },
    {
      "id": "user_prom_bretas_garavelo",
      "name": "Promotor - BRETAS GARAVELO",
      "username": "prombretasgaravelo",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_bretas_garavelo"
    },
    {
      "id": "user_prom_bretas_goiania_shopp",
      "name": "Promotor - BRETAS GOIANIA SHOPPING",
      "username": "prombretasgoianiashopping",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_bretas_goiania_shopp"
    },
    {
      "id": "user_prom_bretas_itumbiara",
      "name": "Promotor - BRETAS ITUMBIARA",
      "username": "prombretasitumbiara",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_bretas_itumbiara"
    },
    {
      "id": "user_prom_bretas_laranjeiras",
      "name": "Promotor - BRETAS LARANJEIRAS",
      "username": "prombretaslaranjeiras",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_bretas_laranjeiras"
    },
    {
      "id": "user_prom_bretas_monte_cristo",
      "name": "Promotor - BRETAS MONTE CRISTO",
      "username": "prombretasmontecristo",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_bretas_monte_cristo"
    },
    {
      "id": "user_prom_bretas_morada_do_sol",
      "name": "Promotor - BRETAS MORADA DO SOL",
      "username": "prombretasmoradadosol",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_bretas_morada_do_sol"
    },
    {
      "id": "user_prom_bretas_senador_canedo",
      "name": "Promotor - BRETAS SENADOR CANEDO",
      "username": "prombretassenadorcanedo",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_bretas_senador_canedo"
    },
    {
      "id": "user_prom_bretas_sol_nascente",
      "name": "Promotor - BRETAS SOL NASCENTE",
      "username": "prombretassolnascente",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_bretas_sol_nascente"
    },
    {
      "id": "user_prom_bretas_veiga_jardim",
      "name": "Promotor - BRETAS VEIGA JARDIM",
      "username": "prombretasveigajardim",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_bretas_veiga_jardim"
    },
    {
      "id": "user_prom_bretas_vila_jaragua",
      "name": "Promotor - BRETAS VILA JARAGUA",
      "username": "prombretasvilajaragua",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_bretas_vila_jaragua"
    },
    {
      "id": "user_prom_bretas_vila_pedroso",
      "name": "Promotor - BRETAS VILA PEDROSO",
      "username": "prombretasvilapedroso",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_bretas_vila_pedroso"
    },
    {
      "id": "user_prom_casarocca_trm_matriz",
      "name": "Promotor - CASA ROCCA ASA SUL - MATRIZ",
      "username": "promcasaroccaasasulmatriz",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_casarocca_trm_matriz"
    },
    {
      "id": "user_prom_casa_rocca_mt_lago_norte_filial",
      "name": "Promotor - CASA ROCCA LAGO NORTE - FILIAL",
      "username": "promcasaroccalagonortefilial",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_casa_rocca_mt_lago_norte_filial"
    },
    {
      "id": "user_prom_cerra_mix",
      "name": "Promotor - CERRAMIX SUPERMERCADOS",
      "username": "promcerramixsupermercados",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_cerra_mix"
    },
    {
      "id": "user_prom_comper_aguas_claras",
      "name": "Promotor - COMPER AGUAS CLARAS",
      "username": "promcomperaguasclaras",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_comper_aguas_claras"
    },
    {
      "id": "user_prom_comper_asa_sul",
      "name": "Promotor - COMPER ASA SUL",
      "username": "promcomperasasul",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_comper_asa_sul"
    },
    {
      "id": "user_prom_comper_gama",
      "name": "Promotor - COMPER GAMA",
      "username": "promcompergama",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_comper_gama"
    },
    {
      "id": "user_prom_comper_sobradinho",
      "name": "Promotor - COMPER SOBRADINHO",
      "username": "promcompersobradinho",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_comper_sobradinho"
    },
    {
      "id": "user_prom_costa_ade",
      "name": "Promotor - COSTA ADE",
      "username": "promcostaade",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_costa_ade"
    },
    {
      "id": "user_prom_costa_avenida_goias",
      "name": "Promotor - COSTA AVENIDA GOIÁS",
      "username": "promcostaavenidagoias",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_costa_avenida_goias"
    },
    {
      "id": "user_prom_costa_070",
      "name": "Promotor - COSTA GO-070",
      "username": "promcostago070",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_costa_070"
    },
    {
      "id": "user_prom_costa_goiania",
      "name": "Promotor - COSTA GOIANIA",
      "username": "promcostagoiania",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_costa_goiania"
    },
    {
      "id": "user_prom_costa_avenida_jardim",
      "name": "Promotor - COSTA JARDIM GOIÁS",
      "username": "promcostajardimgoias",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_costa_avenida_jardim"
    },
    {
      "id": "user_prom_costa_laranjeiras",
      "name": "Promotor - COSTA LARANJEIRAS",
      "username": "promcostalaranjeiras",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_costa_laranjeiras"
    },
    {
      "id": "user_prom_costa_luziania",
      "name": "Promotor - COSTA LUZIANIA",
      "username": "promcostaluziania",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_costa_luziania"
    },
    {
      "id": "user_prom_costa_rio_verde",
      "name": "Promotor - COSTA RIO VERDE",
      "username": "promcostarioverde",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_costa_rio_verde"
    },
    {
      "id": "user_prom_costa_santa_maria",
      "name": "Promotor - COSTA SANTA MARIA",
      "username": "promcostasantamaria",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_costa_santa_maria"
    },
    {
      "id": "user_prom_costa_senador_canedo",
      "name": "Promotor - COSTA SENADOR CANEDO",
      "username": "promcostasenadorcanedo",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_costa_senador_canedo"
    },
    {
      "id": "user_prom_costa_t_63",
      "name": "Promotor - COSTA T-63",
      "username": "promcostat63",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_costa_t_63"
    },
    {
      "id": "user_prom_costa_taguatinga",
      "name": "Promotor - COSTA TAGUATINGA",
      "username": "promcostataguatinga",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_costa_taguatinga"
    },
    {
      "id": "user_prom_costa_taquari",
      "name": "Promotor - COSTA TAQUARI",
      "username": "promcostataquari",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_costa_taquari"
    },
    {
      "id": "user_prom_costa_unieuro",
      "name": "Promotor - COSTA UNIEURO",
      "username": "promcostaunieuro",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_costa_unieuro"
    },
    {
      "id": "user_prom_costa_valparaiso",
      "name": "Promotor - COSTA VALPARAISO",
      "username": "promcostavalparaiso",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_costa_valparaiso"
    },
    {
      "id": "user_prom_dia_a_dia_aguas_claras",
      "name": "Promotor - DD AGUAS CLARAS",
      "username": "promddaguasclaras",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_dia_a_dia_aguas_claras"
    },
    {
      "id": "user_prom_dia_a_dia_ceilandia_norte",
      "name": "Promotor - DD CEILÂNDIA NORTE",
      "username": "promddceilandianorte",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_dia_a_dia_ceilandia_norte"
    },
    {
      "id": "user_prom_dia_a_dia_planaltina_mestre_d_armas",
      "name": "Promotor - DIA A DIA PLANALTINA MESTRE D'ARMAS",
      "username": "promdiaadiaplanaltinamestredarmas",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_dia_a_dia_planaltina_mestre_d_armas"
    },
    {
      "id": "user_prom_dia_a_dia_070",
      "name": "Promotor - DIA A DIA 070",
      "username": "promdiaadia070",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_dia_a_dia_070"
    },
    {
      "id": "user_prom_dia_a_dia_aguas_lindas",
      "name": "Promotor - DIA A DIA AGUAS LINDAS",
      "username": "promdiaadiaaguaslindas",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_dia_a_dia_aguas_lindas"
    },
    {
      "id": "user_prom_dia_a_dia_aparecida_goiania",
      "name": "Promotor - DIA A DIA APARECIDA DE GOIANIA",
      "username": "promdiaadiaaparecidadegoiania",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_dia_a_dia_aparecida_goiania"
    },
    {
      "id": "user_prom_dia_a_dia_ceilandia_centro",
      "name": "Promotor - DIA A DIA CEILANDIA CENTRO",
      "username": "promdiaadiaceilandiacentro",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_dia_a_dia_ceilandia_centro"
    },
    {
      "id": "user_prom_dia_a_dia_cesar_lates",
      "name": "Promotor - DIA A DIA CESAR LATES",
      "username": "promdiaadiacesarlates",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_dia_a_dia_cesar_lates"
    },
    {
      "id": "user_prom_dia_a_dia_eptg",
      "name": "Promotor - DIA A DIA EPTG",
      "username": "promdiaadiaeptg",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_dia_a_dia_eptg"
    },
    {
      "id": "user_prom_dia_a_dia_formosa",
      "name": "Promotor - DIA A DIA FORMOSA",
      "username": "promdiaadiaformosa",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_dia_a_dia_formosa"
    },
    {
      "id": "user_prom_dia_a_dia_furnas",
      "name": "Promotor - DIA A DIA FURNAS",
      "username": "promdiaadiafurnas",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_dia_a_dia_furnas"
    },
    {
      "id": "user_prom_dia_a_dia_gama",
      "name": "Promotor - DIA A DIA GAMA",
      "username": "promdiaadiagama",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_dia_a_dia_gama"
    },
    {
      "id": "user_prom_dia_a_dia_guara",
      "name": "Promotor - DIA A DIA GUARA",
      "username": "promdiaadiaguara",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_dia_a_dia_guara"
    },
    {
      "id": "user_prom_dia_a_dia_gurupi",
      "name": "Promotor - DIA A DIA GURUPI",
      "username": "promdiaadiagurupi",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_dia_a_dia_gurupi"
    },
    {
      "id": "user_prom_dia_a_dia_horacio_costa",
      "name": "Promotor - DIA A DIA HORACIO COSTA",
      "username": "promdiaadiahoraciocosta",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_dia_a_dia_horacio_costa"
    },
    {
      "id": "user_prom_dia_a_dia_jardim_botanico",
      "name": "Promotor - DIA A DIA JARDIM BOTANICO",
      "username": "promdiaadiajardimbotanico",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_dia_a_dia_jardim_botanico"
    },
    {
      "id": "user_prom_dia_a_dia_lem",
      "name": "Promotor - DIA A DIA LEM-BA",
      "username": "promdiaadialemba",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_dia_a_dia_lem"
    },
    {
      "id": "user_prom_dia_a_dia_luziania",
      "name": "Promotor - DIA A DIA LUZIANIA",
      "username": "promdiaadialuziania",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_dia_a_dia_luziania"
    },
    {
      "id": "user_prom_dia_a_dia_novo_gama",
      "name": "Promotor - DIA A DIA NOVO GAMA",
      "username": "promdiaadianovogama",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_dia_a_dia_novo_gama"
    },
    {
      "id": "user_prom_dia_a_dia_ceilandia_sul_p_sul",
      "name": "Promotor - DIA A DIA P SUL",
      "username": "promdiaadiapsul",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_dia_a_dia_ceilandia_sul_p_sul"
    },
    {
      "id": "user_prom_dia_a_dia_park_jk_luziania",
      "name": "Promotor - DIA A DIA PARK JK LUZIÂNIA",
      "username": "promdiaadiaparkjkluziania",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_dia_a_dia_park_jk_luziania"
    },
    {
      "id": "user_prom_dia_a_dia_planaltina_df",
      "name": "Promotor - DIA A DIA PLANALTINA DF",
      "username": "promdiaadiaplanaltinadf",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_dia_a_dia_planaltina_df"
    },
    {
      "id": "user_prom_dia_a_dia_planaltina_go",
      "name": "Promotor - DIA A DIA PLANALTINA GO",
      "username": "promdiaadiaplanaltinago",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_dia_a_dia_planaltina_go"
    },
    {
      "id": "user_prom_dia_a_dia_rio_verde",
      "name": "Promotor - DIA A DIA RIO VERDE",
      "username": "promdiaadiarioverde",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_dia_a_dia_rio_verde"
    },
    {
      "id": "user_prom_dia_a_dia_santo_antonio",
      "name": "Promotor - DIA A DIA SANTO ANTONIO",
      "username": "promdiaadiasantoantonio",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_dia_a_dia_santo_antonio"
    },
    {
      "id": "user_prom_dia_a_dia_sia",
      "name": "Promotor - DIA A DIA SIA",
      "username": "promdiaadiasia",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_dia_a_dia_sia"
    },
    {
      "id": "user_prom_dia_a_dia_sobradinho",
      "name": "Promotor - DIA A DIA SOBRADINHO",
      "username": "promdiaadiasobradinho",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_dia_a_dia_sobradinho"
    },
    {
      "id": "user_prom_dia_a_dia_taguatinga_sul",
      "name": "Promotor - DIA A DIA TAGUATINGA SUL",
      "username": "promdiaadiataguatingasul",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_dia_a_dia_taguatinga_sul"
    },
    {
      "id": "user_prom_dia_a_dia_vicente_pires_rua_04",
      "name": "Promotor - DIA A DIA VICENTE PIRES RUA 04",
      "username": "promdiaadiavicentepiresrua04",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_dia_a_dia_vicente_pires_rua_04"
    },
    {
      "id": "user_prom_dia_a_dia_vicente_pires_rua_12",
      "name": "Promotor - DIA A DIA VICENTE PIRES RUA 12",
      "username": "promdiaadiavicentepiresrua12",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_dia_a_dia_vicente_pires_rua_12"
    },
    {
      "id": "user_prom_dia_a_dia_goianesia",
      "name": "Promotor - DIA DIA GOIANÉSIA",
      "username": "promdiadiagoianesia",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_dia_a_dia_goianesia"
    },
    {
      "id": "user_prom_dia_a_dia_riacho_fundo",
      "name": "Promotor - DIA DIA RIACHO FUNDO",
      "username": "promdiadiariachofundo",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_dia_a_dia_riacho_fundo"
    },
    {
      "id": "user_prom_economart_barreiras",
      "name": "Promotor - ECONOMART BARREIRAS",
      "username": "promeconomartbarreiras",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_economart_barreiras"
    },
    {
      "id": "user_prom_economart_lem",
      "name": "Promotor - ECONOMART LEM",
      "username": "promeconomartlem",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_economart_lem"
    },
    {
      "id": "user_prom_fort_ceilandia",
      "name": "Promotor - FORT CEILANDIA",
      "username": "promfortceilandia",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_fort_ceilandia"
    },
    {
      "id": "user_prom_fort_planaltina",
      "name": "Promotor - FORT PLANALTINA",
      "username": "promfortplanaltina",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_fort_planaltina"
    },
    {
      "id": "user_prom_fort_recanto",
      "name": "Promotor - FORT RECANTO",
      "username": "promfortrecanto",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_fort_recanto"
    },
    {
      "id": "user_prom_fort_sol_nascente",
      "name": "Promotor - FORT SOL NASCENTE",
      "username": "promfortsolnascente",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_fort_sol_nascente"
    },
    {
      "id": "user_prom_fort_taguatinga",
      "name": "Promotor - FORT TAGUATINGA",
      "username": "promforttaguatinga",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_fort_taguatinga"
    },
    {
      "id": "user_prom_fort_valparaiso",
      "name": "Promotor - FORT VALPARAISO",
      "username": "promfortvalparaiso",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_fort_valparaiso"
    },
    {
      "id": "user_prom_nossa_kaza_anhanguera",
      "name": "Promotor - NOSSA KAZA ANHANGUERA B",
      "username": "promnossakazaanhanguerab",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_nossa_kaza_anhanguera"
    },
    {
      "id": "user_prom_nossa_kaza_brazlandia",
      "name": "Promotor - NOSSA KAZA BRAZLÂNDIA",
      "username": "promnossakazabrazlandia",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_nossa_kaza_brazlandia"
    },
    {
      "id": "user_prom_nossa_kaza_jardim_ceu_azul",
      "name": "Promotor - NOSSA KAZA CÉU AZUL",
      "username": "promnossakazaceuazul",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_nossa_kaza_jardim_ceu_azul"
    },
    {
      "id": "user_prom_nossa_kasa_chacara_ypiranga",
      "name": "Promotor - NOSSA KAZA CHÁCARA YPIRANGA A",
      "username": "promnossakazachacaraypirangaa",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_nossa_kasa_chacara_ypiranga"
    },
    {
      "id": "user_prom_nossa_kasa_parque_esplanada_3",
      "name": "Promotor - NOSSA KAZA ESPLANADA 3",
      "username": "promnossakazaesplanada3",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_nossa_kasa_parque_esplanada_3"
    },
    {
      "id": "user_prom_nossa_kasa_fumal",
      "name": "Promotor - NOSSA KAZA FUMAL",
      "username": "promnossakazafumal",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_nossa_kasa_fumal"
    },
    {
      "id": "user_prom_nossa_kasa_fumal_1",
      "name": "Promotor - NOSSA KAZA FUMAL 01",
      "username": "promnossakazafumal01",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_nossa_kasa_fumal_1"
    },
    {
      "id": "user_prom_nossa_kasa_maravilha",
      "name": "Promotor - NOSSA KAZA MARAVILHA",
      "username": "promnossakazamaravilha",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_nossa_kasa_maravilha"
    },
    {
      "id": "user_prom_nossa_kasa_park_jk",
      "name": "Promotor - NOSSA KAZA PARK JK",
      "username": "promnossakazaparkjk",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_nossa_kasa_park_jk"
    },
    {
      "id": "user_prom_nossa_kasa_alvorada_1",
      "name": "Promotor - NOSSA KAZA PARQUE ALVORADA 1",
      "username": "promnossakazaparquealvorada1",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_nossa_kasa_alvorada_1"
    },
    {
      "id": "user_prom_nossa_kasa_parque_araguari",
      "name": "Promotor - NOSSA KAZA PARQUE ARAGUARI",
      "username": "promnossakazaparquearaguari",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_nossa_kasa_parque_araguari"
    },
    {
      "id": "user_prom_nossa_kaza_pedregal",
      "name": "Promotor - NOSSA KAZA PEDREGAL",
      "username": "promnossakazapedregal",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_nossa_kaza_pedregal"
    },
    {
      "id": "user_prom_nossa_kaza_ponte_alta",
      "name": "Promotor - NOSSA KAZA PONTE ALTA",
      "username": "promnossakazapontealta",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_nossa_kaza_ponte_alta"
    },
    {
      "id": "user_prom_nossa_kasa_mansoes_santa_maria",
      "name": "Promotor - NOSSA KAZA SANTA MARIA",
      "username": "promnossakazasantamaria",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_nossa_kasa_mansoes_santa_maria"
    },
    {
      "id": "user_prom_nossa_kaza_taguatinga_norte",
      "name": "Promotor - NOSSA KAZA TAGUATINGA NORTE",
      "username": "promnossakazataguatinganorte",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_nossa_kaza_taguatinga_norte"
    },
    {
      "id": "user_prom_nossa_kaza_valparaiso",
      "name": "Promotor - NOSSA KAZA VALPARAISO",
      "username": "promnossakazavalparaiso",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_nossa_kaza_valparaiso"
    },
    {
      "id": "user_prom_nossa_kasa_veigas",
      "name": "Promotor - NOSSA KAZA VIEGAS",
      "username": "promnossakazaviegas",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_nossa_kasa_veigas"
    },
    {
      "id": "user_prom_super_jockey",
      "name": "Promotor - SUPER JOCKEY EMPORIO",
      "username": "promsuperjockeyemporio",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_super_jockey"
    },
    {
      "id": "user_prom_supervendas_recanto_2_rct",
      "name": "Promotor - SUPERVENDAS RECANTO 2 RCT",
      "username": "promsupervendasrecanto2rct",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_supervendas_recanto_2_rct"
    },
    {
      "id": "user_prom_vivendas_aguas_lindas",
      "name": "Promotor - VIVENDAS AGUAS LINDAS",
      "username": "promvivendasaguaslindas",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_vivendas_aguas_lindas"
    },
    {
      "id": "user_prom_vivendas_camping_club",
      "name": "Promotor - VIVENDAS CAMPING CLUB AGUAS LINDAS",
      "username": "promvivendascampingclubaguaslindas",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_vivendas_camping_club"
    },
    {
      "id": "user_prom_vivendas_tagn",
      "name": "Promotor - VIVENDAS COMERCIAL TAGN",
      "username": "promvivendascomercialtagn",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_vivendas_tagn"
    },
    {
      "id": "user_prom_vivendas_eqnl",
      "name": "Promotor - VIVENDAS EQNL",
      "username": "promvivendaseqnl",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_vivendas_eqnl"
    },
    {
      "id": "user_prom_vivendas_brtw_102",
      "name": "Promotor - VIVENDAS LOJA 102",
      "username": "promvivendasloja102",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_vivendas_brtw_102"
    },
    {
      "id": "user_prom_vivendas_atacado_sv_112",
      "name": "Promotor - VIVENDAS LOJA 112",
      "username": "promvivendasloja112",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_vivendas_atacado_sv_112"
    },
    {
      "id": "user_prom_vivendas_luna",
      "name": "Promotor - VIVENDAS NOVO GAMA LUNA",
      "username": "promvivendasnovogamaluna",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_vivendas_luna"
    },
    {
      "id": "user_prom_vivendas_nsf_matriz_29_abwa",
      "name": "Promotor - VIVENDAS RECANTO NSF MATRIZ LOJA 29",
      "username": "promvivendasrecantonsfmatrizloja29",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_vivendas_nsf_matriz_29_abwa"
    },
    {
      "id": "user_prom_vivendas_setor_o",
      "name": "Promotor - VIVENDAS SETOR O",
      "username": "promvivendassetoro",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_vivendas_setor_o"
    },
    {
      "id": "user_prom_vivendas_eqnp",
      "name": "Promotor - VIVENDAS SOL NASCENTE EQNP",
      "username": "promvivendassolnascenteeqnp",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_vivendas_eqnp"
    },
    {
      "id": "user_prom_vivendas_vs",
      "name": "Promotor - VIVENDAS VS",
      "username": "promvivendasvs",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_vivendas_vs"
    },
    {
      "id": "user_prom_ch_agua_limpa",
      "name": "Promotor - CH. AGUA LIMPA",
      "username": "promchagualimpa",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_ch_agua_limpa"
    },
    {
      "id": "user_prom_manifesto",
      "name": "Promotor - MANIFESTO",
      "username": "prommanifesto",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_manifesto"
    },
    {
      "id": "user_prom_nossa_kasa_centro",
      "name": "Promotor - NOSSA KASA CENTRO",
      "username": "promnossakasacentro",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_nossa_kasa_centro"
    },
    {
      "id": "user_prom_tatico_aguas_lindas",
      "name": "Promotor - TATICO AGUAS LINDAS",
      "username": "promtaticoaguaslindas",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_tatico_aguas_lindas"
    },
    {
      "id": "user_prom_tatico_aguas_lindas_atacado",
      "name": "Promotor - TATICO AGUAS LINDAS ATACADO",
      "username": "promtaticoaguaslindasatacado",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_tatico_aguas_lindas_atacado"
    },
    {
      "id": "user_prom_tatico_eptg",
      "name": "Promotor - TATICO EPTG",
      "username": "promtaticoeptg",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_tatico_eptg"
    },
    {
      "id": "user_prom_tatico_luziania",
      "name": "Promotor - TATICO LUZIANIA",
      "username": "promtaticoluziania",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_tatico_luziania"
    },
    {
      "id": "user_prom_tatico_p_sul",
      "name": "Promotor - TATICO P. SUL",
      "username": "promtaticopsul",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_tatico_p_sul"
    },
    {
      "id": "user_prom_tatico_recanto",
      "name": "Promotor - TATICO RECANTO",
      "username": "promtaticorecanto",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_tatico_recanto"
    },
    {
      "id": "user_prom_tatico_samambaia_norte",
      "name": "Promotor - TATICO SAMAMBAIA NORTE",
      "username": "promtaticosamambaianorte",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_tatico_samambaia_norte"
    },
    {
      "id": "user_prom_tatico_samambaia_sul",
      "name": "Promotor - TATICO SAMAMBAIA SUL",
      "username": "promtaticosamambaiasul",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_tatico_samambaia_sul"
    },
    {
      "id": "user_prom_tatico_santa_maria",
      "name": "Promotor - TATICO SANTA MARIA",
      "username": "promtaticosantamaria",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_tatico_santa_maria"
    },
    {
      "id": "user_prom_tatico_vicente_pires",
      "name": "Promotor - TATICO VICENTE PIRES",
      "username": "promtaticovicentepires",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_tatico_vicente_pires"
    },
    {
      "id": "user_prom_vivendas_abwa",
      "name": "Promotor - VIVENDAS ABWA",
      "username": "promvivendasabwa",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_vivendas_abwa"
    },
    {
      "id": "user_prom_vivendas_qnl",
      "name": "Promotor - VIVENDAS QNL",
      "username": "promvivendasqnl",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_vivendas_qnl"
    },
    {
      "id": "user_prom_vivendas_rct",
      "name": "Promotor - VIVENDAS RCT",
      "username": "promvivendasrct",
      "password": "123456",
      "role": "promoter",
      "storeId": "loja_vivendas_rct"
    }
  ],
  "stores": [
    {
      "id": "loja_alvorada",
      "name": "ALVORADA",
      "network": "MERCADOS ALEATÓRIOS",
      "rede": "11-MERCADOS ALEATÓRIOS",
      "defaultRouteId": "rota_gurupi_junior",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_gurupi_junior"
      ],
      "promoterId": "user_prom_alvorada",
      "highStockLimit": 100
    },
    {
      "id": "loja_assai_asa_norte",
      "name": "ASSAÍ ASA NORTE",
      "network": "ASSAÍ ATACADISTA",
      "rede": "19-ASSAÍ ATACADISTA",
      "defaultRouteId": "rota_nilton",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_nilton"
      ],
      "promoterId": "user_prom_assai_asa_norte",
      "highStockLimit": 100
    },
    {
      "id": "loja_dia_a_dia_itumbiara",
      "name": "ATACADÃO DIA A DIA - ITUMBIARA",
      "network": "DIA A DIA",
      "rede": "2-DIA A DIA",
      "defaultRouteId": "rota_goiania_edmar",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_goiania_edmar"
      ],
      "promoterId": "user_prom_dia_a_dia_itumbiara",
      "highStockLimit": 100
    },
    {
      "id": "loja_dia_a_dia_recanto",
      "name": "ATACADAO DIA A DIA RECANTO DAS EMAS",
      "network": "DIA A DIA",
      "rede": "2-DIA A DIA",
      "defaultRouteId": "rota_stanio",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [
        "rota_stanio",
        "rota_wanderson_aguas_lindas"
      ],
      "promoterId": "user_prom_dia_a_dia_recanto",
      "highStockLimit": 100
    },
    {
      "id": "loja_dia_a_dia_samambaia",
      "name": "ATACADAO DIA A DIA SAMAMBAIA",
      "network": "DIA A DIA",
      "rede": "2-DIA A DIA",
      "defaultRouteId": "rota_stanio",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [
        "rota_stanio",
        "rota_wanderson_aguas_lindas"
      ],
      "promoterId": "user_prom_dia_a_dia_samambaia",
      "highStockLimit": 100
    },
    {
      "id": "loja_bretas_aguas_lindas",
      "name": "BRETAS ÁGUAS LINDAS",
      "network": "BRETAS",
      "rede": "13-BRETAS",
      "defaultRouteId": "rota_lindomar",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [
        "rota_lindomar",
        "rota_wanderson_aguas_lindas"
      ],
      "promoterId": "user_prom_bretas_aguas_lindas",
      "highStockLimit": 100
    },
    {
      "id": "loja_bretas_alphaville",
      "name": "BRETAS ALPHAVILLE",
      "network": "BRETAS",
      "rede": "13-BRETAS",
      "defaultRouteId": "rota_goiania_vinicius",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_goiania_vinicius"
      ],
      "promoterId": "user_prom_bretas_alphaville",
      "highStockLimit": 100
    },
    {
      "id": "loja_bretas_ana_lucia",
      "name": "BRETAS ANA LUCIA",
      "network": "BRETAS",
      "rede": "13-BRETAS",
      "defaultRouteId": "rota_goiania_maycon",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_goiania_maycon"
      ],
      "promoterId": "user_prom_bretas_ana_lucia",
      "highStockLimit": 100
    },
    {
      "id": "loja_bretas_anhanguera",
      "name": "BRETAS ANHANGUERA",
      "network": "BRETAS",
      "rede": "13-BRETAS",
      "defaultRouteId": "rota_goiania_alexsandro",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_goiania_alexsandro"
      ],
      "promoterId": "user_prom_bretas_anhanguera",
      "highStockLimit": 100
    },
    {
      "id": "loja_bretas_armazen",
      "name": "BRETAS ARMAZEM",
      "network": "BRETAS",
      "rede": "13-BRETAS",
      "defaultRouteId": "rota_goiania_maycon",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_goiania_maycon"
      ],
      "promoterId": "user_prom_bretas_armazen",
      "highStockLimit": 100
    },
    {
      "id": "loja_bretas_bairro_goia",
      "name": "BRETAS BAIRRO GOIÁ",
      "network": "BRETAS",
      "rede": "13-BRETAS",
      "defaultRouteId": "rota_goiania_maycon",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_goiania_maycon"
      ],
      "promoterId": "user_prom_bretas_bairro_goia",
      "highStockLimit": 100
    },
    {
      "id": "loja_bretas_campinas",
      "name": "BRETAS CAMPINAS SAO JOSE",
      "network": "BRETAS",
      "rede": "13-BRETAS",
      "defaultRouteId": "rota_goiania_alexsandro",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_goiania_alexsandro"
      ],
      "promoterId": "user_prom_bretas_campinas",
      "highStockLimit": 100
    },
    {
      "id": "loja_bretas_cardoso",
      "name": "BRETAS CARDOSO",
      "network": "BRETAS",
      "rede": "13-BRETAS",
      "defaultRouteId": "rota_goiania_maycon",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_goiania_maycon"
      ],
      "promoterId": "user_prom_bretas_cardoso",
      "highStockLimit": 100
    },
    {
      "id": "loja_bretas_formosa",
      "name": "BRETAS FORMOSA",
      "network": "BRETAS",
      "rede": "13-BRETAS",
      "defaultRouteId": "rota_nilton",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_nilton"
      ],
      "promoterId": "user_prom_bretas_formosa",
      "highStockLimit": 100
    },
    {
      "id": "loja_bretas_garavelo",
      "name": "BRETAS GARAVELO",
      "network": "BRETAS",
      "rede": "13-BRETAS",
      "defaultRouteId": "rota_goiania_maycon",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_goiania_maycon"
      ],
      "promoterId": "user_prom_bretas_garavelo",
      "highStockLimit": 100
    },
    {
      "id": "loja_bretas_goiania_shopp",
      "name": "BRETAS GOIANIA SHOPPING",
      "network": "BRETAS",
      "rede": "13-BRETAS",
      "defaultRouteId": "rota_goiania_maycon",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_goiania_maycon"
      ],
      "promoterId": "user_prom_bretas_goiania_shopp",
      "highStockLimit": 100
    },
    {
      "id": "loja_bretas_itumbiara",
      "name": "BRETAS ITUMBIARA",
      "network": "BRETAS",
      "rede": "13-BRETAS",
      "defaultRouteId": "rota_goiania_edmar",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_goiania_edmar"
      ],
      "promoterId": "user_prom_bretas_itumbiara",
      "highStockLimit": 100
    },
    {
      "id": "loja_bretas_laranjeiras",
      "name": "BRETAS LARANJEIRAS",
      "network": "BRETAS",
      "rede": "13-BRETAS",
      "defaultRouteId": "rota_goiania_vinicius",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_goiania_vinicius"
      ],
      "promoterId": "user_prom_bretas_laranjeiras",
      "highStockLimit": 100
    },
    {
      "id": "loja_bretas_monte_cristo",
      "name": "BRETAS MONTE CRISTO",
      "network": "BRETAS",
      "rede": "13-BRETAS",
      "defaultRouteId": "rota_goiania_alexsandro",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_goiania_alexsandro"
      ],
      "promoterId": "user_prom_bretas_monte_cristo",
      "highStockLimit": 100
    },
    {
      "id": "loja_bretas_morada_do_sol",
      "name": "BRETAS MORADA DO SOL",
      "network": "BRETAS",
      "rede": "13-BRETAS",
      "defaultRouteId": "rota_goiania_alexsandro",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_goiania_alexsandro"
      ],
      "promoterId": "user_prom_bretas_morada_do_sol",
      "highStockLimit": 100
    },
    {
      "id": "loja_bretas_senador_canedo",
      "name": "BRETAS SENADOR CANEDO",
      "network": "BRETAS",
      "rede": "13-BRETAS",
      "defaultRouteId": "rota_goiania_vinicius",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_goiania_vinicius"
      ],
      "promoterId": "user_prom_bretas_senador_canedo",
      "highStockLimit": 100
    },
    {
      "id": "loja_bretas_sol_nascente",
      "name": "BRETAS SOL NASCENTE",
      "network": "BRETAS",
      "rede": "13-BRETAS",
      "defaultRouteId": "rota_goiania_alexsandro",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_goiania_alexsandro"
      ],
      "promoterId": "user_prom_bretas_sol_nascente",
      "highStockLimit": 100
    },
    {
      "id": "loja_bretas_veiga_jardim",
      "name": "BRETAS VEIGA JARDIM",
      "network": "BRETAS",
      "rede": "13-BRETAS",
      "defaultRouteId": "rota_goiania_maycon",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_goiania_maycon"
      ],
      "promoterId": "user_prom_bretas_veiga_jardim",
      "highStockLimit": 100
    },
    {
      "id": "loja_bretas_vila_jaragua",
      "name": "BRETAS VILA JARAGUA",
      "network": "BRETAS",
      "rede": "13-BRETAS",
      "defaultRouteId": "rota_goiania_alexsandro",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_goiania_alexsandro"
      ],
      "promoterId": "user_prom_bretas_vila_jaragua",
      "highStockLimit": 100
    },
    {
      "id": "loja_bretas_vila_pedroso",
      "name": "BRETAS VILA PEDROSO",
      "network": "BRETAS",
      "rede": "13-BRETAS",
      "defaultRouteId": "rota_goiania_vinicius",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_goiania_vinicius"
      ],
      "promoterId": "user_prom_bretas_vila_pedroso",
      "highStockLimit": 100
    },
    {
      "id": "loja_casarocca_trm_matriz",
      "name": "CASA ROCCA ASA SUL - MATRIZ",
      "network": "MERCADOS ALEATÓRIOS",
      "rede": "11-MERCADOS ALEATÓRIOS",
      "defaultRouteId": "rota_gabriel",
      "sundayRouteId": "rota_domingo_sobradinho",
      "routeOptions": [
        "rota_gabriel"
      ],
      "promoterId": "user_prom_casarocca_trm_matriz",
      "highStockLimit": 100
    },
    {
      "id": "loja_casa_rocca_mt_lago_norte_filial",
      "name": "CASA ROCCA LAGO NORTE - FILIAL",
      "network": "MERCADOS ALEATÓRIOS",
      "rede": "11-MERCADOS ALEATÓRIOS",
      "defaultRouteId": "rota_nilton",
      "sundayRouteId": "rota_domingo_sobradinho",
      "routeOptions": [
        "rota_nilton"
      ],
      "promoterId": "user_prom_casa_rocca_mt_lago_norte_filial",
      "highStockLimit": 100
    },
    {
      "id": "loja_cerra_mix",
      "name": "CERRAMIX SUPERMERCADOS",
      "network": "CONSIGNADOS VARIADOS",
      "rede": "22-CONSIGNADOS VARIADOS",
      "defaultRouteId": "rota_stanio",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [
        "rota_stanio"
      ],
      "promoterId": "user_prom_cerra_mix",
      "highStockLimit": 100
    },
    {
      "id": "loja_comper_aguas_claras",
      "name": "COMPER AGUAS CLARAS",
      "network": "COMPER/FORT",
      "rede": "3-COMPER/FORT",
      "defaultRouteId": "rota_gabriel",
      "sundayRouteId": "rota_domingo_sobradinho",
      "routeOptions": [
        "rota_gabriel"
      ],
      "promoterId": "user_prom_comper_aguas_claras",
      "highStockLimit": 100
    },
    {
      "id": "loja_comper_asa_sul",
      "name": "COMPER ASA SUL",
      "network": "COMPER/FORT",
      "rede": "3-COMPER/FORT",
      "defaultRouteId": "rota_gabriel",
      "sundayRouteId": "rota_domingo_sobradinho",
      "routeOptions": [
        "rota_gabriel"
      ],
      "promoterId": "user_prom_comper_asa_sul",
      "highStockLimit": 100
    },
    {
      "id": "loja_comper_gama",
      "name": "COMPER GAMA",
      "network": "COMPER/FORT",
      "rede": "3-COMPER/FORT",
      "defaultRouteId": "rota_stanio",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [
        "rota_stanio"
      ],
      "promoterId": "user_prom_comper_gama",
      "highStockLimit": 100
    },
    {
      "id": "loja_comper_sobradinho",
      "name": "COMPER SOBRADINHO",
      "network": "COMPER/FORT",
      "rede": "3-COMPER/FORT",
      "defaultRouteId": "rota_nilton",
      "sundayRouteId": "rota_domingo_sobradinho",
      "routeOptions": [
        "rota_nilton"
      ],
      "promoterId": "user_prom_comper_sobradinho",
      "highStockLimit": 100
    },
    {
      "id": "loja_costa_ade",
      "name": "COSTA ADE",
      "network": "COSTA ATACADÃO",
      "rede": "15-COSTA ATACADÃO",
      "defaultRouteId": "rota_lindomar",
      "sundayRouteId": "rota_domingo_sobradinho",
      "routeOptions": [
        "rota_lindomar"
      ],
      "promoterId": "user_prom_costa_ade",
      "highStockLimit": 100
    },
    {
      "id": "loja_costa_avenida_goias",
      "name": "COSTA AVENIDA GOIÁS",
      "network": "COSTA ATACADÃO",
      "rede": "15-COSTA ATACADÃO",
      "defaultRouteId": "rota_goiania_alexsandro",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_goiania_alexsandro"
      ],
      "promoterId": "user_prom_costa_avenida_goias",
      "highStockLimit": 100
    },
    {
      "id": "loja_costa_070",
      "name": "COSTA GO-070",
      "network": "COSTA ATACADÃO",
      "rede": "15-COSTA ATACADÃO",
      "defaultRouteId": "rota_goiania_alexsandro",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_goiania_alexsandro"
      ],
      "promoterId": "user_prom_costa_070",
      "highStockLimit": 100
    },
    {
      "id": "loja_costa_goiania",
      "name": "COSTA GOIANIA",
      "network": "COSTA ATACADÃO",
      "rede": "15-COSTA ATACADÃO",
      "defaultRouteId": "rota_goiania_vinicius",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_goiania_vinicius"
      ],
      "promoterId": "user_prom_costa_goiania",
      "highStockLimit": 100
    },
    {
      "id": "loja_costa_avenida_jardim",
      "name": "COSTA JARDIM GOIÁS",
      "network": "COSTA ATACADÃO",
      "rede": "15-COSTA ATACADÃO",
      "defaultRouteId": "rota_goiania_vinicius",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_goiania_vinicius"
      ],
      "promoterId": "user_prom_costa_avenida_jardim",
      "highStockLimit": 100
    },
    {
      "id": "loja_costa_laranjeiras",
      "name": "COSTA LARANJEIRAS",
      "network": "COSTA ATACADÃO",
      "rede": "15-COSTA ATACADÃO",
      "defaultRouteId": "rota_goiania_vinicius",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_goiania_vinicius"
      ],
      "promoterId": "user_prom_costa_laranjeiras",
      "highStockLimit": 100
    },
    {
      "id": "loja_costa_luziania",
      "name": "COSTA LUZIANIA",
      "network": "COSTA ATACADÃO",
      "rede": "15-COSTA ATACADÃO",
      "defaultRouteId": "rota_wanderson_luziania_nossa_kasa",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [
        "rota_wanderson_luziania_nossa_kasa"
      ],
      "promoterId": "user_prom_costa_luziania",
      "highStockLimit": 100
    },
    {
      "id": "loja_costa_rio_verde",
      "name": "COSTA RIO VERDE",
      "network": "COSTA ATACADÃO",
      "rede": "15-COSTA ATACADÃO",
      "defaultRouteId": "rota_goiania_edmar",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_goiania_edmar"
      ],
      "promoterId": "user_prom_costa_rio_verde",
      "highStockLimit": 100
    },
    {
      "id": "loja_costa_santa_maria",
      "name": "COSTA SANTA MARIA",
      "network": "COSTA ATACADÃO",
      "rede": "15-COSTA ATACADÃO",
      "defaultRouteId": "rota_stanio",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [
        "rota_stanio"
      ],
      "promoterId": "user_prom_costa_santa_maria",
      "highStockLimit": 100
    },
    {
      "id": "loja_costa_senador_canedo",
      "name": "COSTA SENADOR CANEDO",
      "network": "COSTA ATACADÃO",
      "rede": "15-COSTA ATACADÃO",
      "defaultRouteId": "rota_goiania_vinicius",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_goiania_vinicius"
      ],
      "promoterId": "user_prom_costa_senador_canedo",
      "highStockLimit": 100
    },
    {
      "id": "loja_costa_t_63",
      "name": "COSTA T-63",
      "network": "COSTA ATACADÃO",
      "rede": "15-COSTA ATACADÃO",
      "defaultRouteId": "rota_goiania_maycon",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_goiania_maycon"
      ],
      "promoterId": "user_prom_costa_t_63",
      "highStockLimit": 100
    },
    {
      "id": "loja_costa_taguatinga",
      "name": "COSTA TAGUATINGA",
      "network": "COSTA ATACADÃO",
      "rede": "15-COSTA ATACADÃO",
      "defaultRouteId": "rota_lindomar",
      "sundayRouteId": "rota_domingo_sobradinho",
      "routeOptions": [
        "rota_lindomar"
      ],
      "promoterId": "user_prom_costa_taguatinga",
      "highStockLimit": 100
    },
    {
      "id": "loja_costa_taquari",
      "name": "COSTA TAQUARI",
      "network": "COSTA ATACADÃO",
      "rede": "15-COSTA ATACADÃO",
      "defaultRouteId": "rota_nilton",
      "sundayRouteId": "rota_domingo_sobradinho",
      "routeOptions": [
        "rota_nilton"
      ],
      "promoterId": "user_prom_costa_taquari",
      "highStockLimit": 100
    },
    {
      "id": "loja_costa_unieuro",
      "name": "COSTA UNIEURO",
      "network": "COSTA ATACADÃO",
      "rede": "15-COSTA ATACADÃO",
      "defaultRouteId": "rota_gabriel",
      "sundayRouteId": "rota_domingo_sobradinho",
      "routeOptions": [
        "rota_gabriel"
      ],
      "promoterId": "user_prom_costa_unieuro",
      "highStockLimit": 100
    },
    {
      "id": "loja_costa_valparaiso",
      "name": "COSTA VALPARAISO",
      "network": "COSTA ATACADÃO",
      "rede": "15-COSTA ATACADÃO",
      "defaultRouteId": "rota_stanio",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [
        "rota_stanio"
      ],
      "promoterId": "user_prom_costa_valparaiso",
      "highStockLimit": 100
    },
    {
      "id": "loja_dia_a_dia_aguas_claras",
      "name": "DD AGUAS CLARAS",
      "network": "DIA A DIA",
      "rede": "2-DIA A DIA",
      "defaultRouteId": "rota_gabriel",
      "sundayRouteId": "rota_domingo_sobradinho",
      "routeOptions": [
        "rota_gabriel"
      ],
      "promoterId": "user_prom_dia_a_dia_aguas_claras",
      "highStockLimit": 100
    },
    {
      "id": "loja_dia_a_dia_ceilandia_norte",
      "name": "DD CEILÂNDIA NORTE",
      "network": "DIA A DIA",
      "rede": "2-DIA A DIA",
      "defaultRouteId": "rota_lindomar",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [
        "rota_lindomar"
      ],
      "promoterId": "user_prom_dia_a_dia_ceilandia_norte",
      "highStockLimit": 100
    },
    {
      "id": "loja_dia_a_dia_planaltina_mestre_d_armas",
      "name": "DIA A DIA PLANALTINA MESTRE D'ARMAS",
      "network": "DIA A DIA",
      "rede": "2-DIA A DIA",
      "defaultRouteId": "rota_nilton",
      "sundayRouteId": "rota_domingo_sobradinho",
      "routeOptions": [
        "rota_nilton"
      ],
      "promoterId": "user_prom_dia_a_dia_planaltina_mestre_d_armas",
      "highStockLimit": 100
    },
    {
      "id": "loja_dia_a_dia_070",
      "name": "DIA A DIA 070",
      "network": "DIA A DIA",
      "rede": "2-DIA A DIA",
      "defaultRouteId": "rota_lindomar",
      "sundayRouteId": "rota_domingo_sobradinho",
      "routeOptions": [
        "rota_lindomar"
      ],
      "promoterId": "user_prom_dia_a_dia_070",
      "highStockLimit": 100
    },
    {
      "id": "loja_dia_a_dia_aguas_lindas",
      "name": "DIA A DIA AGUAS LINDAS",
      "network": "DIA A DIA",
      "rede": "2-DIA A DIA",
      "defaultRouteId": "rota_lindomar",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [
        "rota_lindomar",
        "rota_wanderson_aguas_lindas"
      ],
      "promoterId": "user_prom_dia_a_dia_aguas_lindas",
      "highStockLimit": 100
    },
    {
      "id": "loja_dia_a_dia_aparecida_goiania",
      "name": "DIA A DIA APARECIDA DE GOIANIA",
      "network": "DIA A DIA",
      "rede": "2-DIA A DIA",
      "defaultRouteId": "rota_goiania_vinicius",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_goiania_vinicius"
      ],
      "promoterId": "user_prom_dia_a_dia_aparecida_goiania",
      "highStockLimit": 100
    },
    {
      "id": "loja_dia_a_dia_ceilandia_centro",
      "name": "DIA A DIA CEILANDIA CENTRO",
      "network": "DIA A DIA",
      "rede": "2-DIA A DIA",
      "defaultRouteId": "rota_lindomar",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [
        "rota_lindomar"
      ],
      "promoterId": "user_prom_dia_a_dia_ceilandia_centro",
      "highStockLimit": 100
    },
    {
      "id": "loja_dia_a_dia_cesar_lates",
      "name": "DIA A DIA CESAR LATES",
      "network": "DIA A DIA",
      "rede": "2-DIA A DIA",
      "defaultRouteId": "rota_goiania_vinicius",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_goiania_vinicius"
      ],
      "promoterId": "user_prom_dia_a_dia_cesar_lates",
      "highStockLimit": 100
    },
    {
      "id": "loja_dia_a_dia_eptg",
      "name": "DIA A DIA EPTG",
      "network": "DIA A DIA",
      "rede": "2-DIA A DIA",
      "defaultRouteId": "rota_gabriel",
      "sundayRouteId": "rota_domingo_sobradinho",
      "routeOptions": [
        "rota_gabriel"
      ],
      "promoterId": "user_prom_dia_a_dia_eptg",
      "highStockLimit": 100
    },
    {
      "id": "loja_dia_a_dia_formosa",
      "name": "DIA A DIA FORMOSA",
      "network": "DIA A DIA",
      "rede": "2-DIA A DIA",
      "defaultRouteId": "rota_nilton",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_nilton"
      ],
      "promoterId": "user_prom_dia_a_dia_formosa",
      "highStockLimit": 100
    },
    {
      "id": "loja_dia_a_dia_furnas",
      "name": "DIA A DIA FURNAS",
      "network": "DIA A DIA",
      "rede": "2-DIA A DIA",
      "defaultRouteId": "rota_stanio",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [
        "rota_stanio",
        "rota_wanderson_aguas_lindas"
      ],
      "promoterId": "user_prom_dia_a_dia_furnas",
      "highStockLimit": 100
    },
    {
      "id": "loja_dia_a_dia_gama",
      "name": "DIA A DIA GAMA",
      "network": "DIA A DIA",
      "rede": "2-DIA A DIA",
      "defaultRouteId": "rota_stanio",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [
        "rota_stanio"
      ],
      "promoterId": "user_prom_dia_a_dia_gama",
      "highStockLimit": 100
    },
    {
      "id": "loja_dia_a_dia_guara",
      "name": "DIA A DIA GUARA",
      "network": "DIA A DIA",
      "rede": "2-DIA A DIA",
      "defaultRouteId": "rota_gabriel",
      "sundayRouteId": "rota_domingo_sobradinho",
      "routeOptions": [
        "rota_gabriel"
      ],
      "promoterId": "user_prom_dia_a_dia_guara",
      "highStockLimit": 100
    },
    {
      "id": "loja_dia_a_dia_gurupi",
      "name": "DIA A DIA GURUPI",
      "network": "DIA A DIA",
      "rede": "2-DIA A DIA",
      "defaultRouteId": "rota_gurupi_junior",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_gurupi_junior"
      ],
      "promoterId": "user_prom_dia_a_dia_gurupi",
      "highStockLimit": 100
    },
    {
      "id": "loja_dia_a_dia_horacio_costa",
      "name": "DIA A DIA HORACIO COSTA",
      "network": "DIA A DIA",
      "rede": "2-DIA A DIA",
      "defaultRouteId": "rota_goiania_alexsandro",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_goiania_alexsandro"
      ],
      "promoterId": "user_prom_dia_a_dia_horacio_costa",
      "highStockLimit": 100
    },
    {
      "id": "loja_dia_a_dia_jardim_botanico",
      "name": "DIA A DIA JARDIM BOTANICO",
      "network": "DIA A DIA",
      "rede": "2-DIA A DIA",
      "defaultRouteId": "rota_gabriel",
      "sundayRouteId": "rota_domingo_sobradinho",
      "routeOptions": [
        "rota_gabriel"
      ],
      "promoterId": "user_prom_dia_a_dia_jardim_botanico",
      "highStockLimit": 100
    },
    {
      "id": "loja_dia_a_dia_lem",
      "name": "DIA A DIA LEM-BA",
      "network": "DIA A DIA",
      "rede": "2-DIA A DIA",
      "defaultRouteId": "rota_lem_iran",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_lem_iran"
      ],
      "promoterId": "user_prom_dia_a_dia_lem",
      "highStockLimit": 100
    },
    {
      "id": "loja_dia_a_dia_luziania",
      "name": "DIA A DIA LUZIANIA",
      "network": "DIA A DIA",
      "rede": "2-DIA A DIA",
      "defaultRouteId": "rota_wanderson_luziania_nossa_kasa",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [
        "rota_wanderson_luziania_nossa_kasa"
      ],
      "promoterId": "user_prom_dia_a_dia_luziania",
      "highStockLimit": 100
    },
    {
      "id": "loja_dia_a_dia_novo_gama",
      "name": "DIA A DIA NOVO GAMA",
      "network": "DIA A DIA",
      "rede": "2-DIA A DIA",
      "defaultRouteId": "rota_stanio",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [
        "rota_stanio"
      ],
      "promoterId": "user_prom_dia_a_dia_novo_gama",
      "highStockLimit": 100
    },
    {
      "id": "loja_dia_a_dia_ceilandia_sul_p_sul",
      "name": "DIA A DIA P SUL",
      "network": "DIA A DIA",
      "rede": "2-DIA A DIA",
      "defaultRouteId": "rota_lindomar",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [
        "rota_lindomar"
      ],
      "promoterId": "user_prom_dia_a_dia_ceilandia_sul_p_sul",
      "highStockLimit": 100
    },
    {
      "id": "loja_dia_a_dia_park_jk_luziania",
      "name": "DIA A DIA PARK JK LUZIÂNIA",
      "network": "DIA A DIA",
      "rede": "2-DIA A DIA",
      "defaultRouteId": "rota_wanderson_luziania_nossa_kasa",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [
        "rota_wanderson_luziania_nossa_kasa"
      ],
      "promoterId": "user_prom_dia_a_dia_park_jk_luziania",
      "highStockLimit": 100
    },
    {
      "id": "loja_dia_a_dia_planaltina_df",
      "name": "DIA A DIA PLANALTINA DF",
      "network": "DIA A DIA",
      "rede": "2-DIA A DIA",
      "defaultRouteId": "rota_nilton",
      "sundayRouteId": "rota_domingo_sobradinho",
      "routeOptions": [
        "rota_nilton"
      ],
      "promoterId": "user_prom_dia_a_dia_planaltina_df",
      "highStockLimit": 100
    },
    {
      "id": "loja_dia_a_dia_planaltina_go",
      "name": "DIA A DIA PLANALTINA GO",
      "network": "DIA A DIA",
      "rede": "2-DIA A DIA",
      "defaultRouteId": "rota_nilton",
      "sundayRouteId": "rota_domingo_sobradinho",
      "routeOptions": [
        "rota_nilton"
      ],
      "promoterId": "user_prom_dia_a_dia_planaltina_go",
      "highStockLimit": 100
    },
    {
      "id": "loja_dia_a_dia_rio_verde",
      "name": "DIA A DIA RIO VERDE",
      "network": "DIA A DIA",
      "rede": "2-DIA A DIA",
      "defaultRouteId": "rota_goiania_edmar",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_goiania_edmar"
      ],
      "promoterId": "user_prom_dia_a_dia_rio_verde",
      "highStockLimit": 100
    },
    {
      "id": "loja_dia_a_dia_santo_antonio",
      "name": "DIA A DIA SANTO ANTONIO",
      "network": "DIA A DIA",
      "rede": "2-DIA A DIA",
      "defaultRouteId": "rota_lindomar",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [
        "rota_lindomar",
        "rota_wanderson_aguas_lindas"
      ],
      "promoterId": "user_prom_dia_a_dia_santo_antonio",
      "highStockLimit": 100
    },
    {
      "id": "loja_dia_a_dia_sia",
      "name": "DIA A DIA SIA",
      "network": "DIA A DIA",
      "rede": "2-DIA A DIA",
      "defaultRouteId": "rota_gabriel",
      "sundayRouteId": "rota_domingo_sobradinho",
      "routeOptions": [
        "rota_gabriel"
      ],
      "promoterId": "user_prom_dia_a_dia_sia",
      "highStockLimit": 100
    },
    {
      "id": "loja_dia_a_dia_sobradinho",
      "name": "DIA A DIA SOBRADINHO",
      "network": "DIA A DIA",
      "rede": "2-DIA A DIA",
      "defaultRouteId": "rota_nilton",
      "sundayRouteId": "rota_domingo_sobradinho",
      "routeOptions": [
        "rota_nilton"
      ],
      "promoterId": "user_prom_dia_a_dia_sobradinho",
      "highStockLimit": 100
    },
    {
      "id": "loja_dia_a_dia_taguatinga_sul",
      "name": "DIA A DIA TAGUATINGA SUL",
      "network": "DIA A DIA",
      "rede": "2-DIA A DIA",
      "defaultRouteId": "rota_gabriel",
      "sundayRouteId": "rota_domingo_sobradinho",
      "routeOptions": [
        "rota_gabriel"
      ],
      "promoterId": "user_prom_dia_a_dia_taguatinga_sul",
      "highStockLimit": 100
    },
    {
      "id": "loja_dia_a_dia_vicente_pires_rua_04",
      "name": "DIA A DIA VICENTE PIRES RUA 04",
      "network": "DIA A DIA",
      "rede": "2-DIA A DIA",
      "defaultRouteId": "rota_gabriel",
      "sundayRouteId": "rota_domingo_sobradinho",
      "routeOptions": [
        "rota_gabriel"
      ],
      "promoterId": "user_prom_dia_a_dia_vicente_pires_rua_04",
      "highStockLimit": 100
    },
    {
      "id": "loja_dia_a_dia_vicente_pires_rua_12",
      "name": "DIA A DIA VICENTE PIRES RUA 12",
      "network": "DIA A DIA",
      "rede": "2-DIA A DIA",
      "defaultRouteId": "rota_gabriel",
      "sundayRouteId": "rota_domingo_sobradinho",
      "routeOptions": [
        "rota_gabriel"
      ],
      "promoterId": "user_prom_dia_a_dia_vicente_pires_rua_12",
      "highStockLimit": 100
    },
    {
      "id": "loja_dia_a_dia_goianesia",
      "name": "DIA DIA GOIANÉSIA",
      "network": "DIA A DIA",
      "rede": "2-DIA A DIA",
      "defaultRouteId": "rota_gurupi_junior",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_gurupi_junior"
      ],
      "promoterId": "user_prom_dia_a_dia_goianesia",
      "highStockLimit": 100
    },
    {
      "id": "loja_dia_a_dia_riacho_fundo",
      "name": "DIA DIA RIACHO FUNDO",
      "network": "DIA A DIA",
      "rede": "2-DIA A DIA",
      "defaultRouteId": "rota_lindomar",
      "sundayRouteId": "rota_domingo_sobradinho",
      "routeOptions": [
        "rota_lindomar"
      ],
      "promoterId": "user_prom_dia_a_dia_riacho_fundo",
      "highStockLimit": 100
    },
    {
      "id": "loja_economart_barreiras",
      "name": "ECONOMART BARREIRAS",
      "network": "CONSIGNADOS VARIADOS",
      "rede": "22-CONSIGNADOS VARIADOS",
      "defaultRouteId": "rota_lem_iran",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_lem_iran"
      ],
      "promoterId": "user_prom_economart_barreiras",
      "highStockLimit": 100
    },
    {
      "id": "loja_economart_lem",
      "name": "ECONOMART LEM",
      "network": "CONSIGNADOS VARIADOS",
      "rede": "22-CONSIGNADOS VARIADOS",
      "defaultRouteId": "rota_lem_iran",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_lem_iran"
      ],
      "promoterId": "user_prom_economart_lem",
      "highStockLimit": 100
    },
    {
      "id": "loja_fort_ceilandia",
      "name": "FORT CEILANDIA",
      "network": "COMPER/FORT",
      "rede": "3-COMPER/FORT",
      "defaultRouteId": "rota_lindomar",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [
        "rota_lindomar"
      ],
      "promoterId": "user_prom_fort_ceilandia",
      "highStockLimit": 100
    },
    {
      "id": "loja_fort_planaltina",
      "name": "FORT PLANALTINA",
      "network": "COMPER/FORT",
      "rede": "3-COMPER/FORT",
      "defaultRouteId": "rota_nilton",
      "sundayRouteId": "rota_domingo_sobradinho",
      "routeOptions": [
        "rota_nilton"
      ],
      "promoterId": "user_prom_fort_planaltina",
      "highStockLimit": 100
    },
    {
      "id": "loja_fort_recanto",
      "name": "FORT RECANTO",
      "network": "COMPER/FORT",
      "rede": "3-COMPER/FORT",
      "defaultRouteId": "rota_stanio",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [
        "rota_stanio",
        "rota_wanderson_aguas_lindas"
      ],
      "promoterId": "user_prom_fort_recanto",
      "highStockLimit": 100
    },
    {
      "id": "loja_fort_sol_nascente",
      "name": "FORT SOL NASCENTE",
      "network": "COMPER/FORT",
      "rede": "3-COMPER/FORT",
      "defaultRouteId": "rota_lindomar",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [
        "rota_lindomar"
      ],
      "promoterId": "user_prom_fort_sol_nascente",
      "highStockLimit": 100
    },
    {
      "id": "loja_fort_taguatinga",
      "name": "FORT TAGUATINGA",
      "network": "COMPER/FORT",
      "rede": "3-COMPER/FORT",
      "defaultRouteId": "rota_lindomar",
      "sundayRouteId": "rota_domingo_sobradinho",
      "routeOptions": [
        "rota_lindomar"
      ],
      "promoterId": "user_prom_fort_taguatinga",
      "highStockLimit": 100
    },
    {
      "id": "loja_fort_valparaiso",
      "name": "FORT VALPARAISO",
      "network": "COMPER/FORT",
      "rede": "3-COMPER/FORT",
      "defaultRouteId": "rota_stanio",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [
        "rota_stanio"
      ],
      "promoterId": "user_prom_fort_valparaiso",
      "highStockLimit": 100
    },
    {
      "id": "loja_nossa_kaza_anhanguera",
      "name": "NOSSA KAZA ANHANGUERA B",
      "network": "MERCADOS ALEATÓRIOS",
      "rede": "11-MERCADOS ALEATÓRIOS",
      "defaultRouteId": "rota_stanio",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_stanio"
      ],
      "promoterId": "user_prom_nossa_kaza_anhanguera",
      "highStockLimit": 100
    },
    {
      "id": "loja_nossa_kaza_brazlandia",
      "name": "NOSSA KAZA BRAZLÂNDIA",
      "network": "MERCADOS ALEATÓRIOS",
      "rede": "11-MERCADOS ALEATÓRIOS",
      "defaultRouteId": "rota_wanderson_luziania_nossa_kasa",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_wanderson_luziania_nossa_kasa"
      ],
      "promoterId": "user_prom_nossa_kaza_brazlandia",
      "highStockLimit": 100
    },
    {
      "id": "loja_nossa_kaza_jardim_ceu_azul",
      "name": "NOSSA KAZA CÉU AZUL",
      "network": "MERCADOS ALEATÓRIOS",
      "rede": "11-MERCADOS ALEATÓRIOS",
      "defaultRouteId": "rota_stanio",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_stanio"
      ],
      "promoterId": "user_prom_nossa_kaza_jardim_ceu_azul",
      "highStockLimit": 100
    },
    {
      "id": "loja_nossa_kasa_chacara_ypiranga",
      "name": "NOSSA KAZA CHÁCARA YPIRANGA A",
      "network": "MERCADOS ALEATÓRIOS",
      "rede": "11-MERCADOS ALEATÓRIOS",
      "defaultRouteId": "rota_wanderson_luziania_nossa_kasa",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_wanderson_luziania_nossa_kasa"
      ],
      "promoterId": "user_prom_nossa_kasa_chacara_ypiranga",
      "highStockLimit": 100
    },
    {
      "id": "loja_nossa_kasa_parque_esplanada_3",
      "name": "NOSSA KAZA ESPLANADA 3",
      "network": "MERCADOS ALEATÓRIOS",
      "rede": "11-MERCADOS ALEATÓRIOS",
      "defaultRouteId": "rota_wanderson_luziania_nossa_kasa",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_wanderson_luziania_nossa_kasa"
      ],
      "promoterId": "user_prom_nossa_kasa_parque_esplanada_3",
      "highStockLimit": 100
    },
    {
      "id": "loja_nossa_kasa_fumal",
      "name": "NOSSA KAZA FUMAL",
      "network": "MERCADOS ALEATÓRIOS",
      "rede": "11-MERCADOS ALEATÓRIOS",
      "defaultRouteId": "rota_wanderson_luziania_nossa_kasa",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_wanderson_luziania_nossa_kasa"
      ],
      "promoterId": "user_prom_nossa_kasa_fumal",
      "highStockLimit": 100
    },
    {
      "id": "loja_nossa_kasa_fumal_1",
      "name": "NOSSA KAZA FUMAL 01",
      "network": "MERCADOS ALEATÓRIOS",
      "rede": "11-MERCADOS ALEATÓRIOS",
      "defaultRouteId": "rota_wanderson_luziania_nossa_kasa",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_wanderson_luziania_nossa_kasa"
      ],
      "promoterId": "user_prom_nossa_kasa_fumal_1",
      "highStockLimit": 100
    },
    {
      "id": "loja_nossa_kasa_maravilha",
      "name": "NOSSA KAZA MARAVILHA",
      "network": "MERCADOS ALEATÓRIOS",
      "rede": "11-MERCADOS ALEATÓRIOS",
      "defaultRouteId": "rota_wanderson_luziania_nossa_kasa",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_wanderson_luziania_nossa_kasa"
      ],
      "promoterId": "user_prom_nossa_kasa_maravilha",
      "highStockLimit": 100
    },
    {
      "id": "loja_nossa_kasa_park_jk",
      "name": "NOSSA KAZA PARK JK",
      "network": "MERCADOS ALEATÓRIOS",
      "rede": "11-MERCADOS ALEATÓRIOS",
      "defaultRouteId": "rota_wanderson_luziania_nossa_kasa",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_wanderson_luziania_nossa_kasa"
      ],
      "promoterId": "user_prom_nossa_kasa_park_jk",
      "highStockLimit": 100
    },
    {
      "id": "loja_nossa_kasa_alvorada_1",
      "name": "NOSSA KAZA PARQUE ALVORADA 1",
      "network": "MERCADOS ALEATÓRIOS",
      "rede": "11-MERCADOS ALEATÓRIOS",
      "defaultRouteId": "rota_wanderson_luziania_nossa_kasa",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_wanderson_luziania_nossa_kasa"
      ],
      "promoterId": "user_prom_nossa_kasa_alvorada_1",
      "highStockLimit": 100
    },
    {
      "id": "loja_nossa_kasa_parque_araguari",
      "name": "NOSSA KAZA PARQUE ARAGUARI",
      "network": "MERCADOS ALEATÓRIOS",
      "rede": "11-MERCADOS ALEATÓRIOS",
      "defaultRouteId": "rota_wanderson_luziania_nossa_kasa",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_wanderson_luziania_nossa_kasa"
      ],
      "promoterId": "user_prom_nossa_kasa_parque_araguari",
      "highStockLimit": 100
    },
    {
      "id": "loja_nossa_kaza_pedregal",
      "name": "NOSSA KAZA PEDREGAL",
      "network": "MERCADOS ALEATÓRIOS",
      "rede": "11-MERCADOS ALEATÓRIOS",
      "defaultRouteId": "rota_stanio",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_stanio"
      ],
      "promoterId": "user_prom_nossa_kaza_pedregal",
      "highStockLimit": 100
    },
    {
      "id": "loja_nossa_kaza_ponte_alta",
      "name": "NOSSA KAZA PONTE ALTA",
      "network": "MERCADOS ALEATÓRIOS",
      "rede": "11-MERCADOS ALEATÓRIOS",
      "defaultRouteId": "rota_stanio",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_stanio"
      ],
      "promoterId": "user_prom_nossa_kaza_ponte_alta",
      "highStockLimit": 100
    },
    {
      "id": "loja_nossa_kasa_mansoes_santa_maria",
      "name": "NOSSA KAZA SANTA MARIA",
      "network": "MERCADOS ALEATÓRIOS",
      "rede": "11-MERCADOS ALEATÓRIOS",
      "defaultRouteId": "rota_wanderson_luziania_nossa_kasa",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_wanderson_luziania_nossa_kasa"
      ],
      "promoterId": "user_prom_nossa_kasa_mansoes_santa_maria",
      "highStockLimit": 100
    },
    {
      "id": "loja_nossa_kaza_taguatinga_norte",
      "name": "NOSSA KAZA TAGUATINGA NORTE",
      "network": "MERCADOS ALEATÓRIOS",
      "rede": "11-MERCADOS ALEATÓRIOS",
      "defaultRouteId": "rota_lindomar",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_lindomar"
      ],
      "promoterId": "user_prom_nossa_kaza_taguatinga_norte",
      "highStockLimit": 100
    },
    {
      "id": "loja_nossa_kaza_valparaiso",
      "name": "NOSSA KAZA VALPARAISO",
      "network": "MERCADOS ALEATÓRIOS",
      "rede": "11-MERCADOS ALEATÓRIOS",
      "defaultRouteId": "rota_wanderson_luziania_nossa_kasa",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_wanderson_luziania_nossa_kasa"
      ],
      "promoterId": "user_prom_nossa_kaza_valparaiso",
      "highStockLimit": 100
    },
    {
      "id": "loja_nossa_kasa_veigas",
      "name": "NOSSA KAZA VIEGAS",
      "network": "MERCADOS ALEATÓRIOS",
      "rede": "11-MERCADOS ALEATÓRIOS",
      "defaultRouteId": "rota_wanderson_luziania_nossa_kasa",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_wanderson_luziania_nossa_kasa"
      ],
      "promoterId": "user_prom_nossa_kasa_veigas",
      "highStockLimit": 100
    },
    {
      "id": "loja_super_jockey",
      "name": "SUPER JOCKEY EMPORIO",
      "network": "MERCADOS ALEATÓRIOS",
      "rede": "11-MERCADOS ALEATÓRIOS",
      "defaultRouteId": "rota_nilton",
      "sundayRouteId": "rota_domingo_sobradinho",
      "routeOptions": [
        "rota_nilton"
      ],
      "promoterId": "user_prom_super_jockey",
      "highStockLimit": 100
    },
    {
      "id": "loja_supervendas_recanto_2_rct",
      "name": "SUPERVENDAS RECANTO 2 RCT",
      "network": "VIVENDAS",
      "rede": "5-VIVENDAS",
      "defaultRouteId": "rota_stanio",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_stanio"
      ],
      "promoterId": "user_prom_supervendas_recanto_2_rct",
      "highStockLimit": 100
    },
    {
      "id": "loja_vivendas_aguas_lindas",
      "name": "VIVENDAS AGUAS LINDAS",
      "network": "VIVENDAS",
      "rede": "5-VIVENDAS",
      "defaultRouteId": "rota_lindomar",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [
        "rota_lindomar",
        "rota_wanderson_aguas_lindas"
      ],
      "promoterId": "user_prom_vivendas_aguas_lindas",
      "highStockLimit": 100
    },
    {
      "id": "loja_vivendas_camping_club",
      "name": "VIVENDAS CAMPING CLUB AGUAS LINDAS",
      "network": "VIVENDAS",
      "rede": "5-VIVENDAS",
      "defaultRouteId": "rota_lindomar",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [
        "rota_lindomar",
        "rota_wanderson_aguas_lindas"
      ],
      "promoterId": "user_prom_vivendas_camping_club",
      "highStockLimit": 100
    },
    {
      "id": "loja_vivendas_tagn",
      "name": "VIVENDAS COMERCIAL TAGN",
      "network": "VIVENDAS",
      "rede": "5-VIVENDAS",
      "defaultRouteId": "rota_lindomar",
      "sundayRouteId": "rota_domingo_sobradinho",
      "routeOptions": [
        "rota_lindomar"
      ],
      "promoterId": "user_prom_vivendas_tagn",
      "highStockLimit": 100
    },
    {
      "id": "loja_vivendas_eqnl",
      "name": "VIVENDAS EQNL",
      "network": "VIVENDAS",
      "rede": "5-VIVENDAS",
      "defaultRouteId": "rota_lindomar",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_lindomar"
      ],
      "promoterId": "user_prom_vivendas_eqnl",
      "highStockLimit": 100
    },
    {
      "id": "loja_vivendas_brtw_102",
      "name": "VIVENDAS LOJA 102",
      "network": "VIVENDAS",
      "rede": "5-VIVENDAS",
      "defaultRouteId": "rota_stanio",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [
        "rota_stanio"
      ],
      "promoterId": "user_prom_vivendas_brtw_102",
      "highStockLimit": 100
    },
    {
      "id": "loja_vivendas_atacado_sv_112",
      "name": "VIVENDAS LOJA 112",
      "network": "VIVENDAS",
      "rede": "5-VIVENDAS",
      "defaultRouteId": "rota_stanio",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [
        "rota_stanio"
      ],
      "promoterId": "user_prom_vivendas_atacado_sv_112",
      "highStockLimit": 100
    },
    {
      "id": "loja_vivendas_luna",
      "name": "VIVENDAS NOVO GAMA LUNA",
      "network": "VIVENDAS",
      "rede": "5-VIVENDAS",
      "defaultRouteId": "rota_stanio",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [
        "rota_stanio"
      ],
      "promoterId": "user_prom_vivendas_luna",
      "highStockLimit": 100
    },
    {
      "id": "loja_vivendas_nsf_matriz_29_abwa",
      "name": "VIVENDAS RECANTO NSF MATRIZ LOJA 29",
      "network": "VIVENDAS",
      "rede": "5-VIVENDAS",
      "defaultRouteId": "rota_stanio",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_stanio"
      ],
      "promoterId": "user_prom_vivendas_nsf_matriz_29_abwa",
      "highStockLimit": 100
    },
    {
      "id": "loja_vivendas_setor_o",
      "name": "VIVENDAS SETOR O",
      "network": "VIVENDAS",
      "rede": "5-VIVENDAS",
      "defaultRouteId": "rota_lindomar",
      "sundayRouteId": "rota_domingo_sobradinho",
      "routeOptions": [
        "rota_lindomar"
      ],
      "promoterId": "user_prom_vivendas_setor_o",
      "highStockLimit": 100
    },
    {
      "id": "loja_vivendas_eqnp",
      "name": "VIVENDAS SOL NASCENTE EQNP",
      "network": "VIVENDAS",
      "rede": "5-VIVENDAS",
      "defaultRouteId": "rota_lindomar",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [
        "rota_lindomar"
      ],
      "promoterId": "user_prom_vivendas_eqnp",
      "highStockLimit": 100
    },
    {
      "id": "loja_vivendas_vs",
      "name": "VIVENDAS VS",
      "network": "VIVENDAS",
      "rede": "5-VIVENDAS",
      "defaultRouteId": "rota_wanderson_luziania_nossa_kasa",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [
        "rota_wanderson_luziania_nossa_kasa"
      ],
      "promoterId": "user_prom_vivendas_vs",
      "highStockLimit": 100
    },
    {
      "id": "loja_ch_agua_limpa",
      "name": "CH. AGUA LIMPA",
      "network": "OUTROS",
      "defaultRouteId": "rota_gurupi_junior",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_gurupi_junior"
      ],
      "promoterId": "user_prom_ch_agua_limpa",
      "highStockLimit": 100,
      "rede": "OUTROS"
    },
    {
      "id": "loja_manifesto",
      "name": "MANIFESTO",
      "network": "OUTROS",
      "defaultRouteId": "rota_gurupi_junior",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_gurupi_junior",
        "rota_lem_iran"
      ],
      "promoterId": "user_prom_manifesto",
      "highStockLimit": 100,
      "rede": "OUTROS"
    },
    {
      "id": "loja_nossa_kasa_centro",
      "name": "NOSSA KASA CENTRO",
      "network": "MERCADOS ALEATÓRIOS",
      "defaultRouteId": "rota_wanderson_luziania_nossa_kasa",
      "sundayRouteId": null,
      "routeOptions": [
        "rota_wanderson_luziania_nossa_kasa"
      ],
      "promoterId": "user_prom_nossa_kasa_centro",
      "highStockLimit": 100,
      "rede": "11-MERCADOS ALEATÓRIOS"
    },
    {
      "id": "loja_tatico_aguas_lindas",
      "name": "TATICO AGUAS LINDAS",
      "network": "MERCADOS ALEATÓRIOS",
      "defaultRouteId": "rota_wanderson_aguas_lindas",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [
        "rota_wanderson_aguas_lindas"
      ],
      "promoterId": "user_prom_tatico_aguas_lindas",
      "highStockLimit": 100,
      "rede": "11-MERCADOS ALEATÓRIOS"
    },
    {
      "id": "loja_tatico_aguas_lindas_atacado",
      "name": "TATICO AGUAS LINDAS ATACADO",
      "network": "MERCADOS ALEATÓRIOS",
      "defaultRouteId": "rota_wanderson_aguas_lindas",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [
        "rota_wanderson_aguas_lindas"
      ],
      "promoterId": "user_prom_tatico_aguas_lindas_atacado",
      "highStockLimit": 100,
      "rede": "11-MERCADOS ALEATÓRIOS"
    },
    {
      "id": "loja_tatico_eptg",
      "name": "TATICO EPTG",
      "network": "MERCADOS ALEATÓRIOS",
      "defaultRouteId": "rota_domingo_sobradinho",
      "sundayRouteId": "rota_domingo_sobradinho",
      "routeOptions": [],
      "promoterId": "user_prom_tatico_eptg",
      "highStockLimit": 100,
      "rede": "11-MERCADOS ALEATÓRIOS"
    },
    {
      "id": "loja_tatico_luziania",
      "name": "TATICO LUZIANIA",
      "network": "MERCADOS ALEATÓRIOS",
      "defaultRouteId": "rota_domingo_luziania",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [],
      "promoterId": "user_prom_tatico_luziania",
      "highStockLimit": 100,
      "rede": "11-MERCADOS ALEATÓRIOS"
    },
    {
      "id": "loja_tatico_p_sul",
      "name": "TATICO P. SUL",
      "network": "MERCADOS ALEATÓRIOS",
      "defaultRouteId": "rota_domingo_luziania",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [],
      "promoterId": "user_prom_tatico_p_sul",
      "highStockLimit": 100,
      "rede": "11-MERCADOS ALEATÓRIOS"
    },
    {
      "id": "loja_tatico_recanto",
      "name": "TATICO RECANTO",
      "network": "MERCADOS ALEATÓRIOS",
      "defaultRouteId": "rota_wanderson_aguas_lindas",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [
        "rota_wanderson_aguas_lindas"
      ],
      "promoterId": "user_prom_tatico_recanto",
      "highStockLimit": 100,
      "rede": "11-MERCADOS ALEATÓRIOS"
    },
    {
      "id": "loja_tatico_samambaia_norte",
      "name": "TATICO SAMAMBAIA NORTE",
      "network": "MERCADOS ALEATÓRIOS",
      "defaultRouteId": "rota_wanderson_aguas_lindas",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [
        "rota_wanderson_aguas_lindas"
      ],
      "promoterId": "user_prom_tatico_samambaia_norte",
      "highStockLimit": 100,
      "rede": "11-MERCADOS ALEATÓRIOS"
    },
    {
      "id": "loja_tatico_samambaia_sul",
      "name": "TATICO SAMAMBAIA SUL",
      "network": "MERCADOS ALEATÓRIOS",
      "defaultRouteId": "rota_wanderson_aguas_lindas",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [
        "rota_wanderson_aguas_lindas"
      ],
      "promoterId": "user_prom_tatico_samambaia_sul",
      "highStockLimit": 100,
      "rede": "11-MERCADOS ALEATÓRIOS"
    },
    {
      "id": "loja_tatico_santa_maria",
      "name": "TATICO SANTA MARIA",
      "network": "MERCADOS ALEATÓRIOS",
      "defaultRouteId": "rota_domingo_luziania",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [],
      "promoterId": "user_prom_tatico_santa_maria",
      "highStockLimit": 100,
      "rede": "11-MERCADOS ALEATÓRIOS"
    },
    {
      "id": "loja_tatico_vicente_pires",
      "name": "TATICO VICENTE PIRES",
      "network": "MERCADOS ALEATÓRIOS",
      "defaultRouteId": "rota_domingo_sobradinho",
      "sundayRouteId": "rota_domingo_sobradinho",
      "routeOptions": [],
      "promoterId": "user_prom_tatico_vicente_pires",
      "highStockLimit": 100,
      "rede": "11-MERCADOS ALEATÓRIOS"
    },
    {
      "id": "loja_vivendas_abwa",
      "name": "VIVENDAS ABWA",
      "network": "VIVENDAS",
      "defaultRouteId": "rota_wanderson_aguas_lindas",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [
        "rota_wanderson_aguas_lindas"
      ],
      "promoterId": "user_prom_vivendas_abwa",
      "highStockLimit": 100,
      "rede": "5-VIVENDAS"
    },
    {
      "id": "loja_vivendas_qnl",
      "name": "VIVENDAS QNL",
      "network": "VIVENDAS",
      "defaultRouteId": "rota_domingo_sobradinho",
      "sundayRouteId": "rota_domingo_sobradinho",
      "routeOptions": [],
      "promoterId": "user_prom_vivendas_qnl",
      "highStockLimit": 100,
      "rede": "5-VIVENDAS"
    },
    {
      "id": "loja_vivendas_rct",
      "name": "VIVENDAS RCT",
      "network": "VIVENDAS",
      "defaultRouteId": "rota_wanderson_aguas_lindas",
      "sundayRouteId": "rota_domingo_luziania",
      "routeOptions": [
        "rota_wanderson_aguas_lindas"
      ],
      "promoterId": "user_prom_vivendas_rct",
      "highStockLimit": 100,
      "rede": "5-VIVENDAS"
    }
  ],
  "routes": [
    {
      "id": "rota_goiania_vinicius",
      "name": "Goiania - Vinicius",
      "driverId": "user_motor_vinicius"
    },
    {
      "id": "rota_goiania_maycon",
      "name": "Goiania - Maycon",
      "driverId": "user_motor_maycon"
    },
    {
      "id": "rota_goiania_alexsandro",
      "name": "Goiania - Alexsandro",
      "driverId": "user_motor_alexsandro"
    },
    {
      "id": "rota_goiania_edmar",
      "name": "Goiânia - Edmar / Itumbiara e Rio Verde",
      "driverId": "user_motor_edmar"
    },
    {
      "id": "rota_sem_motorista_fixo",
      "name": "Sem Motorista Fixo",
      "driverId": "user_motor_sem_motorista_fixo"
    },
    {
      "id": "rota_gabriel",
      "name": "Gabriel",
      "driverId": "user_motor_gabriel"
    },
    {
      "id": "rota_gurupi_junior",
      "name": "Gurupi - Junior",
      "driverId": "user_motor_junior"
    },
    {
      "id": "rota_lem_iran",
      "name": "Lem - Iran",
      "driverId": "user_motor_iran"
    },
    {
      "id": "rota_lindomar",
      "name": "Lindomar",
      "driverId": "user_motor_lindomar"
    },
    {
      "id": "rota_stanio",
      "name": "Stanio",
      "driverId": "user_motor_stanio"
    },
    {
      "id": "rota_wanderson_aguas_lindas",
      "name": "Wanderson - Aguas Lindas",
      "driverId": "user_motor_wanderson"
    },
    {
      "id": "rota_nilton",
      "name": "Nilton",
      "driverId": "user_motor_nilton"
    },
    {
      "id": "rota_wanderson_luziania_nossa_kasa",
      "name": "Wanderson - Luziania / Nossa Kasa",
      "driverId": "user_motor_wanderson"
    },
    {
      "id": "rota_domingo_luziania",
      "name": "Domingo - Luziania",
      "driverId": "user_motor_sem_motorista_definido"
    },
    {
      "id": "rota_domingo_sobradinho",
      "name": "Domingo - Sobradinho",
      "driverId": "user_motor_sem_motorista_definido"
    }
  ]
};

const VIEW_META = {
  dashboard: { title: 'Dashboard', subtitle: 'Visão geral da operação em tempo real' },
  saidas: { title: 'Saídas do CD', subtitle: 'Lançamento de caixas enviadas por loja e rota' },
  resumoEnvios: { title: 'Resumo de Envios', subtitle: 'Resumo das caixas lançadas pelo CD para as lojas' },
  entregasMotorista: { title: 'Entrega do Motorista', subtitle: 'Validação do total deixado na loja pelo motorista' },
  recebimentos: { title: 'Recebimento na Loja', subtitle: 'Confirmação do promotor com comparação automática' },
  recolhimentos: { title: 'Recolhimentos', subtitle: 'Registro do motorista com trava de saldo por loja' },
  caixasOcupadas: { title: 'Caixas Ocupadas', subtitle: 'Caixas em loja que não puderam ser recolhidas pelo motorista' },
  caixasLiberadas: { title: 'Caixas Liberadas', subtitle: 'Status das caixas liberadas ou ocupadas informado pela loja' },
  retornos: { title: 'Retornos no CD', subtitle: 'Conferência do total que voltou no caminhão' },
  estoque: { title: 'Estoque em Loja', subtitle: 'Saldos acumulados por loja com alertas de estoque alto' },
  inventario: { title: 'Inventário', subtitle: 'Correção oficial dos saldos físicos de caixas' },
  divergencias: { title: 'Divergências', subtitle: 'Erros identificados automaticamente e justificativas' },
  alertas: { title: 'Alertas', subtitle: 'Estoque crítico, lojas com saldo alto e pontos de atenção' },
  fechamento: { title: 'Fechamento do Dia', subtitle: 'Resumo diário, lojas pendentes e encerramento oficial da operação' },
  pendencias: { title: 'Pendências', subtitle: 'O que cada responsável precisa concluir antes do fechamento' },
  estornos: { title: 'Estornos e Correções', subtitle: 'Cancelar lançamentos errados sem apagar histórico e com auditoria' },
  rotas: { title: 'Rotas e Motoristas', subtitle: 'Rotas fixas, motoristas responsáveis e trocas temporárias controladas' },
  lojas: { title: 'Lojas', subtitle: 'Cadastro, filtro por rede e vínculo de lojas com rotas/motoristas' },
  cargaGoiania: { title: 'Carga Goiânia', subtitle: 'Validação da carga total do caminhão Vinicius/Sebastião' },
  distribuicaoGoiania: { title: 'Distribuição Goiânia', subtitle: 'Transbordo para Maycon, Alexsandro, Edmar, Vinicius ou reforço' },
  relatorios: { title: 'Relatórios', subtitle: 'Visão gerencial por loja, rota e usuário' },
  usuarios: { title: 'Usuários', subtitle: 'Contas de acesso e permissões do sistema' },
  configuracoes: { title: 'Configurações', subtitle: 'Parâmetros de estoque crítico, segurança e limites' },
};

const NAV_ITEMS = [
  { key: 'dashboard', label: 'Dashboard', roles: ['admin', 'cd', 'driver', 'promoter', 'viewer'] },
  { key: 'saidas', label: 'Saídas do CD', roles: ['admin', 'cd'] },
  { key: 'resumoEnvios', label: 'Resumo de Envios', roles: ['admin', 'cd'] },
  { key: 'entregasMotorista', label: 'Entrega do Motorista', roles: ['admin', 'driver'] },
  { key: 'recebimentos', label: 'Recebimento na Loja', roles: ['admin', 'promoter'] },
  { key: 'recolhimentos', label: 'Recolhimentos', roles: ['admin', 'driver'] },
  { key: 'caixasOcupadas', label: 'Caixas Ocupadas', roles: ['admin', 'driver'] },
  { key: 'caixasLiberadas', label: 'Caixas Liberadas', roles: ['admin', 'driver', 'promoter'] },
  { key: 'retornos', label: 'Retornos no CD', roles: ['admin', 'cd'] },
  { key: 'estoque', label: 'Estoque em Loja', roles: ['admin', 'driver', 'promoter'] },
  { key: 'inventario', label: 'Inventário', roles: ['admin', 'driver', 'promoter'] },
  { key: 'divergencias', label: 'Divergências', roles: ['admin', 'cd', 'driver'] },
  { key: 'alertas', label: 'Alertas', roles: ['admin', 'driver', 'promoter'] },
  { key: 'fechamento', label: 'Fechamento do Dia', roles: ['admin'] },
  { key: 'pendencias', label: 'Pendências', roles: ['admin', 'cd', 'driver', 'promoter'] },
  { key: 'estornos', label: 'Estornos e Correções', roles: ['admin'] },
  { key: 'rotas', label: 'Rotas e Motoristas', roles: ['admin'] },
  { key: 'lojas', label: 'Lojas', roles: ['admin'] },
  { key: 'cargaGoiania', label: 'Carga Goiânia', roles: ['admin', 'driver', 'cd'] },
  { key: 'distribuicaoGoiania', label: 'Distribuição Goiânia', roles: ['admin', 'driver', 'cd'] },
  { key: 'relatorios', label: 'Relatórios', roles: ['admin'] },
  { key: 'usuarios', label: 'Usuários', roles: ['admin'] },
  { key: 'configuracoes', label: 'Configurações', roles: ['admin'] },
];

const MOBILE_PRIORITY_BY_ROLE = {
  admin: ['dashboard', 'pendencias', 'fechamento', 'divergencias'],
  cd: ['dashboard', 'saidas', 'resumoEnvios', 'retornos'],
  driver: ['dashboard', 'entregasMotorista', 'recolhimentos', 'caixasOcupadas'],
  promoter: ['dashboard', 'recebimentos', 'caixasLiberadas', 'pendencias'],
  viewer: ['dashboard', 'estoque', 'divergencias'],
};

const MOBILE_ICON_BY_VIEW = {
  dashboard: '🏠',
  saidas: '📦',
  resumoEnvios: '📋',
  entregasMotorista: '🚚',
  recebimentos: '✅',
  recolhimentos: '↩️',
  caixasOcupadas: '🚧',
  caixasLiberadas: '✅',
  retornos: '🏭',
  estoque: '📊',
  inventario: '🧾',
  divergencias: '⚠️',
  alertas: '🔔',
  fechamento: '✅',
  pendencias: '📌',
  estornos: '↩️',
  rotas: '🗺️',
  lojas: '🏬',
  cargaGoiania: '🚛',
  distribuicaoGoiania: '🔁',
  relatorios: '📈',
  usuarios: '👥',
  configuracoes: '⚙️',
};

let appState = null;
let currentUser = null;
let passwordChangeUser = null;
let currentView = 'dashboard';
let backendMode = 'local';
const viewFilters = { resumoEnviosDate: todayStr(), resumoEnviosNetwork: '', resumoEnviosCdUserId: '', divergenciaOwner: '', divergenciaType: '', divergenciaDate: '', divergenciaSearch: '' };
let firebaseDb = null;
let firebaseRootRef = null;
let unsubscribeFirebase = null;
let dynamicCountsCache = { key: '', value: null };
let renderQueued = false;

function invalidateUiCaches() {
  dynamicCountsCache = { key: '', value: null };
}

function scheduleRender() {
  if (renderQueued) return;
  renderQueued = true;
  window.requestAnimationFrame(() => {
    renderQueued = false;
    render();
  });
}

const els = {
  loginScreen: document.getElementById('login-screen'),
  appShell: document.getElementById('app-shell'),
  loginForm: document.getElementById('login-form'),
  passwordChangePanel: document.getElementById('password-change-panel'),
  firstPasswordForm: document.getElementById('first-password-form'),
  passwordChangeUserName: document.getElementById('password-change-user-name'),
  firstNewPassword: document.getElementById('first-new-password'),
  firstConfirmPassword: document.getElementById('first-confirm-password'),
  loginUsername: document.getElementById('login-username'),
  loginPassword: document.getElementById('login-password'),
  sidebarNav: document.getElementById('sidebar-nav'),
  sidebar: document.getElementById('sidebar'),
  sidebarUserName: document.getElementById('sidebar-user-name'),
  sidebarUserRole: document.getElementById('sidebar-user-role'),
  logoutBtn: document.getElementById('logout-btn'),
  menuToggle: document.getElementById('menu-toggle'),
  sidebarClose: document.getElementById('sidebar-close'),
  pageTitle: document.getElementById('page-title'),
  pageSubtitle: document.getElementById('page-subtitle'),
  mainContent: document.getElementById('main-content'),
  mobileQuickNav: document.getElementById('mobile-quick-nav'),
  todayLabel: document.getElementById('today-label'),
  topbarUserName: document.getElementById('topbar-user-name'),
  topbarUserRole: document.getElementById('topbar-user-role'),
  toast: document.getElementById('toast'),
};

document.addEventListener('DOMContentLoaded', init);

async function init() {
  appState = await loadState();
  restoreSession();
  bindBaseEvents();
  render();
}

function bindBaseEvents() {
  els.loginForm.addEventListener('submit', handleLogin);
  els.firstPasswordForm?.addEventListener('submit', handleFirstPasswordChange);
  els.logoutBtn.addEventListener('click', logout);
  els.menuToggle.addEventListener('click', () => {
    els.sidebar.classList.toggle('open');
  });
  els.sidebarClose?.addEventListener('click', () => {
    els.sidebar.classList.remove('open');
  });
  window.addEventListener('storage', (event) => {
    if (backendMode === 'local' && event.key === STORAGE_KEY) {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        appState = ensureStateShape(JSON.parse(saved));
        invalidateUiCaches();
        scheduleRender();
      }
    }
  });
}

function showToast(message, type = 'ok') {
  els.toast.textContent = message;
  els.toast.style.background = type === 'error' ? '#d94b48' : type === 'warn' ? '#d88a1e' : '#173022';
  els.toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => els.toast.classList.remove('show'), 3000);
}

function todayStr(date = new Date()) {
  const parts = new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);
  const map = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${map.year}-${map.month}-${map.day}`;
}

function nowIso() {
  return new Date().toISOString();
}

function formatDateBR(dateStr) {
  if (!dateStr) return '-';
  const dt = new Date(`${dateStr}T12:00:00`);
  return dt.toLocaleDateString('pt-BR');
}

function formatDateTimeBR(iso) {
  if (!iso) return '-';
  const dt = new Date(iso);
  return dt.toLocaleDateString('pt-BR') + ' ' + dt.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

function weekdayName(index) {
  return ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'][index] || '';
}

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function sanitizeForFirebase(value) {
  const clean = (item) => {
    if (typeof item === 'undefined' || typeof item === 'function') return null;
    if (item === null) return null;
    if (Array.isArray(item)) return item.map((child) => clean(child));
    if (typeof item === 'object') {
      const output = {};
      Object.entries(item).forEach(([key, child]) => {
        if (typeof child === 'undefined' || typeof child === 'function') {
          output[key] = null;
        } else {
          output[key] = clean(child);
        }
      });
      return output;
    }
    return item;
  };
  return clean(value);
}

function firebaseErrorMessage(error) {
  const code = error && error.code ? String(error.code) : '';
  const message = error && error.message ? String(error.message) : '';
  if (code.includes('PERMISSION_DENIED') || message.toLowerCase().includes('permission_denied') || message.toLowerCase().includes('permission denied')) {
    return 'Sem permissão no Firebase. Confira as regras do Realtime Database.';
  }
  if (message.toLowerCase().includes('undefined')) {
    return 'Erro nos dados enviados ao Firebase. Corrigido para limpar campos vazios; atualize a página e tente novamente.';
  }
  return message ? `Erro ao salvar no Firebase: ${message}` : 'Erro ao salvar no Firebase.';
}

function createRouteSeedData() {
  const data = deepClone(ROUTE_DATASET);
  if (!data.routes.some((route) => route.id === SUPPORT_POINT_ROUTE_ID)) {
    data.routes.push({
      id: SUPPORT_POINT_ROUTE_ID,
      name: 'Ponto de Apoio - Fazenda Nerópolis',
      driverId: 'user_motor_vinicius',
    });
  }
  if (!data.stores.some((store) => store.id === SUPPORT_POINT_STORE_ID)) {
    data.stores.push({
      id: SUPPORT_POINT_STORE_ID,
      name: 'Fazenda Nerópolis - Sr. Carlinhos',
      network: 'PONTO DE APOIO',
      rede: 'PONTO DE APOIO',
      defaultRouteId: SUPPORT_POINT_ROUTE_ID,
      sundayRouteId: SUPPORT_POINT_ROUTE_ID,
      routeOptions: [SUPPORT_POINT_ROUTE_ID, GOIANIA_TRUNK_ROUTE_ID],
      promoterId: null,
      noPromoter: true,
      supportPoint: true,
      emptyBoxOnly: true,
      highStockLimit: 9999,
    });
  }
  return data;
}

function normalizeText(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}


function normalizeStoreLinkName(name) {
  let value = normalizeText(name);
  value = value.replace(/^atacadao dia a dia /, 'dia a dia ');
  value = value.replace(/^dd /, 'dia a dia ');
  value = value.replace(/^dia dia /, 'dia a dia ');
  value = value.replace(/^ch agua limpa$/, 'chacara agua limpa');
  value = value.replace(/^casa rocca mt lago norte filial$/, 'casa rocca lago norte filial');
  value = value.replace(/^casarocca trm matriz$/, 'casa rocca asa sul matriz');
  value = value.replace(/^cerra mix$/, 'cerramix supermercados');
  value = value.replace(/^loja /, '');
  return value;
}

function getSeparatorLinkForStore(store) {
  const key = normalizeStoreLinkName(store?.name || '');
  return SEPARATOR_STORE_LINKS.find((item) => item.storeKey === key) || null;
}

function getStoreSeparator(store) {
  return String(store?.separator || store?.separatorName || getSeparatorLinkForStore(store)?.separator || '').trim();
}

function storeNeedsCommercialConciliation(store) {
  const hasNetwork = !!String(store?.network || store?.rede || '').trim();
  const hasSeparator = !!getStoreSeparator(store);
  return !hasNetwork || !hasSeparator;
}

function uniqueSeparators(state = appState) {
  return [...new Set(getActiveStores(state)
    .map((store) => getStoreSeparator(store))
    .filter(Boolean))]
    .sort((a, b) => a.localeCompare(b, 'pt-BR'));
}

function buildSeparatorOptions(selectedValue = '', state = appState) {
  return uniqueSeparators(state)
    .map((separator) => `<option value="${escapeHtml(separator)}" ${separator === selectedValue ? 'selected' : ''}>${escapeHtml(separator)}</option>`)
    .join('');
}

function canUseSeparatorFilter(user) {
  return !user || user.role === 'admin' || canUserLaunchBoxType(user, 'folhagens');
}

function enrichStoreCommercialLinks(state) {
  (state?.stores || []).forEach((store) => {
    const link = getSeparatorLinkForStore(store);
    if (link) {
      if (!String(store.separator || '').trim()) store.separator = link.separator;
      if (!String(store.separatorRaw || '').trim()) store.separatorRaw = link.separatorRaw;
      if (!String(store.sourceRede || '').trim()) store.sourceRede = link.rede;
      if (!String(store.network || '').trim()) store.network = link.network;
      if (!String(store.rede || '').trim()) store.rede = link.rede;
    }
  });
  return state;
}


function toTitleCasePt(value) {
  const smallWords = new Set(['a', 'as', 'o', 'os', 'de', 'da', 'das', 'do', 'dos', 'e']);
  return String(value || '')
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .map((word, index) => {
      if (index > 0 && smallWords.has(word)) return word;
      if (/^t-?\d+$/i.test(word)) return word.toUpperCase();
      if (/^go-?\d+$/i.test(word)) return word.toUpperCase();
      if (/^df$/i.test(word)) return 'DF';
      if (/^go$/i.test(word)) return 'GO';
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

function formatStoreNameForUser(name) {
  let value = String(name || '').trim();
  value = value.replace(/^promotor\s*-\s*/i, '');
  value = value.replace(/^atacad[ãa]o\s+dia\s+a\s+dia\s*-\s*/i, 'DIA A DIA ');
  value = value.replace(/^dd\s+/i, 'DIA A DIA ');
  value = value.replace(/^dia\s+dia\s+/i, 'DIA A DIA ');
  value = value.replace(/\s*[-–]\s*/g, ' ');
  value = value.replace(/\s+/g, ' ').trim();
  const titled = toTitleCasePt(value);
  return titled.replace(/^Dia A Dia\b/, 'Dia a Dia');
}


function inferStoreNetwork(store) {
  const rawName = String(store?.name || '');
  const normalizedName = normalizeText(rawName);
  const normalizedNetwork = normalizeText(store?.network || store?.rede || '');

  const prefixRules = [
    { tests: ['atacadao dia a dia', 'dia a dia', 'dia dia', 'dd'], label: 'Dia a Dia' },
    { tests: ['bretas'], label: 'Bretas' },
    { tests: ['comper'], label: 'Comper' },
    { tests: ['fort'], label: 'Fort' },
    { tests: ['costa'], label: 'Costa' },
    { tests: ['assai'], label: 'Assaí' },
    { tests: ['vivendas'], label: 'Vivendas' },
    { tests: ['nossa kaza', 'nossa kasa'], label: 'Nossa Kaza' },
    { tests: ['tatico'], label: 'Tático' },
    { tests: ['economart'], label: 'Economart' },
    { tests: ['casa rocca'], label: 'Casa Rocca' },
    { tests: ['cerramix'], label: 'Cerramix' },
    { tests: ['supervendas'], label: 'Supervendas' },
    { tests: ['super jockey'], label: 'Super Jockey' },
    { tests: ['alvorada'], label: 'Alvorada' },
    { tests: ['manifesto'], label: 'Manifesto' },
    { tests: ['fazenda neropolis', 'ponto de apoio'], label: 'Ponto de Apoio' },
  ];

  for (const rule of prefixRules) {
    if (rule.tests.some((test) => normalizedName === test || normalizedName.startsWith(`${test} `))) {
      return rule.label;
    }
  }

  for (const rule of prefixRules) {
    if (rule.tests.some((test) => normalizedNetwork.includes(test))) {
      return rule.label;
    }
  }

  const fallback = String(store?.network || store?.rede || 'Sem rede')
    .replace(/^\s*\d+\s*[-–]\s*/g, '')
    .replace(/^rede\s+/i, '')
    .trim();
  return fallback ? toTitleCasePt(fallback).replace(/^Dia A Dia\b/, 'Dia a Dia') : 'Sem rede';
}

function getStoreUnitName(store) {
  let value = formatStoreNameForUser(store?.name || '');
  const network = inferStoreNetwork(store);
  const prefixes = [
    network,
    'Atacadão Dia a Dia',
    'Dia a Dia',
    'DD',
    'Bretas',
    'Costa',
    'Comper',
    'Fort',
    'Assaí',
    'Vivendas',
    'Nossa Kaza',
    'Nossa Kasa',
    'Tático',
    'Economart',
    'Casa Rocca',
    'Cerramix',
    'Supervendas',
    'Super Jockey',
  ].filter(Boolean);

  prefixes.forEach((prefix) => {
    const escaped = prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    value = value.replace(new RegExp(`^${escaped}\\s*[-–:]?\\s*`, 'i'), '');
  });

  value = value.replace(/\s+/g, ' ').trim();
  return value || formatStoreNameForUser(store?.name || '-');
}

function getStoreOptionLabel(store) {
  const fullName = formatStoreNameForUser(store?.name || '-');
  const network = inferStoreNetwork(store);
  const unit = getStoreUnitName(store);
  return `${fullName} — Rede ${network}, Loja ${unit}`;
}


const DIA_A_DIA_BANDEJAS_ORDER = [
  ['furnas'],
  ['riacho fundo', 'riacho'],
  ['formosa'],
  ['eptg'],
  ['gama'],
  ['novo gama'],
  ['aguas lindas'],
  ['ceilandia centro'],
  ['santo antonio'],
  ['luziania'],
  ['guara'],
  ['p sul', 'psul', 'ceilandia sul p sul'],
  ['samambaia'],
  ['planaltina go'],
  ['070', 'br 070'],
  ['ceilandia norte', 'cei norte'],
  ['park jk', 'park jk luziania'],
  ['recanto das emas', 'recanto'],
  ['taguatinga sul'],
  ['vicente pires rua 12', 'rua 12'],
  ['vicente pires rua 04', 'vicente pires rua 4', 'rua 04', 'rua 4'],
  ['sia'],
  ['sobradinho'],
  ['planaltina mestre d armas', 'mestre d armas', 'mestre darmas'],
  ['planaltina df'],
  ['aguas claras'],
  ['jardim botanico'],
  ['aparecida de goiania', 'aparecida goiania', 'aparecida'],
  ['cesar lates', 'cesar lattes'],
  ['rio verde'],
  ['horacio costa'],
  ['itumbiara'],
  ['gurupi'],
  ['goianesia'],
  ['lem ba', 'lem'],
];

function shouldUseDiaADiaBandejasOrder(user) {
  return !!user
    && user.role === 'cd'
    && canUserLaunchBoxType(user, 'bandejas')
    && !canUserLaunchBoxType(user, 'folhagens');
}

function diaADiaBandejasOrderIndex(store) {
  if (inferStoreNetwork(store) !== 'Dia a Dia') return Number.MAX_SAFE_INTEGER;
  const candidates = [
    getStoreUnitName(store),
    formatStoreNameForUser(store?.name || ''),
    store?.name || '',
  ].map(normalizeText).filter(Boolean);

  for (let index = 0; index < DIA_A_DIA_BANDEJAS_ORDER.length; index += 1) {
    const aliases = DIA_A_DIA_BANDEJAS_ORDER[index].map(normalizeText);
    if (candidates.some((candidate) => aliases.some((alias) => candidate === alias || candidate.startsWith(`${alias} `)))) {
      return index;
    }
  }
  return Number.MAX_SAFE_INTEGER;
}

function compareOutboundStoreOptions(a, b, user) {
  if (shouldUseDiaADiaBandejasOrder(user)) {
    const aIndex = diaADiaBandejasOrderIndex(a);
    const bIndex = diaADiaBandejasOrderIndex(b);
    if (aIndex !== bIndex) return aIndex - bIndex;
  }
  return getStoreOptionLabel(a).localeCompare(getStoreOptionLabel(b), 'pt-BR');
}

function buildNetworkOptions(selectedValue = '', state = appState) {
  return uniqueNetworks(state)
    .map((network) => `<option value="${escapeHtml(network)}" ${network === selectedValue ? 'selected' : ''}>${escapeHtml(network)}</option>`)
    .join('');
}

function hasOutboundForStoreDate(storeId, date = todayStr(), state = appState) {
  return state.movements.outbounds.some((item) =>
    isActiveMovement(item)
    && item.status !== 'historico'
    && item.storeId === storeId
    && item.date === date
  );
}

function getActiveOutboundForStoreDate(storeId, date = todayStr(), state = appState) {
  return state.movements.outbounds.find((item) =>
    isActiveMovement(item)
    && item.status !== 'historico'
    && item.storeId === storeId
    && item.date === date
  );
}

function getPositiveQtyBoxTypes(qty = emptyQty()) {
  return BOX_TYPES.filter((item) => safeInt(qty?.[item.key]) > 0).map((item) => item.key);
}

function getBoxTypeLabels(keys = []) {
  const lookup = Object.fromEntries(BOX_TYPES.map((item) => [item.key, item.label]));
  return keys.map((key) => lookup[key] || key).join(' e ');
}

function getPendingOutboundBoxTypesForStoreDate(storeId, date = todayStr(), user = currentUser, state = appState) {
  const allowedTypes = user?.role === 'cd'
    ? getAllowedBoxTypesForUser(user)
    : BOX_TYPES.map((item) => item.key);

  const existing = getActiveOutboundForStoreDate(storeId, date, state);
  if (!existing) return allowedTypes;

  const existingQty = sanitizeQty(existing.qty);
  return allowedTypes.filter((boxKey) => safeInt(existingQty[boxKey]) <= 0);
}

function storeHasPendingOutboundForUser(storeId, date = todayStr(), user = currentUser, state = appState) {
  return getPendingOutboundBoxTypesForStoreDate(storeId, date, user, state).length > 0;
}

function getOutboundQtyConflicts(storeId, date = todayStr(), qty = emptyQty(), state = appState) {
  const existing = getActiveOutboundForStoreDate(storeId, date, state);
  if (!existing) return [];
  const existingQty = sanitizeQty(existing.qty);
  const nextQty = sanitizeQty(qty);
  return BOX_TYPES
    .filter((item) => safeInt(nextQty[item.key]) > 0 && safeInt(existingQty[item.key]) > 0)
    .map((item) => item.key);
}

function buildCdLaunchRecord(qty, actor, date = todayStr()) {
  return {
    id: randomId('cdl'),
    date,
    qty: sanitizeQty(qty),
    createdBy: actor?.name || '',
    createdById: actor?.id || '',
    createdAt: nowIso(),
  };
}

function normalizeOutboundCdLaunches(outbound) {
  if (!outbound) return [];
  if (Array.isArray(outbound.cdLaunches) && outbound.cdLaunches.length) {
    return outbound.cdLaunches.map((launch) => ({
      ...launch,
      qty: sanitizeQty(launch.qty),
      date: launch.date || outbound.date,
      createdBy: launch.createdBy || outbound.createdBy || '',
      createdById: launch.createdById || outbound.createdById || '',
      createdAt: launch.createdAt || outbound.createdAt || nowIso(),
    }));
  }
  return [{
    id: randomId('cdl'),
    date: outbound.date,
    qty: sanitizeQty(outbound.qty),
    createdBy: outbound.createdBy || '',
    createdById: outbound.createdById || '',
    createdAt: outbound.createdAt || nowIso(),
  }];
}

function formatNameForInput(user, state = appState) {
  if (!user) return '';
  if (user.role === 'promoter' && user.storeId) {
    const store = state?.stores?.find((item) => item.id === user.storeId);
    if (store) return formatStoreNameForUser(store.name);
  }
  return String(user.name || '');
}

function normalizePromoterUserNames(state) {
  if (!state || !Array.isArray(state.users) || !Array.isArray(state.stores)) return;
  const storesById = Object.fromEntries(state.stores.map((store) => [store.id, store]));
  state.users.forEach((user) => {
    if (user?.role === 'promoter' && user.storeId && storesById[user.storeId]) {
      user.name = formatStoreNameForUser(storesById[user.storeId].name);
    }
  });
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function ensureReliefDriverSeedUser(state) {
  if (!state || !Array.isArray(state.users)) return state;
  const existing = state.users.find((user) => user.id === RELIEF_DRIVER_CAIO_USER.id || normalizeLoginValue(user.username) === normalizeLoginValue(RELIEF_DRIVER_CAIO_USER.username));
  if (existing) {
    existing.id = RELIEF_DRIVER_CAIO_USER.id;
    existing.name = existing.name || RELIEF_DRIVER_CAIO_USER.name;
    existing.username = existing.username || RELIEF_DRIVER_CAIO_USER.username;
    existing.role = 'driver';
    existing.isReliefDriver = true;
    delete existing.routeId;
    return state;
  }
  state.users.push(normalizeUserRecord({ ...RELIEF_DRIVER_CAIO_USER }));
  return state;
}

function applyRouteDataset(base) {
  const seedData = createRouteSeedData();
  const previousStocksById = base.storeStocks || {};
  const previousStocksByName = {};

  (base.stores || []).forEach((store) => {
    previousStocksByName[normalizeText(store.name)] = sanitizeQty(previousStocksById[store.id] || emptyQty());
  });

  const nextStocks = {};
  seedData.stores.forEach((store) => {
    nextStocks[store.id] = sanitizeQty(previousStocksById[store.id] || previousStocksByName[normalizeText(store.name)] || emptyQty());
  });

  const previousUsers = Array.isArray(base.users) ? base.users : [];
  const previousUsersById = Object.fromEntries(previousUsers.map((user) => [user.id, user]));
  const previousUsersByUsername = Object.fromEntries(previousUsers.map((user) => [normalizeLoginValue(user.username), user]));
  const seededIds = new Set(seedData.users.map((user) => user.id));
  const seededUsers = seedData.users.map((seedUser) => {
    const previousUser = previousUsersById[seedUser.id] || previousUsersByUsername[normalizeLoginValue(seedUser.username)];
    const shouldForceSeedPassword = seedUser.id === 'user_admin';
    return normalizeUserRecord({
      ...seedUser,
      password: shouldForceSeedPassword ? seedUser.password : (previousUser?.password || seedUser.password),
      passwordChangedAt: shouldForceSeedPassword ? null : (previousUser?.passwordChangedAt || null),
      forcePasswordChange: shouldForceSeedPassword
        ? seedUser.forcePasswordChange
        : (previousUser?.forcePasswordChange === false ? false : previousUser?.forcePasswordChange ?? seedUser.forcePasswordChange),
    });
  });
  const customUsers = previousUsers
    .filter((user) => user?.id && !seededIds.has(user.id))
    .map(normalizeUserRecord);
  base.users = [...seededUsers, ...customUsers];
  ensureReliefDriverSeedUser(base);
  base.routes = seedData.routes;
  base.stores = seedData.stores;
  enrichStoreCommercialLinks(base);
  normalizePromoterUserNames(base);
  base.storeStocks = nextStocks;
  base.routeDatasetVersion = ROUTE_DATASET_VERSION;
  return base;
}

function safeInt(value) {
  const num = Number(value || 0);
  return Number.isFinite(num) && num >= 0 ? Math.floor(num) : 0;
}

function signedInt(value) {
  const num = Number(value || 0);
  return Number.isFinite(num) ? Math.trunc(num) : 0;
}

function emptyQty() {
  return Object.fromEntries(BOX_TYPES.map((item) => [item.key, 0]));
}

function sanitizeQty(raw) {
  const base = emptyQty();
  BOX_TYPES.forEach((item) => {
    base[item.key] = safeInt(raw?.[item.key]);
  });

  const hasNewKeys = BOX_TYPES.some((item) => raw && Object.prototype.hasOwnProperty.call(raw, item.key));
  if (!hasNewKeys && raw && LEGACY_BOX_KEYS.some((key) => Object.prototype.hasOwnProperty.call(raw, key))) {
    base.folhagens = LEGACY_BOX_KEYS.reduce((acc, key) => acc + safeInt(raw?.[key]), 0);
    base.bandejas = safeInt(raw?.bandejas);
  }

  return base;
}

function sumQty(qty) {
  return BOX_TYPES.reduce((acc, item) => acc + safeInt(qty?.[item.key]), 0);
}

function sumSignedQty(qty) {
  return BOX_TYPES.reduce((acc, item) => acc + signedInt(qty?.[item.key]), 0);
}

function addQty(a, b) {
  const out = emptyQty();
  BOX_TYPES.forEach((item) => {
    out[item.key] = safeInt(a?.[item.key]) + safeInt(b?.[item.key]);
  });
  return out;
}

function subQty(a, b) {
  const out = emptyQty();
  BOX_TYPES.forEach((item) => {
    out[item.key] = safeInt(a?.[item.key]) - safeInt(b?.[item.key]);
  });
  return out;
}

function hasNegativeQty(qty) {
  return BOX_TYPES.some((item) => safeInt(qty?.[item.key]) < 0);
}

function qtyExceeds(a, b) {
  return BOX_TYPES.some((item) => safeInt(a?.[item.key]) > safeInt(b?.[item.key]));
}

function buildQtyFromTotal(total, referenceQty = emptyQty()) {
  let remaining = safeInt(total);
  const out = emptyQty();
  BOX_TYPES.forEach((item) => {
    const available = safeInt(referenceQty?.[item.key]);
    const take = Math.min(available, remaining);
    out[item.key] = take;
    remaining -= take;
  });
  if (remaining > 0 && BOX_TYPES[0]) {
    out[BOX_TYPES[0].key] += remaining;
  }
  return out;
}

function qtyDiff(a, b) {
  const diff = {};
  BOX_TYPES.forEach((item) => {
    diff[item.key] = safeInt(a?.[item.key]) - safeInt(b?.[item.key]);
  });
  return diff;
}

function applySignedQty(base, diff) {
  const out = emptyQty();
  BOX_TYPES.forEach((item) => {
    out[item.key] = safeInt(base?.[item.key]) + signedInt(diff?.[item.key]);
  });
  return out;
}

function hasSignedNegativeQty(qty) {
  return BOX_TYPES.some((item) => signedInt(qty?.[item.key]) < 0);
}

function hasQtyDifference(a, b) {
  return BOX_TYPES.some((item) => safeInt(a?.[item.key]) !== safeInt(b?.[item.key]));
}

function qtyToRows(qty) {
  return BOX_TYPES.map((item) => `<div class="kpi-row"><span>${item.label}</span><strong>${safeInt(qty?.[item.key])}</strong></div>`).join('');
}

function formatQtyCompact(qty) {
  return BOX_TYPES.map((item) => `${item.key === 'folhagens' ? 'F' : 'B'}: ${safeInt(qty?.[item.key])}`).join(' | ');
}

function formatSignedQtyCompact(qty) {
  return BOX_TYPES.map((item) => {
    const value = signedInt(qty?.[item.key]);
    return `${item.key === 'folhagens' ? 'F' : 'B'}: ${value > 0 ? '+' : ''}${value}`;
  }).join(' | ');
}

function renderQtyChangeSummary(previousQty = emptyQty(), countedQty = emptyQty(), diffQty = null) {
  const diff = diffQty || qtyDiff(countedQty, previousQty);
  return BOX_TYPES.map((item) => {
    const before = safeInt(previousQty?.[item.key]);
    const after = safeInt(countedQty?.[item.key]);
    const change = signedInt(diff?.[item.key]);
    return `${item.key === 'folhagens' ? 'Folhagens' : 'Bandejas'}: ${before} → ${after} (${change > 0 ? '+' : ''}${change})`;
  }).join('<br>');
}

function qtyInputs(prefix, values = emptyQty(), readonly = false) {
  return `
    <div class="qty-grid">
      ${BOX_TYPES.map((item) => `
        <div class="qty-box">
          <label for="${prefix}-${item.key}">${item.label}</label>
          <input ${readonly ? 'readonly' : ''} type="number" min="0" step="1" id="${prefix}-${item.key}" name="${item.key}" value="${safeInt(values?.[item.key])}" />
        </div>
      `).join('')}
    </div>
  `;
}

function qtyInputsForUser(prefix, user, values = emptyQty()) {
  return `
    <div class="qty-grid">
      ${BOX_TYPES.map((item) => {
        const allowed = canUserLaunchBoxType(user, item.key);
        return `
          <div class="qty-box ${allowed ? '' : 'disabled-box'}">
            <label for="${prefix}-${item.key}">${item.label}</label>
            <input ${allowed ? '' : 'disabled'} type="number" min="0" step="1" id="${prefix}-${item.key}" name="${item.key}" value="${allowed ? safeInt(values?.[item.key]) : 0}" />
            ${allowed ? '' : '<small class="muted">Sem permissão para lançar</small>'}
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function readQtyFromForm(form, prefix) {
  const result = emptyQty();
  BOX_TYPES.forEach((item) => {
    result[item.key] = safeInt(form.querySelector(`#${prefix}-${item.key}`)?.value);
  });
  return result;
}

function getUserById(id, state = appState) {
  return state.users.find((user) => user.id === id) || null;
}

function isReliefDriver(user) {
  return !!user && user.role === 'driver' && user.isReliefDriver === true;
}

function getReliefDriverAssignment(user = currentUser, date = todayStr(), state = appState) {
  if (!isReliefDriver(user)) return null;
  return (state?.reliefDriverAssignments || []).find((item) =>
    item
    && item.userId === user.id
    && item.date === date
    && !item.canceledAt
  ) || null;
}

function getEffectiveDriverRouteId(user = currentUser, date = todayStr(), state = appState) {
  if (!user || user.role !== 'driver') return null;
  if (isReliefDriver(user)) return getReliefDriverAssignment(user, date, state)?.routeId || null;
  return user.routeId || null;
}

function getReliefAssignmentForRoute(routeId, date = todayStr(), state = appState) {
  if (!routeId) return null;
  return (state?.reliefDriverAssignments || []).find((item) =>
    item
    && item.routeId === routeId
    && item.date === date
    && !item.canceledAt
  ) || null;
}

function getReliefDriverStatusLabel(user = currentUser, date = todayStr(), state = appState) {
  if (!isReliefDriver(user)) return '';
  const assignment = getReliefDriverAssignment(user, date, state);
  if (!assignment) return 'Folguista: rota do dia pendente';
  return `Folguista: ${getRouteById(assignment.routeId, state)?.name || assignment.routeName || 'rota selecionada'} em ${formatDateBR(date)}`;
}

function normalizeLoginValue(value) {
  return String(value || '').trim().replace(/_/g, '').toLowerCase();
}

function userHasEditableTarget(role) {
  return role === 'promoter' || role === 'driver';
}

function usernameExists(username, ignoredUserId, state = appState) {
  const normalized = normalizeLoginValue(username);
  return state.users.some((user) => normalizeLoginValue(user.username) === normalized && user.id !== ignoredUserId);
}

function normalizeUserRecord(user) {
  const normalized = { ...user };
  normalized.username = normalizeLoginValue(normalized.username);
  normalized.password = String(normalized.password || INITIAL_PASSWORD);
  normalized.passwordChangedAt = normalized.passwordChangedAt || null;
  normalized.forcePasswordChange = normalized.forcePasswordChange === false ? false : !normalized.passwordChangedAt && normalized.password === INITIAL_PASSWORD;
  normalized.allowedViews = normalizeAllowedViewsForRole(normalized.role, normalized.allowedViews);
  normalized.allowedBoxTypes = normalizeAllowedBoxTypesForUser(normalized.role, normalized.allowedBoxTypes);
  if (normalized.role !== 'cd') delete normalized.allowedBoxTypes;
  if (isReliefDriver(normalized)) {
    delete normalized.routeId;
  }
  return normalized;
}

function getDefaultViewPermissionsForRole(role) {
  return NAV_ITEMS
    .filter((item) => item.roles.includes(role))
    .map((item) => item.key);
}

function normalizeAllowedViewsForRole(role, allowedViews) {
  const defaults = getDefaultViewPermissionsForRole(role);
  if (!Array.isArray(allowedViews) || !allowedViews.length) return null;
  const allowedSet = new Set(defaults);
  const views = [...new Set(allowedViews)].filter((view) => allowedSet.has(view));
  if (allowedSet.has('dashboard') && !views.includes('dashboard')) views.unshift('dashboard');
  return views.length ? views : null;
}

function normalizeAllowedBoxTypesForUser(role, allowedBoxTypes) {
  if (role !== 'cd') return null;
  const allKeys = BOX_TYPES.map((item) => item.key);
  const selected = Array.isArray(allowedBoxTypes)
    ? [...new Set(allowedBoxTypes)].filter((key) => allKeys.includes(key))
    : allKeys;
  return selected.length ? selected : allKeys;
}

function getAllowedBoxTypesForUser(user) {
  if (!user || user.role !== 'cd') return BOX_TYPES.map((item) => item.key);
  return normalizeAllowedBoxTypesForUser('cd', user.allowedBoxTypes);
}

function canUserLaunchBoxType(user, boxKey) {
  if (!user || user.role !== 'cd') return true;
  return getAllowedBoxTypesForUser(user).includes(boxKey);
}

function getAllowedBoxTypesLabel(user) {
  const keys = getAllowedBoxTypesForUser(user);
  return BOX_TYPES.filter((item) => keys.includes(item.key)).map((item) => item.label).join(' e ') || 'Nenhuma caixa liberada';
}

function renderBoxTypePermissionChecks(userId, allowedBoxTypes = BOX_TYPES.map((item) => item.key), className = 'user-box-permission') {
  const allowed = new Set(normalizeAllowedBoxTypesForUser('cd', allowedBoxTypes));
  return `
    <div class="permissions-grid compact">
      ${BOX_TYPES.map((item) => `
        <label class="permission-check">
          <input type="checkbox" class="${className}" data-user-id="${userId || ''}" value="${item.key}" ${allowed.has(item.key) ? 'checked' : ''} />
          <span>${item.label}</span>
        </label>
      `).join('')}
    </div>
  `;
}

function getEffectiveAllowedViews(user) {
  if (!user) return [];
  const defaults = getDefaultViewPermissionsForRole(user.role);
  if (user.role === 'admin') return defaults;
  return normalizeAllowedViewsForRole(user.role, user.allowedViews) || defaults;
}

function mustChangePassword(user) {
  if (!user) return false;
  return user.forcePasswordChange === true || (!user.passwordChangedAt && user.password === INITIAL_PASSWORD);
}

function canAccessView(viewKey, user = currentUser) {
  const item = NAV_ITEMS.find((nav) => nav.key === viewKey);
  if (!item || !user || !item.roles.includes(user.role)) return false;
  if (viewKey === 'cargaGoiania' && user.role === 'driver' && !isGoianiaTrunkUser(user)) return false;
  if (viewKey === 'distribuicaoGoiania' && user.role === 'driver' && !isGoianiaTrunkUser(user)) return false;
  if (user.role !== 'admin' && Array.isArray(user.allowedViews) && user.allowedViews.length && !getEffectiveAllowedViews(user).includes(viewKey)) return false;
  return true;
}

function getFirstAllowedView(user = currentUser) {
  return NAV_ITEMS.find((item) => canAccessView(item.key, user))?.key || 'dashboard';
}

function getUserAccessTarget(user, state = appState) {
  if (!user) return '-';
  if (isReliefDriver(user)) return getReliefDriverStatusLabel(user, todayStr(), state);
  if (user.storeId) return getStoreById(user.storeId, state)?.name || '-';
  if (user.routeId) return getRouteById(user.routeId, state)?.name || '-';
  if (user.role === 'admin') return 'ADM geral';
  if (user.role === 'cd') return 'CD';
  if (user.role === 'viewer') return 'Gestão / Visualização';
  return '-';
}

function getStoreById(id, state = appState) {
  return state.stores.find((store) => store.id === id) || null;
}

function isActiveStore(store) {
  return !!store && store.active !== false && store.inactive !== true && !store.deletedAt;
}

function getActiveStores(state = appState) {
  return (state?.stores || []).filter(isActiveStore);
}

function getRouteById(id, state = appState) {
  return state.routes.find((route) => route.id === id) || null;
}

function isBretasStore(store) {
  return normalizeText(store?.network || store?.rede || store?.name).includes('bretas');
}

function storeHasFixedPromoter(store) {
  if (!store || store.supportPoint) return false;
  if (typeof store.hasFixedPromoter === 'boolean') return store.hasFixedPromoter;
  if (store.noPromoter === true) return false;
  if (isBretasStore(store)) return false;
  return true;
}

function getStoreValidationMode(store) {
  if (!store || store.supportPoint) return 'driver_only';
  if (['driver_promoter', 'driver_only', 'promoter_only'].includes(store.validationMode)) return store.validationMode;
  return storeHasFixedPromoter(store) ? 'driver_promoter' : 'driver_only';
}

function storeRequiresPromoter(store) {
  const mode = getStoreValidationMode(store);
  return mode === 'driver_promoter' || mode === 'promoter_only';
}

function storeRequiresDriver(store) {
  const mode = getStoreValidationMode(store);
  return mode === 'driver_promoter' || mode === 'driver_only';
}

function getStoreValidationLabel(store) {
  const mode = getStoreValidationMode(store);
  if (mode === 'promoter_only') return 'Somente promotor';
  if (mode === 'driver_only') return 'Somente motorista';
  return 'Motorista + promotor';
}

function getStoreValidationTagClass(store) {
  const mode = getStoreValidationMode(store);
  if (mode === 'promoter_only') return 'info';
  if (mode === 'driver_only') return 'warn';
  return 'ok';
}

function isGoianiaRoute(routeId) {
  return GOIANIA_ROUTE_IDS.includes(routeId);
}

const PENDENCY_OWNER_RULES = {
  cd: {
    key: 'cd',
    name: 'Matheus Reis',
    area: 'Produção',
    userId: 'user_admin_matheus_reis',
    username: 'matheusreis',
    reason: 'Saída do CD ou lançamento incorreto.',
  },
  driverDelivery: {
    key: 'driverDelivery',
    name: 'Roberto Cesar',
    area: 'Logística',
    userId: 'user_admin_roberto_cesar',
    username: 'robertocesar',
    reason: 'Motorista não validou entrega ou lançou na data errada.',
  },
  promoterReceipt: {
    key: 'promoterReceipt',
    name: 'Mércia Alves',
    area: 'Promotores',
    userId: 'user_wxv7tlng',
    username: 'merciaalves',
    reason: 'Promotor não confirmou o recebimento das caixas na loja.',
  },
  goiania: {
    key: 'goiania',
    name: 'Paulo César',
    area: 'Goiânia',
    userId: 'user_i2h4fbit',
    username: 'paulocesar',
    reason: 'Pendência vinculada à operação de Goiânia.',
  },
  admin: {
    key: 'admin',
    name: 'ADM',
    area: 'Gestão',
    userId: null,
    username: '',
    reason: 'Pendência administrativa.',
  },
};

function findOwnerUser(owner, state = appState) {
  if (!owner) return null;
  const normalizedName = normalizeText(owner.name);
  const normalizedUsername = normalizeText(owner.username);
  return (state.users || []).find((user) =>
    (owner.userId && user.id === owner.userId)
    || (normalizedUsername && normalizeText(user.username) === normalizedUsername)
    || (normalizedName && normalizeText(user.name) === normalizedName)
  ) || null;
}

function isGoianiaContext(context = {}, state = appState) {
  if (context.routeId && (isGoianiaRoute(context.routeId) || context.routeId === SUPPORT_POINT_ROUTE_ID)) return true;
  if (context.storeId === SUPPORT_POINT_STORE_ID) return true;
  const store = context.storeId ? getStoreById(context.storeId, state) : null;
  return !!store && (
    store.defaultRouteId === SUPPORT_POINT_ROUTE_ID
    || store.sundayRouteId === SUPPORT_POINT_ROUTE_ID
    || isGoianiaRoute(store.defaultRouteId)
    || isGoianiaRoute(store.sundayRouteId)
  );
}

function getPendencyOwner(kind, context = {}, state = appState) {
  const owner = isGoianiaContext(context, state)
    ? PENDENCY_OWNER_RULES.goiania
    : (PENDENCY_OWNER_RULES[kind] || PENDENCY_OWNER_RULES.admin);
  const user = findOwnerUser(owner, state);
  return {
    ownerKey: owner.key,
    ownerName: owner.name,
    ownerArea: owner.area,
    ownerUserId: user?.id || owner.userId || null,
    ownerReason: owner.reason,
  };
}

function withPendencyOwner(item, kind, context = {}, state = appState) {
  return {
    ...item,
    ...getPendencyOwner(kind, context || item, state),
  };
}

function getDivergenceOwnerKind(div) {
  if (!div) return 'admin';
  if (div.type === 'recebimento_loja') return 'promoterReceipt';
  if (div.type === 'entrega_motorista_loja' || div.type === 'retorno_cd' || div.type === 'frete_goiania_retorno_vinicius') return 'driverDelivery';
  if (div.type === 'carga_goiania') return 'goiania';
  if (div.type === 'inventario_cd') return 'cd';
  if (div.type === 'inventario_loja') return 'promoterReceipt';
  return 'admin';
}

function getDivergenceOwnerInfo(div, state = appState) {
  return getPendencyOwner(getDivergenceOwnerKind(div), div, state);
}

function getDivergenceOwnerOptions() {
  return ['cd', 'driverDelivery', 'promoterReceipt', 'goiania', 'admin']
    .map((key) => PENDENCY_OWNER_RULES[key])
    .filter(Boolean);
}

function isGoianiaTrunkUser(user, date = todayStr(), state = appState) {
  return !!user && (
    GOIANIA_TRUNK_DRIVER_IDS.includes(user.id)
    || user.routeId === GOIANIA_TRUNK_ROUTE_ID
    || getEffectiveDriverRouteId(user, date, state) === GOIANIA_TRUNK_ROUTE_ID
  );
}

function getGoianiaOutbounds(date = todayStr(), state = appState) {
  return state.movements.outbounds.filter((item) => isActiveMovement(item) && item.date === date && isGoianiaRoute(item.routeId) && item.status !== 'historico');
}

function getGoianiaExpectedQty(date = todayStr(), state = appState) {
  return getGoianiaOutbounds(date, state).reduce((acc, item) => addQty(acc, item.qty), emptyQty());
}

function getVisibleOutboundSummaryRows(date = todayStr(), state = appState, user = currentUser) {
  return state.movements.outbounds
    .filter((item) => isActiveMovement(item) && item.status !== 'historico')
    .flatMap((item) => {
      const launches = normalizeOutboundCdLaunches(item);
      return launches.map((launch) => ({
        ...item,
        id: `${item.id}_${launch.id || randomId('cdl')}`,
        outboundId: item.id,
        qty: sanitizeQty(launch.qty),
        date: launch.date || item.date,
        createdBy: launch.createdBy || item.createdBy || '',
        createdById: launch.createdById || item.createdById || '',
        createdAt: launch.createdAt || item.createdAt || '',
      }));
    })
    .filter((item) => !date || item.date === date)
    .filter((item) => {
      if (!user || user.role === 'admin') return true;
      if (user.role === 'cd') {
        return item.createdById ? item.createdById === user.id : item.createdBy === user.name;
      }
      return isMovementVisibleToUser(item, user, state);
    });
}

function getGoianiaTransferQty(date = todayStr(), state = appState) {
  return (state.movements.goianiaTransfers || [])
    .filter((item) => item.date === date)
    .reduce((acc, item) => addQty(acc, item.qty), emptyQty());
}

function isSupportPointStore(storeId, state = appState) {
  const store = getStoreById(storeId, state);
  return !!store && (!!store.supportPoint || store.id === SUPPORT_POINT_STORE_ID);
}

function getGoianiaFreightPendingPickups(date = todayStr(), driverId, state = appState) {
  return (state.movements.pickups || []).filter((item) =>
    isActiveMovement(item) &&
    item.date === date &&
    item.driverId === driverId &&
    isGoianiaRoute(item.routeId) &&
    !item.goianiaFreightReturnId &&
    !item.returnBatchId &&
    !item.supportPointDropId
  );
}

function getGoianiaFreightPendingPickupTotal(date = todayStr(), driverId, state = appState) {
  return getGoianiaFreightPendingPickups(date, driverId, state)
    .reduce((acc, item) => acc + safeInt(item.totalQty ?? sumQty(item.qty)), 0);
}

function getPendingGoianiaFreightReturnsForCd(date = todayStr(), trunkDriverId, state = appState) {
  return (state.movements.goianiaFreightReturns || []).filter((item) =>
    isActiveMovement(item) &&
    item.date === date &&
    item.receivedByDriverId === trunkDriverId &&
    !item.cdReturnBatchId
  );
}

function getSupportPointDropTotalForDriver(date = todayStr(), driverId, state = appState) {
  return (state.movements.supportPointMovements || [])
    .filter((item) => isActiveMovement(item) && item.date === date && item.driverId === driverId && item.action === 'drop' && !item.cdReturnBatchId)
    .reduce((acc, item) => acc + safeInt(item.totalQty ?? sumQty(item.qty)), 0);
}

function getRouteDriverName(routeId, state = appState) {
  const route = getRouteById(routeId, state);
  return getUserById(route?.driverId, state)?.name || '-';
}

function uniqueNetworks(state = appState) {
  return [...new Set(getActiveStores(state).map((store) => inferStoreNetwork(store)))].sort((a, b) => a.localeCompare(b, 'pt-BR'));
}

function slugId(value) {
  return normalizeText(value).replace(/\s+/g, '_').replace(/^_+|_+$/g, '') || Math.random().toString(36).slice(2, 8);
}

function getStoreStock(storeId, state = appState) {
  return sanitizeQty(state.storeStocks[storeId] || emptyQty());
}

function getCdStock(state = appState) {
  return sanitizeQty(state.cdStock);
}

function ensureStateShape(state) {
  const base = state || createSeedState();
  const seedData = createRouteSeedData();

  base.cdStock = sanitizeQty(base.cdStock);
  base.storeStocks = base.storeStocks || {};
  base.movements = base.movements || {};
  base.movements.outbounds = Array.isArray(base.movements.outbounds) ? base.movements.outbounds : [];
  base.movements.receipts = Array.isArray(base.movements.receipts) ? base.movements.receipts : [];
  base.movements.pickups = Array.isArray(base.movements.pickups) ? base.movements.pickups : [];
  base.movements.returns = Array.isArray(base.movements.returns) ? base.movements.returns : [];
  base.movements.driverDeliveries = Array.isArray(base.movements.driverDeliveries) ? base.movements.driverDeliveries : [];
  base.movements.goianiaLoads = Array.isArray(base.movements.goianiaLoads) ? base.movements.goianiaLoads : [];
  base.movements.goianiaTransfers = Array.isArray(base.movements.goianiaTransfers) ? base.movements.goianiaTransfers : [];
  base.movements.goianiaFreightReturns = Array.isArray(base.movements.goianiaFreightReturns) ? base.movements.goianiaFreightReturns : [];
  base.movements.supportPointMovements = Array.isArray(base.movements.supportPointMovements) ? base.movements.supportPointMovements : [];
  base.movements.routeExceptions = Array.isArray(base.movements.routeExceptions) ? base.movements.routeExceptions : [];
  base.movements.inventories = Array.isArray(base.movements.inventories) ? base.movements.inventories : [];
  base.movements.occupiedBoxes = Array.isArray(base.movements.occupiedBoxes) ? base.movements.occupiedBoxes : [];
  base.movements.releasedBoxes = Array.isArray(base.movements.releasedBoxes) ? base.movements.releasedBoxes : [];
  base.reliefDriverAssignments = Array.isArray(base.reliefDriverAssignments) ? base.reliefDriverAssignments : [];

  base.movements.outbounds = base.movements.outbounds.map((item) => ({
    ...item,
    qty: sanitizeQty(item.qty),
    receivedQty: item.receivedQty ? sanitizeQty(item.receivedQty) : null,
  }));
  base.movements.receipts = base.movements.receipts.map((item) => ({ ...item, qty: sanitizeQty(item.qty) }));
  base.movements.driverDeliveries = base.movements.driverDeliveries.map((item) => ({
    ...item,
    expectedQty: sanitizeQty(item.expectedQty),
    actualQty: item.actualQty ? sanitizeQty(item.actualQty) : null,
    totalDelivered: safeInt(item.totalDelivered),
  }));
  base.movements.goianiaLoads = base.movements.goianiaLoads.map((item) => ({
    ...item,
    expectedQty: sanitizeQty(item.expectedQty),
    actualQty: sanitizeQty(item.actualQty),
  }));
  base.movements.goianiaTransfers = base.movements.goianiaTransfers.map((item) => ({
    ...item,
    qty: sanitizeQty(item.qty),
  }));
  base.movements.goianiaFreightReturns = base.movements.goianiaFreightReturns.map((item) => ({
    ...item,
    expectedQty: sanitizeQty(item.expectedQty),
    actualQty: sanitizeQty(item.actualQty),
    expectedTotal: safeInt(item.expectedTotal ?? sumQty(item.expectedQty)),
    totalReceived: safeInt(item.totalReceived ?? sumQty(item.actualQty)),
  }));
  base.movements.supportPointMovements = base.movements.supportPointMovements.map((item) => ({
    ...item,
    qty: sanitizeQty(item.qty),
    totalQty: safeInt(item.totalQty ?? sumQty(item.qty)),
    action: item.action || 'drop',
    status: item.status || 'registrado',
  }));
  base.movements.pickups = base.movements.pickups.map((item) => ({ ...item, qty: sanitizeQty(item.qty) }));
  base.movements.returns = base.movements.returns.map((item) => ({
    ...item,
    qty: sanitizeQty(item.qty),
    expectedQty: sanitizeQty(item.expectedQty),
  }));
  base.movements.inventories = base.movements.inventories.map((item) => ({
    ...item,
    previousQty: sanitizeQty(item.previousQty),
    countedQty: sanitizeQty(item.countedQty),
    diffQty: item.diffQty || qtyDiff(sanitizeQty(item.countedQty), sanitizeQty(item.previousQty)),
  }));
  base.movements.occupiedBoxes = base.movements.occupiedBoxes.map((item) => ({
    ...item,
    totalQty: safeInt(item.totalQty),
    status: item.status || 'aberta',
  }));
  base.movements.releasedBoxes = base.movements.releasedBoxes.map((item) => ({
    ...item,
    totalInStore: safeInt(item.totalInStore),
    freeQty: safeInt(item.freeQty),
    occupiedQty: safeInt(item.occupiedQty),
    status: item.status || 'registrado',
  }));
  base.reliefDriverAssignments = base.reliefDriverAssignments.map((item) => ({
    ...item,
    date: item.date || todayStr(),
    routeId: item.routeId || '',
    userId: item.userId || '',
    selectedAt: item.selectedAt || item.createdAt || nowIso(),
  }));

  base.divergences = Array.isArray(base.divergences) ? base.divergences : [];
  base.audit = Array.isArray(base.audit) ? base.audit : [];
  base.dayClosings = Array.isArray(base.dayClosings) ? base.dayClosings : [];
  base.mandatoryInventories = Array.isArray(base.mandatoryInventories) ? base.mandatoryInventories.map((item) => ({
    ...item,
    storeIds: Array.isArray(item.storeIds) ? item.storeIds : [],
    completedStoreIds: Array.isArray(item.completedStoreIds) ? item.completedStoreIds : [],
    canceledStoreIds: Array.isArray(item.canceledStoreIds) ? item.canceledStoreIds : [],
    status: item.status || 'ativa',
  })) : [];
  base.settings = base.settings || {
    safetyMargin: 50,
    criticalShortagePercent: 0,
    manualBaselineByWeekday: { 0: 260, 1: 340, 2: 420, 3: 470, 4: 500, 5: 610, 6: 380 },
  };
  base.settings.manualBaselineByWeekday = base.settings.manualBaselineByWeekday || { 0: 260, 1: 340, 2: 420, 3: 470, 4: 500, 5: 610, 6: 380 };
  base.lastUpdatedAt = base.lastUpdatedAt || nowIso();

  if (base.routeDatasetVersion !== ROUTE_DATASET_VERSION) {
    applyRouteDataset(base);
  }

  base.users = Array.isArray(base.users) && base.users.length ? base.users.map(normalizeUserRecord) : seedData.users.map(normalizeUserRecord);
  ensureReliefDriverSeedUser(base);
  base.stores = Array.isArray(base.stores) && base.stores.length ? base.stores : seedData.stores;
  base.routes = Array.isArray(base.routes) && base.routes.length ? base.routes : seedData.routes;
  enrichStoreCommercialLinks(base);
  normalizePromoterUserNames(base);

  base.divergences = base.divergences.map((div) => {
    if (!div) return div;
    const out = {
      ...div,
      expectedQty: sanitizeQty(div.expectedQty),
      actualQty: sanitizeQty(div.actualQty),
      differenceQty: div.differenceQty || qtyDiff(sanitizeQty(div.actualQty), sanitizeQty(div.expectedQty)),
    };
    if ((out.type === 'recebimento_loja' || out.type === 'retorno_cd') && out.driverId && !out.responsibleUserId) {
      out.responsibleUserId = out.driverId;
      out.responsibleRole = 'driver';
      out.requiresResponsibleExplanation = true;
    }
    return out;
  });

  const validStoreIds = new Set(base.stores.map((store) => store.id));
  const validRouteIds = new Set(base.routes.map((route) => route.id));

  base.stores.forEach((store) => {
    base.storeStocks[store.id] = sanitizeQty(base.storeStocks[store.id] || emptyQty());
    if (!store.highStockLimit) store.highStockLimit = 100;
    const link = getSeparatorLinkForStore(store);
    if (link && !String(store.separator || '').trim()) store.separator = link.separator;
    if (link && !String(store.sourceRede || '').trim()) store.sourceRede = link.rede;
    if (typeof store.hasFixedPromoter === 'boolean') {
      store.noPromoter = !store.hasFixedPromoter || !!store.supportPoint;
    } else {
      store.noPromoter = !!store.noPromoter || !!store.supportPoint || isBretasStore(store);
    }
    if (!['driver_promoter', 'driver_only', 'promoter_only'].includes(store.validationMode)) {
      store.validationMode = store.noPromoter ? 'driver_only' : 'driver_promoter';
    }
    if (store.validationMode === 'driver_only') store.noPromoter = true;
    if (store.validationMode === 'driver_promoter' || store.validationMode === 'promoter_only') store.noPromoter = false;
    store.hasFixedPromoter = !store.noPromoter;
    if (store.noPromoter) store.promoterId = null;
  });

  base.movements.outbounds = base.movements.outbounds.filter((item) => (!item.storeId || validStoreIds.has(item.storeId)) && (!item.routeId || validRouteIds.has(item.routeId)));
  base.movements.receipts = base.movements.receipts.filter((item) => !item.storeId || validStoreIds.has(item.storeId));
  base.movements.pickups = base.movements.pickups.filter((item) => (!item.storeId || validStoreIds.has(item.storeId)) && (!item.routeId || validRouteIds.has(item.routeId)));
  base.movements.returns = base.movements.returns.filter((item) => !item.routeId || validRouteIds.has(item.routeId));
  base.movements.routeExceptions = base.movements.routeExceptions.filter((item) => (!item.storeId || validStoreIds.has(item.storeId)) && (!item.newRouteId || validRouteIds.has(item.newRouteId)));
  base.movements.occupiedBoxes = base.movements.occupiedBoxes.filter((item) => (!item.storeId || validStoreIds.has(item.storeId)) && (!item.routeId || validRouteIds.has(item.routeId)));
  base.movements.releasedBoxes = base.movements.releasedBoxes.filter((item) => (!item.storeId || validStoreIds.has(item.storeId)) && (!item.routeId || validRouteIds.has(item.routeId)));
  const validUserIds = new Set(base.users.map((user) => user.id));
  base.reliefDriverAssignments = base.reliefDriverAssignments.filter((item) => (!item.userId || validUserIds.has(item.userId)) && (!item.routeId || validRouteIds.has(item.routeId)));
  base.divergences = base.divergences.filter((item) => (!item.storeId || validStoreIds.has(item.storeId)) && (!item.routeId || validRouteIds.has(item.routeId)));

  return base;
}

function randomId(prefix) {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}`;
}

function createSeedHistoryOutbounds() {
  return [];
}

function createSeedState() {
  const seedData = createRouteSeedData();
  const storeStocks = {};
  seedData.stores.forEach((store) => {
    storeStocks[store.id] = emptyQty();
  });

  return {
    routeDatasetVersion: ROUTE_DATASET_VERSION,
    users: seedData.users.map(normalizeUserRecord),
    stores: seedData.stores,
    routes: seedData.routes,
    cdStock: emptyQty(),
    storeStocks,
    movements: {
      outbounds: createSeedHistoryOutbounds(),
      receipts: [],
      pickups: [],
      returns: [],
      driverDeliveries: [],
      goianiaLoads: [],
      goianiaTransfers: [],
      goianiaFreightReturns: [],
      supportPointMovements: [],
      routeExceptions: [],
      inventories: [],
      occupiedBoxes: [],
      releasedBoxes: [],
    },
    reliefDriverAssignments: [],
    divergences: [],
    audit: [],
    dayClosings: [],
    mandatoryInventories: [],
    settings: {
      safetyMargin: 50,
      criticalShortagePercent: 0,
      manualBaselineByWeekday: { 0: 260, 1: 340, 2: 420, 3: 470, 4: 500, 5: 610, 6: 380 },
    },
    lastUpdatedAt: nowIso(),
  };
}

async function loadState() {
  if (APP_CONFIG.USE_FIREBASE && APP_CONFIG.FIREBASE_CONFIG && window.firebase) {
    try {
      if (!firebase.apps.length) {
        firebase.initializeApp(APP_CONFIG.FIREBASE_CONFIG);
      }
      firebaseDb = firebase.database();
      firebaseRootRef = firebaseDb.ref(APP_CONFIG.FIREBASE_PATH);
      backendMode = 'firebase';

      const snap = await firebaseRootRef.get();
      let state = snap.exists() ? ensureStateShape(snap.val()) : createSeedState();
      if (!snap.exists()) {
        await firebaseRootRef.set(sanitizeForFirebase(state));
      }

      let firstFirebaseSnapshot = true;
      unsubscribeFirebase = firebaseRootRef.on('value', (snapshot) => {
        appState = ensureStateShape(snapshot.val() || createSeedState());
        invalidateUiCaches();
        if (firstFirebaseSnapshot) {
          firstFirebaseSnapshot = false;
          return;
        }
        scheduleRender();
      });

      return state;
    } catch (error) {
      console.error('Falha ao iniciar Firebase, usando modo local.', error);
      showToast('Firebase não configurado. Sistema carregado em modo local.', 'warn');
      backendMode = 'local';
    }
  }

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    return ensureStateShape(JSON.parse(saved));
  }

  const seed = createSeedState();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(seed));
  return seed;
}

function saveLocalState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

async function persistMutation(mutationType, payload, successMessage, actorOverride = null, options = {}) {
  const actor = actorOverride || currentUser;
  const simulatedBase = ensureStateShape(deepClone(appState));
  const simulation = applyMutation(simulatedBase, mutationType, payload, actor, false);
  if (!simulation.ok) {
    showToast(simulation.error, 'error');
    return { ok: false, error: simulation.error };
  }

  if (backendMode === 'firebase' && firebaseRootRef) {
    try {
      const result = await firebaseRootRef.transaction((current) => {
        const base = ensureStateShape(current || createSeedState());
        const applied = applyMutation(base, mutationType, payload, actor, true);
        return applied.ok ? sanitizeForFirebase(applied.state) : undefined;
      });
      if (!result.committed) {
        showToast('Não foi possível concluir a ação. Atualize a tela e tente novamente.', 'error');
        return { ok: false };
      }
      appState = ensureStateShape(result.snapshot.val());
    } catch (error) {
      console.error('Erro ao salvar no Firebase:', error);
      const message = firebaseErrorMessage(error);
      showToast(message, 'error');
      return { ok: false, error: message };
    }
  } else {
    appState = simulation.state;
    saveLocalState(appState);
  }

  invalidateUiCaches();
  showToast(successMessage || 'Ação salva com sucesso.');
  if (!options.skipRender) render();
  return { ok: true };
}

function applyMutation(state, type, payload, user, commitAudit = true) {
  state = ensureStateShape(state);
  const actor = user || { id: 'system', name: 'Sistema', role: 'system' };
  const audit = (module, action, details) => {
    if (!commitAudit) return;
    state.audit.unshift({
      id: randomId('audit'),
      userId: actor.id,
      userName: actor.name,
      module,
      action,
      details,
      createdAt: nowIso(),
    });
    state.audit = state.audit.slice(0, 1200);
  };
  const openDivergence = (divergence) => {
    state.divergences.unshift({
      id: randomId('div'),
      status: 'aberta',
      createdAt: nowIso(),
      createdBy: actor.name,
      ...divergence,
    });
  };

  const getCdReturnExpectation = (returnPayload) => {
    const returnDate = returnPayload.date || todayStr();
    const returnDriver = getUserById(returnPayload.driverId, state);
    const isGoianiaTrunkReturn = returnPayload.routeId === GOIANIA_TRUNK_ROUTE_ID && isGoianiaTrunkUser(returnDriver);
    const pendingPickups = state.movements.pickups.filter((item) =>
      isActiveMovement(item) &&
      item.date === returnDate &&
      item.routeId === returnPayload.routeId &&
      item.driverId === returnPayload.driverId &&
      !item.returnBatchId &&
      !item.supportPointDropId
    );
    const pendingFreightReturns = isGoianiaTrunkReturn ? getPendingGoianiaFreightReturnsForCd(returnDate, returnPayload.driverId, state) : [];
    const pendingSupportDrops = isGoianiaTrunkReturn ? (state.movements.supportPointMovements || []).filter((item) =>
      isActiveMovement(item) &&
      item.date === returnDate &&
      item.driverId === returnPayload.driverId &&
      item.action === 'drop' &&
      !item.cdReturnBatchId
    ) : [];
    const supportDropTotal = pendingSupportDrops.reduce((acc, item) => acc + safeInt(item.totalQty ?? sumQty(item.qty)), 0);
    const pickupQty = pendingPickups.reduce((acc, item) => addQty(acc, item.qty), emptyQty());
    const freightReturnTotal = pendingFreightReturns.reduce((acc, item) => acc + safeInt(item.totalReceived), 0);
    const referenceQty = addQty(pickupQty, buildQtyFromTotal(freightReturnTotal, emptyQty()));
    const expectedTotal = Math.max(0, sumQty(pickupQty) + freightReturnTotal - supportDropTotal);
    const expectedQty = buildQtyFromTotal(expectedTotal, referenceQty);
    return {
      date: returnDate,
      pendingPickups,
      pendingFreightReturns,
      pendingSupportDrops,
      supportDropTotal,
      expectedQty,
      expectedTotal,
    };
  };

  const confirmCdReturnInState = (returnPayload, options = {}) => {
    const totalQty = safeInt(returnPayload.totalQty ?? sumQty(sanitizeQty(returnPayload.qty)));
    if (totalQty <= 0) return { ok: false, error: 'Informe o total de caixas que chegou no caminhão.' };

    const expectation = getCdReturnExpectation(returnPayload);
    const { date, pendingPickups, pendingFreightReturns, pendingSupportDrops, supportDropTotal, expectedQty, expectedTotal } = expectation;
    if (expectedTotal <= 0) return { ok: false, error: 'Não há recolhimentos pendentes para esta rota e motorista.' };

    const qty = buildQtyFromTotal(totalQty, expectedQty);
    state.cdStock = addQty(getCdStock(state), qty);

    const returnBatchId = randomId('ret');
    state.movements.returns.unshift({
      id: returnBatchId,
      date,
      routeId: returnPayload.routeId,
      driverId: returnPayload.driverId,
      qty,
      totalOnly: true,
      totalQty,
      expectedQty,
      expectedTotal,
      pickupsCount: pendingPickups.length,
      freightReturnsCount: pendingFreightReturns.length,
      supportDropTotal,
      createdBy: actor.name,
      createdById: actor.id,
      createdAt: nowIso(),
      justification: returnPayload.justification || '',
      source: options.source || 'individual',
      batchNote: options.batchNote || '',
    });

    pendingPickups.forEach((item) => {
      item.returnBatchId = returnBatchId;
    });
    pendingFreightReturns.forEach((item) => {
      item.cdReturnBatchId = returnBatchId;
    });
    pendingSupportDrops.forEach((item) => {
      item.cdReturnBatchId = returnBatchId;
    });

    if (expectedTotal !== totalQty) {
      openDivergence({
        type: 'retorno_cd',
        date,
        routeId: returnPayload.routeId,
        driverId: returnPayload.driverId,
        storeId: null,
        expectedQty,
        actualQty: qty,
        expectedTotal,
        actualTotal: totalQty,
        justification: returnPayload.justification || 'Diferença identificada entre o total recolhido nas lojas e o total que chegou ao CD.',
        originJustification: returnPayload.justification || '',
        responsibleUserId: returnPayload.driverId,
        responsibleRole: 'driver',
        requiresResponsibleExplanation: true,
        responsibleExplanation: '',
        responsibleExplanationAt: null,
        responsibleExplanationBy: null,
      });
    }

    if (options.audit !== false) {
      audit('Retornos no CD', 'Conferência de retorno', `Rota ${getRouteById(returnPayload.routeId, state)?.name || '-'} retornou ${totalQty} caixas ao CD.`);
    }

    return { ok: true, returnBatchId, totalQty, expectedTotal };
  };

  const divergenceMatchesOutbound = (divergence, outbound, types = []) => {
    if (!divergence || !outbound || !types.includes(divergence.type)) return false;
    if (divergence.outboundId && divergence.outboundId === outbound.id) return true;
    return !divergence.outboundId
      && divergence.date === outbound.date
      && divergence.storeId === outbound.storeId
      && (!divergence.routeId || divergence.routeId === outbound.routeId);
  };

  const closeDivergencesForOutbound = (outbound, types = [], reason = 'Recalculada após correção de lançamento.') => {
    state.divergences.forEach((divergence) => {
      if (divergence.status !== 'aberta') return;
      if (!divergenceMatchesOutbound(divergence, outbound, types)) return;
      divergence.status = 'resolvida';
      divergence.resolvedAt = nowIso();
      divergence.resolvedBy = actor.name;
      divergence.resolution = reason;
      divergence.resolutionType = 'recalculada_por_correcao';
    });
  };

  const recalculateOutboundDivergences = (outbound, reason = 'Recalculada após correção de lançamento.') => {
    if (!outbound) return;
    const store = getStoreById(outbound.storeId, state);
    const expectedQty = sanitizeQty(outbound.qty);

    closeDivergencesForOutbound(outbound, ['entrega_motorista_loja', 'recebimento_loja'], reason);

    const delivery = state.movements.driverDeliveries.find((item) => item.id === outbound.driverDeliveryId);
    if (delivery) {
      delivery.expectedQty = expectedQty;
      delivery.hasDivergence = hasQtyDifference(expectedQty, delivery.actualQty);
      if (delivery.hasDivergence) {
        openDivergence({
          type: 'entrega_motorista_loja',
          outboundId: outbound.id,
          driverDeliveryId: delivery.id,
          date: delivery.date || outbound.date,
          routeId: outbound.routeId,
          driverId: delivery.driverId || outbound.driverId,
          storeId: outbound.storeId,
          expectedQty,
          actualQty: sanitizeQty(delivery.actualQty),
          differenceQty: qtyDiff(delivery.actualQty, expectedQty),
          justification: reason || `Motorista informou ${sumQty(delivery.actualQty)} caixas, mas o correto esperado para a loja era ${sumQty(expectedQty)}.`,
          originJustification: delivery.notes || '',
          responsibleUserId: delivery.driverId || outbound.driverId,
          responsibleRole: 'driver',
          requiresResponsibleExplanation: true,
          responsibleExplanation: '',
          responsibleExplanationAt: null,
          responsibleExplanationBy: null,
        });
      }
    }

    const receipt = state.movements.receipts.find((item) => item.id === outbound.receiptId);
    if (receipt && storeRequiresPromoter(store)) {
      if (hasQtyDifference(expectedQty, receipt.qty)) {
        openDivergence({
          type: 'recebimento_loja',
          outboundId: outbound.id,
          receiptId: receipt.id,
          date: receipt.date || outbound.date,
          routeId: outbound.routeId,
          driverId: outbound.driverId,
          storeId: outbound.storeId,
          expectedQty,
          actualQty: sanitizeQty(receipt.qty),
          differenceQty: qtyDiff(receipt.qty, expectedQty),
          justification: reason || 'Diferença identificada entre o CD e o recebimento da loja.',
          originJustification: receipt.justification || '',
          responsibleUserId: outbound.driverId,
          responsibleRole: 'driver',
          requiresResponsibleExplanation: true,
          responsibleExplanation: '',
          responsibleExplanationAt: null,
          responsibleExplanationBy: null,
        });
      }
    }
  };

  if (type === 'CHANGE_PASSWORD') {
    const target = getUserById(payload.userId, state);
    if (!target) return { ok: false, error: 'Usuário não encontrado.' };
    if (actor.role !== 'admin' && actor.id !== target.id) {
      return { ok: false, error: 'Usuário sem permissão para alterar esta senha.' };
    }
    const newPassword = String(payload.password || '').trim();
    if (newPassword.length < 6) return { ok: false, error: 'A nova senha precisa ter pelo menos 6 caracteres.' };
    if (newPassword === target.username) return { ok: false, error: 'A senha não pode ser igual ao usuário de login.' };
    if (newPassword === target.password) return { ok: false, error: 'A nova senha precisa ser diferente da senha atual.' };
    if (newPassword === INITIAL_PASSWORD) return { ok: false, error: 'A nova senha não pode ser a senha inicial padrão.' };

    target.password = newPassword;
    target.passwordChangedAt = nowIso();
    target.forcePasswordChange = false;
    target.initialPasswordChanged = true;

    audit('Usuários', 'Senha alterada', actor.id === target.id ? `Senha inicial alterada por ${target.name}.` : `Senha de ${target.name} alterada pelo ADM.`);
  }

  if (type === 'SET_RELIEF_DRIVER_ROUTE') {
    const target = getUserById(payload.userId || actor.id, state);
    if (!target || !isReliefDriver(target)) return { ok: false, error: 'Motorista folguista não encontrado.' };
    if (actor.role !== 'admin' && actor.id !== target.id) {
      return { ok: false, error: 'Somente o próprio folguista ou o ADM pode definir essa rota.' };
    }

    const date = payload.date || todayStr();
    if (actor.role === 'driver' && date !== todayStr()) {
      return { ok: false, error: 'Motorista folguista só pode definir a rota do dia atual.' };
    }

    const route = getRouteById(payload.routeId, state);
    if (!route) return { ok: false, error: 'Selecione uma rota válida.' };

    const existing = getReliefDriverAssignment(target, date, state);
    if (existing && actor.role !== 'admin') {
      return { ok: false, error: `A rota do dia já está definida para ${getRouteById(existing.routeId, state)?.name || existing.routeName || 'rota selecionada'}. Apenas o ADM pode alterar.` };
    }

    if (existing && actor.role === 'admin') {
      existing.canceledAt = nowIso();
      existing.canceledBy = actor.name;
      existing.canceledById = actor.id;
      existing.cancelReason = String(payload.reason || 'Alteração feita pelo ADM.').trim();
    }

    state.reliefDriverAssignments.unshift({
      id: randomId('relief'),
      date,
      userId: target.id,
      userName: target.name,
      routeId: route.id,
      routeName: route.name,
      selectedAt: nowIso(),
      selectedBy: actor.name,
      selectedById: actor.id,
      reason: String(payload.reason || '').trim(),
    });

    audit('Motorista Folguista', existing ? 'Rota do dia alterada' : 'Rota do dia definida', `${target.name} ficou vinculado à rota ${route.name} em ${formatDateBR(date)}.`);
  }

  if (type === 'CREATE_USER') {
    if (actor.role !== 'admin') return { ok: false, error: 'Somente o ADM pode criar usuários.' };

    const name = String(payload.name || '').trim();
    const role = String(payload.role || '').trim();
    const username = normalizeLoginValue(payload.username);
    const password = String(payload.password || INITIAL_PASSWORD).trim() || INITIAL_PASSWORD;

    if (name.length < 2) return { ok: false, error: 'Informe o nome do usuário.' };
    if (!ROLE_LABELS[role]) return { ok: false, error: 'Selecione um perfil válido.' };
    if (username.length < 3) return { ok: false, error: 'O login precisa ter pelo menos 3 caracteres.' };
    if (username.includes('_')) return { ok: false, error: 'O login não pode conter underline (_).' };
    if (usernameExists(username, null, state)) return { ok: false, error: 'Já existe um usuário com este login.' };
    if (password.length < 6) return { ok: false, error: 'A senha inicial precisa ter pelo menos 6 caracteres.' };

    const newUser = normalizeUserRecord({
      id: randomId('user'),
      name,
      username,
      password,
      role,
      forcePasswordChange: true,
      passwordChangedAt: null,
      initialPasswordChanged: false,
      allowedBoxTypes: role === 'cd' ? normalizeAllowedBoxTypesForUser('cd', payload.allowedBoxTypes) : null,
    });

    if (role === 'promoter') {
      const store = getStoreById(payload.storeId, state);
      if (!store) return { ok: false, error: 'Selecione a loja vinculada ao promotor.' };
      newUser.storeId = store.id;
      newUser.name = formatStoreNameForUser(store.name);
    }

    if (role === 'driver') {
      const route = getRouteById(payload.routeId, state);
      if (!route) return { ok: false, error: 'Selecione a rota vinculada ao motorista.' };
      newUser.routeId = route.id;
    }

    if (role !== 'cd') delete newUser.allowedBoxTypes;

    state.users.push(newUser);
    audit('Usuários', 'Novo usuário criado', `${name} foi criado com perfil ${ROLE_LABELS[role]} e login ${username}.`);
  }

  if (type === 'UPDATE_USER_LOGIN') {
    if (actor.role !== 'admin') return { ok: false, error: 'Somente o ADM pode alterar login de usuários.' };
    const target = getUserById(payload.userId, state);
    if (!target) return { ok: false, error: 'Usuário não encontrado.' };

    const username = normalizeLoginValue(payload.username);
    if (username.length < 3) return { ok: false, error: 'O login precisa ter pelo menos 3 caracteres.' };
    if (username.includes('_')) return { ok: false, error: 'O login não pode conter underline (_).' };
    if (usernameExists(username, target.id, state)) return { ok: false, error: 'Já existe outro usuário com este login.' };

    const previousUsername = target.username;
    target.username = username;
    audit('Usuários', 'Login alterado', `${target.name} teve o login alterado de ${previousUsername} para ${username}.`);
  }


  if (type === 'UPDATE_USER_ACCOUNT') {
    if (actor.role !== 'admin') return { ok: false, error: 'Somente o ADM pode alterar usuários.' };
    const target = getUserById(payload.userId, state);
    if (!target) return { ok: false, error: 'Usuário não encontrado.' };

    const name = String(payload.name || '').trim();
    const role = String(payload.role || target.role).trim();
    const username = normalizeLoginValue(payload.username);

    if (name.length < 2) return { ok: false, error: 'Informe o nome do usuário.' };
    if (!ROLE_LABELS[role]) return { ok: false, error: 'Selecione um perfil válido.' };
    if (actor.id === target.id && role !== 'admin') {
      return { ok: false, error: 'Você não pode remover o perfil ADM do seu próprio usuário.' };
    }
    if (username.length < 3) return { ok: false, error: 'O login precisa ter pelo menos 3 caracteres.' };
    if (username.includes('_')) return { ok: false, error: 'O login não pode conter underline (_).' };
    if (usernameExists(username, target.id, state)) return { ok: false, error: 'Já existe outro usuário com este login.' };

    const previousSummary = `${target.name} / ${ROLE_LABELS[target.role] || target.role} / ${getUserAccessTarget(target, state)} / ${target.username}`;

    target.name = role === 'promoter' && payload.storeId ? formatStoreNameForUser(getStoreById(payload.storeId, state)?.name || name) : name;
    target.role = role;
    target.username = username;
    target.allowedViews = normalizeAllowedViewsForRole(role, payload.allowedViews);
    target.allowedBoxTypes = normalizeAllowedBoxTypesForUser(role, payload.allowedBoxTypes);
    if (role !== 'cd') delete target.allowedBoxTypes;

    delete target.storeId;
    delete target.routeId;

    if (role === 'promoter') {
      const store = getStoreById(payload.storeId, state);
      if (!store) return { ok: false, error: 'Selecione a loja vinculada ao promotor.' };
      target.storeId = store.id;
      target.name = formatStoreNameForUser(store.name);
      if (!store.noPromoter) store.promoterId = target.id;
    }

    if (role === 'driver') {
      if (isReliefDriver(target)) {
        target.isReliefDriver = true;
        delete target.routeId;
      } else {
        const route = getRouteById(payload.routeId, state);
        if (!route) return { ok: false, error: 'Selecione a rota vinculada ao motorista.' };
        target.routeId = route.id;
      }
    } else {
      delete target.isReliefDriver;
    }

    normalizePromoterUserNames(state);
    const nextSummary = `${target.name} / ${ROLE_LABELS[target.role] || target.role} / ${getUserAccessTarget(target, state)} / ${target.username}`;
    audit('Usuários', 'Usuário atualizado', `${previousSummary} → ${nextSummary}.`);
  }

  if (type === 'DELETE_USERS') {
    if (actor.role !== 'admin') return { ok: false, error: 'Somente o ADM pode excluir usuários.' };

    const userIds = Array.from(new Set((payload.userIds || []).map((id) => String(id || '').trim()).filter(Boolean)));
    const reason = String(payload.reason || '').trim();

    if (!userIds.length) return { ok: false, error: 'Selecione pelo menos um usuário para excluir.' };
    if (!reason) return { ok: false, error: 'Informe o motivo da exclusão dos usuários.' };
    if (userIds.includes(actor.id)) return { ok: false, error: 'Você não pode excluir o usuário que está logado.' };

    const targets = state.users.filter((item) => userIds.includes(item.id));
    if (!targets.length) return { ok: false, error: 'Nenhum usuário válido foi selecionado.' };

    const remainingAdmins = state.users.filter((item) => item.role === 'admin' && !userIds.includes(item.id));
    if (!remainingAdmins.length) return { ok: false, error: 'Não é possível excluir todos os usuários ADM.' };

    const targetNames = targets.map((item) => `${item.name} (${item.username})`).join(', ');
    const deletedIds = new Set(targets.map((item) => item.id));

    state.stores.forEach((store) => {
      if (store.promoterId && deletedIds.has(store.promoterId)) {
        store.promoterId = null;
      }
    });

    state.users = state.users.filter((item) => !deletedIds.has(item.id));
    audit('Usuários', 'Usuários excluídos', `${targetNames}. Motivo: ${reason}.`);
  }

  if (type === 'CREATE_STORE') {
    if (actor.role !== 'admin') return { ok: false, error: 'Somente o ADM pode cadastrar lojas.' };
    const name = String(payload.name || '').trim().toUpperCase();
    const network = String(payload.network || '').trim().toUpperCase();
    const route = getRouteById(payload.routeId, state);
    if (name.length < 2) return { ok: false, error: 'Informe o nome da loja.' };
    if (!network) return { ok: false, error: 'Informe a rede da loja.' };
    if (!route) return { ok: false, error: 'Selecione a rota/motorista da loja.' };
    if (state.stores.some((store) => normalizeText(store.name) === normalizeText(name))) {
      return { ok: false, error: 'Já existe uma loja cadastrada com este nome.' };
    }
    const id = `loja_${slugId(name)}`;
    const hasFixedPromoterInput = String(payload.hasFixedPromoter || '').trim();
    const requestedValidationMode = ['driver_promoter', 'driver_only', 'promoter_only'].includes(payload.validationMode) ? payload.validationMode : (hasFixedPromoterInput === 'no' ? 'driver_only' : 'driver_promoter');
    const noPromoter = requestedValidationMode === 'driver_only' || hasFixedPromoterInput === 'no' || payload.noPromoter === true;
    state.stores.push({
      id,
      name,
      network,
      rede: payload.rede || network,
      defaultRouteId: route.id,
      sundayRouteId: payload.sundayRouteId || null,
      routeOptions: [route.id],
      promoterId: null,
      noPromoter,
      hasFixedPromoter: !noPromoter,
      validationMode: noPromoter ? 'driver_only' : requestedValidationMode,
      highStockLimit: safeInt(payload.highStockLimit) || 100,
      separator: String(payload.separator || '').trim() || null,
      createdAt: nowIso(),
      createdBy: actor.name,
    });
    state.storeStocks[id] = emptyQty();
    audit('Lojas', 'Nova loja cadastrada', `${name} foi vinculada à rota ${route.name} / motorista ${getRouteDriverName(route.id, state)}.`);
  }

  if (type === 'UPDATE_STORE_LINKS') {
    if (actor.role !== 'admin') return { ok: false, error: 'Somente o ADM pode conciliar loja, rede e separador.' };
    const store = getStoreById(payload.storeId, state);
    if (!store) return { ok: false, error: 'Selecione uma loja válida.' };
    const network = String(payload.network || '').trim();
    const separator = String(payload.separator || '').trim();
    const hasFixedPromoterInput = String(payload.hasFixedPromoter || '').trim();
    const validationModeInput = ['driver_promoter', 'driver_only', 'promoter_only'].includes(payload.validationMode) ? payload.validationMode : (hasFixedPromoterInput === 'no' ? 'driver_only' : getStoreValidationMode(store));
    if (!network) return { ok: false, error: 'Informe a rede da loja.' };
    if (!separator) return { ok: false, error: 'Informe o separador da loja.' };
    if (!['yes', 'no'].includes(hasFixedPromoterInput)) return { ok: false, error: 'Informe se a loja possui promotor fixo.' };

    const previous = `Rede ${store.network || store.rede || '-'} / Separador ${getStoreSeparator(store) || '-'} / Promotor fixo ${storeHasFixedPromoter(store) ? 'Sim' : 'Não'} / Validação ${getStoreValidationLabel(store)}`;
    store.network = network.toUpperCase();
    store.rede = network.toUpperCase();
    store.separator = separator;
    store.separatorRaw = separator;
    const noPromoter = hasFixedPromoterInput === 'no' || validationModeInput === 'driver_only' || !!store.supportPoint;
    store.validationMode = noPromoter ? 'driver_only' : validationModeInput;
    store.noPromoter = noPromoter;
    store.hasFixedPromoter = !noPromoter;
    if (store.noPromoter) store.promoterId = null;
    store.conciliatedAt = nowIso();
    store.conciliatedBy = actor.name;
    audit('Lojas', 'Conciliação de loja', `${store.name}: ${previous} → Rede ${store.network} / Separador ${store.separator} / Promotor fixo ${store.hasFixedPromoter ? 'Sim' : 'Não'} / Validação ${getStoreValidationLabel(store)}.`);
  }

  if (type === 'UPDATE_STORE_VALIDATION_SETTINGS') {
    if (actor.role !== 'admin') return { ok: false, error: 'Somente o ADM pode alterar validação da loja.' };
    const store = getStoreById(payload.storeId, state);
    if (!store) return { ok: false, error: 'Loja não encontrada.' };
    const hasFixedPromoterInput = String(payload.hasFixedPromoter || '').trim();
    const validationModeInput = String(payload.validationMode || '').trim();
    if (!['yes', 'no'].includes(hasFixedPromoterInput)) return { ok: false, error: 'Informe se a loja possui promotor fixo.' };
    if (!['driver_promoter', 'driver_only', 'promoter_only'].includes(validationModeInput)) return { ok: false, error: 'Selecione o tipo de validação.' };

    const previous = `Promotor fixo ${storeHasFixedPromoter(store) ? 'Sim' : 'Não'} / Validação ${getStoreValidationLabel(store)}`;
    const noPromoter = hasFixedPromoterInput === 'no' || validationModeInput === 'driver_only' || !!store.supportPoint;
    store.noPromoter = noPromoter;
    store.hasFixedPromoter = !noPromoter;
    store.validationMode = noPromoter ? 'driver_only' : validationModeInput;
    if (store.noPromoter) store.promoterId = null;
    store.validationUpdatedAt = nowIso();
    store.validationUpdatedBy = actor.name;
    audit('Lojas', 'Validação da loja alterada', `${store.name}: ${previous} → Promotor fixo ${store.hasFixedPromoter ? 'Sim' : 'Não'} / Validação ${getStoreValidationLabel(store)}.`);
  }


  if (type === 'DELETE_STORE') {
    if (actor.role !== 'admin') return { ok: false, error: 'Somente o ADM pode excluir lojas.' };
    const store = getStoreById(payload.storeId, state);
    if (!store) return { ok: false, error: 'Loja não encontrada.' };
    if (!isActiveStore(store)) return { ok: false, error: 'Esta loja já foi excluída da lista ativa.' };
    const reason = String(payload.reason || '').trim();
    if (reason.length < 3) return { ok: false, error: 'Informe o motivo da exclusão da loja.' };

    store.inactive = true;
    store.active = false;
    store.deletedAt = nowIso();
    store.deletedBy = actor.name;
    store.deleteReason = reason;

    if (store.promoterId) {
      const promoter = getUserById(store.promoterId, state);
      if (promoter && promoter.storeId === store.id) {
        promoter.unassignedStoreId = store.id;
        promoter.storeId = null;
      }
      store.promoterId = null;
    }

    audit('Lojas', 'Loja excluída', `${store.name} foi removida da lista ativa. Motivo: ${reason}.`);
  }

  if (type === 'CONFIRM_DRIVER_DELIVERY') {
    if (!['admin', 'driver'].includes(actor.role)) return { ok: false, error: 'Somente ADM ou motorista pode validar entrega.' };
    const outbound = state.movements.outbounds.find((item) => item.id === payload.outboundId);
    if (!outbound) return { ok: false, error: 'Saída não encontrada.' };
    if (actor.role === 'driver' && outbound.date !== todayStr()) {
      return { ok: false, error: 'Motorista só pode validar entregas lançadas para a data de hoje. Entregas anteriores ficam como pendência para o ADM.' };
    }
    if (outbound.driverDeliveryId || state.movements.driverDeliveries.some((item) => isActiveMovement(item) && item.outboundId === outbound.id)) return { ok: false, error: 'O motorista já validou esta entrega. Para corrigir, use o botão Editar entrega.' };
    const store = getStoreById(outbound.storeId, state);
    if (!store) return { ok: false, error: 'Loja não encontrada.' };
    if (actor.role === 'driver' && !isMovementVisibleToUser(outbound, actor, state)) return { ok: false, error: 'Motorista só pode validar entregas da própria rota/carga.' };
    if (!storeRequiresDriver(store)) return { ok: false, error: 'Esta loja não exige validação do motorista. A entrega deve ser validada pelo promotor.' };

    const expectedQty = sanitizeQty(outbound.qty);
    const expectedTotal = sumQty(expectedQty);
    const totalDelivered = safeInt(payload.totalDelivered);
    if (totalDelivered <= 0) return { ok: false, error: 'Informe o total de caixas deixadas na loja.' };

    const hasTotalDifference = totalDelivered !== expectedTotal;
    let actualQty = hasTotalDifference ? sanitizeQty(payload.actualQty) : expectedQty;

    if (hasTotalDifference) {
      if (sumQty(actualQty) !== totalDelivered) {
        return { ok: false, error: `O detalhamento precisa fechar com o total informado pelo motorista. Total informado: ${totalDelivered}. Correto esperado para a loja: ${expectedQty.folhagens} folhagens e ${expectedQty.bandejas} bandejas.` };
      }
    }

    const delivery = {
      id: randomId('drvdel'),
      outboundId: outbound.id,
      date: payload.date || todayStr(),
      routeId: outbound.routeId,
      driverId: actor.role === 'driver' ? actor.id : (payload.driverId || getOutboundResponsibleDriver(outbound, state) || outbound.driverId),
      originalDriverId: outbound.driverId,
      storeId: outbound.storeId,
      expectedQty,
      totalDelivered,
      actualQty,
      hasDivergence: hasQtyDifference(expectedQty, actualQty),
      notes: payload.notes || '',
      createdBy: actor.name,
      createdById: actor.id,
      createdAt: nowIso(),
    };
    state.movements.driverDeliveries.unshift(delivery);
    outbound.driverDeliveryId = delivery.id;
    outbound.driverDeliveredTotal = totalDelivered;
    outbound.driverDeliveredQty = actualQty;
    outbound.driverDeliveredBy = actor.name;

    if (!storeRequiresPromoter(store)) {
      state.storeStocks[outbound.storeId] = addQty(getStoreStock(outbound.storeId, state), actualQty);
      const receipt = {
        id: randomId('rec'),
        outboundId: outbound.id,
        driverDeliveryId: delivery.id,
        date: delivery.date,
        storeId: outbound.storeId,
        qty: actualQty,
        createdBy: actor.name,
        createdAt: nowIso(),
        source: 'motorista_sem_promotor',
      };
      state.movements.receipts.unshift(receipt);
      outbound.receiptId = receipt.id;
      outbound.receivedQty = actualQty;
      outbound.status = 'recebida_motorista';
    } else {
      outbound.status = 'validada_motorista';
    }

    if (hasQtyDifference(expectedQty, actualQty)) {
      openDivergence({
        type: 'entrega_motorista_loja',
        outboundId: outbound.id,
        driverDeliveryId: delivery.id,
        date: delivery.date,
        routeId: outbound.routeId,
        driverId: delivery.driverId,
        storeId: outbound.storeId,
        expectedQty,
        actualQty,
        differenceQty: qtyDiff(actualQty, expectedQty),
        justification: payload.notes || `Motorista informou ${totalDelivered} caixas, mas o correto esperado para a loja era ${expectedTotal}.`,
        originJustification: payload.notes || '',
        responsibleUserId: delivery.driverId,
        responsibleRole: 'driver',
        requiresResponsibleExplanation: true,
        responsibleExplanation: '',
        responsibleExplanationAt: null,
        responsibleExplanationBy: null,
      });
    }
    audit('Entrega do Motorista', 'Entrega validada', `${actor.name} confirmou ${totalDelivered} caixas deixadas em ${store.name}. Correto esperado: ${expectedQty.folhagens} folhagens e ${expectedQty.bandejas} bandejas.`);
  }

  if (type === 'CONFIRM_GOIANIA_LOAD') {
    if (!['admin', 'cd', 'driver'].includes(actor.role)) return { ok: false, error: 'Usuário sem permissão para validar carga de Goiânia.' };
    if (actor.role === 'driver' && !isGoianiaTrunkUser(actor)) return { ok: false, error: 'Somente Vinicius/Sebastião podem validar a carga total de Goiânia.' };
    const date = payload.date || todayStr();
    const expectedQty = getGoianiaExpectedQty(date, state);
    const expectedTotal = sumQty(expectedQty);
    if (expectedTotal <= 0) return { ok: false, error: 'Não há saídas de Goiânia cadastradas para esta data.' };
    const totalLoaded = safeInt(payload.totalLoaded);
    if (totalLoaded <= 0) return { ok: false, error: 'Informe o total de caixas carregadas no caminhão.' };
    const actualQty = totalLoaded === expectedTotal ? expectedQty : { folhagens: safeInt(payload.folhagens), bandejas: safeInt(payload.bandejas) };
    if (totalLoaded !== expectedTotal && sumQty(actualQty) !== totalLoaded) {
      return { ok: false, error: `O detalhamento precisa fechar com o total carregado. Total informado: ${totalLoaded}. Correto esperado: ${expectedQty.folhagens} folhagens e ${expectedQty.bandejas} bandejas.` };
    }
    const driverId = actor.role === 'driver' ? actor.id : (payload.driverId || 'user_motor_vinicius');
    const load = {
      id: randomId('gynload'),
      date,
      truckId: 'caminhao_goiania_vinicius_sebastiao',
      driverId,
      expectedQty,
      actualQty,
      totalLoaded,
      hasDivergence: hasQtyDifference(expectedQty, actualQty),
      notes: payload.notes || '',
      createdBy: actor.name,
      createdById: actor.id,
      createdAt: nowIso(),
    };
    state.movements.goianiaLoads.unshift(load);
    if (hasQtyDifference(expectedQty, actualQty)) {
      openDivergence({
        type: 'carga_goiania',
        date,
        routeId: GOIANIA_TRUNK_ROUTE_ID,
        driverId,
        storeId: null,
        expectedQty,
        actualQty,
        differenceQty: qtyDiff(actualQty, expectedQty),
        justification: payload.notes || `Carga Goiânia saiu com ${totalLoaded} caixas, mas o CD/galpão somou ${expectedTotal}.`,
        originJustification: payload.notes || '',
        responsibleUserId: driverId,
        responsibleRole: 'driver',
        requiresResponsibleExplanation: true,
        responsibleExplanation: '',
        responsibleExplanationAt: null,
        responsibleExplanationBy: null,
      });
    }
    audit('Carga Goiânia', 'Carga validada', `Carga Goiânia validada por ${getUserById(driverId, state)?.name || actor.name}: ${totalLoaded}/${expectedTotal} caixas.`);
  }

  if (type === 'CREATE_GOIANIA_TRANSFER') {
    if (!['admin', 'driver', 'cd'].includes(actor.role)) return { ok: false, error: 'Usuário sem permissão para registrar distribuição Goiânia.' };
    if (actor.role === 'driver' && !isGoianiaTrunkUser(actor)) return { ok: false, error: 'Somente Vinicius/Sebastião podem registrar distribuição Goiânia.' };
    const date = payload.date || todayStr();
    const driver = getUserById(payload.driverId, state);
    if (!driver || driver.role !== 'driver') return { ok: false, error: 'Selecione o motorista/freteiro que recebeu a carga.' };
    const outbound = state.movements.outbounds.find((item) => item.id === payload.outboundId);
    if (!outbound || !isGoianiaRoute(outbound.routeId)) return { ok: false, error: 'Selecione uma saída válida da operação Goiânia.' };
    const qty = sanitizeQty(payload.qty);
    if (sumQty(qty) <= 0) return { ok: false, error: 'Informe a quantidade repassada.' };
    if (qtyExceeds(qty, sanitizeQty(outbound.qty))) return { ok: false, error: 'A quantidade repassada não pode ser maior que a saída da loja.' };
    const transferId = randomId('gyntr');
    state.movements.goianiaTransfers.unshift({
      id: transferId,
      date,
      outboundId: outbound.id,
      storeId: outbound.storeId,
      routeId: outbound.routeId,
      driverId: driver.id,
      qty,
      notes: payload.notes || '',
      createdBy: actor.name,
      createdById: actor.id,
      createdAt: nowIso(),
    });
    outbound.goianiaTransferId = transferId;
    outbound.goianiaTransferDriverId = driver.id;
    outbound.status = 'distribuida_goiania';
    audit('Distribuição Goiânia', 'Carga repassada', `${sumQty(qty)} caixas de ${getStoreById(outbound.storeId, state)?.name || '-'} repassadas para ${driver.name}.`);
  }


  if (type === 'CONFIRM_GOIANIA_FREIGHT_RETURN') {
    if (!['admin', 'driver', 'cd'].includes(actor.role)) return { ok: false, error: 'Usuário sem permissão para confirmar devolução dos fretes.' };
    if (actor.role === 'driver' && !isGoianiaTrunkUser(actor)) return { ok: false, error: 'Somente Vinicius/Sebastião podem confirmar devolução dos fretes de Goiânia.' };
    const date = payload.date || todayStr();
    const fromDriver = getUserById(payload.fromDriverId, state);
    if (!fromDriver || fromDriver.role !== 'driver') return { ok: false, error: 'Selecione o freteiro/motorista que devolveu as caixas.' };
    const receivedByDriverId = actor.role === 'driver' ? actor.id : (payload.receivedByDriverId || 'user_motor_vinicius');
    const pendingPickups = getGoianiaFreightPendingPickups(date, fromDriver.id, state);
    const expectedTotal = pendingPickups.reduce((acc, item) => acc + safeInt(item.totalQty ?? sumQty(item.qty)), 0);
    if (expectedTotal <= 0) return { ok: false, error: 'Não há recolhimentos pendentes desse freteiro para devolver ao Vinicius/Sebastião nesta data.' };
    const totalReceived = safeInt(payload.totalReceived);
    if (totalReceived <= 0) return { ok: false, error: 'Informe o total de caixas devolvidas pelo freteiro.' };
    const expectedQty = pendingPickups.reduce((acc, item) => addQty(acc, item.qty), emptyQty());
    const actualQty = buildQtyFromTotal(totalReceived, expectedQty);
    const returnId = randomId('gynret');
    state.movements.goianiaFreightReturns.unshift({
      id: returnId,
      date,
      fromDriverId: fromDriver.id,
      receivedByDriverId,
      routeId: GOIANIA_TRUNK_ROUTE_ID,
      expectedQty,
      actualQty,
      expectedTotal,
      totalReceived,
      pickupsCount: pendingPickups.length,
      hasDivergence: expectedTotal !== totalReceived,
      notes: String(payload.notes || '').trim(),
      createdBy: actor.name,
      createdById: actor.id,
      createdAt: nowIso(),
    });
    pendingPickups.forEach((item) => { item.goianiaFreightReturnId = returnId; });
    if (expectedTotal !== totalReceived) {
      openDivergence({
        type: 'frete_goiania_retorno_vinicius',
        date,
        routeId: GOIANIA_TRUNK_ROUTE_ID,
        driverId: fromDriver.id,
        storeId: null,
        expectedQty,
        actualQty,
        expectedTotal,
        actualTotal: totalReceived,
        justification: payload.notes || `Freteiro recolheu ${expectedTotal} caixas nas lojas, mas devolveu ${totalReceived} ao Vinicius/Sebastião.`,
        originJustification: payload.notes || '',
        responsibleUserId: fromDriver.id,
        responsibleRole: 'driver',
        requiresResponsibleExplanation: true,
        responsibleExplanation: '',
        responsibleExplanationAt: null,
        responsibleExplanationBy: null,
      });
    }
    audit('Fretes Goiânia', 'Devolução ao Vinicius/Sebastião', `${fromDriver.name} devolveu ${totalReceived}/${expectedTotal} caixas para ${getUserById(receivedByDriverId, state)?.name || 'Vinicius/Sebastião'}.`);
  }

  if (type === 'CREATE_SUPPORT_POINT_MOVEMENT') {
    if (!['admin', 'driver'].includes(actor.role)) return { ok: false, error: 'Somente ADM ou motorista pode movimentar ponto de apoio.' };
    const date = payload.date || todayStr();
    const action = payload.action === 'collect' ? 'collect' : 'drop';
    const driverId = actor.role === 'driver' ? actor.id : (payload.driverId || 'user_motor_vinicius');
    const driver = getUserById(driverId, state);
    if (!driver || driver.role !== 'driver') return { ok: false, error: 'Selecione um motorista válido.' };
    const store = getStoreById(payload.storeId || SUPPORT_POINT_STORE_ID, state);
    if (!store || !store.supportPoint) return { ok: false, error: 'Selecione um ponto de apoio válido.' };
    const totalQty = safeInt(payload.totalQty);
    if (totalQty <= 0) return { ok: false, error: 'Informe a quantidade de caixas.' };
    const currentStock = getStoreStock(store.id, state);
    const currentTotal = sumQty(currentStock);
    if (action === 'collect' && totalQty > currentTotal && !String(payload.notes || '').trim()) {
      return { ok: false, error: 'Para recolher mais caixas do que o saldo do ponto de apoio, informe uma justificativa.' };
    }
    const qty = action === 'drop' ? buildQtyFromTotal(totalQty, emptyQty()) : buildQtyFromTotal(totalQty, currentStock);
    const movementId = randomId('support');
    if (action === 'drop') {
      state.storeStocks[store.id] = addQty(currentStock, qty);
    } else {
      const removeQty = buildQtyFromTotal(Math.min(totalQty, currentTotal), currentStock);
      state.storeStocks[store.id] = subQty(currentStock, removeQty);
      state.movements.pickups.unshift({
        id: randomId('pick'),
        date,
        routeId: GOIANIA_TRUNK_ROUTE_ID,
        driverId,
        storeId: store.id,
        qty,
        totalOnly: true,
        totalQty,
        availableAtPickup: currentTotal,
        aboveAvailable: totalQty > currentTotal,
        justification: String(payload.notes || '').trim(),
        supportPointMovementId: movementId,
        createdBy: actor.name,
        createdById: actor.id,
        createdAt: nowIso(),
        returnBatchId: null,
      });
    }
    state.movements.supportPointMovements.unshift({
      id: movementId,
      date,
      action,
      storeId: store.id,
      routeId: GOIANIA_TRUNK_ROUTE_ID,
      driverId,
      qty,
      totalOnly: true,
      totalQty,
      notes: String(payload.notes || '').trim(),
      status: 'registrado',
      createdBy: actor.name,
      createdById: actor.id,
      createdAt: nowIso(),
    });
    audit('Ponto de Apoio', action === 'drop' ? 'Caixas deixadas' : 'Caixas recolhidas', `${driver.name} ${action === 'drop' ? 'deixou' : 'recolheu'} ${totalQty} caixas em ${store.name}.`);
  }

  if (type === 'CREATE_OUTBOUND') {
    if (!['admin', 'cd'].includes(actor.role)) return { ok: false, error: 'Somente ADM ou CD pode lançar saídas.' };
    const qty = sanitizeQty(payload.qty);
    if (sumQty(qty) <= 0) return { ok: false, error: 'Informe pelo menos uma quantidade para saída.' };
    if (actor.role === 'cd') {
      const forbiddenBox = BOX_TYPES.find((item) => safeInt(qty[item.key]) > 0 && !canUserLaunchBoxType(actor, item.key));
      if (forbiddenBox) return { ok: false, error: `Seu usuário não tem permissão para lançar ${forbiddenBox.label}.` };
    }

    const store = getStoreById(payload.storeId, state);
    if (!store) return { ok: false, error: 'Selecione uma loja válida.' };

    const outboundDate = payload.date || todayStr();
    const routeId = getEffectiveRoute(store.id, outboundDate, state);
    if (!routeId) return { ok: false, error: 'Esta loja não possui rota cadastrada. Corrija a rota no ADM antes de salvar a saída.' };

    const driverId = getEffectiveDriver(routeId, outboundDate, store.id, state);
    if (!driverId) return { ok: false, error: 'A rota desta loja não possui motorista vinculado. Corrija o motorista no ADM antes de salvar a saída.' };

    const existingOutbound = getActiveOutboundForStoreDate(store.id, outboundDate, state);
    const conflicts = getOutboundQtyConflicts(store.id, outboundDate, qty, state);
    if (conflicts.length) {
      return { ok: false, error: `Esta loja já teve lançamento de ${getBoxTypeLabels(conflicts)} nessa data. Para corrigir, use o botão Editar em Saídas recentes.` };
    }

    const cdStock = getCdStock(state);
    if (qtyExceeds(qty, cdStock)) return { ok: false, error: 'O CD não possui caixas suficientes para esta saída.' };

    state.cdStock = subQty(cdStock, qty);

    if (existingOutbound) {
      if (existingOutbound.driverDeliveryId || existingOutbound.receiptId || existingOutbound.goianiaTransferId) {
        state.cdStock = addQty(getCdStock(state), qty);
        return { ok: false, error: 'Esta loja já teve validação posterior. Estorne a validação antes de complementar a saída.' };
      }
      existingOutbound.cdLaunches = normalizeOutboundCdLaunches(existingOutbound);
      existingOutbound.cdLaunches.push(buildCdLaunchRecord(qty, actor, outboundDate));
      existingOutbound.qty = addQty(existingOutbound.qty, qty);
      existingOutbound.routeId = routeId;
      existingOutbound.driverId = driverId;
      existingOutbound.network = inferStoreNetwork(store);
      existingOutbound.separator = getStoreSeparator(store) || null;
      existingOutbound.updatedAt = nowIso();
      existingOutbound.updatedBy = actor.name;
      existingOutbound.updatedById = actor.id;
      audit('Saídas do CD', 'Saída complementar', `${actor.name} complementou ${getBoxTypeLabels(getPositiveQtyBoxTypes(qty))} para ${store.name}. Total atual: ${sumQty(existingOutbound.qty)} caixas.`);
    } else {
      const launchRecord = buildCdLaunchRecord(qty, actor, outboundDate);
      state.movements.outbounds.unshift({
        id: randomId('out'),
        date: outboundDate,
        routeId,
        driverId,
        storeId: store.id,
        network: inferStoreNetwork(store),
        separator: getStoreSeparator(store) || null,
        qty,
        cdLaunches: [launchRecord],
        status: 'aguardando_loja',
        createdBy: actor.name,
        createdById: actor.id,
        createdAt: nowIso(),
        receiptId: null,
      });
      audit('Saídas do CD', 'Nova saída', `Envio para ${store.name} na ${getRouteById(routeId, state)?.name || '-'} com total de ${sumQty(qty)} caixas.`);
    }
  }


  if (type === 'UPDATE_OUTBOUND_QTY') {
    if (!['admin', 'cd'].includes(actor.role)) return { ok: false, error: 'Somente ADM ou CD pode corrigir saídas.' };
    const outbound = state.movements.outbounds.find((item) => item.id === payload.outboundId);
    if (!outbound || !isActiveMovement(outbound) || outbound.status === 'historico') return { ok: false, error: 'Saída não encontrada para correção.' };
    if (!canEditOutboundMovement(outbound, actor, state)) return { ok: false, error: 'Seu usuário não tem permissão para corrigir esta saída.' };
    const reason = String(payload.reason || '').trim();
    if (reason.length < 3) return { ok: false, error: 'Informe o motivo da correção.' };
    const newQty = sanitizeQty(payload.qty);
    const oldQty = sanitizeQty(outbound.qty);
    if (sumQty(newQty) <= 0) return { ok: false, error: 'Informe pelo menos uma quantidade para a saída corrigida.' };
    if (!hasQtyDifference(newQty, oldQty)) return { ok: false, error: 'A quantidade corrigida é igual à quantidade atual.' };

    if (actor.role === 'cd') {
      const forbiddenBox = BOX_TYPES.find((item) => safeInt(newQty[item.key]) > 0 && !canUserLaunchBoxType(actor, item.key));
      if (forbiddenBox) return { ok: false, error: `Seu usuário não tem permissão para lançar ${forbiddenBox.label}.` };
    }

    const restoredCdStock = addQty(getCdStock(state), oldQty);
    if (qtyExceeds(newQty, restoredCdStock)) return { ok: false, error: 'O CD não possui saldo suficiente para essa correção.' };
    state.cdStock = subQty(restoredCdStock, newQty);

    outbound.qty = newQty;
    outbound.cdLaunches = [{
      ...buildCdLaunchRecord(newQty, actor, outbound.date),
      correction: true,
      correctedFrom: oldQty,
      correctionReason: reason,
    }];
    outbound.qtyCorrections = Array.isArray(outbound.qtyCorrections) ? outbound.qtyCorrections : [];
    outbound.qtyCorrections.unshift({
      id: randomId('corr'),
      type: 'saida_cd',
      previousQty: oldQty,
      newQty,
      reason,
      correctedBy: actor.name,
      correctedById: actor.id,
      correctedAt: nowIso(),
    });
    outbound.updatedAt = nowIso();
    outbound.updatedBy = actor.name;
    outbound.updatedById = actor.id;

    recalculateOutboundDivergences(outbound, `Correção de saída do CD: ${reason}`);
    audit('Saídas do CD', 'Saída corrigida', `${actor.name} corrigiu ${getStoreById(outbound.storeId, state)?.name || '-'} de ${sumQty(oldQty)} para ${sumQty(newQty)} caixas. Motivo: ${reason}`);
  }

  if (type === 'UPDATE_DRIVER_DELIVERY_QTY') {
    if (!['admin', 'driver'].includes(actor.role)) return { ok: false, error: 'Somente ADM ou motorista pode corrigir entrega.' };
    const delivery = state.movements.driverDeliveries.find((item) => item.id === payload.driverDeliveryId);
    if (!delivery || !isActiveMovement(delivery)) return { ok: false, error: 'Entrega do motorista não encontrada para correção.' };
    if (!canEditDriverDeliveryMovement(delivery, actor, state)) return { ok: false, error: 'Seu usuário não tem permissão para corrigir esta entrega.' };
    const outbound = state.movements.outbounds.find((item) => item.id === delivery.outboundId);
    if (!outbound) return { ok: false, error: 'Saída vinculada à entrega não encontrada.' };
    const reason = String(payload.reason || '').trim();
    if (reason.length < 3) return { ok: false, error: 'Informe o motivo da correção.' };
    const newQty = sanitizeQty(payload.qty);
    const oldQty = sanitizeQty(delivery.actualQty);
    if (sumQty(newQty) <= 0) return { ok: false, error: 'Informe a quantidade corrigida entregue pelo motorista.' };
    if (!hasQtyDifference(newQty, oldQty)) return { ok: false, error: 'A quantidade corrigida é igual à quantidade atual.' };

    const store = getStoreById(delivery.storeId, state);
    const receipt = state.movements.receipts.find((item) => item.id === outbound.receiptId || item.driverDeliveryId === delivery.id);
    if (receipt && !storeRequiresPromoter(store)) {
      const stockDiff = qtyDiff(newQty, oldQty);
      const adjustedStock = applySignedQty(getStoreStock(delivery.storeId, state), stockDiff);
      if (hasSignedNegativeQty(adjustedStock)) return { ok: false, error: 'Não há saldo suficiente na loja para reduzir essa quantidade. Verifique recolhimentos posteriores.' };
      state.storeStocks[delivery.storeId] = adjustedStock;
      receipt.qty = newQty;
      receipt.updatedAt = nowIso();
      receipt.updatedBy = actor.name;
      receipt.updatedById = actor.id;
      receipt.correctionReason = reason;
      outbound.receivedQty = newQty;
    }

    delivery.qtyCorrections = Array.isArray(delivery.qtyCorrections) ? delivery.qtyCorrections : [];
    delivery.qtyCorrections.unshift({
      id: randomId('corr'),
      type: 'entrega_motorista',
      previousQty: oldQty,
      newQty,
      reason,
      correctedBy: actor.name,
      correctedById: actor.id,
      correctedAt: nowIso(),
    });
    delivery.actualQty = newQty;
    delivery.totalDelivered = sumQty(newQty);
    delivery.expectedQty = sanitizeQty(outbound.qty);
    delivery.hasDivergence = hasQtyDifference(delivery.expectedQty, newQty);
    delivery.notes = delivery.notes ? `${delivery.notes}\nCorreção: ${reason}` : `Correção: ${reason}`;
    delivery.updatedAt = nowIso();
    delivery.updatedBy = actor.name;
    delivery.updatedById = actor.id;
    outbound.driverDeliveredTotal = sumQty(newQty);
    outbound.driverDeliveredQty = newQty;
    outbound.driverDeliveredBy = delivery.driverId ? getUserById(delivery.driverId, state)?.name || actor.name : actor.name;
    outbound.updatedAt = nowIso();
    outbound.updatedBy = actor.name;
    outbound.updatedById = actor.id;

    recalculateOutboundDivergences(outbound, `Correção da entrega do motorista: ${reason}`);
    audit('Entrega do Motorista', 'Entrega corrigida', `${actor.name} corrigiu ${getStoreById(delivery.storeId, state)?.name || '-'} de ${sumQty(oldQty)} para ${sumQty(newQty)} caixas. Motivo: ${reason}`);
  }

  if (type === 'UPDATE_RECEIPT_QTY') {
    if (!['admin', 'promoter'].includes(actor.role)) return { ok: false, error: 'Somente ADM ou promotor pode corrigir recebimento.' };
    const receipt = state.movements.receipts.find((item) => item.id === payload.receiptId);
    if (!receipt || !isActiveMovement(receipt)) return { ok: false, error: 'Recebimento não encontrado para correção.' };
    if (!canEditReceiptMovement(receipt, actor, state)) return { ok: false, error: 'Seu usuário não tem permissão para corrigir este recebimento.' };
    const outbound = state.movements.outbounds.find((item) => item.id === receipt.outboundId);
    if (!outbound) return { ok: false, error: 'Saída vinculada ao recebimento não encontrada.' };
    const reason = String(payload.reason || '').trim();
    if (reason.length < 3) return { ok: false, error: 'Informe o motivo da correção.' };
    const newQty = sanitizeQty(payload.qty);
    const oldQty = sanitizeQty(receipt.qty);
    if (sumQty(newQty) <= 0) return { ok: false, error: 'Informe a quantidade corrigida recebida na loja.' };
    if (!hasQtyDifference(newQty, oldQty)) return { ok: false, error: 'A quantidade corrigida é igual à quantidade atual.' };

    const stockDiff = qtyDiff(newQty, oldQty);
    const adjustedStock = applySignedQty(getStoreStock(receipt.storeId, state), stockDiff);
    if (hasSignedNegativeQty(adjustedStock)) return { ok: false, error: 'Não há saldo suficiente na loja para reduzir essa quantidade. Verifique recolhimentos posteriores.' };
    state.storeStocks[receipt.storeId] = adjustedStock;

    receipt.qtyCorrections = Array.isArray(receipt.qtyCorrections) ? receipt.qtyCorrections : [];
    receipt.qtyCorrections.unshift({
      id: randomId('corr'),
      type: 'recebimento_promotor',
      previousQty: oldQty,
      newQty,
      reason,
      correctedBy: actor.name,
      correctedById: actor.id,
      correctedAt: nowIso(),
    });
    receipt.qty = newQty;
    receipt.justification = receipt.justification ? `${receipt.justification}\nCorreção: ${reason}` : `Correção: ${reason}`;
    receipt.updatedAt = nowIso();
    receipt.updatedBy = actor.name;
    receipt.updatedById = actor.id;
    outbound.receivedQty = newQty;
    outbound.updatedAt = nowIso();
    outbound.updatedBy = actor.name;
    outbound.updatedById = actor.id;

    recalculateOutboundDivergences(outbound, `Correção do recebimento da loja: ${reason}`);
    audit('Recebimento na Loja', 'Recebimento corrigido', `${actor.name} corrigiu ${getStoreById(receipt.storeId, state)?.name || '-'} de ${sumQty(oldQty)} para ${sumQty(newQty)} caixas. Motivo: ${reason}`);
  }

  if (type === 'CONFIRM_RECEIPT') {
    if (!['admin', 'promoter'].includes(actor.role)) return { ok: false, error: 'Somente ADM ou promotor pode confirmar recebimento.' };
    const outbound = state.movements.outbounds.find((item) => item.id === payload.outboundId);
    if (!outbound) return { ok: false, error: 'Saída não encontrada.' };
    if (outbound.receiptId || state.movements.receipts.some((item) => isActiveMovement(item) && item.outboundId === outbound.id)) return { ok: false, error: 'Esta saída já foi confirmada. Para corrigir, use o botão Editar recebimento.' };
    const receiptStore = getStoreById(outbound.storeId, state);
    if (actor.role === 'promoter' && outbound.storeId !== actor.storeId) return { ok: false, error: 'Promotor só pode confirmar recebimento da própria loja.' };
    if (!storeRequiresPromoter(receiptStore)) return { ok: false, error: 'Esta loja não exige validação do promotor. A entrega deve ser validada somente pelo motorista.' };
    const expectedQty = sanitizeQty(outbound.qty);
    const expectedTotal = sumQty(expectedQty);
    const totalReceived = payload.totalReceived !== undefined ? safeInt(payload.totalReceived) : sumQty(sanitizeQty(payload.qty));
    if (totalReceived <= 0) return { ok: false, error: 'Informe o total de caixas recebidas.' };
    const hasTotalDifference = totalReceived !== expectedTotal;
    const qty = hasTotalDifference ? sanitizeQty(payload.qty) : expectedQty;
    if (hasTotalDifference && sumQty(qty) !== totalReceived) {
      return { ok: false, error: `O detalhamento precisa fechar com o total informado pelo promotor. Total informado: ${totalReceived}. Correto esperado para a loja: ${expectedQty.folhagens} folhagens e ${expectedQty.bandejas} bandejas.` };
    }

    state.storeStocks[outbound.storeId] = addQty(getStoreStock(outbound.storeId, state), qty);
    const receipt = {
      id: randomId('rec'),
      outboundId: outbound.id,
      date: payload.date || todayStr(),
      storeId: outbound.storeId,
      expectedQty,
      totalReceived,
      qty,
      hasDivergence: hasQtyDifference(expectedQty, qty),
      createdBy: actor.name,
      createdById: actor.id,
      createdAt: nowIso(),
    };
    state.movements.receipts.unshift(receipt);
    outbound.receiptId = receipt.id;
    outbound.status = 'recebida';
    outbound.receivedQty = qty;

    if (hasQtyDifference(expectedQty, qty)) {
      openDivergence({
        type: 'recebimento_loja',
        outboundId: outbound.id,
        receiptId: receipt.id,
        date: receipt.date,
        routeId: outbound.routeId,
        driverId: outbound.driverId,
        storeId: outbound.storeId,
        expectedQty,
        actualQty: qty,
        justification: payload.justification || 'Diferença identificada entre o CD e o recebimento da loja.',
        originJustification: payload.justification || '',
        responsibleUserId: outbound.driverId,
        responsibleRole: 'driver',
        requiresResponsibleExplanation: true,
        responsibleExplanation: '',
        responsibleExplanationAt: null,
        responsibleExplanationBy: null,
      });
    }
    audit('Recebimento na Loja', 'Confirmação de recebimento', `Loja ${getStoreById(outbound.storeId, state)?.name || '-'} confirmou ${totalReceived} caixas. Correto esperado: ${expectedQty.folhagens} folhagens e ${expectedQty.bandejas} bandejas.`);
  }


  if (type === 'CREATE_OCCUPIED_BOXES') {
    if (!['admin', 'driver'].includes(actor.role)) return { ok: false, error: 'Somente ADM ou motorista pode registrar caixas ocupadas.' };
    const date = payload.date || todayStr();
    if (actor.role === 'driver' && String(payload.driverId) !== actor.id) return { ok: false, error: 'Motorista só pode registrar caixas ocupadas no próprio acesso.' };
    if (actor.role === 'driver' && !canUserSeeStore(payload.storeId, actor, date, state)) return { ok: false, error: 'Motorista só pode registrar lojas da própria rota/carga.' };
    const store = getStoreById(payload.storeId, state);
    if (!store) return { ok: false, error: 'Selecione uma loja válida.' };
    const routeId = payload.routeId || getEffectiveRoute(payload.storeId, date, state);
    const driverId = payload.driverId || getRouteById(routeId, state)?.driverId || actor.id;
    const totalQty = safeInt(payload.totalQty);
    const usedFor = String(payload.usedFor || '').trim();
    if (totalQty <= 0) return { ok: false, error: 'Informe a quantidade de caixas ocupadas.' };
    if (!usedFor) return { ok: false, error: 'Informe com o que as caixas estão sendo usadas.' };
    state.movements.occupiedBoxes.unshift({
      id: randomId('occ'),
      date,
      routeId,
      driverId,
      storeId: payload.storeId,
      totalQty,
      usedFor,
      notes: String(payload.notes || '').trim(),
      status: 'aberta',
      createdBy: actor.name,
      createdById: actor.id,
      createdAt: nowIso(),
    });
    audit('Caixas Ocupadas', 'Alerta registrado', `${store.name} está com ${totalQty} caixas ocupadas. Uso informado: ${usedFor}.`);
  }

  if (type === 'CREATE_RELEASED_BOXES') {
    if (!['admin', 'promoter'].includes(actor.role)) return { ok: false, error: 'Somente ADM ou promotor pode registrar caixas liberadas.' };
    const date = payload.date || todayStr();
    const storeId = payload.storeId || actor.storeId;
    const store = getStoreById(storeId, state);
    if (!store) return { ok: false, error: 'Selecione uma loja válida.' };
    if (actor.role === 'promoter' && storeId !== actor.storeId) return { ok: false, error: 'Promotor só pode lançar caixas da própria loja.' };
    const totalInStore = safeInt(payload.totalInStore);
    const freeQty = safeInt(payload.freeQty);
    const occupiedQty = safeInt(payload.occupiedQty);
    if (totalInStore < 0 || freeQty < 0 || occupiedQty < 0) return { ok: false, error: 'As quantidades não podem ser negativas.' };
    if (freeQty + occupiedQty !== totalInStore) {
      return { ok: false, error: 'A soma de caixas liberadas e ocupadas precisa ser igual ao total informado na loja.' };
    }
    const routeId = getEffectiveRoute(storeId, date, state);
    const driverId = routeId ? getEffectiveDriver(routeId, date, storeId, state) : null;
    state.movements.releasedBoxes.unshift({
      id: randomId('rel'),
      date,
      storeId,
      routeId,
      driverId,
      totalInStore,
      freeQty,
      occupiedQty,
      notes: String(payload.notes || '').trim(),
      status: 'registrado',
      createdBy: actor.name,
      createdById: actor.id,
      createdAt: nowIso(),
    });
    audit('Caixas Liberadas', 'Status informado pela loja', `${store.name}: ${freeQty} liberadas, ${occupiedQty} ocupadas, total ${totalInStore}.`);
  }


  if (type === 'CREATE_PICKUP') {
    if (!['admin', 'driver'].includes(actor.role)) return { ok: false, error: 'Somente ADM ou motorista pode registrar recolhimento.' };
    if (actor.role === 'driver' && String(payload.driverId) !== actor.id) return { ok: false, error: 'Motorista só pode registrar recolhimento no próprio acesso.' };
    if (actor.role === 'driver' && !canUserSeeStore(payload.storeId, actor, payload.date || todayStr(), state)) return { ok: false, error: 'Motorista só pode recolher lojas da própria rota/carga.' };
    const totalQty = safeInt(payload.totalQty ?? sumQty(sanitizeQty(payload.qty)));
    if (totalQty <= 0) return { ok: false, error: 'Informe a quantidade recolhida.' };

    const storeStock = getStoreStock(payload.storeId, state);
    const availableTotal = sumQty(storeStock);
    const isAboveAvailable = totalQty > availableTotal;
    if (isAboveAvailable && !String(payload.justification || '').trim()) {
      return { ok: false, error: 'Mesmo sem saldo suficiente na loja, o recolhimento pode ser registrado, mas a justificativa é obrigatória.' };
    }

    const qty = buildQtyFromTotal(totalQty, storeStock);
    const stockQtyToRemove = buildQtyFromTotal(Math.min(totalQty, availableTotal), storeStock);
    state.storeStocks[payload.storeId] = subQty(storeStock, stockQtyToRemove);
    state.movements.pickups.unshift({
      id: randomId('pick'),
      date: payload.date || todayStr(),
      routeId: payload.routeId,
      driverId: payload.driverId,
      storeId: payload.storeId,
      qty,
      totalOnly: true,
      totalQty,
      availableAtPickup: availableTotal,
      aboveAvailable: isAboveAvailable,
      justification: payload.justification || '',
      createdBy: actor.name,
      createdById: actor.id,
      createdAt: nowIso(),
      returnBatchId: null,
    });
    audit('Recolhimentos', 'Novo recolhimento', `Motorista ${getUserById(payload.driverId, state)?.name || '-'} recolheu ${sumQty(qty)} caixas em ${getStoreById(payload.storeId, state)?.name || '-'}.`);
  }

  if (type === 'CONFIRM_CD_RETURN') {
    if (!['admin', 'cd'].includes(actor.role)) return { ok: false, error: 'Somente ADM ou CD pode confirmar retorno.' };
    const result = confirmCdReturnInState(payload, { source: 'individual' });
    if (!result.ok) return result;
  }

  if (type === 'CONFIRM_CD_RETURN_BULK') {
    if (!['admin', 'cd'].includes(actor.role)) return { ok: false, error: 'Somente ADM ou CD pode confirmar retorno.' };
    const items = Array.isArray(payload.items) ? payload.items : [];
    if (!items.length) return { ok: false, error: 'Selecione pelo menos um retorno pendente para confirmar.' };

    const prepared = items.map((item) => {
      const expectation = getCdReturnExpectation(item);
      return {
        ...item,
        totalQty: safeInt(item.totalQty || expectation.expectedTotal),
        expectedTotal: expectation.expectedTotal,
        routeName: getRouteById(item.routeId, state)?.name || '-',
        driverName: getUserById(item.driverId, state)?.name || '-',
      };
    });

    const invalid = prepared.find((item) => !item.date || !item.routeId || !item.driverId || safeInt(item.expectedTotal) <= 0);
    if (invalid) {
      return { ok: false, error: `Existe uma seleção sem pendência válida: ${invalid.routeName || '-'} • ${invalid.driverName || '-'}. Atualize a página e tente novamente.` };
    }

    let confirmed = 0;
    let totalConfirmed = 0;
    const justification = String(payload.justification || '').trim();

    for (const item of prepared) {
      const result = confirmCdReturnInState({
        date: item.date,
        routeId: item.routeId,
        driverId: item.driverId,
        totalQty: item.totalQty,
        justification,
      }, {
        audit: false,
        source: 'lote',
        batchNote: justification,
      });
      if (!result.ok) return result;
      confirmed += 1;
      totalConfirmed += safeInt(result.totalQty);
    }

    audit('Retornos no CD', 'Conferência de retorno em lote', `${confirmed} retorno(s) confirmados em lote, total de ${totalConfirmed} caixas.${justification ? ` Motivo: ${justification}` : ''}`);
  }

  if (type === 'CREATE_ROUTE_EXCEPTION') {
    const store = getStoreById(payload.storeId, state);
    const newRoute = getRouteById(payload.newRouteId, state);
    if (!store || !newRoute) return { ok: false, error: 'Loja ou rota inválida.' };

    state.movements.routeExceptions.unshift({
      id: randomId('exc'),
      date: payload.date || todayStr(),
      storeId: payload.storeId,
      originalRouteId: store.defaultRouteId,
      newRouteId: payload.newRouteId,
      newDriverId: payload.newDriverId,
      reason: payload.reason,
      notes: payload.notes || '',
      createdBy: actor.name,
      createdById: actor.id,
      createdAt: nowIso(),
    });
    audit('Rotas e Exceções', 'Troca de rota', `${store.name} saiu de ${getRouteById(store.defaultRouteId, state)?.name || '-'} para ${newRoute.name}.`);
  }

  if (type === 'SUBMIT_DIVERGENCE_EXPLANATION') {
    const item = state.divergences.find((div) => div.id === payload.id);
    if (!item) return { ok: false, error: 'Divergência não encontrada.' };
    if (item.status !== 'aberta') return { ok: false, error: 'Esta divergência já foi resolvida.' };
    const canExplain = actor.role === 'admin' || actor.id === item.responsibleUserId || actor.id === item.driverId;
    if (!canExplain) return { ok: false, error: 'Somente o responsável pela divergência ou o ADM pode registrar a justificativa.' };
    const explanation = String(payload.explanation || '').trim();
    if (explanation.length < 8) return { ok: false, error: 'Informe uma justificativa mais detalhada sobre o motivo da divergência.' };
    item.responsibleExplanation = explanation;
    item.responsibleExplanationAt = nowIso();
    item.responsibleExplanationBy = actor.name;
    item.responsibleExplanationUserId = actor.id;
    item.explanationStatus = 'informada';
    audit('Divergências', 'Justificativa registrada', `Responsável registrou justificativa da divergência ${item.id}.`);
  }

  if (type === 'RESOLVE_DIVERGENCE') {
    if (actor.role !== 'admin') return { ok: false, error: 'Somente o ADM pode aprovar e encerrar divergências.' };
    const item = state.divergences.find((div) => div.id === payload.id);
    if (!item) return { ok: false, error: 'Divergência não encontrada.' };
    if (item.requiresResponsibleExplanation && !String(item.responsibleExplanation || '').trim()) {
      return { ok: false, error: 'Antes de aprovar, o responsável precisa justificar o motivo da divergência.' };
    }
    item.status = 'resolvida';
    item.resolvedAt = nowIso();
    item.resolvedBy = actor.name;
    item.approvedBy = actor.name;
    item.approvedAt = nowIso();
    item.resolutionType = payload.resolutionType || 'tratada_gestao';
    item.resolution = payload.resolution || 'Aprovada e encerrada pelo ADM.';
    audit('Divergências', 'Divergência aprovada pelo ADM', `Divergência ${item.id} aprovada como ${item.resolutionType}.`);
  }


  if (type === 'BULK_UPDATE_DIVERGENCES') {
    if (actor.role !== 'admin') return { ok: false, error: 'Somente o ADM pode regularizar divergências em lote.' };
    const ids = Array.isArray(payload.ids) ? payload.ids.filter(Boolean) : [];
    if (!ids.length) return { ok: false, error: 'Selecione pelo menos uma divergência.' };
    const reason = String(payload.reason || '').trim();
    if (reason.length < 8) return { ok: false, error: 'Informe um motivo/justificativa com mais detalhes.' };
    const action = String(payload.action || 'regularizacao_administrativa');
    const selected = state.divergences.filter((div) => ids.includes(div.id) && div.status === 'aberta');
    if (!selected.length) return { ok: false, error: 'Nenhuma divergência aberta encontrada para regularizar.' };

    selected.forEach((item) => {
      item.bulkUpdatedAt = nowIso();
      item.bulkUpdatedBy = actor.name;
      item.bulkAction = action;

      if (action === 'justificar') {
        item.responsibleExplanation = reason;
        item.responsibleExplanationAt = nowIso();
        item.responsibleExplanationBy = actor.name;
        item.responsibleExplanationUserId = actor.id;
        item.explanationStatus = 'informada_em_lote';
        return;
      }

      if (action === 'encaminhar_responsavel') {
        const owner = getDivergenceOwnerInfo(item, state);
        item.forwardedToOwnerKey = owner.ownerKey;
        item.forwardedToOwnerName = owner.ownerName;
        item.forwardedToOwnerArea = owner.ownerArea;
        item.forwardedToOwnerUserId = owner.ownerUserId;
        item.forwardedReason = reason;
        item.forwardedAt = nowIso();
        item.forwardedBy = actor.name;
        return;
      }

      item.status = 'resolvida';
      item.resolvedAt = nowIso();
      item.resolvedBy = actor.name;
      item.approvedBy = actor.name;
      item.approvedAt = nowIso();
      item.resolutionType = action || 'regularizacao_administrativa';
      item.resolution = reason;
      item.resolvedInBulk = true;
    });

    const actionLabel = action === 'justificar' ? 'justificadas' : action === 'encaminhar_responsavel' ? 'encaminhadas' : 'regularizadas';
    audit('Divergências', 'Ação em lote', `${selected.length} divergência(s) ${actionLabel} por ${actor.name}. Motivo: ${reason}`);
  }

  if (type === 'UPDATE_STORE_ROUTE') {
    if (actor.role !== 'admin') return { ok: false, error: 'Somente o ADM pode alterar rota fixa.' };
    const route = getRouteById(payload.routeId, state);
    if (!route) return { ok: false, error: 'Rota inválida.' };

    const rawStoreIds = Array.isArray(payload.storeIds) ? payload.storeIds : [payload.storeId];
    const storeIds = [...new Set(rawStoreIds.filter(Boolean))];
    const storesToUpdate = storeIds.map((storeId) => getStoreById(storeId, state)).filter(Boolean);

    if (!storesToUpdate.length) return { ok: false, error: 'Selecione pelo menos uma loja válida.' };

    const mode = payload.routeMode || 'default';
    const updatedNames = [];

    storesToUpdate.forEach((store) => {
      const previousDefault = store.defaultRouteId;
      const previousSunday = store.sundayRouteId;

      if (mode === 'default' || mode === 'both') {
        store.defaultRouteId = payload.routeId;
      }
      if (mode === 'sunday' || mode === 'both') {
        store.sundayRouteId = payload.routeId;
      }

      updatedNames.push(store.name);
      audit(
        'Rotas e Motoristas',
        'Rota da loja alterada',
        `${store.name} foi alterada para ${route.name}. Modo: ${mode}. Antes: ${getRouteById(previousDefault, state)?.name || '-'} / domingo ${getRouteById(previousSunday, state)?.name || '-'}.`
      );
    });

    if (storesToUpdate.length > 1) {
      audit(
        'Rotas e Motoristas',
        'Alteração em lote de rotas',
        `${storesToUpdate.length} lojas foram alteradas para ${route.name}. Modo: ${mode}. Lojas: ${updatedNames.join(', ')}.`
      );
    }
  }

  if (type === 'UPDATE_ROUTE_DRIVER') {
    if (actor.role !== 'admin') return { ok: false, error: 'Somente o ADM pode alterar motorista da rota.' };
    const route = getRouteById(payload.routeId, state);
    const driver = getUserById(payload.driverId, state);
    if (!route || !driver || driver.role !== 'driver') return { ok: false, error: 'Rota ou motorista inválido.' };

    const previousDriver = route.driverId;
    route.driverId = payload.driverId;
    driver.routeId = route.id;

    audit(
      'Rotas e Motoristas',
      'Motorista da rota alterado',
      `${route.name} passou de ${getUserById(previousDriver, state)?.name || '-'} para ${driver.name}.`
    );
  }

  if (type === 'SCHEDULE_MANDATORY_INVENTORY') {
    if (actor.role !== 'admin') return { ok: false, error: 'Somente o ADM pode programar inventário obrigatório.' };
    const date = String(payload.date || '').trim();
    if (!date) return { ok: false, error: 'Informe a data do inventário obrigatório.' };
    const stores = getStoresForMandatoryScope(payload, state);
    if (!stores.length) return { ok: false, error: 'Nenhuma loja encontrada para essa programação.' };
    const storeIds = stores.map((store) => store.id);
    const scope = payload.scope || 'all';
    const label = scope === 'network' ? `rede ${payload.network}` : scope === 'store' ? `loja ${stores[0]?.name || '-'}` : 'todas as lojas';
    state.mandatoryInventories.unshift({
      id: randomId('mandinv'),
      date,
      scope,
      network: payload.network || null,
      storeIds,
      completedStoreIds: [],
      canceledStoreIds: [],
      notes: String(payload.notes || '').trim(),
      status: 'ativa',
      createdBy: actor.name,
      createdById: actor.id,
      createdAt: nowIso(),
    });
    audit('Inventário', 'Inventário obrigatório programado', `${formatDateBR(date)} para ${label}: ${storeIds.length} loja(s).`);
  }


  if (type === 'CANCEL_MANDATORY_INVENTORY_PENDING') {
    if (actor.role !== 'admin') return { ok: false, error: 'Somente o ADM pode cancelar pendência de inventário obrigatório.' };
    const schedule = (state.mandatoryInventories || []).find((item) => item.id === payload.scheduleId);
    if (!schedule) return { ok: false, error: 'Programação de inventário não encontrada.' };
    if (schedule.status === 'cancelada') return { ok: false, error: 'Esta programação já foi cancelada.' };

    if (payload.storeId) {
      const store = getStoreById(payload.storeId, state);
      if (!store) return { ok: false, error: 'Loja não encontrada.' };
      const storeIds = getMandatoryInventoryStoreIds(schedule, state);
      if (!storeIds.includes(store.id)) return { ok: false, error: 'Esta loja não faz parte da programação.' };
      if (!isMandatoryInventoryPendingForStore(schedule, store.id, state)) {
        return { ok: false, error: 'Essa loja não possui pendência ativa nesta programação.' };
      }
      schedule.canceledStoreIds = Array.isArray(schedule.canceledStoreIds) ? schedule.canceledStoreIds : [];
      if (!schedule.canceledStoreIds.includes(store.id)) schedule.canceledStoreIds.push(store.id);
      schedule.lastCanceledAt = nowIso();
      schedule.lastCanceledBy = actor.name;
      schedule.lastCancelReason = String(payload.reason || 'Cancelado pelo ADM.').trim();

      const completedIds = new Set(Array.isArray(schedule.completedStoreIds) ? schedule.completedStoreIds : []);
      const canceledIds = new Set(schedule.canceledStoreIds);
      const allClosed = storeIds.length > 0 && storeIds.every((id) => completedIds.has(id) || canceledIds.has(id));
      if (allClosed) {
        schedule.status = 'concluida';
        schedule.completedAt = nowIso();
      }
      audit('Inventário', 'Pendência de inventário cancelada', `${store.name} teve a pendência de inventário obrigatório de ${formatDateBR(schedule.date)} cancelada pelo ADM. Motivo: ${schedule.lastCancelReason}`);
    } else {
      schedule.status = 'cancelada';
      schedule.canceledAt = nowIso();
      schedule.canceledBy = actor.name;
      schedule.cancelReason = String(payload.reason || 'Programação cancelada pelo ADM.').trim();
      audit('Inventário', 'Programação de inventário cancelada', `Programação de ${formatDateBR(schedule.date)} cancelada pelo ADM. Motivo: ${schedule.cancelReason}`);
    }
  }

  if (type === 'APPLY_INVENTORY') {
    if (!['admin', 'driver', 'promoter'].includes(actor.role)) {
      return { ok: false, error: 'Usuário sem permissão para lançar inventário.' };
    }

    const location = payload.location === 'cd' ? 'cd' : 'store';
    const qty = sanitizeQty(payload.qty);
    const date = payload.date || todayStr();
    const notes = (payload.notes || '').trim();

    if (location === 'cd' && actor.role !== 'admin') {
      return { ok: false, error: 'Somente o ADM pode inventariar o CD.' };
    }

    if (location === 'store' && !payload.storeId) {
      return { ok: false, error: 'Selecione a loja do inventário.' };
    }

    if (actor.role === 'promoter' && payload.storeId !== actor.storeId) {
      return { ok: false, error: 'Promotor só pode lançar inventário da própria loja.' };
    }

    if (actor.role === 'driver' && !canUserSeeStore(payload.storeId, actor, date, state)) {
      return { ok: false, error: 'Motorista só pode lançar inventário de loja vinculada à sua rota/carga.' };
    }

    const previousQty = location === 'cd' ? getCdStock(state) : getStoreStock(payload.storeId, state);
    const countedQty = sanitizeQty(qty);
    const diffQty = qtyDiff(countedQty, previousQty);
    const hasDivergence = hasQtyDifference(previousQty, countedQty);
    const store = location === 'store' ? getStoreById(payload.storeId, state) : null;

    if (location === 'cd') {
      state.cdStock = countedQty;
    } else {
      state.storeStocks[payload.storeId] = countedQty;
    }

    const inventoryRecord = {
      id: randomId('inv'),
      date,
      location,
      storeId: payload.storeId || null,
      previousQty,
      countedQty,
      diffQty,
      hasDivergence,
      notes,
      createdBy: actor.name,
      createdById: actor.id,
      createdAt: nowIso(),
    };

    state.movements.inventories.unshift(inventoryRecord);
    state.movements.inventories = state.movements.inventories.slice(0, 3000);

    if (location === 'store' && payload.storeId) {
      inventoryRecord.mandatoryInventoryIds = getPendingMandatoryInventoriesForStore(payload.storeId, date, state).map((schedule) => schedule.id);
      inventoryRecord.mandatoryInventoryId = inventoryRecord.mandatoryInventoryIds[0] || null;
      markMandatoryInventoriesDoneForStore(payload.storeId, date, state);
    }

    if (hasDivergence) {
      openDivergence({
        type: location === 'cd' ? 'inventario_cd' : 'inventario_loja',
        date,
        routeId: store ? getEffectiveRoute(store.id, date, state) : null,
        driverId: store ? getEffectiveDriver(getEffectiveRoute(store.id, date, state), date, store.id, state) : null,
        storeId: store?.id || null,
        expectedQty: previousQty,
        actualQty: countedQty,
        differenceQty: diffQty,
        inventoryId: inventoryRecord.id,
        justification: notes || 'Diferença identificada entre saldo do sistema e contagem física do inventário.',
      });
    }

    audit('Inventário', hasDivergence ? 'Inventário com divergência' : 'Inventário sem divergência', `${location === 'cd' ? 'CD' : store?.name || 'Loja'} ajustado para ${sumQty(countedQty)} caixas.`);
  }


  if (type === 'APPLY_BULK_STORE_INVENTORY') {
    if (actor.role !== 'admin') {
      return { ok: false, error: 'Somente o ADM pode aplicar inventário em massa.' };
    }

    const date = payload.date || todayStr();
    const notes = (payload.notes || '').trim();
    const items = Array.isArray(payload.items) ? payload.items : [];

    if (!items.length) {
      return { ok: false, error: 'Nenhuma loja selecionada para inventário em massa.' };
    }

    if (notes.length < 4) {
      return { ok: false, error: 'Informe o motivo do inventário em massa.' };
    }

    const batchId = randomId('inv_lote');
    const applied = [];

    items.forEach((entry) => {
      const storeId = entry?.storeId;
      const store = getStoreById(storeId, state);
      if (!store || store.status === 'inactive') return;

      const previousQty = getStoreStock(storeId, state);
      const countedQty = sanitizeQty(entry.qty);
      const diffQty = qtyDiff(countedQty, previousQty);
      const hasDivergence = hasQtyDifference(previousQty, countedQty);

      state.storeStocks[storeId] = countedQty;

      const inventoryRecord = {
        id: randomId('inv'),
        batchId,
        source: 'bulk_admin',
        date,
        location: 'store',
        storeId,
        previousQty,
        countedQty,
        diffQty,
        hasDivergence,
        notes,
        createdBy: actor.name,
        createdById: actor.id,
        createdAt: nowIso(),
      };

      state.movements.inventories.unshift(inventoryRecord);

      inventoryRecord.mandatoryInventoryIds = getPendingMandatoryInventoriesForStore(storeId, date, state).map((schedule) => schedule.id);
      inventoryRecord.mandatoryInventoryId = inventoryRecord.mandatoryInventoryIds[0] || null;
      markMandatoryInventoriesDoneForStore(storeId, date, state);

      if (hasDivergence) {
        const routeId = getEffectiveRoute(storeId, date, state);
        openDivergence({
          type: 'inventario_loja',
          date,
          routeId,
          driverId: getEffectiveDriver(routeId, date, storeId, state),
          storeId,
          expectedQty: previousQty,
          actualQty: countedQty,
          differenceQty: diffQty,
          inventoryId: inventoryRecord.id,
          batchId,
          justification: notes || 'Diferença identificada em inventário em massa realizado pelo ADM.',
        });
      }

      applied.push({ store, previousQty, countedQty, diffQty, hasDivergence });
    });

    state.movements.inventories = state.movements.inventories.slice(0, 3000);

    if (!applied.length) {
      return { ok: false, error: 'Nenhuma loja válida encontrada para aplicar o inventário.' };
    }

    const changed = applied.filter((item) => item.hasDivergence).length;
    audit('Inventário', 'Inventário em massa aplicado', `${applied.length} loja(s) inventariada(s) em ${formatDateBR(date)}. ${changed} com alteração de saldo. Motivo: ${notes}`);
    applied.slice(0, 80).forEach((item) => {
      if (!item.hasDivergence) return;
      audit('Inventário', 'Correção por inventário em massa', `${item.store.name}: ${formatQtyCompact(item.previousQty)} → ${formatQtyCompact(item.countedQty)}. Diferença: ${formatSignedQtyCompact(item.diffQty)}. Motivo: ${notes}`);
    });
  }

  if (type === 'CLOSE_DAY') {
    if (!['admin', 'cd'].includes(actor.role)) return { ok: false, error: 'Somente ADM ou CD pode fechar o dia.' };
    const date = payload.date || todayStr();
    const summary = getDayOperationSummary(date, state);
    const pendencies = getOperationalPendencies(date, state);
    const existing = getClosingForDate(date, state);
    const record = {
      id: existing?.id || randomId('close'),
      date,
      sent: summary.sent,
      driverValidated: summary.driverValidated,
      received: summary.received,
      pickedUp: summary.pickedUp,
      returned: summary.returned,
      openDivergences: summary.divergences.length,
      pendingCount: pendencies.length,
      notes: String(payload.notes || '').trim(),
      closedBy: actor.name,
      closedById: actor.id,
      closedAt: nowIso(),
    };
    if (existing) {
      Object.assign(existing, record);
    } else {
      state.dayClosings.unshift(record);
    }
    audit('Fechamento do Dia', 'Fechamento registrado', `${formatDateBR(date)} fechado com ${pendencies.length} pendência(s) e ${summary.divergences.length} divergência(s) aberta(s).`);
  }

  if (type === 'CANCEL_MOVEMENT') {
    if (actor.role !== 'admin') return { ok: false, error: 'Somente o ADM pode estornar lançamentos.' };
    const movementType = String(payload.movementType || '');
    const movement = getMovementByType(movementType, payload.id, state);
    const reason = String(payload.reason || '').trim();
    if (!movement) return { ok: false, error: 'Lançamento não encontrado.' };
    if (!reason || reason.length < 6) return { ok: false, error: 'Informe o motivo do estorno com pelo menos 6 caracteres.' };
    if (movement.canceledAt || movement.status === 'estornado') return { ok: false, error: 'Este lançamento já foi estornado.' };

    const cancelInfo = {
      canceledAt: nowIso(),
      canceledBy: actor.name,
      canceledById: actor.id,
      cancelReason: reason,
      previousStatus: movement.status || null,
      status: 'estornado',
    };

    if (movementType === 'outbound') {
      if (movement.receiptId || movement.driverDeliveryId) {
        return { ok: false, error: 'Esta saída já possui validação/recebimento. Estorne primeiro os movimentos vinculados.' };
      }
      state.cdStock = addQty(getCdStock(state), movement.qty);
      Object.assign(movement, cancelInfo);
    } else if (movementType === 'driverDelivery') {
      const outbound = state.movements.outbounds.find((item) => item.id === movement.outboundId);
      if (outbound) {
        delete outbound.driverDeliveryId;
        delete outbound.driverDeliveredTotal;
        delete outbound.driverDeliveredQty;
        delete outbound.driverDeliveredBy;
        outbound.status = outbound.goianiaTransferId ? 'distribuida_goiania' : 'aguardando_loja';
      }
      Object.assign(movement, cancelInfo);
    } else if (movementType === 'receipt') {
      const stock = getStoreStock(movement.storeId, state);
      state.storeStocks[movement.storeId] = subQty(stock, movement.qty);
      const outbound = state.movements.outbounds.find((item) => item.id === movement.outboundId);
      if (outbound) {
        delete outbound.receiptId;
        delete outbound.receivedQty;
        outbound.status = outbound.driverDeliveryId ? 'validada_motorista' : (outbound.goianiaTransferId ? 'distribuida_goiania' : 'aguardando_loja');
      }
      Object.assign(movement, cancelInfo);
    } else if (movementType === 'pickup') {
      if (movement.returnBatchId) return { ok: false, error: 'Este recolhimento já retornou ao CD. Estorne primeiro o retorno no CD.' };
      state.storeStocks[movement.storeId] = addQty(getStoreStock(movement.storeId, state), movement.qty);
      Object.assign(movement, cancelInfo);
    } else if (movementType === 'occupiedBox') {
      Object.assign(movement, cancelInfo);
    } else if (movementType === 'releasedBox') {
      Object.assign(movement, cancelInfo);
    } else if (movementType === 'return') {
      state.cdStock = subQty(getCdStock(state), movement.qty);
      state.movements.pickups.forEach((pickup) => {
        if (pickup.returnBatchId === movement.id) pickup.returnBatchId = null;
      });
      Object.assign(movement, cancelInfo);
    } else if (movementType === 'goianiaTransfer') {
      const outbound = state.movements.outbounds.find((item) => item.id === movement.outboundId);
      if (outbound && outbound.goianiaTransferId === movement.id) {
        delete outbound.goianiaTransferId;
        delete outbound.goianiaTransferDriverId;
        outbound.status = 'aguardando_loja';
      }
      Object.assign(movement, cancelInfo);
    } else if (movementType === 'goianiaLoad') {
      Object.assign(movement, cancelInfo);
    } else if (movementType === 'inventory') {
      if (movement.location === 'cd') {
        state.cdStock = sanitizeQty(movement.previousQty);
      } else if (movement.storeId) {
        state.storeStocks[movement.storeId] = sanitizeQty(movement.previousQty);
      }
      Object.assign(movement, cancelInfo);
    } else {
      return { ok: false, error: 'Tipo de movimento não suportado para estorno.' };
    }

    audit('Estornos e Correções', 'Lançamento estornado', `${getMovementKindLabel(movementType)} ${payload.id} estornado. Motivo: ${reason}.`);
  }

  if (type === 'UPDATE_SETTINGS') {
    state.settings.safetyMargin = safeInt(payload.safetyMargin);
    Object.keys(state.settings.manualBaselineByWeekday).forEach((weekday) => {
      state.settings.manualBaselineByWeekday[weekday] = safeInt(payload.manualBaselineByWeekday?.[weekday]);
    });
    state.stores.forEach((store) => {
      const newLimit = safeInt(payload.storeLimits?.[store.id]);
      if (newLimit > 0) {
        store.highStockLimit = newLimit;
      }
    });
    audit('Configurações', 'Atualização de parâmetros', 'Limites e bases de previsão atualizados.');
  }

  state.lastUpdatedAt = nowIso();
  return { ok: true, state };
}

function renderLoginState() {
  const changingPassword = !!passwordChangeUser;
  els.loginForm.classList.toggle('hidden', changingPassword);
  els.passwordChangePanel?.classList.toggle('hidden', !changingPassword);
  if (changingPassword && els.passwordChangeUserName) {
    els.passwordChangeUserName.textContent = `${passwordChangeUser.name} (${passwordChangeUser.username})`;
  }
}

function clearPasswordChangeForm() {
  if (els.firstNewPassword) els.firstNewPassword.value = '';
  if (els.firstConfirmPassword) els.firstConfirmPassword.value = '';
}

function restoreSession() {
  const session = sessionStorage.getItem(SESSION_KEY);
  if (!session) return;
  const data = JSON.parse(session);
  const found = appState.users.find((user) => user.id === data.userId);
  if (found) {
    if (mustChangePassword(found)) {
      sessionStorage.removeItem(SESSION_KEY);
      passwordChangeUser = found;
      currentUser = null;
      return;
    }
    currentUser = found;
    currentView = getFirstAllowedView(currentUser);
  }
}

function handleLogin(event) {
  event.preventDefault();
  const username = normalizeLoginValue(els.loginUsername.value);
  const password = els.loginPassword.value.trim();
  const user = appState.users.find((item) => normalizeLoginValue(item.username) === username && item.password === password);
  if (!user) {
    showToast('Usuário ou senha inválidos.', 'error');
    return;
  }

  if (mustChangePassword(user)) {
    passwordChangeUser = user;
    currentUser = null;
    clearPasswordChangeForm();
    showToast('Altere a senha inicial para continuar.', 'warn');
    render();
    return;
  }

  currentUser = user;
  passwordChangeUser = null;
  currentView = getFirstAllowedView(currentUser);
  sessionStorage.setItem(SESSION_KEY, JSON.stringify({ userId: user.id }));
  showToast(`Bem-vindo, ${user.name.split(' ')[0]}!`);
  render();
}

async function handleFirstPasswordChange(event) {
  event.preventDefault();
  if (!passwordChangeUser) return;

  const newPassword = els.firstNewPassword.value.trim();
  const confirmPassword = els.firstConfirmPassword.value.trim();

  if (newPassword !== confirmPassword) {
    showToast('As senhas digitadas não conferem.', 'error');
    return;
  }

  const actor = passwordChangeUser;
  const result = await persistMutation(
    'CHANGE_PASSWORD',
    { userId: actor.id, password: newPassword },
    'Senha alterada com sucesso.',
    actor,
    { skipRender: true }
  );

  if (!result.ok) return;

  const updatedUser = getUserById(actor.id);
  currentUser = updatedUser;
  passwordChangeUser = null;
  currentView = getFirstAllowedView(currentUser);
  sessionStorage.setItem(SESSION_KEY, JSON.stringify({ userId: updatedUser.id }));
  clearPasswordChangeForm();
  render();
}

function logout() {
  sessionStorage.removeItem(SESSION_KEY);
  currentUser = null;
  passwordChangeUser = null;
  els.sidebar.classList.remove('open');
  render();
}

function needsReliefDriverRouteSelection(user = currentUser, date = todayStr(), state = appState) {
  return isReliefDriver(user) && !getReliefDriverAssignment(user, date, state);
}

function renderReliefDriverRouteSelection() {
  const today = todayStr();
  const routes = [...appState.routes].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
  const recentAssignments = (appState.reliefDriverAssignments || [])
    .filter((item) => item.userId === currentUser.id)
    .slice(0, 8);

  return `
    <div class="grid-2">
      <div class="card">
        <div class="page-header">
          <div>
            <h3>Caio, selecione a rota do dia</h3>
            <p class="muted">Depois de confirmar, essa rota fica fixa para seu acesso durante todo o dia.</p>
          </div>
        </div>

        <form id="form-rota-folguista" class="stack">
          <input type="hidden" name="userId" value="${currentUser.id}" />
          <label>Data
            <input type="date" name="date" value="${today}" readonly required />
          </label>
          <label>Rota que será feita hoje
            <select name="routeId" required>
              <option value="">Selecione a rota</option>
              ${routes.map((route) => `<option value="${route.id}">${route.name} • Motorista fixo: ${getUserById(route.driverId)?.name || '-'}</option>`).join('')}
            </select>
          </label>
          <div class="alert-strip warning">
            <span>Ao confirmar, você verá somente as lojas e movimentações da rota escolhida. A troca no mesmo dia só poderá ser feita pelo ADM.</span>
          </div>
          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Confirmar rota do dia</button>
          </div>
        </form>
      </div>

      <div class="card">
        <div class="section-header">
          <div>
            <h3>Histórico do folguista</h3>
          </div>
        </div>
        <div class="list">
          ${recentAssignments.length ? recentAssignments.map((item) => `
            <div class="list-item">
              <div class="list-item-head">
                <strong>${formatDateBR(item.date)}</strong>
                ${item.canceledAt ? '<span class="tag warn">Alterada</span>' : '<span class="tag ok">Ativa</span>'}
              </div>
              <div class="muted">Rota: ${getRouteById(item.routeId)?.name || item.routeName || '-'}</div>
              <small class="muted">Confirmado por ${item.selectedBy || '-'} em ${formatDateTimeBR(item.selectedAt)}</small>
            </div>
          `).join('') : '<div class="empty">Nenhuma rota registrada para este folguista.</div>'}
        </div>
      </div>
    </div>
  `;
}

function bindReliefDriverRouteEvents() {
  const form = document.getElementById('form-rota-folguista');
  if (!form) return;
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const route = getRouteById(form.routeId.value);
    if (!route) {
      showToast('Selecione a rota do dia.', 'error');
      return;
    }
    const confirmed = window.confirm(`Confirmar ${route.name} como sua rota de hoje? Depois disso, somente o ADM poderá alterar.`);
    if (!confirmed) return;
    const result = await persistMutation('SET_RELIEF_DRIVER_ROUTE', {
      userId: form.userId.value,
      date: form.date.value || todayStr(),
      routeId: form.routeId.value,
    }, 'Rota do dia definida para o folguista.');
    if (result.ok) render();
  });
}

function render() {
  if (!currentUser) {
    els.loginScreen.classList.remove('hidden');
    els.appShell.classList.add('hidden');
    renderLoginState();
    return;
  }

  if (mustChangePassword(currentUser)) {
    passwordChangeUser = currentUser;
    currentUser = null;
    sessionStorage.removeItem(SESSION_KEY);
    render();
    return;
  }

  if (!canAccessView(currentView, currentUser)) {
    currentView = getFirstAllowedView(currentUser);
  }

  els.loginScreen.classList.add('hidden');
  els.appShell.classList.remove('hidden');
  els.todayLabel.textContent = new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' });
  els.sidebarUserName.textContent = currentUser.name;
  els.sidebarUserRole.textContent = ROLE_LABELS[currentUser.role];
  els.topbarUserName.textContent = currentUser.name;
  els.topbarUserRole.textContent = ROLE_LABELS[currentUser.role];

  renderSidebar();
  renderMobileQuickNav();

  if (needsReliefDriverRouteSelection(currentUser)) {
    els.pageTitle.textContent = 'Selecionar rota do dia';
    els.pageSubtitle.textContent = 'Motorista folguista precisa fixar a rota antes de usar o sistema';
    els.mainContent.innerHTML = renderReliefDriverRouteSelection();
    bindReliefDriverRouteEvents();
    return;
  }

  renderCurrentView();
}

function renderSidebar() {
  const counts = getDynamicCounts();
  const allowed = NAV_ITEMS.filter((item) => canAccessView(item.key, currentUser));
  els.sidebarNav.innerHTML = allowed.map((item) => `
    <button class="nav-link ${currentView === item.key ? 'active' : ''}" data-view="${item.key}">
      <span>${item.label}</span>
      ${counts[item.key] ? `<small>${counts[item.key]}</small>` : ''}
    </button>
  `).join('');

  els.sidebarNav.querySelectorAll('[data-view]').forEach((button) => {
    button.addEventListener('click', () => {
      currentView = button.dataset.view;
      render();
      els.sidebar.classList.remove('open');
    });
  });
}


function getFastAlertCount(state = appState, user = currentUser) {
  let count = 0;
  const forecast = getForecast(state);
  const companyTotal = sumQty(getCdStock(state));
  const safetyTarget = forecast.predicted + safeInt(state.settings.safetyMargin);

  if (['admin', 'viewer', 'cd'].includes(user?.role)) {
    if (companyTotal < forecast.predicted || companyTotal < safetyTarget) count += 1;
  }

  getStoreStockRows(state, user).forEach((row) => {
    if (row.isHigh) count += 1;
  });

  count += getVisibleDivergences(state, user).filter((div) => div.status === 'aberta').length;
  count += (state.movements.occupiedBoxes || []).filter((item) => isActiveMovement(item) && isMovementVisibleToUser(item, user, state)).length;
  return count;
}

function getDynamicCounts() {
  const key = [
    appState?.lastUpdatedAt || '',
    currentUser?.id || '',
    currentUser?.role || '',
    todayStr(),
    appState?.divergences?.length || 0,
    appState?.movements?.outbounds?.length || 0,
    appState?.movements?.driverDeliveries?.length || 0,
    appState?.movements?.receipts?.length || 0,
    appState?.movements?.pickups?.length || 0,
    appState?.mandatoryInventories?.length || 0,
  ].join('|');

  if (dynamicCountsCache.key === key && dynamicCountsCache.value) {
    return dynamicCountsCache.value;
  }

  const openDivergences = getVisibleDivergences(appState, currentUser).filter((div) => div.status === 'aberta').length;
  const pendingCount = getVisiblePendenciesForCurrentUser(todayStr()).length;
  const mandatoryCount = getPendingMandatoryInventoriesForUser(currentUser, todayStr(), appState).length;
  const counts = {
    divergencias: openDivergences,
    alertas: getFastAlertCount(appState, currentUser) + mandatoryCount,
    pendencias: pendingCount,
    inventario: mandatoryCount,
  };
  dynamicCountsCache = { key, value: counts };
  return counts;
}

function renderCurrentView() {
  if (!canAccessView(currentView, currentUser)) {
    currentView = getFirstAllowedView(currentUser);
  }
  const meta = VIEW_META[currentView] || VIEW_META.dashboard;
  els.pageTitle.textContent = meta.title;
  els.pageSubtitle.textContent = meta.subtitle;

  const renderers = {
    dashboard: renderDashboard,
    saidas: renderSaidas,
    resumoEnvios: renderResumoEnvios,
    entregasMotorista: renderEntregasMotorista,
    recebimentos: renderRecebimentos,
    recolhimentos: renderRecolhimentos,
    caixasOcupadas: renderCaixasOcupadas,
    caixasLiberadas: renderCaixasLiberadas,
    retornos: renderRetornos,
    estoque: renderEstoque,
    inventario: renderInventario,
    divergencias: renderDivergencias,
    alertas: renderAlertas,
    fechamento: renderFechamento,
    pendencias: renderPendencias,
    estornos: renderEstornos,
    rotas: renderRotas,
    lojas: renderLojas,
    cargaGoiania: renderCargaGoiania,
    distribuicaoGoiania: renderDistribuicaoGoiania,
    relatorios: renderRelatorios,
    usuarios: renderUsuarios,
    configuracoes: renderConfiguracoes,
  };

  const viewHtml = renderers[currentView] ? renderers[currentView]() : renderDashboard();
  const globalMandatoryNotice = ['dashboard', 'inventario'].includes(currentView) ? '' : renderMandatoryInventoryNotice(todayStr());
  els.mainContent.innerHTML = globalMandatoryNotice ? `<div class="stack">${globalMandatoryNotice}${viewHtml}</div>` : viewHtml;
  enhanceMobileTables();
  bindViewEvents();
}

function renderMobileQuickNav() {
  // Barra inferior mobile removida a pedido: navegação apenas pelo botão de menu (☰).
  if (els.mobileQuickNav) els.mobileQuickNav.innerHTML = '';
}

function enhanceMobileTables() {
  if (!els.mainContent) return;
  els.mainContent.querySelectorAll('table').forEach((table) => {
    const headers = Array.from(table.querySelectorAll('thead th, tr:first-child th'))
      .map((th) => th.textContent.replace(/\s+/g, ' ').trim());
    if (!headers.length) return;
    table.querySelectorAll('tbody tr').forEach((row) => {
      Array.from(row.children).forEach((cell, index) => {
        if (cell.tagName.toLowerCase() !== 'td') return;
        if (!cell.dataset.label && headers[index]) {
          cell.dataset.label = headers[index];
        }
      });
    });
  });
}

function getEffectiveRoute(storeId, date = todayStr(), state = appState) {
  const exception = state.movements.routeExceptions.find((item) => item.storeId === storeId && item.date === date);
  if (exception) return exception.newRouteId;

  const store = getStoreById(storeId, state);
  if (!store) return null;

  const day = new Date(`${date}T12:00:00`).getDay();
  if (day === 0 && store.sundayRouteId) {
    return store.sundayRouteId;
  }

  return store.defaultRouteId || null;
}

function getEffectiveDriver(routeId, date = todayStr(), storeId = null, state = appState) {
  if (storeId) {
    const exception = state.movements.routeExceptions.find((item) => item.storeId === storeId && item.date === date);
    if (exception?.newDriverId) return exception.newDriverId;
  }
  const reliefAssignment = getReliefAssignmentForRoute(routeId, date, state);
  if (reliefAssignment?.userId) return reliefAssignment.userId;
  return getRouteById(routeId, state)?.driverId || null;
}

function canSeeGlobalData(user = currentUser) {
  return !!user && ['admin', 'viewer'].includes(user.role);
}

function getDriverRouteIds(user = currentUser, state = appState, date = todayStr()) {
  if (!user || user.role !== 'driver') return [];
  const ids = new Set();
  const effectiveRouteId = getEffectiveDriverRouteId(user, date, state);
  if (effectiveRouteId) ids.add(effectiveRouteId);
  if (!isReliefDriver(user) && user.routeId) ids.add(user.routeId);
  state.routes.forEach((route) => {
    if (route.driverId === user.id) ids.add(route.id);
  });
  if (isGoianiaTrunkUser(user, date, state)) {
    GOIANIA_ROUTE_IDS.forEach((id) => ids.add(id));
    ids.add(GOIANIA_TRUNK_ROUTE_ID);
  }
  return [...ids];
}

function canUserSeeRoute(routeId, user = currentUser, state = appState, date = todayStr()) {
  if (!user || !routeId) return false;
  if (canSeeGlobalData(user)) return true;
  if (user.role === 'cd') return false;
  if (user.role === 'driver') return getDriverRouteIds(user, state, date).includes(routeId);
  if (user.role === 'promoter' && user.storeId) {
    const store = getStoreById(user.storeId, state);
    return !!store && (store.defaultRouteId === routeId || store.sundayRouteId === routeId);
  }
  return false;
}

function canUserSeeStore(storeId, user = currentUser, date = todayStr(), state = appState) {
  if (!user || !storeId) return false;
  const store = getStoreById(storeId, state);
  if (!store || !isActiveStore(store)) return false;
  if (canSeeGlobalData(user)) return true;
  if (user.role === 'promoter') return user.storeId === storeId;
  if (user.role === 'driver') {
    if (storeId === SUPPORT_POINT_STORE_ID && isGoianiaTrunkUser(user, date, state)) return true;
    const routeId = getEffectiveRoute(storeId, date, state);
    if (canUserSeeRoute(routeId, user, state, date)) return true;
    return (state.movements.goianiaTransfers || []).some((item) =>
      isActiveMovement(item) && item.storeId === storeId && item.driverId === user.id && (!date || item.date === date)
    );
  }
  return false;
}

function getVisibleStores(state = appState, user = currentUser, date = todayStr()) {
  if (!user) return [];
  const active = getActiveStores(state);
  if (canSeeGlobalData(user)) return active;
  if (user.role === 'promoter') return active.filter((store) => store.id === user.storeId);
  if (user.role === 'driver') return active.filter((store) => canUserSeeStore(store.id, user, date, state));
  return [];
}

function getVisibleRoutes(state = appState, user = currentUser) {
  if (!user) return [];
  if (canSeeGlobalData(user)) return state.routes;
  if (user.role === 'driver') return state.routes.filter((route) => canUserSeeRoute(route.id, user, state, todayStr()));
  if (user.role === 'promoter' && user.storeId) {
    const store = getStoreById(user.storeId, state);
    const ids = new Set([store?.defaultRouteId, store?.sundayRouteId].filter(Boolean));
    return state.routes.filter((route) => ids.has(route.id));
  }
  return [];
}

function isMovementVisibleToUser(item, user = currentUser, state = appState) {
  if (!user || !item) return false;
  if (canSeeGlobalData(user)) return true;
  if (user.role === 'cd') return true;
  if (user.role === 'promoter') return item.storeId === user.storeId;
  if (user.role === 'driver') {
    if (item.driverId === user.id || item.originalDriverId === user.id || item.goianiaTransferDriverId === user.id) return true;
    if (item.routeId && canUserSeeRoute(item.routeId, user, state, item.date || todayStr())) return true;
    if (item.storeId && canUserSeeStore(item.storeId, user, item.date || todayStr(), state)) return true;
  }
  return false;
}


function canEditOutboundMovement(item, user = currentUser, state = appState) {
  if (!item || !isActiveMovement(item) || item.status === 'historico') return false;
  if (!user) return false;
  if (user.role === 'admin') return true;
  if (user.role === 'cd') {
    return item.createdById ? item.createdById === user.id : item.createdBy === user.name;
  }
  return false;
}

function canEditDriverDeliveryMovement(item, user = currentUser, state = appState) {
  if (!item || !isActiveMovement(item)) return false;
  if (!user) return false;
  if (user.role === 'admin') return true;
  if (user.role === 'driver') return item.driverId === user.id || item.createdById === user.id;
  return false;
}

function canEditReceiptMovement(item, user = currentUser, state = appState) {
  if (!item || !isActiveMovement(item)) return false;
  if (!user) return false;
  if (user.role === 'admin') return true;
  if (user.role === 'promoter') return item.storeId === user.storeId || item.createdById === user.id;
  return false;
}

function isDivergenceVisibleToUser(div, user = currentUser, state = appState) {
  if (!user || !div) return false;
  if (canSeeGlobalData(user)) return true;
  if (user.role === 'cd') return ['retorno_cd', 'inventario_cd', 'carga_goiania'].includes(div.type);
  if (user.role === 'driver') {
    return div.driverId === user.id || div.responsibleUserId === user.id || canUserSeeRoute(div.routeId, user, state, div.date || todayStr()) || canUserSeeStore(div.storeId, user, div.date || todayStr(), state);
  }
  if (user.role === 'promoter') return div.storeId === user.storeId || div.responsibleUserId === user.id;
  return false;
}

function getVisibleDivergences(state = appState, user = currentUser) {
  return state.divergences.filter((item) => isDivergenceVisibleToUser(item, user, state));
}

function getPermissionLabel(user, state = appState) {
  if (!user) return '-';
  if (user.role === 'admin') return 'Acesso total ao sistema';
  const viewCount = getEffectiveAllowedViews(user).length;
  if (user.role === 'viewer') return `Visualizador: ${viewCount} aba(s) liberada(s)`;
  if (user.role === 'cd') return `CD: ${viewCount} aba(s) liberada(s)`;
  if (user.role === 'driver') return `Motorista: ${viewCount} aba(s) liberada(s) • ${getUserAccessTarget(user, state)}`;
  if (user.role === 'promoter') return `Promotor: ${viewCount} aba(s) liberada(s) • ${formatStoreNameForUser(getUserAccessTarget(user, state))}`;
  return 'Permissão padrão do perfil';
}

function getCompanyBoxTotals(state = appState) {
  const cdQty = getCdStock(state);
  const storeQty = getActiveStores(state).reduce((acc, store) => addQty(acc, getStoreStock(store.id, state)), emptyQty());
  const inReturnQty = (state.movements.pickups || [])
    .filter((item) => isActiveMovement(item) && !item.returnBatchId && !item.supportPointDropId)
    .reduce((acc, item) => addQty(acc, item.totalOnly ? buildQtyFromTotal(safeInt(item.totalQty), item.qty || emptyQty()) : sanitizeQty(item.qty)), emptyQty());
  const byType = addQty(addQty(cdQty, storeQty), inReturnQty);
  return {
    cd: sumQty(cdQty),
    stores: sumQty(storeQty),
    inReturn: sumQty(inReturnQty),
    total: sumQty(byType),
    byType,
    cdQty,
    storeQty,
    inReturnQty,
  };
}


function getCdReturnPendingGroups(state = appState, user = currentUser) {
  const groups = new Map();
  const ensureGroup = (date, routeId, driverId) => {
    const key = `${date || ''}|${routeId || ''}|${driverId || ''}`;
    if (!groups.has(key)) {
      groups.set(key, {
        key,
        date: date || todayStr(),
        routeId: routeId || '',
        driverId: driverId || '',
        pickupsCount: 0,
        pickupTotal: 0,
        freightReturnsCount: 0,
        freightTotal: 0,
        supportDropTotal: 0,
        stores: new Set(),
        oldestCreatedAt: '',
        newestCreatedAt: '',
      });
    }
    return groups.get(key);
  };
  const registerCreatedAt = (group, createdAt) => {
    if (!createdAt) return;
    if (!group.oldestCreatedAt || createdAt < group.oldestCreatedAt) group.oldestCreatedAt = createdAt;
    if (!group.newestCreatedAt || createdAt > group.newestCreatedAt) group.newestCreatedAt = createdAt;
  };

  (state.movements.pickups || [])
    .filter((item) => isActiveMovement(item) && !item.returnBatchId && !item.supportPointDropId && isMovementVisibleToUser(item, user, state))
    .forEach((item) => {
      const group = ensureGroup(item.date, item.routeId, item.driverId);
      group.pickupsCount += 1;
      group.pickupTotal += safeInt(item.totalQty ?? sumQty(item.qty));
      if (item.storeId) group.stores.add(item.storeId);
      registerCreatedAt(group, item.createdAt);
    });

  (state.movements.goianiaFreightReturns || [])
    .filter((item) => isActiveMovement(item) && !item.cdReturnBatchId)
    .forEach((item) => {
      const driverId = item.receivedByDriverId || item.trunkDriverId || GOIANIA_TRUNK_DRIVER_IDS[0];
      const synthetic = { date: item.date, routeId: GOIANIA_TRUNK_ROUTE_ID, driverId };
      if (!isMovementVisibleToUser(synthetic, user, state)) return;
      const group = ensureGroup(item.date, GOIANIA_TRUNK_ROUTE_ID, driverId);
      group.freightReturnsCount += 1;
      group.freightTotal += safeInt(item.totalReceived ?? item.totalQty ?? sumQty(item.qty));
      registerCreatedAt(group, item.createdAt);
    });

  (state.movements.supportPointMovements || [])
    .filter((item) => isActiveMovement(item) && item.action === 'drop' && !item.cdReturnBatchId)
    .forEach((item) => {
      const synthetic = { date: item.date, routeId: GOIANIA_TRUNK_ROUTE_ID, driverId: item.driverId };
      if (!isMovementVisibleToUser(synthetic, user, state)) return;
      const group = ensureGroup(item.date, GOIANIA_TRUNK_ROUTE_ID, item.driverId);
      group.supportDropTotal += safeInt(item.totalQty ?? sumQty(item.qty));
      registerCreatedAt(group, item.createdAt);
    });

  return Array.from(groups.values())
    .map((group) => {
      const expectedTotal = Math.max(0, group.pickupTotal + group.freightTotal - group.supportDropTotal);
      const daysOpen = Math.max(0, Math.floor((new Date(`${todayStr()}T12:00:00`) - new Date(`${group.date}T12:00:00`)) / 86400000));
      const storeNames = Array.from(group.stores)
        .map((storeId) => getStoreById(storeId, state)?.name || '')
        .filter(Boolean)
        .sort((a, b) => a.localeCompare(b, 'pt-BR'));
      return {
        ...group,
        expectedTotal,
        daysOpen,
        storeCount: group.stores.size,
        storeNames,
        routeName: getRouteById(group.routeId, state)?.name || '-',
        driverName: getUserById(group.driverId, state)?.name || '-',
      };
    })
    .filter((group) => group.expectedTotal > 0)
    .sort((a, b) => {
      if (a.date !== b.date) return a.date.localeCompare(b.date);
      if (b.expectedTotal !== a.expectedTotal) return b.expectedTotal - a.expectedTotal;
      return a.routeName.localeCompare(b.routeName, 'pt-BR');
    });
}

function getCdReturnPendingSummary(state = appState, user = currentUser) {
  const groups = getCdReturnPendingGroups(state, user);
  const total = groups.reduce((acc, group) => acc + group.expectedTotal, 0);
  const routes = new Set(groups.map((group) => group.routeId).filter(Boolean)).size;
  const drivers = new Set(groups.map((group) => group.driverId).filter(Boolean)).size;
  const oldest = groups.length ? groups.reduce((min, group) => group.date < min ? group.date : min, groups[0].date) : '';
  return { groups, total, routes, drivers, oldest };
}

function getTodayMetrics(state = appState, user = currentUser) {
  const today = todayStr();
  const scopeUser = user?.role === 'promoter' ? { role: 'viewer' } : user;
  const inScope = (item) => isMovementVisibleToUser(item, scopeUser, state);
  const outbounds = state.movements.outbounds.filter((item) => isActiveMovement(item) && item.date === today && item.status !== 'historico' && inScope(item));
  const receipts = state.movements.receipts.filter((item) => isActiveMovement(item) && item.date === today && inScope(item));
  const pickupsToday = state.movements.pickups.filter((item) => isActiveMovement(item) && item.date === today && inScope(item));
  const returnsToday = state.movements.returns.filter((item) => isActiveMovement(item) && item.date === today && inScope(item));
  const sent = outbounds.reduce((acc, item) => acc + sumQty(item.qty), 0);
  const confirmed = receipts.reduce((acc, item) => acc + sumQty(item.qty), 0);
  const pickups = pickupsToday.reduce((acc, item) => acc + (item.totalOnly ? safeInt(item.totalQty) : sumQty(item.qty)), 0);
  const returns = returnsToday.reduce((acc, item) => acc + sumQty(item.qty), 0);
  const companyTotals = getCompanyBoxTotals(state);
  const company = user?.role === 'driver' ? 0 : (user?.role === 'promoter' ? companyTotals.total : sumQty(state.cdStock));
  const visibleStores = getVisibleStores(state, user, today);
  const stores = user?.role === 'promoter'
    ? visibleStores.reduce((acc, store) => acc + sumQty(getStoreStock(store.id, state)), 0)
    : visibleStores.reduce((acc, store) => acc + sumQty(getStoreStock(store.id, state)), 0);
  const inReturn = user?.role === 'promoter'
    ? companyTotals.inReturn
    : state.movements.pickups.filter((item) => isActiveMovement(item) && !item.returnBatchId && inScope(item)).reduce((acc, item) => acc + (item.totalOnly ? safeInt(item.totalQty) : sumQty(item.qty)), 0);
  return { sent, confirmed, pickups, returns, company, stores, inReturn };
}

function getForecast(state = appState, date = todayStr()) {
  const weekday = new Date(`${date}T12:00:00`).getDay();
  const outbounds = state.movements.outbounds
    .filter((item) => item.status === 'historico' || item.date < date)
    .filter((item) => new Date(`${item.date}T12:00:00`).getDay() === weekday)
    .sort((a, b) => b.date.localeCompare(a.date));

  const grouped = {};
  outbounds.forEach((item) => {
    grouped[item.date] = (grouped[item.date] || 0) + sumQty(item.qty);
  });

  const dates = Object.keys(grouped).sort((a, b) => b.localeCompare(a)).slice(0, 8);
  const values = dates.map((d) => grouped[d]).filter(Boolean);
  let predicted = 0;
  let source = 'manual';

  if (values.length >= 3) {
    predicted = Math.round(values.reduce((acc, val) => acc + val, 0) / values.length);
    source = 'histórico';
  } else {
    predicted = safeInt(state.settings.manualBaselineByWeekday[weekday]);
    source = 'base manual';
  }

  return { weekday, predicted, source };
}

function getStoreStockRows(state = appState, user = currentUser, date = todayStr()) {
  return getVisibleStores(state, user, date).map((store) => {
    const qty = getStoreStock(store.id, state);
    return {
      store,
      qty,
      total: sumQty(qty),
      routeId: getEffectiveRoute(store.id, date, state),
      isHigh: sumQty(qty) > safeInt(store.highStockLimit),
    };
  }).sort((a, b) => b.total - a.total);
}

function getAllAlerts(state = appState) {
  const alerts = [];
  const forecast = getForecast(state);
  const companyTotal = sumQty(getCdStock(state));
  const safetyTarget = forecast.predicted + safeInt(state.settings.safetyMargin);

  if (['admin', 'viewer', 'cd'].includes(currentUser?.role)) {
    if (companyTotal < forecast.predicted) {
      alerts.push({
        id: 'critical_stock',
        priority: 'critical',
        title: 'Estoque crítico no CD',
        description: `${weekdayName(forecast.weekday)} costuma exigir ${forecast.predicted} caixas. O CD tem ${companyTotal}.`,
        detail: `Déficit estimado: ${forecast.predicted - companyTotal} caixas.`,
      });
    } else if (companyTotal < safetyTarget) {
      alerts.push({
        id: 'warning_stock',
        priority: 'warning',
        title: 'Estoque abaixo da margem de segurança',
        description: `${weekdayName(forecast.weekday)} tem previsão de ${forecast.predicted} caixas e margem de segurança de ${safeInt(state.settings.safetyMargin)}.`,
        detail: `Estoque atual: ${companyTotal} caixas.`,
      });
    }
  }

  getStoreStockRows(state, currentUser).filter((row) => row.isHigh).forEach((row) => {
    alerts.push({
      id: `high_${row.store.id}`,
      priority: 'warning',
      title: 'Loja com estoque alto',
      description: `${row.store.name} está com ${row.total} caixas em loja.`,
      detail: `Limite configurado: ${row.store.highStockLimit} caixas.`,
    });
  });

  getVisibleDivergences(state, currentUser).filter((div) => div.status === 'aberta').forEach((div) => {
    alerts.push({
      id: div.id,
      priority: 'critical',
      title: 'Divergência em aberto',
      description: describeDivergence(div, state),
      detail: `Aberta em ${formatDateTimeBR(div.createdAt)}.`,
    });
  });


  (state.movements.occupiedBoxes || [])
    .filter((item) => isActiveMovement(item) && isMovementVisibleToUser(item, currentUser, state))
    .forEach((item) => {
      alerts.push({
        id: item.id,
        priority: 'warning',
        title: 'Caixas ocupadas na loja',
        description: `${getStoreById(item.storeId, state)?.name || 'Loja'} está com ${safeInt(item.totalQty)} caixa(s) impossibilitada(s) de recolhimento.`,
        detail: `Uso informado: ${item.usedFor || '-'}${item.notes ? ` • Obs.: ${item.notes}` : ''}`,
      });
    });

  return alerts;
}

function describeDivergence(div, state = appState) {
  const routeName = div.routeId ? getRouteById(div.routeId, state)?.name : '';
  const storeName = div.storeId ? getStoreById(div.storeId, state)?.name : '';
  const driverName = div.driverId ? getUserById(div.driverId, state)?.name : '';
  if (div.type === 'entrega_motorista_loja') {
    return `${driverName || 'Motorista'} informou quantidade diferente ao deixar caixas em ${storeName || 'loja'}${routeName ? ` na ${routeName}` : ''}.`;
  }
  if (div.type === 'carga_goiania') {
    return `Carga total de Goiânia saiu diferente da soma lançada pelo CD/galpão.`;
  }
  if (div.type === 'frete_goiania_retorno_vinicius') {
    return `${driverName || 'Freteiro'} devolveu quantidade diferente ao Vinicius/Sebastião.`;
  }
  if (div.type === 'recebimento_loja') {
    return `${storeName} confirmou quantidade diferente da saída do CD${routeName ? ` na ${routeName}` : ''}.`;
  }
  if (div.type === 'retorno_cd') {
    return `${routeName || 'Rota'} retornou quantidade diferente do que o motorista ${driverName || ''} informou ter recolhido.`;
  }
  if (div.type === 'inventario_cd') {
    return `Inventário do CD encontrou diferença entre o saldo do sistema e a contagem física.`;
  }
  if (div.type === 'inventario_loja') {
    return `Inventário da loja ${storeName || '-'} encontrou diferença entre o saldo do sistema e a contagem física${routeName ? ` na ${routeName}` : ''}.`;
  }
  return 'Diferença operacional identificada automaticamente.';
}

function getDivergenceTitle(div) {
  if (div.type === 'entrega_motorista_loja') return 'Entrega do Motorista';
  if (div.type === 'carga_goiania') return 'Carga Goiânia';
  if (div.type === 'frete_goiania_retorno_vinicius') return 'Frete Goiânia';
  if (div.type === 'retorno_cd') return 'Retorno no CD';
  if (div.type === 'recebimento_loja') return 'Recebimento na Loja';
  if (div.type === 'inventario_cd') return 'Inventário do CD';
  if (div.type === 'inventario_loja') return 'Inventário da Loja';
  return 'Divergência';
}

function getDivergenceResponsible(div) {
  if (div.responsibleUserId) return getUserById(div.responsibleUserId);
  if (div.driverId) return getUserById(div.driverId);
  return null;
}

function needsResponsibleExplanation(div) {
  return !!div.requiresResponsibleExplanation && !String(div.responsibleExplanation || '').trim() && div.status === 'aberta';
}

function canCurrentUserExplainDivergence(div) {
  if (!currentUser || div.status !== 'aberta' || !div.requiresResponsibleExplanation) return false;
  return currentUser.role === 'admin' || currentUser.id === div.responsibleUserId || currentUser.id === div.driverId;
}

function getDivergenceExplanationStatusTag(div) {
  if (!div.requiresResponsibleExplanation) return statusTag('info').replace('Info', 'Sem responsável');
  if (String(div.responsibleExplanation || '').trim()) return '<span class="tag ok">Justificada</span>';
  return '<span class="tag warn">Aguardando justificativa</span>';
}

function getDivergenceQtyLabels(div) {
  if (div.type === 'entrega_motorista_loja') {
    return { expected: 'Correto esperado para a loja', actual: 'Deixado pelo motorista', diff: 'Erro real' };
  }
  if (div.type === 'carga_goiania') {
    return { expected: 'Soma CD/Galpão para Goiânia', actual: 'Carregado no caminhão', diff: 'Erro real' };
  }
  if (div.type === 'frete_goiania_retorno_vinicius') {
    return { expected: 'Recolhido pelo freteiro nas lojas', actual: 'Devolvido ao Vinicius/Sebastião', diff: 'Erro real' };
  }
  if (div.type === 'recebimento_loja') {
    return { expected: 'Saída lançada pelo CD', actual: 'Confirmado pela loja', diff: 'Erro real' };
  }
  if (div.type === 'retorno_cd') {
    return { expected: 'Recolhido pelo motorista', actual: 'Recebido no CD', diff: 'Erro real' };
  }
  if (div.type === 'inventario_cd' || div.type === 'inventario_loja') {
    return { expected: 'Saldo no sistema', actual: 'Contagem física', diff: 'Erro real' };
  }
  return { expected: 'Esperado', actual: 'Informado', diff: 'Erro real' };
}

function getDivergenceRealErrorText(div) {
  const labels = getDivergenceQtyLabels(div);
  const expectedTotal = sumQty(div.expectedQty || emptyQty());
  const actualTotal = sumQty(div.actualQty || emptyQty());
  const diffTotal = actualTotal - expectedTotal;
  const signal = diffTotal > 0 ? '+' : '';

  if (diffTotal === 0) {
    return `O total bateu, mas existe diferença por tipo de caixa entre ${labels.expected.toLowerCase()} e ${labels.actual.toLowerCase()}.`;
  }

  if (div.type === 'entrega_motorista_loja') {
    return `O motorista informou ${actualTotal} caixas deixadas, mas o correto para a loja era ${expectedTotal}. Diferença total: ${signal}${diffTotal} caixas.`;
  }
  if (div.type === 'carga_goiania') {
    return `A carga Goiânia foi validada com ${actualTotal} caixas, mas a soma do CD/galpão era ${expectedTotal}. Diferença total: ${signal}${diffTotal} caixas.`;
  }
  if (div.type === 'frete_goiania_retorno_vinicius') {
    return `O freteiro recolheu ${expectedTotal} caixas nas lojas, mas devolveu ${actualTotal} ao Vinicius/Sebastião. Diferença total: ${signal}${diffTotal} caixas.`;
  }
  if (div.type === 'recebimento_loja') {
    return `A loja confirmou ${actualTotal} caixas, mas o CD lançou ${expectedTotal}. Diferença total: ${signal}${diffTotal} caixas.`;
  }
  if (div.type === 'retorno_cd') {
    return `O motorista recolheu ${expectedTotal} caixas, mas o CD recebeu ${actualTotal}. Diferença total: ${signal}${diffTotal} caixas.`;
  }
  if (div.type === 'inventario_cd' || div.type === 'inventario_loja') {
    return `A contagem física encontrou ${actualTotal} caixas, mas o sistema tinha ${expectedTotal}. Diferença total: ${signal}${diffTotal} caixas.`;
  }
  return `Diferença total identificada: ${signal}${diffTotal} caixas.`;
}

function renderDivergenceDiffRows(div) {
  const previousQty = sanitizeQty(div.expectedQty || emptyQty());
  const countedQty = sanitizeQty(div.actualQty || emptyQty());
  const diff = qtyDiff(countedQty, previousQty);
  return BOX_TYPES.map((item) => {
    const value = signedInt(diff[item.key]);
    const signal = value > 0 ? '+' : '';
    const tone = value === 0 ? 'ok' : 'warn';
    return `
      <tr>
        <td>${item.label}</td>
        <td>${safeInt(previousQty?.[item.key])}</td>
        <td>${safeInt(countedQty?.[item.key])}</td>
        <td>${value === 0 ? statusTag('ok') : `<span class="tag ${tone}">${signal}${value}</span>`}</td>
      </tr>
    `;
  }).join('');
}

function renderDivergenceDetailHtml(div) {
  const labels = getDivergenceQtyLabels(div);
  const route = div.routeId ? getRouteById(div.routeId) : null;
  const store = div.storeId ? getStoreById(div.storeId) : null;
  const driver = div.driverId ? getUserById(div.driverId) : null;
  const expectedTotal = sumQty(div.expectedQty || emptyQty());
  const actualTotal = sumQty(div.actualQty || emptyQty());
  const diffTotal = actualTotal - expectedTotal;
  const signal = diffTotal > 0 ? '+' : '';

  return `
    <div class="modal-backdrop" id="divergence-detail-modal">
      <div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="divergence-detail-title">
        <div class="modal-header">
          <div>
            <h3 id="divergence-detail-title">Detalhe da divergência</h3>
            <p>${getDivergenceTitle(div)} • ${div.status === 'aberta' ? 'Em aberto' : 'Resolvida'}</p>
          </div>
          <button type="button" class="icon-btn modal-close" title="Fechar">×</button>
        </div>

        <div class="detail-highlight">
          <strong>Erro real identificado</strong>
          <p>${getDivergenceRealErrorText(div)}</p>
        </div>

        <div class="detail-grid">
          <div class="detail-box"><span>Loja</span><strong>${store?.name || 'Não se aplica'}</strong></div>
          <div class="detail-box"><span>Rede</span><strong>${store?.network || '-'}</strong></div>
          <div class="detail-box"><span>Rota</span><strong>${route?.name || '-'}</strong></div>
          <div class="detail-box"><span>Motorista</span><strong>${driver?.name || '-'}</strong></div>
          <div class="detail-box"><span>Data da ocorrência</span><strong>${formatDateBR(div.date)}</strong></div>
          <div class="detail-box"><span>Criada em</span><strong>${formatDateTimeBR(div.createdAt)}</strong></div>
          <div class="detail-box"><span>${labels.expected}</span><strong>${expectedTotal}</strong></div>
          <div class="detail-box"><span>${labels.actual}</span><strong>${actualTotal}</strong></div>
          <div class="detail-box"><span>Diferença total</span><strong>${signal}${diffTotal}</strong></div>
        </div>

        <div class="detail-section">
          <h4>Comparativo por tipo de caixa</h4>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Tipo de caixa</th>
                  <th>${labels.expected}</th>
                  <th>${labels.actual}</th>
                  <th>${labels.diff}</th>
                </tr>
              </thead>
              <tbody>${renderDivergenceDiffRows(div)}</tbody>
            </table>
          </div>
        </div>

        <div class="detail-section">
          <h4>Descrição e observação</h4>
          <p>${describeDivergence(div)}</p>
          <div class="footer-note"><strong>Observação lançada na origem:</strong> ${div.justification || 'Sem observação informada.'}</div>
        </div>

        <div class="detail-section responsibility-box ${needsResponsibleExplanation(div) ? 'pending' : 'done'}">
          <div class="list-item-head">
            <h4>Justificativa do responsável</h4>
            ${getDivergenceExplanationStatusTag(div)}
          </div>
          <p><strong>Responsável:</strong> ${getDivergenceResponsible(div)?.name || driver?.name || 'Não definido'}${driver?.name ? ' • Motorista da rota' : ''}</p>
          ${div.responsibleExplanation ? `
            <div class="justification-text">${div.responsibleExplanation}</div>
            <small class="muted">Registrada por ${div.responsibleExplanationBy || '-'} em ${formatDateTimeBR(div.responsibleExplanationAt)}</small>
          ` : `
            <div class="footer-note">Pendente. O responsável precisa explicar o motivo antes da gestão marcar a divergência como resolvida.</div>
          `}
          ${canCurrentUserExplainDivergence(div) && !div.responsibleExplanation ? `
            <form class="justification-form form-divergence-explanation" data-id="${div.id}">
              <label>Explique o motivo da divergência
                <textarea name="explanation" required placeholder="Exemplo: a loja recebeu 95 porque 5 caixas ficaram em outra loja da rota / houve erro de contagem / caixas retornaram no caminhão..."></textarea>
              </label>
              <button type="submit" class="btn btn-primary">Salvar justificativa</button>
            </form>
          ` : ''}
        </div>

        <div class="form-actions modal-actions">
          ${currentUser.role === 'admin' && div.status === 'aberta' ? `<button type="button" class="btn btn-secondary btn-resolve-divergence-modal" data-id="${div.id}">Aprovar e encerrar</button>` : ''}
          <button type="button" class="btn btn-ghost modal-close">Fechar</button>
        </div>
      </div>
    </div>
  `;
}

function openDivergenceDetails(id) {
  const div = appState.divergences.find((item) => item.id === id);
  if (!div) {
    showToast('Divergência não encontrada.', 'error');
    return;
  }

  const oldModal = document.getElementById('divergence-detail-modal');
  if (oldModal) oldModal.remove();

  document.body.insertAdjacentHTML('beforeend', renderDivergenceDetailHtml(div));
  const modal = document.getElementById('divergence-detail-modal');
  const closeModal = () => modal?.remove();

  modal.querySelectorAll('.modal-close').forEach((button) => {
    button.addEventListener('click', closeModal);
  });
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });
  modal.querySelector('.form-divergence-explanation')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const result = await persistMutation('SUBMIT_DIVERGENCE_EXPLANATION', {
      id: event.currentTarget.dataset.id,
      explanation: event.currentTarget.explanation.value.trim(),
    }, 'Justificativa registrada com sucesso.');
    if (result.ok) {
      closeModal();
      openDivergenceDetails(event.currentTarget.dataset.id);
    }
  });
  modal.querySelector('.btn-resolve-divergence-modal')?.addEventListener('click', async (event) => {
    const resolution = window.prompt('Informe a decisão do ADM: resolvido / perda confirmada / erro de lançamento / pendente tratado', 'Tratada pela gestão após conferência detalhada.');
    if (resolution === null) return;
    const result = await persistMutation('RESOLVE_DIVERGENCE', {
      id: event.currentTarget.dataset.id,
      resolution,
      resolutionType: normalizeText(resolution).replace(/\s+/g, '_') || 'tratada_gestao',
    }, 'Divergência aprovada pelo ADM.');
    if (result.ok) closeModal();
  });
}


function getCorrectionContext(kind, id) {
  if (kind === 'outbound') {
    const item = appState.movements.outbounds.find((movement) => movement.id === id);
    if (!item) return null;
    const store = getStoreById(item.storeId);
    return {
      item,
      qty: sanitizeQty(item.qty),
      title: 'Corrigir saída do CD',
      subtitle: `${formatDateBR(item.date)} • ${formatStoreNameForUser(store?.name || '-')} • ${getRouteById(item.routeId)?.name || '-'}`,
      note: 'A correção ajusta o saldo do CD e recalcula as divergências dessa loja automaticamente.',
      mutationType: 'UPDATE_OUTBOUND_QTY',
      payloadIdKey: 'outboundId',
      allowed: canEditOutboundMovement(item, currentUser, appState),
    };
  }

  if (kind === 'driverDelivery') {
    const item = appState.movements.driverDeliveries.find((movement) => movement.id === id);
    if (!item) return null;
    const store = getStoreById(item.storeId);
    return {
      item,
      qty: sanitizeQty(item.actualQty),
      title: 'Corrigir entrega do motorista',
      subtitle: `${formatDateBR(item.date)} • ${formatStoreNameForUser(store?.name || '-')} • ${getRouteById(item.routeId)?.name || '-'}`,
      note: 'A correção atualiza a quantidade deixada na loja e recalcula a divergência entre CD e motorista.',
      mutationType: 'UPDATE_DRIVER_DELIVERY_QTY',
      payloadIdKey: 'driverDeliveryId',
      allowed: canEditDriverDeliveryMovement(item, currentUser, appState),
    };
  }

  if (kind === 'receipt') {
    const item = appState.movements.receipts.find((movement) => movement.id === id);
    if (!item) return null;
    const store = getStoreById(item.storeId);
    return {
      item,
      qty: sanitizeQty(item.qty),
      title: 'Corrigir recebimento do promotor',
      subtitle: `${formatDateBR(item.date)} • ${formatStoreNameForUser(store?.name || '-')}`,
      note: 'A correção ajusta o estoque da loja e recalcula a divergência entre CD/motorista/promotor.',
      mutationType: 'UPDATE_RECEIPT_QTY',
      payloadIdKey: 'receiptId',
      allowed: canEditReceiptMovement(item, currentUser, appState),
    };
  }

  return null;
}

function renderMovementCorrectionModal(kind, id) {
  const ctx = getCorrectionContext(kind, id);
  if (!ctx || !ctx.allowed) {
    return '';
  }
  const prefix = `correction-${kind}`;
  return `
    <div class="modal-backdrop" id="movement-correction-modal">
      <div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="movement-correction-title">
        <div class="modal-header">
          <div>
            <h3 id="movement-correction-title">${ctx.title}</h3>
            <p>${ctx.subtitle}</p>
          </div>
          <button type="button" class="icon-btn modal-close" title="Fechar">×</button>
        </div>

        <form id="form-movement-correction" class="stack" data-kind="${kind}" data-id="${id}" data-prefix="${prefix}">
          <div class="helper-card compact small">${ctx.note}</div>
          ${qtyInputs(prefix, ctx.qty)}
          <div class="helper-card compact small">Total corrigido: <strong id="movement-correction-total">${sumQty(ctx.qty)}</strong> caixas</div>
          <label>Motivo da correção
            <textarea name="reason" required placeholder="Ex.: erro de digitação, contagem corrigida, lançamento feito na loja errada, conferência posterior..."></textarea>
          </label>
          <div class="form-actions modal-actions">
            <button type="submit" class="btn btn-primary">Salvar correção</button>
            <button type="button" class="btn btn-ghost modal-close">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  `;
}

function openMovementCorrectionModal(kind, id) {
  const ctx = getCorrectionContext(kind, id);
  if (!ctx) {
    showToast('Lançamento não encontrado para correção.', 'error');
    return;
  }
  if (!ctx.allowed) {
    showToast('Seu usuário não tem permissão para corrigir este lançamento.', 'error');
    return;
  }

  const oldModal = document.getElementById('movement-correction-modal');
  if (oldModal) oldModal.remove();

  document.body.insertAdjacentHTML('beforeend', renderMovementCorrectionModal(kind, id));
  const modal = document.getElementById('movement-correction-modal');
  const form = document.getElementById('form-movement-correction');
  const prefix = form?.dataset.prefix;
  const totalEl = document.getElementById('movement-correction-total');
  const closeModal = () => modal?.remove();

  modal.querySelectorAll('.modal-close').forEach((button) => button.addEventListener('click', closeModal));
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });

  const refreshTotal = () => {
    if (!form || !prefix || !totalEl) return;
    totalEl.textContent = sumQty(readQtyFromForm(form, prefix));
  };
  BOX_TYPES.forEach((item) => {
    form?.querySelector(`#${prefix}-${item.key}`)?.addEventListener('input', refreshTotal);
  });
  refreshTotal();

  form?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const updatedCtx = getCorrectionContext(kind, id);
    if (!updatedCtx) {
      showToast('Lançamento não encontrado para correção.', 'error');
      return;
    }
    const qty = readQtyFromForm(form, prefix);
    const reason = form.reason.value.trim();
    const payload = {
      [updatedCtx.payloadIdKey]: id,
      qty,
      reason,
    };
    const result = await persistMutation(updatedCtx.mutationType, payload, 'Correção salva e divergências recalculadas.');
    if (result.ok) closeModal();
  });
}

function bindMovementCorrectionEvents() {
  document.querySelectorAll('.btn-edit-outbound').forEach((button) => {
    button.addEventListener('click', () => openMovementCorrectionModal('outbound', button.dataset.id));
  });
  document.querySelectorAll('.btn-edit-driver-delivery').forEach((button) => {
    button.addEventListener('click', () => openMovementCorrectionModal('driverDelivery', button.dataset.id));
  });
  document.querySelectorAll('.btn-edit-receipt').forEach((button) => {
    button.addEventListener('click', () => openMovementCorrectionModal('receipt', button.dataset.id));
  });
}

function statusTag(type) {
  const map = {
    ok: '<span class="tag ok">OK</span>',
    warn: '<span class="tag warn">Atenção</span>',
    danger: '<span class="tag danger">Crítico</span>',
    info: '<span class="tag info">Info</span>',
  };
  return map[type] || map.info;
}


function isActiveMovement(item) {
  return !!item && !item.canceledAt && item.status !== 'estornado';
}

function getOutboundTransfer(outboundId, state = appState) {
  return (state.movements.goianiaTransfers || [])
    .filter(isActiveMovement)
    .find((item) => item.outboundId === outboundId) || null;
}

function getOutboundResponsibleDriver(outbound, state = appState) {
  if (!outbound) return null;
  const transfer = getOutboundTransfer(outbound.id, state);
  const reliefAssignment = getReliefAssignmentForRoute(outbound.routeId, outbound.date || todayStr(), state);
  return transfer?.driverId || outbound.goianiaTransferDriverId || reliefAssignment?.userId || outbound.driverId || null;
}

function getMovementKindLabel(type) {
  const map = {
    outbound: 'Saída do CD',
    driverDelivery: 'Entrega do motorista',
    receipt: 'Recebimento da loja',
    pickup: 'Recolhimento',
    occupiedBox: 'Caixas ocupadas',
    releasedBox: 'Caixas liberadas',
    return: 'Retorno no CD',
    goianiaLoad: 'Carga Goiânia',
    goianiaTransfer: 'Distribuição Goiânia',
    inventory: 'Inventário',
  };
  return map[type] || 'Movimento';
}

function getMovementByType(type, id, state = appState) {
  const collections = {
    outbound: state.movements.outbounds,
    driverDelivery: state.movements.driverDeliveries,
    receipt: state.movements.receipts,
    pickup: state.movements.pickups,
    occupiedBox: state.movements.occupiedBoxes || [],
    releasedBox: state.movements.releasedBoxes || [],
    return: state.movements.returns,
    goianiaLoad: state.movements.goianiaLoads,
    goianiaTransfer: state.movements.goianiaTransfers,
    inventory: state.movements.inventories,
  };
  return (collections[type] || []).find((item) => item.id === id) || null;
}

function getDayOperationSummary(date = todayStr(), state = appState) {
  const outbounds = state.movements.outbounds.filter((item) => isActiveMovement(item) && item.date === date && item.status !== 'historico');
  const driverDeliveries = (state.movements.driverDeliveries || []).filter((item) => isActiveMovement(item) && item.date === date);
  const receipts = state.movements.receipts.filter((item) => isActiveMovement(item) && item.date === date);
  const pickups = state.movements.pickups.filter((item) => isActiveMovement(item) && item.date === date);
  const returns = state.movements.returns.filter((item) => isActiveMovement(item) && item.date === date);
  const divergences = state.divergences.filter((item) => item.date === date && item.status === 'aberta');
  return {
    outbounds,
    driverDeliveries,
    receipts,
    pickups,
    returns,
    divergences,
    sent: outbounds.reduce((acc, item) => acc + sumQty(item.qty), 0),
    driverValidated: driverDeliveries.reduce((acc, item) => acc + safeInt(item.totalDelivered), 0),
    received: receipts.reduce((acc, item) => acc + sumQty(item.qty), 0),
    pickedUp: pickups.reduce((acc, item) => acc + (item.totalOnly ? safeInt(item.totalQty) : sumQty(item.qty)), 0),
    returned: returns.reduce((acc, item) => acc + sumQty(item.qty), 0),
  };
}

function getStoreDayRows(date = todayStr(), state = appState) {
  const outbounds = state.movements.outbounds.filter((item) => isActiveMovement(item) && item.date === date && item.status !== 'historico' && isMovementVisibleToUser(item, currentUser, state));
  const rows = outbounds.map((outbound) => {
    const store = getStoreById(outbound.storeId, state);
    const route = getRouteById(outbound.routeId, state);
    const transfer = getOutboundTransfer(outbound.id, state);
    const responsibleDriverId = getOutboundResponsibleDriver(outbound, state);
    const driver = getUserById(responsibleDriverId, state);
    const driverDelivery = (state.movements.driverDeliveries || []).find((item) => isActiveMovement(item) && item.outboundId === outbound.id);
    const receipt = state.movements.receipts.find((item) => isActiveMovement(item) && item.outboundId === outbound.id);
    const pickup = state.movements.pickups.find((item) => isActiveMovement(item) && item.storeId === outbound.storeId && item.date === date);
    const divergence = state.divergences.find((item) => item.date === date && item.storeId === outbound.storeId && item.status === 'aberta');
    let status = 'Saiu do CD';
    let tone = 'warn';

    if (isGoianiaRoute(outbound.routeId) && !transfer && !driverDelivery) {
      status = 'Aguardando distribuição Goiânia';
      tone = 'warn';
    } else if (storeRequiresDriver(store) && !driverDelivery && !receipt) {
      status = 'Aguardando validação do motorista';
      tone = 'warn';
    } else if (!storeRequiresDriver(store) && storeRequiresPromoter(store) && !receipt) {
      status = 'Aguardando validação do promotor';
      tone = 'warn';
    } else if (driverDelivery && storeRequiresPromoter(store) && !receipt) {
      status = 'Motorista validou / promotor pendente';
      tone = 'warn';
    } else if (receipt && !pickup) {
      status = 'Recebido / aguardando recolhimento';
      tone = 'info';
    } else if (pickup && !pickup.returnBatchId) {
      status = 'Recolhido / aguardando retorno no CD';
      tone = 'info';
    } else if (pickup && pickup.returnBatchId) {
      status = 'Finalizado';
      tone = 'ok';
    }

    if (divergence) {
      status = 'Divergência aberta';
      tone = 'danger';
    }

    return { outbound, store, route, transfer, driver, driverDelivery, receipt, pickup, divergence, status, tone };
  });
  return rows.sort((a, b) => (a.route?.name || '').localeCompare(b.route?.name || '', 'pt-BR') || (a.store?.name || '').localeCompare(b.store?.name || '', 'pt-BR'));
}


function getOperationalPendencies(date = todayStr(), state = appState) {
  const pendencies = [];
  const activeDriverDeliveries = (state.movements.driverDeliveries || []).filter(isActiveMovement);
  const activeReceipts = (state.movements.receipts || []).filter(isActiveMovement);
  const deliveryByOutbound = new Map(activeDriverDeliveries.map((item) => [item.outboundId, item]));
  const receiptByOutbound = new Map(activeReceipts.map((item) => [item.outboundId, item]));

  const outbounds = state.movements.outbounds.filter((item) => isActiveMovement(item) && item.date === date && item.status !== 'historico');

  outbounds.forEach((outbound) => {
    const store = getStoreById(outbound.storeId, state);
    const transfer = getOutboundTransfer(outbound.id, state);
    const driverId = getOutboundResponsibleDriver(outbound, state);
    const driverDelivery = deliveryByOutbound.get(outbound.id);
    const receipt = receiptByOutbound.get(outbound.id);
    const context = { storeId: outbound.storeId, routeId: outbound.routeId };

    if (isGoianiaRoute(outbound.routeId) && !transfer && !driverDelivery) {
      pendencies.push(withPendencyOwner({
        area: 'Distribuição Goiânia',
        responsibleRole: 'driver',
        responsibleUserId: 'user_motor_vinicius',
        responsibleName: 'Vinicius/Sebastião',
        storeId: outbound.storeId,
        routeId: outbound.routeId,
        date: outbound.date,
        description: `${store?.name || '-'} ainda não foi repassada para Vinicius/Maycon/Alexsandro/Edmar/reforço.`,
        priority: 'warning',
      }, 'goiania', context, state));
      return;
    }

    if (storeRequiresDriver(store) && !driverDelivery) {
      pendencies.push(withPendencyOwner({
        area: 'Entrega do Motorista',
        responsibleRole: 'driver',
        responsibleUserId: driverId,
        responsibleName: getUserById(driverId, state)?.name || 'Motorista',
        storeId: outbound.storeId,
        routeId: outbound.routeId,
        date: outbound.date,
        description: `${store?.name || '-'} ainda não teve total deixado confirmado pelo motorista.`,
        priority: 'warning',
      }, 'driverDelivery', context, state));
    }

    if (storeRequiresPromoter(store) && !receipt) {
      pendencies.push(withPendencyOwner({
        area: 'Recebimento na Loja',
        responsibleRole: 'promoter',
        responsibleUserId: store?.promoterId || null,
        responsibleName: getUserById(store?.promoterId, state)?.name || 'Promotor da loja',
        storeId: outbound.storeId,
        routeId: outbound.routeId,
        date: outbound.date,
        description: `${store?.name || '-'} ainda não confirmou folhagens e bandejas recebidas.`,
        priority: 'warning',
      }, 'promoterReceipt', context, state));
    }
  });

  state.movements.pickups
    .filter((item) => isActiveMovement(item) && item.date === date && !item.returnBatchId)
    .forEach((pickup) => {
      pendencies.push(withPendencyOwner({
        area: 'Retorno no CD',
        responsibleRole: 'cd',
        responsibleUserId: null,
        responsibleName: 'CD',
        storeId: pickup.storeId,
        routeId: pickup.routeId,
        date: pickup.date,
        description: `${getRouteById(pickup.routeId, state)?.name || '-'} / ${getUserById(pickup.driverId, state)?.name || '-'} tem recolhimento pendente de conferência no CD.`,
        priority: 'info',
      }, 'cd', pickup, state));
    });

  (state.mandatoryInventories || [])
    .filter((schedule) => schedule.status !== 'cancelada' && schedule.date === date)
    .forEach((schedule) => {
      getMandatoryInventoryStoreIds(schedule, state).forEach((storeId) => {
        if (!isMandatoryInventoryPendingForStore(schedule, storeId, state)) return;
        const store = getStoreById(storeId, state);
        const routeId = getEffectiveRoute(storeId, date, state);
        pendencies.push(withPendencyOwner({
          area: 'Inventário obrigatório',
          responsibleRole: 'promoter',
          responsibleUserId: store?.promoterId || null,
          responsibleName: storeRequiresPromoter(store) ? (getUserById(store?.promoterId, state)?.name || 'Promotor da loja') : 'ADM / loja sem promotor',
          storeId,
          routeId,
          date,
          description: `${store?.name || '-'} precisa realizar inventário obrigatório em ${formatDateBR(date)}.`,
          priority: 'danger',
        }, storeRequiresPromoter(store) ? 'promoterReceipt' : 'admin', { storeId, routeId }, state));
      });
    });

  state.divergences
    .filter((div) => div.status === 'aberta' && (!date || div.date === date))
    .forEach((div) => {
      const waitingExplanation = needsResponsibleExplanation(div);
      const owner = getDivergenceOwnerInfo(div, state);
      pendencies.push({
        area: waitingExplanation ? 'Justificar divergência' : 'Aprovação ADM',
        responsibleRole: waitingExplanation ? (div.responsibleRole || 'driver') : 'admin',
        responsibleUserId: waitingExplanation ? (div.responsibleUserId || div.driverId) : null,
        responsibleName: waitingExplanation ? (getDivergenceResponsible(div)?.name || 'Responsável') : 'ADM',
        ownerKey: owner.ownerKey,
        ownerName: owner.ownerName,
        ownerArea: owner.ownerArea,
        ownerUserId: owner.ownerUserId,
        ownerReason: owner.ownerReason,
        storeId: div.storeId,
        routeId: div.routeId,
        date: div.date,
        description: `${getDivergenceTitle(div)}: ${getDivergenceRealErrorText(div)}`,
        priority: 'danger',
      });
    });

  return pendencies;
}


function getOverdueDriverDeliveryPendenciesForAdmin(state = appState, today = todayStr()) {
  const deliveredOutboundIds = new Set(
    (state.movements.driverDeliveries || [])
      .filter(isActiveMovement)
      .map((delivery) => delivery.outboundId)
  );

  return (state.movements.outbounds || [])
    .filter((outbound) => {
      if (!isActiveMovement(outbound) || outbound.status === 'historico') return false;
      if (!outbound.date || outbound.date >= today) return false;
      if (outbound.driverDeliveryId || deliveredOutboundIds.has(outbound.id)) return false;
      const store = getStoreById(outbound.storeId, state);
      return storeRequiresDriver(store);
    })
    .map((outbound) => {
      const store = getStoreById(outbound.storeId, state);
      const driverId = getOutboundResponsibleDriver(outbound, state);
      return withPendencyOwner({
        area: 'Entrega vencida do motorista',
        responsibleRole: 'admin',
        responsibleUserId: null,
        responsibleName: 'ADM',
        storeId: outbound.storeId,
        routeId: outbound.routeId,
        date: outbound.date,
        description: `${store?.name || '-'} tinha entrega em ${formatDateBR(outbound.date)} e não foi confirmada pelo motorista. A pendência saiu da tela do motorista e deve ser tratada pelo responsável. Motorista/rota: ${getUserById(driverId, state)?.name || getRouteById(outbound.routeId, state)?.name || '-'}. Total lançado: ${sumQty(outbound.qty)} caixas.`,
        priority: 'danger',
      }, 'driverDelivery', outbound, state);
    });
}

function getVisiblePendenciesForCurrentUser(date = todayStr()) {
  const items = getOperationalPendencies(date, appState);
  if (!currentUser) return [];
  if (currentUser.role === 'admin' || currentUser.role === 'viewer') {
    const isToday = !date || date === todayStr();
    return isToday ? [...items, ...getOverdueDriverDeliveryPendenciesForAdmin(appState, todayStr())] : items;
  }
  if (currentUser.role === 'cd') {
    return items.filter((item) => item.responsibleRole === 'cd' || item.area === 'Retorno no CD' || item.area === 'Aprovação ADM');
  }
  if (currentUser.role === 'driver') {
    return items.filter((item) =>
      item.responsibleRole === 'driver' &&
      (!item.responsibleUserId || item.responsibleUserId === currentUser.id || (isGoianiaTrunkUser(currentUser) && item.responsibleName === 'Vinicius/Sebastião')) &&
      (!item.storeId || canUserSeeStore(item.storeId, currentUser, date, appState))
    );
  }
  if (currentUser.role === 'promoter') {
    return items.filter((item) => item.storeId === currentUser.storeId || (item.responsibleRole === 'promoter' && item.responsibleUserId === currentUser.id));
  }
  return [];
}

function getClosingForDate(date, state = appState) {
  return (state.dayClosings || []).find((item) => item.date === date && !item.canceledAt) || null;
}

function getStoresForMandatoryScope(payload, state = appState) {
  const scope = payload?.scope || 'all';
  if (scope === 'store') {
    const store = getStoreById(payload.storeId, state);
    return store ? [store] : [];
  }
  if (scope === 'network') {
    const network = String(payload.network || '').trim();
    return state.stores.filter((store) => inferStoreNetwork(store) === network);
  }
  return state.stores.slice();
}

function getMandatoryInventoryStoreIds(schedule, state = appState) {
  const ids = Array.isArray(schedule?.storeIds) ? schedule.storeIds : [];
  const validIds = new Set(state.stores.map((store) => store.id));
  return ids.filter((id) => validIds.has(id));
}

function isMandatoryInventoryPendingForStore(schedule, storeId, state = appState) {
  if (!schedule || schedule.status === 'cancelada' || !storeId) return false;
  const storeIds = getMandatoryInventoryStoreIds(schedule, state);
  if (!storeIds.includes(storeId)) return false;
  const completedIds = Array.isArray(schedule.completedStoreIds) ? schedule.completedStoreIds : [];
  const canceledIds = Array.isArray(schedule.canceledStoreIds) ? schedule.canceledStoreIds : [];
  if (completedIds.includes(storeId) || canceledIds.includes(storeId)) return false;
  const hasInventoryRecord = (state.movements.inventories || []).some((item) =>
    isActiveMovement(item) && item.location === 'store' && item.storeId === storeId && item.date === schedule.date && item.mandatoryInventoryId === schedule.id
  );
  return !hasInventoryRecord;
}

function getPendingMandatoryInventoriesForStore(storeId, date = todayStr(), state = appState) {
  return (state.mandatoryInventories || [])
    .filter((schedule) => schedule.status !== 'cancelada' && schedule.date === date && isMandatoryInventoryPendingForStore(schedule, storeId, state));
}

function getPendingMandatoryInventoriesForUser(user = currentUser, date = todayStr(), state = appState) {
  if (!user) return [];
  const schedules = (state.mandatoryInventories || []).filter((schedule) => schedule.status !== 'cancelada' && schedule.date === date);
  const rows = [];
  schedules.forEach((schedule) => {
    getMandatoryInventoryStoreIds(schedule, state).forEach((storeId) => {
      if (!isMandatoryInventoryPendingForStore(schedule, storeId, state)) return;
      if (user.role === 'promoter' && user.storeId !== storeId) return;
      if (user.role === 'driver' && !canUserSeeStore(storeId, user, date, state)) return;
      if (user.role === 'cd') return;
      const store = getStoreById(storeId, state);
      rows.push({ schedule, store, storeId });
    });
  });
  return rows;
}

function renderMandatoryInventoryNotice(date = todayStr()) {
  const pending = getPendingMandatoryInventoriesForUser(currentUser, date, appState);
  if (!pending.length) return '';
  const isPromoter = currentUser?.role === 'promoter';
  const isDriver = currentUser?.role === 'driver';
  const title = isPromoter
    ? 'Hoje tem inventário obrigatório da sua loja'
    : isDriver
      ? 'Hoje tem inventário obrigatório em loja da sua rota'
      : 'Inventário obrigatório pendente hoje';
  const stores = pending.slice(0, 6).map((item) => item.store?.name || '-').join(', ');
  const detail = isPromoter
    ? 'A mensagem só sai depois que o inventário da loja for realizado.'
    : `${pending.length} loja(s) pendente(s): ${stores}${pending.length > 6 ? '...' : ''}. A mensagem só sai após a realização.`;
  return `
    <div class="alert-strip critical mandatory-inventory-alert">
      <div>
        <strong>${title}</strong>
        <div class="muted">Data: ${formatDateBR(date)}. ${detail}</div>
      </div>
      <button class="btn btn-primary btn-go-inventory" type="button">Fazer inventário</button>
    </div>
  `;
}

function markMandatoryInventoriesDoneForStore(storeId, date, state = appState) {
  (state.mandatoryInventories || [])
    .filter((schedule) => {
      if (schedule.status === 'cancelada' || schedule.date !== date) return false;
      const storeIds = getMandatoryInventoryStoreIds(schedule, state);
      const completedIds = Array.isArray(schedule.completedStoreIds) ? schedule.completedStoreIds : [];
      return storeIds.includes(storeId) && !completedIds.includes(storeId);
    })
    .forEach((schedule) => {
      schedule.completedStoreIds = Array.isArray(schedule.completedStoreIds) ? schedule.completedStoreIds : [];
      if (!schedule.completedStoreIds.includes(storeId)) schedule.completedStoreIds.push(storeId);
      const storeIds = getMandatoryInventoryStoreIds(schedule, state);
      const canceledIds = Array.isArray(schedule.canceledStoreIds) ? schedule.canceledStoreIds : [];
      if (storeIds.length && storeIds.every((id) => schedule.completedStoreIds.includes(id) || canceledIds.includes(id))) {
        schedule.status = 'concluida';
        schedule.completedAt = nowIso();
      }
    });
}

function getLossAndStoppedRows(state = appState) {
  return getVisibleStores(state, currentUser).map((store) => {
    const qty = getStoreStock(store.id, state);
    const total = sumQty(qty);
    const lastReceipt = state.movements.receipts.filter((item) => isActiveMovement(item) && item.storeId === store.id).sort((a, b) => b.date.localeCompare(a.date))[0];
    const lastPickup = state.movements.pickups.filter((item) => isActiveMovement(item) && item.storeId === store.id).sort((a, b) => b.date.localeCompare(a.date))[0];
    const lastMoveDate = [lastReceipt?.date, lastPickup?.date].filter(Boolean).sort().pop() || '';
    const daysStopped = lastMoveDate ? Math.max(0, Math.floor((new Date(`${todayStr()}T12:00:00`) - new Date(`${lastMoveDate}T12:00:00`)) / 86400000)) : 0;
    const openDivs = state.divergences.filter((div) => div.storeId === store.id && div.status === 'aberta').length;
    const riskScore = total + (daysStopped * 5) + (openDivs * 20);
    return { store, qty, total, lastReceipt, lastPickup, lastMoveDate, daysStopped, openDivs, riskScore };
  }).filter((row) => row.total > 0 || row.openDivs > 0).sort((a, b) => b.riskScore - a.riskScore);
}

function renderDashboard() {
  const metrics = getTodayMetrics();
  const forecast = getForecast();
  const alerts = getAllAlerts().slice(0, 4);
  const visibleDivergences = getVisibleDivergences(appState, currentUser);
  const openDivergences = visibleDivergences.filter((item) => item.status === 'aberta').length;
  const promoterCompanyDashboard = currentUser?.role === 'promoter';
  const stockRowsUser = promoterCompanyDashboard ? { role: 'viewer' } : currentUser;
  const stockRows = getStoreStockRows(appState, stockRowsUser).slice(0, 5);
  const routesForDashboard = canSeeGlobalData(currentUser) || currentUser.role === 'cd' || promoterCompanyDashboard ? appState.routes : getVisibleRoutes(appState, currentUser);
  const showCdForecast = ['admin', 'viewer', 'cd'].includes(currentUser?.role);
  const visibleStoreQty = getVisibleStores(appState, currentUser).reduce((acc, store) => addQty(acc, getStoreStock(store.id)), emptyQty());
  const companyBoxTotals = getCompanyBoxTotals(appState);
  const dashboardMovementUser = promoterCompanyDashboard ? { role: 'viewer' } : currentUser;
  const dashboardCategoryQty = promoterCompanyDashboard ? companyBoxTotals.byType : (showCdForecast ? appState.cdStock : visibleStoreQty);
  const dashboardCategoryTotal = Math.max(1, sumQty(dashboardCategoryQty));
  const routeSummary = routesForDashboard.map((route) => {
    const sent = appState.movements.outbounds.filter((item) => item.date === todayStr() && item.routeId === route.id && item.status !== 'historico' && isMovementVisibleToUser(item, dashboardMovementUser, appState)).reduce((acc, item) => acc + sumQty(item.qty), 0);
    const pickup = appState.movements.pickups.filter((item) => item.date === todayStr() && item.routeId === route.id && isMovementVisibleToUser(item, dashboardMovementUser, appState)).reduce((acc, item) => acc + (item.totalOnly ? safeInt(item.totalQty) : sumQty(item.qty)), 0);
    const returned = appState.movements.returns.filter((item) => item.date === todayStr() && item.routeId === route.id && isMovementVisibleToUser(item, dashboardMovementUser, appState)).reduce((acc, item) => acc + sumQty(item.qty), 0);
    const diff = pickup - returned;
    return { route, sent, pickup, returned, diff };
  });

  return `
    <div class="stack">
      ${renderMandatoryInventoryNotice(todayStr())}
      ${showCdForecast ? (metrics.company < forecast.predicted ? `
        <div class="alert-strip critical">
          <div>
            <strong>ALERTA DE ESTOQUE CRÍTICO</strong>
            <div class="muted">${weekdayName(forecast.weekday)} costuma exigir ${forecast.predicted} caixas. O CD está com ${metrics.company}.</div>
          </div>
          <div class="badge-count">${forecast.predicted - metrics.company}</div>
        </div>
      ` : `
        <div class="alert-strip info">
          <div>
            <strong>Base prevista para hoje</strong>
            <div class="muted">${weekdayName(forecast.weekday)}: ${forecast.predicted} caixas (${forecast.source}). Estoque atual no CD: ${metrics.company}.</div>
          </div>
          ${statusTag(metrics.company < forecast.predicted + appState.settings.safetyMargin ? 'warn' : 'ok')}
        </div>
      `) : (promoterCompanyDashboard ? `
        <div class="alert-strip info">
          <div>
            <strong>Visão geral de caixas da empresa</strong>
            <div class="muted">Total considerando CD, lojas e caixas em retorno: ${companyBoxTotals.total} caixas.</div>
          </div>
          ${statusTag(companyBoxTotals.total > 0 ? 'ok' : 'warn')}
        </div>
      ` : `
        <div class="alert-strip info">
          <div>
            <strong>Visão do seu acesso</strong>
            <div class="muted">Esta tela mostra somente as informações vinculadas ao seu usuário.</div>
          </div>
        </div>
      `)}

      <div class="cards-grid">
        ${showCdForecast ? renderMetricCard('Caixas na Empresa', metrics.company, '🏭', metrics.company < forecast.predicted ? 'critical' : 'success', 'Saldo atual confirmado no CD') : ''}
        ${promoterCompanyDashboard ? renderMetricCard('Caixas Totais da Empresa', companyBoxTotals.total, '🏭', companyBoxTotals.total ? 'success' : 'warning', 'CD + lojas + caixas em retorno') : ''}
        ${renderMetricCard('Enviadas Hoje', metrics.sent, '🚚', 'success', 'Saídas lançadas pelo CD')}
        ${renderMetricCard('Confirmadas nas Lojas', metrics.confirmed, '🏬', 'success', 'Recebimentos confirmados pelos promotores')}
        ${renderMetricCard(currentUser.role === 'promoter' ? 'Estoque da Minha Loja' : 'Estoque Visível', metrics.stores, '📦', 'warning', currentUser.role === 'promoter' ? 'Saldo atual da loja vinculada ao promotor' : 'Saldo dentro da permissão do usuário')}
        ${promoterCompanyDashboard ? renderMetricCard('Estoque em Lojas da Empresa', companyBoxTotals.stores, '🏬', 'warning', 'Total acumulado em todas as lojas') : ''}
        ${renderMetricCard('Em Retorno', metrics.inReturn, '🔄', 'warning', promoterCompanyDashboard ? 'Total de caixas da empresa em retorno' : 'Caixas recolhidas ainda não recebidas no CD')}
        ${renderMetricCard('Recebidas Hoje', metrics.returns, '✅', 'success', 'Caixas que retornaram ao CD')}
        ${renderMetricCard('Divergências Abertas', openDivergences, '⚠️', openDivergences ? 'critical' : 'success', 'Erros identificados automaticamente')}
        ${showCdForecast ? renderMetricCard('Base do Dia', forecast.predicted, '📊', 'success', `${forecast.source} de necessidade para ${weekdayName(forecast.weekday)}`) : ''}
      </div>

      <div class="grid-3">
        <div class="card">
          <div class="section-header">
            <div>
              <h3>Saldos por Categoria de Caixa</h3>
              <p>${promoterCompanyDashboard ? 'Saldo total da empresa por folhagens e bandejas.' : (showCdForecast ? 'Saldo atual confirmado no CD por folhagens e bandejas.' : 'Saldo visível para seu acesso por folhagens e bandejas.')}</p>
            </div>
          </div>
          <div class="list">
            ${BOX_TYPES.map((item) => {
              const value = safeInt(dashboardCategoryQty[item.key]);
              const total = dashboardCategoryTotal;
              return `
                <div class="kpi-line">
                  <div class="kpi-row"><span>${item.label}</span><strong>${value}</strong></div>
                  <div class="bar"><span style="width:${Math.max(4, (value / total) * 100)}%; background:${item.color}"></span></div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <div class="card">
          <div class="section-header">
            <div>
              <h3>Estoque em Loja (Top 5)</h3>
              <p>${promoterCompanyDashboard ? 'Lojas da empresa com mais caixas acumuladas.' : 'Lojas com mais caixas acumuladas.'}</p>
            </div>
          </div>
          <div class="list">
            ${stockRows.map((row) => `
              <div class="list-item">
                <div class="list-item-head">
                  <strong>${row.store.name}</strong>
                  ${row.isHigh ? statusTag('danger') : statusTag('ok')}
                </div>
                <div class="muted">Rota atual: ${getRouteById(row.routeId)?.name || '-'}</div>
                <div class="kpi-row"><span>Total em loja</span><strong>${row.total}</strong></div>
                <div class="bar"><span style="width:${Math.min(100, (row.total / Math.max(1, row.store.highStockLimit)) * 100)}%"></span></div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="card">
          <div class="section-header">
            <div>
              <h3>Alertas e Divergências</h3>
              <p>Pontos de atenção para agir rápido.</p>
            </div>
          </div>
          ${alerts.length ? `
            <div class="list">
              ${alerts.map((alert) => `
                <div class="list-item">
                  <div class="list-item-head">
                    <strong>${alert.title}</strong>
                    ${statusTag(alert.priority === 'critical' ? 'danger' : 'warn')}
                  </div>
                  <p>${alert.description}</p>
                  <small class="muted">${alert.detail}</small>
                </div>
              `).join('')}
            </div>
          ` : `<div class="empty">Sem alertas no momento.</div>`}
        </div>
      </div>

      <div class="grid-2">
        <div class="card">
          <div class="section-header">
            <div>
              <h3>Resumo por Rota</h3>
              <p>Comparação entre enviado, recolhido e retornado no dia.</p>
            </div>
          </div>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Rota</th>
                  <th>Motorista</th>
                  <th>Enviadas</th>
                  <th>Recolhidas</th>
                  <th>Recebidas no CD</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${routeSummary.map((item) => `
                  <tr>
                    <td>${item.route.name}</td>
                    <td>${getUserById(item.route.driverId)?.name || '-'}</td>
                    <td>${item.sent}</td>
                    <td>${item.pickup}</td>
                    <td>${item.returned}</td>
                    <td>${item.diff > 0 ? statusTag('warn') : statusTag('ok')}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <div class="card">
          <div class="section-header">
            <div>
              <h3>Últimas Ações</h3>
            </div>
          </div>
          ${appState.audit.filter((item) => canSeeGlobalData(currentUser) || currentUser.role === 'cd' || item.userId === currentUser.id || item.userName === currentUser.name).length ? `
            <div class="list">
              ${appState.audit.filter((item) => canSeeGlobalData(currentUser) || currentUser.role === 'cd' || item.userId === currentUser.id || item.userName === currentUser.name).slice(0, 6).map((item) => `
                <div class="list-item">
                  <div class="list-item-head">
                    <strong>${item.action}</strong>
                    <small class="muted">${formatDateTimeBR(item.createdAt)}</small>
                  </div>
                  <div class="muted">${item.userName} • ${item.module}</div>
                  <p>${item.details}</p>
                </div>
              `).join('')}
            </div>
          ` : `<div class="empty">Nenhuma movimentação recente.</div>`}
        </div>
      </div>
    </div>
  `;
}

function renderMetricCard(title, value, icon, tone, note) {
  return `
    <div class="card metric-card ${tone}">
      <div class="metric-label">
        <strong>${title}</strong>
        <span class="metric-icon">${icon}</span>
      </div>
      <div class="metric-value">${value}</div>
      <small>${note}</small>
    </div>
  `;
}

function renderResumoEnvios() {
  const date = viewFilters.resumoEnviosDate || todayStr();
  const networkFilter = viewFilters.resumoEnviosNetwork || '';
  const cdUserFilter = currentUser.role === 'admin' ? (viewFilters.resumoEnviosCdUserId || '') : '';
  const rows = getVisibleOutboundSummaryRows(date, appState, currentUser)
    .filter((item) => {
      const store = getStoreById(item.storeId);
      const networkOk = !networkFilter || inferStoreNetwork(store || {}) === networkFilter;
      const userOk = currentUser.role !== 'admin' || !cdUserFilter || item.createdById === cdUserFilter;
      return networkOk && userOk;
    })
    .sort((a, b) => String(b.createdAt || '').localeCompare(String(a.createdAt || '')));
  const totalQty = rows.reduce((acc, item) => addQty(acc, item.qty), emptyQty());
  const users = [...appState.users]
    .filter((user) => user.role === 'cd')
    .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
  const groupedByCd = rows.reduce((acc, item) => {
    const key = item.createdById || item.createdBy || 'sem_usuario';
    if (!acc[key]) acc[key] = { name: getUserById(item.createdById)?.name || item.createdBy || 'Sem usuário', qty: emptyQty(), count: 0 };
    acc[key].qty = addQty(acc[key].qty, item.qty);
    acc[key].count += 1;
    return acc;
  }, {});

  return `
    <div class="stack">
      <div class="cards-grid">
        ${renderMetricCard('Lojas enviadas hoje', rows.length, '🏬', 'success', currentUser.role === 'cd' ? 'Lançadas por você' : 'Todos os usuários do CD')}
        ${renderMetricCard('Total enviado', `${sumQty(totalQty)} cx`, '📦', 'success', BOX_TYPES.map((item) => `${item.label}: ${safeInt(totalQty[item.key])}`).join(' • '))}
        ${renderMetricCard('Folhagens', safeInt(totalQty.folhagens), '🥬', 'success', 'Caixas lançadas no período')}
        ${renderMetricCard('Bandejas', safeInt(totalQty.bandejas), '🧺', 'success', 'Caixas lançadas no período')}
      </div>

      <div class="card">
        <div class="page-header">
          <div>
            <h3>Filtro do resumo</h3>
          </div>
        </div>
        <form id="form-resumo-envios" class="form-grid-3">
          <label>Data
            <input type="date" name="date" value="${date}" />
          </label>
          <label>Rede
            <select name="network">
              <option value="">Todas as redes</option>
              ${buildNetworkOptions(networkFilter)}
            </select>
          </label>
          ${currentUser.role === 'admin' ? `
            <label>Usuário CD
              <select name="cdUserId">
                <option value="">Todos</option>
                ${users.map((user) => `<option value="${user.id}" ${user.id === cdUserFilter ? 'selected' : ''}>${escapeHtml(user.name)}</option>`).join('')}
              </select>
            </label>
          ` : `
            <label>Usuário CD
              <input type="text" value="${escapeHtml(currentUser.name)}" readonly />
            </label>
          `}
        </form>
      </div>

      ${currentUser.role === 'admin' ? `
        <div class="card">
          <div class="section-header"><div><h3>Resumo por usuário do CD</h3></div></div>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Usuário</th><th>Lojas</th><th>Folhagens</th><th>Bandejas</th><th>Total</th></tr></thead>
              <tbody id="resumo-envios-users-body">
                ${Object.values(groupedByCd).length ? Object.values(groupedByCd).map((item) => `
                  <tr>
                    <td>${escapeHtml(item.name)}</td>
                    <td>${item.count}</td>
                    <td>${safeInt(item.qty.folhagens)}</td>
                    <td>${safeInt(item.qty.bandejas)}</td>
                    <td><strong>${sumQty(item.qty)}</strong></td>
                  </tr>
                `).join('') : `<tr><td colspan="5" class="center muted">Nenhum envio encontrado.</td></tr>`}
              </tbody>
            </table>
          </div>
        </div>
      ` : ''}

      <div class="card">
        <div class="section-header"><div><h3>Envios lançados</h3></div></div>
        <div class="table-wrap">
          <table id="resumo-envios-table">
            <thead>
              <tr>
                <th>Hora</th>
                <th>Usuário CD</th>
                <th>Rede</th>
                <th>Loja</th>
                <th>Rota</th>
                <th>Folhagens</th>
                <th>Bandejas</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              ${rows.length ? rows.map((item) => {
                const store = getStoreById(item.storeId);
                return `
                  <tr data-date="${item.date}" data-network="${escapeHtml(inferStoreNetwork(store || {}))}" data-cd-user-id="${escapeHtml(item.createdById || '')}" data-created-by="${escapeHtml(item.createdBy || '')}">
                    <td>${item.createdAt ? new Date(item.createdAt).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) : '-'}</td>
                    <td>${escapeHtml(getUserById(item.createdById)?.name || item.createdBy || '-')}</td>
                    <td>${escapeHtml(inferStoreNetwork(store || {}))}</td>
                    <td>${escapeHtml(formatStoreNameForUser(store?.name || '-'))}</td>
                    <td>${escapeHtml(getRouteById(item.routeId)?.name || '-')}</td>
                    <td>${safeInt(item.qty?.folhagens)}</td>
                    <td>${safeInt(item.qty?.bandejas)}</td>
                    <td><strong>${sumQty(item.qty)}</strong></td>
                  </tr>
                `;
              }).join('') : `<tr><td colspan="8" class="center muted">Nenhum envio encontrado.</td></tr>`}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function renderSaidas() {
  const date = todayStr();
  const recent = appState.movements.outbounds.filter((item) => isActiveMovement(item) && item.status !== 'historico').slice(0, 10);
  const showSeparatorFilter = canUseSeparatorFilter(currentUser);
  const stores = getActiveStores()
    .filter((store) => storeHasPendingOutboundForUser(store.id, date, currentUser, appState))
    .sort((a, b) => compareOutboundStoreOptions(a, b, currentUser));
  return `
    <div class="grid-2">
      <div class="card">
        <div class="page-header">
          <div>
            <h3>Nova saída do CD</h3>
          </div>
          <div class="helper-card">
            <h4>Saldo atual do CD</h4>
            <div class="small">${BOX_TYPES.map((item) => `${item.label}: <strong>${safeInt(appState.cdStock[item.key])}</strong>`).join(' • ')}</div>
          </div>
        </div>

        <form id="form-saida" class="stack">
          <div class="form-grid-3">
            <label>Data da entrega
              <input type="date" name="date" value="${date}" required />
            </label>
            <label>Rede
              <select name="network" id="saida-network">
                <option value="">Todas as redes</option>
                ${buildNetworkOptions()}
              </select>
            </label>
            ${showSeparatorFilter ? `
              <label>Separador
                <select name="separator" id="saida-separator">
                  <option value="">Todos os separadores</option>
                  ${buildSeparatorOptions()}
                </select>
              </label>
            ` : ''}
            <label>Loja
              <select name="storeId" id="saida-store" required>
                <option value="">Selecione a loja</option>
                ${stores.map((store) => `<option value="${store.id}">${escapeHtml(getStoreOptionLabel(store))}</option>`).join('')}
              </select>
            </label>
          </div>

          <div id="saida-rota-info" class="helper-card compact small">Selecione uma loja.</div>


          ${currentUser.role === 'cd' ? `<div class="helper-card compact small">Seu acesso permite lançar: <strong>${getAllowedBoxTypesLabel(currentUser)}</strong>.</div>` : ''}

          ${qtyInputsForUser('saida', currentUser)}

          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Salvar saída</button>
            <button type="button" id="btn-reset-saida" class="btn btn-secondary">Limpar</button>
          </div>
        </form>
      </div>

      <div class="card">
        <div class="section-header">
          <div>
            <h3>Saídas recentes</h3>
          </div>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Data</th>
                <th>Loja</th>
                <th>Rota automática</th>
                <th>Motorista</th>
                <th>Separador</th>
                <th>Total</th>
                <th>Status</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              ${recent.length ? recent.map((item) => `
                <tr>
                  <td>${formatDateBR(item.date)}</td>
                  <td>${getStoreById(item.storeId)?.name || '-'}</td>
                  <td>${getRouteById(item.routeId)?.name || '-'}</td>
                  <td>${getUserById(item.driverId)?.name || '-'}</td>
                  <td>${escapeHtml(item.separator || getStoreSeparator(getStoreById(item.storeId)) || '-')}</td>
                  <td>${sumQty(item.qty)}</td>
                  <td>${item.receiptId ? statusTag('ok') : statusTag('warn')}</td>
                  <td>${canEditOutboundMovement(item) ? `<button type="button" class="btn btn-secondary btn-edit-outbound" data-id="${item.id}">Editar</button>` : '-'}</td>
                </tr>
              `).join('') : `<tr><td colspan="8" class="center muted">Nenhuma saída registrada.</td></tr>`}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}
function renderEntregasMotorista() {
  const today = todayStr();
  const driverRouteIds = currentUser.role === 'driver' ? getDriverRouteIds(currentUser, appState, today) : [];
  const pending = appState.movements.outbounds.filter((item) => {
    if (!isActiveMovement(item) || item.status === 'historico' || item.driverDeliveryId || (appState.movements.driverDeliveries || []).some((delivery) => isActiveMovement(delivery) && delivery.outboundId === item.id)) return false;
    if (item.date !== today) return false;
    if (currentUser.role === 'driver') {
      return item.driverId === currentUser.id || driverRouteIds.includes(item.routeId) || getOutboundResponsibleDriver(item) === currentUser.id;
    }
    return true;
  }).slice(0, 80);
  const recent = (appState.movements.driverDeliveries || []).filter((item) => {
    if (!isActiveMovement(item) || !isMovementVisibleToUser(item, currentUser, appState)) return false;
    if (currentUser.role === 'driver') return item.date === today;
    return true;
  }).slice(0, 12);
  return `
    <div class="grid-2">
      <div class="card">
        <div class="page-header">
          <div>
            <h3>Validar caixas deixadas na loja</h3>
          </div>
        </div>

        <form id="form-entrega-motorista" class="stack">
          <label>Saída para validar
            <select name="outboundId" id="entrega-motorista-outbound" required>
              <option value="">Selecione</option>
              ${pending.map((item) => {
                const store = getStoreById(item.storeId);
                return `<option value="${item.id}">${formatDateBR(item.date)} • ${store?.name || '-'} • ${getRouteById(item.routeId)?.name || '-'}</option>`;
              }).join('')}
            </select>
          </label>

          <div id="entrega-motorista-resumo" class="helper-card compact small">Selecione uma saída.</div>

          <label>Total de caixas deixadas na loja
            <input type="number" min="0" step="1" name="totalDelivered" id="entrega-motorista-total" required />
          </label>

          <div id="entrega-motorista-detalhe" class="driver-detail-panel hidden">
            <div class="alert-strip warning">
              <div>
                <strong>Divergência identificada</strong>
                <p id="entrega-motorista-alerta" class="muted">Informe o detalhamento para o sistema identificar o erro real.</p>
              </div>
            </div>
            ${qtyInputs('entrega-motorista')}
          </div>

          <label>Observação / justificativa
            <textarea name="notes" placeholder="Obrigatório quando houver divergência. Ex.: loja recebeu menos caixas, caixa ficou no caminhão, reforço levou parte da carga..."></textarea>
          </label>

          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Validar entrega</button>
          </div>
        </form>
      </div>

      <div class="card">
        <div class="section-header">
          <div>
            <h3>Validações recentes</h3>
          </div>
        </div>
        <div class="list">
          ${recent.length ? recent.map((item) => `
            <div class="list-item">
              <div class="list-item-head">
                <strong>${getStoreById(item.storeId)?.name || '-'}</strong>
                ${item.hasDivergence ? '<span class="tag danger">Divergência</span>' : '<span class="tag ok">Conferido</span>'}
              </div>
              <div class="muted">Motorista: ${getUserById(item.driverId)?.name || item.createdBy || '-'}</div>
              <div class="kpi-row"><span>Total deixado</span><strong>${item.totalDelivered} caixas</strong></div>
              <small class="muted">Correto esperado: ${item.expectedQty.folhagens} folhagens + ${item.expectedQty.bandejas} bandejas = ${sumQty(item.expectedQty)} caixas</small>
              ${canEditDriverDeliveryMovement(item) ? `<div class="form-actions"><button type="button" class="btn btn-secondary btn-edit-driver-delivery" data-id="${item.id}">Editar entrega</button></div>` : ''}
            </div>
          `).join('') : `<div class="empty">Nenhuma validação registrada ainda.</div>`}
        </div>
      </div>
    </div>
  `;
}

function renderRecebimentos() {
  const storeFilter = currentUser.role === 'promoter' ? currentUser.storeId : '';
  const pending = appState.movements.outbounds.filter((item) => {
    const store = getStoreById(item.storeId);
    return isActiveMovement(item) && !item.receiptId && !(appState.movements.receipts || []).some((receipt) => isActiveMovement(receipt) && receipt.outboundId === item.id) && item.status !== 'historico' && storeRequiresPromoter(store) && (!storeFilter || item.storeId === storeFilter);
  });
  return `
    <div class="grid-2">
      <div class="card">
        <div class="page-header">
          <div>
            <h3>Confirmar recebimento na loja</h3>
          </div>
        </div>

        <form id="form-recebimento" class="stack">
          <label>Saída pendente
            <select name="outboundId" id="recebimento-outbound" required>
              <option value="">Selecione</option>
              ${pending.map((item) => `
                <option value="${item.id}">
                  ${formatDateBR(item.date)} • ${getStoreById(item.storeId)?.name || '-'}
                </option>
              `).join('')}
            </select>
          </label>

          <div id="recebimento-resumo" class="helper-card compact small">Selecione a saída.</div>

          <label>Total de caixas que chegaram na loja
            <input type="number" min="0" step="1" name="totalReceived" id="recebimento-total" required />
          </label>

          <div id="recebimento-detalhe" class="driver-detail-panel hidden">
            <div class="alert-strip warning">
              <div>
                <strong>Divergência identificada</strong>
                <p id="recebimento-alerta" class="muted">Informe quantas caixas de folhagens e quantas caixas de bandejas chegaram.</p>
              </div>
            </div>
            ${qtyInputs('recebimento')}
          </div>

          <label>Observação / justificativa
            <textarea name="justification" placeholder="Obrigatório quando houver diferença ou alguma ocorrência."></textarea>
          </label>

          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Confirmar recebimento</button>
          </div>
        </form>
      </div>

      <div class="card">
        <div class="section-header">
          <div>
            <h3>Confirmações do dia</h3>
          </div>
        </div>
        <div class="list">
          ${appState.movements.receipts.filter((item) => item.date === todayStr() && isMovementVisibleToUser(item, currentUser, appState)).length ? appState.movements.receipts.filter((item) => item.date === todayStr() && isMovementVisibleToUser(item, currentUser, appState)).map((item) => {
            const outbound = appState.movements.outbounds.find((out) => out.id === item.outboundId);
            return `
              <div class="list-item">
                <div class="list-item-head">
                  <strong>${getStoreById(item.storeId)?.name || '-'}</strong>
                  <small class="muted">${formatDateTimeBR(item.createdAt)}</small>
                </div>
                <div class="muted">Saída original: ${sumQty(outbound?.qty || emptyQty())} caixas</div>
                <div class="kpi-row"><span>Confirmado</span><strong>${sumQty(item.qty)} caixas</strong></div>
                ${canEditReceiptMovement(item) ? `<div class="form-actions"><button type="button" class="btn btn-secondary btn-edit-receipt" data-id="${item.id}">Editar recebimento</button></div>` : ''}
              </div>
            `;
          }).join('') : `<div class="empty">Nenhum recebimento confirmado hoje.</div>`}
        </div>
      </div>
    </div>
  `;
}

function renderRecolhimentos() {
  const networkFilter = '';
  const availableRoutes = currentUser.role === 'driver'
    ? getVisibleRoutes(appState, currentUser)
    : appState.routes;
  const fixedRouteId = currentUser.role === 'driver' && availableRoutes.length === 1 ? availableRoutes[0].id : '';
  const driverOptions = currentUser.role === 'driver'
    ? `<option value="${currentUser.id}" selected>${currentUser.name}</option>`
    : availableRoutes.map((route) => {
      const driver = getUserById(route.driverId);
      return `<option value="${route.driverId}">${driver?.name || '-'}</option>`;
    }).join('');

  return `
    <div class="grid-2">
      <div class="card">
        <div class="page-header">
          <div>
            <h3>Registrar recolhimento</h3>
          </div>
        </div>

        <form id="form-recolhimento" class="stack">
          <div class="form-grid-3">
            <label>Data
              <input type="date" name="date" value="${todayStr()}" readonly required />
            </label>
            <label>Rota
              <select name="routeId" id="pickup-route" required>
                <option value="">Selecione</option>
                ${availableRoutes.map((route) => `<option value="${route.id}" ${route.id === fixedRouteId ? 'selected' : ''}>${route.name}</option>`).join('')}
              </select>
            </label>
            <label>Motorista
              <select name="driverId" id="pickup-driver" required>
                <option value="">Selecione</option>
                ${driverOptions}
              </select>
            </label>
          </div>

          <label>Rede
            <select name="network" id="pickup-network">
              <option value="">Todas as redes</option>
              ${buildNetworkOptions(networkFilter)}
            </select>
          </label>

          <label>Loja
            <select name="storeId" id="pickup-store" required>
              <option value="">Selecione a rota primeiro</option>
            </select>
          </label>

          <div id="pickup-stock-info" class="helper-card compact small">Selecione a loja.</div>


          <div class="qty-grid single">
            <div class="qty-box">
              <label for="pickup-total">Total de caixas recolhidas</label>
              <input type="number" min="0" step="1" id="pickup-total" name="totalQty" value="0" required />
            </div>
          </div>

          <label>Observação / justificativa
            <textarea name="justification" placeholder="Obrigatória se recolher acima do saldo disponível. Ex.: loja tinha caixas físicas sem saldo no sistema / coleta de caixas antigas / ajuste operacional."></textarea>
          </label>

          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Salvar recolhimento</button>
          </div>
        </form>
      </div>

      <div class="card">
        <div class="section-header">
          <div>
            <h3>Recolhimentos do dia</h3>
          </div>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Loja</th>
                <th>Rota</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${appState.movements.pickups.filter((item) => item.date === todayStr() && isMovementVisibleToUser(item, currentUser, appState)).length ? appState.movements.pickups.filter((item) => item.date === todayStr() && isMovementVisibleToUser(item, currentUser, appState)).map((item) => `
                <tr>
                  <td>${getStoreById(item.storeId)?.name || '-'}</td>
                  <td>${getRouteById(item.routeId)?.name || '-'}</td>
                  <td>${sumQty(item.qty)}</td>
                  <td>${item.returnBatchId ? statusTag('ok') : statusTag('warn')}</td>
                </tr>
              `).join('') : `<tr><td colspan="4" class="center muted">Nenhum recolhimento registrado hoje.</td></tr>`}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}


function renderCaixasOcupadas() {
  const today = todayStr();
  const networkFilter = '';
  const availableRoutes = getVisibleRoutes(appState, currentUser);
  const fixedRouteId = currentUser.role === 'driver' && availableRoutes.length === 1 ? availableRoutes[0].id : '';
  const driverOptions = currentUser.role === 'driver'
    ? `<option value="${currentUser.id}" selected>${currentUser.name}</option>`
    : availableRoutes.map((route) => {
      const driver = getUserById(route.driverId);
      return `<option value="${route.driverId}">${driver?.name || '-'}</option>`;
    }).join('');
  const visibleRecords = (appState.movements.occupiedBoxes || [])
    .filter((item) => isActiveMovement(item) && isMovementVisibleToUser(item, currentUser, appState))
    .slice(0, 80);

  return `
    <div class="grid-2">
      <div class="card">
        <div class="page-header">
          <div>
            <h3>Registrar caixas ocupadas</h3>
          </div>
        </div>

        <form id="form-caixas-ocupadas" class="stack">
          <div class="form-grid-3">
            <label>Data
              <input type="date" name="date" value="${today}" readonly required />
            </label>
            <label>Rota
              <select name="routeId" id="occupied-route" required>
                <option value="">Selecione</option>
                ${availableRoutes.map((route) => `<option value="${route.id}" ${route.id === fixedRouteId ? 'selected' : ''}>${route.name}</option>`).join('')}
              </select>
            </label>
            <label>Motorista
              <select name="driverId" id="occupied-driver" required>
                <option value="">Selecione</option>
                ${driverOptions}
              </select>
            </label>
          </div>

          <label>Rede
            <select name="network" id="occupied-network">
              <option value="">Todas as redes</option>
              ${buildNetworkOptions(networkFilter)}
            </select>
          </label>

          <label>Loja
            <select name="storeId" id="occupied-store" required>
              <option value="">Selecione a rota primeiro</option>
            </select>
          </label>

          <div id="occupied-store-info" class="helper-card compact small">Selecione a loja.</div>

          <div class="form-grid">
            <label>Quantidade de caixas ocupadas
              <input type="number" min="1" step="1" name="totalQty" value="1" required />
            </label>
            <label>Com o que está sendo usada?
              <input type="text" name="usedFor" placeholder="Ex.: exposição, outro produto, apoio da loja" required />
            </label>
          </div>

          <label>Observação
            <textarea name="notes" placeholder="Opcional. Ex.: corredor, banca, setor, responsável que informou."></textarea>
          </label>

          <div class="alert-strip warning">
            <span>Este lançamento não altera estoque. Ele apenas cria um alerta de caixas impossibilitadas de recolhimento.</span>
          </div>

          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Registrar caixas ocupadas</button>
          </div>
        </form>
      </div>

      <div class="card">
        <div class="section-header">
          <div>
            <h3>Alertas de caixas ocupadas</h3>
          </div>
        </div>
        <div class="list">
          ${visibleRecords.length ? visibleRecords.map((item) => `
            <div class="list-item">
              <div class="list-item-head">
                <strong>${getStoreById(item.storeId)?.name || '-'}</strong>
                ${statusTag('warn')}
              </div>
              <div class="kpi-row"><span>Quantidade</span><strong>${safeInt(item.totalQty)} caixas</strong></div>
              <p>Uso informado: <strong>${item.usedFor || '-'}</strong></p>
              ${item.notes ? `<small class="muted">${item.notes}</small>` : ''}
              <small class="muted">${getRouteById(item.routeId)?.name || '-'} • ${getUserById(item.driverId)?.name || '-'} • ${formatDateTimeBR(item.createdAt)}</small>
            </div>
          `).join('') : `<div class="empty">Nenhuma caixa ocupada registrada.</div>`}
        </div>
      </div>
    </div>
  `;
}

function renderCaixasLiberadas() {
  const today = todayStr();
  const canLaunch = currentUser.role === 'promoter';
  const promoterStore = canLaunch ? getStoreById(currentUser.storeId) : null;
  const promoterStockTotal = promoterStore ? sumQty(getStoreStock(promoterStore.id)) : 0;
  const visibleRecords = (appState.movements.releasedBoxes || [])
    .filter((item) => isActiveMovement(item) && isMovementVisibleToUser(item, currentUser, appState))
    .slice(0, 100);

  const formCard = canLaunch ? `
      <div class="card">
        <div class="page-header">
          <div>
            <h3>Informar caixas liberadas</h3>
          </div>
        </div>

        <form id="form-caixas-liberadas" class="stack">
          <input type="hidden" name="storeId" value="${currentUser.storeId || ''}" />
          <div class="form-grid">
            <label>Data
              <input type="date" name="date" value="${today}" readonly required />
            </label>
            <label>Loja
              <input type="text" value="${escapeHtml(formatStoreNameForUser(promoterStore?.name || '-'))}" readonly />
            </label>
          </div>

          <div class="helper-card compact small">
            Saldo atual no sistema: <strong>${promoterStockTotal} caixas</strong>. Informe abaixo a situação real da loja.
          </div>

          <div class="form-grid-3">
            <label>Total de caixas na loja
              <input type="number" min="0" step="1" name="totalInStore" value="${promoterStockTotal}" required />
            </label>
            <label>Caixas liberadas
              <input type="number" min="0" step="1" name="freeQty" value="0" required />
            </label>
            <label>Caixas ocupadas
              <input type="number" min="0" step="1" name="occupiedQty" value="0" required />
            </label>
          </div>

          <label>Observação
            <textarea name="notes" placeholder="Opcional. Ex.: caixas com mercadoria, exposição, aguardando reposição, etc."></textarea>
          </label>

          <div id="released-balance-info" class="helper-card compact small">Informe liberadas + ocupadas igual ao total.</div>

          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Salvar caixas liberadas</button>
          </div>
        </form>
      </div>
  ` : `
      <div class="card">
        <div class="page-header">
          <div>
            <h3>Consulta de caixas liberadas</h3>
          </div>
        </div>
        <div class="empty">${currentUser.role === 'driver' ? 'Motorista visualiza somente as lojas da própria rota/carga.' : 'ADM visualiza os registros informados pelas lojas.'}</div>
      </div>
  `;

  return `
    <div class="grid-2">
      ${formCard}

      <div class="card">
        <div class="section-header">
          <div>
            <h3>Últimos lançamentos</h3>
          </div>
        </div>
        <div class="list">
          ${visibleRecords.length ? visibleRecords.map((item) => `
            <div class="list-item">
              <div class="list-item-head">
                <strong>${formatStoreNameForUser(getStoreById(item.storeId)?.name || '-')}</strong>
                ${safeInt(item.occupiedQty) > 0 ? statusTag('warn') : statusTag('ok')}
              </div>
              <div class="stats-inline">
                <div class="stat-pill"><span>Total</span><strong>${safeInt(item.totalInStore)}</strong></div>
                <div class="stat-pill"><span>Liberadas</span><strong>${safeInt(item.freeQty)}</strong></div>
                <div class="stat-pill"><span>Ocupadas</span><strong>${safeInt(item.occupiedQty)}</strong></div>
              </div>
              ${item.notes ? `<p>${escapeHtml(item.notes)}</p>` : ''}
              <small class="muted">${formatDateBR(item.date)} • ${getRouteById(item.routeId)?.name || '-'} • ${formatDateTimeBR(item.createdAt)}</small>
            </div>
          `).join('') : `<div class="empty">Nenhum lançamento de caixas liberadas para seu acesso.</div>`}
        </div>
      </div>
    </div>
  `;
}


function renderRetornos() {
  const today = todayStr();
  const routeOptions = appState.routes.map((route) => `<option value="${route.id}">${route.name}</option>`).join('');
  const pendingSummary = getCdReturnPendingSummary(appState, currentUser);
  const pendingGroups = pendingSummary.groups;
  const RETURN_RENDER_LIMIT = 120;
  const pendingGroupsPage = pendingGroups.slice(0, RETURN_RENDER_LIMIT);
  const pendingRouteOptions = [...new Map(pendingGroups.map((group) => [group.routeId, group.routeName])).entries()]
    .sort((a, b) => a[1].localeCompare(b[1], 'pt-BR'))
    .map(([routeId, routeName]) => `<option value="${routeId}">${routeName}</option>`)
    .join('');
  const pendingDriverOptions = [...new Map(pendingGroups.map((group) => [group.driverId, group.driverName])).entries()]
    .sort((a, b) => a[1].localeCompare(b[1], 'pt-BR'))
    .map(([driverId, driverName]) => `<option value="${driverId}">${driverName}</option>`)
    .join('');
  const oldGroups = pendingGroups.filter((group) => group.daysOpen >= 2).length;
  const mostUrgent = pendingGroups[0];
  return `
    <div class="stack">
      <div class="card">
        <div class="page-header">
          <div>
            <h3>Visão rápida dos retornos pendentes</h3>
            <p>Caixas recolhidas nas lojas que ainda não foram confirmadas como recebidas no CD.</p>
          </div>
          <div class="helper-card small">Total em retorno: <strong>${pendingSummary.total}</strong> caixas</div>
        </div>

        <div class="cards-grid compact-metrics">
          ${renderMetricCard('Em retorno ao CD', pendingSummary.total, '🔄', pendingSummary.total ? 'warning' : 'success', 'Caixas recolhidas e ainda sem retorno confirmado')}
          ${renderMetricCard('Rotas pendentes', pendingSummary.routes, '🛣️', pendingSummary.routes ? 'warning' : 'success', 'Rotas com retorno aberto')}
          ${renderMetricCard('Motoristas pendentes', pendingSummary.drivers, '🚚', pendingSummary.drivers ? 'warning' : 'success', 'Motoristas com caixas a devolver/conferir')}
          ${renderMetricCard('Pendências antigas', oldGroups, '⏱️', oldGroups ? 'critical' : 'success', 'Grupos com 2 dias ou mais')}
        </div>

        ${mostUrgent ? `
          <div class="alert-strip ${mostUrgent.daysOpen >= 2 ? 'critical' : 'info'}">
            <div>
              <strong>Pendência mais antiga: ${formatDateBR(mostUrgent.date)} • ${mostUrgent.routeName} • ${mostUrgent.driverName}</strong>
              <div class="muted">${mostUrgent.expectedTotal} caixas aguardando conferência no CD. ${mostUrgent.storeCount} loja(s) envolvida(s).</div>
            </div>
            <button type="button" class="btn btn-primary btn-load-return-pending" data-date="${mostUrgent.date}" data-route-id="${mostUrgent.routeId}" data-driver-id="${mostUrgent.driverId}" data-total="${mostUrgent.expectedTotal}">Carregar no retorno</button>
          </div>
        ` : `
          <div class="alert-strip info">
            <div>
              <strong>Nenhuma pendência de retorno no CD</strong>
              <div class="muted">Todos os recolhimentos registrados já foram conferidos no CD.</div>
            </div>
            ${statusTag('ok')}
          </div>
        `}
      </div>

      <div class="card">
        <div class="section-header">
          <div>
            <h3>Pendências de retorno ao CD</h3>
            <p>Use os filtros para encontrar rapidamente qual rota, motorista ou data compõe o total em retorno.</p>
          </div>
          <div class="helper-card small">${pendingGroups.length} grupo(s) pendente(s)<br>Exibindo agora: <strong>${pendingGroupsPage.length}</strong></div>
        </div>
        <div class="form-grid-3">
          <label>Filtrar por rota
            <select id="retorno-pendente-rota-filter">
              <option value="">Todas as rotas</option>
              ${pendingRouteOptions}
            </select>
          </label>
          <label>Filtrar por motorista
            <select id="retorno-pendente-motorista-filter">
              <option value="">Todos os motoristas</option>
              ${pendingDriverOptions}
            </select>
          </label>
          <label>Buscar loja, rota ou motorista
            <input type="search" id="retorno-pendente-search" placeholder="Digite para filtrar" />
          </label>
        </div>

        <div class="helper-card compact">
          <div class="section-header">
            <div>
              <strong>Retorno em lote</strong>
              <p>Selecione várias pendências abaixo para confirmar todas no CD de uma só vez, usando o total esperado de cada rota/motorista.</p>
            </div>
            <div id="retorno-selected-summary" class="tag info">0 selecionado(s)</div>
          </div>
          <div class="form-actions">
            <label class="checkbox-row">
              <input type="checkbox" id="retorno-select-visible" />
              Selecionar pendências visíveis
            </label>
            <button type="button" id="btn-confirm-selected-returns" class="btn btn-primary">Confirmar selecionados no CD</button>
          </div>
          <label>Justificativa para confirmação em lote
            <textarea id="retorno-bulk-justification" placeholder="Exemplo: conferência física realizada no CD e retornos confirmados em lote pela gestão."></textarea>
          </label>
        </div>

        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Sel.</th>
                <th>Data</th>
                <th>Rota / motorista</th>
                <th>Recolhimentos</th>
                <th>Total pendente</th>
                <th>Lojas</th>
                <th>Status</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody id="retorno-pendente-tbody">
              ${pendingGroupsPage.length ? pendingGroupsPage.map((group) => {
                const storesPreview = group.storeNames.slice(0, 4).join(', ');
                const hiddenStores = Math.max(0, group.storeNames.length - 4);
                const searchText = `${group.date} ${group.routeName} ${group.driverName} ${group.storeNames.join(' ')}`.toLowerCase().replace(/"/g, '&quot;');
                return `
                  <tr class="retorno-pending-row" data-route-id="${group.routeId}" data-driver-id="${group.driverId}" data-date="${group.date}" data-total="${group.expectedTotal}" data-search="${escapeHtml(searchText)}">
                    <td><input type="checkbox" class="retorno-pending-checkbox" data-date="${group.date}" data-route-id="${group.routeId}" data-driver-id="${group.driverId}" data-total="${group.expectedTotal}" /></td>
                    <td><strong>${formatDateBR(group.date)}</strong><br><small class="muted">${group.daysOpen} dia(s) aberto</small></td>
                    <td><strong>${group.routeName}</strong><br><small class="muted">${group.driverName}</small></td>
                    <td>${group.pickupsCount} recolhimento(s)${group.freightReturnsCount ? `<br><small class="muted">+ ${group.freightReturnsCount} devolução(ões) de frete Goiânia</small>` : ''}${group.supportDropTotal ? `<br><small class="muted">- ${group.supportDropTotal} no ponto de apoio</small>` : ''}</td>
                    <td><strong>${group.expectedTotal} caixas</strong></td>
                    <td>${group.storeCount || '-'} loja(s)<br><small class="muted">${storesPreview || '-'}${hiddenStores ? ` +${hiddenStores}` : ''}</small></td>
                    <td>${group.daysOpen >= 2 ? '<span class="tag danger">Atrasado</span>' : '<span class="tag warn">Aguardando CD</span>'}</td>
                    <td><button type="button" class="btn btn-secondary btn-load-return-pending" data-date="${group.date}" data-route-id="${group.routeId}" data-driver-id="${group.driverId}" data-total="${group.expectedTotal}">Carregar</button></td>
                  </tr>
                `;
              }).join('') : `<tr><td colspan="8"><div class="empty">Nenhum retorno pendente.</div></td></tr>`}
              ${pendingGroups.length > pendingGroupsPage.length ? `<tr><td colspan="8"><div class="helper-card small">Mostrando os primeiros ${pendingGroupsPage.length} de ${pendingGroups.length} grupos. Use os filtros de rota, motorista ou busca para trabalhar com menos pendências de uma vez.</div></td></tr>` : ''}
            </tbody>
          </table>
        </div>
      </div>

      <div class="grid-2">
        <div class="card">
          <div class="page-header">
            <div>
              <h3>Confirmar retorno no CD</h3>
              <p>Carregue uma pendência acima ou selecione data, rota e motorista manualmente.</p>
            </div>
          </div>

          <form id="form-retorno" class="stack">
            <div class="form-grid-3">
              <label>Data do retorno
                <input type="date" name="date" value="${today}" required />
              </label>
              <label>Rota
                <select name="routeId" id="retorno-route" required>
                  <option value="">Selecione</option>
                  ${routeOptions}
                </select>
              </label>
              <label>Motorista
                <select name="driverId" id="retorno-driver" required>
                  <option value="">Selecione</option>
                  ${appState.users.filter((user) => user.role === 'driver').map((user) => `<option value="${user.id}">${user.name}</option>`).join('')}
                </select>
              </label>
            </div>

            <div id="retorno-resumo" class="helper-card compact small">Selecione rota e motorista.</div>

            <label>Total de caixas que chegou no caminhão
              <input type="number" min="0" step="1" id="retorno-total" name="totalQty" value="0" required />
            </label>

            <label>Justificativa
              <textarea name="justification" placeholder="Obrigatório quando o total que chegou no CD for diferente do total recolhido pelo motorista nas lojas."></textarea>
            </label>

            <div class="form-actions">
              <button type="submit" class="btn btn-primary">Confirmar retorno</button>
            </div>
          </form>
        </div>

        <div class="card">
          <div class="section-header">
            <div>
              <h3>Retornos já lançados</h3>
            </div>
          </div>
          <div class="list">
            ${appState.movements.returns.slice(0, 8).length ? appState.movements.returns.slice(0, 8).map((item) => `
              <div class="list-item">
                <div class="list-item-head">
                  <strong>${getRouteById(item.routeId)?.name || '-'}</strong>
                  <small class="muted">${formatDateTimeBR(item.createdAt)}</small>
                </div>
                <div class="muted">${getUserById(item.driverId)?.name || '-'}</div>
                <div class="kpi-row"><span>Chegou no caminhão</span><strong>${safeInt(item.totalQty ?? sumQty(item.qty))} caixas</strong></div>
                ${safeInt(item.expectedTotal ?? sumQty(item.expectedQty)) !== safeInt(item.totalQty ?? sumQty(item.qty)) ? '<span class="tag warn">Divergência aberta</span>' : statusTag('ok')}
              </div>
            `).join('') : `<div class="empty">Nenhum retorno confirmado.</div>`}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderEstoque() {
  const rows = getStoreStockRows();
  return `
    <div class="stack">
      <div class="card">
        <div class="page-header">
          <div>
            <h3>Estoque em loja</h3>
          </div>
          <div class="inline-actions">
            ${statusTag(rows.some((row) => row.isHigh) ? 'warn' : 'ok')}
            <div class="helper-card small">Total em todas as lojas: <strong>${rows.reduce((acc, row) => acc + row.total, 0)}</strong> caixas</div>
          </div>
        </div>

        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Loja</th>
                <th>Rota atual</th>
                <th>Total em loja</th>
                <th>Limite</th>
                <th>Status</th>
                ${BOX_TYPES.map((item) => `<th>${item.label}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${rows.map((row) => `
                <tr>
                  <td>${row.store.name}</td>
                  <td>${getRouteById(row.routeId)?.name || '-'}</td>
                  <td><strong>${row.total}</strong></td>
                  <td>${row.store.highStockLimit}</td>
                  <td>${row.isHigh ? statusTag('danger') : statusTag('ok')}</td>
                  ${BOX_TYPES.map((item) => `<td>${safeInt(row.qty[item.key])}</td>`).join('')}
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}


function renderInventoryDiffRows(previousQty, countedQty) {
  const diff = qtyDiff(countedQty, previousQty);
  return BOX_TYPES.map((item) => {
    const value = signedInt(diff[item.key]);
    const signal = value > 0 ? '+' : '';
    const tone = value === 0 ? 'ok' : 'warn';
    return `
      <tr>
        <td>${item.label}</td>
        <td>${safeInt(previousQty?.[item.key])}</td>
        <td>${safeInt(countedQty?.[item.key])}</td>
        <td>${value === 0 ? statusTag('ok') : `<span class="tag ${tone}">${signal}${value}</span>`}</td>
      </tr>
    `;
  }).join('');
}


function getMandatoryInventoryPendingGroups(state = appState) {
  return (state.mandatoryInventories || [])
    .filter((schedule) => schedule.status !== 'cancelada')
    .map((schedule) => {
      const pendingStores = getMandatoryInventoryStoreIds(schedule, state)
        .filter((storeId) => isMandatoryInventoryPendingForStore(schedule, storeId, state))
        .map((storeId) => getStoreById(storeId, state))
        .filter(Boolean)
        .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
      return { schedule, pendingStores };
    })
    .filter((group) => group.pendingStores.length)
    .sort((a, b) => String(a.schedule.date || '').localeCompare(String(b.schedule.date || '')) || String(b.schedule.createdAt || '').localeCompare(String(a.schedule.createdAt || '')));
}

function renderPendingMandatoryInventoryAdmin() {
  const groups = getMandatoryInventoryPendingGroups(appState);
  const totalPending = groups.reduce((acc, group) => acc + group.pendingStores.length, 0);

  return `
    <div class="card mandatory-pending-card">
      <div class="section-header">
        <div>
          <h3>Inventários pendentes</h3>
          <p>Lojas que ainda não realizaram o inventário obrigatório solicitado.</p>
        </div>
        <div class="badge-count">${totalPending}</div>
      </div>
      ${groups.length ? `
        <div class="mandatory-pending-list">
          ${groups.map((group) => {
            const schedule = group.schedule;
            const total = getMandatoryInventoryStoreIds(schedule).length;
            const done = Array.isArray(schedule.completedStoreIds) ? schedule.completedStoreIds.length : 0;
            const canceled = Array.isArray(schedule.canceledStoreIds) ? schedule.canceledStoreIds.length : 0;
            const scopeLabel = schedule.scope === 'network' ? `Rede ${schedule.network || '-'}` : schedule.scope === 'store' ? 'Loja específica' : 'Todas as lojas';
            return `
              <details class="mandatory-pending-group">
                <summary>
                  <span><strong>${formatDateBR(schedule.date)}</strong> • ${escapeHtml(scopeLabel)}</span>
                  <small>${group.pendingStores.length} pendente(s) de ${total} loja(s) • ${done} concluída(s) • ${canceled} cancelada(s)</small>
                </summary>
                <div class="table-wrap compact-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Loja pendente</th>
                        <th>Rede</th>
                        <th>Rota</th>
                        <th>Responsável</th>
                        <th>Ação</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${group.pendingStores.map((store) => {
                        const routeId = getEffectiveRoute(store.id, schedule.date);
                        const route = getRouteById(routeId);
                        const driver = getUserById(route?.driverId);
                        const promoter = storeRequiresPromoter(store) ? getUserById(store.promoterId) : null;
                        const responsible = storeRequiresPromoter(store) ? (promoter?.name || 'Promotor não vinculado') : (driver?.name || 'Motorista da rota');
                        return `
                          <tr>
                            <td><strong>${escapeHtml(store.name)}</strong></td>
                            <td>${escapeHtml(store.network || store.rede || '-')}</td>
                            <td>${escapeHtml(route?.name || '-')}</td>
                            <td>${escapeHtml(responsible)}</td>
                            <td>
                              <button type="button" class="btn btn-danger btn-cancel-mandatory-pending" data-schedule-id="${schedule.id}" data-store-id="${store.id}">Cancelar pendência</button>
                            </td>
                          </tr>
                        `;
                      }).join('')}
                    </tbody>
                  </table>
                </div>
              </details>
            `;
          }).join('')}
        </div>
      ` : `<div class="empty">Nenhum inventário obrigatório pendente no momento.</div>`}
    </div>
  `;
}

function renderInventario() {
  const isAdmin = currentUser.role === 'admin';
  const history = appState.movements.inventories || [];
  const inventoryDivergences = appState.divergences.filter((item) => item.type === 'inventario_cd' || item.type === 'inventario_loja');

  if (!isAdmin) {
    const visibleStores = currentUser.role === 'promoter'
      ? [getStoreById(currentUser.storeId)].filter(Boolean)
      : getVisibleStores(appState, currentUser, todayStr());
    const firstStore = visibleStores[0] || null;
    const currentQty = firstStore ? getStoreStock(firstStore.id) : emptyQty();
    const userHistory = history
      .filter((item) => currentUser.role === 'promoter' ? item.storeId === currentUser.storeId : visibleStores.some((store) => store.id === item.storeId))
      .slice(0, 6);

    return `
      <div class="stack">
        ${renderMandatoryInventoryNotice(todayStr())}
        <div class="card">
          <div class="page-header">
            <div>
              <h3>Inventário da loja</h3>
            </div>
            <div id="inventario-promotor-current" class="helper-card small">
              <strong>${firstStore?.name || 'Loja vinculada'}</strong><br>
              Saldo atual no sistema: <strong>${sumQty(currentQty)}</strong> caixas
            </div>
          </div>

          ${visibleStores.length ? `
            <form id="form-inventario-promotor" class="stack">
              ${currentUser.role === 'promoter' ? `<input type="hidden" name="storeId" value="${currentUser.storeId || ''}" />` : `
                <label>Loja
                  <select name="storeId" id="inventario-promotor-store" required>
                    ${visibleStores.map((store) => `<option value="${store.id}">${store.name}</option>`).join('')}
                  </select>
                </label>
              `}
              <label>Data do inventário
                <input type="text" class="locked-date-input" value="${formatDateBR(todayStr())}" readonly aria-readonly="true" />
                <input type="hidden" name="date" value="${todayStr()}" />
              </label>
              ${qtyInputs('inventario-promotor', currentQty)}
              <label>Observação
                <textarea name="notes" placeholder="Exemplo: contagem física realizada no fechamento da loja."></textarea>
              </label>
              <div class="form-actions">
                <button type="submit" class="btn btn-primary">Salvar inventário da loja</button>
              </div>
            </form>
          ` : `<div class="empty">Nenhuma loja vinculada ao seu acesso para inventário.</div>`}
        </div>

        <div class="card">
          <div class="section-header">
            <div>
              <h3>Últimos inventários</h3>
            </div>
          </div>
          ${userHistory.length ? `
            <div class="list">
              ${userHistory.map((item) => `
                <div class="list-item">
                  <div class="list-item-head">
                    <strong>${formatDateBR(item.date)} • ${getStoreById(item.storeId)?.name || 'Loja'} • ${sumQty(item.countedQty)} caixas</strong>
                    ${item.hasDivergence ? statusTag('warn') : statusTag('ok')}
                  </div>
                  <small class="muted">Lançado por ${item.createdBy} em ${formatDateTimeBR(item.createdAt)}</small>
                </div>
              `).join('')}
            </div>
          ` : `<div class="empty">Nenhum inventário lançado ainda.</div>`}
        </div>
      </div>
    `;
  }

  const mandatoryHistory = (appState.mandatoryInventories || [])
    .slice()
    .sort((a, b) => String(b.createdAt || b.date || '').localeCompare(String(a.createdAt || a.date || '')))
    .slice(0, 12);
  const pendingMandatory = (appState.mandatoryInventories || [])
    .filter((item) => item.status !== 'cancelada')
    .filter((item) => getMandatoryInventoryStoreIds(item).some((storeId) => isMandatoryInventoryPendingForStore(item, storeId)))
    .filter((item) => item.status !== 'concluida');

  return `
    <div class="stack">
      ${renderMandatoryInventoryNotice(todayStr())}
      <div class="card">
        <div class="section-header">
          <div>
            <h3>Programar inventário obrigatório em loja</h3>
            <p>O usuário verá o aviso na data programada até concluir o inventário.</p>
          </div>
          <div class="badge-count">${pendingMandatory.length}</div>
        </div>
        <form id="form-programar-inventario" class="stack">
          <div class="form-grid-3">
            <label>Data programada
              <input type="date" name="date" value="${todayStr()}" min="${todayStr()}" required />
            </label>
            <label>Abrangência
              <select name="scope" id="mandatory-inventory-scope">
                <option value="all">Todas as lojas</option>
                <option value="network">Por rede</option>
                <option value="store">Loja específica</option>
              </select>
            </label>
            <label>Rede
              <select name="network" id="mandatory-inventory-network">
                <option value="">Selecione</option>
                ${uniqueNetworks().map((network) => `<option value="${escapeHtml(network)}">${escapeHtml(network)}</option>`).join('')}
              </select>
            </label>
          </div>
          <div class="form-grid">
            <label>Loja específica
              <select name="storeId" id="mandatory-inventory-store">
                <option value="">Selecione</option>
                ${getActiveStores().sort((a, b) => getStoreOptionLabel(a).localeCompare(getStoreOptionLabel(b), 'pt-BR')).map((store) => `<option value="${store.id}">${escapeHtml(getStoreOptionLabel(store))}</option>`).join('')}
              </select>
            </label>
            <label>Observação
              <input type="text" name="notes" placeholder="Ex.: inventário geral obrigatório" />
            </label>
          </div>
          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Programar inventário</button>
          </div>
        </form>
        ${mandatoryHistory.length ? `
          <div class="table-wrap compact-table mandatory-inventory-history">
            <table>
              <thead><tr><th>Data</th><th>Escopo</th><th>Lojas</th><th>Concluídas</th><th>Canceladas</th><th>Status</th></tr></thead>
              <tbody>
                ${mandatoryHistory.map((item) => {
                  const total = getMandatoryInventoryStoreIds(item).length;
                  const done = Array.isArray(item.completedStoreIds) ? item.completedStoreIds.length : 0;
                  const canceled = Array.isArray(item.canceledStoreIds) ? item.canceledStoreIds.length : 0;
                  const pending = getMandatoryInventoryStoreIds(item).filter((storeId) => isMandatoryInventoryPendingForStore(item, storeId)).length;
                  const tag = item.status === 'cancelada' ? '<span class="tag danger">Cancelada</span>' : pending > 0 ? statusTag('warn') : statusTag('ok');
                  return `<tr><td>${formatDateBR(item.date)}</td><td>${item.scope === 'network' ? item.network : item.scope === 'store' ? 'Loja específica' : 'Todas as lojas'}</td><td>${total}</td><td>${done}</td><td>${canceled}</td><td>${tag}</td></tr>`;
                }).join('')}
              </tbody>
            </table>
          </div>
        ` : ''}
      </div>

      ${renderPendingMandatoryInventoryAdmin()}

      <div class="grid-2">
        <div class="card">
          <div class="page-header">
            <div>
              <h3>Inventário do CD</h3>
            </div>
            <div class="helper-card small">
              Saldo atual no CD: <strong>${sumQty(appState.cdStock)}</strong> caixas<br>
              ${BOX_TYPES.map((item) => `${item.label}: <strong>${safeInt(appState.cdStock[item.key])}</strong>`).join(' • ')}
            </div>
          </div>

          <form id="form-inventario-cd" class="stack">
            <label>Data do inventário
              <input type="text" class="locked-date-input" value="${formatDateBR(todayStr())}" readonly aria-readonly="true" />
              <input type="hidden" name="date" value="${todayStr()}" />
            </label>
            ${qtyInputs('inventario-cd', appState.cdStock)}
            <label>Observação / motivo do ajuste
              <textarea name="notes" placeholder="Exemplo: inventário físico semanal no CD."></textarea>
            </label>
            <div class="form-actions">
              <button type="submit" class="btn btn-primary">Aplicar inventário do CD</button>
            </div>
          </form>
        </div>

        <div class="card">
          <div class="page-header">
            <div>
              <h3>Inventário por loja</h3>
            </div>
          </div>

          <form id="form-inventario-loja" class="stack">
            <div class="form-grid">
              <label>Data do inventário
                <input type="text" class="locked-date-input" value="${formatDateBR(todayStr())}" readonly aria-readonly="true" />
                <input type="hidden" name="date" value="${todayStr()}" />
              </label>
              <label>Rede
                <select name="network" id="inventario-store-network">
                  <option value="">Todas as redes</option>
                  ${buildNetworkOptions()}
                </select>
              </label>
              <label>Loja
                <select name="storeId" id="inventario-store" required>
                  <option value="">Selecione</option>
                  ${getActiveStores().sort((a, b) => getStoreOptionLabel(a).localeCompare(getStoreOptionLabel(b), 'pt-BR')).map((store) => `<option value="${store.id}">${escapeHtml(getStoreOptionLabel(store))}</option>`).join('')}
                </select>
              </label>
            </div>
            <div id="inventario-store-current" class="helper-card small">Selecione uma loja para carregar o saldo atual do sistema.</div>
            ${qtyInputs('inventario-loja')}
            <label>Observação / motivo do ajuste
              <textarea name="notes" placeholder="Exemplo: inventário físico realizado pelo promotor/motorista."></textarea>
            </label>
            <div class="form-actions">
              <button type="submit" class="btn btn-primary">Aplicar inventário da loja</button>
            </div>
          </form>
        </div>
      </div>

      ${currentUser.role === 'admin' ? renderBulkStoreInventoryCard() : ''}

      <div class="grid-2">
        <div class="card">
          <div class="section-header">
            <div>
              <h3>Divergências de inventário</h3>
            </div>
            <div class="badge-count">${inventoryDivergences.filter((item) => item.status === 'aberta').length}</div>
          </div>
          ${inventoryDivergences.length ? `
            <div class="list">
              ${inventoryDivergences.slice(0, 8).map((item) => `
                <div class="list-item">
                  <div class="list-item-head">
                    <strong>${getDivergenceTitle(item)}</strong>
                    ${item.status === 'aberta' ? statusTag('danger') : statusTag('ok')}
                  </div>
                  <p>${describeDivergence(item)}</p>
                  <small class="muted">${item.justification || 'Sem observação.'}</small>
                  <div class="table-wrap">
                    <table>
                      <thead><tr><th>Caixa</th><th>Sistema</th><th>Físico</th><th>Diferença</th></tr></thead>
                      <tbody>${renderInventoryDiffRows(item.expectedQty || emptyQty(), item.actualQty || emptyQty())}</tbody>
                    </table>
                  </div>
                  ${item.status === 'aberta' ? `
                    <div class="inline-actions">
                      <button class="btn btn-secondary btn-resolve-divergence" data-id="${item.id}">Aprovar pelo ADM</button>
                    </div>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          ` : `<div class="empty">Nenhuma divergência de inventário registrada.</div>`}
        </div>

        <div class="card">
          <div class="section-header">
            <div>
              <h3>Histórico de inventários</h3>
            </div>
          </div>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Local</th>
                  <th>Antes</th>
                  <th>Físico</th>
                  <th>Diferença</th>
                  <th>Detalhe do que mudou</th>
                  <th>Usuário</th>
                </tr>
              </thead>
              <tbody>
                ${history.length ? history.slice(0, 20).map((item) => `
                  <tr>
                    <td>${formatDateBR(item.date)}</td>
                    <td>${item.location === 'cd' ? 'CD' : getStoreById(item.storeId)?.name || '-'}</td>
                    <td>${sumQty(item.previousQty)}</td>
                    <td><strong>${sumQty(item.countedQty)}</strong></td>
                    <td>${sumSignedQty(item.diffQty) > 0 ? '+' : ''}${sumSignedQty(item.diffQty)}</td>
                    <td><small>${renderQtyChangeSummary(item.previousQty, item.countedQty, item.diffQty)}${item.batchId ? '<br><strong>Inventário em massa</strong>' : ''}${item.notes ? `<br>${escapeHtml(item.notes)}` : ''}</small></td>
                    <td>${item.createdBy || '-'}</td>
                  </tr>
                `).join('') : `<tr><td colspan="7" class="center muted">Nenhum inventário lançado.</td></tr>`}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `;
}


function renderBulkStoreInventoryCard() {
  if (currentUser.role !== 'admin') return '';
  return `
    <div class="card bulk-inventory-card">
      <div class="page-header">
        <div>
          <h3>Inventário em massa por rede</h3>
          <p class="muted">Selecione uma rede para carregar todas as lojas com o saldo atual. Ajuste manualmente apenas o que precisar corrigir.</p>
        </div>
        <div class="helper-card small">Histórico salvo com antes, depois, diferença, usuário e motivo.</div>
      </div>
      <form id="form-inventario-massa" class="stack">
        <div class="form-grid-3">
          <label>Data do inventário
            <input type="text" class="locked-date-input" value="${formatDateBR(todayStr())}" readonly aria-readonly="true" />
            <input type="hidden" name="date" value="${todayStr()}" />
          </label>
          <label>Rede
            <select name="network" id="bulk-inventory-network">
              <option value="">Todas as redes</option>
              ${buildNetworkOptions()}
            </select>
          </label>
          <label>Busca rápida
            <input type="text" id="bulk-inventory-search" placeholder="Digite loja, rota ou rede" />
          </label>
        </div>
        <div class="form-actions">
          <button type="button" class="btn btn-secondary" id="btn-bulk-inventory-load">Carregar lojas</button>
          <button type="button" class="btn btn-ghost" id="btn-bulk-inventory-select-changed">Selecionar alteradas</button>
          <button type="button" class="btn btn-ghost" id="btn-bulk-inventory-clear-selection">Limpar seleção</button>
        </div>
        <div id="bulk-inventory-summary" class="helper-card small">Selecione uma rede e clique em carregar lojas.</div>
        <div class="table-wrap bulk-inventory-table-wrap">
          <table class="bulk-inventory-table">
            <thead>
              <tr>
                <th><input type="checkbox" id="bulk-inventory-select-all" title="Selecionar todas as lojas exibidas" /></th>
                <th>Loja</th>
                <th>Rede / rota</th>
                <th>Atual folhagens</th>
                <th>Atual bandejas</th>
                <th>Corrigir folhagens</th>
                <th>Corrigir bandejas</th>
                <th>Diferença</th>
              </tr>
            </thead>
            <tbody id="bulk-inventory-rows">
              <tr><td colspan="8" class="center muted">Nenhuma loja carregada ainda.</td></tr>
            </tbody>
          </table>
        </div>
        <label>Observação / motivo do ajuste em massa
          <textarea name="notes" required placeholder="Exemplo: inventário físico geral realizado pela equipe e regularizado pelo ADM."></textarea>
        </label>
        <div class="form-actions">
          <button type="submit" class="btn btn-primary">Aplicar inventário nas lojas selecionadas</button>
        </div>
      </form>
    </div>
  `;
}

function renderDivergencias() {
  const visibleDivergences = getVisibleDivergences(appState, currentUser);
  const ownerFilter = viewFilters.divergenciaOwner || '';
  const typeFilter = viewFilters.divergenciaType || '';
  const dateFilter = viewFilters.divergenciaDate || '';
  const searchFilter = normalizeText(viewFilters.divergenciaSearch || '');
  const ownerOptions = getDivergenceOwnerOptions();
  const typeOptions = [...new Set(visibleDivergences.map((item) => item.type).filter(Boolean))]
    .sort((a, b) => getDivergenceTitle({ type: a }).localeCompare(getDivergenceTitle({ type: b }), 'pt-BR'));

  const matchesFilters = (item) => {
    const owner = getDivergenceOwnerInfo(item);
    if (ownerFilter && owner.ownerKey !== ownerFilter) return false;
    if (typeFilter && item.type !== typeFilter) return false;
    if (dateFilter && item.date !== dateFilter) return false;
    if (searchFilter) {
      const store = getStoreById(item.storeId);
      const route = getRouteById(item.routeId);
      const driver = getUserById(item.driverId);
      const haystack = normalizeText(`${getDivergenceTitle(item)} ${describeDivergence(item)} ${store?.name || ''} ${route?.name || ''} ${driver?.name || ''} ${owner.ownerName} ${owner.ownerArea}`);
      if (!haystack.includes(searchFilter)) return false;
    }
    return true;
  };

  const filtered = visibleDivergences.filter(matchesFilters);
  const open = filtered.filter((item) => item.status === 'aberta');
  const resolved = filtered.filter((item) => item.status === 'resolvida');
  const openTotal = visibleDivergences.filter((item) => item.status === 'aberta').length;
  const OPEN_RENDER_LIMIT = 80;
  const RESOLVED_RENDER_LIMIT = 20;
  const openPage = open.slice(0, OPEN_RENDER_LIMIT);
  const resolvedPage = resolved.slice(0, RESOLVED_RENDER_LIMIT);

  return `
    <div class="stack">
      <div class="card">
        <div class="page-header">
          <div>
            <h3>Central de regularização</h3>
            <p class="muted">Filtre, selecione e regularize divergências em lote sem apagar o histórico.</p>
          </div>
          <div class="helper-card small">Abertas no sistema: <strong>${openTotal}</strong><br>No filtro: <strong>${open.length}</strong><br>Renderizadas agora: <strong>${openPage.length}</strong></div>
        </div>
        <form id="form-divergence-filter" class="form-grid-3">
          <label>Responsável
            <select name="owner">
              <option value="">Todos os responsáveis</option>
              ${ownerOptions.map((owner) => `<option value="${owner.key}" ${owner.key === ownerFilter ? 'selected' : ''}>${escapeHtml(owner.name)} — ${escapeHtml(owner.area)}</option>`).join('')}
            </select>
          </label>
          <label>Tipo de erro
            <select name="type">
              <option value="">Todos os tipos</option>
              ${typeOptions.map((type) => `<option value="${escapeHtml(type)}" ${type === typeFilter ? 'selected' : ''}>${escapeHtml(getDivergenceTitle({ type }))}</option>`).join('')}
            </select>
          </label>
          <label>Data
            <input type="date" name="date" value="${escapeHtml(dateFilter)}" />
          </label>
          <label>Buscar loja, rota ou motorista
            <input type="text" name="search" value="${escapeHtml(viewFilters.divergenciaSearch || '')}" placeholder="Ex.: Stanio, Costa, Goiânia" />
          </label>
          <div class="form-actions align-end">
            <button type="submit" class="btn btn-secondary">Aplicar filtros</button>
            <button type="button" class="btn btn-ghost" id="btn-clear-divergence-filter">Limpar filtros</button>
          </div>
        </form>
      </div>

      ${currentUser.role === 'admin' ? `
        <form id="form-bulk-divergences" class="card stack">
          <div class="section-header">
            <div>
              <h3>Ação em lote</h3>
              <p class="muted">Use para limpar divergências antigas por grupo, sempre com motivo registrado na auditoria.</p>
            </div>
            <label class="checkbox-inline"><input type="checkbox" id="select-all-divergences" /> Selecionar exibidas</label>
          </div>
          <div class="form-grid-3">
            <label>Ação
              <select name="action" required>
                <option value="regularizacao_administrativa">Resolver como regularização administrativa</option>
                <option value="baixa_administrativa">Resolver como baixa administrativa</option>
                <option value="regularizada_inventario">Marcar como regularizada por inventário</option>
                <option value="duplicada">Marcar como duplicada</option>
                <option value="erro_data_lancamento">Resolver como erro de data de lançamento</option>
                <option value="justificar">Apenas justificar selecionadas</option>
                <option value="encaminhar_responsavel">Encaminhar para responsável</option>
              </select>
            </label>
            <label>Motivo obrigatório
              <input type="text" name="reason" required placeholder="Ex.: Regularização administrativa de divergências antigas conferidas pela gestão." />
            </label>
            <div class="form-actions align-end">
              <button type="submit" class="btn btn-primary">Aplicar nas selecionadas</button>
            </div>
          </div>
        </form>
      ` : ''}

      <div class="grid-2">
        <div class="card">
          <div class="section-header">
            <div>
              <h3>Divergências em aberto</h3>
            </div>
            <div class="badge-count">${open.length}</div>
          </div>
          ${open.length ? `
            <div class="list">
              ${openPage.map((item) => {
                const owner = getDivergenceOwnerInfo(item);
                return `
                  <div class="list-item divergence-row" data-owner="${escapeHtml(owner.ownerKey)}" data-type="${escapeHtml(item.type || '')}">
                    <div class="list-item-head">
                      <div class="checkbox-title">
                        ${currentUser.role === 'admin' ? `<input type="checkbox" class="bulk-divergence-checkbox" name="divergenceIds" value="${item.id}" form="form-bulk-divergences" />` : ''}
                        <strong>${getDivergenceTitle(item)}</strong>
                      </div>
                      ${needsResponsibleExplanation(item) ? getDivergenceExplanationStatusTag(item) : statusTag('danger')}
                    </div>
                    <p>${describeDivergence(item)}</p>
                    <small class="muted">${getDivergenceRealErrorText(item)}</small>
                    <small class="muted">Dono da regularização: <strong>${escapeHtml(owner.ownerName)} — ${escapeHtml(owner.ownerArea)}</strong></small>
                    ${item.requiresResponsibleExplanation ? `<small class="muted">Responsável pela justificativa operacional: <strong>${getDivergenceResponsible(item)?.name || 'Não definido'}</strong></small>` : ''}
                    <div class="muted">Criada em ${formatDateTimeBR(item.createdAt)}</div>
                    <div class="inline-actions">
                      <button class="btn btn-primary btn-view-divergence" data-id="${item.id}" type="button">Ver erro detalhado</button>
                      ${canCurrentUserExplainDivergence(item) && !item.responsibleExplanation ? `<button class="btn btn-secondary btn-explain-divergence" data-id="${item.id}" type="button">Justificar divergência</button>` : ''}
                      ${currentUser.role === 'admin' ? `<button class="btn btn-secondary btn-resolve-divergence" data-id="${item.id}" type="button">Aprovar pelo ADM</button>` : ''}
                    </div>
                  </div>
                `;
              }).join('')}
              ${open.length > openPage.length ? `<div class="helper-card small">Mostrando as primeiras ${openPage.length} de ${open.length} divergências em aberto. Use os filtros de responsável, tipo, data ou busca para refinar e carregar menos registros.</div>` : ''}
            </div>
          ` : `<div class="empty">Sem divergências em aberto para este filtro.</div>`}
        </div>

        <div class="card">
          <div class="section-header">
            <div>
              <h3>Histórico resolvido</h3>
            </div>
          </div>
          ${resolved.length ? `
            <div class="list">
              ${resolvedPage.map((item) => `
                <div class="list-item">
                  <div class="list-item-head">
                    <strong>${getDivergenceTitle(item)}</strong>
                    ${statusTag('ok')}
                  </div>
                  <p>${describeDivergence(item)}</p>
                  <small class="muted">Resolvida por ${item.resolvedBy || '-'} em ${formatDateTimeBR(item.resolvedAt)}</small>
                  ${item.resolvedInBulk ? `<small class="muted">Regularizada em lote: ${escapeHtml(item.resolution || '-')}</small>` : ''}
                  <div class="inline-actions">
                    <button class="btn btn-ghost btn-view-divergence" data-id="${item.id}" type="button">Ver detalhes</button>
                  </div>
                </div>
              `).join('')}
              ${resolved.length > resolvedPage.length ? `<div class="helper-card small">Mostrando ${resolvedPage.length} de ${resolved.length} resolvidas. Use os filtros para encontrar registros específicos.</div>` : ''}
            </div>
          ` : `<div class="empty">Nenhuma divergência resolvida neste filtro.</div>`}
        </div>
      </div>
    </div>
  `;
}

function renderAlertas() {
  const alerts = getAllAlerts();
  return `
    <div class="stack">
      <div class="card">
        <div class="page-header">
          <div>
            <h3>Alertas automáticos</h3>
          </div>
          <div class="helper-card small">Total de alertas: <strong>${alerts.length}</strong></div>
        </div>
        ${alerts.length ? `
          <div class="list">
            ${alerts.map((alert) => `
              <div class="list-item">
                <div class="list-item-head">
                  <strong>${alert.title}</strong>
                  ${statusTag(alert.priority === 'critical' ? 'danger' : 'warn')}
                </div>
                <p>${alert.description}</p>
                <small class="muted">${alert.detail}</small>
              </div>
            `).join('')}
          </div>
        ` : `<div class="empty">Nenhum alerta ativo.</div>`}
      </div>
    </div>
  `;
}


function renderFechamento() {
  const date = todayStr();
  const summary = getDayOperationSummary(date);
  const pendencies = getOperationalPendencies(date);
  const rows = getStoreDayRows(date);
  const closing = getClosingForDate(date);
  return `
    <div class="stack">
      <div class="card">
        <div class="page-header">
          <div>
            <h3>Fechamento diário da operação</h3>
          </div>
          <div class="helper-card small">
            ${closing ? `<strong>Último fechamento:</strong><br>${formatDateTimeBR(closing.closedAt)} por ${closing.closedBy}` : '<strong>Status:</strong><br>Dia ainda não fechado.'}
          </div>
        </div>
        <form id="form-fechamento-dia" class="stack">
          <div class="form-grid">
            <label>Data do fechamento
              <input type="date" name="date" value="${date}" required />
            </label>
            <label>Observação do fechamento
              <input type="text" name="notes" placeholder="Ex.: operação conferida / pendências cobradas / divergências em apuração" />
            </label>
          </div>
          <div class="stats-inline">
            <div class="stat-pill"><span>Saíram do CD</span><strong>${summary.sent}</strong></div>
            <div class="stat-pill"><span>Validadas por motorista</span><strong>${summary.driverValidated}</strong></div>
            <div class="stat-pill"><span>Recebidas em loja</span><strong>${summary.received}</strong></div>
            <div class="stat-pill"><span>Recolhidas</span><strong>${summary.pickedUp}</strong></div>
            <div class="stat-pill"><span>Retornaram ao CD</span><strong>${summary.returned}</strong></div>
            <div class="stat-pill"><span>Pendências</span><strong>${pendencies.length}</strong></div>
          </div>
          <div class="alert-strip ${pendencies.length ? 'warning' : 'info'}">
            <div>
              <strong>${pendencies.length ? 'Há pendências antes do fechamento' : 'Sem pendências operacionais detectadas'}</strong>
              <p class="muted">O fechamento grava um retrato do dia com auditoria. Pendências continuam visíveis até serem resolvidas.</p>
            </div>
          </div>
          ${['admin','cd'].includes(currentUser.role) ? `<button type="submit" class="btn btn-primary">Registrar fechamento do dia</button>` : ''}
        </form>
      </div>

      <div class="card">
        <div class="section-header">
          <div>
            <h3>Status por loja no dia</h3>
          </div>
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Loja</th><th>Rede</th><th>Rota</th><th>Responsável</th><th>Total CD</th><th>Status</th></tr></thead>
            <tbody>
              ${rows.length ? rows.map((row) => `
                <tr>
                  <td>${row.store?.name || '-'}</td>
                  <td>${row.store?.network || '-'}</td>
                  <td>${row.route?.name || '-'}</td>
                  <td>${row.driver?.name || '-'}</td>
                  <td>${sumQty(row.outbound.qty)}</td>
                  <td>${row.tone === 'ok' ? '<span class="tag ok">' : row.tone === 'danger' ? '<span class="tag danger">' : '<span class="tag warn">'}${row.status}</span></td>
                </tr>
              `).join('') : `<tr><td colspan="6" class="center muted">Nenhuma saída registrada para hoje.</td></tr>`}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}


function renderPendencias() {
  const date = todayStr();
  const pendencies = getVisiblePendenciesForCurrentUser(date);
  const PENDING_RENDER_LIMIT_PER_OWNER = 60;
  const byResponsible = {};
  pendencies.forEach((item) => {
    const key = item.ownerName || item.responsibleName || item.responsibleRole || 'Responsável';
    byResponsible[key] = byResponsible[key] || { ownerArea: item.ownerArea || '', ownerReason: item.ownerReason || '', items: [] };
    byResponsible[key].items.push(item);
  });
  return `
    <div class="stack">
      <div class="card">
        <div class="page-header">
          <div>
            <h3>Pendências por responsável</h3>
            <p class="muted">Cada pendência mostra o dono de gestão responsável por cobrar e regularizar. A tela abre leve: grupos muito grandes exibem os primeiros ${PENDING_RENDER_LIMIT_PER_OWNER} itens.</p>
          </div>
          <div class="helper-card small">Total visível para seu acesso: <strong>${pendencies.length}</strong></div>
        </div>
        ${pendencies.length ? Object.entries(byResponsible).map(([name, group]) => {
          const visibleItems = group.items.slice(0, PENDING_RENDER_LIMIT_PER_OWNER);
          return `
          <div class="responsible-group">
            <div class="list-item-head">
              <div>
                <h4>${escapeHtml(name)}${group.ownerArea ? ` — ${escapeHtml(group.ownerArea)}` : ''}</h4>
                ${group.ownerReason ? `<small class="muted">${escapeHtml(group.ownerReason)}</small>` : ''}
              </div>
              <span class="badge-count">${group.items.length}</span>
            </div>
            <div class="list">
              ${visibleItems.map((item) => `
                <div class="list-item">
                  <div class="list-item-head">
                    <strong>${escapeHtml(item.area)}</strong>
                    ${item.priority === 'danger' ? statusTag('danger') : item.priority === 'info' ? statusTag('info') : statusTag('warn')}
                  </div>
                  <p>${escapeHtml(item.description)}</p>
                  <small class="muted">Operacional: ${escapeHtml(item.responsibleName || '-')} • Loja: ${escapeHtml(getStoreById(item.storeId)?.name || '-')} • Rota: ${escapeHtml(getRouteById(item.routeId)?.name || '-')} ${item.date ? `• Data: ${formatDateBR(item.date)}` : ''}</small>
                </div>
              `).join('')}
              ${group.items.length > visibleItems.length ? `<div class="helper-card small">Mostrando ${visibleItems.length} de ${group.items.length} pendências deste responsável. Use Divergências/Retornos/Inventário para regularizar em lote por data, rota, loja ou tipo.</div>` : ''}
            </div>
          </div>
        `}).join('') : `<div class="empty">Nenhuma pendência para o seu acesso nesta data.</div>`}
      </div>
    </div>
  `;
}

function renderEstornos() {
  if (currentUser.role !== 'admin') return `<div class="empty">Acesso restrito ao ADM.</div>`;
  const movements = [
    ...appState.movements.outbounds.map((item) => ({ type: 'outbound', item, date: item.date, storeId: item.storeId, routeId: item.routeId, total: sumQty(item.qty) })),
    ...appState.movements.driverDeliveries.map((item) => ({ type: 'driverDelivery', item, date: item.date, storeId: item.storeId, routeId: item.routeId, total: safeInt(item.totalDelivered) })),
    ...appState.movements.receipts.map((item) => ({ type: 'receipt', item, date: item.date, storeId: item.storeId, routeId: getStoreById(item.storeId)?.defaultRouteId, total: sumQty(item.qty) })),
    ...appState.movements.pickups.map((item) => ({ type: 'pickup', item, date: item.date, storeId: item.storeId, routeId: item.routeId, total: item.totalOnly ? safeInt(item.totalQty) : sumQty(item.qty) })),
    ...(appState.movements.occupiedBoxes || []).map((item) => ({ type: 'occupiedBox', item, date: item.date, storeId: item.storeId, routeId: item.routeId, total: safeInt(item.totalQty) })),
    ...(appState.movements.releasedBoxes || []).map((item) => ({ type: 'releasedBox', item, date: item.date, storeId: item.storeId, routeId: item.routeId, total: safeInt(item.freeQty) })),
    ...appState.movements.returns.map((item) => ({ type: 'return', item, date: item.date, storeId: null, routeId: item.routeId, total: sumQty(item.qty) })),
    ...(appState.movements.goianiaLoads || []).map((item) => ({ type: 'goianiaLoad', item, date: item.date, storeId: null, routeId: GOIANIA_TRUNK_ROUTE_ID, total: safeInt(item.totalLoaded) })),
    ...(appState.movements.goianiaTransfers || []).map((item) => ({ type: 'goianiaTransfer', item, date: item.date, storeId: item.storeId, routeId: item.routeId, total: sumQty(item.qty) })),
    ...appState.movements.inventories.map((item) => ({ type: 'inventory', item, date: item.date, storeId: item.storeId, routeId: item.storeId ? getEffectiveRoute(item.storeId, item.date) : null, total: sumQty(item.countedQty) })),
  ].sort((a, b) => (b.item.createdAt || b.date || '').localeCompare(a.item.createdAt || a.date || '')).slice(0, 80);

  return `
    <div class="stack">
      <div class="card">
        <div class="page-header">
          <div>
            <h3>Estorno com auditoria</h3>
          </div>
          <div class="helper-card small"><strong>Atenção:</strong> para saída com recebimento/validação, estorne primeiro os movimentos vinculados.</div>
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Data</th><th>Tipo</th><th>Loja/Rota</th><th>Total</th><th>Status</th><th>Ação</th></tr></thead>
            <tbody>
              ${movements.length ? movements.map((row) => `
                <tr>
                  <td>${formatDateBR(row.date)}</td>
                  <td>${getMovementKindLabel(row.type)}</td>
                  <td>${getStoreById(row.storeId)?.name || getRouteById(row.routeId)?.name || '-'}</td>
                  <td>${row.total}</td>
                  <td>${row.item.canceledAt || row.item.status === 'estornado' ? '<span class="tag danger">Estornado</span>' : '<span class="tag ok">Ativo</span>'}</td>
                  <td>${row.item.canceledAt || row.item.status === 'estornado' ? `<small class="muted">${row.item.cancelReason || '-'}</small>` : `<button class="btn btn-danger btn-cancel-movement" data-type="${row.type}" data-id="${row.item.id}">Estornar</button>`}</td>
                </tr>
              `).join('') : `<tr><td colspan="6" class="center muted">Nenhum lançamento encontrado.</td></tr>`}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}


function getRouteStoreGroups(routeId) {
  const normalStores = appState.stores
    .filter((store) => store.defaultRouteId === routeId)
    .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
  const sundayStores = appState.stores
    .filter((store) => store.sundayRouteId === routeId)
    .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
  return { normalStores, sundayStores };
}

function routeStoreChips(stores) {
  if (!stores.length) return `<div class="empty compact-empty">Nenhuma loja vinculada.</div>`;
  return `
    <div class="route-store-list">
      ${stores.map((store) => `<span class="store-chip">${store.name}<small>${store.network || '-'}</small></span>`).join('')}
    </div>
  `;
}

function renderDriverRouteMapHtml(driverId) {
  if (!driverId) {
    return `<div class="empty">Selecione um motorista para visualizar as rotas e lojas vinculadas a ele.</div>`;
  }

  const driver = getUserById(driverId);
  const driverRoutes = appState.routes
    .filter((route) => route.driverId === driverId)
    .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));

  if (!driverRoutes.length) {
    return `
      <div class="empty">
        Nenhuma rota está vinculada ao motorista <strong>${driver?.name || '-'}</strong>.
      </div>
    `;
  }

  const routeCards = driverRoutes.map((route) => {
    const { normalStores, sundayStores } = getRouteStoreGroups(route.id);
    return `
      <div class="route-map-card">
        <div class="route-map-card-head">
          <div>
            <strong>${route.name}</strong>
            <small>Motorista atual: ${driver?.name || '-'}</small>
          </div>
          <span class="tag info">${normalStores.length} lojas</span>
        </div>
        <div class="route-map-sections">
          <div>
            <h5>Rota normal/fixa</h5>
            ${routeStoreChips(normalStores)}
          </div>
          <div>
            <h5>Rota de domingo</h5>
            ${routeStoreChips(sundayStores)}
          </div>
        </div>
      </div>
    `;
  }).join('');

  const normalTotal = driverRoutes.reduce((acc, route) => acc + getRouteStoreGroups(route.id).normalStores.length, 0);
  const sundayTotal = driverRoutes.reduce((acc, route) => acc + getRouteStoreGroups(route.id).sundayStores.length, 0);

  return `
    <div class="driver-route-summary">
      <div class="stat-pill">
        <span>Motorista</span>
        <strong>${driver?.name || '-'}</strong>
      </div>
      <div class="stat-pill">
        <span>Rotas vinculadas</span>
        <strong>${driverRoutes.length}</strong>
      </div>
      <div class="stat-pill">
        <span>Lojas rota normal</span>
        <strong>${normalTotal}</strong>
      </div>
      <div class="stat-pill">
        <span>Lojas rota domingo</span>
        <strong>${sundayTotal}</strong>
      </div>
    </div>
    <div class="route-map-list">${routeCards}</div>
  `;
}

function renderRotas() {
  const today = todayStr();
  const exceptionsToday = appState.movements.routeExceptions.filter((item) => item.date === today);
  const drivers = appState.users.filter((user) => user.role === 'driver').sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));

  return `
    <div class="stack">
      <div class="card route-map-main">
        <div class="section-header">
          <div>
            <h3>Mapa atual de rotas</h3>
          </div>
          <div class="helper-card compact small">Motoristas: <strong>${drivers.length}</strong> • Rotas: <strong>${appState.routes.length}</strong> • Lojas: <strong>${getActiveStores().length}</strong></div>
        </div>

        <div class="form-grid route-map-filter">
          <label>Motorista
            <select id="mapa-rotas-motorista-select">
              <option value="">Selecione um motorista</option>
              ${drivers.map((driver) => `<option value="${driver.id}">${driver.name}</option>`).join('')}
            </select>
          </label>
        </div>

        <div id="mapa-rotas-motorista-result" class="route-map-panel">
          ${renderDriverRouteMapHtml('')}
        </div>
      </div>

      <div class="section-header route-change-title">
        <div>
          <h3>Alterações de rota</h3>
        </div>
      </div>

      <div class="grid-2">
        <div class="card">
          <div class="page-header">
            <div>
              <h3>Mudar loja de rota</h3>
            </div>
          </div>

          <form id="form-rota-padrao" class="stack">
            <div class="form-grid">
              <label>Tipo de alteração
                <select name="routeMode" required>
                  <option value="default">Rota normal/fixa</option>
                  <option value="sunday">Rota de domingo</option>
                  <option value="both">Normal e domingo</option>
                </select>
              </label>
              <label>Nova rota
                <select name="routeId" required>
                  <option value="">Selecione</option>
                  ${appState.routes.map((route) => `<option value="${route.id}">${route.name}</option>`).join('')}
                </select>
              </label>
            </div>

            <label>Buscar lojas para alterar
              <input type="search" id="rota-padrao-store-search" placeholder="Digite o nome da loja ou rede para filtrar" autocomplete="off" />
            </label>

            <div class="route-store-toolbar">
              <button type="button" id="rota-padrao-select-visible" class="btn btn-secondary">Selecionar lojas visíveis</button>
              <button type="button" id="rota-padrao-clear" class="btn btn-ghost">Limpar seleção</button>
              <span id="rota-padrao-count" class="route-store-count">0 lojas selecionadas</span>
            </div>

            <div id="rota-padrao-store-list" class="multi-store-list" role="group" aria-label="Lojas para alterar rota">
              ${getActiveStores().sort((a, b) => a.name.localeCompare(b.name, 'pt-BR')).map((store) => `
                <label class="multi-store-option" data-search="${normalizeText(`${getStoreOptionLabel(store)} ${inferStoreNetwork(store)}`)}">
                  <input type="checkbox" class="rota-padrao-store-checkbox" value="${store.id}" />
                  <span>
                    <strong>${escapeHtml(formatStoreNameForUser(store.name))}</strong>
                    <small>Rede ${escapeHtml(inferStoreNetwork(store))}, Loja ${escapeHtml(getStoreUnitName(store))} • Atual: ${getRouteById(store.defaultRouteId)?.name || '-'}</small>
                  </span>
                </label>
              `).join('')}
            </div>

            <div id="rota-padrao-info" class="helper-card small">Selecione uma ou várias lojas para ver a rota atual.</div>
            <label>Observação
              <textarea name="notes" placeholder="Exemplo: mudança definitiva de rota após ajuste operacional."></textarea>
            </label>
            <div class="form-actions">
              <button type="submit" class="btn btn-primary">Salvar rota das lojas selecionadas</button>
            </div>
          </form>
        </div>

        <div class="card">
          <div class="page-header">
            <div>
              <h3>Alterar motorista responsável pela rota</h3>
            </div>
          </div>

          <form id="form-motorista-rota" class="stack">
            <div class="form-grid">
              <label>Rota
                <select name="routeId" id="motorista-rota-select" required>
                  <option value="">Selecione</option>
                  ${appState.routes.map((route) => `<option value="${route.id}">${route.name}</option>`).join('')}
                </select>
              </label>
              <label>Novo motorista
                <select name="driverId" required>
                  <option value="">Selecione</option>
                  ${drivers.map((driver) => `<option value="${driver.id}">${driver.name}</option>`).join('')}
                </select>
              </label>
            </div>
            <div id="motorista-rota-info" class="helper-card small">Selecione uma rota para ver o motorista atual.</div>
            <label>Observação
              <textarea name="notes" placeholder="Exemplo: motorista assumiu a rota a partir desta semana."></textarea>
            </label>
            <div class="form-actions">
              <button type="submit" class="btn btn-primary">Salvar motorista da rota</button>
            </div>
          </form>
        </div>
      </div>

      <div class="grid-2">
        <div class="card">
          <div class="page-header">
            <div>
              <h3>Troca temporária de rota</h3>
            </div>
          </div>

          <form id="form-excecao-rota" class="stack">
            <div class="form-grid-3">
              <label>Data
                <input type="date" name="date" value="${today}" required />
              </label>
              <label>Rede
                <select name="network" id="excecao-rota-network">
                  <option value="">Todas as redes</option>
                  ${buildNetworkOptions()}
                </select>
              </label>
              <label>Loja
                <select name="storeId" id="excecao-rota-store" required>
                  <option value="">Selecione</option>
                  ${getActiveStores().sort((a, b) => getStoreOptionLabel(a).localeCompare(getStoreOptionLabel(b), 'pt-BR')).map((store) => `<option value="${store.id}">${escapeHtml(getStoreOptionLabel(store))}</option>`).join('')}
                </select>
              </label>
              <label>Nova rota
                <select name="newRouteId" id="nova-rota-select" required>
                  <option value="">Selecione</option>
                  ${appState.routes.map((route) => `<option value="${route.id}">${route.name}</option>`).join('')}
                </select>
              </label>
            </div>

            <label>Motorista da rota
              <select name="newDriverId" id="nova-rota-driver" required>
                <option value="">Selecione a rota</option>
              </select>
            </label>

            <label>Motivo
              <select name="reason" required>
                <option value="">Selecione</option>
                <option value="Apoio operacional">Apoio operacional</option>
                <option value="Falta de veículo">Falta de veículo</option>
                <option value="Redistribuição de carga">Redistribuição de carga</option>
                <option value="Ajuste pontual de rota">Ajuste pontual de rota</option>
              </select>
            </label>

            <label>Observação
              <textarea name="notes" placeholder="Detalhe complementar da troca de rota."></textarea>
            </label>

            <div class="form-actions">
              <button type="submit" class="btn btn-primary">Salvar exceção</button>
            </div>
          </form>
        </div>

        <div class="card">
          <div class="section-header">
            <div>
              <h3>Exceções do dia</h3>
            </div>
          </div>
          ${exceptionsToday.length ? `
            <div class="list">
              ${exceptionsToday.map((item) => `
                <div class="list-item">
                  <div class="list-item-head">
                    <strong>${getStoreById(item.storeId)?.name || '-'}</strong>
                    ${statusTag('warn')}
                  </div>
                  <div class="muted">${getRouteById(item.originalRouteId)?.name || '-'} → ${getRouteById(item.newRouteId)?.name || '-'}</div>
                  <small class="muted">Motorista: ${getUserById(item.newDriverId)?.name || '-'}</small>
                  <small class="muted">Motivo: ${item.reason}</small>
                </div>
              `).join('')}
            </div>
          ` : `<div class="empty">Nenhuma exceção de rota cadastrada para hoje.</div>`}
        </div>
      </div>
    </div>
  `;
}

function renderLojas() {
  const networks = uniqueNetworks();
  const separators = uniqueSeparators();
  const networkOptions = networks.map((network) => `<option value="${network}">${network}</option>`).join('');
  const separatorOptions = separators.map((separator) => `<option value="${escapeHtml(separator)}">${escapeHtml(separator)}</option>`).join('');
  const rows = getActiveStores().sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
  const pendingConciliation = rows.filter(storeNeedsCommercialConciliation);
  return `
    <div class="stack">
      <div class="card">
        <div class="page-header">
          <div>
            <h3>Lojas cadastradas</h3>
          </div>
          <div class="helper-card small">
            Lojas ativas: <strong>${getActiveStores().length}</strong> • Excluídas: <strong>${appState.stores.filter((store) => !isActiveStore(store)).length}</strong> • Redes: <strong>${networks.length}</strong>
          </div>
        </div>
        <div class="form-grid">
          <label>Filtrar por rede
            <select id="lojas-filter-rede">
              <option value="">Todas as redes</option>
              ${networkOptions}
            </select>
          </label>
          <div class="helper-card small">
            Altere direto na lista se a loja tem promotor fixo e qual validação será exigida.
          </div>
        </div>
        <div class="table-wrap lojas-table-wrap">
          <table id="lojas-table">
            <thead>
              <tr>
                <th>Loja</th>
                <th>Rede</th>
                <th>Separador</th>
                <th>Rota</th>
                <th>Motorista</th>
                <th>Promotor fixo</th>
                <th>Usuário promotor</th>
                <th>Validação</th>
                <th>Saldo</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              ${rows.map((store) => {
                const route = getRouteById(store.defaultRouteId);
                const driver = getUserById(route?.driverId);
                const promoter = store.promoterId ? getUserById(store.promoterId) : null;
                const stock = getStoreStock(store.id);
                return `
                  <tr data-network="${escapeHtml(inferStoreNetwork(store))}">
                    <td><strong>${escapeHtml(formatStoreNameForUser(store.name))}</strong></td>
                    <td>${escapeHtml(inferStoreNetwork(store))}</td>
                    <td>${getStoreSeparator(store) ? escapeHtml(getStoreSeparator(store)) : '<span class="tag danger">Pendente</span>'}</td>
                    <td>${route?.name || '-'}</td>
                    <td>${driver?.name || '-'}</td>
                    <td>
                      <select class="table-select store-promoter-fixed-select" data-id="${store.id}">
                        <option value="yes" ${storeHasFixedPromoter(store) ? 'selected' : ''}>Sim</option>
                        <option value="no" ${!storeHasFixedPromoter(store) ? 'selected' : ''}>Não</option>
                      </select>
                    </td>
                    <td>${storeRequiresPromoter(store) ? (promoter?.name || '-') : '<span class="tag info">Sem promotor</span>'}</td>
                    <td>
                      <select class="table-select store-validation-select" data-id="${store.id}">
                        <option value="driver_promoter" ${getStoreValidationMode(store) === 'driver_promoter' ? 'selected' : ''}>Motorista + promotor</option>
                        <option value="driver_only" ${getStoreValidationMode(store) === 'driver_only' ? 'selected' : ''}>Somente motorista</option>
                        <option value="promoter_only" ${getStoreValidationMode(store) === 'promoter_only' ? 'selected' : ''}>Somente promotor</option>
                      </select>
                    </td>
                    <td>${sumQty(stock)}</td>
                    <td><button type="button" class="btn btn-danger btn-small btn-delete-store" data-id="${store.id}">Excluir</button></td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div class="card">
        <div class="page-header">
          <div>
            <h3>Conciliação de rede e separador</h3>
          </div>
          <div class="helper-card small">
            Pendências: <strong>${pendingConciliation.length}</strong>
          </div>
        </div>
        <form id="form-conciliacao-loja" class="stack">
          <div class="form-grid-3">
            <label>Loja
              <select name="storeId" required>
                <option value="">Selecione</option>
                ${rows.map((store) => `<option value="${store.id}">${escapeHtml(formatStoreNameForUser(store.name))}${storeNeedsCommercialConciliation(store) ? ' • Pendente' : ''}</option>`).join('')}
              </select>
            </label>
            <label>Rede
              <input type="text" name="network" list="redes-cadastradas" placeholder="Ex.: DIA A DIA" required />
            </label>
            <label>Separador
              <input type="text" name="separator" list="separadores-cadastrados" placeholder="Ex.: Matheus" required />
              <datalist id="separadores-cadastrados">${separatorOptions}</datalist>
            </label>
            <label>Promotor fixo
              <select name="hasFixedPromoter" required>
                <option value="yes">Sim</option>
                <option value="no">Não</option>
              </select>
            </label>
            <label>Validação
              <select name="validationMode" required>
                <option value="driver_promoter">Motorista + promotor</option>
                <option value="driver_only">Somente motorista</option>
                <option value="promoter_only">Somente promotor</option>
              </select>
            </label>
          </div>
          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Salvar conciliação</button>
          </div>
        </form>

        <div class="table-wrap" style="margin-top:14px">
          <table>
            <thead>
              <tr>
                <th>Loja</th>
                <th>Rede atual</th>
                <th>Separador atual</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${pendingConciliation.length ? pendingConciliation.map((store) => `
                <tr>
                  <td><strong>${escapeHtml(formatStoreNameForUser(store.name))}</strong></td>
                  <td>${escapeHtml(inferStoreNetwork(store))}</td>
                  <td>${getStoreSeparator(store) ? escapeHtml(getStoreSeparator(store)) : '-'}</td>
                  <td><span class="tag danger">Conciliação pendente</span></td>
                </tr>
              `).join('') : `<tr><td colspan="4" class="center muted">Todas as lojas possuem rede e separador vinculados.</td></tr>`}
            </tbody>
          </table>
        </div>
      </div>

      <div class="card">
        <div class="page-header">
          <div>
            <h3>Cadastrar nova loja</h3>
          </div>
        </div>
        <form id="form-nova-loja" class="stack">
          <div class="form-grid-3">
            <label>Nome da loja
              <input type="text" name="name" placeholder="Ex.: BRETAS NOVA LOJA" required />
            </label>
            <label>Rede
              <input type="text" name="network" list="redes-cadastradas" placeholder="Ex.: BRETAS" required />
              <datalist id="redes-cadastradas">${networks.map((network) => `<option value="${escapeHtml(network)}"></option>`).join('')}</datalist>
            </label>
            <label>Separador
              <input type="text" name="separator" list="separadores-cadastrados" placeholder="Ex.: Matheus" />
            </label>
            <label>Rota / motorista
              <select name="routeId" required>
                <option value="">Selecione</option>
                ${appState.routes.map((route) => `<option value="${route.id}">${route.name} • ${getRouteDriverName(route.id)}</option>`).join('')}
              </select>
            </label>
          </div>
          <div class="form-grid">
            <label>Limite de estoque alto
              <input type="number" name="highStockLimit" min="1" value="100" />
            </label>
            <label>Promotor fixo
              <select name="hasFixedPromoter" required>
                <option value="yes">Sim</option>
                <option value="no">Não</option>
              </select>
            </label>
            <label>Validação
              <select name="validationMode" required>
                <option value="driver_promoter">Motorista + promotor</option>
                <option value="driver_only">Somente motorista</option>
                <option value="promoter_only">Somente promotor</option>
              </select>
            </label>
            <label>Observação
              <input type="text" name="notes" placeholder="Opcional" />
            </label>
          </div>
          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Cadastrar loja</button>
          </div>
        </form>
      </div>
    </div>
  `;
}

function renderCargaGoiania() {
  const date = todayStr();
  const expected = getGoianiaExpectedQty(date);
  const latest = (appState.movements.goianiaLoads || []).filter((item) => item.date === date)[0];
  const goianiaRoutes = appState.routes.filter((route) => isGoianiaRoute(route.id));
  return `
    <div class="grid-2">
      <div class="card">
        <div class="page-header">
          <div>
            <h3>Validação da carga total de Goiânia</h3>
          </div>
          <div class="helper-card small">
            Caminhão compartilhado: <strong>Vinicius / Sebastião</strong> • Escala 12x36
          </div>
        </div>
        <form id="form-carga-goiania" class="stack">
          <div class="form-grid">
            <label>Data
              <input type="date" name="date" value="${date}" required />
            </label>
            <label>Motorista responsável pelo caminhão
              <select name="driverId">
                ${GOIANIA_TRUNK_DRIVER_IDS.map((id) => {
                  const user = getUserById(id);
                  return user ? `<option value="${user.id}">${user.name}</option>` : '';
                }).join('')}
              </select>
            </label>
          </div>
          <div id="carga-goiania-resumo" class="helper-card small">
            Soma de hoje: <strong>${sumQty(expected)} caixas</strong> • Folhagens: <strong>${expected.folhagens}</strong> • Bandejas: <strong>${expected.bandejas}</strong>
          </div>
          <label>Total carregado no caminhão
            <input type="number" min="0" step="1" name="totalLoaded" id="carga-goiania-total" required />
          </label>
          <div id="carga-goiania-detalhe" class="driver-detail-panel hidden">
            <div class="alert-strip warning">
              <div>
                <strong>Divergência na carga</strong>
                <p id="carga-goiania-alerta" class="muted">Informe folhagens e bandejas carregadas para identificar o erro.</p>
              </div>
            </div>
            ${qtyInputs('carga-goiania')}
          </div>
          <label>Observação / justificativa
            <textarea name="notes" placeholder="Obrigatório se a carga total não bater com a soma do CD/galpão."></textarea>
          </label>
          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Validar carga Goiânia</button>
          </div>
        </form>
      </div>
      <div class="card">
        <h3>Composição da operação Goiânia</h3>
        <div class="list">
          ${goianiaRoutes.map((route) => {
            const stores = getActiveStores().filter((store) => store.defaultRouteId === route.id);
            const qty = appState.movements.outbounds.filter((item) => item.date === date && item.routeId === route.id).reduce((acc, item) => addQty(acc, item.qty), emptyQty());
            return `
              <div class="list-item">
                <div class="list-item-head"><strong>${route.name}</strong><span class="tag info">${stores.length} lojas</span></div>
                <div class="muted">Motorista: ${getRouteDriverName(route.id)}</div>
                <div class="kpi-row"><span>Carga lançada hoje</span><strong>${sumQty(qty)} caixas</strong></div>
              </div>
            `;
          }).join('')}
        </div>
        ${latest ? `<div class="alert-strip ${latest.hasDivergence ? 'critical' : 'info'}"><div><strong>Última validação de hoje</strong><p class="muted">${latest.totalLoaded} caixas validadas por ${getUserById(latest.driverId)?.name || latest.createdBy || '-'}.</p></div></div>` : ''}
      </div>
    </div>
  `;
}

function renderDistribuicaoGoiania() {
  const date = todayStr();
  const outbounds = getGoianiaOutbounds(date).filter((item) => !item.goianiaTransferClosed && !getOutboundTransfer(item.id));
  const drivers = appState.users.filter((user) => user.role === 'driver').filter((user) =>
    ['user_motor_vinicius', 'user_motor_maycon', 'user_motor_alexsandro', 'user_motor_edmar'].includes(user.id) || normalizeText(user.name).includes('reforco')
  );
  const freightDrivers = drivers.filter((user) => !isGoianiaTrunkUser(user));
  const transfers = (appState.movements.goianiaTransfers || []).filter((item) => item.date === date).slice(0, 20);
  const freightReturns = (appState.movements.goianiaFreightReturns || []).filter((item) => item.date === date).slice(0, 12);
  const supportMovements = (appState.movements.supportPointMovements || []).filter((item) => item.date === date).slice(0, 12);
  const expected = getGoianiaExpectedQty(date);
  const distributed = getGoianiaTransferQty(date);
  const supportStore = getStoreById(SUPPORT_POINT_STORE_ID);
  const supportStockTotal = sumQty(getStoreStock(SUPPORT_POINT_STORE_ID));
  return `
    <div class="stack">
      <div class="grid-2">
        <div class="card">
          <div class="page-header">
            <div>
              <h3>Distribuição / transbordo Goiânia</h3>
            </div>
            <div class="helper-card small">
              Vinicius/Sebastião validam a carga total. Freteiros entregam nas lojas e depois devolvem as caixas vazias ao Vinicius.
            </div>
          </div>
          <form id="form-distribuicao-goiania" class="stack">
            <div class="form-grid">
              <label>Data
                <input type="date" name="date" value="${date}" required />
              </label>
              <label>Motorista/freteiro que recebeu
                <select name="driverId" required>
                  <option value="">Selecione</option>
                  ${drivers.map((driver) => `<option value="${driver.id}">${driver.name}</option>`).join('')}
                </select>
              </label>
            </div>
            <label>Loja / carga repassada
              <select name="outboundId" id="goiania-transfer-outbound" required>
                <option value="">Selecione</option>
                ${outbounds.map((item) => `<option value="${item.id}">${getStoreById(item.storeId)?.name || '-'} • ${sumQty(item.qty)} caixas • rota ${getRouteById(item.routeId)?.name || '-'}</option>`).join('')}
              </select>
            </label>
            <div id="goiania-transfer-resumo" class="helper-card small">Selecione uma carga para preencher o total por categoria.</div>
            ${qtyInputs('goiania-transfer')}
            <label>Observação
              <textarea name="notes" placeholder="Ex.: repasse para Edmar / reforço por excesso de volume / entrega direta Vinicius."></textarea>
            </label>
            <div class="form-actions">
              <button type="submit" class="btn btn-primary">Registrar distribuição</button>
            </div>
          </form>
        </div>
        <div class="card">
          <h3>Resumo de hoje</h3>
          <div class="stats-inline">
            <div class="stat-pill"><span>Carga Goiânia</span><strong>${sumQty(expected)}</strong></div>
            <div class="stat-pill"><span>Distribuído</span><strong>${sumQty(distributed)}</strong></div>
            <div class="stat-pill"><span>Pendente</span><strong>${Math.max(0, sumQty(expected) - sumQty(distributed))}</strong></div>
          </div>
          <div class="list">
            ${transfers.length ? transfers.map((item) => `
              <div class="list-item">
                <div class="list-item-head"><strong>${getStoreById(item.storeId)?.name || '-'}</strong><span class="tag info">${sumQty(item.qty)} caixas</span></div>
                <div class="muted">Recebeu: ${getUserById(item.driverId)?.name || '-'}</div>
                <small class="muted">${item.qty.folhagens} folhagens • ${item.qty.bandejas} bandejas</small>
              </div>
            `).join('') : `<div class="empty">Nenhum repasse registrado hoje.</div>`}
          </div>
        </div>
      </div>

      <div class="grid-2">
        <div class="card">
          <h3>Devolução dos fretes para Vinicius/Sebastião</h3>
          <form id="form-goiania-frete-retorno" class="stack">
            <div class="form-grid">
              <label>Data
                <input type="date" name="date" value="${date}" required />
              </label>
              <label>Freteiro/motorista
                <select name="fromDriverId" id="goiania-frete-driver" required>
                  <option value="">Selecione</option>
                  ${freightDrivers.map((driver) => `<option value="${driver.id}">${driver.name}</option>`).join('')}
                </select>
              </label>
            </div>
            <div id="goiania-frete-retorno-resumo" class="helper-card small">Selecione o freteiro para conferir as caixas vazias que ele recolheu nas lojas.</div>
            <label>Total devolvido ao Vinicius/Sebastião
              <input type="number" min="0" step="1" name="totalReceived" value="0" required />
            </label>
            <label>Observação / justificativa
              <textarea name="notes" placeholder="Obrigatório na divergência. Ex.: freteiro entregou menos caixas do que recolheu."></textarea>
            </label>
            <div class="form-actions">
              <button type="submit" class="btn btn-primary">Confirmar devolução do frete</button>
            </div>
          </form>
        </div>

        <div class="card">
          <h3>Ponto de apoio: Fazenda Nerópolis</h3>
          <div class="helper-card compact small"><strong>${supportStore?.name || 'Fazenda Nerópolis - Sr. Carlinhos'}</strong> • Saldo atual: <strong>${supportStockTotal} caixas</strong></div>
          <form id="form-ponto-apoio" class="stack">
            <div class="form-grid">
              <label>Data
                <input type="date" name="date" value="${date}" required />
              </label>
              <label>Ação
                <select name="action" required>
                  <option value="drop">Deixar caixas vazias</option>
                  <option value="collect">Recolher caixas vazias</option>
                </select>
              </label>
            </div>
            <input type="hidden" name="storeId" value="${SUPPORT_POINT_STORE_ID}" />
            <label>Total de caixas
              <input type="number" min="0" step="1" name="totalQty" value="0" required />
            </label>
            <label>Observação
              <textarea name="notes" placeholder="Ex.: deixadas pelo Vinicius / recolhidas depois para retornar ao CD."></textarea>
            </label>
            <div class="form-actions">
              <button type="submit" class="btn btn-primary">Registrar ponto de apoio</button>
            </div>
          </form>
        </div>
      </div>

      <div class="grid-2">
        <div class="card">
          <h3>Devoluções registradas</h3>
          <div class="list">
            ${freightReturns.length ? freightReturns.map((item) => `
              <div class="list-item">
                <div class="list-item-head"><strong>${getUserById(item.fromDriverId)?.name || '-'}</strong><span class="tag ${item.hasDivergence ? 'warn' : 'ok'}">${safeInt(item.totalReceived)} caixas</span></div>
                <div class="muted">Recolhido nas lojas: ${safeInt(item.expectedTotal)} • Recebido por: ${getUserById(item.receivedByDriverId)?.name || '-'}</div>
              </div>
            `).join('') : `<div class="empty">Nenhuma devolução de frete registrada hoje.</div>`}
          </div>
        </div>
        <div class="card">
          <h3>Movimentos no ponto de apoio</h3>
          <div class="list">
            ${supportMovements.length ? supportMovements.map((item) => `
              <div class="list-item">
                <div class="list-item-head"><strong>${item.action === 'drop' ? 'Deixou' : 'Recolheu'} caixas</strong><span class="tag info">${safeInt(item.totalQty)} caixas</span></div>
                <div class="muted">${getUserById(item.driverId)?.name || '-'} • ${getStoreById(item.storeId)?.name || '-'}</div>
                ${item.notes ? `<small class="muted">${escapeHtml(item.notes)}</small>` : ''}
              </div>
            `).join('') : `<div class="empty">Nenhum movimento no ponto de apoio hoje.</div>`}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderRelatorios() {
  if (currentUser.role !== 'admin') return `<div class="empty">Acesso restrito ao ADM.</div>`;
  const storeRows = getStoreStockRows();
  const topUsers = {};
  const lossRows = getLossAndStoppedRows().slice(0, 12);
  appState.audit.forEach((item) => {
    topUsers[item.userName] = (topUsers[item.userName] || 0) + 1;
  });

  return `
    <div class="stack">
      <div class="grid-3">
        <div class="card">
          <h3>Ranking de estoque em loja</h3>
          <div class="list">
            ${storeRows.slice(0, 5).map((row) => `
              <div class="list-item">
                <div class="list-item-head">
                  <strong>${row.store.name}</strong>
                  <strong>${row.total}</strong>
                </div>
                <small class="muted">Limite: ${row.store.highStockLimit} caixas</small>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="card">
          <h3>Usuários com mais lançamentos</h3>
          <div class="list">
            ${Object.entries(topUsers).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([name, total]) => `
              <div class="list-item">
                <div class="list-item-head">
                  <strong>${name}</strong>
                  <strong>${total}</strong>
                </div>
                <small class="muted">Ações registradas na auditoria</small>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="card">
          <h3>Previsão do dia</h3>
          <div class="stats-inline">
            <div class="stat-pill">
              <span>Dia</span>
              <strong>${weekdayName(getForecast().weekday)}</strong>
            </div>
            <div class="stat-pill">
              <span>Base prevista</span>
              <strong>${getForecast().predicted}</strong>
            </div>
            <div class="stat-pill">
              <span>Fonte</span>
              <strong>${getForecast().source}</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="section-header">
          <div>
            <h3>Caixas paradas / risco de perda</h3>
          </div>
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Loja</th><th>Rede</th><th>Saldo total</th><th>Dias parada</th><th>Divergências</th><th>Última movimentação</th></tr></thead>
            <tbody>
              ${lossRows.length ? lossRows.map((row) => `
                <tr>
                  <td>${row.store.name}</td>
                  <td>${row.store.network || '-'}</td>
                  <td>${row.total}</td>
                  <td>${row.daysStopped}</td>
                  <td>${row.openDivs ? '<span class="tag danger">' + row.openDivs + '</span>' : statusTag('ok')}</td>
                  <td>${row.lastMoveDate ? formatDateBR(row.lastMoveDate) : '-'}</td>
                </tr>
              `).join('') : `<tr><td colspan="6" class="center muted">Sem caixas paradas ou risco identificado.</td></tr>`}
            </tbody>
          </table>
        </div>
      </div>

      <div class="card">
        <div class="section-header">
          <div>
            <h3>Auditoria completa</h3>
          </div>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Data/Hora</th>
                <th>Usuário</th>
                <th>Módulo</th>
                <th>Ação</th>
                <th>Detalhes</th>
              </tr>
            </thead>
            <tbody>
              ${appState.audit.length ? appState.audit.map((item) => `
                <tr>
                  <td>${formatDateTimeBR(item.createdAt)}</td>
                  <td>${item.userName}</td>
                  <td>${item.module}</td>
                  <td>${item.action}</td>
                  <td>${item.details}</td>
                </tr>
              `).join('') : `<tr><td colspan="5" class="center muted">Sem registros de auditoria.</td></tr>`}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function renderUserPermissionControls(user) {
  if (!user) return '-';
  if (user.role === 'admin') return '<small class="muted">ADM sempre tem acesso total.</small>';
  const allowed = new Set(getEffectiveAllowedViews(user));
  const available = NAV_ITEMS.filter((item) => item.roles.includes(user.role));
  if (!available.length) return '<small class="muted">Sem abas disponíveis.</small>';
  return `
    <details class="permissions-details">
      <summary>Editar permissões</summary>
      <div class="permissions-grid">
        ${available.map((item) => {
          const isDashboard = item.key === 'dashboard';
          return `
            <label class="permission-check">
              <input type="checkbox" class="user-view-permission" data-user-id="${user.id}" value="${item.key}" ${allowed.has(item.key) || isDashboard ? 'checked' : ''} ${isDashboard ? 'disabled' : ''} />
              <span>${item.label}</span>
            </label>
          `;
        }).join('')}
      </div>
    </details>
  `;
}


function renderUsuarios() {
  if (currentUser.role !== 'admin') {
    return `<div class="empty">Acesso restrito ao ADM.</div>`;
  }

  const sortedUsers = [...appState.users].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
  const sortedStores = getActiveStores().sort((a, b) => formatStoreNameForUser(a.name).localeCompare(formatStoreNameForUser(b.name), 'pt-BR'));
  const sortedRoutes = [...appState.routes].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
  const reliefUsers = sortedUsers.filter((user) => isReliefDriver(user));
  const roleOptions = Object.entries(ROLE_LABELS).map(([key, label]) => `<option value="${key}">${label}</option>`).join('');
  const buildStoreOptions = (selectedId) => `
    <option value="">Selecione a loja</option>
    ${sortedStores.map((store) => `<option value="${store.id}" ${store.id === selectedId ? 'selected' : ''}>${formatStoreNameForUser(store.name)}${store.network ? ` • ${store.network}` : ''}</option>`).join('')}
  `;
  const buildRouteOptions = (selectedId) => `
    <option value="">Selecione a rota</option>
    ${sortedRoutes.map((route) => `<option value="${route.id}" ${route.id === selectedId ? 'selected' : ''}>${route.name}</option>`).join('')}
  `;

  return `
    <div class="stack">
      <div class="card">
        <div class="page-header">
          <div>
            <h3>Permissões por perfil</h3>
          </div>
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Perfil</th><th>O que visualiza</th></tr></thead>
            <tbody>
              <tr><td>ADM</td><td>Todas as abas, usuários, configurações e dados gerais.</td></tr>
              <tr><td>CD</td><td>Saídas, resumo de envios, retornos, pendências e Dashboard do CD. O ADM define se cada usuário pode lançar folhagens, bandejas ou ambos.</td></tr>
              <tr><td>Motorista</td><td>Somente entregas, recolhimentos, divergências e pendências da rota vinculada.</td></tr>
              <tr><td>Promotor</td><td>Somente recebimento, estoque, inventário e pendências da própria loja.</td></tr>
              <tr><td>Visualizador</td><td>Visão gerencial concentrada na Dashboard.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card">
        <div class="page-header">
          <div>
            <h3>Criar novo usuário</h3>
          </div>
        </div>

        <form id="form-novo-usuario" class="stack">
          <div class="form-grid-3">
            <label>Nome
              <input type="text" name="name" placeholder="Nome do usuário" required />
            </label>
            <label>Perfil
              <select name="role" id="novo-usuario-role" required>
                ${roleOptions}
              </select>
            </label>
            <label>Login
              <input type="text" name="username" placeholder="ex.: motorvinicius" required />
            </label>
          </div>

          <div class="form-grid-3">
            <label>Senha inicial
              <input type="text" name="password" value="${INITIAL_PASSWORD}" minlength="6" required />
            </label>
            <label id="novo-usuario-store-wrap" class="hidden">Loja vinculada
              <select name="storeId">
                ${buildStoreOptions('')}
              </select>
            </label>
            <label id="novo-usuario-route-wrap" class="hidden">Rota vinculada
              <select name="routeId">
                ${buildRouteOptions('')}
              </select>
            </label>
            <div id="novo-usuario-box-wrap" class="hidden">
              <strong>Caixas que pode lançar</strong>
              ${renderBoxTypePermissionChecks('', BOX_TYPES.map((item) => item.key), 'new-user-box-permission')}
            </div>
          </div>

          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Criar usuário</button>
          </div>
        </form>
      </div>

      <div class="card">
        <div class="page-header">
          <div>
            <h3>Motorista folguista</h3>
            <p class="muted">Controle a rota diária do Caio ou de outro folguista. O motorista só consegue escolher uma vez por dia; o ADM pode corrigir.</p>
          </div>
        </div>
        ${reliefUsers.length ? `
          <form id="form-folguista-rota-adm" class="stack">
            <div class="form-grid-3">
              <label>Folguista
                <select name="userId" required>
                  ${reliefUsers.map((user) => `<option value="${user.id}">${user.name} • ${user.username}</option>`).join('')}
                </select>
              </label>
              <label>Data
                <input type="date" name="date" value="${todayStr()}" required />
              </label>
              <label>Rota do dia
                <select name="routeId" required>
                  ${buildRouteOptions('')}
                </select>
              </label>
            </div>
            <label>Motivo da alteração pelo ADM
              <input type="text" name="reason" placeholder="Ex.: folga do motorista fixo / correção de rota escolhida errada" />
            </label>
            <div class="form-actions">
              <button type="submit" class="btn btn-secondary">Definir/alterar rota do folguista</button>
            </div>
          </form>
          <div class="table-wrap" style="margin-top:14px">
            <table>
              <thead><tr><th>Data</th><th>Folguista</th><th>Rota</th><th>Status</th><th>Definido por</th></tr></thead>
              <tbody>
                ${(appState.reliefDriverAssignments || []).filter((item) => reliefUsers.some((user) => user.id === item.userId)).slice(0, 12).map((item) => `
                  <tr>
                    <td>${formatDateBR(item.date)}</td>
                    <td>${getUserById(item.userId)?.name || item.userName || '-'}</td>
                    <td>${getRouteById(item.routeId)?.name || item.routeName || '-'}</td>
                    <td>${item.canceledAt ? '<span class="tag warn">Substituída</span>' : '<span class="tag ok">Ativa</span>'}</td>
                    <td>${item.selectedBy || '-'}</td>
                  </tr>
                `).join('') || '<tr><td colspan="5" class="center muted">Nenhuma rota de folguista definida ainda.</td></tr>'}
              </tbody>
            </table>
          </div>
        ` : '<div class="empty">Nenhum motorista folguista cadastrado.</div>'}
      </div>

      <div class="card">
        <div class="page-header">
          <div>
            <h3>Usuários cadastrados</h3>
          </div>
        </div>
        <div class="form-actions" style="margin-bottom:12px">
          <button type="button" class="btn btn-ghost" id="btn-select-all-users">Selecionar todos</button>
          <button type="button" class="btn btn-ghost" id="btn-clear-user-selection">Limpar seleção</button>
          <button type="button" class="btn btn-danger" id="btn-delete-selected-users">Excluir selecionados</button>
          <span class="muted" id="selected-users-count">0 selecionados</span>
        </div>
        <div class="table-wrap users-table-wrap">
          <table class="users-admin-table">
            <thead>
              <tr>
                <th>Selecionar</th>
                <th>Nome</th>
                <th>Perfil</th>
                <th>Loja/Rota vinculada</th>
                <th>Usuário de login</th>
                <th>Senha atual</th>
                <th>Status</th>
                <th>Permissão</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              ${sortedUsers.map((user) => `
                <tr data-user-id="${user.id}">
                  <td data-label="Selecionar">
                    <input type="checkbox" class="user-delete-check" value="${user.id}" ${user.id === currentUser.id ? 'disabled' : ''} title="${user.id === currentUser.id ? 'Você não pode excluir o usuário logado' : 'Selecionar usuário'}" />
                  </td>
                  <td data-label="Nome">
                    <input class="user-name-input" type="text" value="${escapeHtml(formatNameForInput(user))}" data-user-id="${user.id}" />
                  </td>
                  <td data-label="Perfil">
                    <select class="user-role-select" data-user-id="${user.id}">
                      ${Object.entries(ROLE_LABELS).map(([key, label]) => `<option value="${key}" ${key === user.role ? 'selected' : ''}>${label}</option>`).join('')}
                    </select>
                  </td>
                  <td data-label="Loja/Rota vinculada">
                    <div class="user-target-edit">
                      <select class="user-store-select user-target-select ${user.role === 'promoter' ? '' : 'hidden'}" data-user-id="${user.id}">
                        ${buildStoreOptions(user.storeId || '')}
                      </select>
                      <select class="user-route-select user-target-select ${user.role === 'driver' && !isReliefDriver(user) ? '' : 'hidden'}" data-user-id="${user.id}">
                        ${buildRouteOptions(user.routeId || '')}
                      </select>
                      <span class="user-target-static ${user.role === 'promoter' || (user.role === 'driver' && !isReliefDriver(user)) ? 'hidden' : ''}" data-user-id="${user.id}">${getUserAccessTarget(user)}</span>
                    </div>
                  </td>
                  <td data-label="Usuário de login">
                    <input class="user-login-input" type="text" value="${escapeHtml(user.username)}" data-user-id="${user.id}" />
                  </td>
                  <td data-label="Senha atual"><strong>${escapeHtml(user.password)}</strong></td>
                  <td data-label="Status">${mustChangePassword(user) ? '<span class="tag warn">Primeiro acesso pendente</span>' : '<span class="tag ok">Senha alterada</span>'}</td>
                  <td data-label="Permissão">
                    <small class="muted">${getPermissionLabel(user)}</small>
                    ${renderUserPermissionControls(user)}
                    ${user.role === 'cd' ? `<div class="box-permissions-block"><strong>Caixas permitidas</strong>${renderBoxTypePermissionChecks(user.id, user.allowedBoxTypes || BOX_TYPES.map((item) => item.key))}</div>` : ''}
                  </td>
                  <td data-label="Ação"><button type="button" class="btn btn-secondary btn-save-user" data-user-id="${user.id}">Salvar alterações</button></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function renderConfiguracoes() {
  return `
    <div class="stack">
      <div class="card">
        <div class="page-header">
          <div>
            <h3>Parâmetros do sistema</h3>
          </div>
        </div>

        <form id="form-config" class="stack">
          <div class="form-grid">
            <label>Margem de segurança do CD
              <input type="number" name="safetyMargin" min="0" step="1" value="${safeInt(appState.settings.safetyMargin)}" />
            </label>
          </div>

          <div class="card" style="box-shadow:none">
            <h4>Base manual por dia da semana</h4>
            <div class="form-grid-3">
              ${Object.keys(appState.settings.manualBaselineByWeekday).map((weekday) => `
                <label>${weekdayName(Number(weekday))}
                  <input type="number" name="weekday_${weekday}" min="0" step="1" value="${safeInt(appState.settings.manualBaselineByWeekday[weekday])}" />
                </label>
              `).join('')}
            </div>
          </div>

          <div class="card" style="box-shadow:none">
            <h4>Limite de estoque alto por loja</h4>
            <div class="form-grid-3">
              ${getActiveStores().map((store) => `
                <label>${store.name}
                  <input type="number" name="limit_${store.id}" min="1" step="1" value="${safeInt(store.highStockLimit)}" />
                </label>
              `).join('')}
            </div>
          </div>

          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Salvar configurações</button>
          </div>
          <div class="footer-note">O sistema usa primeiro o histórico real. Quando ainda não há histórico suficiente, usa a base manual configurada aqui.</div>
        </form>
      </div>
    </div>
  `;
}

function bindViewEvents() {
  document.querySelectorAll('.btn-go-inventory').forEach((button) => {
    button.addEventListener('click', () => {
      currentView = 'inventario';
      render();
    });
  });
  if (currentView === 'saidas') bindSaidasEvents();
  if (currentView === 'resumoEnvios') bindResumoEnviosEvents();
  if (currentView === 'entregasMotorista') bindEntregasMotoristaEvents();
  if (currentView === 'recebimentos') bindRecebimentosEvents();
  if (currentView === 'recolhimentos') bindRecolhimentosEvents();
  if (currentView === 'caixasOcupadas') bindCaixasOcupadasEvents();
  if (currentView === 'caixasLiberadas') bindCaixasLiberadasEvents();
  if (currentView === 'retornos') bindRetornosEvents();
  if (currentView === 'fechamento') bindFechamentoEvents();
  if (currentView === 'estornos') bindEstornosEvents();
  if (currentView === 'rotas') bindRotasEvents();
  if (currentView === 'lojas') bindLojasEvents();
  if (currentView === 'cargaGoiania') bindCargaGoianiaEvents();
  if (currentView === 'distribuicaoGoiania') bindDistribuicaoGoianiaEvents();
  if (currentView === 'configuracoes') bindConfigEvents();
  if (currentView === 'inventario') bindInventarioEvents();
  if (currentView === 'divergencias') bindDivergenciasEvents();
  if (currentView === 'usuarios') bindUsuariosEvents();
  bindMovementCorrectionEvents();
}

function bindFechamentoEvents() {
  const form = document.getElementById('form-fechamento-dia');
  if (!form) return;
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const payload = {
      date: form.date.value || todayStr(),
      notes: form.notes.value.trim(),
    };
    const result = await persistMutation('CLOSE_DAY', payload, 'Fechamento do dia registrado.');
    if (result.ok) render();
  });
}

function bindEstornosEvents() {
  document.querySelectorAll('.btn-cancel-movement').forEach((button) => {
    button.addEventListener('click', async () => {
      const reason = window.prompt('Informe o motivo do estorno. Esse motivo ficará na auditoria:');
      if (reason === null) return;
      const result = await persistMutation('CANCEL_MOVEMENT', {
        movementType: button.dataset.type,
        id: button.dataset.id,
        reason,
      }, 'Lançamento estornado com auditoria.');
      if (result.ok) render();
    });
  });
}

function bindResumoEnviosEvents() {
  const form = document.getElementById('form-resumo-envios');
  if (!form) return;

  form.addEventListener('change', () => {
    viewFilters.resumoEnviosDate = form.date?.value || todayStr();
    viewFilters.resumoEnviosNetwork = form.network?.value || '';
    viewFilters.resumoEnviosCdUserId = form.cdUserId?.value || '';
    render();
  });
}

function bindSaidasEvents() {
  const form = document.getElementById('form-saida');
  const networkSelect = document.getElementById('saida-network');
  const separatorSelect = document.getElementById('saida-separator');
  const storeSelect = document.getElementById('saida-store');
  const infoBox = document.getElementById('saida-rota-info');
  const resetBtn = document.getElementById('btn-reset-saida');

  if (!form || !storeSelect) return;

  const getPendingStoresForForm = () => {
    const date = form.querySelector('[name="date"]').value || todayStr();
    const network = networkSelect?.value || '';
    const separator = separatorSelect?.value || '';
    return getActiveStores()
      .filter((store) => !network || inferStoreNetwork(store) === network)
      .filter((store) => !separator || getStoreSeparator(store) === separator)
      .filter((store) => storeHasPendingOutboundForUser(store.id, date, currentUser, appState))
      .sort((a, b) => compareOutboundStoreOptions(a, b, currentUser));
  };

  const refreshStoreOptions = () => {
    const selected = storeSelect.value;
    const stores = getPendingStoresForForm();
    storeSelect.innerHTML = `<option value="">Selecione a loja</option>` + stores
      .map((store) => `<option value="${store.id}" ${store.id === selected ? 'selected' : ''}>${escapeHtml(getStoreOptionLabel(store))}</option>`)
      .join('');
    if (selected && !stores.some((store) => store.id === selected)) {
      storeSelect.value = '';
    }
    refreshRouteInfo();
  };

  const refreshRouteInfo = () => {
    if (!form || !storeSelect || !infoBox) return;
    const store = getStoreById(storeSelect.value);
    const date = form.querySelector('[name="date"]').value || todayStr();

    if (!store) {
      const pendingCount = getPendingStoresForForm().length;
      infoBox.innerHTML = pendingCount
        ? `Selecione uma loja. Pendentes para lançamento: <strong>${pendingCount}</strong>.`
        : 'Nenhuma loja pendente para a rede/data selecionada.';
      return;
    }

    const routeId = getEffectiveRoute(store.id, date);
    const route = getRouteById(routeId);
    const driverId = routeId ? getEffectiveDriver(routeId, date, store.id) : null;
    const driver = getUserById(driverId);

    if (!route) {
      infoBox.innerHTML = `
        <strong>${formatStoreNameForUser(store.name)}</strong><br>
        <span class="tag danger">Sem rota cadastrada</span>
      `;
      return;
    }

    infoBox.innerHTML = `
      <strong>${formatStoreNameForUser(store.name)}</strong> • Rede ${inferStoreNetwork(store)}, Loja ${getStoreUnitName(store)}<br>
      Separador: <strong>${getStoreSeparator(store) || 'Não conciliado'}</strong><br>
      Rota: <strong>${route.name}</strong> • Motorista: <strong>${driver?.name || 'Sem motorista'}</strong>
    `;
  };

  networkSelect?.addEventListener('change', refreshStoreOptions);
  separatorSelect?.addEventListener('change', refreshStoreOptions);
  storeSelect.addEventListener('change', refreshRouteInfo);
  form.querySelector('[name="date"]').addEventListener('change', refreshStoreOptions);

  resetBtn.addEventListener('click', () => {
    form.reset();
    form.querySelector('[name="date"]').value = todayStr();
    refreshStoreOptions();
  });

  refreshStoreOptions();

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const date = form.date.value || todayStr();
    const storeId = form.storeId.value;
    const routeId = getEffectiveRoute(storeId, date);
    const driverId = routeId ? getEffectiveDriver(routeId, date, storeId) : null;

    if (!storeId) {
      showToast('Selecione a loja para registrar a saída.', 'error');
      return;
    }
    const qty = readQtyFromForm(form, 'saida');
    const conflicts = getOutboundQtyConflicts(storeId, date, qty, appState);
    if (conflicts.length) {
      showToast(`Esta loja já teve lançamento de ${getBoxTypeLabels(conflicts)} nessa data. Para corrigir, use Editar em Saídas recentes.`, 'error');
      refreshStoreOptions();
      return;
    }
    if (!routeId) {
      showToast('Esta loja não possui rota cadastrada. Corrija a rota no ADM.', 'error');
      return;
    }
    if (!driverId) {
      showToast('A rota desta loja não possui motorista vinculado. Corrija no ADM.', 'error');
      return;
    }

    const payload = {
      date,
      storeId,
      routeId,
      driverId,
      qty,
    };
    const result = await persistMutation('CREATE_OUTBOUND', payload, 'Saída registrada com rota automática.');
    if (result.ok) {
      form.reset();
      form.querySelector('[name="date"]').value = todayStr();
      render();
    }
  });
}

function bindEntregasMotoristaEvents() {
  const form = document.getElementById('form-entrega-motorista');
  if (!form) return;
  const outboundSelect = document.getElementById('entrega-motorista-outbound');
  const summary = document.getElementById('entrega-motorista-resumo');
  const totalInput = document.getElementById('entrega-motorista-total');
  const detailPanel = document.getElementById('entrega-motorista-detalhe');
  const alertText = document.getElementById('entrega-motorista-alerta');

  const getSelectedOutbound = () => appState.movements.outbounds.find((item) => item.id === outboundSelect.value);

  const clearDriverDetailInputs = () => {
    BOX_TYPES.forEach((item) => {
      const input = form.querySelector(`#entrega-motorista-${item.key}`);
      if (input) input.value = 0;
    });
  };

  const refresh = () => {
    const outbound = getSelectedOutbound();
    if (!outbound) {
      summary.innerHTML = 'Selecione uma saída.';
      detailPanel.classList.add('hidden');
      return;
    }
    const store = getStoreById(outbound.storeId);
    const route = getRouteById(outbound.routeId);
    const total = safeInt(totalInput.value);
    const expectedTotal = sumQty(outbound.qty);

    if (total <= 0) {
      summary.innerHTML = `
        <strong>${store?.name || '-'}</strong><br>
        Data: ${formatDateBR(outbound.date)} • Rota: ${route?.name || '-'}
      `;
      detailPanel.classList.add('hidden');
      return;
    }

    const hasDiff = total !== expectedTotal;
    detailPanel.classList.toggle('hidden', !hasDiff);

    if (!hasDiff) {
      summary.innerHTML = `
        <strong>${store?.name || '-'}</strong>${store?.network ? ` • ${store.network}` : ''}<br>
        Total informado pelo motorista: <strong>${total} caixas</strong><br>
        <span class="tag ok">Quantidade correta para esta loja</span><br>
        ${storeRequiresPromoter(store) ? 'Depois o promotor também deverá validar separado.' : '<strong>Bretas/sem promotor:</strong> esta validação do motorista fecha a entrega da loja.'}
      `;
      return;
    }

    const diff = total - expectedTotal;
    const signal = diff > 0 ? '+' : '';
    summary.innerHTML = `
      <strong>${store?.name || '-'}</strong>${store?.network ? ` • ${store.network}` : ''}<br>
      Total informado pelo motorista: <strong>${total} caixas</strong><br>
      <span class="tag danger">Divergência de ${signal}${diff} caixa(s)</span>
    `;
    alertText.textContent = `Motorista informou ${total} caixas. Correto esperado: ${expectedTotal}. Diferença: ${signal}${diff}. Informe folhagens e bandejas. Correto para a loja: ${outbound.qty.folhagens} folhagens e ${outbound.qty.bandejas} bandejas.`;
  };

  outboundSelect.addEventListener('change', () => {
    totalInput.value = '';
    clearDriverDetailInputs();
    refresh();
  });
  totalInput.addEventListener('input', refresh);
  refresh();

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const outbound = getSelectedOutbound();
    if (!outbound) {
      showToast('Selecione a saída para validar.', 'error');
      return;
    }
    const totalDelivered = safeInt(form.totalDelivered.value);
    const expectedTotal = sumQty(outbound.qty);
    const hasDiff = totalDelivered !== expectedTotal;
    const payload = {
      outboundId: form.outboundId.value,
      date: todayStr(),
      totalDelivered,
      actualQty: hasDiff ? readQtyFromForm(form, 'entrega-motorista') : outbound.qty,
      notes: form.notes.value.trim(),
    };
    const result = await persistMutation('CONFIRM_DRIVER_DELIVERY', payload, 'Entrega do motorista validada.');
    if (result.ok) render();
  });
}

function bindRecebimentosEvents() {
  const form = document.getElementById('form-recebimento');
  if (!form) return;
  const outboundSelect = document.getElementById('recebimento-outbound');
  const summary = document.getElementById('recebimento-resumo');
  const totalInput = document.getElementById('recebimento-total');
  const detailPanel = document.getElementById('recebimento-detalhe');
  const alertText = document.getElementById('recebimento-alerta');

  const getSelectedOutbound = () => appState.movements.outbounds.find((item) => item.id === outboundSelect.value);

  const clearReceiptInputs = () => {
    BOX_TYPES.forEach((item) => {
      const input = form.querySelector(`#recebimento-${item.key}`);
      if (input) input.value = 0;
    });
  };

  const updateSummary = () => {
    const outbound = getSelectedOutbound();
    if (!outbound) {
      summary.innerHTML = 'Selecione a saída.';
      if (detailPanel) detailPanel.classList.add('hidden');
      clearReceiptInputs();
      return;
    }

    const store = getStoreById(outbound.storeId);
    const route = getRouteById(outbound.routeId);
    const total = safeInt(totalInput?.value);
    const expectedTotal = sumQty(outbound.qty);

    if (total <= 0) {
      summary.innerHTML = `
        <strong>${store?.name || '-'}</strong><br>
        Data: ${formatDateBR(outbound.date)} • Rota: ${route?.name || '-'}<br>
        Correto esperado: <strong>${expectedTotal} caixas</strong>
      `;
      if (detailPanel) detailPanel.classList.add('hidden');
      return;
    }

    const hasDiff = total !== expectedTotal;
    if (detailPanel) detailPanel.classList.toggle('hidden', !hasDiff);

    if (!hasDiff) {
      summary.innerHTML = `
        <strong>${store?.name || '-'}</strong>${store?.network ? ` • ${store.network}` : ''}<br>
        Total informado pelo promotor: <strong>${total} caixas</strong><br>
        <span class="tag ok">Quantidade correta para esta loja</span>
      `;
      return;
    }

    const diff = total - expectedTotal;
    const signal = diff > 0 ? '+' : '';
    summary.innerHTML = `
      <strong>${store?.name || '-'}</strong>${store?.network ? ` • ${store.network}` : ''}<br>
      Total informado pelo promotor: <strong>${total} caixas</strong><br>
      <span class="tag danger">Divergência de ${signal}${diff} caixa(s)</span>
    `;
    if (alertText) alertText.textContent = `Promotor informou ${total} caixas. Correto esperado: ${expectedTotal}. Diferença: ${signal}${diff}. Informe folhagens e bandejas. Correto para a loja: ${outbound.qty.folhagens} folhagens e ${outbound.qty.bandejas} bandejas.`;
  };

  outboundSelect.addEventListener('change', () => {
    if (totalInput) totalInput.value = '';
    clearReceiptInputs();
    updateSummary();
  });
  totalInput?.addEventListener('input', updateSummary);
  updateSummary();

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const outbound = getSelectedOutbound();
    if (!outbound) {
      showToast('Selecione a saída para confirmar.', 'error');
      return;
    }
    const totalReceived = safeInt(form.totalReceived.value);
    const expectedTotal = sumQty(outbound.qty);
    const hasDiff = totalReceived !== expectedTotal;
    const payload = {
      outboundId: form.outboundId.value,
      date: todayStr(),
      totalReceived,
      qty: hasDiff ? readQtyFromForm(form, 'recebimento') : outbound.qty,
      justification: form.justification.value.trim(),
    };
    const result = await persistMutation('CONFIRM_RECEIPT', payload, 'Recebimento confirmado com sucesso.');
    if (result.ok) {
      render();
    }
  });
}

function bindRecolhimentosEvents() {
  const form = document.getElementById('form-recolhimento');
  const routeSelect = document.getElementById('pickup-route');
  const networkSelect = document.getElementById('pickup-network');
  const driverSelect = document.getElementById('pickup-driver');
  const storeSelect = document.getElementById('pickup-store');
  const info = document.getElementById('pickup-stock-info');

  const refreshDriver = () => {
    if (currentUser.role === 'driver') {
      driverSelect.value = currentUser.id;
      driverSelect.setAttribute('readonly', 'readonly');
    } else {
      const route = getRouteById(routeSelect.value);
      if (route) driverSelect.value = route.driverId;
    }
  };

  const refreshStores = () => {
    const date = form.date.value || todayStr();
    const routeId = routeSelect.value;
    const network = networkSelect?.value || '';
    const allowedStores = appState.stores
      .filter((store) => getEffectiveRoute(store.id, date) === routeId)
      .filter((store) => !network || inferStoreNetwork(store) === network)
      .sort((a, b) => getStoreOptionLabel(a).localeCompare(getStoreOptionLabel(b), 'pt-BR'));
    storeSelect.innerHTML = `<option value="">Selecione</option>` + allowedStores.map((store) => `<option value="${store.id}">${escapeHtml(getStoreOptionLabel(store))}</option>`).join('');
    refreshDriver();
  };

  const refreshStoreInfo = () => {
    const storeId = storeSelect.value;
    if (!storeId) {
      info.innerHTML = 'Selecione a loja.';
      return;
    }
    const date = form.date.value || todayStr();
    const qty = getStoreStock(storeId);
    const deliveredToday = appState.movements.outbounds
      .filter((item) => isActiveMovement(item) && item.date === date && item.storeId === storeId)
      .reduce((acc, item) => acc + sumQty(item.qty), 0);
    info.innerHTML = `
      <strong>${getStoreById(storeId)?.name || '-'}</strong> • Entregue hoje: <strong>${deliveredToday} caixas</strong> • Disponível: <strong>${sumQty(qty)} caixas</strong>
    `;
  };

  routeSelect.addEventListener('change', refreshStores);
  networkSelect?.addEventListener('change', refreshStores);
  form.date.addEventListener('change', refreshStores);
  storeSelect.addEventListener('change', refreshStoreInfo);
  refreshStores();

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const payload = {
      date: form.date.value,
      routeId: form.routeId.value,
      driverId: form.driverId.value,
      storeId: form.storeId.value,
      totalQty: safeInt(form.totalQty.value),
      justification: form.justification.value.trim(),
    };
    const result = await persistMutation('CREATE_PICKUP', payload, 'Recolhimento registrado com sucesso.');
    if (result.ok) {
      render();
    }
  });
}


function bindCaixasOcupadasEvents() {
  const form = document.getElementById('form-caixas-ocupadas');
  if (!form) return;
  const routeSelect = document.getElementById('occupied-route');
  const networkSelect = document.getElementById('occupied-network');
  const driverSelect = document.getElementById('occupied-driver');
  const storeSelect = document.getElementById('occupied-store');
  const info = document.getElementById('occupied-store-info');

  const refreshDriver = () => {
    if (currentUser.role === 'driver') {
      driverSelect.value = currentUser.id;
      driverSelect.setAttribute('readonly', 'readonly');
    } else {
      const route = getRouteById(routeSelect.value);
      if (route) driverSelect.value = route.driverId;
    }
  };

  const refreshStores = () => {
    const date = form.date.value || todayStr();
    const routeId = routeSelect.value;
    const network = networkSelect?.value || '';
    let stores = appState.stores
      .filter((store) => getEffectiveRoute(store.id, date) === routeId)
      .filter((store) => !network || inferStoreNetwork(store) === network);
    if (currentUser.role === 'driver') {
      stores = stores.filter((store) => canUserSeeStore(store.id, currentUser, date, appState));
    }
    stores.sort((a, b) => getStoreOptionLabel(a).localeCompare(getStoreOptionLabel(b), 'pt-BR'));
    storeSelect.innerHTML = `<option value="">Selecione</option>` + stores.map((store) => `<option value="${store.id}">${escapeHtml(getStoreOptionLabel(store))}</option>`).join('');
    refreshDriver();
    refreshStoreInfo();
  };

  const refreshStoreInfo = () => {
    const storeId = storeSelect.value;
    if (!storeId) {
      info.innerHTML = 'Selecione a loja.';
      return;
    }
    const stock = getStoreStock(storeId);
    const activeOccupied = (appState.movements.occupiedBoxes || [])
      .filter((item) => isActiveMovement(item) && item.storeId === storeId)
      .reduce((acc, item) => acc + safeInt(item.totalQty), 0);
    info.innerHTML = `
      <strong>${getStoreById(storeId)?.name || '-'}</strong> • Saldo em loja: <strong>${sumQty(stock)} caixas</strong> • Já sinalizadas como ocupadas: <strong>${activeOccupied} caixas</strong>
    `;
  };

  routeSelect.addEventListener('change', refreshStores);
  networkSelect?.addEventListener('change', refreshStores);
  storeSelect.addEventListener('change', refreshStoreInfo);
  form.date.addEventListener('change', refreshStores);
  refreshStores();

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const payload = {
      date: form.date.value || todayStr(),
      routeId: form.routeId.value,
      driverId: form.driverId.value,
      storeId: form.storeId.value,
      totalQty: safeInt(form.totalQty.value),
      usedFor: form.usedFor.value.trim(),
      notes: form.notes.value.trim(),
    };
    const result = await persistMutation('CREATE_OCCUPIED_BOXES', payload, 'Caixas ocupadas registradas e alerta criado.');
    if (result.ok) render();
  });
}

function bindCaixasLiberadasEvents() {
  const form = document.getElementById('form-caixas-liberadas');
  if (!form) return;
  const info = document.getElementById('released-balance-info');
  const refresh = () => {
    const total = safeInt(form.totalInStore.value);
    const free = safeInt(form.freeQty.value);
    const occupied = safeInt(form.occupiedQty.value);
    const diff = total - (free + occupied);
    if (!info) return;
    if (diff === 0) {
      info.innerHTML = '<span class="tag ok">Fechado</span> Liberadas + ocupadas conferem com o total.';
    } else {
      info.innerHTML = `<span class="tag warn">Atenção</span> Falta ajustar ${Math.abs(diff)} caixa(s) para fechar com o total.`;
    }
  };
  ['totalInStore', 'freeQty', 'occupiedQty'].forEach((name) => {
    form[name]?.addEventListener('input', refresh);
  });
  refresh();

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const payload = {
      date: todayStr(),
      storeId: form.storeId.value,
      totalInStore: safeInt(form.totalInStore.value),
      freeQty: safeInt(form.freeQty.value),
      occupiedQty: safeInt(form.occupiedQty.value),
      notes: form.notes.value.trim(),
    };
    const result = await persistMutation('CREATE_RELEASED_BOXES', payload, 'Caixas liberadas salvas com sucesso.');
    if (result.ok) render();
  });
}


function bindRetornosEvents() {
  const form = document.getElementById('form-retorno');
  const routeSelect = document.getElementById('retorno-route');
  const driverSelect = document.getElementById('retorno-driver');
  const summary = document.getElementById('retorno-resumo');
  const totalInput = document.getElementById('retorno-total');
  const routeFilter = document.getElementById('retorno-pendente-rota-filter');
  const driverFilter = document.getElementById('retorno-pendente-motorista-filter');
  const searchFilter = document.getElementById('retorno-pendente-search');
  const pendingRows = Array.from(document.querySelectorAll('.retorno-pending-row'));
  const pendingCheckboxes = Array.from(document.querySelectorAll('.retorno-pending-checkbox'));
  const selectVisible = document.getElementById('retorno-select-visible');
  const selectedSummary = document.getElementById('retorno-selected-summary');
  const confirmSelectedBtn = document.getElementById('btn-confirm-selected-returns');
  const bulkJustification = document.getElementById('retorno-bulk-justification');

  const getSelectedReturnItems = () => pendingCheckboxes
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => ({
      date: checkbox.dataset.date,
      routeId: checkbox.dataset.routeId,
      driverId: checkbox.dataset.driverId,
      totalQty: safeInt(checkbox.dataset.total),
    }));

  const refreshBulkSelection = () => {
    const selected = getSelectedReturnItems();
    const selectedTotal = selected.reduce((acc, item) => acc + safeInt(item.totalQty), 0);
    if (selectedSummary) selectedSummary.textContent = `${selected.length} selecionado(s) • ${selectedTotal} caixas`;
    if (confirmSelectedBtn) confirmSelectedBtn.disabled = selected.length === 0;
    if (selectVisible) {
      const visibleBoxes = pendingCheckboxes.filter((checkbox) => {
        const row = checkbox.closest('tr');
        return row && row.style.display !== 'none';
      });
      selectVisible.checked = visibleBoxes.length > 0 && visibleBoxes.every((checkbox) => checkbox.checked);
      selectVisible.indeterminate = visibleBoxes.some((checkbox) => checkbox.checked) && !selectVisible.checked;
    }
  };

  const refreshPendingFilter = () => {
    const routeValue = routeFilter?.value || '';
    const driverValue = driverFilter?.value || '';
    const searchValue = normalizeText(searchFilter?.value || '');
    pendingRows.forEach((row) => {
      const matchesRoute = !routeValue || row.dataset.routeId === routeValue;
      const matchesDriver = !driverValue || row.dataset.driverId === driverValue;
      const matchesSearch = !searchValue || normalizeText(row.dataset.search || '').includes(searchValue);
      row.style.display = matchesRoute && matchesDriver && matchesSearch ? '' : 'none';
    });
    refreshBulkSelection();
  };
  routeFilter?.addEventListener('change', refreshPendingFilter);
  driverFilter?.addEventListener('change', refreshPendingFilter);
  searchFilter?.addEventListener('input', refreshPendingFilter);
  pendingCheckboxes.forEach((checkbox) => checkbox.addEventListener('change', refreshBulkSelection));
  selectVisible?.addEventListener('change', () => {
    const shouldCheck = selectVisible.checked;
    pendingCheckboxes.forEach((checkbox) => {
      const row = checkbox.closest('tr');
      if (row && row.style.display !== 'none') checkbox.checked = shouldCheck;
    });
    refreshBulkSelection();
  });
  confirmSelectedBtn?.addEventListener('click', async () => {
    const items = getSelectedReturnItems();
    if (!items.length) {
      showToast('Selecione pelo menos uma pendência de retorno.', 'warn');
      return;
    }
    const totalQty = items.reduce((acc, item) => acc + safeInt(item.totalQty), 0);
    const ok = window.confirm(`Confirmar ${items.length} retorno(s) selecionado(s) no CD, totalizando ${totalQty} caixas?`);
    if (!ok) return;
    const result = await persistMutation('CONFIRM_CD_RETURN_BULK', {
      items,
      justification: bulkJustification?.value?.trim() || '',
    }, 'Retornos selecionados confirmados no CD.');
    if (result.ok) render();
  });
  refreshPendingFilter();

  const refreshSummary = () => {
    const date = form.date.value || todayStr();
    const routeId = routeSelect.value;
    const driverId = driverSelect.value;
    if (!routeId || !driverId) {
      summary.innerHTML = 'Selecione rota e motorista.';
      return;
    }
    const returnDriver = getUserById(driverId);
    const isGoianiaTrunkReturn = routeId === GOIANIA_TRUNK_ROUTE_ID && isGoianiaTrunkUser(returnDriver);
    const pending = appState.movements.pickups.filter((item) => isActiveMovement(item) && item.date === date && item.routeId === routeId && item.driverId === driverId && !item.returnBatchId && !item.supportPointDropId);
    const pickupTotal = pending.reduce((acc, item) => acc + safeInt(item.totalQty ?? sumQty(item.qty)), 0);
    const freightTotal = isGoianiaTrunkReturn ? getPendingGoianiaFreightReturnsForCd(date, driverId).reduce((acc, item) => acc + safeInt(item.totalReceived), 0) : 0;
    const supportDropTotal = isGoianiaTrunkReturn ? getSupportPointDropTotalForDriver(date, driverId) : 0;
    const expectedTotal = Math.max(0, pickupTotal + freightTotal - supportDropTotal);
    const storeCount = new Set(pending.map((item) => item.storeId).filter(Boolean)).size;
    summary.innerHTML = `
      <strong>${getRouteById(routeId)?.name || '-'}</strong> • ${getUserById(driverId)?.name || '-'}<br>
      ${expectedTotal ? `Pendente para conferir no CD: <strong>${expectedTotal}</strong> caixas • ${pending.length} recolhimento(s) • ${storeCount} loja(s).` : 'Não há recolhimentos pendentes para essa seleção.'}
      ${freightTotal ? `<br><small class="muted">Inclui ${freightTotal} caixa(s) devolvidas por freteiros de Goiânia.</small>` : ''}
      ${supportDropTotal ? `<br><small class="muted">Desconta ${supportDropTotal} caixa(s) deixadas no ponto de apoio.</small>` : ''}
    `;
  };

  document.querySelectorAll('.btn-load-return-pending').forEach((button) => {
    button.addEventListener('click', () => {
      if (!form) return;
      form.date.value = button.dataset.date || todayStr();
      routeSelect.value = button.dataset.routeId || '';
      driverSelect.value = button.dataset.driverId || '';
      totalInput.value = button.dataset.total || '0';
      refreshSummary();
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
      totalInput.focus();
    });
  });

  routeSelect.addEventListener('change', refreshSummary);
  driverSelect.addEventListener('change', refreshSummary);
  form.date.addEventListener('change', refreshSummary);
  refreshSummary();

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const payload = {
      date: form.date.value,
      routeId: form.routeId.value,
      driverId: form.driverId.value,
      totalQty: safeInt(form.totalQty.value),
      justification: form.justification.value.trim(),
    };
    const returnDriver = getUserById(payload.driverId);
    const isGoianiaTrunkReturn = payload.routeId === GOIANIA_TRUNK_ROUTE_ID && isGoianiaTrunkUser(returnDriver);
    const pending = appState.movements.pickups.filter((item) => isActiveMovement(item) && item.date === payload.date && item.routeId === payload.routeId && item.driverId === payload.driverId && !item.returnBatchId && !item.supportPointDropId);
    const pickupTotal = pending.reduce((acc, item) => acc + safeInt(item.totalQty ?? sumQty(item.qty)), 0);
    const freightTotal = isGoianiaTrunkReturn ? getPendingGoianiaFreightReturnsForCd(payload.date, payload.driverId).reduce((acc, item) => acc + safeInt(item.totalReceived), 0) : 0;
    const supportDropTotal = isGoianiaTrunkReturn ? getSupportPointDropTotalForDriver(payload.date, payload.driverId) : 0;
    const expectedTotal = Math.max(0, pickupTotal + freightTotal - supportDropTotal);
    if (expectedTotal > 0 && expectedTotal !== payload.totalQty) {
      const confirmDivergence = window.confirm('A quantidade informada está diferente dos recolhimentos registrados pelo motorista. Deseja lançar mesmo assim e abrir uma divergência?');
      if (!confirmDivergence) return;
    }
    const result = await persistMutation('CONFIRM_CD_RETURN', payload, 'Retorno conferido com sucesso.');
    if (result.ok) {
      render();
    }
  });
}

function bindRotasEvents() {
  const routeMapDriverSelect = document.getElementById('mapa-rotas-motorista-select');
  const routeMapResult = document.getElementById('mapa-rotas-motorista-result');

  if (routeMapDriverSelect && routeMapResult) {
    const refreshRouteMap = () => {
      routeMapResult.innerHTML = renderDriverRouteMapHtml(routeMapDriverSelect.value);
    };
    routeMapDriverSelect.addEventListener('change', refreshRouteMap);
    refreshRouteMap();
  }

  const formDefaultRoute = document.getElementById('form-rota-padrao');
  const defaultStoreSearch = document.getElementById('rota-padrao-store-search');
  const defaultInfo = document.getElementById('rota-padrao-info');
  const defaultCount = document.getElementById('rota-padrao-count');
  const defaultStoreList = document.getElementById('rota-padrao-store-list');
  const defaultSelectVisibleBtn = document.getElementById('rota-padrao-select-visible');
  const defaultClearBtn = document.getElementById('rota-padrao-clear');
  const defaultStoreCheckboxes = Array.from(document.querySelectorAll('.rota-padrao-store-checkbox'));

  const getSelectedRouteStores = () => defaultStoreCheckboxes
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => getStoreById(checkbox.value))
    .filter(Boolean);

  const refreshDefaultInfo = () => {
    if (!defaultInfo) return;
    const selectedStores = getSelectedRouteStores();
    if (defaultCount) {
      defaultCount.textContent = `${selectedStores.length} ${selectedStores.length === 1 ? 'loja selecionada' : 'lojas selecionadas'}`;
    }
    if (!selectedStores.length) {
      defaultInfo.innerHTML = 'Selecione uma ou várias lojas para ver a rota atual.';
      return;
    }

    const sampleStores = selectedStores.slice(0, 8).map((store) => `
      <li><strong>${store.name}</strong> — normal: ${getRouteById(store.defaultRouteId)?.name || '-'} • domingo: ${getRouteById(store.sundayRouteId)?.name || 'Sem rota específica'}</li>
    `).join('');
    const remaining = selectedStores.length > 8 ? `<li>+ ${selectedStores.length - 8} lojas selecionadas</li>` : '';
    defaultInfo.innerHTML = `
      <strong>${selectedStores.length} ${selectedStores.length === 1 ? 'loja selecionada' : 'lojas selecionadas'}</strong>
      <ul class="selected-store-preview">${sampleStores}${remaining}</ul>
    `;
  };

  const filterDefaultStores = () => {
    if (!defaultStoreSearch || !defaultStoreList) return;
    const term = normalizeText(defaultStoreSearch.value);
    defaultStoreList.querySelectorAll('.multi-store-option').forEach((item) => {
      const visible = !term || String(item.dataset.search || '').includes(term);
      item.classList.toggle('hidden', !visible);
    });
  };

  if (formDefaultRoute && defaultStoreCheckboxes.length) {
    defaultStoreCheckboxes.forEach((checkbox) => checkbox.addEventListener('change', refreshDefaultInfo));
    defaultStoreSearch?.addEventListener('input', filterDefaultStores);
    defaultSelectVisibleBtn?.addEventListener('click', () => {
      defaultStoreCheckboxes.forEach((checkbox) => {
        if (!checkbox.closest('.multi-store-option')?.classList.contains('hidden')) checkbox.checked = true;
      });
      refreshDefaultInfo();
    });
    defaultClearBtn?.addEventListener('click', () => {
      defaultStoreCheckboxes.forEach((checkbox) => { checkbox.checked = false; });
      refreshDefaultInfo();
    });
    refreshDefaultInfo();

    formDefaultRoute.addEventListener('submit', async (event) => {
      event.preventDefault();
      const storeIds = getSelectedRouteStores().map((store) => store.id);
      if (!storeIds.length) {
        showToast('Selecione pelo menos uma loja para alterar a rota.', 'error');
        return;
      }
      const payload = {
        storeIds,
        routeId: formDefaultRoute.routeId.value,
        routeMode: formDefaultRoute.routeMode.value,
        notes: formDefaultRoute.notes.value.trim(),
      };
      const result = await persistMutation('UPDATE_STORE_ROUTE', payload, `${storeIds.length} ${storeIds.length === 1 ? 'loja atualizada' : 'lojas atualizadas'} com sucesso.`);
      if (result.ok) render();
    });
  }

  const formRouteDriver = document.getElementById('form-motorista-rota');
  const routeDriverSelect = document.getElementById('motorista-rota-select');
  const routeDriverInfo = document.getElementById('motorista-rota-info');

  const refreshRouteDriverInfo = () => {
    if (!routeDriverSelect || !routeDriverInfo) return;
    const route = getRouteById(routeDriverSelect.value);
    if (!route) {
      routeDriverInfo.innerHTML = 'Selecione uma rota para ver o motorista atual.';
      return;
    }
    routeDriverInfo.innerHTML = `
      <strong>${route.name}</strong><br>
      Motorista atual: <strong>${getUserById(route.driverId)?.name || '-'}</strong>
    `;
  };

  if (formRouteDriver && routeDriverSelect) {
    routeDriverSelect.addEventListener('change', refreshRouteDriverInfo);
    refreshRouteDriverInfo();

    formRouteDriver.addEventListener('submit', async (event) => {
      event.preventDefault();
      const payload = {
        routeId: formRouteDriver.routeId.value,
        driverId: formRouteDriver.driverId.value,
        notes: formRouteDriver.notes.value.trim(),
      };
      const result = await persistMutation('UPDATE_ROUTE_DRIVER', payload, 'Motorista da rota atualizado com sucesso.');
      if (result.ok) render();
    });
  }

  const form = document.getElementById('form-excecao-rota');
  const exceptionNetworkSelect = document.getElementById('excecao-rota-network');
  const exceptionStoreSelect = document.getElementById('excecao-rota-store');
  const routeSelect = document.getElementById('nova-rota-select');
  const driverSelect = document.getElementById('nova-rota-driver');

  if (!form || !routeSelect || !driverSelect) return;

  const refreshDriver = () => {
    const route = getRouteById(routeSelect.value);
    driverSelect.innerHTML = `<option value="">Selecione</option>`;
    if (route) {
      const driver = getUserById(route.driverId);
      driverSelect.innerHTML += `<option value="${route.driverId}">${driver?.name || '-'}</option>`;
      driverSelect.value = route.driverId;
    }
  };


  const refreshExceptionStoreOptions = () => {
    if (!exceptionStoreSelect) return;
    const selected = exceptionStoreSelect.value;
    const network = exceptionNetworkSelect?.value || '';
    const stores = getActiveStores()
      .filter((store) => !network || inferStoreNetwork(store) === network)
      .sort((a, b) => getStoreOptionLabel(a).localeCompare(getStoreOptionLabel(b), 'pt-BR'));
    exceptionStoreSelect.innerHTML = `<option value="">Selecione</option>` + stores
      .map((store) => `<option value="${store.id}" ${store.id === selected ? 'selected' : ''}>${escapeHtml(getStoreOptionLabel(store))}</option>`)
      .join('');
    if (selected && !stores.some((store) => store.id === selected)) {
      exceptionStoreSelect.value = '';
    }
  };

  exceptionNetworkSelect?.addEventListener('change', refreshExceptionStoreOptions);
  refreshExceptionStoreOptions();
  routeSelect.addEventListener('change', refreshDriver);
  refreshDriver();

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const payload = {
      date: form.date.value,
      storeId: form.storeId.value,
      newRouteId: form.newRouteId.value,
      newDriverId: form.newDriverId.value,
      reason: form.reason.value,
      notes: form.notes.value.trim(),
    };
    const result = await persistMutation('CREATE_ROUTE_EXCEPTION', payload, 'Troca temporária de rota salva.');
    if (result.ok) {
      render();
    }
  });
}

function bindUsuariosEvents() {
  if (currentUser.role !== 'admin') return;

  const form = document.getElementById('form-novo-usuario');
  const roleSelect = document.getElementById('novo-usuario-role');
  const storeWrap = document.getElementById('novo-usuario-store-wrap');
  const routeWrap = document.getElementById('novo-usuario-route-wrap');
  const boxWrap = document.getElementById('novo-usuario-box-wrap');

  const refreshTargetFields = () => {
    if (!roleSelect || !storeWrap || !routeWrap) return;
    storeWrap.classList.toggle('hidden', roleSelect.value !== 'promoter');
    routeWrap.classList.toggle('hidden', roleSelect.value !== 'driver');
    boxWrap?.classList.toggle('hidden', roleSelect.value !== 'cd');
  };

  if (roleSelect) {
    roleSelect.addEventListener('change', refreshTargetFields);
    refreshTargetFields();
  }

  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const payload = {
        name: form.name.value,
        role: form.role.value,
        username: form.username.value,
        password: form.password.value,
        storeId: form.storeId?.value || '',
        routeId: form.routeId?.value || '',
        allowedBoxTypes: Array.from(document.querySelectorAll('.new-user-box-permission:checked')).map((item) => item.value),
      };
      const result = await persistMutation('CREATE_USER', payload, 'Usuário criado com sucesso.');
      if (result.ok) render();
    });
  }

  const reliefAdminForm = document.getElementById('form-folguista-rota-adm');
  if (reliefAdminForm) {
    reliefAdminForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const payload = {
        userId: reliefAdminForm.userId.value,
        date: reliefAdminForm.date.value || todayStr(),
        routeId: reliefAdminForm.routeId.value,
        reason: reliefAdminForm.reason.value.trim(),
      };
      const result = await persistMutation('SET_RELIEF_DRIVER_ROUTE', payload, 'Rota do folguista definida pelo ADM.');
      if (result.ok) render();
    });
  }

  const refreshUserTargetRow = (userId) => {
    const role = document.querySelector(`.user-role-select[data-user-id="${userId}"]`)?.value;
    const rowUser = getUserById(userId);
    const reliefDriver = role === 'driver' && isReliefDriver(rowUser);
    const storeSelect = document.querySelector(`.user-store-select[data-user-id="${userId}"]`);
    const routeSelect = document.querySelector(`.user-route-select[data-user-id="${userId}"]`);
    const staticTarget = document.querySelector(`.user-target-static[data-user-id="${userId}"]`);
    storeSelect?.classList.toggle('hidden', role !== 'promoter');
    routeSelect?.classList.toggle('hidden', role !== 'driver' || reliefDriver);
    staticTarget?.classList.toggle('hidden', role === 'promoter' || (role === 'driver' && !reliefDriver));
    if (staticTarget) {
      staticTarget.textContent = reliefDriver ? getUserAccessTarget(rowUser) : role === 'admin' ? 'ADM geral' : role === 'cd' ? 'CD' : role === 'viewer' ? 'Gestão / Visualização' : '-';
    }
  };

  document.querySelectorAll('.user-role-select').forEach((select) => {
    select.addEventListener('change', () => refreshUserTargetRow(select.dataset.userId));
    refreshUserTargetRow(select.dataset.userId);
  });

  document.querySelectorAll('.btn-save-user').forEach((button) => {
    button.addEventListener('click', async () => {
      const userId = button.dataset.userId;
      const payload = {
        userId,
        name: document.querySelector(`.user-name-input[data-user-id="${userId}"]`)?.value || '',
        role: document.querySelector(`.user-role-select[data-user-id="${userId}"]`)?.value || '',
        username: document.querySelector(`.user-login-input[data-user-id="${userId}"]`)?.value || '',
        storeId: document.querySelector(`.user-store-select[data-user-id="${userId}"]`)?.value || '',
        routeId: document.querySelector(`.user-route-select[data-user-id="${userId}"]`)?.value || '',
        allowedViews: Array.from(document.querySelectorAll(`.user-view-permission[data-user-id="${userId}"]:checked`)).map((item) => item.value),
        allowedBoxTypes: Array.from(document.querySelectorAll(`.user-box-permission[data-user-id="${userId}"]:checked`)).map((item) => item.value),
      };
      const result = await persistMutation('UPDATE_USER_ACCOUNT', payload, 'Usuário atualizado com sucesso.');
      if (result.ok) render();
    });
  });

  const selectedUsersCount = document.getElementById('selected-users-count');
  const getSelectedUserIds = () => Array.from(document.querySelectorAll('.user-delete-check:checked')).map((item) => item.value);
  const updateSelectedUsersCount = () => {
    if (selectedUsersCount) selectedUsersCount.textContent = `${getSelectedUserIds().length} selecionado(s)`;
  };

  document.querySelectorAll('.user-delete-check').forEach((checkbox) => {
    checkbox.addEventListener('change', updateSelectedUsersCount);
  });

  document.getElementById('btn-select-all-users')?.addEventListener('click', () => {
    document.querySelectorAll('.user-delete-check:not(:disabled)').forEach((checkbox) => {
      checkbox.checked = true;
    });
    updateSelectedUsersCount();
  });

  document.getElementById('btn-clear-user-selection')?.addEventListener('click', () => {
    document.querySelectorAll('.user-delete-check').forEach((checkbox) => {
      checkbox.checked = false;
    });
    updateSelectedUsersCount();
  });

  document.getElementById('btn-delete-selected-users')?.addEventListener('click', async () => {
    const userIds = getSelectedUserIds();
    if (!userIds.length) {
      showToast('Selecione pelo menos um usuário para excluir.', 'error');
      return;
    }
    const names = userIds.map((id) => getUserById(id)?.name || id).join(', ');
    const confirmed = window.confirm(`Excluir ${userIds.length} usuário(s)?\n${names}\n\nEssa ação remove os acessos selecionados, mas não apaga lançamentos antigos.`);
    if (!confirmed) return;
    const reason = window.prompt('Informe o motivo da exclusão:');
    if (!String(reason || '').trim()) {
      showToast('Motivo obrigatório para excluir usuários.', 'error');
      return;
    }
    const result = await persistMutation('DELETE_USERS', { userIds, reason }, 'Usuário(s) excluído(s) com sucesso.');
    if (result.ok) render();
  });

  updateSelectedUsersCount();
}

function bindLojasEvents() {
  const filter = document.getElementById('lojas-filter-rede');
  if (filter) {
    filter.addEventListener('change', () => {
      document.querySelectorAll('#lojas-table tbody tr').forEach((row) => {
        row.classList.toggle('hidden', !!filter.value && row.dataset.network !== filter.value);
      });
    });
  }

  const conciliationForm = document.getElementById('form-conciliacao-loja');
  if (conciliationForm) {
    const storeSelect = conciliationForm.storeId;
    const fillConciliationFields = () => {
      const store = getStoreById(storeSelect.value);
      if (!store) return;
      conciliationForm.network.value = store.network || inferStoreNetwork(store) || '';
      conciliationForm.separator.value = getStoreSeparator(store) || '';
      if (conciliationForm.hasFixedPromoter) conciliationForm.hasFixedPromoter.value = storeHasFixedPromoter(store) ? 'yes' : 'no';
      if (conciliationForm.validationMode) conciliationForm.validationMode.value = getStoreValidationMode(store);
    };
    storeSelect.addEventListener('change', fillConciliationFields);
    conciliationForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const payload = {
        storeId: conciliationForm.storeId.value,
        network: conciliationForm.network.value,
        separator: conciliationForm.separator.value,
        hasFixedPromoter: conciliationForm.hasFixedPromoter?.value || 'yes',
        validationMode: conciliationForm.validationMode?.value || 'driver_promoter',
      };
      const result = await persistMutation('UPDATE_STORE_LINKS', payload, 'Conciliação salva com sucesso.');
      if (result.ok) render();
    });
  }

  document.querySelectorAll('.btn-delete-store').forEach((button) => {
    button.addEventListener('click', async () => {
      const store = getStoreById(button.dataset.id);
      if (!store) return;
      const confirmDelete = window.confirm(`Excluir ${formatStoreNameForUser(store.name)} da lista ativa? Essa ação remove a loja dos lançamentos futuros, mas mantém o histórico já registrado.`);
      if (!confirmDelete) return;
      const reason = window.prompt('Informe o motivo da exclusão da loja:');
      if (reason === null) return;
      const result = await persistMutation('DELETE_STORE', { storeId: store.id, reason }, 'Loja removida da lista ativa.');
      if (result.ok) render();
    });
  });

  document.querySelectorAll('.store-promoter-fixed-select').forEach((select) => {
    select.addEventListener('change', async () => {
      const store = getStoreById(select.dataset.id);
      if (!store) return;
      const validationSelect = document.querySelector(`.store-validation-select[data-id="${store.id}"]`);
      let validationMode = validationSelect?.value || getStoreValidationMode(store);
      if (select.value === 'no') validationMode = 'driver_only';
      if (select.value === 'yes' && validationMode === 'driver_only') validationMode = 'driver_promoter';
      const result = await persistMutation('UPDATE_STORE_VALIDATION_SETTINGS', {
        storeId: store.id,
        hasFixedPromoter: select.value,
        validationMode,
      }, 'Validação da loja atualizada.');
      if (result.ok) render();
    });
  });

  document.querySelectorAll('.store-validation-select').forEach((select) => {
    select.addEventListener('change', async () => {
      const store = getStoreById(select.dataset.id);
      if (!store) return;
      const hasFixedPromoter = select.value === 'driver_only' ? 'no' : 'yes';
      const result = await persistMutation('UPDATE_STORE_VALIDATION_SETTINGS', {
        storeId: store.id,
        hasFixedPromoter,
        validationMode: select.value,
      }, 'Validação da loja atualizada.');
      if (result.ok) render();
    });
  });

  const form = document.getElementById('form-nova-loja');
  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const payload = {
        name: form.name.value,
        network: form.network.value,
        routeId: form.routeId.value,
        separator: form.separator?.value || '',
        highStockLimit: form.highStockLimit.value,
        hasFixedPromoter: form.hasFixedPromoter?.value || 'yes',
        validationMode: form.validationMode?.value || 'driver_promoter',
        notes: form.notes.value,
      };
      const result = await persistMutation('CREATE_STORE', payload, 'Loja cadastrada com sucesso.');
      if (result.ok) render();
    });
  }
}

function bindCargaGoianiaEvents() {
  const form = document.getElementById('form-carga-goiania');
  if (!form) return;
  const summary = document.getElementById('carga-goiania-resumo');
  const totalInput = document.getElementById('carga-goiania-total');
  const detailPanel = document.getElementById('carga-goiania-detalhe');
  const alertText = document.getElementById('carga-goiania-alerta');

  const refresh = () => {
    const date = form.date.value || todayStr();
    const expected = getGoianiaExpectedQty(date);
    const expectedTotal = sumQty(expected);
    const total = safeInt(totalInput.value);
    summary.innerHTML = `Soma da data selecionada: <strong>${expectedTotal} caixas</strong> • Folhagens: <strong>${expected.folhagens}</strong> • Bandejas: <strong>${expected.bandejas}</strong>`;
    const hasDiff = total > 0 && total !== expectedTotal;
    detailPanel.classList.toggle('hidden', !hasDiff);
    if (hasDiff) {
      const diff = total - expectedTotal;
      const signal = diff > 0 ? '+' : '';
      alertText.textContent = `Caminhão informado com ${total} caixas. Soma CD/Galpão: ${expectedTotal}. Diferença: ${signal}${diff}. Correto esperado: ${expected.folhagens} folhagens e ${expected.bandejas} bandejas.`;
      BOX_TYPES.forEach((item) => {
        const input = form.querySelector(`#carga-goiania-${item.key}`);
        if (input && !safeInt(input.value)) input.value = expected[item.key];
      });
    }
  };
  form.date.addEventListener('change', refresh);
  totalInput.addEventListener('input', refresh);
  refresh();

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const expected = getGoianiaExpectedQty(form.date.value || todayStr());
    const totalLoaded = safeInt(form.totalLoaded.value);
    const hasDiff = totalLoaded !== sumQty(expected);
    const payload = {
      date: form.date.value,
      driverId: form.driverId.value,
      totalLoaded,
      folhagens: hasDiff ? form.querySelector('#carga-goiania-folhagens')?.value : expected.folhagens,
      bandejas: hasDiff ? form.querySelector('#carga-goiania-bandejas')?.value : expected.bandejas,
      notes: form.notes.value.trim(),
    };
    const result = await persistMutation('CONFIRM_GOIANIA_LOAD', payload, 'Carga Goiânia validada.');
    if (result.ok) render();
  });
}

function bindDistribuicaoGoianiaEvents() {
  const form = document.getElementById('form-distribuicao-goiania');
  if (!form) return;
  const outboundSelect = document.getElementById('goiania-transfer-outbound');
  const summary = document.getElementById('goiania-transfer-resumo');
  const refresh = () => {
    const outbound = appState.movements.outbounds.find((item) => item.id === outboundSelect.value);
    if (!outbound) {
      summary.innerHTML = 'Selecione uma carga para preencher o total por categoria.';
      return;
    }
    summary.innerHTML = `<strong>${getStoreById(outbound.storeId)?.name || '-'}</strong><br>Total lançado pelo CD: <strong>${sumQty(outbound.qty)} caixas</strong> • ${outbound.qty.folhagens} folhagens • ${outbound.qty.bandejas} bandejas.`;
    BOX_TYPES.forEach((item) => {
      const input = form.querySelector(`#goiania-transfer-${item.key}`);
      if (input) input.value = outbound.qty[item.key];
    });
  };
  outboundSelect.addEventListener('change', refresh);
  refresh();

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const payload = {
      date: form.date.value,
      driverId: form.driverId.value,
      outboundId: form.outboundId.value,
      qty: readQtyFromForm(form, 'goiania-transfer'),
      notes: form.notes.value.trim(),
    };
    const result = await persistMutation('CREATE_GOIANIA_TRANSFER', payload, 'Distribuição Goiânia registrada.');
    if (result.ok) render();
  });
  bindGoianiaFreightReturnEvents();
  bindSupportPointEvents();
}


function bindGoianiaFreightReturnEvents() {
  const form = document.getElementById('form-goiania-frete-retorno');
  if (!form) return;
  const driverSelect = document.getElementById('goiania-frete-driver');
  const summary = document.getElementById('goiania-frete-retorno-resumo');
  const refresh = () => {
    const date = form.date.value || todayStr();
    const driverId = driverSelect.value;
    if (!driverId) {
      summary.innerHTML = 'Selecione o freteiro para conferir as caixas vazias que ele recolheu nas lojas.';
      return;
    }
    summary.innerHTML = `<strong>${getUserById(driverId)?.name || '-'}</strong> possui recolhimentos pendentes para devolver ao Vinicius/Sebastião.`;
  };
  form.date.addEventListener('change', refresh);
  driverSelect.addEventListener('change', refresh);
  refresh();
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const payload = {
      date: form.date.value || todayStr(),
      fromDriverId: form.fromDriverId.value,
      totalReceived: safeInt(form.totalReceived.value),
      notes: form.notes.value.trim(),
    };
    const expected = getGoianiaFreightPendingPickupTotal(payload.date, payload.fromDriverId);
    if (expected > 0 && expected !== payload.totalReceived) {
      const ok = window.confirm('A quantidade devolvida está diferente do que o freteiro recolheu nas lojas. Deseja lançar mesmo assim e abrir divergência?');
      if (!ok) return;
    }
    const result = await persistMutation('CONFIRM_GOIANIA_FREIGHT_RETURN', payload, 'Devolução do frete registrada.');
    if (result.ok) render();
  });
}

function bindSupportPointEvents() {
  const form = document.getElementById('form-ponto-apoio');
  if (!form) return;
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const payload = {
      date: form.date.value || todayStr(),
      action: form.action.value,
      storeId: form.storeId.value || SUPPORT_POINT_STORE_ID,
      totalQty: safeInt(form.totalQty.value),
      notes: form.notes.value.trim(),
    };
    const result = await persistMutation('CREATE_SUPPORT_POINT_MOVEMENT', payload, 'Movimento no ponto de apoio registrado.');
    if (result.ok) render();
  });
}

function bindConfigEvents() {
  const form = document.getElementById('form-config');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const manualBaselineByWeekday = {};
    Object.keys(appState.settings.manualBaselineByWeekday).forEach((weekday) => {
      manualBaselineByWeekday[weekday] = safeInt(form[`weekday_${weekday}`].value);
    });
    const storeLimits = {};
    getActiveStores().forEach((store) => {
      storeLimits[store.id] = safeInt(form[`limit_${store.id}`].value);
    });

    const payload = {
      safetyMargin: safeInt(form.safetyMargin.value),
      manualBaselineByWeekday,
      storeLimits,
    };
    const result = await persistMutation('UPDATE_SETTINGS', payload, 'Configurações atualizadas.');
    if (result.ok) render();
  });
}


function bindInventarioEvents() {
  const fillQtyInputs = (prefix, qty) => {
    BOX_TYPES.forEach((item) => {
      const input = document.getElementById(`${prefix}-${item.key}`);
      if (input) input.value = safeInt(qty?.[item.key]);
    });
  };

  const formMandatory = document.getElementById('form-programar-inventario');
  if (formMandatory) {
    const mandatoryNetwork = document.getElementById('mandatory-inventory-network');
    const mandatoryStore = document.getElementById('mandatory-inventory-store');
    const refreshMandatoryStoreOptions = () => {
      if (!mandatoryStore) return;
      const selected = mandatoryStore.value;
      const network = mandatoryNetwork?.value || '';
      const stores = getActiveStores()
        .filter((store) => !network || inferStoreNetwork(store) === network)
        .sort((a, b) => getStoreOptionLabel(a).localeCompare(getStoreOptionLabel(b), 'pt-BR'));
      mandatoryStore.innerHTML = `<option value="">Selecione</option>` + stores
        .map((store) => `<option value="${store.id}" ${store.id === selected ? 'selected' : ''}>${escapeHtml(getStoreOptionLabel(store))}</option>`)
        .join('');
      if (selected && !stores.some((store) => store.id === selected)) {
        mandatoryStore.value = '';
      }
    };
    mandatoryNetwork?.addEventListener('change', refreshMandatoryStoreOptions);
    refreshMandatoryStoreOptions();
    formMandatory.addEventListener('submit', async (event) => {
      event.preventDefault();
      const payload = {
        date: formMandatory.date.value,
        scope: formMandatory.scope.value,
        network: formMandatory.network.value,
        storeId: formMandatory.storeId.value,
        notes: formMandatory.notes.value.trim(),
      };
      const result = await persistMutation('SCHEDULE_MANDATORY_INVENTORY', payload, 'Inventário obrigatório programado.');
      if (result.ok) render();
    });
  }

  const formCd = document.getElementById('form-inventario-cd');
  if (formCd) {
    formCd.addEventListener('submit', async (event) => {
      event.preventDefault();
      const payload = {
        location: 'cd',
        date: todayStr(),
        qty: readQtyFromForm(formCd, 'inventario-cd'),
        notes: formCd.notes.value.trim(),
      };
      const result = await persistMutation('APPLY_INVENTORY', payload, 'Inventário do CD aplicado com sucesso.');
      if (result.ok) render();
    });
  }

  const formStore = document.getElementById('form-inventario-loja');
  const storeNetworkSelect = document.getElementById('inventario-store-network');
  const storeSelect = document.getElementById('inventario-store');
  const storeInfo = document.getElementById('inventario-store-current');
  const refreshStoreInventory = () => {
    if (!formStore || !storeSelect || !storeInfo) return;
    const storeId = storeSelect.value;
    if (!storeId) {
      storeInfo.innerHTML = 'Selecione uma loja para carregar o saldo atual do sistema.';
      fillQtyInputs('inventario-loja', emptyQty());
      return;
    }
    const qty = getStoreStock(storeId);
    storeInfo.innerHTML = `
      <strong>${getStoreById(storeId)?.name || '-'}</strong><br>
      Saldo atual no sistema: <strong>${sumQty(qty)} caixas</strong><br>
      ${BOX_TYPES.map((item) => `${item.label}: <strong>${qty[item.key]}</strong>`).join(' • ')}
    `;
    fillQtyInputs('inventario-loja', qty);
  };

  const refreshInventoryStoreOptions = () => {
    if (!formStore || !storeSelect) return;
    const selected = storeSelect.value;
    const network = storeNetworkSelect?.value || '';
    const stores = getActiveStores()
      .filter((store) => !network || inferStoreNetwork(store) === network)
      .sort((a, b) => getStoreOptionLabel(a).localeCompare(getStoreOptionLabel(b), 'pt-BR'));
    storeSelect.innerHTML = `<option value="">Selecione</option>` + stores
      .map((store) => `<option value="${store.id}" ${store.id === selected ? 'selected' : ''}>${escapeHtml(getStoreOptionLabel(store))}</option>`)
      .join('');
    if (selected && !stores.some((store) => store.id === selected)) {
      storeSelect.value = '';
    }
    refreshStoreInventory();
  };
  if (formStore && storeSelect) {
    storeNetworkSelect?.addEventListener('change', refreshInventoryStoreOptions);
    storeSelect.addEventListener('change', refreshStoreInventory);
    refreshInventoryStoreOptions();
    formStore.addEventListener('submit', async (event) => {
      event.preventDefault();
      const payload = {
        location: 'store',
        date: todayStr(),
        storeId: formStore.storeId.value,
        qty: readQtyFromForm(formStore, 'inventario-loja'),
        notes: formStore.notes.value.trim(),
      };
      const result = await persistMutation('APPLY_INVENTORY', payload, 'Inventário da loja aplicado com sucesso.');
      if (result.ok) render();
    });
  }

  const formBulkStore = document.getElementById('form-inventario-massa');
  const bulkNetworkSelect = document.getElementById('bulk-inventory-network');
  const bulkSearchInput = document.getElementById('bulk-inventory-search');
  const bulkRows = document.getElementById('bulk-inventory-rows');
  const bulkSummary = document.getElementById('bulk-inventory-summary');
  const bulkSelectAll = document.getElementById('bulk-inventory-select-all');

  const getBulkFilteredStores = () => {
    const network = bulkNetworkSelect?.value || '';
    const search = normalizeText(bulkSearchInput?.value || '');
    return getActiveStores()
      .filter((store) => !network || inferStoreNetwork(store) === network)
      .filter((store) => {
        if (!search) return true;
        const route = getRouteById(getEffectiveRoute(store.id, todayStr()));
        const haystack = normalizeText(`${store.name || ''} ${getStoreOptionLabel(store)} ${inferStoreNetwork(store)} ${route?.name || ''}`);
        return haystack.includes(search);
      })
      .sort((a, b) => getStoreOptionLabel(a).localeCompare(getStoreOptionLabel(b), 'pt-BR'));
  };

  const updateBulkRowDiff = (row) => {
    if (!row) return;
    const current = {
      folhagens: safeInt(row.dataset.currentFolhagens),
      bandejas: safeInt(row.dataset.currentBandejas),
    };
    const counted = {
      folhagens: safeInt(row.querySelector('[data-box="folhagens"]')?.value),
      bandejas: safeInt(row.querySelector('[data-box="bandejas"]')?.value),
    };
    const diff = qtyDiff(counted, current);
    const changed = hasQtyDifference(current, counted);
    row.dataset.changed = changed ? '1' : '0';
    const diffCell = row.querySelector('.bulk-inventory-diff');
    if (diffCell) {
      diffCell.innerHTML = changed ? `<strong>${formatSignedQtyCompact(diff)}</strong>` : '<span class="muted">Sem alteração</span>';
    }
    if (changed) {
      row.classList.add('bulk-inventory-changed');
      const checkbox = row.querySelector('.bulk-inventory-check');
      if (checkbox) checkbox.checked = true;
    } else {
      row.classList.remove('bulk-inventory-changed');
    }
  };

  const refreshBulkSummary = () => {
    if (!bulkSummary || !bulkRows) return;
    const rows = [...bulkRows.querySelectorAll('.bulk-inventory-row')];
    const selected = rows.filter((row) => row.querySelector('.bulk-inventory-check')?.checked).length;
    const changed = rows.filter((row) => row.dataset.changed === '1').length;
    bulkSummary.innerHTML = `Lojas carregadas: <strong>${rows.length}</strong> • Alteradas: <strong>${changed}</strong> • Selecionadas para aplicar: <strong>${selected}</strong>`;
  };

  const renderBulkInventoryRows = () => {
    if (!bulkRows) return;
    const stores = getBulkFilteredStores();
    if (!stores.length) {
      bulkRows.innerHTML = '<tr><td colspan="8" class="center muted">Nenhuma loja encontrada para o filtro selecionado.</td></tr>';
      refreshBulkSummary();
      return;
    }
    bulkRows.innerHTML = stores.map((store) => {
      const qty = getStoreStock(store.id);
      const route = getRouteById(getEffectiveRoute(store.id, todayStr()));
      return `
        <tr class="bulk-inventory-row" data-store-id="${store.id}" data-current-folhagens="${safeInt(qty.folhagens)}" data-current-bandejas="${safeInt(qty.bandejas)}" data-changed="0">
          <td><input type="checkbox" class="bulk-inventory-check" /></td>
          <td><strong>${escapeHtml(store.name)}</strong></td>
          <td><small>${escapeHtml(inferStoreNetwork(store))}<br>${escapeHtml(route?.name || '-')}</small></td>
          <td>${safeInt(qty.folhagens)}</td>
          <td>${safeInt(qty.bandejas)}</td>
          <td><input type="number" min="0" step="1" data-box="folhagens" value="${safeInt(qty.folhagens)}" /></td>
          <td><input type="number" min="0" step="1" data-box="bandejas" value="${safeInt(qty.bandejas)}" /></td>
          <td class="bulk-inventory-diff"><span class="muted">Sem alteração</span></td>
        </tr>
      `;
    }).join('');
    bulkRows.querySelectorAll('.bulk-inventory-row input[type="number"]').forEach((input) => {
      input.addEventListener('input', () => {
        updateBulkRowDiff(input.closest('.bulk-inventory-row'));
        refreshBulkSummary();
      });
    });
    bulkRows.querySelectorAll('.bulk-inventory-check').forEach((input) => {
      input.addEventListener('change', refreshBulkSummary);
    });
    if (bulkSelectAll) bulkSelectAll.checked = false;
    refreshBulkSummary();
  };

  if (formBulkStore) {
    document.getElementById('btn-bulk-inventory-load')?.addEventListener('click', renderBulkInventoryRows);
    bulkNetworkSelect?.addEventListener('change', renderBulkInventoryRows);
    bulkSearchInput?.addEventListener('input', renderBulkInventoryRows);
    bulkSelectAll?.addEventListener('change', () => {
      bulkRows?.querySelectorAll('.bulk-inventory-check').forEach((checkbox) => {
        checkbox.checked = bulkSelectAll.checked;
      });
      refreshBulkSummary();
    });
    document.getElementById('btn-bulk-inventory-select-changed')?.addEventListener('click', () => {
      bulkRows?.querySelectorAll('.bulk-inventory-row').forEach((row) => {
        const checkbox = row.querySelector('.bulk-inventory-check');
        if (checkbox) checkbox.checked = row.dataset.changed === '1';
      });
      if (bulkSelectAll) bulkSelectAll.checked = false;
      refreshBulkSummary();
    });
    document.getElementById('btn-bulk-inventory-clear-selection')?.addEventListener('click', () => {
      bulkRows?.querySelectorAll('.bulk-inventory-check').forEach((checkbox) => {
        checkbox.checked = false;
      });
      if (bulkSelectAll) bulkSelectAll.checked = false;
      refreshBulkSummary();
    });
    renderBulkInventoryRows();
    formBulkStore.addEventListener('submit', async (event) => {
      event.preventDefault();
      const rows = [...(bulkRows?.querySelectorAll('.bulk-inventory-row') || [])];
      const selectedRows = rows.filter((row) => row.querySelector('.bulk-inventory-check')?.checked);
      if (!selectedRows.length) {
        showToast('Selecione pelo menos uma loja para aplicar o inventário.', 'error');
        return;
      }
      const notes = formBulkStore.notes.value.trim();
      if (notes.length < 4) {
        showToast('Informe o motivo do inventário em massa.', 'error');
        return;
      }
      const unchanged = selectedRows.filter((row) => row.dataset.changed !== '1').length;
      if (unchanged && !window.confirm(`${unchanged} loja(s) selecionada(s) estão sem alteração de saldo. Deseja registrar mesmo assim?`)) {
        return;
      }
      const items = selectedRows.map((row) => ({
        storeId: row.dataset.storeId,
        qty: {
          folhagens: safeInt(row.querySelector('[data-box="folhagens"]')?.value),
          bandejas: safeInt(row.querySelector('[data-box="bandejas"]')?.value),
        },
      }));
      const result = await persistMutation('APPLY_BULK_STORE_INVENTORY', {
        date: todayStr(),
        network: bulkNetworkSelect?.value || '',
        notes,
        items,
      }, 'Inventário em massa aplicado com sucesso.');
      if (result.ok) render();
    });
  }

  const formPromoter = document.getElementById('form-inventario-promotor');
  const promoterStoreSelect = document.getElementById('inventario-promotor-store');
  const promoterStoreInfo = document.getElementById('inventario-promotor-current');
  const refreshPromoterStoreInventory = () => {
    if (!formPromoter || !promoterStoreInfo) return;
    const storeId = formPromoter.storeId?.value;
    if (!storeId) return;
    const qty = getStoreStock(storeId);
    promoterStoreInfo.innerHTML = `
      <strong>${getStoreById(storeId)?.name || '-'}</strong><br>
      Saldo atual no sistema: <strong>${sumQty(qty)}</strong> caixas<br>
      ${BOX_TYPES.map((item) => `${item.label}: <strong>${qty[item.key]}</strong>`).join(' • ')}
    `;
    fillQtyInputs('inventario-promotor', qty);
  };
  if (formPromoter) {
    promoterStoreSelect?.addEventListener('change', refreshPromoterStoreInventory);
    refreshPromoterStoreInventory();
    formPromoter.addEventListener('submit', async (event) => {
      event.preventDefault();
      const payload = {
        location: 'store',
        date: todayStr(),
        storeId: formPromoter.storeId.value,
        qty: readQtyFromForm(formPromoter, 'inventario-promotor'),
        notes: formPromoter.notes.value.trim(),
      };
      const result = await persistMutation('APPLY_INVENTORY', payload, 'Inventário da loja salvo com sucesso.');
      if (result.ok) render();
    });
  }

  document.querySelectorAll('.btn-cancel-mandatory-pending').forEach((button) => {
    button.addEventListener('click', async () => {
      const reason = window.prompt('Informe o motivo para cancelar esta pendência de inventário:', 'Cancelado pelo ADM.');
      if (reason === null) return;
      const cleanReason = reason.trim();
      if (cleanReason.length < 4) {
        showToast('Informe um motivo para cancelar a pendência.', 'error');
        return;
      }
      const result = await persistMutation('CANCEL_MANDATORY_INVENTORY_PENDING', {
        scheduleId: button.dataset.scheduleId,
        storeId: button.dataset.storeId,
        reason: cleanReason,
      }, 'Pendência de inventário cancelada.');
      if (result.ok) render();
    });
  });

  document.querySelectorAll('.btn-resolve-divergence').forEach((button) => {
    button.addEventListener('click', async () => {
      const result = await persistMutation('RESOLVE_DIVERGENCE', { id: button.dataset.id, resolution: 'Divergência de inventário tratada pela gestão.' }, 'Divergência resolvida.');
      if (result.ok) render();
    });
  });
}

function bindDivergenciasEvents() {
  const filterForm = document.getElementById('form-divergence-filter');
  if (filterForm) {
    filterForm.addEventListener('submit', (event) => {
      event.preventDefault();
      viewFilters.divergenciaOwner = filterForm.elements.owner?.value || '';
      viewFilters.divergenciaType = filterForm.elements.type?.value || '';
      viewFilters.divergenciaDate = filterForm.elements.date?.value || '';
      viewFilters.divergenciaSearch = filterForm.elements.search?.value || '';
      render();
    });
  }

  document.getElementById('btn-clear-divergence-filter')?.addEventListener('click', () => {
    viewFilters.divergenciaOwner = '';
    viewFilters.divergenciaType = '';
    viewFilters.divergenciaDate = '';
    viewFilters.divergenciaSearch = '';
    render();
  });

  document.getElementById('select-all-divergences')?.addEventListener('change', (event) => {
    document.querySelectorAll('.bulk-divergence-checkbox').forEach((checkbox) => {
      checkbox.checked = event.currentTarget.checked;
    });
  });

  const bulkForm = document.getElementById('form-bulk-divergences');
  if (bulkForm) {
    bulkForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const ids = [...document.querySelectorAll('.bulk-divergence-checkbox:checked')].map((input) => input.value);
      if (!ids.length) {
        showToast('Selecione pelo menos uma divergência.', 'error');
        return;
      }
      const action = bulkForm.elements.action?.value || 'regularizacao_administrativa';
      const reason = String(bulkForm.elements.reason?.value || '').trim();
      if (reason.length < 8) {
        showToast('Informe um motivo obrigatório mais detalhado.', 'error');
        return;
      }
      const message = `Confirmar ação em lote em ${ids.length} divergência(s)?`;
      if (!window.confirm(message)) return;
      const result = await persistMutation('BULK_UPDATE_DIVERGENCES', { ids, action, reason }, 'Ação em lote aplicada nas divergências.');
      if (result.ok) render();
    });
  }

  document.querySelectorAll('.btn-view-divergence').forEach((button) => {
    button.addEventListener('click', () => {
      openDivergenceDetails(button.dataset.id);
    });
  });

  document.querySelectorAll('.btn-explain-divergence').forEach((button) => {
    button.addEventListener('click', () => {
      openDivergenceDetails(button.dataset.id);
    });
  });

  document.querySelectorAll('.btn-resolve-divergence').forEach((button) => {
    button.addEventListener('click', async () => {
      const resolution = window.prompt('Informe a decisão do ADM: resolvido / perda confirmada / erro de lançamento / pendente tratado', 'Tratada pela gestão.');
      if (resolution === null) return;
      const result = await persistMutation('RESOLVE_DIVERGENCE', {
        id: button.dataset.id,
        resolution,
        resolutionType: normalizeText(resolution).replace(/\s+/g, '_') || 'tratada_gestao',
      }, 'Divergência aprovada pelo ADM.');
      if (result.ok) render();
    });
  });
}