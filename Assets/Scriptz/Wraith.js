var Player : GameObject;
var life = 500;
var MoveSpeed = 50;
var Charging = false;
var Poison : GameObject;
var LootTable:GameObject[];

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
		Death();
		}
	}

	//Enemy takes damage
function OnCollisionEnter(other:Collision){
switch(other.gameObject.tag){
	
	case "Shotgun":
  	life -= 10;
	break;
	
	case "Pistol":
  	life -= 15;
	break;
	
	case "LaserRifle":
	life -= 50;
	break;
	
	}
	Charging = false;	
}
	
function Death(){
		//Death animation
		Destroy(gameObject); 
		
		//Drop Loot
		Instantiate(LootTable[Random.Range(0,LootTable.Length)],gameObject.transform.position, gameObject.transform.rotation);
		
		// Death Sound
		//GameObject.Find("Camera").GetComponent(AudioSource).PlayOneShot(Diedie,0.3);
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
	function OnTriggerEnter(other:Collider) {
	switch(other.tag){
	
	case "Flamethrower":
	life -=8;
	break;
	
	case "Player":
	//cockahogAudio.PlayOneShot(Aggro);
	break;
	
	default:
	break;
	}
}
