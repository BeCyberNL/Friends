/* Betaalde Hersencel — pixel emote sprites (auto-registers <pixel-emote>) */
/* Pixel sprite library for Betaalde Hersencel — <pixel-emote name="hype" size="112"></pixel-emote> */
(function () {
  var PAL = {
    k: '#161630', p: '#f2909c', P: '#d4606f', w: '#ffd9de', W: '#ffffff',
    g: '#ffc933', G: '#cf8a00', y: '#ffe95c', o: '#ff8c1a',
    b: '#2f7bff', B: '#1a3fa8', c: '#6fd2ff', v: '#9a86ff', V: '#5c49cc',
    n: '#f0b489', X: '#32324a', x: '#c3cfe6', m: '#7a2233', r: '#ff5566',
    q: '#d9a3ab', Q: '#a87680', e: '#eed3d8', u: '#ff9a8a', U: '#e0574a'
  };
  function norm(rows) {
    var out = [];
    for (var i = 0; i < 16; i++) {
      var r = rows[i] || '';
      if (r.length < 16) r += Array(16 - r.length + 1).join('.');
      out.push(r.slice(0, 16));
    }
    return out;
  }
  var BASE = norm([
    '................',
    '....kk...kk.....',
    '..kkppkkkppkk...',
    '.kpppppppppppk..',
    '.kpwpppPppppppk.',
    'kppwppppppPpppk.',
    'kpppPpppppppppk.',
    'kppppppppppPppk.',
    'kpppppppppppppk.',
    '.kpppPpppppppk..',
    '.kppppppPppppk..',
    '..kppppppppppk..',
    '...kppppppppk...',
    '....kkkkkkkk....',
    '................',
    '................'
  ]);
  function patch(base, edits) {
    var g = base.map(function (r) { return r.split(''); });
    edits.forEach(function (e) {
      var row = e[0], col = e[1], s = e[2];
      for (var i = 0; i < s.length; i++) {
        if (s[i] !== '_' && g[row] && col + i < 16) g[row][col + i] = s[i];
      }
    });
    return g.map(function (r) { return r.join(''); });
  }
  function recolor(grid, map) {
    return grid.map(function (r) {
      return r.split('').map(function (ch) { return map[ch] || ch; }).join('');
    });
  }
  var SPRITES = {};
  SPRITES.hype = { grid: patch(BASE, [
    [6, 3, 'pyp'], [7, 3, 'yyy'], [8, 3, 'pyp'],
    [6, 10, 'pyp'], [7, 10, 'yyy'], [8, 10, 'pyp'],
    [9, 5, 'kkkkkk'], [10, 5, 'kmmmmk'], [11, 5, 'kkrrkk'],
    [2, 0, 'yy'], [1, 1, 'y'], [2, 13, '_yy'], [3, 15, 'y']
  ]) };
  SPRITES.lul = { grid: patch(BASE, [
    [6, 4, 'k'], [7, 3, 'kpk'], [6, 11, 'k'], [7, 10, 'kpk'],
    [8, 2, 'c'], [8, 13, 'c'],
    [9, 4, 'kkkkkkkk'], [10, 4, 'kmmmmmmk'], [11, 4, 'kmrrrrmk'], [12, 5, 'kkkkkk']
  ]) };
  SPRITES.rip = { grid: recolor(patch(BASE, [
    [6, 3, 'kpk'], [7, 4, 'k'], [8, 3, 'kpk'],
    [6, 10, 'kpk'], [7, 11, 'k'], [8, 10, 'kpk'],
    [10, 6, 'kkkk'], [0, 5, 'gggggg']
  ]), { p: 'q', P: 'Q', w: 'e' }) };
  SPRITES.giga = { grid: recolor(patch(BASE, [
    [7, 3, 'kkk'], [7, 10, 'kkk'],
    [10, 6, 'k'], [10, 9, 'k'], [11, 7, 'kk'],
    [1, 1, 'W'], [0, 13, 'W'], [4, 15, 'c'], [12, 14, 'W'], [13, 2, 'c'], [3, 15, 'c']
  ]), { p: 'v', P: 'V', w: 'c' }) };
  SPRITES.huh = { grid: patch(BASE, [
    [6, 4, 'p'], [7, 4, 'k'],
    [5, 9, 'kkk'], [6, 9, 'WWW'], [7, 9, 'WkW'], [8, 9, 'WWW'],
    [10, 5, 'kk'], [9, 7, 'kk'], [10, 9, 'kk'],
    [0, 12, 'yyy'], [1, 14, 'y'], [2, 13, 'y'], [4, 15, 'y']
  ]) };
  SPRITES.gg = { grid: norm([
    '................',
    '.....kk.........',
    '....knnk........',
    '....knnk........',
    '....knnk........',
    '...kknnkkkkkk...',
    '..kXknnkXXXXXk..',
    '..kXXnnXXXXXXk..',
    '..kXXkkkkkkXXk..',
    '..kXXnnnnnnXXk..',
    '..kXXkkkkkkXXk..',
    '..kXXXXXXXXXXk..',
    '...kXXXXXXXXk...',
    '...kbbbbbbbbk...',
    '....kkkkkkkk....',
    '................'
  ]) };
  SPRITES.euro = { grid: norm([
    '.....kkkkkk.....',
    '...kkggggggkk...',
    '..kgyggggggggk..',
    '.kgyggggggggggk.',
    '.kggggkkkkgggGk.',
    '.kgggkgggggggGk.',
    '.kggkkkkkkgggGk.',
    '.kgggkgggggggGk.',
    '.kggkkkkkkgggGk.',
    '.kgggkgggggggGk.',
    '.kggggkkkkgggGk.',
    '.kgggggggggGGGk.',
    '..kggggggggGGk..',
    '...kkggggGGkk...',
    '.....kkkkkk.....',
    '................'
  ]) };
  SPRITES.heart = { grid: norm([
    '................',
    '..kkkk...kkkk...',
    '.kbbbbk.kbbbbk..',
    'kbcbbbbkbbbbbbk.',
    'kbccbbbbbbbbbBk.',
    'kbbbbbbbbbbbbBk.',
    '.kbbbbbbbbbbBk..',
    '..kbbbbbbbbBk...',
    '...kbbbbbbBk....',
    '....kbbbbBk.....',
    '.....kbbBk......',
    '......kbk.......',
    '.......k........',
    '................',
    '................',
    '................'
  ]) };
  SPRITES.bolt = { grid: norm([
    '........kkkk....',
    '.......kyyyk....',
    '......kyyyk.....',
    '.....kyyyk......',
    '....kyyykkkk....',
    '...kyyyyyyyyk...',
    '....kkkkyyyk....',
    '.......kyyk.....',
    '......kyyk......',
    '.....kyyk.......',
    '....kyyk........',
    '....kyk.........',
    '....kk..........',
    '................',
    '................',
    '................'
  ]) };
  var SHIELD = norm([
    '................',
    '.kkkkkkkkkkkkk..',
    '.kAwAAAAAAAAAk..',
    '.kAAAAAAyyyAAk..',
    '.kAAAAAAyyAAAk..',
    '.kAAAAyyyyyAAk..',
    '.kAAAAAyyAAAAk..',
    '.kAAAAyyAAAAak..',
    '.kAAAAyAAAAAak..',
    '.kAAAAAAAAAAak..',
    '..kAAAAAAAAak...',
    '...kAAAAAAak....',
    '....kAAAAak.....',
    '.....kAAak......',
    '......kak.......',
    '.......k........'
  ]);
  var TIERS = {
    badge1: { A: '#c77b3a', a: '#8a4f1d' },
    badge2: { A: '#c3cfe6', a: '#8290ad' },
    badge3: { A: '#ffc933', a: '#cf8a00' },
    badge4: { A: '#57d4ff', a: '#1d7fd1' },
    badge5: { A: '#9a86ff', a: '#5c49cc' }
  };
  Object.keys(TIERS).forEach(function (name) {
    SPRITES[name] = { grid: SHIELD, pal: TIERS[name] };
  });
  SPRITES.rage = { grid: recolor(patch(BASE, [
    [5, 3, 'k'], [6, 4, 'k'], [5, 12, 'k'], [6, 11, 'k'],
    [7, 4, 'kk'], [7, 10, 'kk'],
    [9, 4, 'kkkkkkkk'], [10, 4, 'kWWWWWWk'], [11, 4, 'kkkkkkkk'], [10, 6, 'k'], [10, 9, 'k'],
    [0, 2, 'W'], [1, 1, 'W'], [0, 13, 'W'], [1, 14, 'W']
  ]), { p: 'u', P: 'U', w: 'e' }) };
  SPRITES.cry = { grid: patch(BASE, [
    [6, 3, 'kkk'], [6, 10, 'kkk'],
    [9, 6, 'k'], [9, 9, 'k'], [10, 7, 'kk'],
    [7, 3, 'c'], [8, 3, 'c'], [9, 3, 'c'], [10, 3, 'c'], [11, 3, 'c'],
    [7, 12, 'c'], [8, 12, 'c'], [9, 12, 'c'], [10, 12, 'c'], [11, 12, 'c']
  ]) };
  SPRITES.pog = { grid: patch(BASE, [
    [5, 3, 'WWW'], [6, 3, 'WkW'], [7, 3, 'WWW'],
    [5, 10, 'WWW'], [6, 10, 'WkW'], [7, 10, 'WWW'],
    [8, 5, 'kkkkkk'], [9, 4, 'kmmmmmmk'], [10, 4, 'kmmmmmmk'], [11, 4, 'kmmmmmmk'], [12, 5, 'kkkkkk']
  ]) };
  SPRITES.sleep = { grid: patch(BASE, [
    [7, 3, 'kkk'], [7, 10, 'kkk'], [10, 7, 'k'],
    [0, 12, 'yyy'], [1, 14, 'y'], [2, 12, 'yyy'], [0, 15, 'y']
  ]) };
  SPRITES.cool = { grid: patch(BASE, [
    [5, 2, 'kkkkkkkkkkkk'],
    [6, 3, 'kkkk'], [7, 4, 'kk'], [6, 9, 'kkkk'], [7, 10, 'kk'],
    [10, 5, 'kkkk'], [9, 9, 'k']
  ]) };
  SPRITES.gold = { grid: recolor(patch(BASE, [
    [7, 3, 'kkk'], [7, 10, 'kkk'], [10, 6, 'k'], [10, 9, 'k'], [11, 7, 'kk'],
    [1, 1, 'W'], [3, 15, 'W'], [12, 14, 'W']
  ]), { p: 'g', P: 'G', w: 'y' }) };
  SPRITES.clown = { grid: patch(BASE, [
    [6, 4, 'k'], [7, 3, 'k'], [7, 5, 'k'], [6, 11, 'k'], [7, 10, 'k'], [7, 12, 'k'],
    [8, 7, 'rr'], [9, 7, 'rr'],
    [9, 4, 'k'], [9, 11, 'k'], [10, 5, 'k'], [10, 10, 'k'], [11, 6, 'kkkk'],
    [2, 0, 'bb'], [3, 0, 'b'], [2, 13, '_bb'], [3, 15, 'b']
  ]) };
  SPRITES.wave = { grid: norm([
    '................',
    '..kk.kk.kk.kk...',
    '.knnknnknnknnk..',
    '.knnknnknnknnk..',
    '.knnknnknnknnk..',
    '.kXXkXXkXXkXXk..',
    '.kXXXXXXXXXXXk..',
    '.kXXXXXXXXXXXkk.',
    '.kXXXXXXXXXXXknk',
    '.kXXXXXXXXXXXkk.',
    '.kXXXXXXXXXXXk..',
    '..kXXXXXXXXXk...',
    '..kbbbbbbbbbk...',
    '...kkkkkkkkk....',
    '................',
    '................'
  ]) };
  var GEM = norm([
    '................',
    '................',
    '....kkkkkkkk....',
    '...kAwAAAAAAk...',
    '..kAwAAAAAAAAk..',
    '.kAAAAaAAaAAAAk.',
    '.kaAAAAAAAAAAak.',
    '..kaAAAAAAAAak..',
    '...kaAAAAAAak...',
    '....kaAAAAak....',
    '.....kaAAak.....',
    '......kaak......',
    '.......kk.......',
    '................',
    '................',
    '................'
  ]);
  var GEMS = {
    gem1: { A: '#c3cfe6', a: '#8290ad' },
    gem100: { A: '#9a86ff', a: '#5c49cc' },
    gem1k: { A: '#7ee787', a: '#3fa85c' },
    gem5k: { A: '#57a5ff', a: '#1d5fd1' },
    gem10k: { A: '#ff5566', a: '#c22a3a' }
  };
  Object.keys(GEMS).forEach(function (name) {
    SPRITES[name] = { grid: GEM, pal: GEMS[name] };
  });
  class PixelEmote extends HTMLElement {
    connectedCallback() {
      if (this._done) return;
      this._done = true;
      var spec = SPRITES[this.getAttribute('name') || 'hype'];
      if (!spec) return;
      var size = parseFloat(this.getAttribute('size') || '112');
      var cv = document.createElement('canvas');
      cv.width = 16; cv.height = 16;
      var ctx = cv.getContext('2d');
      var pal = Object.assign({}, PAL, spec.pal || {});
      spec.grid.forEach(function (row, y) {
        for (var x = 0; x < 16; x++) {
          var ch = row[x];
          if (ch && ch !== '.') { ctx.fillStyle = pal[ch] || '#ff00ff'; ctx.fillRect(x, y, 1, 1); }
        }
      });
      cv.style.cssText = 'width:' + size + 'px;height:' + size + 'px;image-rendering:pixelated;display:block;';
      this.style.display = 'inline-block';
      this.style.lineHeight = '0';
      this.appendChild(cv);
    }
  }
  if (!customElements.get('pixel-emote')) customElements.define('pixel-emote', PixelEmote);
})();

var bhDur=8;window.addEventListener("onWidgetLoad",function(o){bhDur=Number(o.detail.fieldData.duration)||8;});
function q(s){return document.querySelector(s);}var bhT;
window.addEventListener("onEventReceived",function(o){var l=o.detail.listener,ev=o.detail.event||{};if(l!=="follower-latest")return;if(ev.name===undefined&&ev.data)ev=ev.data;try{q(".bh-name").textContent=ev.name;}catch(e){}var r=q(".bh-alert");r.classList.add("bh-show");clearTimeout(bhT);bhT=setTimeout(function(){r.classList.remove("bh-show");},bhDur*1000);});
