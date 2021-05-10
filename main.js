canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
nasa_mars_img_array=["mars.jpg","NASA_IMG1.jpg","NASA_IMG2.jpg","NASA_IMG3.jpg","NASA_IMG4.jpg"];
random_number=Math.floor(Math.random() *5);
rover_x=10;
rover_y=10;
rover_width=100;
rover_height=100;
background_image=nasa_mars_img_array[random_number];
rover_image="rover.png";
function add() {
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadRover;
    rover_imgTag.src=rover_image;

}
function uploadBackground() {
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadRover() {
     ctx.drawImage(rover_imgTag,rover_x,rover_y , rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed=="37") {
        left();
        console.log("left");
    }
    if (keypressed=="38") {
        up();
        console.log("up");
    }
    if (keypressed=="39") {
        right();
        console.log("right");
    }
    if (keypressed=="40") {
        down();
        console.log("down");
    }
}
function up()
{
   if (rover_y>=0) {
       rover_y=rover_y-10;
       console.log("when up arrrow is pressed x="+rover_x+", y="+rover_y);
       uploadBackground();
       uploadRover();
       
   }
}
function down()
{
   if (rover_y<=500) {
       rover_y=rover_y+10;
       console.log("when down arrrow is pressed x="+rover_x+", y="+rover_y);
       uploadBackground();
       uploadRover();
       
   }
}
function left()
{
   if (rover_x>=0) {
       rover_x=rover_x-10;
       console.log("when left arrrow is pressed x="+rover_x+", y="+rover_y);
       uploadBackground();
       uploadRover();
       
   }
}
function right()
{
   if (rover_x<=700) {
       rover_x=rover_x+10;
       console.log("when right arrrow is pressed x="+rover_x+", y="+rover_y);
       uploadBackground();
       uploadRover();
       
   }
}