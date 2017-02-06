// ==UserScript==
// @name         Subhd for RARBG
// @namespace    http://rarbg.to/
// @version      0.1
// @description  Adds Subhd shortcut to RARBG.to
// @author       tofuliang
// @match        https://rarbg.to/*
// @match        http://rarbg.to/*
// ==/UserScript==

$(document).on('ready AutoPagerize_DOMNodeInserted', function(e) {
	$('a[href^="/torrents.php?imdb="][subhded!=subhded]').each(function() {
		var title = document.location.href.match(/https?:\/\/rarbg\.to\/torrent\/\w+/)?$('body > table > tbody > tr > td > div > div > table > tbody > tr > td > b > h1').text():$(this).parent('td').find('a').text(),
			parts = title.replace(/\s+/g,'.').split('.');
		while(parts.length > 0 && (part = parts.pop().match(/^\d{4}$/)) === null){}
		parts.push(part);
		var keyword = parts.join('.'),
			url='http://subhd.com/search/'+keyword;
		$(this).after('<a style="margin-left:5px;" href='+url+' target="_blank" onmouseover="return overlib(\'<span>去subhd找字幕</span>\')" onmouseout="return nd();"><img src="http://subhd.com/images/favicon-32x32.png" style="height:18px;"></img></a>');
		$(this).attr('subhded','subhded');
	});
});
$(document).bind("ready", function() {});
$(document).ready(function() {
	$(document).trigger("ready");
});
