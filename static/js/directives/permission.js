grano.directive('gnPermission', ['$timeout', 'session', function ($timeout, session) {
    return {
        restrict: 'AE',
        scope: {
            'project': '=',
            'role': '@role',
        },
        link: function (scope, element, attrs, model) {
            element.addClass('hidden');
            scope.$watch('project', function(n, o, project) {
                if (scope.project && scope.project.slug) {
                    session.get(function(res) {
                        var perms = res.permissions[scope.project.slug] || {};
                        if (perms[scope.role]) {
                            element.removeClass('hidden');
                        }
                    });
                }
            });
        }
    };
}]);
