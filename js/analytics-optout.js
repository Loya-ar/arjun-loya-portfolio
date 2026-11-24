/* Vercel Web Analytics setup, shared by every page.
 * Visiting any page with ?me (e.g. arjunloya.com/?me) marks this browser as the owner's,
 * and its visits stop being counted. ?me=off turns counting back on. */
(function () {
    window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };

    var KEY = "skip-analytics";
    try {
        var params = new URLSearchParams(window.location.search);
        if (params.has("me")) {
            if (params.get("me") === "off") { localStorage.removeItem(KEY); }
            else { localStorage.setItem(KEY, "1"); }
        }
    } catch (e) { /* storage blocked: count the visit as normal */ }

    window.va("beforeSend", function (event) {
        try {
            if (localStorage.getItem(KEY) === "1") { return null; }
        } catch (e) { /* storage blocked */ }
        return event;
    });
})();
