## ROCK, PAPER,  SCISSORS

Our game is a horrifying rock,paper, scissors game, be cautelous, because losing will turn the thing down! this game will challenge your luck and bravery, good luck.

## Structure:
We developed this project using HTML, CSS, JAVASCRIPT and of course the database by XAMPP.

## Features:
Enemy random choices: Your enemy determines its choices by a CPU function that randomizes the options, providing a game of luck.
Scary user experience: This project have its design based in halloween and fluid animations during the game.
Jumpscare: when something ends in this game, you'll have a happy surprise(or not).
CRUD: This project use de famous CRUD methodology(Create, Read, Update and Delet), you can create and log in as your own user, see the leaderboard of players and even delete your account.

## Tutorial do use our project:
We planned our project without deploying a website, so you'll need to follow some steps to test our game.

## database:
using the link localhost/phpmyadmin, create the following Database:

CREATE DATABASE IF NOT EXISTS codeween;

USE codeween;

CREATE TABLE IF NOT EXISTS users(
id INT AUTO_INCREMENT PRIMARY_KEY,
name VARCHAR(50) NOT NULL,
password VARCHAR(255) NOT NULL,
victories INT DEFAULT 0,
defeats INT DEFAULT 0
);

## code:
1-Using your Git Bash, clone this repository on your desktop.
2-Open the project using you favorite Code Editor.
3-Open the terminal and install some imports: npm install express body-parser mysql2 cors jsonwebtoken bcryptjs.
4-Open an integrated terminal in the folder called JS, and then run the command: node server.js.
5-Open the file login.html by live server.
6-Play.

## How to play and rules:
every round you choose on of three option, Rock, Paper or Scissors.
folowing rules:
<img width=415 src="![image](https://github.com/user-attachments/assets/89b2d19f-1dc4-42c6-adc4-e8a6ec4ff378)/>
"

You have 3 lives, just like your opponent.


