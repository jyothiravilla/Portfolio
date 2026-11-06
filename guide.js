// Shared script for project guide pages: adds a Copy button to every .codebox.
    // Add a copy button to every code box. The button copies the box's plain text.
(function () {
    var copyIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>';
    var doneIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>';

    function fallbackCopy(text) {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        var ok = false;
        try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
        document.body.removeChild(ta);
        return ok;
    }

    document.querySelectorAll('.codebox').forEach(function (box) {
        var bar = box.querySelector('.codebox-bar');
        var code = box.querySelector('pre code');
        if (!bar || !code) return;
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'copy-btn';
        btn.innerHTML = copyIcon + '<span>Copy</span>';
        btn.setAttribute('aria-label', 'Copy ' + (bar.textContent || 'code').trim());
        bar.appendChild(btn);

        btn.addEventListener('click', function () {
            var text = code.textContent;
            var show = function (ok) {
                btn.classList.toggle('done', ok);
                btn.innerHTML = (ok ? doneIcon : copyIcon) + '<span>' + (ok ? 'Copied' : 'Select and copy') + '</span>';
                setTimeout(function () {
                    btn.classList.remove('done');
                    btn.innerHTML = copyIcon + '<span>Copy</span>';
                }, 1800);
            };
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(text).then(function () { show(true); }, function () { show(fallbackCopy(text)); });
            } else {
                show(fallbackCopy(text));
            }
        });
    });
})();
