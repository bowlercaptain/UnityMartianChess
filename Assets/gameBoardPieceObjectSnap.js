#pragma strict

function Start () {

}

function Update () {

}

function beingHoveredOver(){
if (GameObject.FindWithTag("activePiece")!=null){
//Debug.Log(GameObject);
GameObject.FindWithTag("activePiece").transform.position=transform.position+transform.up*.2;
}
}