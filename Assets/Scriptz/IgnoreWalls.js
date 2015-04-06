#pragma strict

function OnTriggerEnter(other:Collider) {
	if(other.tag == "Other") {
		Destroy(gameObject);
	}
}