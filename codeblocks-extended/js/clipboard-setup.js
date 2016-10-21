   /* Prism copy to clipboard for all pre with copytoclipboard class */
        jQuery('pre.copytoclipboard').each(function () {
            $this = jQuery(this);
            $button = jQuery('<button class="copytoclipboard-button"></button>');
            $this.wrap('<div/>').removeClass('copytoclipboard');
            $wrapper = $this.parent();
            $wrapper.addClass('copytoclipboard-wrapper').css({position: 'relative', padding: 20});
            $button.css({position: 'absolute', top: 0, right: 0}).appendTo($wrapper).addClass('copytoclipboard btn btn-default');
            var copyContentsToClipboard = new Clipboard('button.copytoclipboard', {
                target: function (trigger) {
                    return trigger.previousElementSibling;
                }
            });
            copyContentsToClipboard.on('success', function (event) {
                event.clearSelection();
                event.trigger.textContent = '✓';
                window.setTimeout(function () {
                    event.trigger.textContent = '';
                }, 2000);
            });
            copyContentsToClipboard.on('error', function (event) {
                event.trigger.textContent = 'Press "Ctrl + C" to copy';
                window.setTimeout(function () {
                    event.trigger.textContent = '';
                }, 2000);
            });
        });
