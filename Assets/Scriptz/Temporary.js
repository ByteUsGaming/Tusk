var life:float =1.0;
function Update () {
life -= Time.deltaTime;
if(life<=0){
life=0;
Destroy(gameObject);
}
}
function OnCollisionEnter(other:Collision){
	if(other.collider.tag != gameObject.GetComponent.<Collider>().tag){
 	Destroy(gameObject);
 }
}
