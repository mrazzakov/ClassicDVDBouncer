 
 
function moveLogo() {
    var logo = document.getElementById('logo');    
    var width = window.screen.width;
    var height = window.screen.height;

    var BALL_SPEED = 1;

    //initial position and speed
    var xPos = Math.floor(Math.random() * width);
    var yPos = Math.floor(Math.random() * height);
    var xSpeed = Math.floor(Math.random() * 2) ? BALL_SPEED : -BALL_SPEED;
    var ySpeed = Math.floor(Math.random() * 2) ? BALL_SPEED : -BALL_SPEED;

    
    setInterval(frame, 5);
    
    function frame() {
        xSpeed = Math.sign(xSpeed) * BALL_SPEED;
        ySpeed = Math.sign(ySpeed) * BALL_SPEED;

        //responsively change to screen changes
        width = window.screen.width - logo.style.width;
        height = window.screen.height - logo.style.width;
        

        if(xPos > width || xPos < 0) {
            xSpeed = -xSpeed;
            xPos = Math.min(xPos + xSpeed, width + xSpeed);
            //changeColor();
        }
        else {
            xPos += xSpeed;
            logo.style.left = xPos + "px";
        }

        if(yPos > height || yPos < 0) {
            ySpeed = -ySpeed;
            yPos = Math.min(yPos + ySpeed, height + ySpeed);
            //changeColor();
        }
        else {
            yPos += ySpeed;
            logo.style.top = yPos + "px";
        }
    }

    function changeColor() {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
       
        //to keep colors vivid, 1 of the 3 RGB need to be 0 at all times;
        let select = Math.floor(Math.random() * 3);
        select == 0 ? r=0 : select == 1 ? g=0 : b=0;
        logo.style.fill = 'rgb(' + r + ',' + g + "," + b + ')';
    }
}