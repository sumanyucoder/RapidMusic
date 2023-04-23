/*
design by Voicu Apostol.
design: https://dribbble.com/shots/3533847-Mini-Music-Player
I can't find any open music api or mp3 api so i have to download all musics as mp3 file.
You can fork on github: https://github.com/muhammederdem/mini-player
*/

new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "1",
          artist: "enjoy",
          cover: "https://images.unsplash.com/photo-1536195892759-c8a3c8e1945e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
          source: "https://github.com/sumanyucoder/music-player-songs/blob/main/1.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=JBe0yHNEURo",
          favorited: false
        },
        { 
          name: "2",
          artist: "Lenjoy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/2.jpg",
          source: "https://github.com/sumanyucoder/music-player-songs/blob/main/11.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=Lin-a2lTelg",
          favorited: true
        },
        {
          name: "3",
          artist: "enjoy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/3.jpg",
          source: "https://github.com/sumanyucoder/music-player-songs/blob/main/greater%20than%20one.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=ICjyAe9S54c",
          favorited: false
        },
        {
          name: "4",
          artist: "enjoy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/4.jpg",
          source: "https://github.com/sumanyucoder/music-player-songs/blob/main/12.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=kYgGwWYOd9Y",
          favorited: false
        },
        {
          name: "5",
          artist: "enjoy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/5.jpg",
          source: "https://github.com/sumanyucoder/music-player-songs/blob/main/13.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=0WlpALnQdN8",
          favorited: true
        },
        {
          name: "6",
          artist: "enjoy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/6.jpg",
          source: "https://github.com/sumanyucoder/music-player-songs/blob/main/14.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=HhoATZ1Imtw",
          favorited: false
        },
        {
          name: "7",
          artist: "enjoy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/7.jpg",
          source: "https://github.com/sumanyucoder/music-player-songs/blob/main/16.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=me6aoX0wCV8",
          favorited: true
        },
        {
          name: "8",
          artist: "enjoy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/8.jpg",
          source: "https://github.com/sumanyucoder/music-player-songs/blob/main/15.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=00-Rl3Jlx-o",
          favorited: false
        },
        {
          name: "9",
          artist: "enjoy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "https://github.com/sumanyucoder/music-player-songs/blob/main/10.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        }
        {
          name: "10",
          artist: "enjoy",
          cover: "https://images.unsplash.com/photo-1547241850-eb8a8754f95c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFlc3RoZXRpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
          source: "https://github.com/sumanyucoder/music-player-songs/blob/main/30.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        }
    {
          name: "11",
          artist: "enjoy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "https://github.com/sumanyucoder/music-player-songs/blob/main/10.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        }
    {
          name: "12",
          artist: "enjoy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "https://github.com/sumanyucoder/music-player-songs/blob/main/10.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        }
    {
          name: "13",
          artist: "enjoy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "https://github.com/sumanyucoder/music-player-songs/blob/main/10.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        }{
          name: "14",
          artist: "enjoy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "https://github.com/sumanyucoder/music-player-songs/blob/main/10.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        }{
          name: "15",
          artist: "enjoy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "https://github.com/sumanyucoder/music-player-songs/blob/main/10.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        }{
          name: "16",
          artist: "enjoy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "https://github.com/sumanyucoder/music-player-songs/blob/main/10.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        }{
          name: "17",
          artist: "enjoy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "https://github.com/sumanyucoder/music-player-songs/blob/main/10.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        }{
          name: "18",
          artist: "enjoy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "https://github.com/sumanyucoder/music-player-songs/blob/main/10.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        }{
          name: "19",
          artist: "enjoy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "https://github.com/sumanyucoder/music-player-songs/blob/main/10.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        }{
          name: "20",
          artist: "enjoy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "https://github.com/sumanyucoder/music-player-songs/blob/main/10.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        }{
          name: "21",
          artist: "enjoy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "https://github.com/sumanyucoder/music-player-songs/blob/main/10.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        }{
          name: "22",
          artist: "enjoy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "https://github.com/sumanyucoder/music-player-songs/blob/main/10.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        }{
          name: "23",
          artist: "enjoy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "https://github.com/sumanyucoder/music-player-songs/blob/main/10.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        }{
          name: "24",
          artist: "enjoy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "https://github.com/sumanyucoder/music-player-songs/blob/main/10.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        }{
          name: "25",
          artist: "enjoy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "https://github.com/sumanyucoder/music-player-songs/blob/main/10.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        }{
          name: "26",
          artist: "enjoy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "https://github.com/sumanyucoder/music-player-songs/blob/main/10.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        }{
          name: "27",
          artist: "enjoy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "https://github.com/sumanyucoder/music-player-songs/blob/main/10.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        }{
          name: "28",
          artist: "enjoy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "https://github.com/sumanyucoder/music-player-songs/blob/main/10.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        }{
          name: "29",
          artist: "enjoy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "https://github.com/sumanyucoder/music-player-songs/blob/main/10.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        }{
          name: "30",
          artist: "enjoy",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "https://github.com/sumanyucoder/music-player-songs/blob/main/10.mp3?raw=true",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
