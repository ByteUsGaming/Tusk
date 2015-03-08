#pragma strict
var creditAudio:AudioSource;
var chaChing:AudioClip;
function OnTriggerEnter(hit:Collider){
	if(hit.gameObject.tag == "Player"){
		hit.GetComponent(AudioSource).PlayOneShot(chaChing);
		hit.gameObject.GetComponent(Player).getMoney(Random.Range(5,25));
		Destroy(gameObject);
	}
}