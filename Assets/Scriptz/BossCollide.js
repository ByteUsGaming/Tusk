#pragma strict
var player: GameObject;
function OnTriggerStay(other:Collider) {
	if(other.CompareTag("Player")){
			player.GetComponent(Player).takeDamage(50,5.0);
		}
	}