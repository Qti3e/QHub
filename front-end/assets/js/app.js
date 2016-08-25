/*****************************************************************************
 *         In the name of God the Most Beneficent the Most Merciful          *
 *___________________________________________________________________________*
 *   This program is free software: you can redistribute it and/or modify    *
 *   it under the terms of the GNU General Public License as published by    *
 *   the Free Software Foundation, either version 3 of the License, or       *
 *   (at your option) any later version.                                     *
 *___________________________________________________________________________*
 *   This program is distributed in the hope that it will be useful,         *
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of          *
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the           *
 *   GNU General Public License for more details.                            *
 *___________________________________________________________________________*
 *   You should have received a copy of the GNU General Public License       *
 *   along with this program.  If not, see <http://www.gnu.org/licenses/>.   *
 *___________________________________________________________________________*
 *                             Created by  Qti3e                             *
 *        <http://Qti3e.Github.io>    LO-VE    <Qti3eQti3e@Gmail.com>        *
 *****************************************************************************/

'use strict';

(function(){
    var app = angular.module('vcsApp',[])
        .config(['$routeProvider',function($routeProvider){
            $routeProvider
                .when('/',{templateUrl: 'pages/dashboard.html',activetab:'dashboard',controller:HomeCtrl})
                .when('/profile/:username',{
                    templateUrl:   'pages/profile.html',
                    controller:    ProfileCtrl,
                    activetab:     'profile'
                })
                .when('/about',{
                    templateUrl:    'pages/about.html',
                    controller:     AboutCtrl,
                    activetab:      'about'
                })
                .otherwise({ redirectTo: '/' });
        }])
        .run(['$rootScope', '$http', '$browser', '$timeout', "$route", function ($scope, $http, $browser, $timeout, $route){
            $scope.$on("$routeChangeSuccess",function(scope,next,current){
                $scope.part = $route.current.activetab;
            });
        }]);
    app.config(['$locationProvider',function($location){
        $location.hashPrefix('!');
    }]);
})();