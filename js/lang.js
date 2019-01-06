var langs = ['jp','en', 'cn','fr'];
var langCode = sessionStorage.getItem('splang');
var langJS = null;


var translate = function(jsdata) {
  $("[tkey]").each(function(index) {
    var strTr = jsdata[$(this).attr('tkey')];
    $(this).html(strTr);
  });
}

if (langCode==null) {
	langCode = navigator.language.substr(0, 2);
	//alert("langCode is null");
}


if (langs.includes(langCode)){
  $.getJSON('lang/' + langCode + '.json', translate);
}
else{
  $.getJSON('lang/en.json', translate);
}


function choose(choice) {
	sessionStorage.setItem('splang', choice );
	/*alert("You chossed " + sessionStorage.getItem('splang'));*/
	location.reload();
}
