fntc=[window_txt_ed,null,null,null,null,window_cz]
ign=["Accessories-Text-Editor.png","computer.png","recycle-bin.png","terminal.png","network.png","shark.png"];
var a = [document.createElement("footer"), document.createElement("center"),document.createElement("nav"),[]];
for (var i = ign.length - 1; i >= 0; i--) {
	var t = document.createElement("img");
	t.src="png/"+ign[i];
	t.className="nv-ig";
	a[3].push(t);
	t.onclick=fntc[i];
}
a[2].id="nv";
a[0].appendChild(a[1]);
a[1].appendChild(a[2]);
for (var i = a[3].length - 1; i >= 0; i--) {
	a[2].appendChild(a[3][i]);
}
document.body.appendChild(a[0]);

function window_cz() {
	var a = [document.createElement("div"),document.createElement("div"),document.createElement("button"),document.createElement("div")];
	a[0].className="window";
	a[1].className="window-title";
	a[2].className="window-title-btn";
	a[3].className="window-content";
	a[2].onclick=function () {
		document.getElementsByClassName('window')[0].remove();
	}
	a[1].innerHTML="Sample application";
	a[3].innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
	a[0].appendChild(a[1]);
	a[2].innerHTML="X";
	a[1].appendChild(a[2]);
	a[0].appendChild(a[3]);
	document.body.appendChild(a[0]);
}
function window_txt_ed() {
	var a = [document.createElement("div"),document.createElement("div"),document.createElement("button"),document.createElement("textarea")];
	a[0].className="window";
	a[1].className="window-title";
	a[2].className="window-title-btn";
	a[3].className="window-content";
	a[2].onclick=function () {
		document.getElementsByClassName('window')[0].remove();
	}
	a[1].innerHTML="Text editor";
	a[0].appendChild(a[1]);
	a[2].innerHTML="X";
	a[1].appendChild(a[2]);
	a[0].appendChild(a[3]);
	document.body.appendChild(a[0]);
}