#pragma strict

var customMenuButtons:GUIStyle;
var menuHoverSound:AudioClip;
var toolCheck = "";
var hasPlayed:boolean = false;
var tuskTitle:GUIStyle;

function OnGUI () {
	//Main Menu Title
	//GUI.Label(Rect(Screen.width/2-50,Screen.height/8,100,50),"Tusk",tuskTitle);
	//Main Menu Options
	if(GUI.Button(Rect(Screen.width/2-100,2*Screen.height/8+20,200,50),GUIContent("New Game","New Game"),customMenuButtons)){
	Application.LoadLevel(3);
	}
	GUI.Button(Rect(Screen.width/2-100,3*Screen.height/8+20,200,50),GUIContent("Load Game","Load Game"),customMenuButtons);
	if(GUI.Button(Rect(Screen.width/2-100,Screen.height/2+20,200,50),GUIContent("Settings","Settings"),customMenuButtons)){
	Application.LoadLevel(2);
	}
	if(GUI.Button(Rect(Screen.width/2-100,5*Screen.height/8+20,200,50),GUIContent("Credits","Credits"),customMenuButtons)){
	Application.LoadLevel(1);
	}
	if(GUI.Button(Rect(Screen.width/2-100,6*Screen.height/8+20,200,50),GUIContent("Quit Game","Quit Game"),customMenuButtons)){
	Application.Quit();
	}
	toolCheck = GUI.tooltip;
	//Subsections
	GUI.Label(Rect(4,Screen.height-20,500,30),"Version 0.01(Development)");
}

	var glowLight: Light;
	glowLight.intensity = 0;
	var check:boolean = true;
	//var colorCheck:boolean = true;
function Update() {
	////Audio effect on mouse hover
	if(!hasPlayed){
	if(toolCheck == "Load Game" ||toolCheck == "New Game" ||toolCheck == "Credits" ||toolCheck == "Quit Game" ||toolCheck == "Settings"){
		GetComponent.<AudioSource>().PlayOneShot(menuHoverSound,0.4);
		hasPlayed = true;
		}
		}
	if(hasPlayed && !(toolCheck == "Load Game" ||toolCheck == "New Game" ||toolCheck == "Credits" ||toolCheck == "Quit Game" ||toolCheck == "Settings")){
			hasPlayed = false;
		}
		
	toolCheck = GUI.tooltip;
	//////Glowing background
	if(glowLight.intensity <= 0){
	check = true;
	/////// Optional background color changing segment
	//if(colorCheck){
	//glowLight.color = Color.green;
		//}
	//if(!colorCheck){
	//glowLight.color = Color.red;
		//}
		//colorCheck = !colorCheck;
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