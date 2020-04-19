const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "烟火里的尘埃",
        artist: '华晨宇',
        url: 'https://sharefs.yun.kugou.com/202004192238/04c2c5be40880fac9d4544cf4d77e563/G126/M02/1F/01/XpQEAFpT4NiAe20nAE57zWzy6B4259.mp3',
        cover: 'http://p1.music.126.net/_49Xz_x9kTTdEgmYYk6w2w==/6672936069046297.jpg?param=300x300',
      },
      {
        name: 'Sold Out',
        artist: 'Hawk Nelson',
        url: 'https://sharefs.yun.kugou.com/202004192243/f80908d944f2482574f4414e52feb67a/G027/M02/1B/0B/-5MEAFWjBzWAemWgADQT2DfqgqE861.mp3',
        cover: 'http://p2.music.126.net/UR8jAfqus_o1j_QkaYkZ_g==/109951163664241365.jpg?param=300x300',
      },
      {
        name: '麻雀',
        artist: '李荣浩',
        url: 'https://sharefs.yun.kugou.com/202004192242/a7539befe514abb30d904d1d7b39da7d/G179/M06/09/04/U4cBAF3npDGAUGH5AD24_UK8ED0597.mp3',
        cover: 'http://p2.music.126.net/TzlSVBiNtpRD2b7MT2Hi-w==/109951164527590793.jpg?param=300x300',
      }
    ]
});