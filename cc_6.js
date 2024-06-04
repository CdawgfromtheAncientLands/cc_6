//U94140233
//Implement a JavaScript constructor class named Ball.
//Initialize properties such as x, y, radius, dx (change in x-coordinate), dy (change in y-coordinate), and color.

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
}

const ball = new Ball(200, 160, 20, 2, 2, 'red');
ball.drawBall(ctx);