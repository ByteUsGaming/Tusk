var Player : GameObject;
var life = 500;
var MoveSpeed = 50;
var Charging = false;
var Poison : GameObject;
function Start(){
}
function Update () 
	{
	//if(Charging==true){
	//var cloud = Instantiate(Poison,gameObject.transform.position,gameObject.transform.rotation*Quaternion.Euler(0, 0, 0));
	//}
	if(GetComponent.<Rigidbody>().velocity==Vector3.zero){
	Charging=false;
	}
   //Enemy death behavior
	if(life <= 0){
		life = 0;
		//Death animation
		Destroy(gameObject); 
		}
	}

	//Enemy takes damage
function OnCollisionEnter(other:Collision){
if(other.gameObject.tag == "Shotgun"){
  	life -= 10;
  	Charging=false;
	}
if(other.gameObject.tag == "Pistol"){
  	life -= 20;
  	Charging=false;
	}	
	}
	

	
	function OnTriggerStay(other:Collider){
	if(other.gameObject.CompareTag("Player")){
	if(!Charging){
	transform.LookAt(Player.transform);
	var cloud = Instantiate(Poison,gameObject.transform.position,gameObject.transform.rotation*Quaternion.Euler(0, 0, 0));
	yield;
	GetComponent.<Rigidbody>().velocity=transform.forward*MoveSpeed;
	Charging=true;

	}
	}
	}
	function OnTriggerEnter(other:Collider){
	if(other.gameObject.CompareTag("Player")){
	//cockahogAudio.PlayOneShot(Aggro);
	}
	}
	