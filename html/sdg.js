var P="";var x="";var K="";var W=["all"];var u="frequency";var U=500;var r=3;var V=7200;var s=0;var G=false;var q=true;var Q=true;var a=100;var o="";var j="";var Y=false;var c=false;var Z=false;const $=window.location.search;const e=new URLSearchParams($);if(e.has("gateway"))x=e.get("gateway");if(e.has("device"))P=e.get("device");if(e.has("scpiheight"))K=e.get("scpiheight");if(e.has("view"))W=e.getAll("view");if(e.has("demo"))c=true;var z=window.location.href;if(z.includes("github.io"))c=true;var l="";function J(){if(x){l=x}else if(!l){l="ws://"+window.location.host}console.log("wsGateway: "+l)}function X(e){if(o!=e){if(at.includes(e)){websocket.send(JSON.stringify({action:"setDevice",argument:e}));o=e}}}function ee(){field=N("devices");if(field.value<at.length){X(at[field.value]);A("*IDN?",true);m()}}function te(){el=document.getElementsByClassName("checkrow");for(i=0;i<el.length;i++){el[i].onclick=function(e){var t=e.currentTarget;if(t.classList.contains("green")){t.classList.remove("green");t.cells[0].firstElementChild.checked=false}else{t.classList.add("green");t.cells[0].firstElementChild.checked=true}}}}function ne(e,t){if(t==="accept"){el=document.getElementsByClassName("cb");var n=true;for(i=0;i<el.length;i++){if(el[i].checked===false){n=false}}if(n||e.shiftKey){f(true)}else{alert("You must agree to each clasue")}}else{el=document.getElementsByClassName("checkrow");for(i=0;i<el.length;i++){el[i].classList.remove("green");el[i].cells[0].firstElementChild.checked=false}alert("Launching demo mode with fake static data.\nNothing is sent to a real device.");c=true;f(false)}}document.addEventListener("DOMContentLoaded",function(){if(c){f(false);return}N("accept").onclick=function(e){ne(e,"accept")};N("decline").onclick=function(e){ne(e,"decline")};te();var e=Number(localStorage.getItem("disclaimer"));if(Date.now()-e<7654321012){f(false)}else{N("disclaimer").style.display="block"}});function f(e){if(e)localStorage.setItem("disclaimer",Date.now());N("disclaimer").style.display="none";setTimeout(()=>{S("vfdarea",false)},"900");rt();nt();N("devices").onchange=function(){ee()};N("screenbmp").onclick=function(){we()};N("frequency").onclick=function(){de("toggle")};N("helppage").onmouseenter=function(){Y=true};N("helppage").onmouseleave=function(){Y=false};if(t==false){N("helppage").style.display="block"}if(-1==Fe.indexOf(u))u="frequency";document.addEventListener("keydown",Le);document.addEventListener("click",Be);var t=false;W.forEach(e=>{switch(e){case"frontpanel":N("frontpanel").style.display="block";t=true;break;case"counter":ge("on");t=true;break;case"tools":Qe("on");t=true;break;case"help":qe("on");t=true;break;case"all":N("frontpanel").style.display="block";ge("on");Qe("on");t=true;break}})}const ae={"!":"KB_FUNC1","@":"KB_FUNC2","#":"KB_FUNC3",$:"KB_FUNC4","%":"KB_FUNC5","^":"KB_FUNC6",1:"KB_NUMBER_1",2:"KB_NUMBER_2",3:"KB_NUMBER_3",4:"KB_NUMBER_4",5:"KB_NUMBER_5",6:"KB_NUMBER_6",7:"KB_NUMBER_7",8:"KB_NUMBER_8",9:"KB_NUMBER_9",".":"KB_POINT",0:"KB_NUMBER_0","-":"KB_NEGATIVE",M:"KB_MOD",S:"KB_SWEEP",B:"KB_BURST",P:"KB_PARAMETER",U:"KB_UTILITY",D:"KB_STORE_RECALL",W:"KB_WAVES",C:"KB_CHANNEL",ArrowUp:"KB_KNOB_RIGHT",ArrowLeft:"KB_LEFT",Backspace:"KB_LEFT",Enter:"KB_KNOB_DOWN",ArrowRight:"KB_RIGHT",ArrowDown:"KB_KNOB_LEFT","[":"KB_OUTPUT1","]":"KB_OUTPUT2","{":"INT_TRIGGER1","}":"INT_TRIGGER2",H:"INT_SHOWHELP",T:"INT_SHOWTOOLS",F:"INT_SHOWCOUNTER",R:"INT_REFRESH",K:"INT_BEEP",issend:"INT_SCPI_SEND",isclr:"INT_SCPI_CLEAR",iscopy:"INT_SCPI_COPY",icrn:"INT_CTR_REFRESH_ON",icrf:"INT_CTR_REFRESH_OFF",icon:"INT_CTR_ONOFF",icdf:"INT_CTR_DISP_FREQ",icdt:"INT_CTR_DISP_TIME",icdo:"INT_CTR_DISP_OTHER",icf:"INT_CTR_FAST",icac:"INT_CTR_AC",ichf:"INT_CTR_HFR"};var ie=["KB_MOD","KB_SWEEP","KB_BURST","KB_CHANNEL"];var re=["KB_PARAMETER","KB_UTILITY","KB_STORE_RECALL","KB_WAVES"];var se=ie.concat(re);function oe(e){if(se.includes(e)){websocket.send(JSON.stringify({action:"ledHack",argument:e}))}}function ce(t){re.forEach(e=>{if(e==t){document.getElementsByName(t)[0].classList.add("onon")}else{document.getElementsByName(e)[0].classList.remove("onon")}})}function le(e){if(typeof websocket!="object"||websocket.readyState!=1){fe()}var t=true;if(Object.values(ae).includes(e)){oe(e);switch(e){case"INT_SHOWHELP":he();break;case"INT_SHOWTOOLS":Ce();break;case"INT_SHOWCOUNTER":ge();break;case"INT_CTR_REFRESH_ON":de("on");break;case"INT_CTR_REFRESH_OFF":de("off");break;case"INT_BEEP":Oe();break;case"INT_REFRESH":we();break;case"INT_TRIGGER1":t=be(1);break;case"INT_TRIGGER2":t=be(2);break;case"INT_SCPI_SEND":De();break;case"INT_SCPI_CLEAR":ze("","clear");break;case"INT_SCPI_COPY":$e();break;case"INT_CTR_FAST":Ee();break;case"INT_CTR_ONOFF":Se();break;case"INT_CTR_DISP_FREQ":ke("f");break;case"INT_CTR_DISP_TIME":ke("t");break;case"INT_CTR_DISP_OTHER":ke("o");break;case"INT_CTR_AC":_e("a");break;case"INT_CTR_HFR":_e("h");break;default:var n="vkey value,"+e+",state,1";A(n,false);d(r)}if(t){ue()}else{fe()}}else{fe()}}function fe(){if(h("beep"))ot(220,.5,"square",100)}function ue(){if(h("beep"))ot(880,.5,"sine",50)}function d(e){if(e>0){ye("On");if(t==undefined){m();t=setInterval(m,U);v=e}else{if(e>v)v=e}}else{t=clearInterval(t);v=0;ye("Off")}}var T;var t;var v=0;function m(){var e=N("screenbmp");if(c){e.src="sample.bmp";F("screenbmp","staleinfo")}else{A("scdp",false)}if(t!=undefined){v--;if(v<=0){t=clearInterval(t);v=0;ye("off")}}A("C1:outp?\nC2:outp?\n"+"C1:mdwv?\nC2:mdwv?\n"+"C1:btwv?\nC2:btwv?\n"+"C1:swwv?\nC2:swwv?\n",false);if(s){clearTimeout(T);T=setTimeout(()=>{R("screenbmp","staleinfo")},s*1e3)}}var p;function de(e){switch(e){case"on":g("on");break;case"off":if(p==undefined){A("FCNT?",false)}else{g("off")}break;case"toggle":if(p==undefined){g("on")}else{g("off")}break}}function g(e){if(e=="on"){if(p==undefined){p=setInterval(A,500,"FCNT?",false)}C("refreshFCNT_on");E("refreshFCNT_off");return}else{p=clearInterval(p);E("refreshFCNT_on");C("refreshFCNT_off")}}function Te(e){if(e[1].match(/AC/i)){C("acLed")}else{E("acLed")}if(e[3].match(/on/i)){C("hfrLed")}else{E("hfrLed")}if(e[5].match(/fast/i)){C("fastFCNT")}else{E("fastFCNT")}}function ve(e){if(e.match(/off/i)){E("onoffFCNT")}else{C("onoffFCNT")}}function N(e){return document.getElementById(e)}function h(e){return N(e).classList.contains("green")}function C(e){F(e,"red");F(e,"yellow");R(e,"green");F(e,"black")}function me(e){F(e,"red");R(e,"yellow");F(e,"green");F(e,"black")}function b(e){R(e,"red");F(e,"yellow");F(e,"green");F(e,"black")}function E(e){F(e,"red");F(e,"yellow");F(e,"green");R(e,"black")}function _(e){F(e,"red");F(e,"yellow");F(e,"green");F(e,"black")}function S(e,t){if(t){R(e,"cyanblack")}else{F(e,"cyanblack")}}function pe(e,t){N(e).className=t}function R(e,t){N(e).classList.add(t)}function F(e,t){N(e).classList.remove(t)}function ge(e){if(e=="on"||!h("counterBut")){Ge("on");g("on")}else{Ge("off");g("off")}}var Ne=0;function he(){switch(N("scpitext").value){case"clear":localStorage.clear();N("scpitext").value="done";break;default:if(h("helpBut")){window.scroll(0,0);qe("off")}else{qe("on");N("helppage").scrollIntoView({behavior:"smooth",block:"start"})}break}}function Ce(){if(h("toolsBut")){Qe("off")}else{Qe("on")}d(r)}function be(t){var e=true;const n=["btwv","swwv"];var a="";n.forEach(e=>{if(Pe[e+t]=="on"){a="C"+t+":"+e.toUpperCase()+" MTRIG"}});if(a){C("trigger"+t);A(a,false)}else{b("trigger"+t);e=false}setTimeout(()=>{_("trigger"+t)},"200");d(r);return e}function Ee(){if(h("fastFCNT")){A("FCNT TYPE,SLOW")}else{A("FCNT TYPE,FAST")}d(r)}function _e(e){if(e=="a"){if(h("acLed")){A("FCNT MODE,DC")}else{A("FCNT MODE,AC")}}if(e=="h"){if(h("hfrLed")){A("FCNT HFR,OFF")}else{A("FCNT HFR,ON")}}d(r)}function Se(){if(h("onoffFCNT")){A("FCNT STATE,OFF");g("off");setTimeout(()=>{A("FCNT?",false)},500)}else{A("FCNT STATE,ON");g("on")}d(r)}function Re(e){switch(e){case"f":C("freqFCNT");E("timeFCNT");E("otherFCNT");break;case"t":E("freqFCNT");C("timeFCNT");E("otherFCNT");break;case"o":E("freqFCNT");E("timeFCNT");C("otherFCNT");break}}var k="f";const y=["frequency","reference"];const w=["period","pWidth","nWidth","gate"];const O=["deviation","duty","trigLev"];const Fe=y.concat(w,O);function ke(e){var t;switch(e){case"f":t=y.indexOf(u);t=(t+1)%y.length;u=y[t];k="f";break;case"t":t=w.indexOf(u);t=(t+1)%w.length;u=w[t];k="t";break;case"o":t=O.indexOf(u);t=(t+1)%O.length;u=O[t];k="o";break}if(!h("refreshFCNT_on")){Ve(Ue)}}function ye(e){if(e.match(/on/i)){C("refresh")}else{_("refresh")}}function we(){if(t==undefined){d(V)}else{d(0)}}function Oe(){if(h("beep")){_("beep")}else{C("beep");audioCtx=new(window.AudioContext||window.webkitAudioContext)}}function Be(e){const t=e.target.nodeName==="BUTTON";if(!t)return;le(e.target.name)}var Ie;function Le(e){Ie=Date.now();var t=e.key;if(t.length==1){t=t.toUpperCase()}if(Y==true){if(t!="H"){return}}if(document.activeElement.id=="scpitext"){switch(t){case"Enter":De("user");B=0;break;case"ArrowUp":if(++B<I.length){N("scpitext").value=I[B]}else{B=I.length-1}break;case"ArrowDown":if(--B>=0){N("scpitext").value=I[B]}else{N("scpitext").value="";B=-1}break}}if(t=="Enter"){if(document.activeElement.id=="macros"){De()}}if(document.activeElement.classList.contains("nokey")){return}if(e.altKey&&e.ctrlKey&&t=="F"){console.log(e);var n=N("frequency").style.fontFamily;if(n=="FourteenSeg"){n="SevenSeg"}else{n="FourteenSeg"}N("frequency").style.fontFamily=n;return}if(e.altKey||e.ctrlKey||e.metaKey){return}if(t in ae){le(ae[t]);e.preventDefault()}}var B=0;var I=[];function De(e){var t=N("scpitext").value;var n=N("macro12").value;if(e!="user"){var a=N("macros").value;if(a>=1&&a<tt.length){t=tt[a]}}if(t.match(/^scdp/i)){ze("","clear");ze("Refusing to ask for binary junk!");return}if(t.length>0){t.split(/&/).forEach(e=>{if(n==1||n==2){e=e.replace(/^C\?:/i,`C${n}:`)}A(e,true)});d(r);if(e=="user"||q){if(I[0]!=t){I.unshift(t)}}}}function Me(e){var t=e.split(",");var n=t[0];j=t[1];N("model").innerHTML=j;document.title=`${j}@${o}`}function He(e){var t;if(t=e.match(/^ROSC (int|ext),10MOUT,(on|off)/i)){var n=t[1];var a=t[2];if(n.match(/^ext/i)){S("extrefLed",true)}else{S("extrefLed",false)}}}function Ae(e){var t;if(t=e.match(/^C(\d):OUTP (on|off),/i)){var n=t[1];var a=t[2].toLowerCase();if(a.match(/^on/i)){C("ch"+n)}else{E("ch"+n)}}}var L={};var Pe={};function xe(e){var t;if(t=e.match(/^C(\d):(MDWV|SWWV|BTWV) STATE,(on|off),*/i)){var n=t[1];var a=t[2].toLowerCase();var i=t[3].toLowerCase();L[a+n]=i}if(Object.keys(L).length==6){if(Object.values(Pe).toString()!=Object.values(L).toString()){const r=["mdwv","btwv","swwv"];r.forEach(e=>{var t=L[e+"1"]+L[e+"2"];F(e,"offoff");F(e,"offon");F(e,"onoff");F(e,"onon");R(e,t)});Pe=Object.assign({},L);L={}}}}var Ke=["uS","sec","MHz","Hz","pcent"];function We(){Fe.forEach(e=>{if(e==u){S(e+"Led",true)}else{S(e+"Led",false)}});Ke.forEach(e=>{S(e,false)});switch(u){case"frequency":case"reference":S("Hz",true);break;case"duty":S("pcent",true);break;case"deviation":case"trigLev":break;default:S("sec",true);break}}function D(e){N("frequency").innerHTML=e}var Ue;function Ve(e){var t="Counter!Off!";if(e.startsWith("FCNT STATE,OFF")){ve("Off");D(t)}if(e.startsWith("FCNT STATE,ON")){Ue=e;ve("On");var n=e.split(",");We();Re(k);Te(n.slice(16,22));switch(u){case"frequency":var t=n[3];var a=t.match(/^\d+(\.\d+)?/);t=a[0];t=Number(t)/1;var i=9;if(t>1e6){t=t/1e6;S("MHz",true);i=9}else if(t>1e3){S("MHz",false);i=6}else if(t>1){S("MHz",false);i=9}t=t.toLocaleString("en-US",{minimumFractionDigits:i,maximumFractionDigits:i});D(t);break;case"reference":var r=Number(n[7].replace(/HZ/,""));if(r>1e6){r=r/1e6;S("MHz",true)}else{S("MHz",false)}r=r.toLocaleString("en-US",{minimumSignificantDigits:6,maximumSignificantDigits:6,roundingMode:"trunc"});D(r);break;case"period":case"pWidth":case"nWidth":case"gate":var s=Number(n[11].replace(/S$/,""));var o=Number(n[13].replace(/S$/,""));var c;var l=6;switch(u){case"period":c=s+o;break;case"pWidth":c=s;break;case"nWidth":c=o;break;case"gate":l=4;if(n[21].match(/fast/i)){c=.5}else{c=1};break}if(c<1e-6){c*=1e6;S("uS",true)}c=c.toLocaleString("en-US",{minimumSignificantDigits:l,maximumSignificantDigits:l,roundingMode:"halfExpand"});D(c);break;case"duty":duty=n[5];duty=(Math.round(duty*100)/100).toFixed(2);D(duty);break;case"deviation":var f=n[15].replace(/ppm/,"")*1e3;if(Math.abs(f)<1e7){f=f.toLocaleString("en-US",{minimumFractionDigits:3,maximumFractionDigits:3,roundingMode:"trunc"})}else{f="out!of!range"}D(f);break;case"trigLev":trig=Number(n[9].replace(/V$/,""));trig=trig.toFixed(3);D(trig+"!v!");break}}}function Ge(e){if(e=="on"){C("counterBut");N("counter").style.display="block"}else{_("counterBut");N("counter").style.display="none"}}function qe(e){if(e=="on"){C("helpBut");N("helppage").style.display="block"}else{_("helpBut");N("helppage").style.display="none"}}function Qe(e){if(e=="on"){C("toolsBut");N("scpitools").style.display="block"}else{_("toolsBut");N("scpitools").style.display="none"}}function M(e){switch(e){case"green":C("txbut");C("txFCNT");break;case"yellow":me("txbut");me("txFCNT");break;case"red":b("txbut");b("txFCNT");break;default:_("txbut");E("txFCNT");break}}function H(e){switch(e){case"green":C("rxbut");break;case"yellow":me("rxbut");break;case"red":b("rxbut");break;default:_("rxbut");break}}var je=0;function Ye(e,t){if(e.toString().startsWith("4")){var n=(new Date).getTime()/1e3;if(n-je>5){d(0);g("off");alert(e+": "+t);je=n;M("")}}else{alert(t)}}function Ze(e){if(window.clipboardData&&window.clipboardData.setData){return clipboardData.setData("Text",e)}else if(document.queryCommandSupported&&document.queryCommandSupported("copy")){var t=document.createElement("textarea");t.textContent=e;t.style.position="fixed";document.body.appendChild(t);t.select();try{return document.execCommand("copy")}catch(e){console.warn("Copy to clipboard failed.",e);return false}finally{document.body.removeChild(t)}}}function $e(){const e=N("scpireplies");var t="";for(const n of e.children){t+=n.innerText+"\n"}Ze(t)}function ze(e,t){var n=N("scpireplies");var a=N("csvtable");for(var i=0;i<a.rows.length;){a.deleteRow(i)}if(t=="clear"){n.innerHTML="";return}if(e.length==0)return;if(Q==true){n.innerHTML+=`<div class="nokey scpireply">${e}</div>`}else{n.innerHTML=`<div class="nokey scpireply">${e}</div>`}e=e.replace(" ",",");var r=e.split(/,/);var s=r.length;if(s%2==1){s=r.unshift(r[0]);r[1]=""}for(var i=0;i<s;i+=2){var o=a.insertRow(-1);var c=o.insertCell(0);var l=o.insertCell(1);c.innerHTML=r[i];l.innerHTML=r[i+1]}}var Je=`Siglent Technologies,SDGDEMO!,SDG42424242242,2.01.01.38
C1:OUTP ON,LOAD,50,POWERON_STATE,0,PLRT,NOR
C2:OUTP ON,LOAD,50,POWERON_STATE,0,PLRT,NOR
C1:MDWV STATE,ON,FM,MDSP,ARB,INDEX,63,SRC,INT,FRQ,1HZ,DEVI,50000HZ,CARR,WVTP,SINE,FRQ,108000000HZ,AMP,0.632551V,AMPVRMS,0.223607Vrms,AMPDBM,0dBm,OFST,0V,PHSE,0
C2:MDWV STATE,OFF
C1:BTWV STATE,OFF
C2:BTWV STATE,OFF
C1:SWWV STATE,OFF
C2:SWWV STATE,ON,TIME,23S,STOP,773999HZ,START,773999HZ,TRSR,INT,TRMD,OFF,SWMD,LINE,DIR,UP,SYM,5419472.01183249,MARK_STATE,OFF,MARK_FREQ,0HZ,IDLE_FREQ,START_FREQ,CARR,WVTP,SINE,FRQ,773999HZ,AMP,0.632551V,AMPVRMS,0.223607Vrms,AMPDBM,-7.47755e-07dBm,OFST,0V,PHSE,0
FCNT STATE,ON,FRQ,10000000.07HZ,DUTY,46.5815,REFQ,1e+07HZ,TRG,4.38538e-15V,PW,4.65815e-08S,NW,5.34185e-08S,FRQDEV,0.00667211ppm,MODE,AC,HFR,OFF,TYPE,SLOW 
`;function Xe(e,t){if(t)ze(e,"");lines=e.split("\n");lines.forEach(e=>{if(e.startsWith("FCNT ")){if(h("refreshFCNT_on")){Ve(e)}else{Ve(Ue)}}if(e.startsWith("Siglent ")){Me(e)}if(e.match(/^C\d:(MDWV|BTWV|SWWV) /i)){xe(e)}if(e.match(/^C\d:OUTP /)){Ae(e)}if(e.match(/^ROSC /)){He(e)}})}function et(e,t){M("yellow");if(t){Xe("DEMO STATE,ON,FRQ,10000000.07HZ,DUTY,46.5815,"+"REFQ,1e+07HZ,TRG,4.38538e-15V,PW,4.65815e-08S,"+"NW,5.34185e-08S,FRQDEV,0.00667211ppm,"+"MODE,AC,HFR,OFF,TYPE,SLOW",t)}else{Xe(Je,t)}setTimeout(()=>{M("")},200);return}function A(e,t){if(e=="")return;if(c){et(e,t);return}var n="scpiCmd";if(e.includes("?")){n="scpiQuery"}else if(e.match(/^scdp/i)){n="scdp"}else{n="scpiCmd"}if(websocket.readyState==1){M("green");setTimeout(()=>{M("")},100);websocket.send(JSON.stringify({action:n,argument:e,updateResponse:t}))}else{M("red")}}var tt=["Free Text"];function nt(){const e=new XMLHttpRequest;e.open("GET","sdg-macros.json");e.send();e.responseType="json";e.onload=()=>{if(e.readyState==4&&e.status==200){const i=e.response;var n=N("macros");var a=1;Object.keys(i).forEach(e=>{tt.push(i[e]);var t=document.createElement("option");t.text=e;t.value=a++;n.add(t)})}else{console.log(`Error readMacros() : ${e.status}`)}}}var at=[];function it(n){data=Object.keys(n["value"]);var a=N("devices");a.length=0;o=n["currentDevice"];var i=0;data.forEach(e=>{at.push(e);var t=document.createElement("option");t.text=e;t.value=i++;if(e==n["currentDevice"]){t.selected=true}a.add(t)})}function rt(){const t=new XMLHttpRequest;t.open("GET","sdg-config.json");t.send();t.responseType="json";t.onload=()=>{if(t.readyState==4&&t.status==200){const e=t.response;if("updateTime"in e)U=e.updateTime;if("smallUpdateCycles"in e)r=e.smallUpdateCycles;if("longUpdateCycles"in e)V=e.longUpdateCycles;if("idleTimeout"in e)s=e.idleTimeout;if("highlightNew"in e)G=e.highlightNew;if("macrosUpdateHistory"in e)q=e.macrosUpdateHistory;if("scpiResultsAppend"in e)Q=e.scpiResultsAppend;if("scpiHeightPx"in e)a=Number(e.scpiHeightPx);if("wsGateway"in e)l=e.wsGateway;st();J();lt()}else{console.log(`Error readConfig() : ${t.status}`)}}}function st(){if(K>0)a=K;N("42").style.height=a+"px";N("43").style.height=a+"px"}function ot(e,t,n,a){if(!audioCtx)return;var i=audioCtx.createOscillator();var r=audioCtx.createGain();i.connect(r);r.connect(audioCtx.destination);r.gain.value=t;i.frequency.value=e;i.type=n;i.start();setTimeout(()=>{i.stop()},a)}function ct(e){N("userCount").innerHTML=e}function lt(){console.log("Trying to open a WebSocket connection...");websocket=new WebSocket(l);websocket.onopen=ut;websocket.onclose=dt;websocket.onmessage=vt}var ft=0;function ut(){console.log("ws opened");M("");H("");ft=0;websocket.send(JSON.stringify({action:"getDevices"}))}function dt(){console.log("ws closed");M("red");H("red");if(ft++<5){setTimeout(()=>{lt()},500)}else{confirm("Cannot connect to sdg proxy.\nReload page to retry.")}}var Tt;function vt(e){H("green");setTimeout(()=>{H("")},100);const t=JSON.parse(e.data);if(t.hasOwnProperty("currentDevice")){if(o!=t["currentDevice"]){o=t["currentDevice"]}}switch(t.type){case"error":console.log(t.value);H("red");break;case"users":ct(t.count);break;case"scdp":n=Date.now();if(Tt!=t.value){Tt=t.value;var a=N("screenbmp");a.src="data:image/png;base64,"+t.value;if(G){R("screenbmp","newimg");highlightBlur=setTimeout(()=>{F("screenbmp","newimg")},50)}}F("screenbmp","staleinfo");if(s){clearTimeout(T);T=setTimeout(()=>{R("screenbmp","staleinfo")},s*1e3)}break;case"scpi":Xe(t.value,t.updateResponse);break;case"getDevices":it(t);if(!Z){Z=true;if(P){X(P)}m();A("*IDN?",true)}break;case"ledHack":ce(t.value);break;default:console.error("unsupported msg",t)}}
