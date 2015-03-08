#pragma strict
var credits:UI.Text;

function Update(){
	credits.text = GameObject.Find("Kay").GetComponent(Player).credits.ToString();
}