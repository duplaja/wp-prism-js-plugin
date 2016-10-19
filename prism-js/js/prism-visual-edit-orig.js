(function() {
    tinymce.create("tinymce.plugins.prism_button_plugin", {

        //url argument holds the absolute url of our plugin directory
        init : function(ed, url) {

            //add new button     
            ed.addButton("prism", {
                title : "Prism Default Tags",
                cmd : "prism_command",
                image : "https://cdn2.iconfinder.com/data/icons/free-mobile-icon-kit/32/Crystal.png"
            });

            //button functionality.
            ed.addCommand("prism_command", function() {
                var selected_text = ed.selection.getContent({format : "text"});
                var return_text = "<pre class=\"language-php line-numbers copytoclipboard\"><code class=\"language-php\">" + selected_text + "</code></pre>";
                ed.execCommand("mceInsertContent", 0, return_text);
            });

        },

        createControl : function(n, cm) {
            return null;
        },

        getInfo : function() {
            return {
                longname : "PrismJS Default Tag Insertion",
                author : "Dan Dulaney",
                version : "1"
            };
        }
    });

    tinymce.PluginManager.add("prism_button_plugin", tinymce.plugins.prism_button_plugin);
})();
