/* System Design book: shared lesson engine.
   Isometric step-through scenes, the interview-question reveal list, copy buttons and back-to-top.
   Every page in lessons/ loads this file, then calls ISO.start({scenes, qa}). */
window.ISO=(()=>{
try{if(window.parent!==window&&window.parent.document.getElementById('carbonShell'))document.documentElement.classList.add('embedded')}catch(e){}
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const U=17,C=0.866,S=0.5,EX=[C*U,S*U],EY=[-C*U,S*U];
const PAL={blue:['#3e5a86','#2d4466','#223552','#9cc3f5','#1d2940'],red:['#8a3a3a','#6a2b2b','#542121','#ff9b9b','#3b1d1d'],gray:['#3a3834','#2e2c29','#252321','#9a958c','#2a2826'],purple:['#5e4f8c','#483c6e','#3a3058','#c9b8ff','#2a2342'],teal:['#2f7566','#235a4e','#1b473e','#8fe3cc','#173530'],amber:['#8a6a24','#6b511b','#553f15','#ffd27a','#3a2d10']};
const DOTC={blue:'#7ab4ff',amber:'#ffc95c',teal:'#5fe0c0',red:'#ff6b6b',ink:'#ffffff'};
const MEAN={blue:'App server, and a request on its way',purple:'Routes traffic (load balancer, pooler)',teal:'Database',amber:'Redis (cache or session store)',red:'Overloaded, error or down',gray:'Booting, draining or off (dashed)',ink:'One person’s own request'};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const r1=n=>Math.round(n*10)/10;
const pp=p=>r1(p[0])+','+r1(p[1]);
const poly=(ps,fill,ex)=>'<polygon points="'+ps.map(pp).join(' ')+'" fill="'+fill+'" '+(ex||'')+'/>';
const line=(a,b,c,w,op)=>'<line x1="'+r1(a[0])+'" y1="'+r1(a[1])+'" x2="'+r1(b[0])+'" y2="'+r1(b[1])+'" stroke="'+c+'" stroke-width="'+w+'"'+(op?' opacity="'+op+'"':'')+' stroke-linecap="round"/>';
const xMark=(p,r)=>{r=r||9;const k=r*.45;return '<circle cx="'+r1(p[0])+'" cy="'+r1(p[1])+'" r="'+r+'" fill="#e5484d" stroke="#fff" stroke-width="1.5"/>'+line([p[0]-k,p[1]-k],[p[0]+k,p[1]+k],'#fff',2.2)+line([p[0]+k,p[1]-k],[p[0]-k,p[1]+k],'#fff',2.2)};
const GHOST='stroke="#8f8a80" stroke-width="1.2" stroke-dasharray="3 3" fill-opacity=".35"';
const EDGE=t=>'stroke="'+PAL[t][3]+'" stroke-width="1.1" stroke-opacity=".9" stroke-linejoin="round"';
const MONO='JetBrains Mono, ui-monospace, Menlo, monospace';
function geo(o,st){return {w:st.w??o.w??1.2,d:st.d??o.d??o.w??1.2,h:st.h??o.h??1.4,r:st.r??o.r??1}}
function toneOf(o,st){return st.dead?'red':st.g?'gray':(st.t||o.t||'blue')}
function anchor(o,st){const g=geo(o,st);if(o.type==='crowd')return [o.x,o.y-10];if(o.type==='tag')return [o.x,o.y];return [o.x,o.y-g.h*U*.5]}
function topY(o,st){const g=geo(o,st);if(o.type==='cyl')return o.y-g.h*U-g.r*.7071*U;if(o.type==='crowd')return o.y-o.size*S*U-20;return o.y-g.h*U-((g.w+g.d)/2)*S*U}
function halfW(o,st){const g=geo(o,st);if(o.type==='cyl')return g.r*1.2247*U;if(o.type==='crowd')return o.size*C*U;return ((g.w+g.d)/2)*C*U}
function boxSVG(o,st){
 const g=geo(o,st),w=g.w,d=g.d,h=g.h,col=PAL[toneOf(o,st)],gh=st.g&&!st.dead;
 const org=[o.x-(w/2)*EX[0]-(d/2)*EY[0],o.y-(w/2)*EX[1]-(d/2)*EY[1]];
 const P=(a,b,c)=>[org[0]+a*EX[0]+b*EY[0],org[1]+a*EX[1]+b*EY[1]-c*U];
 const ex=gh?GHOST:EDGE(toneOf(o,st));
 let s=poly([P(0,d,0),P(w,d,0),P(w,d,h),P(0,d,h)],col[1],ex)+poly([P(w,0,0),P(w,d,0),P(w,d,h),P(w,0,h)],col[2],ex)+poly([P(0,0,h),P(w,0,h),P(w,d,h),P(0,d,h)],col[0],ex);
 if(!gh&&o.type==='server'){const n=Math.max(2,Math.round(h/.42));for(let i=1;i<n;i++){const z=h*i/n,l=P(.84*w,d,z+.12);s+=line(P(.14*w,d,z),P(.64*w,d,z),col[3],1.2,.55)+'<circle cx="'+r1(l[0])+'" cy="'+r1(l[1])+'" r="1.5" fill="'+col[3]+'"/>'}}
 if(!gh&&o.type==='lb'){for(const k of [.3,.5,.7])s+=line(P(.22*w,k*d,h),P(.78*w,k*d,h),col[3],1.3,.7)}
 if(st.dead)s+=xMark(P(w/2,d/2,h),o.w<1?7:9);
 return s}
function cylSVG(o,st){
 const g=geo(o,st),col=PAL[toneOf(o,st)],rx=g.r*1.2247*U,ry=g.r*.7071*U,cx=o.x,by=o.y,ty=o.y-g.h*U,gh=st.g&&!st.dead,ex=gh?GHOST:EDGE(toneOf(o,st));
 let s='<path d="M'+r1(cx-rx)+','+r1(ty)+' L'+r1(cx-rx)+','+r1(by)+' A'+r1(rx)+','+r1(ry)+' 0 0 0 '+r1(cx+rx)+','+r1(by)+' L'+r1(cx+rx)+','+r1(ty)+' Z" fill="'+col[1]+'" '+ex+'/>';
 if(!gh){s+='<path d="M'+r1(cx)+','+r1(ty+ry)+' L'+r1(cx)+','+r1(by+ry)+' A'+r1(rx)+','+r1(ry)+' 0 0 0 '+r1(cx+rx)+','+r1(by)+' L'+r1(cx+rx)+','+r1(ty)+' A'+r1(rx)+','+r1(ry)+' 0 0 1 '+r1(cx)+','+r1(ty+ry)+' Z" fill="'+col[2]+'" opacity=".6"/>';
  for(const k of [.36,.68]){const y=by-g.h*U*k;s+='<path d="M'+r1(cx-rx)+','+r1(y)+' A'+r1(rx)+','+r1(ry)+' 0 0 0 '+r1(cx+rx)+','+r1(y)+'" fill="none" stroke="'+col[3]+'" stroke-width="1.1" opacity=".55"/>'}}
 s+='<ellipse cx="'+r1(cx)+'" cy="'+r1(ty)+'" rx="'+r1(rx)+'" ry="'+r1(ry)+'" fill="'+col[0]+'" '+ex+'/>';
 if(st.dead)s+=xMark([cx,ty]);
 return s}
function crowdSVG(o,st){
 const sz=o.size,n=st.n??o.n??5,col=PAL.gray,h=.2;
 const org=[o.x-(sz/2)*EX[0]-(sz/2)*EY[0],o.y-(sz/2)*EX[1]-(sz/2)*EY[1]];
 const P=(a,b,c)=>[org[0]+a*EX[0]+b*EY[0],org[1]+a*EX[1]+b*EY[1]-c*U];
 const E=EDGE('gray');let s=poly([P(0,sz,0),P(sz,sz,0),P(sz,sz,h),P(0,sz,h)],col[1],E)+poly([P(sz,0,0),P(sz,sz,0),P(sz,sz,h),P(sz,0,h)],col[2],E)+poly([P(0,0,h),P(sz,0,h),P(sz,sz,h),P(0,sz,h)],col[0],E);
 const k=Math.ceil(Math.sqrt(n)),rows=Math.ceil(n/k),pts=[];
 for(let i=0;i<n;i++)pts.push([((i%k)+.5)/k*sz,(Math.floor(i/k)+.5)/rows*sz,i]);
 pts.sort((a,b)=>(a[0]+a[1])-(b[0]+b[1]));
 const sp=o.who?Math.floor(n/2):-1;
 for(const [a,b,i] of pts){const p=P(a,b,h),c=i===sp?'#ffffff':'#b9b2a5';s+='<rect x="'+r1(p[0]-3.3)+'" y="'+r1(p[1]-10.5)+'" width="6.6" height="10.5" rx="3.3" fill="'+c+'"/><circle cx="'+r1(p[0])+'" cy="'+r1(p[1]-14)+'" r="3.3" fill="'+c+'"/>'}
 return s}
function queueSVG(o,st){
 const n=st.n??0,items=[];for(let i=0;i<n;i++)items.push([o.x+i*o.dx,o.y+i*o.dy]);
 items.sort((a,b)=>a[1]-b[1]);
 return items.map(([x,y])=>boxSVG({x,y,w:.42,d:.42,h:.42,type:'cube'},{t:st.t||'blue'})).join('')}
function pillSVG(x,y,text,tone,align,VW){
 const w=Math.round(text.length*6.9+18),h=20,col=PAL[tone]||PAL.gray;let x0=align==='l'?x:x-w/2;x0=Math.max(3,Math.min(VW-w-3,x0));
 return '<g><rect x="'+r1(x0)+'" y="'+r1(y)+'" width="'+w+'" height="'+h+'" rx="10" fill="'+col[4]+'" stroke="'+col[3]+'" stroke-width="1.1"/><text x="'+r1(x0+w/2)+'" y="'+r1(y+14)+'" text-anchor="middle" font-size="11.5" font-weight="700" fill="#f1ede6" font-family="'+MONO+'">'+esc(text)+'</text></g>'}
function gridSVG(id,W,H){
 const t=Math.tan(Math.PI/6),g=U;let d='';
 for(let c=Math.floor(-W*t/g)-1;c<=Math.ceil(H/g)+1;c++){const y=c*g;d+='M0,'+r1(y)+'L'+W+','+r1(y+W*t)}
 for(let c=-1;c<=Math.ceil((H+W*t)/g)+1;c++){const y=c*g;d+='M0,'+r1(y)+'L'+W+','+r1(y-W*t)}
 return '<defs><radialGradient id="gf-'+id+'" cx="50%" cy="50%" r="70%"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient><mask id="gm-'+id+'"><rect width="'+W+'" height="'+H+'" fill="url(#gf-'+id+')"/></mask></defs><path d="'+d+'" stroke="#ffffff" stroke-opacity=".11" stroke-width=".8" fill="none" mask="url(#gm-'+id+')"/>'}
function pillFor(o,st,VW){
 let t;if(st.p&&st.p[0]==='=')t=st.p.slice(1);else t=[st.nm??o.name,st.p].filter(Boolean).join(' · ');
 if(!t)return '';
 const tone=st.pt||(st.dead?'red':st.g?'gray':(o.type==='crowd'||o.type==='tag')?'gray':toneOf(o,st));
 if(o.type==='tag')return pillSVG(o.x,o.y-10,t,tone,'c',VW);
 if(o.pa==='r')return pillSVG(o.x+halfW(o,st)+5,o.y-geo(o,st).h*U*.5-12,t,tone,'l',VW);
 if(o.pb){const g=geo(o,st),dy=o.type==='cyl'?g.r*.7071*U:((g.w+g.d)/2)*S*U;return pillSVG(o.x,o.y+dy+5,t,tone,'c',VW)}
 return pillSVG(o.x,topY(o,st)-23,t,tone,'c',VW)}


/* ---------- helpers for page data ---------- */
const col=(pre,x,ys,w,h,ex)=>ys.map((y,i)=>Object.assign({id:pre+(i+1),type:'server',x,y,w,d:w,h,name:'S'+(i+1),pa:'r'},ex||{}));
function grid(pre,cx,cy,ni,nj,sp,size){const out=[];let k=0;for(let i=0;i<ni;i++)for(let j=0;j<nj;j++)out.push(Object.assign({id:pre+(++k),type:'server',x:r1(cx+(i-(ni-1)/2)*sp*EX[0]+(j-(nj-1)/2)*sp*EY[0]),y:r1(cy+(i-(ni-1)/2)*sp*EX[1]+(j-(nj-1)/2)*sp*EY[1]),w:.85,d:.85,h:1.05,name:''},size||{}));return out}
function fleetState(list,on,ghost,tone,extra){const o={};list.forEach((f,i)=>{o[f.id]=i<on?{t:tone||'blue',g:0,dead:0}:i<on+ghost?{g:1,dead:0}:false});return Object.assign(o,extra||{})}
const SCENES={};

/* ---------- engine ---------- */
function stateAt(sc,i){
 const o={};sc.objects.forEach(b=>o[b.id]={on:!b.off});let f=[];
 for(let k=0;k<=i;k++){const st=sc.steps[k];if(st.o)for(const id in st.o){if(!o[id])continue;const v=st.o[id];if(v===false)o[id].on=false;else Object.assign(o[id],v,{on:true})}if(st.f)f=st.f}
 return {o,f}}
function resolve(sc,fl,k){
 const o=sc.cur.o,pts=[];let dead=false;
 for(let j=0;j<fl.p.length;j++){
  const tok=fl.p[j];let id=tok;
  if(Array.isArray(tok)||tok[0]==='@'){
   const list=Array.isArray(tok)?tok:sc.objects.filter(b=>b.id[0]===tok[1]&&/\d/.test(b.id.slice(1))).map(b=>b.id);
   const ok=list.filter(x=>o[x]&&o[x].on&&!(o[x].g&&!o[x].dead));
   if(!ok.length)return null;
   const rr=sc.rr[k];rr[j]=((rr[j]??-1)+1)%ok.length;id=ok[rr[j]]}
  const b=sc.byId[id],st=o[id];if(!b||!st||!st.on)return null;
  pts.push(anchor(b,st));if(st.dead){dead=true;break}}
 return {pts,dead}}
function staticFlows(sc){
 let s='';(sc.cur.f||[]).forEach((fl,k)=>{for(let n=0;n<5;n++){const R=resolve(sc,fl,k);if(R&&R.pts.length>1)s+='<polyline points="'+R.pts.map(pp).join(' ')+'" fill="none" stroke="'+DOTC[fl.t||'blue']+'" stroke-width="2" stroke-dasharray="4 4" opacity=".6"/>'}});return s}
function renderScene(sc){
 sc.cur=stateAt(sc,sc.i);const o=sc.cur.o;
 const objs=sc.objects.filter(b=>o[b.id].on).sort((a,b)=>a.y-b.y);
 let g='',pl='';
 for(const b of objs){const st=o[b.id];g+=b.type==='cyl'?cylSVG(b,st):b.type==='crowd'?crowdSVG(b,st):b.type==='queue'?queueSVG(b,st):b.type==='tag'?'':boxSVG(b,st);if(b.type!=='queue')pl+=pillFor(b,st,sc.vb[0])}
 sc.gO.innerHTML=g;sc.gP.innerHTML=pl;sc.dots=[];sc.xs=[];sc.acc=sc.cur.f.map(()=>.7);sc.rr=sc.cur.f.map(()=>({}));
 sc.gD.innerHTML=RM?staticFlows(sc):'';
 if(!sc.bare)renderText(sc)}
function renderText(sc){
 const st=sc.steps[sc.i],e=sc.el;
 e.metrics.innerHTML=st.m.map(([k,v])=>{const bad=v[0]==='!';return '<div><small>'+esc(k)+'</small><b'+(bad?' class="bad"':'')+'>'+esc(bad?v.slice(1):v)+'</b></div>'}).join('');
 e.no.textContent='Step '+(sc.i+1)+' of '+sc.steps.length;e.title.textContent=st.title;e.what.innerHTML=st.what;
 e.extra.innerHTML=st.curve!=null?curveSVG(st.curve):'';
 e.say.innerHTML='<b>Say it in the interview</b>'+st.say;
 e.ask.innerHTML='<details><summary><small>They’ll ask next</small><span class="q">'+st.ask[0]+'</span><span class="reveal"><span class="s">Show answer</span><span class="h">Hide answer</span></span></summary><div class="ans">'+st.ask[1]+'</div></details>';
 e.dots.forEach((d,i)=>{d.classList.toggle('past',i<sc.i);if(i===sc.i)d.setAttribute('aria-current','step');else d.removeAttribute('aria-current')});
 e.prev.disabled=sc.i===0;e.next.disabled=sc.i===sc.steps.length-1}
function curveSVG(b){
 const W=300,H=136,x0=40,y0=10,x1=W-12,y1=H-30,max=20,X=v=>x0+(x1-x0)*v,Y=w=>y1-(y1-y0)*Math.min(w,max)/max;
 let d='';for(let v=0;v<=.9525;v+=.0125)d+=(d?'L':'M')+r1(X(v))+','+r1(Y(v/(1-v)));
 const bb=Math.min(b,.95),hot=b>.7,wv=b>=.99?'queue never empties':'wait ×'+(b/(1-b)).toFixed(b<.5?2:1),mx=X(bb),my=Y(bb/(1-bb));
 let s='<figure class="curve"><svg viewBox="0 0 '+W+' '+H+'" role="img" aria-label="Waiting time rises sharply as the server gets busier"><rect x="'+r1(X(.7))+'" y="'+y0+'" width="'+r1(X(1)-X(.7))+'" height="'+(y1-y0)+'" fill="#ff6b6b" opacity=".12"/><line x1="'+x0+'" y1="'+y1+'" x2="'+x1+'" y2="'+y1+'" stroke="#8f8a80" stroke-width="1"/><line x1="'+x0+'" y1="'+y0+'" x2="'+x0+'" y2="'+y1+'" stroke="#8f8a80" stroke-width="1"/><path d="'+d+'" fill="none" stroke="#7ab4ff" stroke-width="2.5"/>';
 for(const t of [0,.5,.7,1])s+='<text x="'+r1(X(t))+'" y="'+(y1+16)+'" text-anchor="middle" font-size="11.5" fill="#a7a196" font-family="'+MONO+'">'+Math.round(t*100)+'%</text>';
 s+='<text x="'+(x0-6)+'" y="'+(y0+10)+'" text-anchor="end" font-size="11.5" fill="#a7a196" font-family="'+MONO+'">×20</text><text x="'+(x0-6)+'" y="'+y1+'" text-anchor="end" font-size="11.5" fill="#a7a196" font-family="'+MONO+'">0</text><text x="'+r1(X(.84))+'" y="'+(y0+14)+'" text-anchor="middle" font-size="11.5" fill="#ff8f86" font-family="'+MONO+'">danger</text>';
 s+='<circle cx="'+r1(mx)+'" cy="'+r1(my)+'" r="6" fill="'+(hot?'#ff6b6b':'#7ab4ff')+'" stroke="#232220" stroke-width="2"/><text x="'+r1(Math.min(mx+10,W-110))+'" y="'+r1(Math.max(my-10,y0+28))+'" font-size="12" font-weight="700" fill="#ece7de" font-family="'+MONO+'">'+wv+'</text></svg><figcaption>How long a request waits, compared with its work time, as the server gets busier.</figcaption></figure>';
 return s}
function legendHTML(sc){
 const used=new Set();
 sc.objects.forEach(b=>{if(b.type==='server'||b.type==='box'||b.type==='lb'||b.type==='cyl')used.add(b.t||'blue');if(b.type==='queue')used.add('blue')});
 sc.steps.forEach(st=>{for(const id in st.o||{}){const v=st.o[id];if(!v)continue;if(v.t)used.add(v.t);if(v.dead)used.add('red');if(v.g)used.add('gray');if(v.pt==='red')used.add('red')}(st.f||[]).forEach(f=>{used.add(f.t||'blue');if(f.x)used.add('red')})});
 return ['blue','purple','teal','amber','red','gray','ink'].filter(t=>used.has(t)).map(t=>'<span><i style="background:'+(t==='ink'?'#fff':t==='gray'?'transparent;border:1.5px dashed #9a958c':PAL[t][3])+'"></i>'+MEAN[t]+'</span>').join('')}
function build(host,sc){
 sc.byId={};sc.objects.forEach(b=>sc.byId[b.id]=b);sc.i=0;
 const svg='<svg viewBox="0 0 '+sc.vb[0]+' '+sc.vb[1]+'" role="img" aria-label="'+esc(sc.label)+'">'+gridSVG(sc.key,sc.vb[0],sc.vb[1])+'<g></g><g></g><g></g></svg>';
 if(sc.bare){host.innerHTML=svg}else{
  host.tabIndex=0;
  host.innerHTML='<div class="sc-grid"><div><div class="metrics"></div><div class="stagebox">'+svg+'</div><div class="legend">'+legendHTML(sc)+'</div><div class="ctrl"><button class="btn prev" type="button">Back</button><div class="dots">'+sc.steps.map((s,i)=>'<button type="button" aria-label="Step '+(i+1)+': '+esc(s.title)+'">'+(i+1)+'</button>').join('')+'</div><button class="btn pri next" type="button">Next</button></div></div><div class="sc-text" aria-live="polite"><p class="stepno"></p><h3></h3><div class="what"></div><div class="extra"></div><div class="say"></div><div class="ask"></div></div></div><details class="alltext"><summary>Read all '+sc.steps.length+' steps as text</summary><ol>'+sc.steps.map(s=>'<li><b>'+esc(s.title)+'</b>'+s.what+' <i>Say: “'+s.say+'”</i></li>').join('')+'</ol></details>';
  const q=s=>host.querySelector(s);
  sc.el={metrics:q('.metrics'),no:q('.stepno'),title:q('.sc-text h3'),what:q('.what'),extra:q('.extra'),say:q('.say'),ask:q('.ask'),prev:q('.prev'),next:q('.next'),dots:[...host.querySelectorAll('.dots button')]};
  const go=i=>{sc.i=Math.max(0,Math.min(sc.steps.length-1,i));renderScene(sc)};
  sc.el.prev.addEventListener('click',()=>{stop(sc);go(sc.i-1)});
  sc.el.next.addEventListener('click',()=>{stop(sc);go(sc.i+1)});
  sc.el.dots.forEach((d,i)=>d.addEventListener('click',()=>{stop(sc);go(i)}));
  host.addEventListener('keydown',e=>{if(e.target!==host)return;if(e.key==='ArrowRight'){stop(sc);go(sc.i+1)}if(e.key==='ArrowLeft'){stop(sc);go(sc.i-1)}});
 }
 const gs=host.querySelectorAll('svg > g');sc.gO=gs[0];sc.gD=gs[1];sc.gP=gs[2];
 host._sc=sc;renderScene(sc);io.observe(host)}
function stop(sc){}
function tick(sc,dt){
 const f=sc.cur.f;
 f.forEach((fl,k)=>{sc.acc[k]+=dt*(fl.r||4);while(sc.acc[k]>=1){sc.acc[k]-=1;const R=resolve(sc,fl,k);if(R&&R.pts.length>1){const L=[0];for(let i=1;i<R.pts.length;i++)L.push(L[i-1]+Math.hypot(R.pts[i][0]-R.pts[i-1][0],R.pts[i][1]-R.pts[i-1][1]));sc.dots.push({pts:R.pts,L,d:0,t:fl.t||'blue',fail:R.dead||Math.random()<(fl.x||0)});if(sc.dots.length>160)sc.dots.shift()}}});
 let s='';
 for(const dot of sc.dots){dot.d+=dt*120;const tot=dot.L[dot.L.length-1];if(dot.d>=tot){dot.done=1;if(dot.fail){const e=dot.pts[dot.pts.length-1];sc.xs.push({x:e[0],y:e[1],t:0})}continue}
  let i=1;while(dot.L[i]<dot.d)i++;const a=dot.pts[i-1],b=dot.pts[i],u=(dot.d-dot.L[i-1])/((dot.L[i]-dot.L[i-1])||1);
  const x=a[0]+(b[0]-a[0])*u,y=a[1]+(b[1]-a[1])*u,ink=dot.t==='ink';
  s+='<circle cx="'+r1(x)+'" cy="'+r1(y)+'" r="'+(ink?4.8:3.6)+'" fill="'+DOTC[dot.t]+'"'+(ink?' stroke="#1f1e1c" stroke-width="1.8"':'')+'/>'}
 sc.dots=sc.dots.filter(d=>!d.done);
 for(const x of sc.xs){x.t+=dt;const op=Math.max(0,1-x.t/1),yy=x.y+x.t*16;s+='<g opacity="'+r1(op)+'">'+line([x.x-4,yy-4],[x.x+4,yy+4],'#ff6b6b',2.6)+line([x.x+4,yy-4],[x.x-4,yy+4],'#ff6b6b',2.6)+'</g>'}
 sc.xs=sc.xs.filter(x=>x.t<1);
 sc.gD.innerHTML=s}
const live=new Set();let running=false,last=0;
const io=new IntersectionObserver(es=>{for(const e of es){if(e.isIntersecting)live.add(e.target._sc);else live.delete(e.target._sc)}kick()},{rootMargin:'80px'});
function frame(t){if(!live.size){running=false;return}const dt=Math.min(.05,Math.max(0,(t-last)/1000));last=t;live.forEach(sc=>tick(sc,dt));requestAnimationFrame(frame)}
function kick(){if(RM||running||!live.size)return;running=true;last=performance.now();requestAnimationFrame(frame)}


/* ---------- mounting ---------- */
function mountScenes(){
 document.querySelectorAll('[data-scene]').forEach(h=>{const sc=SCENES[h.dataset.scene];if(sc&&!h._sc){sc.key=h.dataset.scene;build(h,sc)}});
 const n=document.getElementById('nSteps');if(n)n.textContent=Object.values(SCENES).filter(x=>!x.bare).reduce((k,x)=>k+x.steps.length,0)+' animated steps'}
function mountQA(QA){
 const qaEl=document.getElementById('qa');if(!qaEl||!QA||!QA.length)return;
 const groups=[...new Set(QA.map(x=>x.g))];let n=0;
 qaEl.innerHTML=groups.map(g=>'<div class="qgroup"><h3>'+esc(g)+'</h3>'+QA.filter(x=>x.g===g).map(x=>{n++;return '<details class="qd"><summary><span class="qn">'+String(n).padStart(2,'0')+'</span><span class="qt">'+esc(x.q)+'</span><span class="reveal"><span class="s">Show answer</span><span class="h">Hide answer</span></span></summary><div class="ans">'+esc(x.a)+'</div></details>'}).join('')+'</div>').join('');
 const nq=document.getElementById('nQs');if(nq)nq.textContent=QA.length+' interview questions';
 const oa=document.getElementById('openAll');
 if(oa)oa.addEventListener('click',()=>{const on=oa.getAttribute('aria-pressed')!=='true';oa.setAttribute('aria-pressed',String(on));oa.textContent=on?'Hide all answers':'Show all answers';qaEl.querySelectorAll('.qd').forEach(d=>d.open=on)})}
function labelStacks(){for(const c of document.querySelectorAll('.stack td,.stack tbody th')){let i=0,p=c;while(p=p.previousElementSibling)i+=p.colSpan;c.dataset.l=c.closest('table').rows[0].cells[i]?.textContent||''}}
function chrome(){
 document.querySelectorAll('.copy').forEach(b=>b.addEventListener('click',async()=>{const code=b.closest('details').querySelector('code').innerText;try{await navigator.clipboard.writeText(code);b.textContent='Copied'}catch(e){b.textContent='Copy blocked: select the text'}setTimeout(()=>b.textContent='Copy',1800)}));
 const tt=document.getElementById('toTop');if(tt){addEventListener('scroll',()=>tt.classList.toggle('on',scrollY>900),{passive:true});tt.addEventListener('click',()=>scrollTo({top:0,behavior:RM?'auto':'smooth'}))}}
function start(cfg){cfg=cfg||{};Object.assign(SCENES,cfg.scenes||{});labelStacks();mountScenes();mountQA(cfg.qa);chrome()}
return {U,C,S,EX,EY,r1,esc,col,grid,fleetState,start};
})();
