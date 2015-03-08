var collision:Collider;
function OnTriggerExit(){
if(collision.tag=="Finish"){
		Destroy(gameObject);
   }
}