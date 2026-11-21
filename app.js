(()=>{'use strict';
const D={
Animals:["cat|A small furry pet that purrs.|The cat sleeps on the sofa.","fox|A wild animal with a bushy tail.|The fox ran into the forest.","owl|A bird that hunts at night.|The owl hooted from the tree.","lion|A big cat known as the king of the jungle.|The lion roared loudly.","zebra|A striped animal that looks like a horse.|The zebra ran across the plain.","rabbit|A small animal with long ears.|The rabbit hopped into the garden.","penguin|A bird that swims but cannot fly.|The penguin slid on the ice.","dolphin|A clever sea animal that loves to jump.|A dolphin leaped out of the water.","elephant|The biggest land animal, with a long trunk.|The elephant sprayed water with its trunk.","giraffe|The tallest animal, with a very long neck.|The giraffe ate leaves from the tall tree."],
Fruits:["fig|A sweet, soft fruit full of tiny seeds.|She ate a fig for a snack.","pear|A juicy fruit that is wide at the bottom.|The pear was sweet and crunchy.","plum|A small purple fruit with a stone inside.|I packed a plum in my lunch.","lime|A small, sour green fruit.|Squeeze some lime into the water.","apple|A round fruit that is red, green or yellow.|An apple a day keeps you healthy.","mango|A sweet tropical fruit with orange flesh.|We shared a ripe mango.","banana|A long yellow fruit with a peel.|The monkey peeled a banana.","cherry|A tiny round red fruit.|A cherry sat on top of the cake.","pineapple|A tropical fruit with spiky skin.|The pineapple tasted sweet and tangy.","strawberry|A red fruit with tiny seeds on the outside.|We picked a strawberry from the field."],
Colors:["red|The color of a ripe tomato.|She wore a red hat.","blue|The color of the sky on a clear day.|The ocean looks blue.","pink|A light color made from red and white.|The flower was bright pink.","gold|A shiny yellow color.|The winner got a gold medal.","green|The color of fresh grass.|The leaves turn green in spring.","brown|The color of chocolate and soil.|The bear has brown fur.","purple|A color made by mixing red and blue.|Grapes can be purple.","yellow|The color of the sun and bananas.|The duckling is yellow.","orange|A color between red and yellow.|The sunset turned orange.","silver|A shiny grey color.|The silver moon lit the night."],
Science:["atom|The tiny building block of everything.|Every object is made of an atom.","cell|The smallest living part of a plant or animal.|Each cell does a special job.","heat|Energy that makes things warm.|The heat of the sun melts ice.","force|A push or a pull on an object.|Gravity is a force that pulls us down.","planet|A large world that moves around a star.|Earth is a planet.","energy|The power to do work or make things move.|Food gives your body energy.","magnet|An object that pulls iron towards it.|The magnet stuck to the fridge.","gravity|The force that pulls things to the ground.|Gravity keeps us on the Earth.","volcano|A mountain that can erupt with hot lava.|The volcano shot out smoke.","oxygen|The gas in air that we need to breathe.|Plants give us oxygen.","experiment|A test to discover something new.|We did a fun science experiment."],
Nature:["sun|The star that gives us light and heat.|The sun rises in the morning.","sea|A large area of salty water.|We swam in the sea.","tree|A tall plant with a trunk and branches.|A bird built a nest in the tree.","rain|Water that falls from clouds.|The rain filled the puddles.","wind|Air that moves outside.|The wind blew the kite high.","river|A long stream of water that flows to the sea.|The river runs through the valley.","cloud|A white or grey mass in the sky.|A fluffy cloud floated by.","forest|A large area full of trees.|Deer live in the forest.","thunder|The loud sound after lightning.|The thunder made me jump.","rainbow|A colorful arch seen after rain.|We saw a rainbow in the sky.","mountain|A very high hill.|They climbed the mountain."],
Technology:["app|A program you use on a phone or tablet.|I play a word game on this app.","code|Instructions that tell a computer what to do.|She wrote code for a game.","chip|A tiny part that is the brain of a device.|A chip powers the tablet.","mouse|A small tool used to move the cursor.|Click the mouse to open it.","robot|A machine that can do tasks by itself.|The robot cleaned the room.","laptop|A computer you can carry around.|He typed on his laptop.","screen|The flat part of a device that shows pictures.|The screen is bright.","camera|A device that takes photos.|The camera took a nice picture.","program|A set of steps a computer follows.|This program draws shapes.","keyboard|A set of keys used to type.|I type words on the keyboard.","internet|A network that connects computers around the world.|We use the internet to learn.","software|Programs that run on a computer.|New software makes games faster."],
"General Knowledge":["book|Pages with words and pictures to read.|I read a book at bedtime.","door|An entrance you open and close.|Please close the door.","star|A bright light in the night sky.|Make a wish on a star.","home|The place where you live.|I walk home from school.","clock|A tool that shows the time.|The clock struck nine.","school|A place where children learn.|We learn new words at school.","friend|A person you like and trust.|My friend shared her lunch.","bridge|A path built over water or a road.|We crossed the bridge.","library|A place where you can borrow books.|The library is quiet.","journey|A long trip from one place to another.|Our journey took two days.","adventure|An exciting and unusual experience.|The treasure hunt was a big adventure."]};
const X={
Animals:["bee|An insect that makes honey.|The bee buzzed around the flower.","frog|A small jumping animal that lives near water.|The frog jumped into the pond.","camel|A desert animal with humps.|The camel walked across the sand.","monkey|A clever animal that climbs trees.|The monkey swung from branch to branch.","kangaroo|An animal from Australia that hops.|The kangaroo carried a baby in its pouch.","hedgehog|A small animal covered in spines.|The hedgehog curled into a ball.","butterfly|An insect with colorful wings.|A butterfly landed on the rose.","crocodile|A large reptile with strong jaws.|The crocodile rested by the river."],
Fruits:["kiwi|A small green fruit with brown fuzzy skin.|He sliced a kiwi for breakfast.","grape|A small fruit that grows in bunches.|She ate a sweet grape.","lemon|A sour yellow fruit.|Lemon juice makes lemonade.","melon|A big round fruit with juicy flesh.|We shared a cold melon.","papaya|A tropical fruit with orange flesh and black seeds.|Papaya is soft and sweet.","coconut|A large hard fruit with sweet water inside.|We drank water from a coconut.","blueberry|A tiny round blue fruit.|The muffin had a blueberry in it.","watermelon|A huge green fruit that is red inside.|Watermelon is perfect on a hot day."],
Colors:["teal|A blue-green color.|The pool looked teal.","navy|A very dark blue.|He wore a navy jacket.","white|The color of snow and milk.|Snow is white.","black|The color of the night sky.|The cat has black fur.","violet|A purple color like a small flower.|A violet grew by the path.","scarlet|A bright red color.|The scarlet bird flew past.","crimson|A deep red color.|The crimson sunset glowed.","turquoise|A bright blue-green color.|The sea was turquoise."],
Science:["gas|Something like air that spreads out freely.|Steam is a gas.","moon|The big rock that circles the Earth.|The moon shone brightly.","rocket|A vehicle that travels into space.|The rocket blasted off.","galaxy|A huge group of stars and planets.|Our galaxy is called the Milky Way.","fossil|The old remains of a plant or animal in rock.|We found a fossil of a shell.","molecule|A tiny group of atoms joined together.|Water is a molecule.","telescope|A tool that makes faraway things look close.|He saw Saturn through a telescope.","microscope|A tool that makes tiny things look big.|A microscope shows tiny cells."],
Nature:["leaf|The flat green part of a plant.|A leaf fell from the tree.","lake|A large body of still water.|We rowed across the lake.","snow|Soft white flakes of frozen water.|Snow covered the hills.","storm|Bad weather with wind and rain.|The storm shook the windows.","desert|A very dry place with little rain.|The desert is hot by day.","island|Land with water all around it.|We sailed to an island.","habitat|The natural home of an animal.|The forest is a bear habitat.","sunshine|The light and warmth of the sun.|We played in the sunshine.","waterfall|Water that falls from a high place.|The waterfall roared.","lightning|A bright flash of light in a storm.|Lightning lit up the sky."],
Technology:["wifi|A way to connect to the internet without wires.|The tablet joined the wifi.","email|A message sent using the internet.|I sent an email to my teacher.","pixel|A tiny dot that makes up a picture on screen.|Each pixel has a color.","tablet|A flat touch-screen computer.|She read a story on a tablet.","website|A place on the internet with pages to visit.|We built a website.","password|A secret word that keeps your account safe.|Never share your password.","computer|A machine that stores and works with information.|The computer started quickly.","download|To copy something from the internet to your device.|Please download the game.","algorithm|A set of clear steps to solve a problem.|An algorithm sorts the list.","technology|Tools and machines made using science.|Technology makes life easier."],
"General Knowledge":["cake|A sweet baked treat for parties.|We ate cake on my birthday.","kind|Caring and gentle toward others.|It is kind to share.","team|A group that works together.|Our team won the game.","dream|Pictures and stories in your mind while you sleep.|I had a dream about flying.","music|Sounds that make a song.|We danced to the music.","garden|A place where flowers and vegetables grow.|Grandma has a lovely garden.","teacher|A person who helps you learn.|My teacher reads us stories.","puzzle|A game that tests your thinking.|We solved the puzzle together.","courage|Being brave when you feel afraid.|It takes courage to try something new.","treasure|Gold, jewels or other valuable things.|The pirates buried the treasure.","discover|To find something for the first time.|You can discover new words.","champion|The winner of a contest.|She is the spelling champion.","celebrate|To enjoy a special day or event.|We celebrate with fireworks.","knowledge|What you know from learning and experience.|Reading gives you knowledge."]};
for(const c in X)D[c]=D[c].concat(X[c]);
const W=[];for(const c in D)D[c].forEach(s=>{const[w,m,e]=s.split('|');W.push({w:w.toUpperCase(),m,e,c})});
const rnd=n=>Math.random()*n|0,R=s=>[...s].reverse().join(''),shuf=a=>{for(let i=a.length-1;i>0;i--){const j=rnd(i+1);[a[i],a[j]]=[a[j],a[i]]}return a};
const TN=['Easy','Medium','Hard','Expert'],tierOf=n=>n<=8?0:n<=24?1:n<=49?2:3;
const DIR=[[0,1],[1,0],[1,1],[-1,1],[0,-1],[-1,0],[-1,-1],[1,-1]];
function cfg(n){const t=tierOf(n),size=Math.min(n>=50?13:12,5+Math.ceil(n/4));
 return{n,t,size,cnt:n<4?3:3+(n%2),lo:[3,5,n>=40?7:6,n>=100?8:7][t],hi:[4,7,Math.min(size,10),Math.min(size,12)][t],dirs:DIR.slice(0,[2,4,8,8][t])}}
function gen(n){const c=cfg(n),N=c.size;
 for(let k=0;k<80;k++){
  const cat=Object.keys(D)[rnd(7)],ok=o=>o.w.length>=c.lo-(k>40?2:0)&&o.w.length<=c.hi;
  const pool=shuf(W.filter(o=>ok(o)&&o.c==cat)).concat(shuf(W.filter(o=>ok(o)&&o.c!=cat))),ws=[];
  for(const o of pool){if(ws.length>=c.cnt)break;if(ws.every(x=>!x.w.includes(o.w)&&!o.w.includes(x.w)&&!x.w.includes(R(o.w))&&!R(o.w).includes(x.w)))ws.push(o)}
  const g=Array.from({length:N},()=>Array(N).fill('')),pl=[];let good=ws.length==c.cnt;
  for(const o of ws.slice().sort((a,b)=>b.w.length-a.w.length)){if(!good)break;let placed=false;
   for(let a=0;a<200&&!placed;a++){const[dr,dc]=c.dirs[rnd(c.dirs.length)],L=o.w.length,r0=rnd(N),c0=rnd(N),r1=r0+dr*(L-1),c1=c0+dc*(L-1);
    if(r1<0||r1>=N||c1<0||c1>=N)continue;let fit=true;
    for(let i=0;i<L;i++){const v=g[r0+dr*i][c0+dc*i];if(v&&v!==o.w[i]){fit=false;break}}
    if(!fit)continue;const cells=[];for(let i=0;i<L;i++){g[r0+dr*i][c0+dc*i]=o.w[i];cells.push([r0+dr*i,c0+dc*i])}
    pl.push({...o,cells});placed=true}
   if(!placed)good=false}
  if(good){for(let r=0;r<N;r++)for(let q=0;q<N;q++)if(!g[r][q])g[r][q]='ABCDEFGHIJKLMNOPQRSTUVWXYZ'[rnd(26)];
   return{cf:c,g,pl:shuf(pl),cat}}}
 return n>1?gen(n-1):null}
if(typeof document==='undefined'){module.exports={gen,cfg,tierOf};return}

const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const ic=(n,c='')=>`<svg class="i ${c}"><use href="#i-${n}"/></svg>`,fmt=t=>String(t/60|0).padStart(2,'0')+':'+String(t%60).padStart(2,'0');
const PAL=[['#FF6B35','#fff'],['#00B4D8','#06283d'],['#F25F5C','#fff'],['#F7B32B','#3a2300'],['#0077B6','#fff'],['#90E0EF','#06283d']];
const K='wordquest.v1';let S={unlocked:1,stars:{},score:0,learned:{},theme:'',sound:true};
try{Object.assign(S,JSON.parse(localStorage.getItem(K)||'{}'))}catch(e){}
const save=()=>{try{localStorage.setItem(K,JSON.stringify(S))}catch(e){}};
if(!S.theme)S.theme=matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';
let G=null,tm=null,lvN=40,dp=null;

/* sound */
let ac;function tone(f,d=.12,t='sine',v=.14,at=0){if(!S.sound)return;try{ac=ac||new(window.AudioContext||window.webkitAudioContext)();const o=ac.createOscillator(),g=ac.createGain(),s=ac.currentTime+at;o.type=t;o.frequency.value=f;g.gain.setValueAtTime(v,s);g.gain.exponentialRampToValueAtTime(.001,s+d);o.connect(g);g.connect(ac.destination);o.start(s);o.stop(s+d)}catch(e){}}
const sfx={tap:()=>tone(520,.05,'sine',.07),ok:()=>{tone(660,.12);tone(880,.18,'sine',.14,.1)},no:()=>tone(170,.2,'triangle'),win:()=>[523,659,784,1047,1319].forEach((f,i)=>tone(f,.3,'sine',.14,i*.13))};
function toast(t){const e=$('#toast');e.textContent=t;e.hidden=false;clearTimeout(toast.t);toast.t=setTimeout(()=>e.hidden=true,3200)}

/* ui helpers */
function applyTheme(){document.documentElement.dataset.theme=S.theme;$('meta[name=theme-color]').content=S.theme=='dark'?'#06202f':'#0077B6';$('#thIc').innerHTML=ic(S.theme=='dark'?'sun':'moon');$('#swT').setAttribute('aria-pressed',S.theme=='dark')}
function snd(){$$('.snd').forEach(b=>b.innerHTML=ic(S.sound?'sound':'mute'));$('#swS').setAttribute('aria-pressed',S.sound)}
function show(id){if(id!='game'&&G&&!G.done)G.paused=true;$$('.screen').forEach(s=>s.classList.toggle('on',s.id==id));$('#pause').hidden=true;if(id!='game'){$('#done').hidden=true;fx(false)}scrollTo(0,0);
 if(id=='home')buildHome();if(id=='levels'){lvN=Math.max(40,Math.ceil((S.unlocked+5)/20)*20);buildLv(true)}if(id=='progress')buildPr()}
function buildHome(){$('#playT').textContent=(S.unlocked>1?'Continue - Level ':'Play Level ')+S.unlocked;
 const st=Object.values(S.stars).reduce((a,b)=>a+b,0);$('#hsum').textContent=`${S.unlocked-1} levels completed - ${st} stars - ${Object.keys(S.learned).length} words learned`}
function buildLv(sc){const stg={1:0,9:1,25:2,50:3};let h='';
 for(let n=1;n<=lvN;n++){const lk=n>S.unlocked,st=S.stars[n]||0;if(stg[n]!==undefined)h+=`<div class="stg">${TN[stg[n]]} stage</div>`;
  h+=`<button class="lvb t${tierOf(n)}${n==S.unlocked?' cur':''}" data-a="lv" data-n="${n}" ${lk?'disabled':''}>${lk?ic('lock'):n}<span>${[1,2,3].map(k=>ic('star',k<=st?'fill on':'fill')).join('')}</span></button>`}
 $('#lv').innerHTML=h;if(sc){const c=$('#lv .cur');if(c)c.scrollIntoView({block:'center'})}}
function buildPr(){const st=Object.values(S.stars).reduce((a,b)=>a+b,0),ws=Object.keys(S.learned),L=S.unlocked-1,t=tierOf(S.unlocked),nx=[9,25,50][t],m={};W.forEach(o=>m[o.w]=o);
 $('#prS').innerHTML=[['Levels completed',L],['Stars earned',st],['Total score',S.score],['Words learned',ws.length]].map(([k,v])=>`<div class="stc"><b>${v}</b><small>${k}</small></div>`).join('');
 $('#prT').innerHTML=`<b>${TN[t]} stage</b>`+(nx?`<div class="pb"><i style="width:${Math.min(100,L/(nx-1)*100)}%"></i></div><small class="mut">Reach level ${nx} to unlock ${TN[t+1]} puzzles</small>`:`<p class="mut">Top stage reached. Levels never end and keep getting harder.</p>`);
 const BD=[['First Steps','Finish level 1',L>=1],['Word Explorer','Learn 25 words',ws.length>=25],['Rising Star','Reach level 10',L>=9],['Star Collector','Earn 30 stars',st>=30],['Puzzle Pro','Reach Hard stage',S.unlocked>=25],['Brainiac','Learn 100 words',ws.length>=100],['Master','Reach Expert stage',S.unlocked>=50],['Centurion','Finish 100 levels',L>=100]];
 $('#prB').innerHTML=BD.map(([a,b,o])=>`<div class="bd${o?'':' off'}">${ic(o?'trophy':'lock')}<b>${a}</b><small>${b}</small></div>`).join('');
 $('#prC').innerHTML=Object.keys(D).map(c=>{const tot=W.filter(o=>o.c==c),n=tot.filter(o=>S.learned[o.w]).length;return`<div class="cb"><span>${c}</span><div class="pb"><i style="width:${n/tot.length*100}%"></i></div><span>${n}/${tot.length}</span></div>`}).join('');
 $('#prW').innerHTML=ws.length?ws.reverse().map(w=>`<div class="wl"><b>${w}</b><span>${m[w]?m[w].m:''}</span></div>`).join(''):'<p class="mut">Words you find will appear here with their meanings.</p>'}

/* game */
const cell=(r,c)=>$('#board').children[1+r*G.cf.size+c];
function start(n){clearInterval(tm);const p=gen(n);G={n,...p,found:new Set(),t:0,sc:0,hints:0,paused:false,done:false,drag:false,anchor:null,s:null,e:null};fx(false);$('#done').hidden=true;$('#pause').hidden=true;
 const b=$('#board');b.style.setProperty('--n',G.cf.size);
 b.innerHTML=G.g.map((row,r)=>row.map((ch,c)=>`<div class="cell k${(r*3+c*2+rnd(2))%5}" data-r="${r}" data-c="${c}">${ch}</div>`).join('')).join('');b.insertAdjacentHTML('afterbegin','<svg id="caps"></svg>');
 $('#gT').textContent='Level '+n;$('#gS').textContent=`${G.cat} - ${TN[tierOf(n)]}`;$('#gSc').textContent=0;$('#gTm').textContent='00:00';$('#hintN').textContent=3;
 $('#words').innerHTML=G.pl.map((o,i)=>`<span class="chip" id="w${i}">${o.w}</span>`).join('');
 $('#card').innerHTML='<b>Find the hidden words</b><p>Drag across letters, or tap the first and last letter. Words can run '+(G.cf.t?'in any direction, even backwards.':'across or down.')+'</p>';
 show('game');tm=setInterval(()=>{if(!G.paused&&!G.done){G.t++;$('#gTm').textContent=fmt(G.t)}},1000)}
function line(a,b){let dr=b[0]-a[0],dc=b[1]-a[1];const ar=Math.abs(dr),ac2=Math.abs(dc),m=Math.max(ar,ac2);
 if(ar>2*ac2)dc=0;else if(ac2>2*ar)dr=0;else{dr=Math.sign(dr)*m;dc=Math.sign(dc)*m}
 const L=Math.max(Math.abs(dr),Math.abs(dc)),N=G.cf.size,out=[];
 for(let i=0;i<=L;i++){const r=a[0]+Math.sign(dr)*i,c=a[1]+Math.sign(dc)*i;if(r<0||c<0||r>=N||c>=N)break;out.push([r,c])}return out}
function drawSel(){$$('#board .sel').forEach(x=>x.classList.remove('sel'));(G.drag?line(G.s,G.e):G.anchor?[G.anchor]:[]).forEach(([r,c])=>cell(r,c).classList.add('sel'))}
const cellAt=e=>{const el=document.elementFromPoint(e.clientX,e.clientY);return el&&el.dataset&&el.dataset.r!==undefined?[+el.dataset.r,+el.dataset.c]:null};
function check(a,b){const cs=line(a,b);G.drag=false;G.anchor=null;
 if(cs.length>1){const s=cs.map(([r,c])=>G.g[r][c]).join(''),rs=R(s),i=G.pl.findIndex((o,k)=>!G.found.has(k)&&(o.w==s||o.w==rs));
  if(i>=0){drawSel();return found(i,cs)}
  sfx.no();cs.forEach(([r,c])=>{const e=cell(r,c);e.classList.remove('no');void e.offsetWidth;e.classList.add('no')})}
 drawSel()}
function found(i,cs){const o=G.pl[i],[bg,fg]=PAL[G.found.size%PAL.length];G.found.add(i);
 cs.forEach(([r,c])=>{const e=cell(r,c);e.classList.add('found');e.style.color=fg});capsule(cs,bg);
 const ch=$('#w'+i);ch.classList.add('done');ch.style.background=bg;ch.style.color=fg;
 S.learned[o.w]=1;G.sc+=100;$('#gSc').textContent=G.sc;save();sfx.ok();
 $('#card').innerHTML=`<b>${o.w}</b><small>${o.c}</small><p>${o.m}</p><em>"${o.e}"</em>`;
 if(G.found.size==G.pl.length)setTimeout(win,650)}
function capsule(cs,bg){const svg=$('#caps'),b=$('#board'),a=cell(...cs[0]),z=cell(...cs[cs.length-1]);
 svg.setAttribute('viewBox',`0 0 ${b.clientWidth} ${b.clientHeight}`);
 const x1=a.offsetLeft+a.offsetWidth/2,y1=a.offsetTop+a.offsetHeight/2,x2=z.offsetLeft+z.offsetWidth/2,y2=z.offsetTop+z.offsetHeight/2,len=Math.hypot(x2-x1,y2-y1)+1,l=document.createElementNS('http://www.w3.org/2000/svg','line');
 for(const[k,v]of Object.entries({x1,y1,x2,y2,stroke:bg,'stroke-width':a.offsetWidth*.88,'stroke-linecap':'round',class:'ln'}))l.setAttribute(k,v);
 l.style.strokeDasharray=len;l.style.strokeDashoffset=len;svg.appendChild(l);
 const p=document.createElement('div');p.className='fp';p.textContent='+100';p.style.left=x2+'px';p.style.top=y2+'px';b.appendChild(p);setTimeout(()=>p.remove(),1000)}
function win(){G.done=true;clearInterval(tm);const par=G.cf.size*G.pl.length*6,bonus=Math.max(0,par-G.t)*2,lv=G.sc+bonus,
 st=G.t<=par&&G.hints<2?3:G.t<=par*2?2:1,n=G.n,up=tierOf(n+1)>tierOf(n);
 S.score+=lv;S.stars[n]=Math.max(S.stars[n]||0,st);if(n>=S.unlocked)S.unlocked=n+1;save();
 $('#done').innerHTML=`<div class="dlg"><div class="rays"></div><h2>${['','Well Done!','Great Job!','Perfect!'][st]}</h2><p class="mut">Level ${n} complete</p><div class="stars">${[1,2,3].map(k=>ic('star',k<=st?'fill on':'fill').replace('class="i','style="--d:'+(k*.25)+'s" class="i')).join('')}</div>
 <div class="res"><div><b id="cu">0</b><small>Score</small></div><div><b>${fmt(G.t)}</b><small>Time</small></div><div><b>${G.hints}</b><small>Hints</small></div></div>
 ${up?`<div class="up">New stage unlocked: ${TN[tierOf(n+1)]} puzzles</div>`:''}
 <div class="learn">${G.pl.map(o=>`<div><b>${o.w}</b><span>${o.m}</span><em>"${o.e}"</em></div>`).join('')}</div>
 <div class="row"><button class="btn big" data-a="next">Next Level ${ic('next')}</button><button class="btn g" data-a="replay">Play Again</button><button class="btn g" data-a="levels">Levels</button></div></div>`;
 $('#done').hidden=false;sfx.win();fx(true);let v=0;const stp=Math.max(1,Math.ceil(lv/40)),iv=setInterval(()=>{v=Math.min(lv,v+stp);const e=$('#cu');if(e)e.textContent=v;if(v>=lv)clearInterval(iv)},25)}
function hint(){if(!G||G.done||G.paused)return;if(G.hints>=3)return toast('No hints left on this level');
 const l=G.pl.map((o,i)=>i).filter(i=>!G.found.has(i));if(!l.length)return;const i=l[rnd(l.length)],[r,c]=G.pl[i].cells[0],e=cell(r,c);
 G.hints++;G.sc=Math.max(0,G.sc-20);$('#gSc').textContent=G.sc;$('#hintN').textContent=3-G.hints;e.classList.add('hint');setTimeout(()=>e.classList.remove('hint'),2000);
 const ch=$('#w'+i);ch.classList.add('pl');setTimeout(()=>ch.classList.remove('pl'),1300);toast(`Look for ${G.pl[i].w}. It starts at the glowing letter.`)}
function pause(on){if(!G||G.done)return;G.paused=on;$('#pause').hidden=!on}
const B=$('#board');
B.onpointerdown=e=>{if(!G||G.paused||G.done)return;const p=cellAt(e);if(!p)return;B.setPointerCapture(e.pointerId);
 if(G.anchor){const a=G.anchor;G.s=a;G.e=p;G.drag=true;return check(a,p)}
 G.s=G.e=p;G.drag=true;drawSel()};
B.onpointermove=e=>{if(!G||!G.drag)return;const p=cellAt(e);if(p){G.e=p;drawSel()}};
B.onpointerup=e=>{if(!G||!G.drag)return;const p=cellAt(e)||G.e;G.e=p;
 if(p[0]==G.s[0]&&p[1]==G.s[1]){G.drag=false;G.anchor=G.s;drawSel();return}check(G.s,p)};
B.onpointercancel=()=>{if(G){G.drag=false;G.anchor=null;drawSel()}};

/* fireworks */
const cv=$('#fx'),x=cv.getContext('2d'),cv2=$('#fx2'),x2=cv2.getContext('2d');let P=[],CF=[],RK=[],fxOn=false,raf=0,t0=0,last=0;
function rsz(){const d=devicePixelRatio||1;for(const[c,q]of[[cv,x],[cv2,x2]]){c.width=innerWidth*d;c.height=innerHeight*d;q.setTransform(d,0,0,d,0,0)}}
function burst(px,py){const cl=[PAL[rnd(6)][0],PAL[rnd(6)][0],'#FFE8C2'],n=72,ring=Math.random()<.4;
 for(let i=0;i<n;i++){const a=i/n*6.283,s=ring?4.2:1.5+Math.random()*5;P.push({x:px,y:py,vx:Math.cos(a)*s,vy:Math.sin(a)*s,l:1,c:cl[i%3],d:.011+Math.random()*.007})}tone(90+rnd(80),.3,'sawtooth',.035)}
function fx(on){fxOn=on;cancelAnimationFrame(raf);P=[];CF=[];RK=[];rsz();x.clearRect(0,0,innerWidth,innerHeight);x2.clearRect(0,0,innerWidth,innerHeight);if(!on)return;t0=last=performance.now();
 for(let i=0;i<130;i++)CF.push({x:Math.random()*innerWidth,y:-20-Math.random()*600,vy:2+Math.random()*3,vx:Math.random()*2-1,r:Math.random()*6,c:PAL[rnd(6)][0],w:6+Math.random()*7});loop()}
function loop(now=performance.now()){const e=now-t0;x.globalCompositeOperation='destination-out';x.fillStyle='rgba(0,0,0,.2)';x.fillRect(0,0,innerWidth,innerHeight);x.globalCompositeOperation='source-over';
 if(fxOn&&e<6000&&now-last>420){last=now;RK.push({x:innerWidth*(.12+Math.random()*.76),y:innerHeight,vy:-(9+Math.random()*4),ty:innerHeight*(.12+Math.random()*.38)})}
 for(const r of RK){r.y+=r.vy;x.fillStyle='#FFE8C2';x.beginPath();x.arc(r.x,r.y,2.6,0,6.283);x.fill();if(r.y<=r.ty){r.dead=1;burst(r.x,r.y)}}RK=RK.filter(r=>!r.dead);
 for(const p of P){p.x+=p.vx;p.y+=p.vy;p.vy+=.055;p.vx*=.985;p.vy*=.99;p.l-=p.d;x.globalAlpha=Math.max(p.l,0);x.fillStyle=p.c;x.beginPath();x.arc(p.x,p.y,2.6*(.5+p.l/2),0,6.283);x.fill()}P=P.filter(p=>p.l>0);x.globalAlpha=1;
 x2.clearRect(0,0,innerWidth,innerHeight);for(const c of CF){c.y+=c.vy;c.x+=c.vx+Math.sin(c.y/30);c.r+=.1;x2.fillStyle=c.c;x2.save();x2.translate(c.x,c.y);x2.rotate(c.r);x2.fillRect(-c.w/2,-3,c.w,6);x2.restore()}CF=CF.filter(c=>c.y<innerHeight+20);
 if(fxOn&&(e<6000||P.length||CF.length||RK.length))raf=requestAnimationFrame(loop);else{x.clearRect(0,0,innerWidth,innerHeight);x2.clearRect(0,0,innerWidth,innerHeight)}}

/* actions */
function install(){if(dp){dp.prompt();dp.userChoice.finally(()=>{dp=null})}else toast(/iphone|ipad|ipod/i.test(navigator.userAgent)?'Tap the Share button, then Add to Home Screen.':'Open your browser menu and choose Install app or Add to Home Screen.')}
const A={home:()=>show('home'),levels:()=>show('levels'),progress:()=>show('progress'),settings:()=>show('settings'),play:()=>start(S.unlocked),
 lv:b=>start(+b.dataset.n),next:()=>start(G.n+1),replay:()=>start(G.n),restart:()=>start(G.n),pause:()=>pause(true),resume:()=>pause(false),hint,
 sound:()=>{S.sound=!S.sound;save();snd();sfx.tap()},theme:()=>{S.theme=S.theme=='dark'?'light':'dark';save();applyTheme()},install,
 reset:()=>{if(confirm('Erase all WordQuest progress on this device?')){S={unlocked:1,stars:{},score:0,learned:{},theme:S.theme,sound:S.sound};save();G=null;show('home')}},
 more:()=>{lvN+=20;buildLv()},cur:()=>{lvN=Math.max(lvN,Math.ceil((S.unlocked+5)/20)*20);buildLv(true)}};
document.addEventListener('click',e=>{const b=e.target.closest('[data-a]');if(!b)return;sfx.tap();A[b.dataset.a]&&A[b.dataset.a](b)});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&G&&!G.done&&$('#game').classList.contains('on'))pause(true)});
addEventListener('resize',()=>{if(fxOn){const d=devicePixelRatio||1;cv.width=innerWidth*d;cv.height=innerHeight*d;x.setTransform(d,0,0,d,0,0)}});
addEventListener('beforeinstallprompt',e=>{e.preventDefault();dp=e});
function inst(){const st=matchMedia('(display-mode:standalone)').matches||navigator.standalone;$$('.inst').forEach(b=>b.hidden=!!st)}
addEventListener('appinstalled',()=>{dp=null;inst();toast('WordQuest installed. Have fun!')});

/* init */
$('#logo').innerHTML=['WORD','QUEST'].map((w,r)=>'<div>'+[...w].map((ch,i)=>{const[bg,fg]=PAL[(i+r*2)%5];return`<span class="lt" style="background:${bg};color:${fg};animation-delay:${i*.15}s">${ch}</span>`}).join('')+'</div>').join('');
$('#ft').innerHTML=Array.from({length:12},(_,i)=>`<span style="left:${i%2?2+(i*5)%7:86+(i*3)%7}%;top:${(i*53+6)%90}%;background:${PAL[i%5][0]};animation-delay:${i*.4}s">${'ABCDEFGHIJKL'[i]}</span>`).join('');
$('#demo').innerHTML=[...'LEARNWORDSQUESTSTARSPLAYS'].map((c,i)=>`<span style="--t:${PAL[i%5][0]}">${c}</span>`).join('')+[[1,0],[2,1.4],[3,2.8]].map(([r,d],i)=>`<b style="--r:${r};animation-delay:${d}s;background:${PAL[i][0]}"></b>`).join('');
applyTheme();snd();inst();buildHome();
if('serviceWorker'in navigator&&/^https?:/.test(location.protocol))addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
})();
