var player;
player = GameObject.FindGameObjectWithTag("Player");
var life:float = 500;
var bullet:GameObject;
var bulletSpeed:float= 1000;
var chargeTime:float = 3.0;
var canFire:boolean = false;
var bbAudio:AudioSource;
var Aggro: AudioClip;
var Diedie:AudioClip;
var LootTable:GameObject[];

function Start(){
}
function Update () 
	{
	if(canFire) {
	canFire = false;
	chargeTime = 3.0;
	//GetComponent.<AudioSource>().Play();
	var shotFired = Instantiate(bullet, transform.position, transform.rotation *Quaternion.Euler(0, 0, 90));
    shotFired.GetComponent.<Rigidbody>().AddRelativeForce(Vector3.forward*bulletSpeed);
    
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
	break;
	
	}
}
	

	
function OnTriggerStay(other:Collider){
	if(other.gameObject.CompareTag("Player")){
	transform.LookAt(player.transform);
	yield WaitForSeconds(1);
ChargeTheLaser();
	}
	}

function OnTriggerEnter(other:Collider){
	switch(other.tag){
	
	case "Flamethrower":
	life -=8;
	break;
	
	case "Player":
	bbAudio.PlayOneShot(Aggro);
	break;
	
	default:
	break;
	}
}
	function ChargeTheLaser() {
	chargeTime -= 0.05;
	if(chargeTime <= 0.0) {
		canFire = true;
	}
}
	
	

