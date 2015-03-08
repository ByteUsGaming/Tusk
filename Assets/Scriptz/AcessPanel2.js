

function OnTriggerEnter(hit:Collider){
	if(hit.gameObject.tag == "Player"){
		GameObject.Find("AcessPanel").GetComponent(AudioSource).Play();
	}

}

