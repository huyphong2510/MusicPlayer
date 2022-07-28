const $ = document.querySelector.bind(document);

const heading = $("header h2");
const thumb = $(".cd-thumb");
const audio = $("#audio");
const cd = $(".cd");
const playButton = $(".btn-toggle-play");
const player = $(".player");
const progress = $("#progress");
const nextBtn = $(".btn-next");
const prevBtn = $(".btn-prev");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const timeProgress = $(".time-progress");
const playList = $(".playlist");
const likeBtn = $(".btn-like");
const h5 = $("h5");
const playtime = $("#playtime");
const btn = $(".btn-del");
const btnMode = $(".switch");
const dashboard = $(".dashboard");
const body = $("BODY")
const control = $(".control")
const h2 = $("h2")
var storageKey = 'app.currentIndex'

const app = {
  isPlaying: false,
  isRandom: false,
  currentIndex: 0,
  isRepeat: false,
  songs: [
    {
      index : 0,
      name: "There's No One At All",
      singer: "Sơn Tùng MTP",
      path: "../assets/music/TheresNoOneAtAll.mp3",
      image: "../assets/img/TheresNoOneAtAll.jpg",
      isLike: false,
    },
    {
      index : '1',
      name: "Tệ Thật, Anh Nhớ Em",
      singer: "Thanh Hưng",
      path: "../assets/music/TeThatAnhNhoEm.mp3",
      image: "../assets/img/TeThatAnhNhoEm.jpg",
      isLike: 'false',
    },
    {
      index : 2,
      name: "Bắt Cóc Con Tim",
      singer: "Lou Hoàng",
      path: "../assets/music/BatCocConTim.mp3",
      image: "../assets/img/BatCocConTim.jpg",
      isLike: false,
    },
    {
      index : 3,
      name: "Vì Mẹ Anh Bắt Chia Tay",
      singer: "Miu Lê - Karik",
      path: "../assets/music/ViMeAnhBatChiaTay.mp3",
      image: "../assets/img/ViMeAnhBatChiaTay.jpg",
      isLike: false,
    },
    {
      index : 4,
      name: "Ánh Sao Và Bầu Trời",
      singer: "TRI",
      path: "../assets/music/AnhSaoVaBauTroi.mp3",
      image: "../assets/img/AnhSaoVaBauTroi.jpg",
      isLike: false,
    },
    {
      index : 5,
      name: "Tự Sự",
      singer: "Orange - Thuận Nguyễn",
      path: "../assets/music/TuSu.mp3",
      image: "../assets/img/TuSu.jpg",
      isLike: false,
    },
    {
      index : 6,
      name: "Một Ngàn Nỗi Đau",
      singer: "Văn Mai Hương",
      path: "../assets/music/MotNganNoiDau.mp3",
      image: "../assets/img/MotNganNoiDau.jpg",
      isLike: false,
    },
    {
      index : 7,
      name: "24h",
      singer: "Lyly - Magazine",
      path: "../assets/music/24h.mp3",
      image: "../assets/img/24h.jpg",
      isLike: false,
    },
    {
      index : 8,
      name: "Bông Hoa Đẹp Nhất",
      singer: "Quân AP",
      path: "../assets/music/BongHoaDepNhat.mp3",
      image: "../assets/img/BongHoaDepNhat.jpg",
      isLike: false,
    },
    {
      index : 9,
      name: "Chạy Về Khóc Với Anh",
      singer: "Erik",
      path: "../assets/music/ChayVeKhocVoiAnh.mp3",
      image: "../assets/img/ChayVeKhocVoiAnh.jpg",
      isLike: false,
    },
    {
      index : 10,
      name: "Lặng Thầm Yêu",
      singer: "Miu Lê",
      path: "../assets/music/LangThamYeu.mp3",
      image: "../assets/img/LangThamYeu.jpg",
      isLike: false,
    },
    {
      index : 0,
      name: "Muộn Rồi Mà Sao Còn",
      singer: "Sơn Tùng MTP",
      path: "../assets/music/MuonRoiMaSaoCon.mp3",
      image: "../assets/img/MuonRoiMaSaoCon.jpg",
      isLike: false,
    },
  ],

  render: function () {
    const htmls = this.songs.map((song, index) => {
      return `
        <div id="song-list" class="song ${
          index === this.currentIndex ? "active" : ""
        }" data-index="${index}" data-name = "${song.name}" data-image = "${song.image}" data-path = "${song.path}" data-singer = "${song.singer}" data-isLike = "${song.isLike}" > 
      <div class="thumb" style="background-image: url('${song.image}')">
      </div>
      <div class="body">
        <h3 class="title">${song.name}</h3>
        <p class="author">${song.singer}</p> 
      </div>
      <a href="${song.path}" download="" onclick="return confirmDownload()">
      <img src="../assets/img/icon-download.png" width="16" height="16"/>
      </a> &nbsp; &nbsp;
      <button  class="current-song"
      > <img src="../assets/img/trash.png" width="15" height="15"/></button>
      </div>
        `;
    });
    $(".playlist").innerHTML = htmls.join("");
  },

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      },
    });
  },

  handleEvent: function () {
    // lưu this bên ngoài handleEvent
    const _this = this;
    // attribute offsetWidth để lấy độ rộng
    const cdWidth = cd.offsetWidth;

    // xử lý UI quay CD Image
    // .animate JS để quay
    const thumbAnimate = thumb.animate([{ transform: "rotate(2880deg)" }], {
      duration: 100000,
      interations: Infinity,
    });
    // thumbAnimate.pause();

    btnMode.onchange = function () {
      // randomBtn.classList.toggle("active", _this.isRandom);
      dashboard.classList.toggle("darkmode")
      playButton.classList.toggle("darkmode")
      prevBtn.classList.toggle("darkmode")
      nextBtn.classList.toggle("darkmode")
      randomBtn.classList.toggle("darkmode")
      repeatBtn.classList.toggle("darkmode")
      likeBtn.classList.toggle("darkmode")
      playList.classList.toggle("darkmode")
      body.classList.toggle("darkmode")
    };

    // xử lý UI Scroll phần List Player
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollTop;

      // nếu cdWidth > 0 thì lấy giá trị newCdWidth + px còn 0 thì lấy cdWidth = 0
      cd.style.width = newCdWidth > 0 ? +newCdWidth + "px" : 0;
      // scroll down sẽ là mờ CD Player
      cd.style.opacity = newCdWidth / scrollTop;
    };

    //Event click Play/Pause
    playButton.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };
    // Event click Pause button
    audio.onplay = function () {
      _this.isPlaying = true;
      player.classList.add("playing");
      thumbAnimate.play();
    };

    // Event click Play button
    audio.onpause = function () {
      _this.isPlaying = false;
      player.classList.remove("playing");
      thumbAnimate.pause();
    };

    //Check tiến độ bài hát
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = progressPercent;
        playtime.value = progressPercent;
      }
    };
    //UI bật tắt click random bài hát
    randomBtn.onclick = function () {
      _this.isRandom = !_this.isRandom;
      randomBtn.classList.toggle("active", _this.isRandom);
    };

    //Event when click Repeat button
    repeatBtn.onclick = function () {
      _this.isRepeat = !_this.isRepeat;
      repeatBtn.classList.toggle("active", _this.isRepeat);
    };
    // Event when the song ended
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    };

    //Event when click like button
    likeBtn.onclick = function () {
      if (_this.isPlaying == true) {
        let crTime = audio.currentTime;
        audio.addEventListener("emptied", function () {
          audio.currentTime = crTime;
          audio.play();
          crTime = 0;
        });
      }
      _this.isLike = !_this.isLike;
      likeBtn.classList.toggle("active", _this.likeBtn);
      _this.favoriteSong();
    };

    //Event when click to any song
    (playList.onclick = function (e) {     
      _this.currentIndex = localStorage.getItem('app.currentIndex') 
      const songElement = e.target.closest(".song:not(.active)");
      const songDelete = e.target.closest('div > button')     
      if (songElement) {
        _this.currentIndex = Number(songElement.dataset.index);
        localStorage.setItem(storageKey, _this.currentIndex)
        console.log(e.target.name)
        _this.loadCurrentSong(_this.currentIndex);
        _this.render();
        audio.play();
      }
      if (songDelete) {
        songNeedToDel = songElement.dataset;
        const string = JSON.stringify(songNeedToDel)
        const obj = JSON.parse(string)
         deleteSong(obj)
      }
    }),
      //Event when click Seek
      (progress.onchange = function (e) {
        const seekTime = (audio.duration / 100) * e.target.value;
        audio.currentTime = seekTime;
      });
    playtime.onchange = function (e) {
      const seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;
    };

    //Event click Next Button
    nextBtn.onclick = function () {
      if (_this.isRandom) {
        _this.randomSong();
      } else {
        
        _this.nextSong();
      }
      audio.play();
      _this.render();
    };

    //Event click Prev Button
    prevBtn.onclick = function () {
      if (_this.isRandom) {
        _this.randomSong();
      } else {
        _this.prevSong();
      }
      audio.play();
      _this.render();
    };
  },

  loadCurrentSong: function (index) { 
    if (index == null) {
      index = 0
    }
    this.currentIndex = index
    this.likeBtn = this.currentSong.isLike;
    if (this.likeBtn == true) {
      likeBtn.style.color = "red";
    } else if (this.likeBtn == false) {
      likeBtn.style.color = "grey";
    }

    heading.textContent = this.currentSong.name;
    thumb.style.backgroundImage = `url( '${this.currentSong.image}')`;
    h5.textContent = this.currentSong.name + " - " + this.currentSong.singer;
    audio.src = this.currentSong.path;
    this.render()
    // audio.play();
  },

  favoriteSong: function () {
    console.log(111,this.currentIndex)
    if (this.currentSong.isLike == false) {
      this.currentSong.isLike = true;
      $("small").innerHTML = "You liked this song";
      setTimeout(function () {
        $("small").innerHTML = "";
      }, 450);
    } else {
      this.currentSong.isLike = false;
      $("small").innerHTML = "You unliked this song";
      setTimeout(function () {
        $("small").innerHTML = "";
      }, 450);
    }

    this.loadCurrentSong(this.currentIndex);
  },

  randomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
      console.log("this.currentIndex:", this.currentIndex);
    } while (newIndex === this.currentIndex);
    this.currentIndex = newIndex;
    this.loadCurrentSong(this.currentIndex);
  },

  nextSong: function () {  
    this.currentIndex++
    console.log('index:',  this.currentIndex);
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong(this.currentIndex);
  },
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong(this.currentIndex);
  },
  start: function () {
    // set thuộc tính cho Obj
    this.defineProperties();

    // xử lý DOM Event
    this.handleEvent();

    this.loadCurrentSong(localStorage.getItem('app.currentIndex'));

    this.render();

  },
};
app.start();

function deleteSong(obj) {
  console.log('obj',obj)
  const arr = app.songs;
  const songNeedToDel = app.currentSong;
  console.log(222,songNeedToDel);
  if (confirm("Do you really want to delete " + app.currentSong.name) == true) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == songNeedToDel) {
        arr.splice(i, 1);
        app.render();
        app.loadCurrentSong()
        if(arr[i] == arr.length){
          app.loadCurrentSong()
        }
      }
    }
    
  } else {
    app.render();
   
  }
}

function confirmDownload(){
  if(confirm('Do you want to download') == true){
    return true
  }
  else{
    return false
  }
}

function logoutHandler(){
  localStorage.clear()
  window.location.href = 'http://127.0.0.1:5500/MusicPlayer/view/login.html'
}

function advertisementHandler(){
  setInterval(()=>{
    const video = document.getElementById('ads')
    document.getElementById('ads').hidden = false
    document.getElementById('closeAds').hidden = true
    h2.hidden = true
    thumb.hidden = true
    likeBtn.hidden = true
    control.classList.add("hidden")
    progress.hidden = true
    video.src = '../assets/video/ads.mp4'
    audio.pause()
    setInterval(()=>{
      document.getElementById('closeAds').hidden = false
    },5000)
  }, 10000)
  
}
advertisementHandler()

function closeAds() {
  document.getElementById('ads').hidden = true
  document.getElementById('closeAds').hidden = true
  repeatBtn.hidden = false
  prevBtn.hidden = false
  playButton.hidden = false
  nextBtn.hidden = false
  randomBtn.hidden = false
  h2.hidden = false
  thumb.hidden = false
  likeBtn.hidden = false
  progress.hidden = false
  control.classList.remove("hidden");
  audio.play()
}

console.log('control:', control);