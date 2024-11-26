!function(n) {
    "use strict";
    function e(n) {
        o.innerHTML = n.innerHTML.replace(/\n|<br>|<div><br><\/div>|<div>/g, "_newline___ktlu_");
        var e = o.innerText || o.textContent;
        return $io.str.autolink(e.replace(/\n|_newline___ktlu_/g, "<br>"))
    }
    function t() {}
    var i = []
      , o = document.createElement("div")
      , r = "--- Type something ---"
      , l = $io.fn.debounce(t, 300)
      , u = function(n) {
        var o = 0;
        n || (n = r),
        $window($extend({
            baseClass: "ui_note",
            icon: "c/sys/skins/w93/apps/pin.png",
            title: "Note",
            html: n,
            baseHeight: 200,
            baseWidth: 200,
            img: null,
            dock: null,
            maximi: !0,
            resizable: !0,
            onopen: function(n, r) {
                o = i.push({
                    el: n,
                    body: r
                }) - 1,
                r.setAttribute("tabindex", "0"),
                r.innerHTML = e(r),
                r.onblur = function() {
                    r.contentEditable = !1,
                    r.innerHTML = e(r),
                    t()
                }
                ,
                r.onfocus = function() {
                    r.contentEditable = !0,
                    r.style.borderColor = "#000"
                }
                ,
                r.onkeyup = function() {
                    l()
                }
            },
            onclose: function(n, e) {
                i[o] = null,
                t()
            },
            onresize: l,
            ondrag: l
        }, n))
    };
    window.$note = u;
    n.$note = u
}(this);

le._apps.note = {
  categories: "Utility",
  icon: "apps/pin.png",
    exec: function(e, t) {
                "object" == typeof t ? ("string" != typeof e || t.html || (t.html = e),
                $note(t)) : $note(e)
    },

}
