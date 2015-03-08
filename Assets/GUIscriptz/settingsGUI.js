var returnStyle:GUIStyle;

function OnGUI () {
	
	if(GUI.Button(Rect(10,5,300,50),"Return to Main Menu",returnStyle)){
		Application.LoadLevel(0);
		}
	}
	var glowLight: Light;
	glowLight.intensity = 0;
	var check:boolean = true;
	var colorCheck:boolean = true;
function Update() {	
	if(glowLight.intensity <= 0){
	check = true;
	if(colorCheck){
	glowLight.color = Color.green;
		}
	if(!colorCheck){
	glowLight.color = Color.red;
		}
		colorCheck = !colorCheck;
	}
	if(glowLight.intensity >= .3){
	check = false;
	}
	if(check){
	glowLight.intensity += .12 * Time.deltaTime;
	}
	if(!check){
	glowLight.intensity -= .12 * Time.deltaTime;
	}
}