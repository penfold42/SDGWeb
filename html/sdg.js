var r="siggen.home";var t="";var e="";var D=["all"];var u="frequency";var K=500;var s=3;var P=7200;var a=0;var U=true;var W=true;var n=100;var x="";var V=false;var o=false;const G=window.location.search;const c=new URLSearchParams(G);if(c.has("gateway"))t=c.get("gateway");if(c.has("device"))r=c.get("device");if(c.has("scpiheight"))e=c.get("scpiheight");if(c.has("view"))D=c.getAll("view");if(c.has("demo"))o=true;var q=window.location.href;var l="";function Q(e){if(t){l=t}else{l=window.location.protocol+"//"+window.location.hostname;if(window.location.port){l+=":"+window.location.port}l+="/cgi-bin/sdgproxy.pl"}l+="?device="+e;x=e}function j(){field=E("devices");if(field.value<Ge.length&&field.value>0){newDevice=Ge[field.value];Q(newDevice);H("*IDN?",true);m()}}function Z(){el=document.getElementsByClassName("checkrow");for(i=0;i<el.length;i++){el[i].onclick=function(e){var t=e.currentTarget;if(t.classList.contains("green")){t.classList.remove("green");t.cells[0].firstElementChild.checked=false}else{t.classList.add("green");t.cells[0].firstElementChild.checked=true}}}}function $(e,t){if(t==="accept"){el=document.getElementsByClassName("cb");var a=true;for(i=0;i<el.length;i++){if(el[i].checked===false){a=false}}if(a||e.shiftKey){f(true)}else{alert("You must agree to each clasue")}}else{el=document.getElementsByClassName("checkrow");for(i=0;i<el.length;i++){el[i].classList.remove("green");el[i].cells[0].firstElementChild.checked=false}alert("Launching demo mode with fake static data.\nNothing is sent to a real device.");o=true;f(false)}}document.addEventListener("DOMContentLoaded",function(){if(o){f(false);return}E("accept").onclick=function(e){$(e,"accept")};E("decline").onclick=function(e){$(e,"decline")};Z();var e=Number(localStorage.getItem("disclaimer"));if(Date.now()-e<7654321012){f(false)}else{E("disclaimer").style.display="block"}});function f(e){if(e)localStorage.setItem("disclaimer",Date.now());E("disclaimer").style.display="none";setTimeout(()=>{R("vfdarea",false)},"900");Qe();qe();Ve();E("devices").onchange=function(){j()};E("screenbmp").onclick=function(){_e()};E("frequency").onclick=function(){ne("toggle")};E("helppage").onmouseenter=function(){V=true};E("helppage").onmouseleave=function(){V=false};Q(r);m();H("*IDN?",true);if(t==false){E("helppage").style.display="block"}if(-1==Ee.indexOf(u))u="frequency";document.addEventListener("keydown",Fe);document.addEventListener("click",Re);var t=false;D.forEach(e=>{switch(e){case"frontpanel":E("frontpanel").style.display="block";t=true;break;case"counter":le("on");t=true;break;case"tools":M("on");t=true;break;case"help":He("on");t=true;break;case"all":E("frontpanel").style.display="block";le("on");M("on");t=true;break}})}const Y={"!":"KB_FUNC1","@":"KB_FUNC2","#":"KB_FUNC3",$:"KB_FUNC4","%":"KB_FUNC5","^":"KB_FUNC6",1:"KB_NUMBER_1",2:"KB_NUMBER_2",3:"KB_NUMBER_3",4:"KB_NUMBER_4",5:"KB_NUMBER_5",6:"KB_NUMBER_6",7:"KB_NUMBER_7",8:"KB_NUMBER_8",9:"KB_NUMBER_9",".":"KB_POINT",0:"KB_NUMBER_0","-":"KB_NEGATIVE",M:"KB_MOD",S:"KB_SWEEP",B:"KB_BURST",P:"KB_PARAMETER",U:"KB_UTILITY",D:"KB_STORE_RECALL",W:"KB_WAVES",C:"KB_CHANNEL",ArrowUp:"KB_KNOB_RIGHT",ArrowLeft:"KB_LEFT",Backspace:"KB_LEFT",Enter:"KB_KNOB_DOWN",ArrowRight:"KB_RIGHT",ArrowDown:"KB_KNOB_LEFT","[":"KB_OUTPUT1","]":"KB_OUTPUT2","{":"INT_TRIGGER1","}":"INT_TRIGGER2",H:"INT_SHOWHELP",T:"INT_SHOWTOOLS",F:"INT_SHOWCOUNTER",R:"INT_REFRESH",K:"INT_BEEP",issend:"INT_SCPI_SEND",isclr:"INT_SCPI_CLEAR",icrn:"INT_CTR_REFRESH_ON",icrf:"INT_CTR_REFRESH_OFF",icon:"INT_CTR_ONOFF",icdf:"INT_CTR_DISP_FREQ",icdt:"INT_CTR_DISP_TIME",icdo:"INT_CTR_DISP_OTHER",icf:"INT_CTR_FAST",icac:"INT_CTR_AC",ichf:"INT_CTR_HFR"};var z=["KB_MOD","KB_SWEEP","KB_BURST","KB_CHANNEL"];var X=["KB_PARAMETER","KB_UTILITY","KB_STORE_RECALL","KB_WAVES"];var J=z.concat(X);function ee(t){if(J.includes(t)){X.forEach(e=>{if(e==t){document.getElementsByName(t)[0].classList.add("onon")}else{document.getElementsByName(e)[0].classList.remove("onon")}})}}function te(e){var t=true;if(Object.values(Y).includes(e)){ee(e);switch(e){case"INT_SHOWHELP":ue();break;case"INT_SHOWTOOLS":Te();break;case"INT_SHOWCOUNTER":le();break;case"INT_CTR_REFRESH_ON":ne("on");break;case"INT_CTR_REFRESH_OFF":ne("off");break;case"INT_BEEP":ge();break;case"INT_REFRESH":_e();break;case"INT_TRIGGER1":t=de(1);break;case"INT_TRIGGER2":de(2);break;case"INT_SCPI_SEND":Se();break;case"INT_SCPI_CLEAR":Pe("","clear");break;case"INT_CTR_FAST":ve();break;case"INT_CTR_ONOFF":pe();break;case"INT_CTR_DISP_FREQ":he("f");break;case"INT_CTR_DISP_TIME":he("t");break;case"INT_CTR_DISP_OTHER":he("o");break;case"INT_CTR_AC":me("a");break;case"INT_CTR_HFR":me("h");break;default:var a="vkey value,"+e+",state,1";H(a,false);T(s)}if(h("beep")){if(t){Ze(880,.5,"sine",50)}else{Ze(220,.5,"square",100)}}}else{if(h("beep"))Ze(220,.5,"square",100)}}function T(e){if(e>0){Ce("On");if(d==undefined){m();d=setInterval(m,K);v=e}else{if(e>v)v=e}}else{d=clearInterval(d);v=0;Ce("Off")}}var ae;var d;var v=0;function m(){var e=(new Date).getTime();var t=E("screenbmp");if(o){t.src="sample.bmp"}else{t.src=l+"&cmd=scdp&t="+e}S("screenbmp","staleinfo");if(d!=undefined){v--;if(v<=0){d=clearInterval(d);v=0;Ce("off")}}H("C1:outp?%0aC2:outp?%0a"+"C1:mdwv?%0aC2:mdwv?%0a"+"C1:btwv?%0aC2:btwv?%0a"+"C1:swwv?%0aC2:swwv?%0a",false);if(a){clearTimeout(ae);ae=setTimeout(()=>{F("screenbmp","staleinfo")},a*1e3)}}var p;function ne(e){switch(e){case"on":N("on");break;case"off":if(p==undefined){H("FCNT?",false)}else{N("off")}break;case"toggle":if(p==undefined){N("on")}else{N("off")}break}}function N(e){if(e=="on"){if(p==undefined){p=setInterval(H,500,"FCNT?",false)}C("refreshFCNT_on");_("refreshFCNT_off");return}else{p=clearInterval(p);_("refreshFCNT_on");C("refreshFCNT_off")}}function ie(e){if(e[1].match(/AC/i)){C("acLed")}else{_("acLed")}if(e[3].match(/on/i)){C("hfrLed")}else{_("hfrLed")}if(e[5].match(/fast/i)){C("fastFCNT")}else{_("fastFCNT")}}function re(e){if(e.match(/off/i)){_("onoffFCNT")}else{C("onoffFCNT")}}function E(e){return document.getElementById(e)}function h(e){return E(e).classList.contains("green")}function C(e){S(e,"red");S(e,"yellow");F(e,"green");S(e,"black")}function se(e){S(e,"red");F(e,"yellow");S(e,"green");S(e,"black")}function oe(e){F(e,"red");S(e,"yellow");S(e,"green");S(e,"black")}function _(e){S(e,"red");S(e,"yellow");S(e,"green");F(e,"black")}function g(e){S(e,"red");S(e,"yellow");S(e,"green");S(e,"black")}function R(e,t){if(t){F(e,"cyanblack")}else{S(e,"cyanblack")}}function ce(e,t){E(e).className=t}function F(e,t){E(e).classList.add(t)}function S(e,t){E(e).classList.remove(t)}function le(e){if(e=="on"||!h("counterBut")){H("FCNT STATE,ON");Ae("on");N("on")}else{Ae("off");N("off")}T(s)}var fe=0;function ue(){switch(E("scpitext").value){case"clear":localStorage.clear();E("scpitext").value="done";break;default:if(h("helpBut")){window.scroll(0,0);He("off")}else{He("on");E("helppage").scrollIntoView({behavior:"smooth",block:"start"})}break}}function Te(){if(h("toolsBut")){M("off")}else{M("on")}T(s)}function de(t){var e=true;const a=["btwv","swwv"];var n="";a.forEach(e=>{if(ke[e+t]=="on"){n="C"+t+":"+e.toUpperCase()+" MTRIG"}});if(n){C("trigger"+t);H(n,false)}else{oe("trigger"+t);e=false}setTimeout(()=>{g("trigger"+t)},"200");T(s);return e}function ve(){if(h("fastFCNT")){H("FCNT TYPE,SLOW")}else{H("FCNT TYPE,FAST")}T(s)}function me(e){if(e=="a"){if(h("acLed")){H("FCNT MODE,DC")}else{H("FCNT MODE,AC")}}if(e=="h"){if(h("hfrLed")){H("FCNT HFR,OFF")}else{H("FCNT HFR,ON")}}T(s)}function pe(){if(h("onoffFCNT")){H("FCNT STATE,OFF");N("off");setTimeout(()=>{H("FCNT?",false)},500)}else{H("FCNT STATE,ON");N("on")}T(s)}function Ne(e){switch(e){case"f":C("freqFCNT");_("timeFCNT");_("otherFCNT");break;case"t":_("freqFCNT");C("timeFCNT");_("otherFCNT");break;case"o":_("freqFCNT");_("timeFCNT");C("otherFCNT");break}}var b="f";const O=["frequency","reference"];const y=["period","pWidth","nWidth","gate"];const k=["deviation","duty","trigLev"];const Ee=O.concat(y,k);function he(e){var t;switch(e){case"f":t=O.indexOf(u);t=(t+1)%O.length;u=O[t];b="f";break;case"t":t=y.indexOf(u);t=(t+1)%y.length;u=y[t];b="t";break;case"o":t=k.indexOf(u);t=(t+1)%k.length;u=k[t];b="o";break}if(p==undefined){Me(Le)}}function Ce(e){if(e.match(/on/i)){C("refresh")}else{g("refresh")}}function _e(){if(d==undefined){T(P)}else{T(0)}}function ge(){if(h("beep")){g("beep")}else{C("beep");audioCtx=new(window.AudioContext||window.webkitAudioContext)}}function Re(e){const t=e.target.nodeName==="BUTTON";if(!t)return;te(e.target.name)}function Fe(e){var t=e.key;if(t.length==1){t=t.toUpperCase()}if(V==true){if(t!="H"){return}}if(document.activeElement.id=="scpitext"){switch(t){case"Enter":Se("user");w=0;break;case"ArrowUp":if(++w<B.length){E("scpitext").value=B[w]}else{w=B.length-1}break;case"ArrowDown":if(--w>=0){E("scpitext").value=B[w]}else{E("scpitext").value="";w=-1}break}}if(t=="Enter"){if(document.activeElement.id=="macros"){Se()}}if(document.activeElement.classList.contains("nokey")){return}if(e.altKey&&e.ctrlKey&&t=="f"){var a=E("frequency").style.fontFamily;if(a=="FourteenSeg"){a="SevenSeg"}else{a="FourteenSeg"}E("frequency").style.fontFamily=a;return}if(e.altKey||e.ctrlKey||e.metaKey){return}if(t in Y){te(Y[t]);e.preventDefault()}}var w=0;var B=[];function Se(e){var t=E("scpitext").value;var a=E("macro12").value;if(e!="user"){var n=E("macros").value;if(n>=1&&n<xe.length){t=xe[n]}}if(t.match(/^scdp/i)){E("scpireply").innerHTML="Refusing to ask for binary junk!";return}if(t.length>0){t.split(/&/).forEach(e=>{if(a==1||a==2){e=e.replace(/^C\?:/i,`C${a}:`)}H(e,true)});T(s);if(e=="user"||U){if(B[0]!=t){B.unshift(t)}}}}function be(e){var t=e.split(",");var a=t[0];var n=t[1];E("model").innerHTML=n;document.title=`${n}@${x}`}function Oe(e){var t;if(t=e.match(/^ROSC (int|ext),10MOUT,(on|off)/i)){var a=t[1];var n=t[2];if(a.match(/^ext/i)){R("extrefLed",true)}else{R("extrefLed",false)}}}function ye(e){var t;if(t=e.match(/^C(\d):OUTP (on|off),/i)){var a=t[1];var n=t[2].toLowerCase();if(n.match(/^on/i)){C("ch"+a)}else{_("ch"+a)}}}var I={};var ke={};function we(e){var t;if(t=e.match(/^C(\d):(MDWV|SWWV|BTWV) STATE,(on|off),*/i)){var a=t[1];var n=t[2].toLowerCase();var i=t[3].toLowerCase();I[n+a]=i}if(Object.keys(I).length==6){if(Object.values(ke).toString()!=Object.values(I).toString()){const r=["mdwv","btwv","swwv"];r.forEach(e=>{var t=I[e+"1"]+I[e+"2"];S(e,"offoff");S(e,"offon");S(e,"onoff");S(e,"onon");F(e,t)});ke=Object.assign({},I);I={}}}}var Be=["uS","sec","MHz","Hz","pcent"];function Ie(){Ee.forEach(e=>{if(e==u){R(e+"Led",true)}else{R(e+"Led",false)}});Be.forEach(e=>{R(e,false)});switch(u){case"frequency":case"reference":R("Hz",true);break;case"duty":R("pcent",true);break;case"deviation":case"trigLev":break;default:R("sec",true);break}}function L(e){E("frequency").innerHTML=e}var Le;function Me(e){var t="Counter!Off!";if(e.startsWith("FCNT STATE,OFF")){re("Off");L(t)}if(e.startsWith("FCNT STATE,ON")){Le=e;re("On");var a=e.split(",");Ie();Ne(b);ie(a.slice(16,22));switch(u){case"frequency":var t=a[3];var n=t.match(/^\d+(\.\d+)?/);t=n[0];t=Number(t)/1;var i=9;if(t>1e6){t=t/1e6;R("MHz",true);i=9}else if(t>1e3){R("MHz",false);i=6}else if(t>1){R("MHz",false);i=9}t=t.toLocaleString("en-US",{minimumFractionDigits:i,maximumFractionDigits:i});L(t);break;case"reference":var r=Number(a[7].replace(/HZ/,""));if(r>1e6){r=r/1e6;R("MHz",true)}else{R("MHz",false)}r=r.toLocaleString("en-US",{minimumSignificantDigits:6,maximumSignificantDigits:6,roundingMode:"trunc"});L(r);break;case"period":case"pWidth":case"nWidth":case"gate":var s=Number(a[11].replace(/S$/,""));var o=Number(a[13].replace(/S$/,""));var c;var l=6;switch(u){case"period":c=s+o;break;case"pWidth":c=s;break;case"nWidth":c=o;break;case"gate":l=4;if(a[21].match(/fast/i)){c=.5}else{c=1};break}if(c<1e-6){c*=1e6;R("uS",true)}c=c.toLocaleString("en-US",{minimumSignificantDigits:l,maximumSignificantDigits:l,roundingMode:"halfExpand"});L(c);break;case"duty":duty=a[5];duty=(Math.round(duty*100)/100).toFixed(2);L(duty);break;case"deviation":var f=a[15].replace(/ppm/,"")*1e3;if(Math.abs(f)<1e7){f=f.toLocaleString("en-US",{minimumFractionDigits:3,maximumFractionDigits:3,roundingMode:"trunc"})}else{f="out!of!range"}L(f);break;case"trigLev":trig=Number(a[9].replace(/V$/,""));trig=trig.toFixed(3);L(trig+"!v!");break}}}function Ae(e){if(e=="on"){C("counterBut");E("counter").style.display="block"}else{g("counterBut");E("counter").style.display="none"}}function He(e){if(e=="on"){C("helpBut");E("helppage").style.display="block"}else{g("helpBut");E("helppage").style.display="none"}}function M(e){if(e=="on"){C("toolsBut");E("scpitools").style.display="block"}else{g("toolsBut");E("scpitools").style.display="none"}}function A(e){switch(e){case"green":C("txbut");C("txFCNT");break;case"yellow":se("txbut");se("txFCNT");break;case"red":oe("txbut");oe("txFCNT");break;default:g("txbut");_("txFCNT");break}}var De=0;function Ke(e,t){if(e.toString().startsWith("4")){var a=(new Date).getTime()/1e3;if(a-De>5){T(0);N("off");alert(e+": "+t);De=a;A("")}}else{alert(t)}}function Pe(e,t){var a=E("scpireplies");var n=E("csvtable");for(var i=0;i<n.rows.length;){n.deleteRow(i)}if(t=="clear"){a.innerHTML="";return}if(e.length==0)return;if(W==true){a.innerHTML+=`<div class="nokey scpireply">${e}</div>`}else{a.innerHTML=`<div class="nokey scpireply">${e}</div>`}e=e.replace(" ",",");var r=e.split(/,/);var s=r.length;if(s%2==1){s=r.unshift(r[0]);r[1]=""}for(var i=0;i<s;i+=2){var o=n.insertRow(-1);var c=o.insertCell(0);var l=o.insertCell(1);c.innerHTML=r[i];l.innerHTML=r[i+1]}}var Ue=`Siglent Technologies,SDGDEMO!,SDG42424242242,2.01.01.38
C1:OUTP ON,LOAD,50,POWERON_STATE,0,PLRT,NOR
C2:OUTP ON,LOAD,50,POWERON_STATE,0,PLRT,NOR
C1:MDWV STATE,ON,FM,MDSP,ARB,INDEX,63,SRC,INT,FRQ,1HZ,DEVI,50000HZ,CARR,WVTP,SINE,FRQ,108000000HZ,AMP,0.632551V,AMPVRMS,0.223607Vrms,AMPDBM,0dBm,OFST,0V,PHSE,0
C2:MDWV STATE,OFF
C1:BTWV STATE,OFF
C2:BTWV STATE,OFF
C1:SWWV STATE,OFF
C2:SWWV STATE,ON,TIME,23S,STOP,773999HZ,START,773999HZ,TRSR,INT,TRMD,OFF,SWMD,LINE,DIR,UP,SYM,5419472.01183249,MARK_STATE,OFF,MARK_FREQ,0HZ,IDLE_FREQ,START_FREQ,CARR,WVTP,SINE,FRQ,773999HZ,AMP,0.632551V,AMPVRMS,0.223607Vrms,AMPDBM,-7.47755e-07dBm,OFST,0V,PHSE,0
FCNT STATE,ON,FRQ,10000000.07HZ,DUTY,46.5815,REFQ,1e+07HZ,TRG,4.38538e-15V,PW,4.65815e-08S,NW,5.34185e-08S,FRQDEV,0.00667211ppm,MODE,AC,HFR,OFF,TYPE,SLOW 
`;function We(e,t){if(t)Pe(e,"");lines=e.split("\n");lines.forEach(e=>{if(e.startsWith("FCNT ")){Me(e)}if(e.startsWith("Siglent ")){be(e)}if(e.match(/^C\d:(MDWV|BTWV|SWWV) /i)){we(e)}if(e.match(/^C\d:OUTP /)){ye(e)}if(e.match(/^ROSC /)){Oe(e)}})}function H(e,t){if(e=="")return;if(o){A("yellow");if(t){We("DEMO STATE,ON,FRQ,10000000.07HZ,DUTY,46.5815,"+"REFQ,1e+07HZ,TRG,4.38538e-15V,PW,4.65815e-08S,"+"NW,5.34185e-08S,FRQDEV,0.00667211ppm,"+"MODE,AC,HFR,OFF,TYPE,SLOW",t)}else{We(Ue,t)}setTimeout(()=>{A("")},200);return}var a=new XMLHttpRequest;a.onreadystatechange=function(){if(a.readyState==4){responseText=a.responseText;rstatus=a.status;if(rstatus==200){We(responseText,t);A("")}else{A("red");setTimeout("delayAlert( rstatus, responseText)",10);console.log("xhr.status is "+a.status)}}};var n=l+"&cmd="+e;a.open("GET",n,true);a.send(null);A("green")}var xe=["Free Text"];function Ve(){const e=new XMLHttpRequest;e.open("GET","sdg-macros.json");e.send();e.responseType="json";e.onload=()=>{if(e.readyState==4&&e.status==200){const i=e.response;var a=E("macros");var n=1;Object.keys(i).forEach(e=>{xe.push(i[e]);var t=document.createElement("option");t.text=e;t.value=n++;a.add(t)})}else{console.log(`Error readMacros() : ${e.status}`)}}}var Ge=[];function qe(){const t=new XMLHttpRequest;t.open("GET","sdg-devices.json");t.send();t.responseType="json";t.onload=()=>{if(t.readyState==4&&t.status==200){const e=t.response;var a=E("devices");var n=0;e.unshift("Not Known");e.forEach(e=>{Ge.push(e);var t=document.createElement("option");t.text=e;t.value=n++;if(e==r){t.selected=true}a.add(t)})}else{console.log(`Error readDevices() : ${t.status}`)}}}function Qe(){const t=new XMLHttpRequest;t.open("GET","sdg-config.json");t.send();t.responseType="json";t.onload=()=>{if(t.readyState==4&&t.status==200){const e=t.response;if("updateTime"in e)K=e.updateTime;if("smallUpdateCycles"in e)s=e.smallUpdateCycles;if("longUpdateCycles"in e)P=e.longUpdateCycles;if("idleTimeout"in e)a=e.idleTimeout;if("macrosUpdateHistory"in e)U=e.macrosUpdateHistory;if("scpiResultsAppend"in e)W=e.scpiResultsAppend;if("scpiHeightPx"in e)n=Number(e.scpiHeightPx);je()}else{console.log(`Error readConfig() : ${t.status}`)}}}function je(){if(e>0)n=e;E("42").style.height=n+"px";E("43").style.height=n+"px"}function Ze(e,t,a,n){if(!audioCtx)return;var i=audioCtx.createOscillator();var r=audioCtx.createGain();i.connect(r);r.connect(audioCtx.destination);r.gain.value=t;i.frequency.value=e;i.type=a;i.start();setTimeout(()=>{i.stop()},n)}
