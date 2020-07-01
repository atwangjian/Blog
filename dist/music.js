const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
	theme: '#FADFA3',
	volume: 0.7,//默认音量
    audio: [
      {
        name: "烟火里的尘埃",
        artist: '华晨宇',
        url: 'http://music.163.com/song/media/outer/url?id=29004400.mp3',
        cover: 'http://p1.music.126.net/_49Xz_x9kTTdEgmYYk6w2w==/6672936069046297.jpg?param=300x300',
      },
      {
        name: 'Sold Out',
        artist: 'Hawk Nelson',
        url: 'http://music.163.com/song/media/outer/url?id=31010566.mp3',
        cover: 'http://p2.music.126.net/UR8jAfqus_o1j_QkaYkZ_g==/109951163664241365.jpg?param=300x300',
      },
      {
        name: '麻雀',
        artist: '李荣浩',
        url: 'http://music.163.com/song/media/outer/url?id=1407551413.mp3',
        cover: 'http://p2.music.126.net/TzlSVBiNtpRD2b7MT2Hi-w==/109951164527590793.jpg?param=300x300',
      }
    ]
});