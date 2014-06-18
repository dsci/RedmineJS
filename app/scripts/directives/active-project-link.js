'use strict';

var activeProjectLinkDirective = function(){
  return {
    restrict: 'A',
    template: '<a href="#/projects/{{project.id}}" data-tt-rel="project_{{project.id}}">{{project.name}}</a>',
    link: function($scope, element, attrs){
      $(element).on('click', function(){
        var listId = $(this).parent().attr('id');
        $('#' + listId + ' li.active').each(function(){
          $(this).removeClass("active");
        })
        $(this).addClass("active");
      })
    }
  }
}

redmineJsApp.directive('ngActiveProject', activeProjectLinkDirective);