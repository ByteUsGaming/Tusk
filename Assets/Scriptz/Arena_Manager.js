var enemyDamageMultiplier: float;
var waveNumber: int;
var player: GameObject;
var remainingEnemies;
var isPlayerReady:boolean = false;

function Start() {
	waveNumber = 1;
}

function Update() {
	remainingEnemies = GameObject.FindGameObjectsWithTag("Enemy");
	
}

function EndOfWave() {

}

function StartWave(waveNumber:int) {
	isPlayerReady = true;
	yield WaitForSeconds(5.0);
	var spawningPoints = waveNumber * 3;
	
}