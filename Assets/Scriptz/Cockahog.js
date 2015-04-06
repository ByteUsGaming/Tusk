var player : GameObject;
var life:float = 500;
var MoveSpeed = 50;
var StunTime:int = 2;
var damage: float = 35;
var Charging = false;
var cockahogAudio:AudioSource;
var Aggro: AudioClip;
var Diedie:AudioClip;
var LootTable:GameObject[];

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
		Death();
		}
	}

function Death() {
		
		//Death animation
		Destroy(gameObject); 
		
		// Drop Loot
		Instantiate(LootTable[Random.Range(0,LootTable.Length)],gameObject.transform.position, gameObject.transform.rotation);

		// Death Sound
		GameObject.Find("Main Camera").GetComponent(AudioSource).PlayOneShot(Diedie,0.3);
		
}

	//Enemy takes damage
function OnCollisionEnter(other:Collision){
	switch(other.gameObject.tag){
	
	case "Player":
	player.GetComponent(Player).takeDamage(damage,2.0);
	break;
	
	case "Flamethrower":
	life -=8;
	break;
	
	case "Shotgun":
  	life -= 10;
	break;
	
	case "Pistol":
  	life -= 15;
  	break;
  	
  	case "LaserRifle":
	life -= 50;
	break;
  	
	default:
	gameObject.GetComponent.<Rigidbody>().velocity=Vector3.zero;
	yield WaitForSeconds(StunTime);
	Charging=false;
	break;
	
	}
}
	

	
function OnTriggerStay(other:Collider){
	if(other.gameObject.CompareTag("Player")){
	if(!Charging){
	transform.LookAt(player.transform);
	yield WaitForSeconds(1);
	GetComponent.<Rigidbody>().velocity=transform.forward*MoveSpeed;
	Charging=true;
	//Cyclone.setActive(true);
	}
	}
}
function OnTriggerEnter(other:Collider){
	switch(other.tag){
	
	case "Flamethrower":
	life -=8;
	break;
	
	case "Player":
	cockahogAudio.PlayOneShot(Aggro);
	break;
	
	default:
	break;
	}
}
	
	
	

