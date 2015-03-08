#pragma strict

function Purchase(arr:int){
	var playerMoney = GameObject.Find("Kay").GetComponent(Player).credits;
	if(arr == 0){
		if(playerMoney < 10000){
		
		} else {
			playerMoney -= 10000; 
		}
	}
	if(arr == 1){
		if(playerMoney < 10000){
		
		} else {
			playerMoney -= 10000; 
		}
	}
	if(arr == 2){
		if(playerMoney < 5000){
		
		} else {
			playerMoney -= 5000; 
		}
	}
	if(arr == 3){
		if(playerMoney < 2000){
		
		} else {
			playerMoney -= 2000; 
		}
	}

}