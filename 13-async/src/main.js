/**
 * Created by wuxueyong on 17/8/1.
 */
var as = document.querySelectorAll('a')
for (var i = 0; i < as.length; i++) {
    as[i].onclick = function () {
        if (window.location.hash === '#/home') {
            require.ensure([], function (require) {
                require('./home.js').show();
            });
        } else if (window.location.hash === '#/user') {
            require.ensure([], function (require) {
                require('./user.js').show();
            });
        }
    }
}