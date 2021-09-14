// this is the code which will be injected into a given page...

(function() {

window.history.pushState(null, null, window.location.href);
window.onpopstate = function () {
    window.history.go(1);
};
})();