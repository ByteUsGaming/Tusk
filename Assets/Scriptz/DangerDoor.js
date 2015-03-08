#pragma strict

var hasPlayed:boolean = false;
var warningAudio:AudioSource;
function OnTriggerEnter(){
	if(!hasPlayed){
		warningAudio.Play();
		hasPlayed = true;
	}

}