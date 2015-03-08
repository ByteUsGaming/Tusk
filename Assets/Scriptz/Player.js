#pragma strict
var healthBar:UI.Slider;
var moveSpeed:int = 5.0;
var credits:int = 0;
var playerAudio:AudioSource;
var deathClip:AudioClip;
var walkClip:AudioClip;
var gameOver:GameObject;
var deathFog:ParticleSystem; 
var currentGun:GameObject;
var secondGun:GameObject;
var currentLoc:Vector3;
var keyNum:int = 0;
var hasKey:boolean = false;

function Start(){
	gameOver.SetActive(false);
	secondGun.SetActive(false);
	}
currentLoc = gameObject.transform.position;
var hasChanged:boolean;

var canShoot:boolean;
var godMode:boolean;
function Update () {
	//It's a 2D game, god damn it
	gameObject.transform.position.z = 0;
	//Movement
	var controller:CharacterController = GetComponent(CharacterController);
	var MoveDirection:Vector3 = Vector3(Input.GetAxis("Horizontal"),Input.GetAxis("Vertical"),0);
	MoveDirection *= moveSpeed;
	controller.Move(MoveDirection * Time.deltaTime);
	//Walking audio
	/*if(currentLoc != gameObject.transform.position){
		hasChanged = true;
	}
	if(hasChanged){
		Walk();
	}*/
	if(Input.GetButtonDown("ChangeWeapons")){
	ChangeWeapons();
	}
	
	if(godMode){
		healthBar.value = 100;
	}
	//Mouse Following/Player Rotation
    var mouse_pos = Input.mousePosition;
    mouse_pos.z = 10; //The distance between the camera and object
    var object_pos = Camera.main.WorldToScreenPoint(transform.position);
    mouse_pos.x = mouse_pos.x - object_pos.x;
    mouse_pos.y = mouse_pos.y - object_pos.y;
    var angle = Mathf.Atan2(mouse_pos.y, mouse_pos.x) * Mathf.Rad2Deg;
    transform.rotation = Quaternion.Euler(Vector3(0, 0, angle-90));
    
   
	/*if (Input.GetButton("Fire1") && canShoot){
	audio.Play();
    shotFired = Instantiate(bullet, Gun.transform.position, Gun.transform.rotation);
    shotFired.rigidbody.AddRelativeForce(0,bulletSpeed,0);
    //Physics.IgnoreCollision(shotFired.collider, a);
    Physics.IgnoreCollision(shotFired.collider, ignoredPlayer);
    canShoot = false;
    Wait(0.25);
    canShoot = true;
		}*/
		


    //Other
   }
/*function Walk(){
	playerAudio.PlayOneShot(walkClip);
	yield WaitForSeconds(5.0);
	hasChanged = false;
}*/
	//Player Take Damage, Continuous
var canTakeDamage:boolean = true;	
function takeDamage(amt : int,delay:float){
	if(canTakeDamage){
		healthBar.value -= amt;
		canTakeDamage = false;
    	Wait(delay);
    	}
    if(healthBar.value <= 0){
			Death();
		} 
	}
	//Player Take Damage, Once
function takeTrueDamage(amt : int){
	healthBar.value -= amt;
	if(healthBar.value <= 0){
			Death();
		}
}
	//Wait	
function Wait(delay:float){
	yield WaitForSeconds(delay);
    canTakeDamage = true;
}
	//Player Death
function Death(){
	playerAudio.PlayOneShot(deathClip);
	this.enabled = false;
	gameObject.GetComponent(CharacterController).enabled = false;
	yield WaitForSeconds(2.0);
	gameOver.SetActive(true);
	//deathFog.Play();

	////Player Death Animation
	//Destroy(gameObject);
}
	//Player Healing
function Heal(amt :int){
	if(healthBar.value >=100){
		return false;
	} else if (healthBar.value + amt >= 100){
		healthBar.value = healthBar.maxValue;
		return true;
	} else {
		healthBar.value += amt;
		return true;
	}
}
	//Player Get $$
function getMoney(amt:int){
	credits += amt;
}

function getKey(key:int){
	hasKey = true;
	keyNum += key;
}

function useKey(keyNeed:int){
	if(keyNeed == keyNum){
		return keyNeed;
	}
	else{
		return -1;
	}
}

	//Player Spend/Lose $$
function spendMoney(amt:int){
	credits -= amt;
	if(credits < 0)
		credits = 0;
}
	//Pause
var isPaused:boolean = false;
var PauseUI:GameObject;
function Pause(){
	if(!isPaused){
			Time.timeScale = 0.0;
			GameObject.Find("Main Camera").GetComponent(AudioListener).enabled = false;
			PauseUI.SetActive(true);
			gameObject.GetComponent(Player).enabled = false;
			isPaused = true;
			
		} else {
			Time.timeScale = 1.0;
			GameObject.Find("Main Camera").GetComponent(AudioListener).enabled = true;
			PauseUI.SetActive(false);
			gameObject.GetComponent(Player).enabled = true;
			isPaused = false;
			
			}
	}

	//Weapon swapping
function ChangeWeapons(){
	var temp = currentGun;
	currentGun = secondGun;
	secondGun = temp;
	currentGun.SetActive(true);
	secondGun.SetActive(false);
 }
