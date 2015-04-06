var bullet:GameObject;
var bulletSpeed:float= 1000;
var fireRate:float = 0.2;
private var nextFire:float = 0.0;
var canFire:boolean = true;
var currentAmmo:int = 100;
var maxAmmo:int = 100;
var updateText:UI.Text;
function OnEnable(){
 Wait(0.5);
}
function Update(){
	//Shoot this gun
 if (Input.GetButtonDown("Fire1") && canFire && currentAmmo > 4){
	GetComponent.<AudioSource>().Play();
	for(var rot = -30.0; rot <= 30; rot+=15){
	var shotFired = Instantiate(bullet, transform.position, transform.rotation*Quaternion.Euler(0, rot, 0));
    shotFired.GetComponent.<Rigidbody>().AddRelativeForce(0,-bulletSpeed,0);
    currentAmmo--;
    }
    canFire = false;
    Wait(1.0);
	} else {
		// Handle out of ammo
	}
	
	// Constant display of ammo
	updateText.text = currentAmmo + " / " + maxAmmo;
}
function Wait(delay:float) {
yield WaitForSeconds(delay);
canFire = true;
}