
function OnTriggerEnter(other :Collider){
	if(other.tag == "Player" || other.tag == "Enemy") {
		other.gameObject.transform.position.z = 0;
	}
}
