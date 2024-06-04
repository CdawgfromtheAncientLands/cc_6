//U94140233
//Implement a JavaScript constructor class named Ball.
//Initialize properties such as ballStartX, ballStartY, ballRadius, ballDX (change in ballStartX-coordinate), ballDY (change in ballStartY-coordinate), and color.

const canvas = document.getElementById('ballCanvas');
const ctx = canvas.getContext('2d');

class Ball {

    constructor(ballStartX, ballStartY, ballRadius, ballDX, ballDY, ballColor) {
        this.ballStartX = ballStartX;
        this.ballStartY = ballStartY;
        this.ballRadius = ballRadius;
        this.ballDX = ballDX;
        this.ballDY = ballDY;
        this.ballColor = ballColor;
    }
//Implement a method within the Ball constructor to draw the ball on the canvas using its current properties.
    drawBall(ctx) {
        ctx.beginPath();
        ctx.arc(this.ballStartX, this.ballStartY, this.ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = this.ballColor;
        ctx.fill();
        ctx.closePath()
    }
    //Implement an update method that handles the ball's movement.
    //This should include logic to reverse the ball’s direction upon hitting the canvas sides (collision detection).
    updateBall(canvas) {
        if (this.ballStartX + this.ballDX > canvas.width - this.ballRadius || this.ballStartX + this.ballDX < this.ballRadius) {
            this.ballDX = -this.ballDX;
        }
        if (this.ballStartY + this.ballDY > canvas.height - this.ballRadius || this.ballStartY + this.ballDY < this.ballRadius) {
            this.ballDY = -this.ballDY;
        }
        this.ballStartX += this.ballDX;
        this.ballStartY += this.ballDY;
    }
}

//Use setInterval to continuously update the ball's position and redraw it on the canvas, creating the animation effect.
//Choose a suitable interval for smooth animation.

const ball = new Ball(200, 160, 20, 2, 2, 'red');
ball.drawBall(ctx);

function animateBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.drawBall(ctx);
    ball.updateBall(canvas);
}

setInterval(animateBall, 10);