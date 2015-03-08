#pragma strict

var check:boolean = true;
var glowLight:Light;
function Update () {
	if(glowLight.intensity <= 1.5){
	check = true;
	}
	if(glowLight.intensity >= 2.6){
	check = false;
	}
	if(check){
	glowLight.intensity += .3 * Time.deltaTime;
	}
	if(!check){
	glowLight.intensity -= .3 * Time.deltaTime;
	}
}
