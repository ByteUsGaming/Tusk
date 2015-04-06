var bullet:GameObject;
var bulletSpeed:float= 1000;
var fireRate:float = 0.2;
var currentAmmo:int = 30;
var maxAmmo:int = 30;
var updateText:UI.Text;

function Update(){
	//Shoot this gun
 if (Input.GetButtonDown("Fire1") && currentAmmo > 0){
	GetComponent.<AudioSource>().Play();
	var shotFired = Instantiate(bullet, transform.position, transform.rotation);
    shotFired.GetComponent.<Rigidbody>().AddRelativeForce(0,bulletSpeed,0);
    currentAmmo--;
	} else {
		// Handle out of ammo
		
	}
	
	// Constant display of ammo
	updateText.text = currentAmmo + " / " + maxAmmo;
}