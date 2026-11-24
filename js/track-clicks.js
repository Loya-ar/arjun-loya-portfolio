/* Counts clicks on project links without slowing them down.
 * Links tagged data-go="<name>" open their real URL as normal. In the background,
 * /go/<name>?silent loads in a hidden frame, so Vercel Web Analytics (free plan, page views
 * only) records a view of /go/<name>. The Pages tab then shows which projects get opened. */
(function () {
    function track(event) {
        var link = event.target.closest && event.target.closest("a[data-go]");
        if (!link) { return; }
        var frame = document.createElement("iframe");
        frame.src = "/go/" + encodeURIComponent(link.getAttribute("data-go")) + "?silent";
        frame.setAttribute("aria-hidden", "true");
        frame.tabIndex = -1;
        frame.style.cssText = "position:absolute;width:0;height:0;border:0;visibility:hidden";
        document.body.appendChild(frame);
        setTimeout(function () { frame.remove(); }, 10000);
    }
    document.addEventListener("click", track);
    document.addEventListener("auxclick", track); // middle-click opens in a new tab
})();
