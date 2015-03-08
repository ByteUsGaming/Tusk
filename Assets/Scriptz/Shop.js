var Shop:GameObject;
function OnMouseOver(){
	if(Input.GetMouseButtonDown(0) && Vector3.Distance(gameObject.transform.position,GameObject.Find("Kay").transform.position) < 3){
		GameObject.Find("Kay").GetComponent(Player).Pause();
		Shop.SetActive(true);
	}
}

function CloseShop(){
	GameObject.Find("Kay").GetComponent(Player).Pause();
	Shop.SetActive(false);
}