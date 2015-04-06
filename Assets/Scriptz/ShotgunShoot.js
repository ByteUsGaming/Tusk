var bullet:GameObject;
var bulletSpeed:float= 1000;
var fireRate:float = 0.2;
private var nextFire:float = 0.0;
var canFire:boolean = true;
function OnEnable(){
 Wait(0.5);
}
function Update(){
	//Shoot this gun
 if (Input.GetButtonDown("Fire1") && canFire){
	GetComponent.<AudioSource>().Play();
	for(var rot = -30.0; rot <= 30; rot+=15){
	var shotFired = Instantiate(bullet, transform.position, transform.rotation*Quaternion.Euler(0, rot, 0));
    shotFired.GetComponent.<Rigidbody>().AddRelativeForce(0,-bulletSpeed,0);
    }
    canFire = false;
    Wait(1.0);
	}
/*if (Input.GetButton("Fire1") && Time.time > nextFire) {
	nextFire = Time.time + fireRate;
	audio.Play();
	shotFired = Instantiate(bullet, transform.position, transform.rotation);
    shotFired.rigidbody.AddRelativeForce(0,bulletSpeed,0);
    Physics.IgnoreCollision(shotFired.collider, ignoredPlayer);
	}*/
}
function Wait(delay:float) {
yield WaitForSeconds(delay);
canFire = true;
}