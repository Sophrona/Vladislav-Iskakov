// Включить/выключить FLS (Full Logging System) (в работе)
window['FLS'] = true;

// Подключение основного файла стилей
import "../scss/style.scss";

import * as flsFunctions from "./files/functions.js";

flsFunctions.isWebp();

/* Форматирование чисел */
// import './libs/wNumb.min.js';

/* Подключаем файлы со своим кодом */
// import '../libs/html5shiv.min.js';
// import '../libs/respond.min.js';

// import './libs/jquery-3.2.1.min.js';
// import './libs/popper.min.js';
// import './libs/bootstrap.min.js';
// import './libs/jquery.filterizr.js';
// import './libs/jquery.magnific-popup.min.js';
import "./files/script.js";
