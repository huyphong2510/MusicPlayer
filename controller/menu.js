const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const heading = $("header h2");
const player = $(".player");
const playList = $(".playlist");



const app = {
  songs: [
    {
      name: "There's No One At All",
      singer: "Sơn Tùng MTP",
      path: "../assets/music/TheresNoOneAtAll.mp3",
      image: "../assets/img/TheresNoOneAtAll.jpg",
      isLike: false,
    },
    {
      name: "Tệ Thật, Anh Nhớ Em",
      singer: "Thanh Hưng",
      path: "../assets/music/TeThatAnhNhoEm.mp3",
      image: "../assets/img/TeThatAnhNhoEm.jpg",
      isLike: false,
    },
    {
      name: "Bắt Cóc Con Tim",
      singer: "Lou Hoàng",
      path: "../assets/music/BatCocConTim.mp3",
      image: "../assets/img/BatCocConTim.jpg",
      isLike: false,
    },
    {
      name: "Vì Mẹ Anh Bắt Chia Tay",
      singer: "Miu Lê - Karik",
      path: "../assets/music/ViMeAnhBatChiaTay.mp3",
      image: "../assets/img/ViMeAnhBatChiaTay.jpg",
      isLike: false,
    },
    {
      name: "Ánh Sao Và Bầu Trời",
      singer: "TRI",
      path: "../assets/music/AnhSaoVaBauTroi.mp3",
      image: "../assets/img/AnhSaoVaBauTroi.jpg",
      isLike: false,
    },
    {
      name: "Tự Sự",
      singer: "Orange - Thuận Nguyễn",
      path: "../assets/music/TuSu.mp3",
      image: "../assets/img/TuSu.jpg",
      isLike: false,
    },
    {
      name: "Một Ngàn Nỗi Đau",
      singer: "Văn Mai Hương",
      path: "../assets/music/MotNganNoiDau.mp3",
      image: "../assets/img/MotNganNoiDau.jpg",
      isLike: false,
    },
    {
      name: "24h",
      singer: "Lyly - Magazine",
      path: "../assets/music/24h.mp3",
      image: "../assets/img/24h.jpg",
      isLike: false,
    },
    {
      name: "Bông Hoa Đẹp Nhất",
      singer: "Quân AP",
      path: "../assets/music/BongHoaDepNhat.mp3",
      image: "../assets/img/BongHoaDepNhat.jpg",
      isLike: false,
    },
    {
      name: "Chạy Về Khóc Với Anh",
      singer: "Erik",
      path: "../assets/music/ChayVeKhocVoiAnh.mp3",
      image: "../assets/img/ChayVeKhocVoiAnh.jpg",
      isLike: false,
    },
    {
      name: "Lặng Thầm Yêu",
      singer: "Miu Lê",
      path: "../assets/music/LangThamYeu.mp3",
      image: "../assets/img/LangThamYeu.jpg",
      isLike: false,
    },
    {
      name: "Muộn Rồi Mà Sao Còn",
      singer: "Sơn Tùng MTP",
      path: "../assets/music/MuonRoiMaSaoCon.mp3",
      image: "../assets/img/MuonRoiMaSaoCon.jpg",
      isLike: false,
    },
  ],
  start: function () {
    // set thuộc tính cho Obj
    // this.defineProperties();

        // xử lý DOM Event
        // this.handleEvent();

        // this.loadCurrentSong();

        this.render();
    },
    render: function () {
        const htmls = this.songs.map((song) => {
            return `
        <a style="text-decoration: none" href="http://127.0.0.1:5500/MusicPlayer/view/music_player.html">
        <div class="song">
      <div class="thumb" style="background-image: url('${song.image}')">
      </div>
      <div class="body">
        <h3 class="title">${song.name}</h3>
        </a>
        <p class="author">${song.singer}</p>
        
      </div>
      
      </div>
     
        `;
        });
        $(".playlist").innerHTML = htmls.join("");
    },
};



app.start();
