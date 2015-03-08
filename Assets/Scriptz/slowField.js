#pragma strict

function OnTriggerEnter(hit:Collider){
	if(hit.gameObject.tag == "Player"){
		hit.gameObject.GetComponent(Player).moveSpeed *= 0.5;
		yield WaitForSeconds(1.2);
		hit.gameObject.GetComponent(Player).moveSpeed *= 2;
		yield WaitForSeconds(2.0);
		Destroy(gameObject);
	}
}