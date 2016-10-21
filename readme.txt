=== Codeblocks Extended with PrismJS ===
Contributors: duplaja
Donate link: https://www.wptechguides.com/donate/
Tags: code, pre, prismjs, code highlighting, clipboardjs
Requires at least: 3.0.1
Tested up to: 4.6.1
Stable tag: trunk
License: GPLv2
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Codebocks Extended with PrismJS includes syntax highlighting, copy to clipboard, and Visual + Text editor integration.

== Description ==

Codeblocks Extended with PrismJS was born of a personal need for a lightweight code highlighter, with special functionality. 
Many of the other PrismJS based plugins in the repository were either outdated, or were lacking features that I was looking for.

Features:

*   Integrates the latest PrismJS build, with the most common langauges used.
*   Integrates the PrismJS line-numbers plugin, to automatically number lines of code.
*   Integrates the PrismJS line-highlight plugin to allow you to highlight specific lines of code.
*   Integrates ClipboardJS + custom jQuery to add a "Copy to Clipboard" button to each code block.
*   Custom Text Editor button to wrap selected text with the most commmon `<pre>` and `<code>` classes, and replacing special characters with their HTML safe equivalents.
*	Custom Visual Editor / TinyMCE dropdown button, with the most common languages to wrap selected text.
*	Since this works via wrapping `<pre>` and `<code>` tags with classes, you can use all custom class settings that PrismJS offers.
*	No shortcodes to mess with, so you don't have to worry about losing whitespace between editor modes.
*	No settings page needed: Just activate it and go!

Note: This does NOT auto-detect the language. Most plugins that do so brute force the languages or require file extensions, resulting in a much heavier plugin. The decision was made to keep this as light-weight as possible.

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/prism-js` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress
1. That's it!

== Frequently Asked Questions ==

= How do I highlight lines of code? =

You can specifiy lines to highlight using the data-line attribute of the `<pre>` tag, in the Text Editor.

* Single Line: data-line="7"
* Range: data-line="3-9"
* Combination: data-line="2,4-6,9-12"

= What other cool things can I do? =

* You can link to individual lines of code, using href="#{pre-element-id}.{lines}". Ex: href="#preblockone.5-6".
* If you are comfortable, you can rebuild prism.min.js to include other languages than the ones below, or modify your CSS.
* Learn how this plugin was built, from start to end (and build your own version) [Build Your Own](https://www.wptechguides.com/code-blocks-with-highlighting-beginning/)


= How do I specify a language if it's not one of the defaults on the dropdown? =

You can specifiy languages using the language-xxxx class of the `<pre>` and `<code>` tags via the Text Editor. 

For the sake of plugin size and speed, only the most common languages were included in this plugin. See below for the complete list.

For a list of class names, you can look here on the official PrismJS site: [PrismJS Language List](http://prismjs.com/#languages-list)

= Which languages are included by default? =

*	Markup
*	CSS
*	C Languages
*	JavaScript
*	Apache Configuration
*	Bash
*	Batch
*	Ruby
*	Docker
*	Git
*	HTML
*	HTTP
*	Makefile
*	Markdown
*	Nginx Config
*	PHP
*	Python
*	SASS and SCSS
*	SQL


== Screenshots ==

1. Sample code block created with PrismJS Extended. Notice the copy button in the top right corner. 

2. Code block with line highlighting.

3. Visual Editor TinyMCE options.

4. Text Editor Button

== Changelog ==

= 1.0 =
* Initial Plugin Release

== Upgrade Notice ==

= 1.0 =
* Initial Plugin Release
