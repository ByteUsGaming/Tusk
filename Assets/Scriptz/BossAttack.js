#pragma strict

function OnTriggerEnter(hit:Collider){
	if(hit.gameObject.tag == "Player"){
		hit.gameObject.GetComponent(Player).takeDamage(20,0.5);
	}
}