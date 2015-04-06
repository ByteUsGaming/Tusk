#pragma strict

// EDITED FOR HORDE MODE ONLY

var Enemies:GameObject[];
var canSpawn:boolean = false;

function Update() {

	if(canSpawn) {
		canSpawn = false;
		spawnEnemy();
	} 
}

function spawnEnemy() {
	// Spawn enemy from spawner
	Instantiate(Enemies[Random.Range(0,Enemies.Length)],gameObject.transform.position,gameObject.transform.rotation);

}