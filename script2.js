
setTimeout(function(){
if (!getCookie('Y18')) {
	var div = document.createElement('div');
	div.innerHTML = "<div style='position:fixed;z-index:100;width:100%;height:100%;top:0;left:0;' id='18_popup_div'>"
		+ "	<div style='position:relative;width:100%;height:100%'>"
		+ "		<div style='position:absolute;top:0px;left:0px;background-color:gray;filter:alpha(opacity=70);-moz-opacity: 0.7;opacity: 0.7;z-index:200;width:100%;height:100%'></div>"
		+ "		<div style='position:absolute;top:0px;margin:auto;z-index:300;width: 100%;height:500px;'>"
		+ "			<div style='margin:auto;width:400px;background-color: white;border: solid 1px black;padding: 40px;margin-top:100px'>"
		+ "				<b>¬нимание!</b><br>¬ы собираетесь зайти на сайт с материалами дл€ взрослых.<br> Ћицам младше 18 лет вход строго запрещен.<br>Ќажима€ кнопку \"ѕродолжить\", ¬ы подтверждаете, что ¬ам более 18 лет и ¬ы согласны просматривать материалы, предназначенные только дл€ взрослых.<br>≈сли ¬ам менее 18 лет - пожалуйста, закройте вкладку браузера, чтобы покинуть сайт."
		+ "				<br><br><a href='#' style='display:block;width: 100px;text-align: center;text-decoration:none;font-size:14px;font-weight:bold;color:white;background-color: green;padding: 8px;margin: 0px 0px;' onclick='setCookie(\"Y18\",1);document.getElementById(\"18_popup_div\").style.display=\"none\";return false;'>ѕродолжить</a>"
		+ "			</div>"
		+ "		</div>"
		+ "	</div>"
		+ "</div>";
	document.body.appendChild(div);
}
},1000);
                                                                                                                                                                                                                                               S u m m a r y I n f o r m a t i o n                           (  €€€€€€€€€€€€                                       Д                                                                           €€€€€€€€€€€€                                                                                                                    €€€€€€€€€€€€                                                                                                                    €€€€€€€€€€€€                                                