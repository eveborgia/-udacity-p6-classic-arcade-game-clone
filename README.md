frontend-nanodegree-arcade-game
===============================

**Instructions on how to:**

### Run 

 - The repository contains css, images, and a js folder, as well as an index.html and a README.md file. 
 - The css folder contains a style.css file. 
 - The images folder contains the png image files, which are used when displaying the game. 
 - The images for the player and enemy character are going to be loaded from this folder. 
 - The js folder also contains the app engine needed to run the game and a resources.js file. 
 - index.html - opening index.html should loads the game.
 - README.md contains instructions on how to load and play the game.
 - Inside the app.js file, is implemented the Player and the Enemy classes, using Object-Oriented JavaScript. 

*The Enemy function, which initiates the Enemy by:*
- Loading the image by setting this.sprite to the appropriate image in the image folder.
- Setting the Enemy initial location.
- Setting the Enemy speed.
- The update method for the Enemy.
- Updates the Enemy location.
- Handles collision with the Player.

*The Player function, which initiates the Player by:*
- Loading the image by setting this.sprite to the appropriate image in the image folder .
- Setting the Player initial location.
- The update method for the Player .
- The render method for the Player.
- The handleInput method, which is receiving user input, allowedKeys and moves the player according to that input. In particular:
	- Left key moves the player to the left, right key to the right, up moves the player up and down moves the player down.
	- The player cannot move off screen.
	- If the player reaches the water the game resets by moving the player back to the initial location.

### Play the arcade game.

In this game you have a Player and Enemies (Bugs). The goal of the player is to reach the water, without colliding into any one of the enemies. The player can move left, right, up and down. The enemies move in varying speeds on the paved block portion of the scene. Once a the player collides with an enemy, the game is reset and the player moves back to the start square. Once the player reaches the water the game is won.

