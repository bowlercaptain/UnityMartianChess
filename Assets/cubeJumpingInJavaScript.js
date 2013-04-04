#pragma strict
var armLength:float;
var playerTransform:Transform;
function Start () {

}

function Update () {

}

function getClicked(){
Debug.Log(Vector3.Distance(transform.position,playerTransform.position));
if (Vector3.Distance(transform.position,playerTransform.position)<armLength){
rigidbody.AddForce(transform.up*200);
}
}