ign=["Accessories-Text-Editor.png","computer.png","recycle-bin.png","terminal.png","network.png","shark.png"];
var a = [document.createElement("footer"), document.createElement("center"),document.createElement("nav"),[]];
for (var i = ign.length - 1; i >= 0; i--) {
	var t = document.createElement("img");
	t.src="png/"+ign[i];
	t.className="nv-ig";
	a[3].push(t);
}
a[2].id="nv";
a[0].appendChild(a[1]);
a[1].appendChild(a[2]);
for (var i = a[3].length - 1; i >= 0; i--) {
	a[2].appendChild(a[3][i]);
}
document.body.appendChild(a[0]);
