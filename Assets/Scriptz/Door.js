#pragma strict
var isOpen:boolean = false;
var isLocked:boolean = false;
var openAnim:Animation;
function OnTriggerEnter(hit:Collider){
	if(hit.gameObject.tag == "Player" && !isOpen){
		openAnim.Play("DoorOpen");
		gameObject.GetComponent(BoxCollider).enabled = false;
		gameObject.tag = "Untagged";
		isOpen = true;
	}
}
function OnTriggerExit(hit:Collider){
	if(hit.gameObject.tag == "Player" && isOpen){
		openAnim.Play("DoorClose");	
		gameObject.GetComponent(BoxCollider).enabled = true;
		gameObject.tag = "Other";
		isOpen = false;
	}
}