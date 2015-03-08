var bullet:GameObject;
var bulletSpeed:float= 1000;
var ignoredPlayer:CharacterController;
var fireRate:float = 0.2;
private var nextFire:float = 0.0;
function Update(){
	//Shoot this gun
 if (Input.GetButtonDown("Fire1")){
	GetComponent.<AudioSource>().Play();
	var shotFired = Instantiate(bullet, transform.position, transform.rotation);
    shotFired.GetComponent.<Rigidbody>().AddRelativeForce(0,bulletSpeed,0);
    Physics.IgnoreCollision(shotFired.GetComponent.<Collider>(), ignoredPlayer);
	}

/*if (Input.GetButton("Fire1") && Time.time > nextFire) {
	nextFire = Time.time + fireRate;
	audio.Play();
	shotFired = Instantiate(bullet, transform.position, transform.rotation);
    shotFired.rigidbody.AddRelativeForce(0,bulletSpeed,0);
    Physics.IgnoreCollision(shotFired.collider, ignoredPlayer);
	}*/
}