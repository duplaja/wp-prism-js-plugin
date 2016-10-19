(function() {
    tinymce.create("tinymce.plugins.prism_button_plugin", {

        //url argument holds the absolute url of our plugin directory
        init : function(ed, url) {

            //add new button     
            ed.addButton("prism", {
			 type: "menubutton",
                image : url + "/crystal.png",
           	title: "Prism Code Blocks",

			menu: [{
		
			text: 'PHP',		
			onclick: function() {
               	var selected_text = ed.selection.getContent({format : "text"});
				if (selected_text == '') { selected_text = '//Paste Your Code Here'; }
               	var return_text = '<pre class="language-php line-numbers copytoclipboard"><code class="language-php">' + selected_text + '</code></pre>';
               	ed.execCommand("mceInsertContent", 0, return_text);
            	}
        	}, {

			text: 'JavaScript',		
			onclick: function() {
               	var selected_text = ed.selection.getContent({format : "text"});
				if (selected_text == '') { selected_text = '//Paste Your Code Here'; }
               	var return_text = '<pre class="language-javascript line-numbers copytoclipboard"><code class="language-javascript">' + selected_text + '</code></pre>';
               	ed.execCommand("mceInsertContent", 0, return_text);
            	}
        	},  {

		text: 'CSS',		
			onclick: function() {
               	var selected_text = ed.selection.getContent({format : "text"});
				if (selected_text == '') { selected_text = '//Paste Your Code Here'; }
               	var return_text = '<pre class="language-css line-numbers copytoclipboard"><code class="language-css">' + selected_text + '</code></pre>';
               	ed.execCommand("mceInsertContent", 0, return_text);
            	}
        	}, {

		text: 'Python',		
			onclick: function() {
               	var selected_text = ed.selection.getContent({format : "text"});
				if (selected_text == '') { selected_text = '//Paste Your Code Here'; }
               	var return_text = '<pre class="language-python line-numbers copytoclipboard"><code class="language-python">' + selected_text + '</code></pre>';
               	ed.execCommand("mceInsertContent", 0, return_text);
            	}
        	}, {

		text: 'Bash',		
			onclick: function() {
               	var selected_text = ed.selection.getContent({format : "text"});
				if (selected_text == '') { selected_text = '//Paste Your Code Here'; }
               	var return_text = '<pre class="language-bash line-numbers copytoclipboard"><code class="language-bash">' + selected_text + '</code></pre>';
               	ed.execCommand("mceInsertContent", 0, return_text);
            	}
        	}]
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
