#pragma strict
var player: GameObject;

function OnTriggerEnter(hit:Collider){
	if(hit.gameObject.tag == "Player"){
	hit.gameObject.GetComponent(Player).takeDamage(1,0.25);
    
	}
}