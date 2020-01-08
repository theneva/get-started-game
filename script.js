// Get a reference to the game screen <canvas> element
// so we can mess with it.
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

// Game setup stuff
const framesPerSecond = 30;
const millisecondsBetweenFrames = 1000 / framesPerSecond;

// The player's initial state
const player = {
    x: 10,
    y: 10,
    width: 40,
    height: 40,
    color: 'green',
};

const enemy = {
    x: 300,
    y: 200,
    width: 20,
    height: 20,
    color: 'red',
};

// The enemy's initial state

// this run every frame of the game
function update() {
    // draw a white rectangle on the whole canvas
    // to get rid of old drawings
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);

    console.log('hi');
    // draw the player
    // set the fill color
    context.fillStyle = player.color;
    // draw a rectangle representing the player
    context.fillRect(player.x, player.y, player.width, player.height);

    // draw an enemy
    // set the fill color
    context.fillStyle = enemy.color;
    // draw a rectangle representing the enemy
    context.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
}

// every <millisecondsBetweenFrames>, run the function called onFrame
setInterval(update, millisecondsBetweenFrames);

window.addEventListener(
    // When you press a key…
    'keydown',

    // … run this code
function (event) {
    if (event.key === 'ArrowRight') {
        // move the player 5 px to the right
        player.x = player.x + 5;
    }

    if (event.key === 'ArrowDown') {
        // move the player 5 px down
        player.y = player.y + 5;
    }
});
