/**
 * Created by pbaker on 9/14/14.
 */
angular.module('madlib', [])
    .controller('MadlibController', ['$scope', MadlibController]);

function MadlibController ($scope) {
    $scope.madlib = {
        name:               'name',
        jobTitle:           'job title',
        tediousTask:        'tedious task',
        dirtyTask:          'dirty task',
        celebrity:          'celebrity',
        usefulSkill:        'useful skill',
        obnoxiousCelebrity: 'obnoxious celebrity',
        hugeNumber:         'huge number',
        adjective:          'adjective',
        gender:             'male'
    };

    // TODO Is there a better way?
    $scope.$watch(
        function () {
            return $scope.madlib.gender;
        },
        function (obj) {
            if (obj === 'male') {
                $scope.madlib.pronounSubject = 'he';
                $scope.madlib.pronounAdjective = 'his';
                $scope.madlib.pronounObject = 'him';
            } else {
                $scope.madlib.pronounSubject = 'she';
                $scope.madlib.pronounAdjective = 'her';
                $scope.madlib.pronounObject = 'her'
            }
        },
        true
    );
}
