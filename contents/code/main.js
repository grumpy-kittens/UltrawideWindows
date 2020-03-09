function newSlotPosition(workspace, client, numberXslots, numberYslots, x, y, xSlotToFill, ySlotToFill) {
    var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
    var width;
    if (x == numberXslots) {
        width = Math.floor(maxArea.width / numberXslots);
    } else {
        width = Math.ceil(maxArea.width / numberXslots);
    }

    var height;
    if (y == numberYslots) {
        height = Math.floor(maxArea.height / numberYslots);
    } else {
        height = Math.ceil(maxArea.height / numberYslots);
    }

    var newX = maxArea.x + width * x;
    var newY = maxArea.y + height * y;
    return [newX, newY, width * xSlotToFill, height * ySlotToFill]
}
function reposition(client, newX, newY, w, h) {
    client.geometry = {
        x: newX,
        y: newY,
        width: w,
        height: h
    };
}

function move(workspace, numberXslots, numberYslots, x, y, xSlotToFill, ySlotToFill) {
    var client = workspace.activeClient;
    if (client.moveable) {
        arr = newSlotPosition(workspace, client, numberXslots, numberYslots, x, y, xSlotToFill, ySlotToFill);
        var newX = arr[0],
            newY = arr[1],
            w = arr[2],
            h = arr[3];
        reposition(client, newX, newY, w, h)
    }
}

function center(workspace) {
    var client = workspace.activeClient;
    if (client.moveable) {
        var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
        var newX = maxArea.x + ((maxArea.width - client.width) / 2);
        var newY = maxArea.y + ((maxArea.height - client.height) / 2);
        reposition(client, newX, newY, client.width, client.height)
    }
}


// function isInPosition(workspace, numberXslots, numberYslots, x, y, xSlotToFill, ySlotToFill) {
//     var client = workspace.activeClient;
//     if (client.moveable) {
//         arr = getPosition(workspace, client, numberXslots, numberYslots, x, y, xSlotToFill, ySlotToFill);
//         var newX = arr[0],
//             newY = arr[1],
//             w = arr[2],
//             h = arr[3];
//         return (client.x == newX && client.y == newY && client.width == w && client.height == h);
//     }
//     return false;
// }

// Fit 1/4 screen
registerShortcut("MoveWindowToUpLeft14", "UltrawideWindows: Move Window to fit up-left 1/4 width", "Meta+Num+7", function () {
    move(workspace, 4, 2, 0, 0, 1, 1)
});

registerShortcut("MoveWindowToLeft14", "UltrawideWindows: Move Window to fit left 1/4 width", "Meta+Num+4", function () {
    move(workspace, 4, 2, 0, 0, 1, 2)
});

registerShortcut("MoveWindowToDownLeft14", "UltrawideWindows: Move Window to fit down-left 1/4 width", "Meta+Num+1", function () {
    move(workspace, 4, 2, 0, 1, 1, 1)
});

registerShortcut("MoveWindowToUpCenter14", "UltrawideWindows: Move Window to fit up-center 1/4", "Meta+Num+8", function () {
    move(workspace, 4, 2, 1, 0, 2, 1)
});

registerShortcut("MoveWindowToCenter14", "UltrawideWindows: Move Window to fit center 1/4", "Meta+Num+5", function () {
    move(workspace, 4, 2, 1, 0, 2, 2)
});

registerShortcut("MoveWindowToDownCenter14", "UltrawideWindows: Move Window to down-center 1/4", "Meta+Num+2", function () {
    move(workspace, 4, 2, 1, 1, 2, 1)
});

registerShortcut("MoveWindowToUpRight14", "UltrawideWindows: Move Window to fit up-right 1/4 width ", "Meta+Num+9", function () {
    move(workspace, 4, 2, 3, 0, 1, 1)
});

registerShortcut("MoveWindowToRight14", "UltrawideWindows: Move Window to fit right 1/4 width ", "Meta+Num+6", function () {
    move(workspace, 4, 2, 3, 0, 1, 2)
});

registerShortcut("MoveWindowToDownRight14", "UltrawideWindows: Move Window to fit down-right 1/4 width ", "Meta+Num+3", function () {
    move(workspace, 4, 2, 3, 1, 1, 1)
});



// General
registerShortcut("MoveWindowToMaximize", "UltrawideWindows: Maximize Window", "Meta+Num+0", function () {
    move(workspace, 1, 1, 0, 0, 1, 1)
});

registerShortcut("MoveWindowToCenter1", "UltrawideWindows: Center Window (copy)", "alt+Num+5", function () {
    center(workspace)
});
