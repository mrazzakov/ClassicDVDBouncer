 
 
function moveLogo() {
    var logo = document.getElementById('logo');    

    var width = window.screen.width;
    var height = window.screen.height;
    var xPos = Math.floor(Math.random() * width);
    var yPos = Math.floor(Math.random() * height);
    var speed = 10;
    var xSpeed = Math.floor(Math.random() * 2) ? speed : -speed;
    var ySpeed = Math.floor(Math.random() * 2) ? speed : -speed;

    
    setInterval(frame, 5);
    
    function frame() {
        ratio = logo.clientWidth/50;
        xSpeed = Math.sign(xSpeed) * ratio;
        ySpeed = Math.sign(ySpeed) * ratio;

        width = window.screen.width;
        height = window.innerHeight - logo.clientHeight;
        console.log(width + " " + xPos)
        
        if(xPos > width || xPos < -5) {
            xSpeed = -xSpeed;
            xPos = Math.min(xPos + xSpeed, width + xSpeed);
            changeColor();
        }
        else {
            xPos += xSpeed;
            logo.style.left = xPos + "px";
        }

        if(yPos > height || yPos < -5) {
            ySpeed = -ySpeed;
            yPos = Math.min(yPos + ySpeed, height + ySpeed);
            changeColor();
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