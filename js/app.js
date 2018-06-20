// Enemies our player must avoid
const Enemy = function(x, y, speed) {
    // Variables applied to each of the instances
    this.x = x;
    this.y = y;
    this.speed = speed;

    // The image/sprite for our Enemies
    this.sprite = 'images/enemy-bug.png';
};

//The update method for the Enemy
// Setting the Enemy speed
Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;

    //If Enemy goes outside the canvas reapears on the left 
    if (this.x > 505) {
        this.x = -30;
        this.speed = 50 + Math.floor(Math.random() * 250)
    }

    //Length of Player and sprite for colision
    // Send the Player to the initial location
    if (player.x < this.x + 90 &&
    player.x + 90 > this.x &&
    player.y < this.y + 60 &&
    60 + player.y > this.y) {
        player.x = 203;
        player.y = 380;
    }
};

// The render method for the Enemy
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Loading the image of the Player
const Player = function(x, y) {
    this.player = 'images/char-boy.png';
    this.x = x;
    this.y = y;
};

//The update method for the Player
Player.prototype.update = function(dt) {
};

//The render method for the Player
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.player), this.x, this.y);
};

//Receives user input and moves the Player according
Player.prototype.handleInput = function(keyPress){
    if( keyPress == 'left' && this.x > 50 ) {
        this.x -= 101;
    } else if( keyPress == 'right' && this.x < 380) {
        this.x += 101;
    } else if(keyPress == 'down' && this.y < 380) {
        this.y += 80;
    } else if(keyPress == 'up' && this.y > 50) {
        this.y -= 80;
    }

    //When Player reaches water the game resets by moving the Player back to initial location
    if (this.y < 101) {
        setTimeout(function () {
            player.x = 203;
            player.y = 380;
        }, 500);
    }
};

// All Enemy objects in an array called allEnemies
var allEnemies = [];

// Setting the Enemy initial location.
var enemyLocation = [58, 140, 225]

//Enemy start and the speed when reaches the end of canvas
enemyLocation.forEach(function (locationY) {
    enemy = new Enemy(50, locationY, 250);
    allEnemies.push(enemy); 
});

// Place the Player object in a variable called Player and set the Player initial location
var player = new Player(203, 380);

// This listens for key presses and sends the Player to desired location
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
