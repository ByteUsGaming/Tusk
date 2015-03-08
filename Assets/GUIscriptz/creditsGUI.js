var creditsStyle:GUIStyle;
var returnStyle:GUIStyle;

function OnGUI () {

	GUI.Label(Rect(Screen.width/2-50,Screen.height/8+150,100,100),"Carl Amko",creditsStyle);
	GUI.Label(Rect(Screen.width/2-50,Screen.height/8+175,100,100),"Co-Founder, Lead Game Developer, Sr. User Interface Designer",creditsStyle);
	GUI.Label(Rect(Screen.width/2-50,Screen.height/8+225,100,100),"Evan Clendenning",creditsStyle);
	GUI.Label(Rect(Screen.width/2-50,Screen.height/8+250,100,100),"Co-Founder, Lead Game Developer",creditsStyle);
	GUI.Label(Rect(Screen.width/2-50,Screen.height/8+300,100,100),"Sarah McLean",creditsStyle);
	GUI.Label(Rect(Screen.width/2-50,Screen.height/8+325,100,100),"Co-Founder, Sr. Lorewriter",creditsStyle);
	GUI.Label(Rect(Screen.width/2-50,Screen.height/8+375,100,100),"Kevin Portuondo",creditsStyle);
	GUI.Label(Rect(Screen.width/2-50,Screen.height/8+400,100,100),"Lorewriter, Game Tester, Graphic Designer",creditsStyle);
	//GUI.Label(Rect(Screen.width/2-50,Screen.height/8+300,100,100),"David Schulman",creditsStyle);
	//GUI.Label(Rect(Screen.width/2-50,Screen.height/8+325,100,100),"TBA",creditsStyle);
	
	if(GUI.Button(Rect(10,5,300,50),"Return to Main Menu",returnStyle)){
		Application.LoadLevel(0);
		}
	}
	var glowLight: Light;
	glowLight.intensity = 0;
	var check:boolean = true;
	//var colorCheck:boolean = true;
function Update() {	
	if(glowLight.intensity <= 0){
	check = true;
	/*if(colorCheck){
	glowLight.color = Color.green;
		}
	if(!colorCheck){
	glowLight.color = Color.red;
		}
		colorCheck = !colorCheck; */
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