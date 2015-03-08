#pragma strict
var keyAudio:AudioSource;
var gotKey:AudioClip;
var keyNum:int;
function OnTriggerEnter(hit:Collider){
	if(hit.gameObject.tag == "Player")
		hit.GetComponent(AudioSource).PlayOneShot(gotKey);
		hit.gameObject.GetComponent(Player).getKey(keyNum);
		Destroy(gameObject);
}

