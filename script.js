ign=["Accessories-Text-Editor.png","computer.png","recycle-bin.png","terminal.png","network.png","shark.png"];
var a = [document.createElement("div"), document.createElement("img"),document.createElement("nav"),[]];
for (var i = ign.length - 1; i >= 0; i--) {
	var t = document.createElement("img");
	t.src="png/"+ign[i];
	t.className="nv-ig";
	a[3].push(t);
}
a[1].src="png/bg.jpg";
a[0].id="content";
a[1].id="bg-img";
a[2].id="nv";
a[0].appendChild(a[1]);
a[0].appendChild(a[2])
for (var i = a[3].length - 1; i >= 0; i--) {
	a[2].appendChild(a[3][i]);
}
