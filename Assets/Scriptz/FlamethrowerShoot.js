var bullet:GameObject;
var bulletSpeed:float= 1000;
private var canFire = true;
var fireRate: float = 0.05;
var currentAmmo:int = 300;
var maxAmmo:int = 300;
var updateText:UI.Text;

// Use this for initialization
function Start () {

}

// Update is called once per frame
function Update () {
 if (Input.GetButton("Fire1") && canFire && currentAmmo > 0){
	//GetComponent.<AudioSource>().Play();
	canFire = false;
	Wait(fireRate);
	var shotFired = Instantiate(bullet, transform.position, transform.rotation * Quaternion.Euler(0, 0, -90));
    shotFired.GetComponent.<Rigidbody>().AddRelativeForce(0,-bulletSpeed,0);
    currentAmmo--;
	}
	
	// Constant display of ammo
	updateText.text = currentAmmo + " / " + maxAmmo;

}
 	// shoot delay
function Wait(delay:float) {
	yield WaitForSeconds(delay);
	canFire = true;
}

