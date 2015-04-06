#pragma strict
var player: GameObject;
var damage: float = 10.0;
function OnTriggerEnter(hit:Collider){
	if(hit.gameObject.tag == "Player"){
	hit.gameObject.GetComponent(Player).takeDamage(damage,0.50);
    
	}
}