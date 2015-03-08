#pragma strict

var Enemies:GameObject[];

function Start () {
	spawnEnemy();
}

function spawnEnemy(){
	Instantiate(Enemies[Random.Range(0,Enemies.Length)],gameObject.transform.position,gameObject.transform.rotation);
	}
