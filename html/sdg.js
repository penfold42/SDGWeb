var H="";var A="";var K="";var U=["all"];var x=500;var s=3;var G=7200;var o=0;var V=false;var Q=true;var Y=false;var q=false;var $=true;var j=true;var Z=100;var z=3e3;var J=15e3;var l="";var X="";var ee="none";var r=false;var te=false;const ae=window.location.search;const e=new URLSearchParams(ae);if(e.has("gateway"))A=e.get("gateway");if(e.has("device"))H=e.get("device");if(e.has("scpiheight"))K=e.get("scpiheight");if(e.has("view"))U=e.getAll("view");if(e.has("demo"))r=true;var ne=window.location.href;if(ne.includes("github.io"))r=true;var c="";function re(){if(A){c=A}else if(!c){c="ws://"+window.location.host}}function ie(e){if(l!=e){if(kt.includes(e)){Bt({action:"setDevice",argument:e});l=e}}}function se(){field=m("devices");if(field.value<kt.length){ie(kt[field.value]);P("*IDN?",true);d()}}function oe(){el=document.getElementsByClassName("checkrow");for(i=0;i<el.length;i++){el[i].onclick=function(e){var t=e.currentTarget;if(t.classList.contains("green")){t.classList.remove("green");t.cells[0].firstElementChild.checked=false}else{t.classList.add("green");t.cells[0].firstElementChild.checked=true}}}}function le(e,t){if(t==="accept"){el=document.getElementsByClassName("cb");var a=true;for(i=0;i<el.length;i++){if(el[i].checked===false){a=false}}if(a||e.shiftKey){ce(true)}else{alert("You must agree to each clasue")}}else{el=document.getElementsByClassName("checkrow");for(i=0;i<el.length;i++){el[i].classList.remove("green");el[i].cells[0].firstElementChild.checked=false}alert("Launching demo mode with fake static data.\nNothing is sent to a real device.");r=true;ce(false)}}document.addEventListener("DOMContentLoaded",function(){if(r){ce(false);return}m("accept").onclick=function(e){le(e,"accept")};m("decline").onclick=function(e){le(e,"decline")};oe();var e=Number(localStorage.getItem("disclaimer"));if(Date.now()-e<7654321012){ce(false)}else{m("disclaimer").style.display="block"}});function ce(e){if(e)localStorage.setItem("disclaimer",Date.now());m("disclaimer").style.display="none";setTimeout(()=>{b("vfdarea",false)},"900");wt();_t();m("logo").onclick=function(){location.replace(location.origin)};m("devices").onchange=function(){se()};m("screenbmp").onclick=function(){ze()};m("frequency").onclick=function(){Re("toggle")};var t=["banner","frontpanel","counter","helppage"];t.forEach(e=>{m(e).onmouseenter=function(e){be(e)};m(e).onmouseleave=function(e){be(e)}});document.addEventListener("keydown",et);document.addEventListener("click",Xe);var a=false;U.forEach(e=>{e.split(",").forEach(e=>{switch(e){case"frontpanel":Pe("on");a=true;break;case"counter":De("on");a=true;break;case"tools":gt("on");a=true;break;case"help":vt("on");a=true;break;case"logs":Me("on");a=true;break;case"all":Pe("on");De("on");gt("on");a=true;break}})});if(a==false){m("helppage").style.display="block"}}const fe={"!":"KB_FUNC1","@":"KB_FUNC2","#":"KB_FUNC3",$:"KB_FUNC4","%":"KB_FUNC5","^":"KB_FUNC6",Escape:"KB_FUNC6",1:"KB_NUMBER_1",2:"KB_NUMBER_2",3:"KB_NUMBER_3",4:"KB_NUMBER_4",5:"KB_NUMBER_5",6:"KB_NUMBER_6",7:"KB_NUMBER_7",8:"KB_NUMBER_8",9:"KB_NUMBER_9",".":"KB_POINT",0:"KB_NUMBER_0","-":"KB_NEGATIVE",M:"KB_MOD",S:"KB_SWEEP",B:"KB_BURST",P:"KB_PARAMETER",U:"KB_UTILITY",D:"KB_STORE_RECALL",W:"KB_WAVES",C:"KB_CHANNEL",ArrowUp:"KB_KNOB_RIGHT",ArrowLeft:"KB_LEFT",Backspace:"KB_LEFT",Enter:"KB_KNOB_DOWN",ArrowRight:"KB_RIGHT",ArrowDown:"KB_KNOB_LEFT","[":"KB_OUTPUT1","]":"KB_OUTPUT2","{":"INT_TRIGGER1","}":"INT_TRIGGER2",ilcopy:"INT_COPYLOGS",ilclr:"INT_CLEARLOGS",issend:"INT_SCPI_SEND",isclr:"INT_SCPI_CLEAR",iscopy:"INT_SCPI_COPY",isccsv:"INT_SCPI_COPYCSV"};const ue={"?":"INT_SHOWHELP",H:"INT_SHOWHELP",A:"INT_SHOWAWG",T:"INT_SHOWTOOLS",F:"INT_SHOWCOUNTER",R:"INT_REFRESH",K:"INT_BEEP",L:"INT_TOGGLELOGS"};const de={R:"INT_CTR_REFRESH_ON",S:"INT_CTR_REFRESH_OFF",P:"INT_CTR_ONOFF",F:"INT_CTR_DISP_FREQ",T:"INT_CTR_DISP_TIME",O:"INT_CTR_DISP_OTHER",G:"INT_CTR_GATE",A:"INT_CTR_AC",H:"INT_CTR_HFR"};var Te=Object.values(ue);var ve=Object.values(fe);var me=Object.values(de);allButtonValues=Te.concat(ve,me);var ge=["KB_MOD","KB_SWEEP","KB_BURST","KB_CHANNEL"];var pe=["KB_PARAMETER","KB_UTILITY","KB_STORE_RECALL","KB_WAVES"];var he=ge.concat(pe);function Ee(e){if(he.includes(e)){Bt({action:"ledHack",argument:e})}}function Ne(t){pe.forEach(e=>{if(e==t){document.getElementsByName(t)[0].classList.add("onon")}else{document.getElementsByName(e)[0].classList.remove("onon")}})}function be(e){if(e.type=="mouseenter"){ee=e.originalTarget.id}if(e.type=="mouseleave"){ee="none"}}var Ce;function f(e,t,a){if(typeof websocket!="object"||websocket.readyState!=1){Se()}if(t){var n=document.getElementsByName(e)[0];tt(n)}var r=true;if(allButtonValues.includes(e)){Ee(e);switch(e){case"INT_TOGGLELOGS":Me("toggle");break;case"INT_CLEARLOGS":xt();break;case"INT_COPYLOGS":r=Nt("logmsgs");break;case"INT_SHOWHELP":Le();break;case"INT_SHOWAWG":Pe();break;case"INT_SHOWTOOLS":We();break;case"INT_SHOWCOUNTER":De();break;case"INT_BEEP":Je();break;case"INT_REFRESH":ze();break;case"INT_TRIGGER1":r=He(1);break;case"INT_TRIGGER2":r=He(2);break;case"INT_SCPI_SEND":at();break;case"INT_SCPI_CLEAR":L("","clear");break;case"INT_SCPI_COPY":r=Nt("scpitext");break;case"INT_SCPI_COPYCSV":r=Nt("scpicsv");break;case"INT_CTR_ONOFF":xe();break;case"INT_CTR_DISP_FREQ":r=je("f");break;case"INT_CTR_DISP_TIME":r=je("t");break;case"INT_CTR_DISP_OTHER":r=je("o");break;case"INT_CTR_REFRESH_ON":r=Re("on");break;case"INT_CTR_REFRESH_OFF":r=Re("off");break;case"INT_CTR_GATE":r=je("g",a);break;case"INT_CTR_AC":r=Ue("a");break;case"INT_CTR_HFR":r=Ue("h");break;default:if(e.match(/^KB_/)){var i="vkey value,"+e+",state,1";P(i,false);u(s)}else{console.log(`unknown key ${e}`)}}if(r){Fe()}else{Se()}}else{Se()}}function Se(){if(h("beep"))Dt(220,.5,"square",100)}function Fe(){if(h("beep"))Dt(880,.5,"sine",50)}function u(e){if(e>0){Ze("On");if(t==undefined){d();t=setInterval(d,x);a=e}else{if(e>a)a=e}}else{t=clearInterval(t);a=0;Ze("Off")}}var ye;var t;var a=0;function d(){var e=m("screenbmp");if(r){e.src="sample.bmp";S("screenbmp","staleinfo")}else{P("scdp",false)}if(t!=undefined){a--;if(a<=0){t=clearInterval(t);a=0;Ze("off")}}P("C1:outp?\nC2:outp?\n"+"C1:mdwv?\nC2:mdwv?\n"+"C1:btwv?\nC2:btwv?\n"+"C1:swwv?\nC2:swwv?\n",false);if(o){clearTimeout(ye);ye=setTimeout(()=>{C("screenbmp","staleinfo")},o*1e3)}}var T;function Re(e){if(!h("onoffFCNT"))return false;switch(e){case"on":v("on");break;case"off":if(T==undefined){P("FCNT?",false)}else{v("off")}break;case"toggle":if(T==undefined){v("on")}else{v("off")}break}return true}function v(e){if(r){refreshTime=1e3}else{refreshTime=500}if(e=="on"){if(T==undefined){T=setInterval(P,refreshTime,"FCNT?",false)}g("refreshFCNT_on");E("refreshFCNT_off");return}else{T=clearInterval(T);E("refreshFCNT_on");g("refreshFCNT_off")}}function _e(e){if(e["MODE"].match(/AC/i)){g("acLed")}else{E("acLed")}if(e["HFR"].match(/on/i)){g("hfrLed")}else{E("hfrLed")}}function ke(e){if(e.match(/off/i)){E("onoffFCNT");E("freqFCNT");E("timeFCNT");E("otherFCNT");E("gateFCNT");E("refreshFCNT_off");E("refreshFCNT_on");E("acLed");E("hfrLed");$e.forEach(e=>{b(e+"Led",false)});lt.forEach(e=>{b(e,false)});b("ch1Led",false)}else{g("onoffFCNT")}}function m(e){return document.getElementById(e)}function h(e){return m(e).classList.contains("green")}function g(e){S(e,"red");S(e,"yellow");C(e,"green");S(e,"black")}function Oe(e){S(e,"red");C(e,"yellow");S(e,"green");S(e,"black")}function p(e){C(e,"red");S(e,"yellow");S(e,"green");S(e,"black")}function E(e){S(e,"red");S(e,"yellow");S(e,"green");C(e,"black")}function N(e){S(e,"red");S(e,"yellow");S(e,"green");S(e,"black")}function b(e,t){if(t){C(e,"cyanblack")}else{S(e,"cyanblack")}}function we(e,t){if(m(e)){m(e).className=t}}function C(e,t){if(m(e)){m(e).classList.add(t)}}function S(e,t){if(m(e)){m(e).classList.remove(t)}}lastWheelSent=0;function Ie(e){e.preventDefault();var t=Date.now();if(t-lastWheelSent>100){if(e.wheelDeltaY>=2){f("KB_KNOB_RIGHT",true,event);lastWheelSent=Date.now()}if(e.wheelDeltaY<=-2){f("KB_KNOB_LEFT",true,event);lastWheelSent=Date.now()}}}function De(e,t){if(e=="on"||!h("counterBut")){Tt("on");v("on")}else{Tt("off");v("off")}}function Me(e){switch(e){case"on":m("logspanel").style.display="block";g("logsBut");break;case"off":m("logspanel").style.display="none";N("logsBut");break;default:if(m("logspanel").style.display=="block"){m("logspanel").style.display="none";N("logsBut")}else{m("logspanel").style.display="block";g("logsBut")}break}}var Be=0;function Le(){switch(m("scpitext").value){case"clear":localStorage.clear();W("localStorage cleared");break;case"timing":W("scdpTimings "+jt(Gt));W("pyScdpTimings "+jt(Vt));W("wsTimings "+jt(Qt));lastMessageTime=Date.now();break;case"cleartiming":Gt=[0];Vt=[0];Qt=[0];break;default:if(h("helpBut")){window.scroll(0,0);vt("off")}else{vt("on");m("helppage").scrollIntoView({behavior:"smooth",block:"start"})}break}}function Pe(e){u(s);if(e=="off"||h("awgBut")){mt("off");return}if(e=="on"||!h("awgBut")){mt("on");return}}function We(){if(h("toolsBut")){gt("off")}else{gt("on")}u(s)}function He(t){var e=true;const a=["btwv","swwv"];var n="";a.forEach(e=>{if(st[e+t]=="on"){n="C"+t+":"+e.toUpperCase()+" MTRIG"}});if(n){g("trigger"+t);P(n,false)}else{p("trigger"+t);e=false}setTimeout(()=>{N("trigger"+t)},"200");u(s);return e}var Ae=1;var F=[.5,1,10,100,1e3];function Ke(e,t){if(!h("onoffFCNT")&&!t)return false;if(e==undefined){Ae++;Ae%=F.length}else if(-1==F.indexOf(e)){return}else{Ae=F.indexOf(e)}y.gateInterval=F[Ae];if(y.gateInterval==.5){P("FCNT TYPE,FAST",false)}else if(y.gateInterval==1){P("FCNT TYPE,SLOW",false)}else{P("FCNT TYPE,SLOW",false)}u(s);return true}function Ue(e){if(!h("onoffFCNT"))return false;if(e=="a"){if(h("acLed")){P("FCNT MODE,DC",false)}else{P("FCNT MODE,AC",false)}}if(e=="h"){if(h("hfrLed")){P("FCNT HFR,OFF",false)}else{P("FCNT HFR,ON",false)}}u(s);return true}function xe(){if(h("onoffFCNT")){P("FCNT STATE,OFF",false);ut="";P("FCNT?",false)}else{P("FCNT STATE,ON",false);v("on")}u(s)}function Ge(e){switch(e){case"f":g("freqFCNT");E("timeFCNT");E("otherFCNT");E("gateFCNT");break;case"t":E("freqFCNT");g("timeFCNT");E("otherFCNT");E("gateFCNT");break;case"o":E("freqFCNT");E("timeFCNT");g("otherFCNT");E("gateFCNT");break;case"g":E("freqFCNT");E("timeFCNT");E("otherFCNT");g("gateFCNT");break}}var y={displayMode:"frequency",Mode:"f",lastFreq:0,lastTime:0,lastOther:0,lastGate:0,gateInterval:1};const Ve=["frequency","reference"];const Qe=["period","pWidth","nWidth"];const Ye=["deviation","duty","trigLev"];const qe=["gate","gateSamples"];const $e=Ve.concat(Qe,Ye,qe);function je(e,t){if(!h("onoffFCNT"))return false;var a;switch(e){case"f":if(y.Mode!="f"){y.Mode="f"}else{y.lastFreq++;y.lastFreq%=Ve.length}y.displayMode=Ve[y.lastFreq];break;case"t":if(y.Mode!="t"){y.Mode="t"}else{y.lastTime++;y.lastTime%=Qe.length}y.displayMode=Qe[y.lastTime];break;case"o":if(y.Mode!="o"){y.Mode="o"}else{y.lastOther++;y.lastOther%=Ye.length}y.displayMode=Ye[y.lastOther];break;case"g":if(y.Mode!="g"){y.Mode="g"}else{if(t.ctrlKey){if(y.displayMode=="gateSamples"){I.length=0;w.length=0}else{y.lastGate++;y.lastGate%=qe.length}}else{if(y.displayMode!="gateSamples"){Ke()}y.lastGate=0}}y.displayMode=qe[y.lastGate];break}Ge(y.Mode);localStorage.setItem("ctrInfo",JSON.stringify(y));if(h("refreshFCNT_off")){dt(ut,false)}return true}function Ze(e){if(e.match(/on/i)){g("refresh")}else{N("refresh")}}function ze(){if(t==undefined){u(G)}else{u(0)}}function Je(){if(h("beep")){N("beep")}else{g("beep");audioCtx=new(window.AudioContext||window.webkitAudioContext)}}function Xe(e){const t=e.target.nodeName==="BUTTON";if(!t)return;f(e.target.name,false,e)}function et(e){Ce=Date.now();var t=e.key;if(t.length==1){t=t.toUpperCase()}if(ee=="helppage"){if(t!="H"){return}}if(document.activeElement.id=="scpitext"){switch(t){case"Enter":at("user");R=0;break;case"ArrowUp":if(++R<_.length){m("scpitext").value=_[R]}else{R=_.length-1}break;case"ArrowDown":if(--R>=0){m("scpitext").value=_[R]}else{m("scpitext").value="";R=-1}break}}if(t=="Enter"){if(document.activeElement.id=="macros"){at()}}if(document.activeElement.classList.contains("nokey")){return}if(e.altKey&&e.ctrlKey&&t=="F"){var a=m("frequency").style.fontFamily;if(a=="FourteenSeg"){a="SevenSeg"}else{a="FourteenSeg"}m("frequency").style.fontFamily=a;return}if(e.altKey||e.ctrlKey||e.metaKey){return}if(Q&&ee=="counter"&&m("counter").style.display=="block"){if(t in de){var n=de[t];f(n,true,e);e.preventDefault();var r=document.getElementsByName(n)[0];tt(r);return}}if(1){if(t in ue){var n=ue[t];f(n,true,e);e.preventDefault();var r=document.getElementsByName(n)[0];tt(r);return}}if(m("frontpanel").style.display=="block"){if(t in fe){var n=fe[t];f(n,true,e);e.preventDefault();var r=document.getElementsByName(n)[0];tt(r);return}}}function tt(e){if(e){e.classList.add("active");setTimeout(()=>{e.classList.remove("active")},"100")}}var R=0;var _=[];function at(e){var t=m("scpitext").value;var a=m("macro12").value;if(e!="user"){var n=m("macros").value;if(n>=1&&n<Rt.length){t=Rt[n]}}if(t.match(/^scdp/i)){L("","clear");L("Refusing to ask for binary junk!","notable");return}if(t.match(/^MCBD?/i)){L("","clear");L("Sorry, MCDB? only works using telnet to port 5024","notable");return}if(t.length>0){t.split(/&/).forEach(e=>{if(a==1||a==2){e=e.replace(/^C\?:/i,`C${a}:`)}P(e,true)});u(s);if(e=="user"||$){if(_[0]!=t){_.unshift(t)}}}}function nt(e){var t=e.split(",");var a=t[0];X=t[1];m("model").innerHTML=X;document.title=`${X}@${l}`}function rt(e){var t;if(t=e.match(/^ROSC (int|ext),10MOUT,(on|off)/i)){var a=t[1];var n=t[2];if(a.match(/^ext/i)){b("extrefLed",true)}else{b("extrefLed",false)}}}function it(e){var t;if(t=e.match(/^C(\d):OUTP (on|off),/i)){var a=t[1];var n=t[2].toLowerCase();if(n.match(/^on/i)){g("ch"+a)}else{E("ch"+a)}}}var k={};var st={};function ot(e){var t;if(t=e.match(/^C(\d):(MDWV|SWWV|BTWV) STATE,(on|off),*/i)){var a=t[1];var n=t[2].toLowerCase();var r=t[3].toLowerCase();k[n+a]=r}if(Object.keys(k).length==6){if(Object.values(st).toString()!=Object.values(k).toString()){const i=["mdwv","btwv","swwv"];i.forEach(e=>{var t=k[e+"1"]+k[e+"2"];S(e,"offoff");S(e,"offon");S(e,"onoff");S(e,"onon");C(e,t)});st=Object.assign({},k);k={}}}}var lt=["uS","sec","MHz","Hz","pcent"];function ct(){if(y.gateInterval>1){if(I.length>=y.gateInterval){b("averageLed",true);S("averageLed","blink")}else{b("averageLed",true);C("averageLed","blink")}}else{b("averageLed",false)}b("ch1Led",true);$e.forEach(e=>{if(e==y.displayMode){b(e+"Led",true)}else{b(e+"Led",false)}});lt.forEach(e=>{b(e,false)});switch(y.displayMode){case"frequency":case"reference":b("Hz",true);break;case"duty":b("pcent",true);break;case"deviation":case"trigLev":break;default:b("sec",true);break}}function O(e){m("frequency").innerHTML=e}var w=[];var I=[];var D={};F.forEach(e=>{D[e]={}});function ft(a){if(I[0]==undefined||Object.values(I[0]).toString()!=Object.values(a).toString()){if(a.TYPE=="FAST")return;if(a.FRQ==0)return;w.unshift(Date.now());I.unshift(a);if(I.length>1e3)I.length=1e3;var n=DUTYsum=REFQsum=0;var r=NWsum=PERsum=FREQDEVsum=0;I.forEach(function(e,t){n+=e.FRQ;DUTYsum+=e.DUTY;REFQsum+=e.REFQ;r+=e.PW;NWsum+=e.NW;PERsum+=e.PER;FREQDEVsum+=e.FREQDEV;F.forEach(e=>{if(e>=1&&t<e){D[e].FRQ=n/(t+1);D[e].DUTY=DUTYsum/(t+1);D[e].REFQ=REFQsum/(t+1);D[e].TRIG=a["TRIG"];D[e].PW=r/(t+1);D[e].NW=NWsum/(t+1);D[e].PER=PERsum/(t+1);D[e].FREQDEV=FREQDEVsum/(t+1);D[e].TYPE=a["TYPE"]}})})}}var ut="";function dt(e,t){var a={};if(h("refreshFCNT_off")){e=ut}var n="Counter!Off!";if(e.startsWith("FCNT STATE,OFF")){ke("Off");O(n);I.length=0;w.length=0}if(e.startsWith("FCNT STATE,ON")){ut=e;ke("On");var r=e.split(",");a={STATE:r[1],FRQ:Number(r[3].replace(/HZ$/i,"")),DUTY:Number(r[5]),REFQ:Number(r[7].replace(/HZ/,"")),TRIG:Number(r[9].replace(/V$/,"")),PW:Number(r[11].replace(/S$/,"")),NW:Number(r[13].replace(/S$/,"")),FREQDEV:r[15].replace(/ppm/,"")*1e3,MODE:r[17],HFR:r[19],TYPE:r[21]};a["PER"]=a["PW"]+a["NW"];if(t){ft(a)}ct();Ge(y.Mode);_e(a);if(D[y.gateInterval]==undefined){var i=a}else{var i=D[y.gateInterval]}switch(y.displayMode){case"frequency":var n=i["FRQ"];var s=9;if(n>1e6){n=n/1e6;b("MHz",true);s=9}else if(n>1e3){b("MHz",false);s=6}else if(n>1){b("MHz",false);s=9}n=n.toLocaleString("en-US",{minimumFractionDigits:s,maximumFractionDigits:s});O(n);break;case"reference":var o=i["REFQ"];if(o>1e6){o=o/1e6;b("MHz",true)}else{b("MHz",false)}o=o.toLocaleString("en-US",{minimumSignificantDigits:6,maximumSignificantDigits:6,roundingMode:"trunc"});O(o);break;case"period":case"pWidth":case"nWidth":var l=i["PW"];var c=i["NW"];var f=i["PER"];var u;var d=6;switch(y.displayMode){case"period":u=f;break;case"pWidth":u=l;break;case"nWidth":u=c;break}if(u<1e-6){u*=1e6;b("uS",true)}u=u.toLocaleString("en-US",{minimumSignificantDigits:d,maximumSignificantDigits:d,roundingMode:"halfExpand"});O(u);break;case"gate":d=4;var T=1;if(i["TYPE"].match(/fast/i)){u="FA5T"}else{if(Y){var v=Math.max(2,y.gateInterval);v=Math.min(v,w.length);var m=(w[0]-w[v-1])/(v-1);if(m)T=m/1e3;else T=1.5}u=y.gateInterval*T;u=u.toLocaleString("en-US",{minimumSignificantDigits:d,maximumSignificantDigits:d,roundingMode:"halfExpand"})};O(u);break;case"gateSamples":O("Count!"+I.length);break;case"duty":O((Math.round(i["DUTY"]*100)/100).toFixed(2));break;case"deviation":var g=i["FREQDEV"];if(Math.abs(g)<1e7){g=g.toLocaleString("en-US",{minimumFractionDigits:3,maximumFractionDigits:3,roundingMode:"trunc"})}else{g="out!of!range"}O(g);break;case"trigLev":var p=i["TRIG"];p=p.toFixed(3);O(p+"!v!");break}}}function Tt(e){if(e=="on"){g("counterBut");m("counter").style.display="block"}else{N("counterBut");m("counter").style.display="none"}}function vt(e){if(e=="on"){g("helpBut");m("helppage").style.display="block"}else{N("helpBut");m("helppage").style.display="none"}}function mt(e){if(e=="on"){g("awgBut");m("frontpanel").style.display="block"}else{N("awgBut");m("frontpanel").style.display="none"}}function gt(e){if(e=="on"){g("toolsBut");m("scpitools").style.display="block"}else{N("toolsBut");m("scpitools").style.display="none"}}function M(e){switch(e){case"green":g("txbut");g("txFCNT");break;case"yellow":Oe("txbut");Oe("txFCNT");break;case"red":p("txbut");p("txFCNT");break;default:N("txbut");E("txFCNT");break}}function B(e){switch(e){case"green":g("rxbut");break;case"yellow":Oe("rxbut");break;case"red":p("rxbut");break;default:N("rxbut");break}}var pt=0;function ht(e,t){if(e.toString().startsWith("4")){var a=(new Date).getTime()/1e3;if(a-pt>5){u(0);v("off");alert(e+": "+t);pt=a;M("")}}else{alert(t)}}function Et(e){if(window.clipboardData&&window.clipboardData.setData){return clipboardData.setData("Text",e)}else if(document.queryCommandSupported&&document.queryCommandSupported("copy")){var t=document.createElement("textarea");t.textContent=e;t.style.position="fixed";document.body.appendChild(t);t.select();try{return document.execCommand("copy")}catch(e){console.warn("Copy to clipboard failed.",e);return false}finally{document.body.removeChild(t)}}}function Nt(e){if(e=="scpitext"&&bt){Et(bt);return true}else if(e=="scpicsv"&&Ct){Et(Ct);return true}else if(e=="logmsgs"&&Yt){Et(Yt);return true}else{return false}}var bt="";var Ct="";function L(e,t){var a=m("scpireplies");var n=m("csvtable");for(var r=0;r<n.rows.length;){n.deleteRow(r)}Ct="";if(t=="clear"){m("43").style.display="none";bt="";a.innerHTML="";return}if(e.length==0)return;if(j==true){bt+=e+"\n";a.innerHTML+=`<div class="nokey scpireply">${e}</div>`}else{bt=e+"\n";a.innerHTML=`<div class="nokey scpireply">${e}</div>`}if(t!="notable"){e=e.replace(" ",",");var i=e.split(/,/);var s=i.length;if(s%2==1){s=i.unshift(i[0]);i[1]=""}for(var r=0;r<s;r+=2){Ct+=`${i[r]},${i[r+1]}\n`;var o=n.insertRow(-1);var l=o.insertCell(0);var c=o.insertCell(1);l.innerHTML=i[r];c.innerHTML=i[r+1]}m("43").style.display="block"}}var St=`Siglent Technologies,SDGDEMO!,SDG42424242242,2.01.01.38
C1:OUTP ON,LOAD,50,POWERON_STATE,0,PLRT,NOR
C2:OUTP ON,LOAD,50,POWERON_STATE,0,PLRT,NOR
C1:MDWV STATE,ON,FM,MDSP,ARB,INDEX,63,SRC,INT,FRQ,1HZ,DEVI,50000HZ,CARR,WVTP,SINE,FRQ,108000000HZ,AMP,0.632551V,AMPVRMS,0.223607Vrms,AMPDBM,0dBm,OFST,0V,PHSE,0
C2:MDWV STATE,OFF
C1:BTWV STATE,OFF
C2:BTWV STATE,OFF
C1:SWWV STATE,OFF
C2:SWWV STATE,ON,TIME,23S,STOP,773999HZ,START,773999HZ,TRSR,INT,TRMD,OFF,SWMD,LINE,DIR,UP,SYM,5419472.01183249,MARK_STATE,OFF,MARK_FREQ,0HZ,IDLE_FREQ,START_FREQ,CARR,WVTP,SINE,FRQ,773999HZ,AMP,0.632551V,AMPVRMS,0.223607Vrms,AMPDBM,-7.47755e-07dBm,OFST,0V,PHSE,0
`;function Ft(e,t){if(t)L(e,"");lines=e.split("\n");lines.forEach(e=>{if(e.startsWith("FCNT ")){dt(e,true)}if(e.startsWith("Siglent ")){nt(e)}if(e.match(/^C\d:(MDWV|BTWV|SWWV) /i)){ot(e)}if(e.match(/^C\d:OUTP /)){it(e)}if(e.match(/^ROSC /)){rt(e)}})}function yt(e,t){M("yellow");setTimeout(()=>{B("yellow")},100);if(e.match(/^FCNT?/i)){var a=1e7;var n=4.65815e-8+(Math.random()-.5)/1e10;var r=1e-7-n;var i=1/(n+r)+(Math.random()-.5);var s=(100*n/(n+r)).toPrecision(5);var o=(1e6*(i-a)/a).toPrecision(5);n=n.toPrecision(6);r=r.toPrecision(6);i=i.toPrecision(10);Ft("FCNT STATE,ON,"+`FRQ,${i}HZ,`+`DUTY,${s},`+`REFQ,${a}HZ,TRG,0.5V,`+`PW,${n}S,`+`NW,${r}S,`+`FRQDEV,${o}ppm,`+"MODE,AC,HFR,OFF,TYPE,SLOW",t)}else if(e.match(/^\*IDN?/i)){Ft("Siglent Demodata,SDGDEMO!,SDG21234567890,0.01.01.01",t)}else if(t){Ft("DEMO STATE,ON,FRQ,10000000.07HZ,DUTY,46.5815,"+"REFQ,1e+07HZ,TRG,4.38538e-15V,PW,4.65815e-08S,"+"NW,5.34185e-08S,FRQDEV,0.00667211ppm,"+"MODE,AC,HFR,OFF,TYPE,SLOW",t)}else{Ft(St,t)}setTimeout(()=>{M("");B("")},200);return}function P(e,t){if(t==undefined)t=false;if(e=="")return;if(r){yt(e,t);return}var a="scpiCmd";if(e.includes("?")){a="scpiQuery"}else if(e.match(/^scdp/i)){a="scdp"}else{a="scpiCmd"}Bt({action:a,argument:e,updateResponse:t})}var Rt=["Free Text"];function _t(){const e=new XMLHttpRequest;e.open("GET","sdg-macros.json");e.send();e.responseType="json";e.onload=()=>{if(e.readyState==4&&e.status==200){const r=e.response;var a=m("macros");var n=1;Object.keys(r).forEach(e=>{if(r[e]){Rt.push(r[e]);var t=document.createElement("option");t.text=e;t.value=n++;a.add(t)}else{var t=document.createElement("optgroup");t.label=e;a.add(t)}})}else{console.log(`Error readMacros() : ${e.status}`)}}}var kt=[];function Ot(a){data=Object.keys(a["value"]);var n=m("devices");n.length=0;l=a["currentDevice"];var r=0;data.forEach(e=>{kt.push(e);var t=document.createElement("option");t.text=e;t.value=r++;if(e==a["currentDevice"]){t.selected=true}n.add(t)})}function wt(){const a=new XMLHttpRequest;a.open("GET","sdg-config.json");a.send();a.responseType="json";a.onload=()=>{if(a.readyState==4&&a.status==200){const t=a.response;if("updateTime"in t)x=t.updateTime;if("smallUpdateCycles"in t)s=t.smallUpdateCycles;if("longUpdateCycles"in t)G=t.longUpdateCycles;if("scrollWheel"in t)V=t.scrollWheel;if("counterKeyboard"in t)Q=t.counterKeyboard;if("idleTimeout"in t)o=t.idleTimeout;if("showGateSeconds"in t)Y=t.showGateSeconds;if("highlightNew"in t)q=t.highlightNew;if("macrosUpdateHistory"in t)$=t.macrosUpdateHistory;if("scpiResultsAppend"in t)j=t.scpiResultsAppend;if("scpiHeightPx"in t)Z=Number(t.scpiHeightPx);if("wsGateway"in t)c=t.wsGateway;try{if(localStorage.getItem("ctrInfo")){var e=JSON.parse(localStorage.getItem("ctrInfo"));y=e}}catch{}if(-1==$e.indexOf(y.displayMode)){y.displayMode="frequency";y.Mode="f";y.gateInterval=1}if(-1==F.indexOf(y.gateInterval)){y.gateInterval=1}Ge(y.Mode);It();if(!r){re();Pt()}else{d();Ot(Object({type:"getDevices",currentDevice:"demo.device",value:{"demo.device":""}}))}}else{console.log(`Error readConfig() : ${a.status}`)}}}function It(){if(K>0)Z=K;m("42").style.height=Z+"px";m("43").style.height=Z+"px";if(V==true)m("navknob").onwheel=function(e){Ie(e)}}function Dt(e,t,a,n){if(!audioCtx)return;var r=audioCtx.createOscillator();var i=audioCtx.createGain();r.connect(i);i.connect(audioCtx.destination);i.gain.value=t;r.frequency.value=e;r.type=a;r.start();setTimeout(()=>{r.stop()},n)}function Mt(e){m("userCount").innerHTML=e}function Bt(e){if(typeof websocket=="object"&&websocket.readyState==1){M("green");setTimeout(()=>{M("")},100);websocket.send(JSON.stringify(e))}else{M("red")}}function Lt(){Bt({action:"ping",argument:Date.now()});if(Date.now()-lastMessageTime>J){console.log(Date.now()-lastMessageTime);Ut()}}function Pt(){W("WebSocket: connecting...");websocket=new WebSocket(c);websocket.onopen=At;websocket.onclose=Kt;websocket.onmessage=$t}var Wt;var Ht=0;function At(){W("WebSocket: opened");M("");B("");Ht=0;Bt({action:"getDevices"});if(Wt)clearInterval(Wt);Wt=setInterval(Lt,z);Ke(y.gateInterval,"force")}function Kt(){W("WebSocket: closed");M("red");B("red");if(Ht++<5){setTimeout(()=>{Pt()},500)}else{Ut()}}function Ut(){var e=confirm("Lost connection to sdg proxy.\nReload page to retry?");if(e)location.reload()}function xt(){m("errorlogs").innerHTML="";Yt=""}function W(e){var t=m("errorlogs");Yt+=e+"\n";t.innerHTML+=`<div class="nokey errorlog">${e}</div>`}var Gt=[0];var Vt=[0];var Qt=[0];var Yt="";var qt;function $t(e){lastMessageTime=Date.now();B("green");setTimeout(()=>{B("")},100);const t=JSON.parse(e.data);if(t.hasOwnProperty("currentDevice")){if(l!=t["currentDevice"]){l=t["currentDevice"]}}switch(t.type){case"error":W(t.value);p("logsBut");setTimeout(()=>{N("logsBut")},100);B("red");break;case"users":Mt(t.count);break;case"scdp":n=Date.now();if(t.time>0){Vt.push(t.time);Vt[0]++}if(qt!=t.value){qt=t.value;var a=m("screenbmp");a.src="data:image/png;base64,"+t.value;if(q){C("screenbmp","newimg");highlightBlur=setTimeout(()=>{S("screenbmp","newimg")},50)}if(Ce){var r=Date.now()-Ce;Ce="";Gt.push(Number(r));Gt[0]++}}S("screenbmp","staleinfo");if(o){clearTimeout(ye);ye=setTimeout(()=>{C("screenbmp","staleinfo")},o*1e3)}break;case"scpi":Ft(t.value,t.updateResponse);break;case"getDevices":Ot(t);if(!te){te=true;if(H){ie(H)}d();P("*IDN?",true)}break;case"ledHack":Ne(t.value);break;case"pong":var r=Date.now()-t.value;Qt.push(r);Qt[0]++;break;default:console.error("unsupported msg",t)}}function jt(e){var t=e[0];var a=e.slice(1);var n=Math.max.apply(null,a);var r=Math.min.apply(null,a);return"count: "+t+", range: "+(n-r)+", mean: "+(n+r)/2}
