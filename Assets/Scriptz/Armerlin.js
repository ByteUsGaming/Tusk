var player : GameObject;
var life:float = 100;
var MoveSpeed = 8;
var bullet:GameObject;
var bulletSpeed:float= 1000;
var chargeTime:float = 1.0;
var canFire:boolean = true;
var MaxDist = 0;
var open:Material;
var closed:Material;
var MinDist = 0;
var damage:float = 20.0;
var LootTable:GameObject[];
var blink:boolean = true;
var rend: Renderer;
function Start() {
	rend = GetComponent.<Renderer>();
	rend.enabled = true;
}
function Update () 
	{
	if(blink == true){
	rend.material = closed;
	}
	else{
	rend.material = open;
	}
	// Movement behavior
	var controller:CharacterController = GetComponent(CharacterController);
    transform.LookAt(player.transform);
    if( Vector3.Distance(transform.position,player.transform.position) <= MaxDist && Vector3.Distance(transform.position,player.transform.position)>= MinDist){
         controller.Move(transform.forward*MoveSpeed*Time.deltaTime);
   }
    if( Vector3.Distance(transform.position,player.transform.position)<= MinDist&& canFire == true)
   	{
   	blink=false;
   	Shoot();
   	canFire=false;
   	}
   // Death Check
	if(life <= 0) {
		Death();
		}
	}
	// Death Handling
function Death() {

		//Death animation
		Destroy(gameObject); 
		
		//Drop Loot
		Instantiate(LootTable[Random.Range(0,LootTable.Length)],gameObject.transform.position, gameObject.transform.rotation);
		
		// Death Sound
		//GameObject.Find("Camera").GetComponent(AudioSource).PlayOneShot(Diedie,0.3);
}

function OnCollisionEnter(other:Collision){
if(blink == false){
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
	}
else{

	}
}


function OnTriggerEnter(other:Collider) {
if(blink == false){
	switch(other.tag){
	
	case "Flamethrower":
	life -=8;
	break;
	
	
	default:
	break;
		}
	}
}

function OnTriggerStay(other:Collider){
	if(other.tag == "Player") {
			player.GetComponent(Player).takeDamage(damage,1.0);
	}
}
function takeEnvironDmg(amt : int){
	life -= amt;
}
function Shoot(){
	var shotFired = Instantiate(bullet, transform.position, transform.rotation);
	shotFired.GetComponent.<Rigidbody>().AddRelativeForce(Vector3.forward*bulletSpeed);
//	yield WaitForSeconds(1);
//	blink = true;
	canFire = false;
	ChargeTheLaser();
}
function ChargeTheLaser() {
WaitForSeconds(chargeTime);
canFire = true;
	}


