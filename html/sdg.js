var W="";var A="";var K="";var U=["all"];var x=500;var s=3;var G=7200;var r=0;var V=false;var Q=false;var Y=true;var q=true;var $=100;var o="";var j="";var Z="none";var c=false;var z=false;const J=window.location.search;const e=new URLSearchParams(J);if(e.has("gateway"))A=e.get("gateway");if(e.has("device"))W=e.get("device");if(e.has("scpiheight"))K=e.get("scpiheight");if(e.has("view"))U=e.getAll("view");if(e.has("demo"))c=true;var X=window.location.href;if(X.includes("github.io"))c=true;var l="";function ee(){if(A){l=A}else if(!l){l="ws://"+window.location.host}}function te(e){if(o!=e){if(Ct.includes(e)){yt({action:"setDevice",argument:e});o=e}}}function ae(){field=m("devices");if(field.value<Ct.length){te(Ct[field.value]);P("*IDN?",true);d()}}function ne(){el=document.getElementsByClassName("checkrow");for(i=0;i<el.length;i++){el[i].onclick=function(e){var t=e.currentTarget;if(t.classList.contains("green")){t.classList.remove("green");t.cells[0].firstElementChild.checked=false}else{t.classList.add("green");t.cells[0].firstElementChild.checked=true}}}}function ie(e,t){if(t==="accept"){el=document.getElementsByClassName("cb");var a=true;for(i=0;i<el.length;i++){if(el[i].checked===false){a=false}}if(a||e.shiftKey){re(true)}else{alert("You must agree to each clasue")}}else{el=document.getElementsByClassName("checkrow");for(i=0;i<el.length;i++){el[i].classList.remove("green");el[i].cells[0].firstElementChild.checked=false}alert("Launching demo mode with fake static data.\nNothing is sent to a real device.");c=true;re(false)}}document.addEventListener("DOMContentLoaded",function(){if(c){re(false);return}m("accept").onclick=function(e){ie(e,"accept")};m("decline").onclick=function(e){ie(e,"decline")};ne();var e=Number(localStorage.getItem("disclaimer"));if(Date.now()-e<7654321012){re(false)}else{m("disclaimer").style.display="block"}});function re(e){if(e)localStorage.setItem("disclaimer",Date.now());m("disclaimer").style.display="none";setTimeout(()=>{C("vfdarea",false)},"900");bt();ht();m("logo").onclick=function(){location.replace(location.origin)};m("devices").onchange=function(){ae()};m("screenbmp").onclick=function(){Ve()};m("frequency").onclick=function(){Ne("toggle")};var t=["banner","frontpanel","counter","helppage"];t.forEach(e=>{m(e).onmouseenter=function(e){Te(e)};m(e).onmouseleave=function(e){Te(e)}});if(-1==Ue.indexOf(F.displayMode))F.displayMode="frequency";Pe(F.Mode);document.addEventListener("keydown",qe);document.addEventListener("click",Ye);var a=false;U.forEach(e=>{e.split(",").forEach(e=>{switch(e){case"frontpanel":ke("on");a=true;break;case"counter":Re("on");a=true;break;case"tools":lt("on");a=true;break;case"help":ot("on");a=true;break;case"logs":Fe("on");a=true;break;case"all":ke("on");Re("on");lt("on");a=true;break}})});if(a==false){m("helppage").style.display="block"}}const se={"!":"KB_FUNC1","@":"KB_FUNC2","#":"KB_FUNC3",$:"KB_FUNC4","%":"KB_FUNC5","^":"KB_FUNC6",Escape:"KB_FUNC6",1:"KB_NUMBER_1",2:"KB_NUMBER_2",3:"KB_NUMBER_3",4:"KB_NUMBER_4",5:"KB_NUMBER_5",6:"KB_NUMBER_6",7:"KB_NUMBER_7",8:"KB_NUMBER_8",9:"KB_NUMBER_9",".":"KB_POINT",0:"KB_NUMBER_0","-":"KB_NEGATIVE",M:"KB_MOD",S:"KB_SWEEP",B:"KB_BURST",P:"KB_PARAMETER",U:"KB_UTILITY",D:"KB_STORE_RECALL",W:"KB_WAVES",C:"KB_CHANNEL",ArrowUp:"KB_KNOB_RIGHT",ArrowLeft:"KB_LEFT",Backspace:"KB_LEFT",Enter:"KB_KNOB_DOWN",ArrowRight:"KB_RIGHT",ArrowDown:"KB_KNOB_LEFT","[":"KB_OUTPUT1","]":"KB_OUTPUT2","{":"INT_TRIGGER1","}":"INT_TRIGGER2",L:"INT_TOGGLELOGS",ilcopy:"INT_COPYLOGS",ilclr:"INT_CLEARLOGS","?":"INT_SHOWHELP",H:"INT_SHOWHELP",A:"INT_SHOWAWG",T:"INT_SHOWTOOLS",F:"INT_SHOWCOUNTER",R:"INT_REFRESH",K:"INT_BEEP",issend:"INT_SCPI_SEND",isclr:"INT_SCPI_CLEAR",iscopy:"INT_SCPI_COPY",isccsv:"INT_SCPI_COPYCSV",icrn:"INT_CTR_REFRESH_ON",icrf:"INT_CTR_REFRESH_OFF",icon:"INT_CTR_ONOFF",icdf:"INT_CTR_DISP_FREQ",icdt:"INT_CTR_DISP_TIME",icdo:"INT_CTR_DISP_OTHER",icf:"INT_CTR_GATE",icac:"INT_CTR_AC",ichf:"INT_CTR_HFR"};const oe={R:"INT_CTR_REFRESH_ON",S:"INT_CTR_REFRESH_OFF",P:"INT_CTR_ONOFF",F:"INT_CTR_DISP_FREQ",T:"INT_CTR_DISP_TIME",O:"INT_CTR_DISP_OTHER",G:"INT_CTR_GATE",A:"INT_CTR_AC",H:"INT_CTR_HFR"};var ce=["KB_MOD","KB_SWEEP","KB_BURST","KB_CHANNEL"];var le=["KB_PARAMETER","KB_UTILITY","KB_STORE_RECALL","KB_WAVES"];var fe=ce.concat(le);function ue(e){if(fe.includes(e)){yt({action:"ledHack",argument:e})}}function de(t){le.forEach(e=>{if(e==t){document.getElementsByName(t)[0].classList.add("onon")}else{document.getElementsByName(e)[0].classList.remove("onon")}})}function Te(e){if(e.type=="mouseenter"){Z=e.originalTarget.id}if(e.type=="mouseleave"){Z="none"}}var ve;function f(e,t,a){if(typeof websocket!="object"||websocket.readyState!=1){me()}if(t){var n=document.getElementsByName(e)[0];$e(n)}var i=true;if(Object.values(se).includes(e)){ue(e);switch(e){case"INT_TOGGLELOGS":Fe("toggle");break;case"INT_CLEARLOGS":Lt();break;case"INT_COPYLOGS":i=Tt("logmsgs");break;case"INT_SHOWHELP":ye();break;case"INT_SHOWAWG":ke();break;case"INT_SHOWTOOLS":Oe();break;case"INT_SHOWCOUNTER":Re();break;case"INT_BEEP":Qe();break;case"INT_REFRESH":Ve();break;case"INT_TRIGGER1":i=we(1);break;case"INT_TRIGGER2":i=we(2);break;case"INT_SCPI_SEND":je();break;case"INT_SCPI_CLEAR":L("","clear");break;case"INT_SCPI_COPY":i=Tt("scpitext");break;case"INT_SCPI_COPYCSV":i=Tt("scpicsv");break;case"INT_CTR_ONOFF":Le();break;case"INT_CTR_DISP_FREQ":i=xe("f");break;case"INT_CTR_DISP_TIME":i=xe("t");break;case"INT_CTR_DISP_OTHER":i=xe("o");break;case"INT_CTR_REFRESH_ON":i=Ne("on");break;case"INT_CTR_REFRESH_OFF":i=Ne("off");break;case"INT_CTR_GATE":i=xe("g",a);break;case"INT_CTR_AC":i=Be("a");break;case"INT_CTR_HFR":i=Be("h");break;default:if(e.match(/^KB_/)){var r="vkey value,"+e+",state,1";P(r,false);u(s)}else{console.log(`unknown key ${e}`)}}if(i){pe()}else{me()}}else{me()}}function me(){if(p("beep"))Ft(220,.5,"square",100)}function pe(){if(p("beep"))Ft(880,.5,"sine",50)}function u(e){if(e>0){Ge("On");if(t==undefined){d();t=setInterval(d,x);a=e}else{if(e>a)a=e}}else{t=clearInterval(t);a=0;Ge("Off")}}var ge;var t;var a=0;function d(){var e=m("screenbmp");if(c){e.src="sample.bmp";b("screenbmp","staleinfo")}else{P("scdp",false)}if(t!=undefined){a--;if(a<=0){t=clearInterval(t);a=0;Ge("off")}}P("C1:outp?\nC2:outp?\n"+"C1:mdwv?\nC2:mdwv?\n"+"C1:btwv?\nC2:btwv?\n"+"C1:swwv?\nC2:swwv?\n",false);if(r){clearTimeout(ge);ge=setTimeout(()=>{_("screenbmp","staleinfo")},r*1e3)}}var T;function Ne(e){if(!p("onoffFCNT"))return false;switch(e){case"on":v("on");break;case"off":if(T==undefined){P("FCNT?",false)}else{v("off")}break;case"toggle":if(T==undefined){v("on")}else{v("off")}break}return true}function v(e){console.log("hi");if(c){refreshTime=1e3}else{refreshTime=500}if(e=="on"){if(T==undefined){T=setInterval(P,refreshTime,"FCNT?",false)}g("refreshFCNT_on");E("refreshFCNT_off");return}else{T=clearInterval(T);E("refreshFCNT_on");g("refreshFCNT_off")}}function Ee(e){if(e["MODE"].match(/AC/i)){g("acLed")}else{E("acLed")}if(e["HFR"].match(/on/i)){g("hfrLed")}else{E("hfrLed")}}function he(e){if(e.match(/off/i)){E("onoffFCNT");E("freqFCNT");E("timeFCNT");E("otherFCNT");E("gateFCNT");E("refreshFCNT_off");E("refreshFCNT_on");E("acLed");E("hfrLed");Ue.forEach(e=>{C(e+"Led",false)});tt.forEach(e=>{C(e,false)});C("ch1Led",false)}else{g("onoffFCNT")}}function m(e){return document.getElementById(e)}function p(e){return m(e).classList.contains("green")}function g(e){b(e,"red");b(e,"yellow");_(e,"green");b(e,"black")}function Ce(e){b(e,"red");_(e,"yellow");b(e,"green");b(e,"black")}function N(e){_(e,"red");b(e,"yellow");b(e,"green");b(e,"black")}function E(e){b(e,"red");b(e,"yellow");b(e,"green");_(e,"black")}function h(e){b(e,"red");b(e,"yellow");b(e,"green");b(e,"black")}function C(e,t){if(t){_(e,"cyanblack")}else{b(e,"cyanblack")}}function _e(e,t){if(m(e)){m(e).className=t}}function _(e,t){if(m(e)){m(e).classList.add(t)}}function b(e,t){if(m(e)){m(e).classList.remove(t)}}lastWheelSent=0;function be(e){e.preventDefault();var t=Date.now();if(t-lastWheelSent>100){if(e.wheelDeltaY>=2){f("KB_KNOB_RIGHT",true,event);lastWheelSent=Date.now()}if(e.wheelDeltaY<=-2){f("KB_KNOB_LEFT",true,event);lastWheelSent=Date.now()}}}function Re(e,t){if(e=="on"||!p("counterBut")){st("on");v("on")}else{st("off");v("off")}}function Fe(e){switch(e){case"on":m("logspanel").style.display="block";g("logsBut");break;case"off":m("logspanel").style.display="none";h("logsBut");break;default:if(m("logspanel").style.display=="block"){m("logspanel").style.display="none";h("logsBut")}else{m("logspanel").style.display="block";g("logsBut")}break}}var Se=0;function ye(){switch(m("scpitext").value){case"clear":localStorage.clear();H("localStorage cleared");break;case"timing":H("scdpTimings "+xt(Pt));H("pyScdpTimings "+xt(Ht));H("wsTimings "+xt(Wt));lastMessageTime=Date.now();break;case"cleartiming":Pt=[0];Ht=[0];Wt=[0];break;default:if(p("helpBut")){window.scroll(0,0);ot("off")}else{ot("on");m("helppage").scrollIntoView({behavior:"smooth",block:"start"})}break}}function ke(e){u(s);if(e=="off"||p("awgBut")){ct("off");return}if(e=="on"||!p("awgBut")){ct("on");return}}function Oe(){if(p("toolsBut")){lt("off")}else{lt("on")}u(s)}function we(t){var e=true;const a=["btwv","swwv"];var n="";a.forEach(e=>{if(Xe[e+t]=="on"){n="C"+t+":"+e.toUpperCase()+" MTRIG"}});if(n){g("trigger"+t);P(n,false)}else{N("trigger"+t);e=false}setTimeout(()=>{h("trigger"+t)},"200");u(s);return e}var R=1;var Ie=1;var De=[.5,1,10,100,1e3];function Me(e){if(!p("onoffFCNT"))return false;if(e==undefined){Ie++;Ie%=De.length}else if(-1==De.indexOf(e)){return}else{Ie=De.indexOf(e)}R=De[Ie];if(R==.5){P("FCNT TYPE,FAST",false);w=false}else if(R==1){P("FCNT TYPE,SLOW",false);w=false}else{P("FCNT TYPE,SLOW",false);w=true}u(s);return true}function Be(e){if(!p("onoffFCNT"))return false;if(e=="a"){if(p("acLed")){P("FCNT MODE,DC",false)}else{P("FCNT MODE,AC",false)}}if(e=="h"){if(p("hfrLed")){P("FCNT HFR,OFF",false)}else{P("FCNT HFR,ON",false)}}u(s);return true}function Le(){if(p("onoffFCNT")){P("FCNT STATE,OFF",false);it="";P("FCNT?",false)}else{P("FCNT STATE,ON",false);v("on")}u(s)}function Pe(e){switch(e){case"f":g("freqFCNT");E("timeFCNT");E("otherFCNT");E("gateFCNT");break;case"t":E("freqFCNT");g("timeFCNT");E("otherFCNT");E("gateFCNT");break;case"o":E("freqFCNT");E("timeFCNT");g("otherFCNT");E("gateFCNT");break;case"g":E("freqFCNT");E("timeFCNT");E("otherFCNT");g("gateFCNT");break}}var F={displayMode:"frequency",Mode:"f",lastFreq:0,lastTime:0,lastOther:0,lastGate:0};const He=["frequency","reference"];const We=["period","pWidth","nWidth"];const Ae=["deviation","duty","trigLev"];const Ke=["gate","gateSamples"];const Ue=He.concat(We,Ae,Ke);function xe(e,t){if(!p("onoffFCNT"))return false;var a;switch(e){case"f":if(F.Mode!="f"){F.Mode="f"}else{F.lastFreq++;F.lastFreq%=He.length}F.displayMode=He[F.lastFreq];break;case"t":if(F.Mode!="t"){F.Mode="t"}else{F.lastTime++;F.lastTime%=We.length}F.displayMode=We[F.lastTime];break;case"o":if(F.Mode!="o"){F.Mode="o"}else{F.lastOther++;F.lastOther%=Ae.length}F.displayMode=Ae[F.lastOther];break;case"g":if(F.Mode!="g"){F.Mode="g"}else{if(t.ctrlKey){if(F.displayMode=="gateSamples"){I.length=0}else{F.lastGate++;F.lastGate%=Ke.length}}else{Me();F.lastGate=0}}F.displayMode=Ke[F.lastGate];break}Pe(F.Mode);localStorage.setItem("ctrInfo",JSON.stringify(F));if(p("refreshFCNT_off")){rt(it,false)}return true}function Ge(e){if(e.match(/on/i)){g("refresh")}else{h("refresh")}}function Ve(){if(t==undefined){u(G)}else{u(0)}}function Qe(){if(p("beep")){h("beep")}else{g("beep");audioCtx=new(window.AudioContext||window.webkitAudioContext)}}function Ye(e){const t=e.target.nodeName==="BUTTON";if(!t)return;f(e.target.name,false,e)}function qe(e){ve=Date.now();var t=e.key;if(t.length==1){t=t.toUpperCase()}if(Z=="helppage"){if(t!="H"){return}}if(document.activeElement.id=="scpitext"){switch(t){case"Enter":je("user");S=0;break;case"ArrowUp":if(++S<y.length){m("scpitext").value=y[S]}else{S=y.length-1}break;case"ArrowDown":if(--S>=0){m("scpitext").value=y[S]}else{m("scpitext").value="";S=-1}break}}if(t=="Enter"){if(document.activeElement.id=="macros"){je()}}if(document.activeElement.classList.contains("nokey")){return}if(e.altKey&&e.ctrlKey&&t=="F"){var a=m("frequency").style.fontFamily;if(a=="FourteenSeg"){a="SevenSeg"}else{a="FourteenSeg"}m("frequency").style.fontFamily=a;return}if(e.altKey||e.ctrlKey||e.metaKey){return}var n=false;if(n&&Z=="counter"){if(t in oe){var i=oe[t];f(i,true,e);e.preventDefault();var r=document.getElementsByName(i)[0];$e(r)}}else{if(t in se){var i=se[t];f(i,true,e);e.preventDefault();var r=document.getElementsByName(i)[0];$e(r)}}}function $e(e){if(e){e.classList.add("active");setTimeout(()=>{e.classList.remove("active")},"100")}}var S=0;var y=[];function je(e){var t=m("scpitext").value;var a=m("macro12").value;if(e!="user"){var n=m("macros").value;if(n>=1&&n<Et.length){t=Et[n]}}if(t.match(/^scdp/i)){L("","clear");L("Refusing to ask for binary junk!","notable");return}if(t.match(/^MCBD?/i)){L("","clear");L("Sorry, MCDB? only works using telnet to port 5024","notable");return}if(t.length>0){t.split(/&/).forEach(e=>{if(a==1||a==2){e=e.replace(/^C\?:/i,`C${a}:`)}P(e,true)});u(s);if(e=="user"||Y){if(y[0]!=t){y.unshift(t)}}}}function Ze(e){var t=e.split(",");var a=t[0];j=t[1];m("model").innerHTML=j;document.title=`${j}@${o}`}function ze(e){var t;if(t=e.match(/^ROSC (int|ext),10MOUT,(on|off)/i)){var a=t[1];var n=t[2];if(a.match(/^ext/i)){C("extrefLed",true)}else{C("extrefLed",false)}}}function Je(e){var t;if(t=e.match(/^C(\d):OUTP (on|off),/i)){var a=t[1];var n=t[2].toLowerCase();if(n.match(/^on/i)){g("ch"+a)}else{E("ch"+a)}}}var k={};var Xe={};function et(e){var t;if(t=e.match(/^C(\d):(MDWV|SWWV|BTWV) STATE,(on|off),*/i)){var a=t[1];var n=t[2].toLowerCase();var i=t[3].toLowerCase();k[n+a]=i}if(Object.keys(k).length==6){if(Object.values(Xe).toString()!=Object.values(k).toString()){const r=["mdwv","btwv","swwv"];r.forEach(e=>{var t=k[e+"1"]+k[e+"2"];b(e,"offoff");b(e,"offon");b(e,"onoff");b(e,"onon");_(e,t)});Xe=Object.assign({},k);k={}}}}var tt=["uS","sec","MHz","Hz","pcent"];function at(){if(w){if(I.length>=R){C("averageLed",true);b("averageLed","blink")}else{C("averageLed",true);_("averageLed","blink")}}else{C("averageLed",false)}C("ch1Led",true);Ue.forEach(e=>{if(e==F.displayMode){C(e+"Led",true)}else{C(e+"Led",false)}});tt.forEach(e=>{C(e,false)});switch(F.displayMode){case"frequency":case"reference":C("Hz",true);break;case"duty":C("pcent",true);break;case"deviation":case"trigLev":break;default:C("sec",true);break}}function O(e){m("frequency").innerHTML=e}var w=false;var I=[];var D={1:{FRQ:0},10:{FRQ:0},100:{FRQ:0},1e3:{FRQ:0}};function nt(a){if(I[0]==undefined||Object.values(I[0]).toString()!=Object.values(a).toString()){if(a.TYPE=="FAST")return;if(a.FRQ==0)return;I.unshift(a);if(I.length>1e3)I.length=1e3;var n=DUTYsum=REFQsum=0;var i=NWsum=PERsum=FREQDEVsum=0;I.forEach(function(e,t){n+=e.FRQ;DUTYsum+=e.DUTY;REFQsum+=e.REFQ;i+=e.PW;NWsum+=e.NW;PERsum+=e.PER;FREQDEVsum+=e.FREQDEV;["1","10","100","1000"].forEach(e=>{if(t<e){D[e].FRQ=n/(t+1);D[e].DUTY=DUTYsum/(t+1);D[e].REFQ=REFQsum/(t+1);D[e].TRIG=a["TRIG"];D[e].PW=i/(t+1);D[e].NW=NWsum/(t+1);D[e].PER=PERsum/(t+1);D[e].FREQDEV=FREQDEVsum/(t+1);D[e].TYPE=a["TYPE"]}})})}}var it="";function rt(e,t){var a={};if(p("refreshFCNT_off")){e=it}var n="Counter!Off!";if(e.startsWith("FCNT STATE,OFF")){he("Off");O(n);I.length=0}if(e.startsWith("FCNT STATE,ON")){it=e;he("On");var i=e.split(",");a={STATE:i[1],FRQ:Number(i[3].replace(/HZ$/i,"")),DUTY:Number(i[5]),REFQ:Number(i[7].replace(/HZ/,"")),TRIG:Number(i[9].replace(/V$/,"")),PW:Number(i[11].replace(/S$/,"")),NW:Number(i[13].replace(/S$/,"")),FREQDEV:i[15].replace(/ppm/,"")*1e3,MODE:i[17],HFR:i[19],TYPE:i[21]};a["PER"]=a["PW"]+a["NW"];if(t){nt(a)}at();Pe(F.Mode);Ee(a);if(D[R]==undefined){var r=a}else{var r=D[R]}switch(F.displayMode){case"frequency":var n=r["FRQ"];var s=9;if(n>1e6){n=n/1e6;C("MHz",true);s=9}else if(n>1e3){C("MHz",false);s=6}else if(n>1){C("MHz",false);s=9}n=n.toLocaleString("en-US",{minimumFractionDigits:s,maximumFractionDigits:s});O(n);break;case"reference":var o=r["REFQ"];if(o>1e6){o=o/1e6;C("MHz",true)}else{C("MHz",false)}o=o.toLocaleString("en-US",{minimumSignificantDigits:6,maximumSignificantDigits:6,roundingMode:"trunc"});O(o);break;case"period":case"pWidth":case"nWidth":case"gate":var c=r["PW"];var l=r["NW"];var f=r["PER"];var u;var d=6;switch(F.displayMode){case"period":u=f;break;case"pWidth":u=c;break;case"nWidth":u=l;break;case"gate":d=4;if(w){u=R}else if(r["TYPE"].match(/fast/i)){u=.5}else{u=1};break}if(u<1e-6){u*=1e6;C("uS",true)}u=u.toLocaleString("en-US",{minimumSignificantDigits:d,maximumSignificantDigits:d,roundingMode:"halfExpand"});O(u);break;case"gateSamples":O("Count!"+I.length);break;case"duty":O((Math.round(r["DUTY"]*100)/100).toFixed(2));break;case"deviation":var T=r["FREQDEV"];if(Math.abs(T)<1e7){T=T.toLocaleString("en-US",{minimumFractionDigits:3,maximumFractionDigits:3,roundingMode:"trunc"})}else{T="out!of!range"}O(T);break;case"trigLev":var v=r["TRIG"];v=v.toFixed(3);O(v+"!v!");break}}}function st(e){if(e=="on"){g("counterBut");m("counter").style.display="block"}else{h("counterBut");m("counter").style.display="none"}}function ot(e){if(e=="on"){g("helpBut");m("helppage").style.display="block"}else{h("helpBut");m("helppage").style.display="none"}}function ct(e){if(e=="on"){g("awgBut");m("frontpanel").style.display="block"}else{h("awgBut");m("frontpanel").style.display="none"}}function lt(e){if(e=="on"){g("toolsBut");m("scpitools").style.display="block"}else{h("toolsBut");m("scpitools").style.display="none"}}function M(e){switch(e){case"green":g("txbut");g("txFCNT");break;case"yellow":Ce("txbut");Ce("txFCNT");break;case"red":N("txbut");N("txFCNT");break;default:h("txbut");E("txFCNT");break}}function B(e){switch(e){case"green":g("rxbut");break;case"yellow":Ce("rxbut");break;case"red":N("rxbut");break;default:h("rxbut");break}}var ft=0;function ut(e,t){if(e.toString().startsWith("4")){var a=(new Date).getTime()/1e3;if(a-ft>5){u(0);v("off");alert(e+": "+t);ft=a;M("")}}else{alert(t)}}function dt(e){if(window.clipboardData&&window.clipboardData.setData){return clipboardData.setData("Text",e)}else if(document.queryCommandSupported&&document.queryCommandSupported("copy")){var t=document.createElement("textarea");t.textContent=e;t.style.position="fixed";document.body.appendChild(t);t.select();try{return document.execCommand("copy")}catch(e){console.warn("Copy to clipboard failed.",e);return false}finally{document.body.removeChild(t)}}}function Tt(e){if(e=="scpitext"&&vt){dt(vt);return true}else if(e=="scpicsv"&&mt){dt(mt);return true}else if(e=="logmsgs"&&At){dt(At);return true}else{return false}}var vt="";var mt="";function L(e,t){var a=m("scpireplies");var n=m("csvtable");for(var i=0;i<n.rows.length;){n.deleteRow(i)}mt="";if(t=="clear"){m("43").style.display="none";vt="";a.innerHTML="";return}if(e.length==0)return;if(q==true){vt+=e+"\n";a.innerHTML+=`<div class="nokey scpireply">${e}</div>`}else{vt=e+"\n";a.innerHTML=`<div class="nokey scpireply">${e}</div>`}if(t!="notable"){e=e.replace(" ",",");var r=e.split(/,/);var s=r.length;if(s%2==1){s=r.unshift(r[0]);r[1]=""}for(var i=0;i<s;i+=2){mt+=`${r[i]},${r[i+1]}\n`;var o=n.insertRow(-1);var c=o.insertCell(0);var l=o.insertCell(1);c.innerHTML=r[i];l.innerHTML=r[i+1]}m("43").style.display="block"}}var pt=`Siglent Technologies,SDGDEMO!,SDG42424242242,2.01.01.38
C1:OUTP ON,LOAD,50,POWERON_STATE,0,PLRT,NOR
C2:OUTP ON,LOAD,50,POWERON_STATE,0,PLRT,NOR
C1:MDWV STATE,ON,FM,MDSP,ARB,INDEX,63,SRC,INT,FRQ,1HZ,DEVI,50000HZ,CARR,WVTP,SINE,FRQ,108000000HZ,AMP,0.632551V,AMPVRMS,0.223607Vrms,AMPDBM,0dBm,OFST,0V,PHSE,0
C2:MDWV STATE,OFF
C1:BTWV STATE,OFF
C2:BTWV STATE,OFF
C1:SWWV STATE,OFF
C2:SWWV STATE,ON,TIME,23S,STOP,773999HZ,START,773999HZ,TRSR,INT,TRMD,OFF,SWMD,LINE,DIR,UP,SYM,5419472.01183249,MARK_STATE,OFF,MARK_FREQ,0HZ,IDLE_FREQ,START_FREQ,CARR,WVTP,SINE,FRQ,773999HZ,AMP,0.632551V,AMPVRMS,0.223607Vrms,AMPDBM,-7.47755e-07dBm,OFST,0V,PHSE,0
`;function gt(e,t){if(t)L(e,"");lines=e.split("\n");lines.forEach(e=>{if(e.startsWith("FCNT ")){rt(e,true)}if(e.startsWith("Siglent ")){Ze(e)}if(e.match(/^C\d:(MDWV|BTWV|SWWV) /i)){et(e)}if(e.match(/^C\d:OUTP /)){Je(e)}if(e.match(/^ROSC /)){ze(e)}})}function Nt(e,t){M("yellow");if(e.match(/^FCNT?/i)){var a=1e7;var n=4.65815e-8+(Math.random()-.5)/1e10;var i=1e-7-n;var r=1/(n+i)+(Math.random()-.5);var s=(100*n/(n+i)).toPrecision(5);var o=(1e6*(r-a)/a).toPrecision(5);n=n.toPrecision(6);i=i.toPrecision(6);r=r.toPrecision(10);gt("FCNT STATE,ON,"+`FRQ,${r}HZ,`+`DUTY,${s},`+`REFQ,${a}HZ,TRG,0.5V,`+`PW,${n}S,`+`NW,${i}S,`+`FRQDEV,${o}ppm,`+"MODE,AC,HFR,OFF,TYPE,SLOW",t)}else if(e.match(/^\*IDN?/i)){gt("Siglent Demodata,SDGDEMO!,SDG21234567890,0.01.01.01",t)}else if(t){gt("DEMO STATE,ON,FRQ,10000000.07HZ,DUTY,46.5815,"+"REFQ,1e+07HZ,TRG,4.38538e-15V,PW,4.65815e-08S,"+"NW,5.34185e-08S,FRQDEV,0.00667211ppm,"+"MODE,AC,HFR,OFF,TYPE,SLOW",t)}else{gt(pt,t)}setTimeout(()=>{M("")},200);return}function P(e,t){if(t==undefined)t=false;if(e=="")return;if(c){Nt(e,t);return}var a="scpiCmd";if(e.includes("?")){a="scpiQuery"}else if(e.match(/^scdp/i)){a="scdp"}else{a="scpiCmd"}yt({action:a,argument:e,updateResponse:t})}var Et=["Free Text"];function ht(){const e=new XMLHttpRequest;e.open("GET","sdg-macros.json");e.send();e.responseType="json";e.onload=()=>{if(e.readyState==4&&e.status==200){const i=e.response;var a=m("macros");var n=1;Object.keys(i).forEach(e=>{if(i[e]){Et.push(i[e]);var t=document.createElement("option");t.text=e;t.value=n++;a.add(t)}else{var t=document.createElement("optgroup");t.label=e;a.add(t)}})}else{console.log(`Error readMacros() : ${e.status}`)}}}var Ct=[];function _t(a){data=Object.keys(a["value"]);var n=m("devices");n.length=0;o=a["currentDevice"];var i=0;data.forEach(e=>{Ct.push(e);var t=document.createElement("option");t.text=e;t.value=i++;if(e==a["currentDevice"]){t.selected=true}n.add(t)})}function bt(){const a=new XMLHttpRequest;a.open("GET","sdg-config.json");a.send();a.responseType="json";a.onload=()=>{if(a.readyState==4&&a.status==200){const t=a.response;if("updateTime"in t)x=t.updateTime;if("smallUpdateCycles"in t)s=t.smallUpdateCycles;if("longUpdateCycles"in t)G=t.longUpdateCycles;if("scrollWheel"in t)V=t.scrollWheel;if("idleTimeout"in t)r=t.idleTimeout;if("highlightNew"in t)Q=t.highlightNew;if("macrosUpdateHistory"in t)Y=t.macrosUpdateHistory;if("scpiResultsAppend"in t)q=t.scpiResultsAppend;if("scpiHeightPx"in t)$=Number(t.scpiHeightPx);if("wsGateway"in t)l=t.wsGateway;try{var e=JSON.parse(localStorage.getItem("ctrInfo"));F=e}catch{}Rt();if(!c){ee();Ot()}else{d();_t(Object({type:"getDevices",currentDevice:"demo.device",value:{"demo.device":""}}))}}else{console.log(`Error readConfig() : ${a.status}`)}}}function Rt(){if(K>0)$=K;m("42").style.height=$+"px";m("43").style.height=$+"px";if(V==true)m("navknob").onwheel=function(e){be(e)}}function Ft(e,t,a,n){if(!audioCtx)return;var i=audioCtx.createOscillator();var r=audioCtx.createGain();i.connect(r);r.connect(audioCtx.destination);r.gain.value=t;i.frequency.value=e;i.type=a;i.start();setTimeout(()=>{i.stop()},n)}function St(e){m("userCount").innerHTML=e}function yt(e){if(typeof websocket=="object"&&websocket.readyState==1){M("green");setTimeout(()=>{M("")},100);websocket.send(JSON.stringify(e))}else{M("red")}}function kt(){yt({action:"ping",argument:Date.now()});if(Date.now()-lastMessageTime>5e3){console.log(Date.now()-lastMessageTime);Bt()}}function Ot(){H("WebSocket: connecting...");websocket=new WebSocket(l);websocket.onopen=Dt;websocket.onclose=Mt;websocket.onmessage=Ut}var wt;var It=0;function Dt(){H("WebSocket: opened");M("");B("");It=0;yt({action:"getDevices"});if(wt)clearInterval(wt);wt=setInterval(kt,3e3)}function Mt(){H("WebSocket: closed");M("red");B("red");if(It++<5){setTimeout(()=>{Ot()},500)}else{Bt()}}function Bt(){var e=confirm("Lost connection to sdg proxy.\nReload page to retry?");if(e)location.reload()}function Lt(){m("errorlogs").innerHTML="";At=""}function H(e){var t=m("errorlogs");At+=e+"\n";t.innerHTML+=`<div class="nokey errorlog">${e}</div>`}var Pt=[0];var Ht=[0];var Wt=[0];var At="";var Kt;function Ut(e){lastMessageTime=Date.now();B("green");setTimeout(()=>{B("")},100);const t=JSON.parse(e.data);if(t.hasOwnProperty("currentDevice")){if(o!=t["currentDevice"]){o=t["currentDevice"]}}switch(t.type){case"error":H(t.value);N("logsBut");setTimeout(()=>{h("logsBut")},100);B("red");break;case"users":St(t.count);break;case"scdp":n=Date.now();if(t.time>0){Ht.push(t.time);Ht[0]++}if(Kt!=t.value){Kt=t.value;var a=m("screenbmp");a.src="data:image/png;base64,"+t.value;if(Q){_("screenbmp","newimg");highlightBlur=setTimeout(()=>{b("screenbmp","newimg")},50)}if(ve){var i=Date.now()-ve;ve="";Pt.push(Number(i));Pt[0]++}}b("screenbmp","staleinfo");if(r){clearTimeout(ge);ge=setTimeout(()=>{_("screenbmp","staleinfo")},r*1e3)}break;case"scpi":gt(t.value,t.updateResponse);break;case"getDevices":_t(t);if(!z){z=true;if(W){te(W)}d();P("*IDN?",true)}break;case"ledHack":de(t.value);break;case"pong":var i=Date.now()-t.value;Wt.push(i);Wt[0]++;break;default:console.error("unsupported msg",t)}}function xt(e){var t=e[0];var a=e.slice(1);var n=Math.max.apply(null,a);var i=Math.min.apply(null,a);return"count: "+t+", range: "+(n-i)+", mean: "+(n+i)/2}
