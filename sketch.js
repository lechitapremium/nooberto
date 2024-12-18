function setup() {
dibujo =  createCanvas(400, 400);
  dibujo.center()
  IA =ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/icSqlN6I8/model.json",listo) 
  cam = createCapture(VIDEO)
  cam.hide()
}

function draw() {
  background(220);
  image(cam,0,0,width,height)
  IA.classify(cam,resultado)
}
function listo(){
  console.log("integilencia")
}
function resultado(error,peluches){
  if(!error){
    document.getElementById("peluche").innerHTML = peluches[0].label
  }
}