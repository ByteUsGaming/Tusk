#pragma strict

function OnTriggerEnter(hit : Collider){
	if(hit.gameObject.tag == "Player"){
		if(hit.gameObject.GetComponent(Player).Heal(20)){
			//audio.Play();   /// Kay says, "I feel better now." ??
		Destroy(gameObject);
		} else {
			//UI.Element.active;   /// On screen visual??
			//audio.Play(); /// Kay says, "I can't use that." ??
			}
		}
	}
