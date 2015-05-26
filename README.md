#Forceify

Forceify is a simple, lightweight and easy to use jQuery plugin that adds a little fun to any site.

#getting started

1. Download the forceify.js zip file from <a href="http://www.github.com/shawnebeyer">github</a> and place the files into your site's directory.

2. Include a link to the style.css file in your HTML document's head section, linking forecify's styling to your website.

3. Include jQuery and forceify.js in your HTML document, before the closing body tag. Note that the plugin script must be placed after the jQuery script, and must be properly linked from your directory (example, js/forceify.js).

#usage

1. Add a class of .force to any HTML element. The plug-in starts on a click, so why not start off with a link click?

"&lt;a class="force"&gt;DEMO&lt;/a&gt; "

2. Paste the following code into your primary JavaScript file (for example, main.js) to initialize forceify.js and to call the function:

"$(function() {
	$('.force').forceify();
});"
