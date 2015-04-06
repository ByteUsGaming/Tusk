var bullet:GameObject;
var bulletSpeed:float= 1000;
var chargeTime:float = 3.0;
var canFire:boolean = false;
function Update(){
	//Shoot this gun
 	if(Input.GetButton("Fire1")) {
 	// Charging Sound
	ChargeTheLaser();
	}
	if(Input.GetButtonUp("Fire1")) {
		chargeTime = 3.0;
	}
	if(canFire) {
	canFire = false;
	chargeTime = 3.0;
	//GetComponent.<AudioSource>().Play();
	var shotFired = Instantiate(bullet, transform.position, transform.rotation *Quaternion.Euler(0, 0, -90));
    shotFired.GetComponent.<Rigidbody>().AddRelativeForce(0,bulletSpeed,0);
    
	}
}

function ChargeTheLaser() {
	chargeTime -= 0.05;
	if(chargeTime <= 0.0) {
		canFire = true;
	}
}
