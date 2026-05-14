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
  USE_FIREBASE: false,
  FIREBASE_CONFIG: null,
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


const ROLE_LABELS = {
  admin: 'Administrador',
  cd: 'CD',
  driver: 'Motorista',
  promoter: 'Promotor',
  viewer: 'Visualizador',
};


const ROUTE_DATASET_VERSION = 'rotas_motoristas_2026_05_14_v11_prioridades_operacionais';

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
      "role": "cd"
    },
    {
      "id": "user_view",
      "name": "Gestão Comercial",
      "username": "gestao",
      "password": "123456",
      "role": "viewer"
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
  cd: ['dashboard', 'saidas', 'retornos', 'pendencias'],
  driver: ['dashboard', 'entregasMotorista', 'recolhimentos', 'caixasOcupadas'],
  promoter: ['dashboard', 'recebimentos', 'caixasLiberadas', 'pendencias'],
  viewer: ['dashboard', 'estoque', 'divergencias'],
};

const MOBILE_ICON_BY_VIEW = {
  dashboard: '🏠',
  saidas: '📦',
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
let firebaseDb = null;
let firebaseRootRef = null;
let unsubscribeFirebase = null;

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
        appState = JSON.parse(saved);
        render();
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

function todayStr() {
  return new Date().toISOString().slice(0, 10);
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

function createRouteSeedData() {
  return deepClone(ROUTE_DATASET);
}

function normalizeText(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
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
  base.routes = seedData.routes;
  base.stores = seedData.stores;
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

function hasQtyDifference(a, b) {
  return BOX_TYPES.some((item) => safeInt(a?.[item.key]) !== safeInt(b?.[item.key]));
}

function qtyToRows(qty) {
  return BOX_TYPES.map((item) => `<div class="kpi-row"><span>${item.label}</span><strong>${safeInt(qty?.[item.key])}</strong></div>`).join('');
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

function getRouteById(id, state = appState) {
  return state.routes.find((route) => route.id === id) || null;
}

function isBretasStore(store) {
  return normalizeText(store?.network || store?.rede || store?.name).includes('bretas');
}

function storeRequiresPromoter(store) {
  return !!store && !isBretasStore(store) && !store.noPromoter;
}

function isGoianiaRoute(routeId) {
  return GOIANIA_ROUTE_IDS.includes(routeId);
}

function isGoianiaTrunkUser(user) {
  return !!user && (GOIANIA_TRUNK_DRIVER_IDS.includes(user.id) || user.routeId === GOIANIA_TRUNK_ROUTE_ID);
}

function getGoianiaOutbounds(date = todayStr(), state = appState) {
  return state.movements.outbounds.filter((item) => isActiveMovement(item) && item.date === date && isGoianiaRoute(item.routeId) && item.status !== 'historico');
}

function getGoianiaExpectedQty(date = todayStr(), state = appState) {
  return getGoianiaOutbounds(date, state).reduce((acc, item) => addQty(acc, item.qty), emptyQty());
}

function getGoianiaTransferQty(date = todayStr(), state = appState) {
  return (state.movements.goianiaTransfers || [])
    .filter((item) => item.date === date)
    .reduce((acc, item) => addQty(acc, item.qty), emptyQty());
}

function getRouteDriverName(routeId, state = appState) {
  const route = getRouteById(routeId, state);
  return getUserById(route?.driverId, state)?.name || '-';
}

function uniqueNetworks(state = appState) {
  return [...new Set(state.stores.map((store) => store.network || store.rede || 'Sem rede'))].sort((a, b) => a.localeCompare(b, 'pt-BR'));
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
  base.movements.routeExceptions = Array.isArray(base.movements.routeExceptions) ? base.movements.routeExceptions : [];
  base.movements.inventories = Array.isArray(base.movements.inventories) ? base.movements.inventories : [];
  base.movements.occupiedBoxes = Array.isArray(base.movements.occupiedBoxes) ? base.movements.occupiedBoxes : [];
  base.movements.releasedBoxes = Array.isArray(base.movements.releasedBoxes) ? base.movements.releasedBoxes : [];

  base.movements.outbounds = base.movements.outbounds.map((item) => ({
    ...item,
    qty: sanitizeQty(item.qty),
    receivedQty: item.receivedQty ? sanitizeQty(item.receivedQty) : item.receivedQty,
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
  base.stores = Array.isArray(base.stores) && base.stores.length ? base.stores : seedData.stores;
  base.routes = Array.isArray(base.routes) && base.routes.length ? base.routes : seedData.routes;
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
    store.noPromoter = isBretasStore(store);
    if (store.noPromoter) store.promoterId = null;
  });

  base.movements.outbounds = base.movements.outbounds.filter((item) => (!item.storeId || validStoreIds.has(item.storeId)) && (!item.routeId || validRouteIds.has(item.routeId)));
  base.movements.receipts = base.movements.receipts.filter((item) => !item.storeId || validStoreIds.has(item.storeId));
  base.movements.pickups = base.movements.pickups.filter((item) => (!item.storeId || validStoreIds.has(item.storeId)) && (!item.routeId || validRouteIds.has(item.routeId)));
  base.movements.returns = base.movements.returns.filter((item) => !item.routeId || validRouteIds.has(item.routeId));
  base.movements.routeExceptions = base.movements.routeExceptions.filter((item) => (!item.storeId || validStoreIds.has(item.storeId)) && (!item.newRouteId || validRouteIds.has(item.newRouteId)));
  base.movements.occupiedBoxes = base.movements.occupiedBoxes.filter((item) => (!item.storeId || validStoreIds.has(item.storeId)) && (!item.routeId || validRouteIds.has(item.routeId)));
  base.movements.releasedBoxes = base.movements.releasedBoxes.filter((item) => (!item.storeId || validStoreIds.has(item.storeId)) && (!item.routeId || validRouteIds.has(item.routeId)));
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
      routeExceptions: [],
      inventories: [],
      occupiedBoxes: [],
      releasedBoxes: [],
    },
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
        await firebaseRootRef.set(state);
      }

      unsubscribeFirebase = firebaseRootRef.on('value', (snapshot) => {
        appState = ensureStateShape(snapshot.val() || createSeedState());
        render();
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
        return applied.ok ? applied.state : undefined;
      });
      if (!result.committed) {
        showToast('Não foi possível concluir a ação. Atualize a tela e tente novamente.', 'error');
        return { ok: false };
      }
      appState = ensureStateShape(result.snapshot.val());
    } catch (error) {
      console.error(error);
      showToast('Erro ao salvar no Firebase.', 'error');
      return { ok: false, error: error.message };
    }
  } else {
    appState = simulation.state;
    saveLocalState(appState);
  }

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
      const route = getRouteById(payload.routeId, state);
      if (!route) return { ok: false, error: 'Selecione a rota vinculada ao motorista.' };
      target.routeId = route.id;
    }

    normalizePromoterUserNames(state);
    const nextSummary = `${target.name} / ${ROLE_LABELS[target.role] || target.role} / ${getUserAccessTarget(target, state)} / ${target.username}`;
    audit('Usuários', 'Usuário atualizado', `${previousSummary} → ${nextSummary}.`);
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
    const noPromoter = normalizeText(network).includes('bretas') || payload.noPromoter === true;
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
      highStockLimit: safeInt(payload.highStockLimit) || 100,
      createdAt: nowIso(),
      createdBy: actor.name,
    });
    state.storeStocks[id] = emptyQty();
    audit('Lojas', 'Nova loja cadastrada', `${name} foi vinculada à rota ${route.name} / motorista ${getRouteDriverName(route.id, state)}.`);
  }

  if (type === 'CONFIRM_DRIVER_DELIVERY') {
    if (!['admin', 'driver'].includes(actor.role)) return { ok: false, error: 'Somente ADM ou motorista pode validar entrega.' };
    const outbound = state.movements.outbounds.find((item) => item.id === payload.outboundId);
    if (!outbound) return { ok: false, error: 'Saída não encontrada.' };
    if (outbound.driverDeliveryId) return { ok: false, error: 'O motorista já validou esta entrega.' };
    const store = getStoreById(outbound.storeId, state);
    if (!store) return { ok: false, error: 'Loja não encontrada.' };
    if (actor.role === 'driver' && !isMovementVisibleToUser(outbound, actor, state)) return { ok: false, error: 'Motorista só pode validar entregas da própria rota/carga.' };

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

  if (type === 'CREATE_OUTBOUND') {
    if (!['admin', 'cd'].includes(actor.role)) return { ok: false, error: 'Somente ADM ou CD pode lançar saídas.' };
    const qty = sanitizeQty(payload.qty);
    if (sumQty(qty) <= 0) return { ok: false, error: 'Informe pelo menos uma quantidade para saída.' };

    const store = getStoreById(payload.storeId, state);
    if (!store) return { ok: false, error: 'Selecione uma loja válida.' };

    const outboundDate = payload.date || todayStr();
    const routeId = getEffectiveRoute(store.id, outboundDate, state);
    if (!routeId) return { ok: false, error: 'Esta loja não possui rota cadastrada. Corrija a rota no ADM antes de salvar a saída.' };

    const driverId = getEffectiveDriver(routeId, outboundDate, store.id, state);
    if (!driverId) return { ok: false, error: 'A rota desta loja não possui motorista vinculado. Corrija o motorista no ADM antes de salvar a saída.' };

    const cdStock = getCdStock(state);
    if (qtyExceeds(qty, cdStock)) return { ok: false, error: 'O CD não possui caixas suficientes para esta saída.' };

    state.cdStock = subQty(cdStock, qty);
    state.movements.outbounds.unshift({
      id: randomId('out'),
      date: outboundDate,
      routeId,
      driverId,
      storeId: store.id,
      qty,
      status: 'aguardando_loja',
      createdBy: actor.name,
      createdAt: nowIso(),
      receiptId: null,
    });
    audit('Saídas do CD', 'Nova saída', `Envio para ${store.name} na ${getRouteById(routeId, state)?.name || '-'} com total de ${sumQty(qty)} caixas.`);
  }

  if (type === 'CONFIRM_RECEIPT') {
    if (!['admin', 'promoter'].includes(actor.role)) return { ok: false, error: 'Somente ADM ou promotor pode confirmar recebimento.' };
    const outbound = state.movements.outbounds.find((item) => item.id === payload.outboundId);
    if (!outbound) return { ok: false, error: 'Saída não encontrada.' };
    if (outbound.receiptId) return { ok: false, error: 'Esta saída já foi confirmada.' };
    const receiptStore = getStoreById(outbound.storeId, state);
    if (actor.role === 'promoter' && outbound.storeId !== actor.storeId) return { ok: false, error: 'Promotor só pode confirmar recebimento da própria loja.' };
    if (!storeRequiresPromoter(receiptStore)) return { ok: false, error: 'Esta loja não exige validação do promotor. A entrega deve ser validada somente pelo motorista.' };
    const qty = sanitizeQty(payload.qty);
    if (sumQty(qty) <= 0) return { ok: false, error: 'Informe a quantidade recebida.' };

    state.storeStocks[outbound.storeId] = addQty(getStoreStock(outbound.storeId, state), qty);
    const receipt = {
      id: randomId('rec'),
      outboundId: outbound.id,
      date: payload.date || todayStr(),
      storeId: outbound.storeId,
      qty,
      createdBy: actor.name,
      createdAt: nowIso(),
    };
    state.movements.receipts.unshift(receipt);
    outbound.receiptId = receipt.id;
    outbound.status = 'recebida';
    outbound.receivedQty = qty;

    if (JSON.stringify(qty) !== JSON.stringify(sanitizeQty(outbound.qty))) {
      openDivergence({
        type: 'recebimento_loja',
        date: receipt.date,
        routeId: outbound.routeId,
        driverId: outbound.driverId,
        storeId: outbound.storeId,
        expectedQty: sanitizeQty(outbound.qty),
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
    audit('Recebimento na Loja', 'Confirmação de recebimento', `Loja ${getStoreById(outbound.storeId, state)?.name || '-'} confirmou ${sumQty(qty)} caixas.`);
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
      createdAt: nowIso(),
      returnBatchId: null,
    });
    audit('Recolhimentos', 'Novo recolhimento', `Motorista ${getUserById(payload.driverId, state)?.name || '-'} recolheu ${sumQty(qty)} caixas em ${getStoreById(payload.storeId, state)?.name || '-'}.`);
  }

  if (type === 'CONFIRM_CD_RETURN') {
    if (!['admin', 'cd'].includes(actor.role)) return { ok: false, error: 'Somente ADM ou CD pode confirmar retorno.' };
    const qty = sanitizeQty(payload.qty);
    if (sumQty(qty) <= 0) return { ok: false, error: 'Informe a quantidade recebida no CD.' };

    const pendingPickups = state.movements.pickups.filter((item) =>
      isActiveMovement(item) &&
      item.date === payload.date &&
      item.routeId === payload.routeId &&
      item.driverId === payload.driverId &&
      !item.returnBatchId
    );

    const expectedQty = pendingPickups.reduce((acc, item) => addQty(acc, item.qty), emptyQty());
    if (sumQty(expectedQty) <= 0) return { ok: false, error: 'Não há recolhimentos pendentes para esta rota e motorista.' };

    state.cdStock = addQty(getCdStock(state), qty);

    const returnBatchId = randomId('ret');
    state.movements.returns.unshift({
      id: returnBatchId,
      date: payload.date || todayStr(),
      routeId: payload.routeId,
      driverId: payload.driverId,
      qty,
      expectedQty,
      createdBy: actor.name,
      createdAt: nowIso(),
      justification: payload.justification || '',
    });
    pendingPickups.forEach((item) => {
      item.returnBatchId = returnBatchId;
    });

    if (JSON.stringify(expectedQty) !== JSON.stringify(qty)) {
      openDivergence({
        type: 'retorno_cd',
        date: payload.date,
        routeId: payload.routeId,
        driverId: payload.driverId,
        storeId: null,
        expectedQty,
        actualQty: qty,
        justification: payload.justification || 'Diferença identificada entre o total recolhido e o total que chegou ao CD.',
        originJustification: payload.justification || '',
        responsibleUserId: payload.driverId,
        responsibleRole: 'driver',
        requiresResponsibleExplanation: true,
        responsibleExplanation: '',
        responsibleExplanationAt: null,
        responsibleExplanationBy: null,
      });
    }
    audit('Retornos no CD', 'Conferência de retorno', `Rota ${getRouteById(payload.routeId, state)?.name || '-'} retornou ${sumQty(qty)} caixas ao CD.`);
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
    const date = todayStr();
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
    state.movements.inventories = state.movements.inventories.slice(0, 300);

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

function getDynamicCounts() {
  const alerts = getAllAlerts(appState);
  const openDivergences = getVisibleDivergences(appState, currentUser).filter((div) => div.status === 'aberta').length;
  const pendingCount = getVisiblePendenciesForCurrentUser(todayStr()).length;
  const mandatoryCount = getPendingMandatoryInventoriesForUser(currentUser, todayStr(), appState).length;
  return {
    divergencias: openDivergences,
    alertas: alerts.length + mandatoryCount,
    pendencias: pendingCount,
    inventario: mandatoryCount,
  };
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
  return getRouteById(routeId, state)?.driverId || null;
}

function canSeeGlobalData(user = currentUser) {
  return !!user && ['admin', 'viewer'].includes(user.role);
}

function getDriverRouteIds(user = currentUser, state = appState) {
  if (!user || user.role !== 'driver') return [];
  const ids = new Set();
  if (user.routeId) ids.add(user.routeId);
  state.routes.forEach((route) => {
    if (route.driverId === user.id) ids.add(route.id);
  });
  if (isGoianiaTrunkUser(user)) {
    GOIANIA_ROUTE_IDS.forEach((id) => ids.add(id));
    ids.add(GOIANIA_TRUNK_ROUTE_ID);
  }
  return [...ids];
}

function canUserSeeRoute(routeId, user = currentUser, state = appState) {
  if (!user || !routeId) return false;
  if (canSeeGlobalData(user)) return true;
  if (user.role === 'cd') return false;
  if (user.role === 'driver') return getDriverRouteIds(user, state).includes(routeId);
  if (user.role === 'promoter' && user.storeId) {
    const store = getStoreById(user.storeId, state);
    return !!store && (store.defaultRouteId === routeId || store.sundayRouteId === routeId);
  }
  return false;
}

function canUserSeeStore(storeId, user = currentUser, date = todayStr(), state = appState) {
  if (!user || !storeId) return false;
  if (canSeeGlobalData(user)) return true;
  if (user.role === 'promoter') return user.storeId === storeId;
  if (user.role === 'driver') {
    const routeId = getEffectiveRoute(storeId, date, state);
    if (canUserSeeRoute(routeId, user, state)) return true;
    return (state.movements.goianiaTransfers || []).some((item) =>
      isActiveMovement(item) && item.storeId === storeId && item.driverId === user.id && (!date || item.date === date)
    );
  }
  return false;
}

function getVisibleStores(state = appState, user = currentUser, date = todayStr()) {
  if (!user) return [];
  if (canSeeGlobalData(user)) return state.stores;
  if (user.role === 'promoter') return state.stores.filter((store) => store.id === user.storeId);
  if (user.role === 'driver') return state.stores.filter((store) => canUserSeeStore(store.id, user, date, state));
  return [];
}

function getVisibleRoutes(state = appState, user = currentUser) {
  if (!user) return [];
  if (canSeeGlobalData(user)) return state.routes;
  if (user.role === 'driver') return state.routes.filter((route) => canUserSeeRoute(route.id, user, state));
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
    if (item.routeId && canUserSeeRoute(item.routeId, user, state)) return true;
    if (item.storeId && canUserSeeStore(item.storeId, user, item.date || todayStr(), state)) return true;
  }
  return false;
}

function isDivergenceVisibleToUser(div, user = currentUser, state = appState) {
  if (!user || !div) return false;
  if (canSeeGlobalData(user)) return true;
  if (user.role === 'cd') return ['retorno_cd', 'inventario_cd', 'carga_goiania'].includes(div.type);
  if (user.role === 'driver') {
    return div.driverId === user.id || div.responsibleUserId === user.id || canUserSeeRoute(div.routeId, user, state) || canUserSeeStore(div.storeId, user, div.date || todayStr(), state);
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

function getTodayMetrics(state = appState, user = currentUser) {
  const today = todayStr();
  const inScope = (item) => isMovementVisibleToUser(item, user, state);
  const outbounds = state.movements.outbounds.filter((item) => isActiveMovement(item) && item.date === today && item.status !== 'historico' && inScope(item));
  const receipts = state.movements.receipts.filter((item) => isActiveMovement(item) && item.date === today && inScope(item));
  const pickupsToday = state.movements.pickups.filter((item) => isActiveMovement(item) && item.date === today && inScope(item));
  const returnsToday = state.movements.returns.filter((item) => isActiveMovement(item) && item.date === today && inScope(item));
  const sent = outbounds.reduce((acc, item) => acc + sumQty(item.qty), 0);
  const confirmed = receipts.reduce((acc, item) => acc + sumQty(item.qty), 0);
  const pickups = pickupsToday.reduce((acc, item) => acc + (item.totalOnly ? safeInt(item.totalQty) : sumQty(item.qty)), 0);
  const returns = returnsToday.reduce((acc, item) => acc + sumQty(item.qty), 0);
  const company = (user?.role === 'promoter' || user?.role === 'driver') ? 0 : sumQty(state.cdStock);
  const visibleStores = getVisibleStores(state, user, today);
  const stores = visibleStores.reduce((acc, store) => acc + sumQty(getStoreStock(store.id, state)), 0);
  const inReturn = state.movements.pickups.filter((item) => isActiveMovement(item) && !item.returnBatchId && inScope(item)).reduce((acc, item) => acc + (item.totalOnly ? safeInt(item.totalQty) : sumQty(item.qty)), 0);
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
  return transfer?.driverId || outbound.goianiaTransferDriverId || outbound.driverId || null;
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
    } else if (!driverDelivery && !receipt) {
      status = 'Aguardando validação do motorista';
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
  const outbounds = state.movements.outbounds.filter((item) => isActiveMovement(item) && item.date === date && item.status !== 'historico');

  outbounds.forEach((outbound) => {
    const store = getStoreById(outbound.storeId, state);
    const transfer = getOutboundTransfer(outbound.id, state);
    const driverId = getOutboundResponsibleDriver(outbound, state);
    const driverDelivery = (state.movements.driverDeliveries || []).find((item) => isActiveMovement(item) && item.outboundId === outbound.id);
    const receipt = state.movements.receipts.find((item) => isActiveMovement(item) && item.outboundId === outbound.id);

    if (isGoianiaRoute(outbound.routeId) && !transfer && !driverDelivery) {
      pendencies.push({
        area: 'Distribuição Goiânia',
        responsibleRole: 'driver',
        responsibleUserId: 'user_motor_vinicius',
        responsibleName: 'Vinicius/Sebastião',
        storeId: outbound.storeId,
        routeId: outbound.routeId,
        description: `${store?.name || '-'} ainda não foi repassada para Vinicius/Maycon/Alexsandro/Edmar/reforço.`,
        priority: 'warning',
      });
      return;
    }

    if (!driverDelivery) {
      pendencies.push({
        area: 'Entrega do Motorista',
        responsibleRole: 'driver',
        responsibleUserId: driverId,
        responsibleName: getUserById(driverId, state)?.name || 'Motorista',
        storeId: outbound.storeId,
        routeId: outbound.routeId,
        description: `${store?.name || '-'} ainda não teve total deixado confirmado pelo motorista.`,
        priority: 'warning',
      });
    }

    if (storeRequiresPromoter(store) && !receipt) {
      pendencies.push({
        area: 'Recebimento na Loja',
        responsibleRole: 'promoter',
        responsibleUserId: store?.promoterId || null,
        responsibleName: getUserById(store?.promoterId, state)?.name || 'Promotor da loja',
        storeId: outbound.storeId,
        routeId: outbound.routeId,
        description: `${store?.name || '-'} ainda não confirmou folhagens e bandejas recebidas.`,
        priority: 'warning',
      });
    }
  });

  state.movements.pickups
    .filter((item) => isActiveMovement(item) && item.date === date && !item.returnBatchId)
    .forEach((pickup) => {
      pendencies.push({
        area: 'Retorno no CD',
        responsibleRole: 'cd',
        responsibleUserId: null,
        responsibleName: 'CD',
        storeId: pickup.storeId,
        routeId: pickup.routeId,
        description: `${getRouteById(pickup.routeId, state)?.name || '-'} / ${getUserById(pickup.driverId, state)?.name || '-'} tem recolhimento pendente de conferência no CD.`,
        priority: 'info',
      });
    });

  (state.mandatoryInventories || [])
    .filter((schedule) => schedule.status !== 'cancelada' && schedule.date === date)
    .forEach((schedule) => {
      getMandatoryInventoryStoreIds(schedule, state).forEach((storeId) => {
        if (!isMandatoryInventoryPendingForStore(schedule, storeId, state)) return;
        const store = getStoreById(storeId, state);
        pendencies.push({
          area: 'Inventário obrigatório',
          responsibleRole: 'promoter',
          responsibleUserId: store?.promoterId || null,
          responsibleName: storeRequiresPromoter(store) ? (getUserById(store?.promoterId, state)?.name || 'Promotor da loja') : 'ADM / loja sem promotor',
          storeId,
          routeId: getEffectiveRoute(storeId, date, state),
          description: `${store?.name || '-'} precisa realizar inventário obrigatório em ${formatDateBR(date)}.`,
          priority: 'danger',
        });
      });
    });

  state.divergences
    .filter((div) => div.status === 'aberta' && (!date || div.date === date))
    .forEach((div) => {
      const waitingExplanation = needsResponsibleExplanation(div);
      pendencies.push({
        area: waitingExplanation ? 'Justificar divergência' : 'Aprovação ADM',
        responsibleRole: waitingExplanation ? (div.responsibleRole || 'driver') : 'admin',
        responsibleUserId: waitingExplanation ? (div.responsibleUserId || div.driverId) : null,
        responsibleName: waitingExplanation ? (getDivergenceResponsible(div)?.name || 'Responsável') : 'ADM',
        storeId: div.storeId,
        routeId: div.routeId,
        description: `${getDivergenceTitle(div)}: ${getDivergenceRealErrorText(div)}`,
        priority: 'danger',
      });
    });

  return pendencies;
}

function getVisiblePendenciesForCurrentUser(date = todayStr()) {
  const items = getOperationalPendencies(date, appState);
  if (!currentUser) return [];
  if (currentUser.role === 'admin' || currentUser.role === 'viewer') return items;
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
    return state.stores.filter((store) => (store.network || store.rede || '') === network);
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
  const stockRows = getStoreStockRows().slice(0, 5);
  const routesForDashboard = canSeeGlobalData(currentUser) || currentUser.role === 'cd' ? appState.routes : getVisibleRoutes(appState, currentUser);
  const showCdForecast = ['admin', 'viewer', 'cd'].includes(currentUser?.role);
  const visibleStoreQty = getVisibleStores(appState, currentUser).reduce((acc, store) => addQty(acc, getStoreStock(store.id)), emptyQty());
  const dashboardCategoryQty = showCdForecast ? appState.cdStock : visibleStoreQty;
  const dashboardCategoryTotal = Math.max(1, sumQty(dashboardCategoryQty));
  const routeSummary = routesForDashboard.map((route) => {
    const sent = appState.movements.outbounds.filter((item) => item.date === todayStr() && item.routeId === route.id && item.status !== 'historico' && isMovementVisibleToUser(item, currentUser, appState)).reduce((acc, item) => acc + sumQty(item.qty), 0);
    const pickup = appState.movements.pickups.filter((item) => item.date === todayStr() && item.routeId === route.id && isMovementVisibleToUser(item, currentUser, appState)).reduce((acc, item) => acc + (item.totalOnly ? safeInt(item.totalQty) : sumQty(item.qty)), 0);
    const returned = appState.movements.returns.filter((item) => item.date === todayStr() && item.routeId === route.id && isMovementVisibleToUser(item, currentUser, appState)).reduce((acc, item) => acc + sumQty(item.qty), 0);
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
      `) : `
        <div class="alert-strip info">
          <div>
            <strong>Visão do seu acesso</strong>
            <div class="muted">Esta tela mostra somente as informações vinculadas ao seu usuário.</div>
          </div>
        </div>
      `}

      <div class="cards-grid">
        ${showCdForecast ? renderMetricCard('Caixas na Empresa', metrics.company, '🏭', metrics.company < forecast.predicted ? 'critical' : 'success', 'Saldo atual confirmado no CD') : ''}
        ${renderMetricCard('Enviadas Hoje', metrics.sent, '🚚', 'success', 'Saídas lançadas pelo CD')}
        ${renderMetricCard('Confirmadas nas Lojas', metrics.confirmed, '🏬', 'success', 'Recebimentos confirmados pelos promotores')}
        ${renderMetricCard(currentUser.role === 'promoter' ? 'Estoque da Minha Loja' : 'Estoque Visível', metrics.stores, '📦', 'warning', 'Saldo dentro da permissão do usuário')}
        ${renderMetricCard('Em Retorno', metrics.inReturn, '🔄', 'warning', 'Caixas recolhidas ainda não recebidas no CD')}
        ${renderMetricCard('Recebidas Hoje', metrics.returns, '✅', 'success', 'Caixas que retornaram ao CD')}
        ${renderMetricCard('Divergências Abertas', openDivergences, '⚠️', openDivergences ? 'critical' : 'success', 'Erros identificados automaticamente')}
        ${showCdForecast ? renderMetricCard('Base do Dia', forecast.predicted, '📊', 'success', `${forecast.source} de necessidade para ${weekdayName(forecast.weekday)}`) : ''}
      </div>

      <div class="grid-3">
        <div class="card">
          <div class="section-header">
            <div>
              <h3>Saldos por Categoria de Caixa</h3>
              <p>${showCdForecast ? 'Saldo atual confirmado no CD por folhagens e bandejas.' : 'Saldo visível para seu acesso por folhagens e bandejas.'}</p>
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
              <p>Lojas com mais caixas acumuladas.</p>
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

function renderSaidas() {
  const date = todayStr();
  const recent = appState.movements.outbounds.filter((item) => isActiveMovement(item) && item.status !== 'historico').slice(0, 10);
  const stores = [...appState.stores].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
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
          <div class="form-grid">
            <label>Data
              <input type="date" name="date" value="${date}" required />
            </label>
            <label>Loja
              <select name="storeId" id="saida-store" required>
                <option value="">Selecione a loja</option>
                ${stores.map((store) => `<option value="${store.id}">${store.name}${store.network ? ` • ${store.network}` : ''}</option>`).join('')}
              </select>
            </label>
          </div>

          <div id="saida-rota-info" class="helper-card compact small">Selecione uma loja.</div>


          ${qtyInputs('saida')}

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
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${recent.length ? recent.map((item) => `
                <tr>
                  <td>${formatDateBR(item.date)}</td>
                  <td>${getStoreById(item.storeId)?.name || '-'}</td>
                  <td>${getRouteById(item.routeId)?.name || '-'}</td>
                  <td>${getUserById(item.driverId)?.name || '-'}</td>
                  <td>${sumQty(item.qty)}</td>
                  <td>${item.receiptId ? statusTag('ok') : statusTag('warn')}</td>
                </tr>
              `).join('') : `<tr><td colspan="6" class="center muted">Nenhuma saída registrada.</td></tr>`}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}
function renderEntregasMotorista() {
  const myRouteId = currentUser.role === 'driver' ? currentUser.routeId : '';
  const pending = appState.movements.outbounds.filter((item) => {
    if (!isActiveMovement(item) || item.status === 'historico' || item.driverDeliveryId) return false;
    if (currentUser.role === 'driver') {
      return item.driverId === currentUser.id || item.routeId === myRouteId || getOutboundResponsibleDriver(item) === currentUser.id;
    }
    return true;
  }).slice(0, 80);
  const recent = (appState.movements.driverDeliveries || []).filter((item) => isActiveMovement(item) && isMovementVisibleToUser(item, currentUser, appState)).slice(0, 12);
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
    return isActiveMovement(item) && !item.receiptId && item.status !== 'historico' && storeRequiresPromoter(store) && (!storeFilter || item.storeId === storeFilter);
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


          ${qtyInputs('recebimento')}

          <label>Observação / justificativa
            <textarea name="justification" placeholder="Preencha somente se houver diferença ou alguma ocorrência."></textarea>
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
              </div>
            `;
          }).join('') : `<div class="empty">Nenhum recebimento confirmado hoje.</div>`}
        </div>
      </div>
    </div>
  `;
}

function renderRecolhimentos() {
  const myRouteId = currentUser.role === 'driver' ? currentUser.routeId : '';
  const availableRoutes = currentUser.role === 'driver'
    ? appState.routes.filter((route) => route.id === myRouteId)
    : appState.routes;

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
                ${availableRoutes.map((route) => `<option value="${route.id}">${route.name}</option>`).join('')}
              </select>
            </label>
            <label>Motorista
              <select name="driverId" id="pickup-driver" required>
                <option value="">Selecione</option>
                ${availableRoutes.map((route) => {
                  const driver = getUserById(route.driverId);
                  return `<option value="${route.driverId}">${driver?.name || '-'}</option>`;
                }).join('')}
              </select>
            </label>
          </div>

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
  const availableRoutes = getVisibleRoutes(appState, currentUser);
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
                ${availableRoutes.map((route) => `<option value="${route.id}">${route.name}</option>`).join('')}
              </select>
            </label>
            <label>Motorista
              <select name="driverId" id="occupied-driver" required>
                <option value="">Selecione</option>
                ${availableRoutes.map((route) => {
                  const driver = getUserById(route.driverId);
                  return `<option value="${route.driverId}">${driver?.name || '-'}</option>`;
                }).join('')}
              </select>
            </label>
          </div>

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
  return `
    <div class="grid-2">
      <div class="card">
        <div class="page-header">
          <div>
            <h3>Confirmar retorno no CD</h3>
          </div>
        </div>

        <form id="form-retorno" class="stack">
          <div class="form-grid-3">
            <label>Data
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


          ${qtyInputs('retorno')}

          <label>Justificativa
            <textarea name="justification" placeholder="Obrigatório quando o total conferido no CD for diferente do total informado pelo motorista."></textarea>
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
              <div class="kpi-row"><span>Recebido no CD</span><strong>${sumQty(item.qty)} caixas</strong></div>
              <div class="kpi-row"><span>Informado pelo motorista</span><strong>${sumQty(item.expectedQty)} caixas</strong></div>
            </div>
          `).join('') : `<div class="empty">Nenhum retorno confirmado.</div>`}
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
                ${appState.stores.map((store) => `<option value="${store.id}">${store.name}</option>`).join('')}
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
              <label>Loja
                <select name="storeId" id="inventario-store" required>
                  <option value="">Selecione</option>
                  ${appState.stores.map((store) => `<option value="${store.id}">${store.name}</option>`).join('')}
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
                  <th>Usuário</th>
                </tr>
              </thead>
              <tbody>
                ${history.length ? history.slice(0, 12).map((item) => `
                  <tr>
                    <td>${formatDateBR(item.date)}</td>
                    <td>${item.location === 'cd' ? 'CD' : getStoreById(item.storeId)?.name || '-'}</td>
                    <td>${sumQty(item.previousQty)}</td>
                    <td><strong>${sumQty(item.countedQty)}</strong></td>
                    <td>${sumSignedQty(item.diffQty) > 0 ? '+' : ''}${sumSignedQty(item.diffQty)}</td>
                    <td>${item.createdBy || '-'}</td>
                  </tr>
                `).join('') : `<tr><td colspan="6" class="center muted">Nenhum inventário lançado.</td></tr>`}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderDivergencias() {
  const visibleDivergences = getVisibleDivergences(appState, currentUser);
  const open = visibleDivergences.filter((item) => item.status === 'aberta');
  const resolved = visibleDivergences.filter((item) => item.status === 'resolvida');
  return `
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
            ${open.map((item) => `
              <div class="list-item">
                <div class="list-item-head">
                  <strong>${getDivergenceTitle(item)}</strong>
                  ${needsResponsibleExplanation(item) ? getDivergenceExplanationStatusTag(item) : statusTag('danger')}
                </div>
                <p>${describeDivergence(item)}</p>
                <small class="muted">${getDivergenceRealErrorText(item)}</small>
                ${item.requiresResponsibleExplanation ? `<small class="muted">Responsável pela justificativa: <strong>${getDivergenceResponsible(item)?.name || 'Não definido'}</strong></small>` : ''}
                <div class="muted">Criada em ${formatDateTimeBR(item.createdAt)}</div>
                <div class="inline-actions">
                  <button class="btn btn-primary btn-view-divergence" data-id="${item.id}">Ver erro detalhado</button>
                  ${canCurrentUserExplainDivergence(item) && !item.responsibleExplanation ? `<button class="btn btn-secondary btn-explain-divergence" data-id="${item.id}">Justificar divergência</button>` : ''}
                  ${currentUser.role === 'admin' ? `<button class="btn btn-secondary btn-resolve-divergence" data-id="${item.id}">Aprovar pelo ADM</button>` : ''}
                </div>
              </div>
            `).join('')}
          </div>
        ` : `<div class="empty">Sem divergências em aberto.</div>`}
      </div>

      <div class="card">
        <div class="section-header">
          <div>
            <h3>Histórico resolvido</h3>
          </div>
        </div>
        ${resolved.length ? `
          <div class="list">
            ${resolved.slice(0, 8).map((item) => `
              <div class="list-item">
                <div class="list-item-head">
                  <strong>${getDivergenceTitle(item)}</strong>
                  ${statusTag('ok')}
                </div>
                <p>${describeDivergence(item)}</p>
                <small class="muted">Resolvida por ${item.resolvedBy || '-'} em ${formatDateTimeBR(item.resolvedAt)}</small>
                <div class="inline-actions">
                  <button class="btn btn-ghost btn-view-divergence" data-id="${item.id}">Ver detalhes</button>
                </div>
              </div>
            `).join('')}
          </div>
        ` : `<div class="empty">Nenhuma divergência resolvida ainda.</div>`}
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
  const byResponsible = {};
  pendencies.forEach((item) => {
    const key = item.responsibleName || item.responsibleRole || 'Responsável';
    byResponsible[key] = byResponsible[key] || [];
    byResponsible[key].push(item);
  });
  return `
    <div class="stack">
      <div class="card">
        <div class="page-header">
          <div>
            <h3>Pendências por responsável</h3>
          </div>
          <div class="helper-card small">Total visível para seu acesso: <strong>${pendencies.length}</strong></div>
        </div>
        ${pendencies.length ? Object.entries(byResponsible).map(([name, items]) => `
          <div class="responsible-group">
            <div class="list-item-head"><h4>${name}</h4><span class="badge-count">${items.length}</span></div>
            <div class="list">
              ${items.map((item) => `
                <div class="list-item">
                  <div class="list-item-head">
                    <strong>${item.area}</strong>
                    ${item.priority === 'danger' ? statusTag('danger') : item.priority === 'info' ? statusTag('info') : statusTag('warn')}
                  </div>
                  <p>${item.description}</p>
                  <small class="muted">Loja: ${getStoreById(item.storeId)?.name || '-'} • Rota: ${getRouteById(item.routeId)?.name || '-'}</small>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('') : `<div class="empty">Nenhuma pendência para o seu acesso nesta data.</div>`}
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
          <div class="helper-card compact small">Motoristas: <strong>${drivers.length}</strong> • Rotas: <strong>${appState.routes.length}</strong> • Lojas: <strong>${appState.stores.length}</strong></div>
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
              ${[...appState.stores].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR')).map((store) => `
                <label class="multi-store-option" data-search="${normalizeText(`${store.name} ${store.network || ''} ${store.rede || ''}`)}">
                  <input type="checkbox" class="rota-padrao-store-checkbox" value="${store.id}" />
                  <span>
                    <strong>${store.name}</strong>
                    <small>${store.network || store.rede || '-'} • Atual: ${getRouteById(store.defaultRouteId)?.name || '-'}</small>
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
              <label>Loja
                <select name="storeId" required>
                  <option value="">Selecione</option>
                  ${appState.stores.map((store) => `<option value="${store.id}">${store.name}</option>`).join('')}
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
  const networkOptions = networks.map((network) => `<option value="${network}">${network}</option>`).join('');
  const rows = [...appState.stores].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
  return `
    <div class="stack">
      <div class="card">
        <div class="page-header">
          <div>
            <h3>Lojas cadastradas</h3>
          </div>
          <div class="helper-card small">
            Total de lojas: <strong>${appState.stores.length}</strong> • Redes: <strong>${networks.length}</strong>
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
            <strong>Bretas:</strong> lojas desta rede não exigem promotor. A validação é feita somente pelo motorista.
          </div>
        </div>
        <div class="table-wrap lojas-table-wrap">
          <table id="lojas-table">
            <thead>
              <tr>
                <th>Loja</th>
                <th>Rede</th>
                <th>Rota</th>
                <th>Motorista</th>
                <th>Promotor</th>
                <th>Validação</th>
                <th>Saldo</th>
              </tr>
            </thead>
            <tbody>
              ${rows.map((store) => {
                const route = getRouteById(store.defaultRouteId);
                const driver = getUserById(route?.driverId);
                const promoter = store.promoterId ? getUserById(store.promoterId) : null;
                const stock = getStoreStock(store.id);
                return `
                  <tr data-network="${store.network || store.rede || 'Sem rede'}">
                    <td><strong>${store.name}</strong></td>
                    <td>${store.network || store.rede || '-'}</td>
                    <td>${route?.name || '-'}</td>
                    <td>${driver?.name || '-'}</td>
                    <td>${storeRequiresPromoter(store) ? (promoter?.name || '-') : '<span class="tag info">Sem promotor</span>'}</td>
                    <td>${storeRequiresPromoter(store) ? '<span class="tag ok">Motorista + promotor</span>' : '<span class="tag warn">Somente motorista</span>'}</td>
                    <td>${sumQty(stock)}</td>
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
              <datalist id="redes-cadastradas">${networks.map((network) => `<option value="${network}"></option>`).join('')}</datalist>
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
            const stores = appState.stores.filter((store) => store.defaultRouteId === route.id);
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
  const transfers = (appState.movements.goianiaTransfers || []).filter((item) => item.date === date).slice(0, 20);
  const expected = getGoianiaExpectedQty(date);
  const distributed = getGoianiaTransferQty(date);
  return `
    <div class="grid-2">
      <div class="card">
        <div class="page-header">
          <div>
            <h3>Distribuição / transbordo Goiânia</h3>
          </div>
          <div class="helper-card small">
            Edmar: Itumbiara e Rio Verde. Vinicius também pode receber lojas para entrega direta.
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
  const sortedStores = [...appState.stores].sort((a, b) => formatStoreNameForUser(a.name).localeCompare(formatStoreNameForUser(b.name), 'pt-BR'));
  const sortedRoutes = [...appState.routes].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
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
              <tr><td>CD</td><td>Somente saídas, retornos, pendências e Dashboard do CD.</td></tr>
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
          </div>

          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Criar usuário</button>
          </div>
        </form>
      </div>

      <div class="card">
        <div class="page-header">
          <div>
            <h3>Usuários cadastrados</h3>
          </div>
        </div>
        <div class="table-wrap users-table-wrap">
          <table class="users-admin-table">
            <thead>
              <tr>
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
                      <select class="user-route-select user-target-select ${user.role === 'driver' ? '' : 'hidden'}" data-user-id="${user.id}">
                        ${buildRouteOptions(user.routeId || '')}
                      </select>
                      <span class="user-target-static ${user.role === 'promoter' || user.role === 'driver' ? 'hidden' : ''}" data-user-id="${user.id}">${getUserAccessTarget(user)}</span>
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
              ${appState.stores.map((store) => `
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

function bindSaidasEvents() {
  const form = document.getElementById('form-saida');
  const storeSelect = document.getElementById('saida-store');
  const infoBox = document.getElementById('saida-rota-info');
  const resetBtn = document.getElementById('btn-reset-saida');

  const refreshRouteInfo = () => {
    if (!form || !storeSelect || !infoBox) return;
    const store = getStoreById(storeSelect.value);
    const date = form.querySelector('[name="date"]').value || todayStr();

    if (!store) {
      infoBox.innerHTML = 'Selecione uma loja.';
      return;
    }

    const routeId = getEffectiveRoute(store.id, date);
    const route = getRouteById(routeId);
    const driverId = routeId ? getEffectiveDriver(routeId, date, store.id) : null;
    const driver = getUserById(driverId);
    const day = new Date(`${date}T12:00:00`).getDay();
    const hasException = appState.movements.routeExceptions.some((item) => item.storeId === store.id && item.date === date);
    const routeType = hasException ? 'Troca temporária cadastrada' : (day === 0 && store.sundayRouteId ? 'Rota de domingo' : 'Rota normal/fixa');

    if (!route) {
      infoBox.innerHTML = `
        <strong>${store.name}</strong><br>
        <span class="tag danger">Sem rota cadastrada</span><br>
        Sem rota cadastrada.
      `;
      return;
    }

    infoBox.innerHTML = `
      <strong>${store.name}</strong><br>
      Rota: <strong>${route.name}</strong> • Motorista: <strong>${driver?.name || 'Sem motorista'}</strong>
    `;
  };

  if (!form || !storeSelect) return;

  storeSelect.addEventListener('change', refreshRouteInfo);
  form.querySelector('[name="date"]').addEventListener('change', refreshRouteInfo);

  resetBtn.addEventListener('click', () => {
    form.reset();
    form.querySelector('[name="date"]').value = todayStr();
    refreshRouteInfo();
  });

  refreshRouteInfo();

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
    if (!routeId) {
      showToast('Esta loja não possui rota cadastrada. Corrija a rota no ADM.', 'error');
      return;
    }
    if (!driverId) {
      showToast('A rota desta loja não possui motorista vinculado. Corrija no ADM.', 'error');
      return;
    }

    const qty = readQtyFromForm(form, 'saida');
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
  const outboundSelect = document.getElementById('recebimento-outbound');
  const summary = document.getElementById('recebimento-resumo');

  const clearReceiptInputs = () => {
    BOX_TYPES.forEach((item) => {
      const input = form.querySelector(`#recebimento-${item.key}`);
      if (input) input.value = 0;
    });
  };

  const updateSummary = () => {
    const outbound = appState.movements.outbounds.find((item) => item.id === outboundSelect.value);
    if (!outbound) {
      summary.innerHTML = 'Selecione a saída.';
      clearReceiptInputs();
      return;
    }

    clearReceiptInputs();
    const store = getStoreById(outbound.storeId);
    summary.innerHTML = `
      <strong>${store?.name || '-'}</strong><br>
      Data: ${formatDateBR(outbound.date)} • Rota: ${getRouteById(outbound.routeId)?.name || '-'}
    `;
  };

  outboundSelect.addEventListener('change', updateSummary);
  updateSummary();

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const qty = readQtyFromForm(form, 'recebimento');
    const payload = {
      outboundId: form.outboundId.value,
      date: todayStr(),
      qty,
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
    const allowedStores = appState.stores.filter((store) => getEffectiveRoute(store.id, date) === routeId);
    storeSelect.innerHTML = `<option value="">Selecione</option>` + allowedStores.map((store) => `<option value="${store.id}">${store.name}</option>`).join('');
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
    let stores = appState.stores.filter((store) => getEffectiveRoute(store.id, date) === routeId);
    if (currentUser.role === 'driver') {
      stores = stores.filter((store) => canUserSeeStore(store.id, currentUser, date, appState));
    }
    storeSelect.innerHTML = `<option value="">Selecione</option>` + stores.map((store) => `<option value="${store.id}">${store.name}</option>`).join('');
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

  const refreshSummary = () => {
    const date = form.date.value || todayStr();
    const routeId = routeSelect.value;
    const driverId = driverSelect.value;
    if (!routeId || !driverId) {
      summary.innerHTML = 'Selecione rota e motorista.';
      return;
    }
    const pending = appState.movements.pickups.filter((item) => isActiveMovement(item) && item.date === date && item.routeId === routeId && item.driverId === driverId && !item.returnBatchId);
    const total = pending.reduce((acc, item) => addQty(acc, item.qty), emptyQty());
    summary.innerHTML = `
      <strong>${getRouteById(routeId)?.name || '-'}</strong> • ${getUserById(driverId)?.name || '-'}<br>
      Total pendente de conferência no CD: <strong>${sumQty(total)} caixas</strong><br>
      ${BOX_TYPES.map((item) => `${item.label}: <strong>${total[item.key]}</strong>`).join(' • ')}
    `;
    BOX_TYPES.forEach((item) => {
      const input = form.querySelector(`#retorno-${item.key}`);
      if (input) input.value = total[item.key];
    });
  };

  routeSelect.addEventListener('change', refreshSummary);
  driverSelect.addEventListener('change', refreshSummary);
  form.date.addEventListener('change', refreshSummary);
  refreshSummary();

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const qty = readQtyFromForm(form, 'retorno');
    const payload = {
      date: form.date.value,
      routeId: form.routeId.value,
      driverId: form.driverId.value,
      qty,
      justification: form.justification.value.trim(),
    };
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

  const refreshTargetFields = () => {
    if (!roleSelect || !storeWrap || !routeWrap) return;
    storeWrap.classList.toggle('hidden', roleSelect.value !== 'promoter');
    routeWrap.classList.toggle('hidden', roleSelect.value !== 'driver');
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
      };
      const result = await persistMutation('CREATE_USER', payload, 'Usuário criado com sucesso.');
      if (result.ok) render();
    });
  }

  const refreshUserTargetRow = (userId) => {
    const role = document.querySelector(`.user-role-select[data-user-id="${userId}"]`)?.value;
    const storeSelect = document.querySelector(`.user-store-select[data-user-id="${userId}"]`);
    const routeSelect = document.querySelector(`.user-route-select[data-user-id="${userId}"]`);
    const staticTarget = document.querySelector(`.user-target-static[data-user-id="${userId}"]`);
    storeSelect?.classList.toggle('hidden', role !== 'promoter');
    routeSelect?.classList.toggle('hidden', role !== 'driver');
    staticTarget?.classList.toggle('hidden', role === 'promoter' || role === 'driver');
    if (staticTarget) {
      staticTarget.textContent = role === 'admin' ? 'ADM geral' : role === 'cd' ? 'CD' : role === 'viewer' ? 'Gestão / Visualização' : '-';
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
      };
      const result = await persistMutation('UPDATE_USER_ACCOUNT', payload, 'Usuário atualizado com sucesso.');
      if (result.ok) render();
    });
  });
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

  const form = document.getElementById('form-nova-loja');
  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const payload = {
        name: form.name.value,
        network: form.network.value,
        routeId: form.routeId.value,
        highStockLimit: form.highStockLimit.value,
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
    appState.stores.forEach((store) => {
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
  if (formStore && storeSelect) {
    storeSelect.addEventListener('change', refreshStoreInventory);
    refreshStoreInventory();
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
