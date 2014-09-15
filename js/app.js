/**
 * Created by pbaker on 9/14/14.
 */
angular.module('madlib', [])
    .controller('MadlibController', ['$scope', MadlibController]);

function MadlibController ($scope) {
    // Initial app state
    $scope.appState = 'words';

    // Initial placeholders
    $scope.madlib = {
        gender:             'male'
    };

    // TODO Is there a better way?
    // convert to ng-change
    $scope.$watch(
        'madlib.gender',
        function (obj) {
            if (obj === 'male') {
                $scope.madlib.pronounSubject = 'he';
                $scope.madlib.pronounAdjective = 'his';
                $scope.madlib.pronounObject = 'him';
            } else {
                $scope.madlib.pronounSubject = 'she';
                $scope.madlib.pronounAdjective = 'her';
                $scope.madlib.pronounObject = 'her';
            }
        },
        true
    );

    $scope.submit = function() {
        $scope.error = null;

        if ($scope.myForm.$valid) {
            $scope.appState = 'result';
        } else {
            $scope.appState = 'words';
        }
    };

    $scope.resetMadlib = function () {
        $scope.appState = 'words';

        $scope.madlib = {
            gender: 'male'
        };
    };
}
