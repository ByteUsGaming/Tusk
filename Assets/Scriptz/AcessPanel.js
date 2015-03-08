var life = 80;
var power: GameObject;
var useKeyAudio:AudioSource;
var useKey:AudioClip;
var keyError:AudioClip;
var keyNeed:int;

function Update(){
	if(life <= 0){
			Death();
	}
}
function OnCollisionEnter(other:Collision){
	if (other.gameObject.CompareTag("Projectile")){
  		life -= 25;
  	}
}

function OnTriggerEnter(hit:Collider){
	if(hit.gameObject.tag == "Player"){
		if(hit.gameObject.GetComponent(Player).useKey(keyNeed) == keyNeed){
			GameObject.Find("Electricity").SetActive(false);
			hit.GetComponent(AudioSource).PlayOneShot(useKey);
		}
		else if(hit.gameObject.GetComponent(Player).useKey(keyNeed) != keyNeed){
			hit.GetComponent(AudioSource).PlayOneShot(keyError);
		}
	}
}

function Death(){
	power.GetComponent(Animation).Play();
	yield WaitForSeconds(1.5);
	power.SetActive(false);
}