#pragma strict
var player : GameObject;
var life = 2000;
var MoveSpeed = 2;
var bossProjectile1:GameObject;
var bossProjectile2:GameObject;
var bulletSpeed:float = 500;
//var victory:GameObject;
var attackAudio:AudioSource;
var NoExit:GameObject;
function Awake(){
	//victory.SetActive(false);
}

function Update () 
	{
	//on Death
	if(life <= 0){
		Death();
	}
	
   // Attack2();
   //Enemy death behavior
	if(life <= 0){
		life = 0;
		//Death animation
		Destroy(gameObject); 
		}
	}
	//Boss attacks
	var canAttack1:boolean = true;
	var canAttack2:boolean = true;
function Attack1(){
	if(canAttack1){
	var controller:CharacterController = GetComponent(CharacterController);
    var attack1 = Instantiate(bossProjectile1,gameObject.transform.position,gameObject.transform.rotation*Quaternion.Euler(0, 0, 25));
    var attack2 = Instantiate(bossProjectile1,gameObject.transform.position,gameObject.transform.rotation*Quaternion.Euler(0, 0, 0));
    var attack3 = Instantiate(bossProjectile1,gameObject.transform.position,gameObject.transform.rotation*Quaternion.Euler(0, 0, -25));
    var attack4 = Instantiate(bossProjectile1,gameObject.transform.position,gameObject.transform.rotation*Quaternion.Euler(0, 0, -50));
    var attack5 = Instantiate(bossProjectile1,gameObject.transform.position,gameObject.transform.rotation*Quaternion.Euler(0, 0, 50));
    attack1.GetComponent.<Rigidbody>().AddRelativeForce(0,bulletSpeed,0);
    attack2.GetComponent.<Rigidbody>().AddRelativeForce(0,bulletSpeed,0);
    attack3.GetComponent.<Rigidbody>().AddRelativeForce(0,bulletSpeed,0);
    attack4.GetComponent.<Rigidbody>().AddRelativeForce(0,bulletSpeed,0);
    attack5.GetComponent.<Rigidbody>().AddRelativeForce(0,bulletSpeed,0);
    attackAudio.Play();
    canAttack1 = false;
    Wait1(1.0);
    }
}
	//Wait 
function Wait1(delay:float){
	yield WaitForSeconds(delay);
	canAttack1 = true;
}
function Wait2(delay:float){
	yield WaitForSeconds(delay);
	canAttack2 = true;
}
function Attack2(){
	if(canAttack2){
	var controller:CharacterController = GetComponent(CharacterController);
    var attack1 = Instantiate(bossProjectile2,player.transform.position,player.transform.rotation);
    canAttack2 = false;
	Wait2(3.0);
	}
}
 	//On Boss Death
function Death(){
	//victory.SetActive(true);
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
	}
	//Lock door, begin boss attack, Look at Player
function OnTriggerStay(hit: Collider){
	if(hit.gameObject.tag == "Player"){
	var dir = player.transform.position - transform.position;
 	var angle = Mathf.Atan2(dir.y, dir.x) * Mathf.Rad2Deg - 90;
 	transform.rotation = Quaternion.AngleAxis(angle, Vector3.forward);
	Attack1();
	Attack2();
		}	
	}
function OnTriggerEnter(){
	NoExit.SetActive(true);
}