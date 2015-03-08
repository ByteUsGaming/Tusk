var Player : GameObject;
var life = 500;
var MoveSpeed = 50;
var StunTime:int = 2;
var Charging = false;
var cockahogAudio:AudioSource;
var Aggro: AudioClip;
var Diedie:AudioClip;
//var Cyclone:GameObject;
function Start(){
//Cyclone.setActive(false);
}
function Update () 
	{
	if(GetComponent.<Rigidbody>().velocity==Vector3.zero){
	Charging=false;
	}
   //Enemy death behavior
	if(life <= 0){
		life = 0;
		//Death animation
		GameObject.Find("Main Camera").GetComponent(AudioSource).PlayOneShot(Diedie,0.3);
		Destroy(gameObject); 
		}
	}

	//Enemy takes damage
function OnCollisionEnter(other:Collision){
if(other.gameObject.CompareTag("Player")){
	Player.GetComponent("Player").takeDamage(35,2.0);
	}
if(other.gameObject.CompareTag("Shotgun")){
  	life -= 10;
	}
	if(other.gameObject.CompareTag("Pistol")){
  	life -= 15;
  	}
	else{
	gameObject.GetComponent.<Rigidbody>().velocity=Vector3.zero;
	yield WaitForSeconds(StunTime);
	Charging=false;
	//Cyclone.setActive(false);
	}
	}
	

	
	function OnTriggerStay(other:Collider){
	if(other.gameObject.CompareTag("Player")){
	if(!Charging){
	transform.LookAt(Player.transform);
	yield WaitForSeconds(1);
	GetComponent.<Rigidbody>().velocity=transform.forward*MoveSpeed;
	Charging=true;
	//Cyclone.setActive(true);
	}
	}
	}
	function OnTriggerEnter(other:Collider){
	if(other.gameObject.CompareTag("Player")){
	cockahogAudio.PlayOneShot(Aggro);
	}
	}
	
	
	

