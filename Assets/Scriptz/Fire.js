#pragma strict
var player: GameObject;

function OnTriggerStay(other : Collider){
	if(other.tag == "Player"){
		player.GetComponent(Player).takeDamage(5,0.25);
	}
}