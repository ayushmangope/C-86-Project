var canvas= new fabric.Canvas('MyCanvas');
var x= document.getElementById("myAudio");
var block_image_object= ""

function newImage()
{

    fabric.Image.fromURL('BirthdayImage.jpg' , function(Img) {
        block_image_object = Img;
        
        block_image_object.scaletoWidth(700);
        block_image_object.scaletoHeight(510);
        block_image_object.set({
            top:0,
            left:0
    }); 
    canvas.add(block_image_object);
    });

}
function playSound()
{
    x.play();
    console.log("play");
}