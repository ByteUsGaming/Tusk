#pragma strict
var currentHPText:UI.Text;
var healthBar:UI.Slider; 

function Update () {
	currentHPText.text = healthBar.value + " %";
}