const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "烟火里的尘埃",
        artist: '提莫',
        url: 'https://sharefs.yun.kugou.com/202005242235/bd93b9d261c16375480990b251c02879/G132/M09/1B/09/ZJQEAFs64rSAT9kVADBjfZ5fMX0122.mp3',
        cover: 'http://p1.music.126.net/_49Xz_x9kTTdEgmYYk6w2w==/6672936069046297.jpg?param=300x300',
      },
      {
        name: 'Sold Out',
        artist: 'Hawk Nelson',
        url: 'https://sharefs.yun.kugou.com/202005242228/57d305636387f4042643da5b5d11933d/G027/M02/1B/0B/-5MEAFWjBzWAemWgADQT2DfqgqE861.mp3',
        cover: 'http://p2.music.126.net/UR8jAfqus_o1j_QkaYkZ_g==/109951163664241365.jpg?param=300x300',
      },
      {
        name: '麻雀',
        artist: '李荣浩',
        url: 'https://sharefs.yun.kugou.com/202005242232/cbff9b68cf230bf5cebbae736ede976a/G179/M06/09/04/U4cBAF3npDGAUGH5AD24_UK8ED0597.mp3',
        cover: 'http://p2.music.126.net/TzlSVBiNtpRD2b7MT2Hi-w==/109951164527590793.jpg?param=300x300',
      }
    ]
});