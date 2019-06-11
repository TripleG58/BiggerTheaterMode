// enable Picture-In-Picture button hidden by YouTube
// document.getElementsByClassName('ytp-pip-button').style.display = "";

// change function of theater mode button on YouTube
var x = document.createElement('style');
x.innerHTML = 'ytd-watch-flexy[theater] div#player-theater-container.ytd-watch-flexy {max-height: calc(100vh - 56px);}';
document.body.appendChild(x);
// document.body.appendChild('player-theater-container').style.maxHeight = "calc(100vh - 56px)";

// ytd-watch-flexy[theater] div#player-theater-container.ytd-watch-flexy

