var _0x6ed1=["\x23\x72\x65\x73\x75\x6C\x74\x61\x64\x6F","\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72","\x41\x6E\x61","\x44\x61\x6E\x69\x65\x6C","\x44\x61\x6E\x69\x65\x6C\x61","\x46\x72\x61\x6E\x63\x69\x73\x63\x6F","\x47\x61\x62\x72\x69\x65\x6C\x61","\x4A\x61\x63\x6F\x62\x6F","\x4A\x6F\x72\x67\x65","\x4A\x6F\x73\xE9","\x4A\x75\x61\x6E","\x4A\x75\x61\x6E\x61","\x4D\x61\x72\x69\x61\x6E\x61","\x4D\x61\x74\x65\x6F","\x4E\x69\x63\x6F\x6C\xE1\x73","\x53\x61\x6D\x75\x65\x6C","\x53\x65\x72\x67\x69\x6F","\x53\x6F\x66\xED\x61","\x54\x6F\x6D\xE1\x73","\x49\x6E\x67\x72\x65\x73\x65\x20\x6C\x61\x20\x65\x64\x61\x64\x20\x64\x65\x20","","\x70\x75\x73\x68","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x45\x6C\x20\x70\x72\x6F\x6D\x65\x64\x69\x6F\x20\x64\x65\x20\x6C\x61\x73\x20\x65\x64\x61\x64\x65\x73\x20\x65\x73\x20"];var _0x7606=[_0x6ed1[0],_0x6ed1[1],_0x6ed1[2],_0x6ed1[3],_0x6ed1[4],_0x6ed1[5],_0x6ed1[6],_0x6ed1[7],_0x6ed1[8],_0x6ed1[9],_0x6ed1[10],_0x6ed1[11],_0x6ed1[12],_0x6ed1[13],_0x6ed1[14],_0x6ed1[15],_0x6ed1[16],_0x6ed1[17],_0x6ed1[18],_0x6ed1[19],_0x6ed1[20],_0x6ed1[21],_0x6ed1[22],_0x6ed1[23]];var _0xa1a8=[_0x7606[0],_0x7606[1],_0x7606[2],_0x7606[3],_0x7606[4],_0x7606[5],_0x7606[6],_0x7606[7],_0x7606[8],_0x7606[9],_0x7606[10],_0x7606[11],_0x7606[12],_0x7606[13],_0x7606[14],_0x7606[15],_0x7606[16],_0x7606[17],_0x7606[18],_0x7606[19],_0x7606[20],_0x7606[21],_0x7606[22],_0x7606[23]];let parrafo=document[_0xa1a8[1]](_0xa1a8[0]);let nombres=[_0xa1a8[2],_0xa1a8[3],_0xa1a8[4],_0xa1a8[5],_0xa1a8[6],_0xa1a8[7],_0xa1a8[8],_0xa1a8[9],_0xa1a8[10],_0xa1a8[11],_0xa1a8[12],_0xa1a8[13],_0xa1a8[14],_0xa1a8[15],_0xa1a8[16],_0xa1a8[17],_0xa1a8[18]];let edades=[];for(let i=0;i< 17;i++){let edad;do{edad= Number(prompt(`${_0x6ed1[20]}${_0x7606[20]}${_0x6ed1[20]}${_0xa1a8[19]}${_0x6ed1[20]}${_0x7606[20]}${_0x6ed1[20]}${nombres[i]}${_0x6ed1[20]}${_0x7606[20]}${_0x6ed1[20]}${_0xa1a8[20]}${_0x6ed1[20]}${_0x7606[20]}${_0x6ed1[20]}`))}while(isNaN(edad)|| edad< 10|| edad> 20);;edades[_0xa1a8[21]](edad)};suma= 0;for(let i=0;i< 17;i++){suma= suma+ edades[i]};parrafo[_0xa1a8[22]]= `${_0x6ed1[20]}${_0x7606[20]}${_0x6ed1[20]}${_0xa1a8[23]}${_0x6ed1[20]}${_0x7606[20]}${_0x6ed1[20]}${suma/ 17}${_0x6ed1[20]}${_0x7606[20]}${_0x6ed1[20]}${_0xa1a8[20]}${_0x6ed1[20]}${_0x7606[20]}${_0x6ed1[20]}`
    // disable right click
    document.addEventListener('contextmenu', event => event.preventDefault());
 
    document.onkeydown = function (e) {
 
        // disable F12 key
        if(e.keyCode == 123) {
            return false;
        }
 
        // disable I key
        if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
            return false;
        }
 
        // disable J key
        if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
            return false;
        }
 
        // disable U key
        if(e.ctrlKey && e.keyCode == 85) {
            return false;
        }
    }
 