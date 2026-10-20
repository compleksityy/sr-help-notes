const S=[
{id:'launch',title:'Common Launch Files',md:`### Common Launch Files
- Cyberpunk 2077: \`bin\\x64\\Cyberpunk2077.exe\`
- Dying Light 2: \`ph\\work\\bin\\x64DyingLightGame_x64_rwdi.exe\`
- Spider-Man Remastered: \`SmartSteamLoader.exe\`
- Waterpark Simulator: \`unsteam_loader64.exe\`

### voices38 Games
- Black Myth Wukong: \`b1.exe\`
- 007 First Light: \`Retail\\007FirstLight.exe\`

### Rockstar Games
**Grand Theft Auto**
- Grand Theft Auto V (Legacy): \`launcher.bat\`
- Grand Theft Auto V (Enhanced): \`PlayGTAV.exe\`

**Red Dead Redemption**
- Red Dead Redemption 2: \`launcher.exe\`

### Fighting Games
- JUMP FORCE: \`JUMP_FORCE\\Binaries\\Win64\\JUMP_FORCE-Win64-Shipping.exe\`

### Assassin's Creed
- Assassin's Creed Mirage: \`ACMirage.exe\`
- Assassin's Creed Black Flag: \`ac4bfsp.exe\`

### Call of Duty
**Modern Warfare:**
- Modern Warfare 2 (2009): \`iw4sp.exe\`
- Modern Warfare Remastered (2017): \`launcher.exe\` or \`hmw-mod.exe\`
- Modern Warfare (2019): \`!start_cod.bat\`
- Modern Warfare 2: \`!start_sp22.bat\`
- Modern Warfare 3: \`!start_sp23.bat\`
- Modern Warfare 4: \`!start_sp26.bat\`

**Black Ops:**
- Black Ops: \`BlackOps.exe\`
- Black Ops II: \`t6sp.exe\`
- Black Ops III: \`boiii.exe\`
- Black Ops IV: \`start BO4 (English).exe\`
- Black Ops Cold War: \`BlackOpsColdWar.exe\`
- Black Ops VI: \`!start_sp24.bat\`

**Others:**
- World War II: \`s2_sp64_ship.exe\`
- Infinite Warfare: \`_launcher.bat\`
- Ghosts: \`iw6sp64_ship.exe\`

### Halloween: The Game Launch File
\`Ravage/Binaries/Win64/halloween.exe\``},
{id:'snippets',title:'Snippet List',md:`### Snippet List
- \`#1   lspecs\`
- \`#2   ff/fp/false\`
- \`#3   linux/steamos\`
- \`#4   safe/is\`
- \`#5   pc/specs\`
- \`#6   fdm/use/try\`
- \`#7   drm/denuvo/blocked\`
- \`#8   gdk/helper\`
- \`#9   dns/vpn\`
- \`#10  fail/crash\`
- \`#11  show/ss\`
- \`#12  disable/smart/sac\`
- \`#13  info/deetz\`
- \`#14  new/follow/tutorial\`
- \`#15  pad/ds4/support\`
- \`#16  vr/meta\`
- \`#17  mp/coop/online\`
- \`#18  ext/extract/howtoextract\`
- \`#19  end/quit/steam\`
- \`#20  pass/password/whatispassword\`
- \`#21  aio/allinone\`
- \`#22  repair/repairarchive\`
- \`#23  fastnet/flash/ihavenasainternet\`
- \`#24  exclusion/exc/exclude\``},
{id:'errors',title:'Error Codes and Their Fixes',md:`### Error Codes and Their Fixes
**Failed to load .dll 126**
Missing files due to antivirus interference. ;follow this tutorial and re extract

**Failed to load .dll 225 ~or~ 0cx0000906 ~or~ Self-protection failed Error code: 4**
;follow this tutorial and re extract and uninstall any third party antiviruses.

**Failed to load xgameruntime.dll**
Install Xbox App HERE and log in Install Gaming Services
hit Win+R
paste this \`ms-windows-store://pdp/?productid=9MWPM2CQNLHN\`
hit enter and install gaming services
Restart PC and run Xbox app before launching game as administrator

**0x8000FFFF**
;follow this tutorial and re extract

**0xc000007b -or- 0x8007007e**
;follow this guide carefully AND your game files may be corrupted if that didn’t work, please redownload the game and follow that guide.

**0xc0000142**
Remove the non english character from your folder and move it to the root of your drive (eg. C:/Games)

**0x80073CF3**
Install UWP DirectX runtimes Here.

**Steam not launched errors**
- Launch Steam ~if this doesn't work~
- force close Steam from Task Manager (alt+ctrl+delete)
- launch Steam as administrator
- launch your game as administrator as well

**RegOpenKewW**
Function result:2
Error code:0
;steam :pointdown:`},
{id:'redist',title:'Missing Redist .dll Errors',md:`### Missing Redist .dll Errors
~ Run the \`VisualCppRedist_AIO_x86_x64.exe\` file in Common Redist folder or download the installer HERE
- \`VCRuntime140.dll\`
- \`MSVCR100.dll\` / \`MSVCP100.dll\`
- \`MSVCR110.dll\` / \`MSVCP110.dll\`
- \`MSVCR120.dll\` / \`MSVCP120.dll\`
- \`MSVCR140.dll\` / \`MSVCP140.dll\`
- \`vccorlib140.dll\`
- \`CONCRT140.dll\`
- \`mfc110u.dll\`

**0xc000012f**
(this one might also signify corrupt libraries that need to be repaired, rather than installed)

~Run the \`dxwebsetup.exe\` file in Common Redist folder
- \`XInput1_1.dll\` (or 1_2, 1_3, 1_4)
- \`XInput9_1_0.dll\`
- \`d3dx9_xx.dll\`
- \`XAPOFX1_5.dll\`

**OpenAL32.dll**
~Run the \`oalinst.exe\` file in Common Redist folder or download the installer HERE`},
{id:'sac',title:'Smart App Control Error Codes',md:`### Smart App Control Error Codes
Smart App Control blocking game launch. Search Smart App Control from Start Menu and disable the feature
- 1450
- 4556
- 4557
- 0xc0000020
- 0xc0e90002
- 0xc0e90007
- 0xc0e90008`},
{id:'games',title:'Game Specific',md:`### HITMAN WOA
1. Install all of the programs in _CommonRedist. (if you havent before)
2. Run \`[Peacock-v8.8.1]\\PeacockPatcher.exe\`.
3. Run \`[Peacock-v8.8.1]\\Start Server.cmd\`.
4. Run \`steamclient_loader_x64.exe\`.

### Forza Horizon 6
https://discord.com/channels/1276133271079620720/1276133271519891463/1508598665533587548
1. Multiplayer Support
2. Controller Support
3. Network Diagnostics
4. Steamworks Fix Activation
5. Save Data Error / E:0-e9 / xgameruntime.dll
6. Invalid Gaming Services Detected
7. FHE01 Error

### Game Updating
Download and extract the update patch, open the folder and copy the contents then paste the contents into your game folder`},
{id:'fixes',title:'24H2 Fixes List',md:`### 24H2 Fixes List
- Assassin's Creed Rogue
- Assassin's Creed Valhalla
- Dead Island 2
- DEATHLOOP
- Dragon Ball FighterZ
- Evil Genius 2: World Domination
- Far Cry® 5
- Far Cry® 6 * Look at Intel CPU Issues
- Far Cry® New Dawn * Look at Intel CPU Issues
- Judgment
- Jurassic World Evolution
- Just Cause 4
- LEFT ALIVE™
- Life is Strange 2
- Madden NFL 20
- Maneater
- Marvel's Guardians of the Galaxy
- Planet Zoo
- Sea of Solitude
- South Park™ The Fractured But Whole™ * Look at Intel CPU Issues
- STAR WARS™ Battlefront™ II
- Tom Clancy's Ghost Recon Wildlands
- Total War: Three Kingdoms
- Total War: WARHAMMER II * Look at Intel CPU Issues
- Unravel Two
- Valkyria Chronicles 4
- Watch Dogs: Legion
- Yakuza: Like a Dragon
- Zombie Army 4: Dead War
- ZONE OF THE ENDERS THE 2nd RUNNER : M∀RS

https://discordapp.com/channels/1276133271079620720/1276133271519891463/1469435259069268193`},
{id:'links',title:'Links',md:`### Save Locations
https://discordapp.com/channels/1276133271079620720/1276133271519891463/1469438596741206027

### Wallpaper Engine Downloader
https://discord.com/channels/1276133271079620720/1276133271519891463/1540783579100086302`}
];
const K='sr-notes',$=i=>document.getElementById(i);
const load=()=>{try{return JSON.parse(localStorage.getItem(K))||[]}catch(e){return[]}};
let U=load(),editId=null;
const store=()=>{try{localStorage.setItem(K,JSON.stringify(U))}catch(e){}};
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
function inl(s){s=esc(s);const c=[];
s=s.replace(/`([^`]+)`/g,(_,x)=>'\0'+(c.push(x)-1)+'\0');
s=s.replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>');
s=s.replace(/(^|\s)(https?:\/\/[^\s<]+)/g,'$1<a href="$2" target="_blank" rel="noopener">$2</a>');
s=s.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/\*(\S(?:.*?\S)?)\*/g,'<em>$1</em>');
return s.replace(/\0(\d+)\0/g,(_,i)=>'<code>'+c[i]+'</code>')}
function md(src){let h='',l=null,p=[];
const fp=()=>{if(p.length){h+='<p>'+p.map(inl).join('<br>')+'</p>';p=[]}};
const fl=()=>{if(l){h+='</'+l+'>';l=null}};
for(const r of src.replace(/\r/g,'').split('\n')){let m;
if(m=r.match(/^(#{1,3})\s+(.*)/)){fp();fl();h+=`<h${m[1].length}>${inl(m[2])}</h${m[1].length}>`}
else if(m=r.match(/^\s*([-*]|\d+\.)\s+(.*)/)){fp();const t=/\d/.test(m[1])?'ol':'ul';if(l!==t){fl();h+='<'+t+'>';l=t}h+='<li>'+inl(m[2])+'</li>'}
else if(!r.trim()){fp();fl()}
else{fl();p.push(r)}}
fp();fl();return h}
function render(){const q=$('q').value.toLowerCase().trim();
const all=[...S,...U.map(n=>({...n,custom:1}))].filter(s=>!q||(s.title+' '+s.md).toLowerCase().includes(q));
$('nav').innerHTML=all.map(s=>`<a href="#${s.id}">${esc(s.title)}</a>`).join('');
$('main').innerHTML=all.length?all.map(s=>`<section id="${s.id}"><h2><span>${esc(s.title)}</span>${s.custom?`<span class="acts"><button data-e="${s.id}">Edit</button> <button data-d="${s.id}">Delete</button></span>`:''}</h2><div class="md">${md(s.md)}</div></section>`).join(''):'<div class="empty">No notes found.</div>'}
$('q').oninput=render;
$('main').onclick=e=>{const t=e.target;
if(t.tagName==='CODE'){navigator.clipboard&&navigator.clipboard.writeText(t.textContent);t.classList.add('ok');setTimeout(()=>t.classList.remove('ok'),700)}
if(t.dataset.d&&confirm('Delete this note?')){U=U.filter(n=>n.id!==t.dataset.d);store();render()}
if(t.dataset.e)openDlg(U.find(n=>n.id===t.dataset.e))};
function openDlg(n){editId=n?n.id:null;$('dlgTitle').textContent=n?'Edit note':'Add note';$('nt').value=n?n.title:'';$('nm').value=n?n.md:'';$('pv').innerHTML=n?md(n.md):'';$('dlg').showModal()}
$('addBtn').onclick=()=>openDlg();
$('cancel').onclick=()=>$('dlg').close();
$('nm').oninput=()=>$('pv').innerHTML=md($('nm').value);
$('frm').onsubmit=()=>{const t=$('nt').value.trim(),m=$('nm').value;
if(editId){const n=U.find(x=>x.id===editId);n.title=t;n.md=m}else U.push({id:'n'+Date.now(),title:t,md:m});
store();render()};
$('expBtn').onclick=()=>{const b=new Blob([JSON.stringify(U,null,2)],{type:'application/json'}),u=URL.createObjectURL(b),l=document.createElement('a');l.href=u;l.download='steamrip-notes.json';l.click();URL.revokeObjectURL(u)};
$('impBtn').onclick=()=>$('impFile').click();
$('impFile').onchange=async e=>{const f=e.target.files[0];e.target.value='';if(!f)return;
try{const d=JSON.parse(await f.text());if(!Array.isArray(d))throw 0;
const ok=d.filter(n=>n&&typeof n.title==='string'&&typeof n.md==='string');
ok.forEach((n,i)=>U.push({id:'n'+Date.now()+'-'+i,title:n.title,md:n.md}));
store();render();alert('Imported '+ok.length+' note(s).')}catch(x){alert('That file is not a valid notes export.')}};
render();
