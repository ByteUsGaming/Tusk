#pragma strict
var isOpen:boolean = false;
var isLocked:boolean;
var openAnim:Animation;
function OnTriggerEnter(hit:Collider){
	if(hit.gameObject.tag == "Player" && !isOpen){
		openAnim.Play("DoorOpen", PlayMode.StopAll);
		gameObject.GetComponent(BoxCollider).enabled = false;
		isOpen = true;
	}
}
function OnTriggerExit(hit:Collider){
	if(hit.gameObject.tag == "Player" && isOpen){
		openAnim.Play("DoorClose", PlayMode.StopAll);	
		gameObject.GetComponent(BoxCollider).enabled = true;
		isOpen = false;
	}
}