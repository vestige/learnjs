'use strict';
var learnjs = {};

learnjs.problemView = function(no) {
    var title = 'Problem #' + no + ' Comming soon!';
    return $('<div class="problem-view">').text(title);
}

learnjs.showView = function(hash) {
    var routes = {
        '#problem' : learnjs.problemView
    };
    var hashParts = hash.split('-');
    var viewFn = routes[hashParts[0]];
    if (viewFn) {
        $('.view-container').empty().append(viewFn(hashParts[1]));
    }
}

learnjs.appOnReady = function() {
    learnjs.showView(window.location.hash);
}