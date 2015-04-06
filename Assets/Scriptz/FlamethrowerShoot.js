var bullet:GameObject;
var bulletSpeed:float= 1000;
private var canFire = true;
var fireRate: float = 0.05;
// Use this for initialization
function Start () {

}

// Update is called once per frame
function Update () {
 if (Input.GetButton("Fire1") && canFire){
	//GetComponent.<AudioSource>().Play();
	canFire = false;
	Wait(fireRate);
	var shotFired = Instantiate(bullet, transform.position, transform.rotation * Quaternion.Euler(0, 0, -90));
    shotFired.GetComponent.<Rigidbody>().AddRelativeForce(0,-bulletSpeed,0);
	}

}
 	// shoot delay
function Wait(delay:float) {
	yield WaitForSeconds(delay);
	canFire = true;
}

