<?php
/**
* Plugin Name: Codeblocks Extended with PrismJS
* Plugin URI: https://www.wptechguides.com
* Description: A Custom Code Syntax Highlighter based on PrismJS and ClipboardJS
* Version: 1.0
* Author: duplaja (Dan D.)
* Author URI: https://www.convexcode.com
**/


//enqueues all css files needed
function prism_js_enqueue_style() {
	wp_enqueue_style( 'prism-style', plugin_dir_url( __FILE__ ) . 'css/prism.css', false ); 
	
}
//enqueues all js files needed
function prism_js_enqueue_script() {
	wp_enqueue_script( 'prism-js', plugin_dir_url( __FILE__ ) . 'js/prism.min.js', false ); 
	wp_enqueue_script( 'clipboard-js', plugin_dir_url( __FILE__ ) . 'js/clipboard.min.js', false ); 
	wp_enqueue_script( 'clipboard-setup-js', plugin_dir_url( __FILE__ ) . 'js/clipboard-setup.js', '','',true ); 
	
	

}
add_action( 'wp_enqueue_scripts', 'prism_js_enqueue_style' );
add_action( 'wp_enqueue_scripts', 'prism_js_enqueue_script' );

function enqueue_plugin_scripts($plugin_array)
{
    //enqueue TinyMCE plugin script with its ID.
    $plugin_array["prism_button_plugin"] =  plugin_dir_url(__FILE__) . "js/prism-visual-edit.js";
    return $plugin_array;
}

add_filter("mce_external_plugins", "enqueue_plugin_scripts");

function register_buttons_editor($buttons)
{
    //register buttons with their id.
    array_push($buttons, "prism");
    return $buttons;
}

add_filter("mce_buttons", "register_buttons_editor");

//Adds a button to the text editor tab
//The button wraps selected text in prism pre and code tags
//Uses default settings, and converts < and > to html entities
function prism_js_button_script() 
{
    if(wp_script_is("quicktags"))
    {
        ?>
            <script type="text/javascript">
                
                //this function is used to retrieve the selected text from the text editor
                function getSel()
                {
                    var txtarea = document.getElementById("content");
                    var start = txtarea.selectionStart;
                    var finish = txtarea.selectionEnd;
                    return txtarea.value.substring(start, finish);
                }

                QTags.addButton( 
                    "prism_defaults", 
                    "Prism", 
                    callback
                );

                function callback()
                {
                    var selected_text = getSel();
				//replaces < ,>, and & with html entities to prevent stripping and display properly
				selected_text = selected_text.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;");

				//wraps the content with the tags
                    QTags.insertContent("<pre class=\"language-php line-numbers copytoclipboard\"><code class=\"language-php\">" +  selected_text + "</code></pre>");
                }
            </script>
        <?php
    }
}

add_action("admin_print_footer_scripts", "prism_js_button_script");
