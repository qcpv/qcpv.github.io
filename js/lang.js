var langs = ['ja','en', 'zh','fr'];
var langCode = sessionStorage.getItem('splang');
var langJS = null;


var translate = function(jsdata) {
  $("[tkey]").each(function(index) {
    var strTr = jsdata[$(this).attr('tkey')];
    $(this).html(strTr);
  });
}

if (langCode==null) {
  //see here for a list of possible values https://stackoverflow.com/questions/5580876/navigator-language-list-of-all-languages
  //substr(0,2) get the first two letters. so for example, "fr-BE" and "fr-CA" both become "fr"
	langCode = navigator.language.substr(0, 2);
	//alert("langCode is null");
  //console.log("langCode is null");
}


if (langs.includes(langCode)){
  $.getJSON('lang/' + langCode + '.json', translate);
  //console.log("langCode, "+langCode);
}
else{
  $.getJSON('lang/en.json', translate);
  //console.log("else");
}


function choose(choice) {
	sessionStorage.setItem('splang', choice );
	/*alert("You chossed " + sessionStorage.getItem('splang'));*/
  //console.log("set:",choice);
	location.reload();
}
