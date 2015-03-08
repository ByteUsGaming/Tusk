var player : GameObject;
var life = 100;
var MoveSpeed = 8;
var MaxDist = 0;
var MinDist = 0;

function Update () 
	{
	//Barug movement behavior
	var controller:CharacterController = GetComponent(CharacterController);
    transform.LookAt(player.transform);
    if( Vector3.Distance(transform.position,player.transform.position) <= MaxDist && Vector3.Distance(transform.position,player.transform.position)>= MinDist){
         controller.Move(transform.forward*MoveSpeed*Time.deltaTime);
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
	}
if(other.gameObject.tag == "Pistol"){
  	life -= 20;
	}	
	}

function OnTriggerStay(other:Collider) {
	if(other.CompareTag("Player")){
			player.GetComponent(Player).takeDamage(20,1.0);
		}
	}
function takeEnvironDmg(amt : int){
	life -= amt;
}

