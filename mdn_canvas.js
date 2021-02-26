document.addEventListener("DOMContentLoaded", function() {
	var canvas = document.getElementById("mdn-canvas");
	var context = canvas.getContext("2d");
    
    // blue filled rectangle
    function drawRectangle() {
        context.fillStyle = 'blue'; // style used by the rectangle
        context.strokeStyle = 'red'; // style used by rectangle outline
        context.fillRect(10, 10, 100, 75); // draw the filled rectangle
        context.strokeRect(10, 10, 100, 75); // draw the rectangle outline
    }

    // red filled circle radius
    function drawCircle()
    {
        var radius = 25;

        context.beginPath(); // create a new path 
        context.arc(150, 50, radius, 0, 2*Math.PI); // draws an arc centered at (150, 50), with radius = radius and starting at startAngle = 0 and ending at endAngle 
        context.fillStyle = 'red'; // fill rectangle with red color
        context.closePath();
        context.fill(); // draw solid shape by filling the path's content area
    }

    function drawImage() {
        var img = new Image();   // new img element
        
        // using load eventListener so that the drawImage() is not called before the image has finished loading 
        img.addEventListener('load', function() {
            for (var j = 0; j < 4; j++) { // draw 4 images
                // draw multiple images vertically
                // image width = 40 and height = 30 
                context.drawImage(img, 225, (j+0.25)*35, 40, 30);
            }
        }, false);

        img.src = 'https://fujifilm-x.com/wp-content/uploads/2019/08/x-t3_sample-images02.jpg'; // source path
    }

    function drawText() {
        // used google font namely, sans-serif
        // font size of 25 pixel
        // stroke text color is green
        context.font = '25px sans-serif';
        context.strokeStyle = 'green';
        context.strokeText('Ajitesh Bansal', 10, 125);
    }

    drawRectangle();
    drawCircle();
    drawImage();
    drawText();

}, false);