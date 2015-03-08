#pragma strict
var player: GameObject;

function OnTriggerStay(other : Collider){
	if(other.tag == "Player"){
		player.GetComponent(Player).takeTrueDamage(100);
	}
}