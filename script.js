document.getElementsByTagName('title')[0].innerHTML = "GNOME template";
st=["org.gnome.gedit.desktop","org.gnome.Nautilus.desktop","org.gnome.desktop.trash","org.gnome.Terminal.desktop"]
sc=["Accessories-Text-Editor.png", "computer.png","recycle-bin.png","terminal.png"]
elm= [];
for (var i = 0; i < 4; i++) {
	elm.push(default_ig("desktop-btn","png/"+sc[i],st[i]));
	document.body.appendChild(elm[i]);
}
function default_ig(cls, src, site) {
	var a = document.createElement("img")
	a.src=src;
	a.className=cls;
	a.onclick=function() {
		transfer_site(site);
	}
	return a;
}
function transfer_site(url) {
	var a = document.createElement("a");
	a.href=url;
	a.click();
}