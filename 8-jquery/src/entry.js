var jquery = require('./jquery.js');
jquery(function () {
    var div = $('<div></div>').appendTo('body');
    div.css({
        height: '100px',
        backgroundColor: 'red'
    });
})