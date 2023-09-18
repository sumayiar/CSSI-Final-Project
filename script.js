/*Responsive to menu changes*/

function changeBackground(aesthetic) {
  if (aesthetic === 'city') {
    document.body.style.backgroundImage = "url(background/city.jpg";
  }
  else if (aesthetic === 'cafe') {
    document.body.style.backgroundImage = "url(background/cafe.jpg)";
  }
  else if (aesthetic === 'beach') {
    document.body.style.backgroundImage = "url(background/beach.jpg)";
  }
  else if (aesthetic === 'library') {
    document.body.style.backgroundImage = "url(background/library.jpg)";
  }
  else if (aesthetic === 'forest') {
    document.body.style.backgroundImage = "url(background/forest.jpg)";
  };
}

function changePlaylist(aesthetic){
  const playlistWidget = document.getElementById("spotifyPlaylist");
  console.log(playlistWidget);
  if (aesthetic === 'city') {
    playlistWidget.src = "https://open.spotify.com/embed-legacy/playlist/2EUaq48Csc6zyqj1SIKM5r?utm_source=generator";
  }
  else if (aesthetic === 'cafe') {
    playlistWidget.src = "https://open.spotify.com/embed-legacy/playlist/7K6fVGUcL6ChCsRMJP4oOC?utm_source=generator";
  }
  else if (aesthetic === 'beach') {
    console.log("yes");
    playlistWidget.src = "https://open.spotify.com/embed-legacy/playlist/1jmwDOny8FTPIONpherFav?utm_source=generator";
  }
  else if (aesthetic === 'library') {
    playlistWidget.src = "https://open.spotify.com/embed-legacy/playlist/6M9dSsweuTY7mftpQfMmPo?utm_source=generator";
  }
  else if (aesthetic === 'forest') {
    playlistWidget.src = "https://open.spotify.com/embed-legacy/playlist/69WnTHKnVPSPcyhOowI3Ag";
  };
}

/*Typewriter Welcome*/

function hide() {
  var button=document.getElementById('typewriter');
  button.style.display="none";
}
new Typewriter('#typewriter', {
  strings: ['Welcome...'],
  autoStart: true,
  loop: true,
});

/*Timer*/

setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
}

var pomodoro = {
    started : false,
    minutes : 0,
    seconds : 0,
    fillerHeight : 0,
    fillerIncrement : 0,
    interval : null,
    minutesDom : null,
    secondsDom : null,
    fillerDom : null,
    init : function(){
      var self = this;
      this.minutesDom = document.querySelector('#minutes');
      this.secondsDom = document.querySelector('#seconds');
      this.fillerDom = document.querySelector('#filler');
      this.interval = setInterval(function(){
        self.intervalCallback.apply(self);
      }, 1000);
      document.querySelector('#work').onclick = function(){
        self.startWork.apply(self);
      };
      document.querySelector('#shortBreak').onclick = function(){
        self.startShortBreak.apply(self);
      };
      document.querySelector('#longBreak').onclick = function(){
        self.startLongBreak.apply(self);
      };
      document.querySelector('#stop').onclick = function(){
        self.stopTimer.apply(self);
      };
    },
    resetVariables : function(mins, secs, started){
      this.minutes = mins;
      this.seconds = secs;
      this.started = started;
      this.fillerIncrement = 200/(this.minutes*60);
      this.fillerHeight = 0;  
    },
    startWork: function() {
      this.resetVariables(25, 0, true);
    },
    startShortBreak : function(){
      this.resetVariables(5, 0, true);
    },
    startLongBreak : function(){
      this.resetVariables(15, 0, true);
    },
    stopTimer : function(){
      this.resetVariables(25, 0, false);
      this.updateDom();
    },
    toDoubleDigit : function(num){
      if(num < 10) {
        return "0" + parseInt(num, 10);
      }
      return num;
    },
    updateDom : function(){
      this.minutesDom.innerHTML = this.toDoubleDigit(this.minutes);
      this.secondsDom.innerHTML = this.toDoubleDigit(this.seconds);
      this.fillerHeight = this.fillerHeight + this.fillerIncrement;
      this.fillerDom.style.height = this.fillerHeight + 'px';
    },
    intervalCallback : function(){
      if(!this.started) return false;
      if(this.seconds == 0) {
        if(this.minutes == 0) {
          this.timerComplete();
          return;
        }
        this.seconds = 59;
        this.minutes--;
      } else {
        this.seconds--;
      }
      this.updateDom();
    },
    timerComplete : function(){
      this.started = false;
      this.fillerHeight = 0;
    }
};
window.onload = function(){
  pomodoro.init();
};

/*Leave page alert*/

 function myFunction() {
  var x = document.getElementById("pomodoro-app","buttons");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

/*IDK*/
AOS.init({
  once: false
});

/*QUOTE*/
