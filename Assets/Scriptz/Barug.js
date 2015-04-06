var player : GameObject;
var life:float = 100;
var MoveSpeed = 8;
var MaxDist = 0;
var MinDist = 0;
var damage:float = 20.0;
var LootTable:GameObject[];
function Update () 
	{
	// Barug movement behavior
	var controller:CharacterController = GetComponent(CharacterController);
    transform.LookAt(player.transform);
    if( Vector3.Distance(transform.position,player.transform.position) <= MaxDist && Vector3.Distance(transform.position,player.transform.position)>= MinDist){
         controller.Move(transform.forward*MoveSpeed*Time.deltaTime);
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

function OnTriggerEnter(other:Collider) {
	switch(other.tag){
	
	case "Flamethrower":
	life -=8;
	break;
	
	
	default:
	break;
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

