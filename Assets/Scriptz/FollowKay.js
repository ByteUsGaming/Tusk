
function Update()
{
   transform.position.x = GameObject.Find("Kay").transform.position.x;
   transform.position.y = GameObject.Find("Kay").transform.position.y;
   
   	if(Input.GetButtonDown("Cancel")){
			GameObject.Find("Kay").GetComponent(Player).Pause();
		}
}
