import angular from 'angular';

// Import Controllers
import { MainController } from './controllers/main.controllers';

angular
  .module('app', [])
  .controller("MainController", MainController)
;