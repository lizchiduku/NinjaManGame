var ninjaman = {
    x: 1,
    y: 1
}

function drawNinjaman() {
    document.getElementById('ninjaman').style.top = ninjaman.y * 40 + 'px';
    document.getElementById('ninjaman').style.left = ninjaman.x * 40 + 'px';
}

drawNinjaman();

document.onkeydown = function (e) {
    // Left
    if (e.keyCode == 37) {
        if (world[ninjaman.y][ninjaman.x - 1] != 1) {
            ninjaman.x--;
        }
    }
    // Right 
    else if (e.keyCode == 39) {
        if (world[ninjaman.y][ninjaman.x + 1] != 1) {
            ninjaman.x++;
        }
    }
    // Down 
    else if (e.keyCode == 40) {
        if (world[ninjaman.y + 1][ninjaman.x] != 1) {
            ninjaman.y++;
        }
    }
    // Up 
    else if (e.keyCode == 38) {
        if (world[ninjaman.y - 1][ninjaman.x] != 1) {
            ninjaman.y--;
        }
    }
    world[ninjaman.y][ninjaman.x] = 0;
    drawNinjaman();
    drawWorld();
}