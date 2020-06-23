!function(r,p){"use strict";var c="function",u="undefined",m="object",i="model",e="name",s="type",o="vendor",n="version",a="architecture",t="console",w="mobile",l="tablet",d="smarttv",f="wearable",g={extend:function(i,e){for(var s in e)-1!=="browser cpu device engine os".indexOf(s)&&e[s].length%2==0&&(i[s]=e[s].concat(i[s]));return i},has:function(i,e){return"string"==typeof i&&-1!==e.toLowerCase().indexOf(i.toLowerCase())},lowerize:function(i){return i.toLowerCase()},major:function(i){return"string"==typeof i?i.split(".")[0]:p}},b={rgx:function(){for(var i,e,s,o,r,n,a,t=0,w=arguments;t<w.length&&!n;){var l=w[t],d=w[t+1];if(typeof i==u)for(o in i={},d)typeof(r=d[o])==m?i[r[0]]=p:i[r]=p;for(e=s=0;e<l.length&&!n;)if(n=l[e++].exec(this.getUA()))for(o=0;o<d.length;o++)a=n[++s],typeof(r=d[o])==m&&0<r.length?2==r.length?i[r[0]]=typeof r[1]==c?r[1].call(this,a):r[1]:3==r.length?i[r[0]]=typeof r[1]!=c||r[1].exec&&r[1].test?a?a.replace(r[1],r[2]):p:a?r[1].call(this,a,r[2]):p:4==r.length&&(i[r[0]]=a?r[3].call(this,a.replace(r[1],r[2])):p):i[r]=a||p;t+=2}return i},str:function(i,e){for(var s in e)if(typeof e[s]==m&&0<e[s].length){for(var o=0;o<e[s].length;o++)if(g.has(e[s][o],i))return"?"===s?p:s}else if(g.has(e[s],i))return"?"===s?p:s;return i}},h={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},v={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[e,n],[/\s(opr)\/([\w\.]+)/i],[[e,"Opera"],n],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium)\/([\w\.-]+)/i],[e,n],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[e,"IE"],n],[/(edge)\/((\d+)?[\w\.]+)/i],[e,n],[/(yabrowser)\/([\w\.]+)/i],[[e,"Yandex"],n],[/(comodo_dragon)\/([\w\.]+)/i],[[e,/_/g," "],n],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,/(uc\s?browser|qqbrowser)[\/\s]?([\w\.]+)/i],[e,n],[/(dolfin)\/([\w\.]+)/i],[[e,"Dolphin"],n],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[e,"Chrome"],n],[/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],[n,[e,"MIUI Browser"]],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],[n,[e,"Android Browser"]],[/FBAV\/([\w\.]+);/i],[n,[e,"Facebook"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[n,[e,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[n,e],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[e,[n,b.str,h.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[e,n],[/(navigator|netscape)\/([\w\.-]+)/i],[[e,"Netscape"],n],[/fxios\/([\w\.-]+)/i],[n,[e,"Firefox"]],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[e,n]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[a,"amd64"]],[/(ia32(?=;))/i],[[a,g.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[a,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[a,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[a,/ower/,"",g.lowerize]],[/(sun4\w)[;\)]/i],[[a,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[a,g.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[i,o,[s,l]],[/applecoremedia\/[\w\.]+ \((ipad)/],[i,[o,"Apple"],[s,l]],[/(apple\s{0,1}tv)/i],[[i,"Apple TV"],[o,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[o,i,[s,l]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[i,[o,"Amazon"],[s,l]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[i,b.str,h.device.amazon.model],[o,"Amazon"],[s,w]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[i,o,[s,w]],[/\((ip[honed|\s\w*]+);/i],[i,[o,"Apple"],[s,w]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[o,i,[s,w]],[/\(bb10;\s(\w+)/i],[i,[o,"BlackBerry"],[s,w]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],[i,[o,"Asus"],[s,l]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[o,"Sony"],[i,"Xperia Tablet"],[s,l]],[/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],[[o,"Sony"],[i,"Xperia Phone"],[s,w]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[o,i,[s,t]],[/android.+;\s(shield)\sbuild/i],[i,[o,"Nvidia"],[s,t]],[/(playstation\s[3portablevi]+)/i],[i,[o,"Sony"],[s,t]],[/(sprint\s(\w+))/i],[[o,b.str,h.device.sprint.vendor],[i,b.str,h.device.sprint.model],[s,w]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[o,i,[s,l]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[o,[i,/_/g," "],[s,w]],[/(nexus\s9)/i],[i,[o,"HTC"],[s,l]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[i,[o,"Microsoft"],[s,t]],[/(kin\.[onetw]{3})/i],[[i,/\./g," "],[o,"Microsoft"],[s,w]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i],[i,[o,"Motorola"],[s,w]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[i,[o,"Motorola"],[s,l]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[o,"Samsung"],i,[s,l]],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[o,"Samsung"],i,[s,w]],[/(samsung);smarttv/i],[o,i,[s,d]],[/\(dtv[\);].+(aquos)/i],[i,[o,"Sharp"],[s,d]],[/sie-(\w+)*/i],[i,[o,"Siemens"],[s,w]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[o,"Nokia"],i,[s,w]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[i,[o,"Acer"],[s,l]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[o,"LG"],i,[s,l]],[/(lg) netcast\.tv/i],[o,i,[s,d]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i],[i,[o,"LG"],[s,w]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[i,[o,"Lenovo"],[s,l]],[/linux;.+((jolla));/i],[o,i,[s,w]],[/((pebble))app\/[\d\.]+\s/i],[o,i,[s,f]],[/android.+;\s(glass)\s\d/i],[i,[o,"Google"],[s,f]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i],[[i,/_/g," "],[o,"Xiaomi"],[s,w]],[/(mobile|tablet);.+rv\:.+gecko\//i],[[s,g.lowerize],o,i]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[n,[e,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[e,n],[/rv\:([\w\.]+).*(gecko)/i],[n,e]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[e,n],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[e,[n,b.str,h.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[e,"Windows"],[n,b.str,h.os.windows.version]],[/\((bb)(10);/i],[[e,"BlackBerry"],n],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[e,n],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[e,"Symbian"],n],[/\((series40);/i],[e],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[e,"Firefox OS"],n],[/(nintendo|playstation)\s([wids3portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[e,n],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[e,"Chromium OS"],n],[/(sunos)\s?([\w\.]+\d)*/i],[[e,"Solaris"],n],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[e,n],[/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],[[e,"iOS"],[n,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[e,"Mac OS"],[n,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(haiku)\s(\w+)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[e,n]]},x=function(i,e){if(!(this instanceof x))return new x(i,e).getResult();var s=i||(r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),o=e?g.extend(v,e):v;return this.getBrowser=function(){var i=b.rgx.apply(this,o.browser);return i.major=g.major(i.version),i},this.getCPU=function(){return b.rgx.apply(this,o.cpu)},this.getDevice=function(){return b.rgx.apply(this,o.device)},this.getEngine=function(){return b.rgx.apply(this,o.engine)},this.getOS=function(){return b.rgx.apply(this,o.os)},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return s},this.setUA=function(i){return s=i,this},this.setUA(s),this};x.VERSION="0.7.9",x.BROWSER={NAME:e,MAJOR:"major",VERSION:n},x.CPU={ARCHITECTURE:a},x.DEVICE={MODEL:i,VENDOR:o,TYPE:s,CONSOLE:t,MOBILE:w,SMARTTV:d,TABLET:l,WEARABLE:f,EMBEDDED:"embedded"},x.ENGINE={NAME:e,VERSION:n},x.OS={NAME:e,VERSION:n},typeof exports!=u?(typeof module!=u&&module.exports&&(exports=module.exports=x),exports.UAParser=x):typeof define==c&&define.amd?define(function(){return x}):r.UAParser=x;var k,y=r.jQuery||r.Zepto;typeof y!=u&&(k=new x,y.ua=k.getResult(),y.ua.get=function(){return k.getUA()},y.ua.set=function(i){k.setUA(i);var e=k.getResult();for(var s in e)y.ua[s]=e[s]})}("object"==typeof window?window:this);