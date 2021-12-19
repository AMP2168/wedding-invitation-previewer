
function invitedFunction() {
    let invited = document.getElementById("Invited").value;
    document.getElementById("INVITED").innerHTML = invited;
}

function name1Function() {
    let name1 = document.getElementById("Name1").value;
    document.getElementById("NAME1").innerHTML = name1;
}

function name2Function() {
    let name2 = document.getElementById("Name2").value;
    document.getElementById("NAME2").innerHTML = name2;
}
    
function dateFunction() {
    let date = document.getElementById("Date").value;
    const d = new Date (date);
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    let newDateVal = `${da} ${mo} ${ye}`;
    document.getElementById("DATE").innerHTML = newDateVal;
}

function timeFunction() {
    let time = document.getElementById("Time").value;
    document.getElementById("TIME").innerHTML = time;
}

function venueFunction() {
    let venue = document.getElementById("Venue").value;
    document.getElementById("VENUE").innerHTML = venue;
}

function addressFunction() {
    let address = document.getElementById("Address").value;
    document.getElementById("ADDRESS").innerHTML = nl2br(address);
}

function nl2br (str, replaceMode, isXhtml) {
   var breakTag = (isXhtml) ? '<br />' : '<br>';
   var replaceStr = (replaceMode) ? '$1'+ breakTag : '$1'+ breakTag +'$2';
   return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, replaceStr);
}


function rsvpFunction() {
    let rsvpdate = document.getElementById("Rsvp").value;
    const d = new Date (rsvpdate);
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    let newRsvpVal = `${da} ${mo} ${ye}`;
    document.getElementById("RSVP").innerHTML = newRsvpVal;
}


function prideFunction() {
    document.getElementById("item3").style.backgroundImage= 'linear-gradient(rgb(255, 0, 24),rgb(255, 165, 44), rgb(255,255,65), rgb(0, 128, 24), rgb(0, 0, 249), rgb(134,0,125))';
    document.getElementById("INVITED").style.color='black';
    document.getElementById("INTRO").style.color='black';
    document.getElementById("NAME1").style.color='black';
    document.getElementById("NAME2").style.color='black';
    document.getElementById("DATE").style.color='black';
    document.getElementById("TIME").style.color='black';
    document.getElementById("VENUE").style.color='black';
    document.getElementById("ADDRESS").style.color='black';
    document.getElementById("RSVP").style.color='black';
    let classNames = document.getElementsByClassName("INFO");
    for (let i = 0; i < classNames.length; i++) {
    classNames[i].style.color= 'black';}
}     

function transFunction() {
    document.getElementById("item3").style.backgroundImage= 'linear-gradient(rgb(85,205,252), rgb(247,168,184), white, rgb(247,168,184), rgb(85,205,252))';
    document.getElementById("INVITED").style.color='#350f61';
    document.getElementById("INTRO").style.color='#350f61';
    document.getElementById("NAME1").style.color='#350f61';
    document.getElementById("NAME2").style.color='#350f61';
    document.getElementById("DATE").style.color='#350f61';
    document.getElementById("TIME").style.color='#350f61';
    document.getElementById("VENUE").style.color='#350f61';
    document.getElementById("ADDRESS").style.color='#350f61';
    document.getElementById("RSVP").style.color='#350f61';
    let classNames = document.getElementsByClassName("INFO");
    for (let i = 0; i < classNames.length; i++) {
    classNames[i].style.color= "#350f61";}
}          

function panFunction() {
    document.getElementById("item3").style.backgroundImage= 'linear-gradient(rgb(255,33,140), rgb(255,216, 0), rgb(27,179,255))';
    document.getElementById("INVITED").style.color='#350f61';
    document.getElementById("INTRO").style.color='#350f61';
    document.getElementById("NAME1").style.color='#350f61';
    document.getElementById("NAME2").style.color='#350f61';
    document.getElementById("DATE").style.color='#350f61';
    document.getElementById("TIME").style.color='#350f61';
    document.getElementById("VENUE").style.color='#350f61';
    document.getElementById("ADDRESS").style.color='#350f61';
    document.getElementById("RSVP").style.color='#350f61';
    let classNames = document.getElementsByClassName("INFO");
    for (let i = 0; i < classNames.length; i++) {
    classNames[i].style.color= "#350f61";}                         
}     

function biFunction() {
    document.getElementById("item3").style.backgroundImage= 'linear-gradient(rgb(215, 2, 112), rgba(115,79,150), rgba(0, 56, 168))';
    document.getElementById("INVITED").style.color='#350f61';
    document.getElementById("INTRO").style.color='#C0C0C0';
    document.getElementById("NAME1").style.color='#350f61';
    document.getElementById("NAME2").style.color='#350f61';
    document.getElementById("DATE").style.color='#350f61';
    document.getElementById("TIME").style.color='#350f61';
    document.getElementById("VENUE").style.color='#350f61';
    document.getElementById("ADDRESS").style.color='#350f61';
    document.getElementById("RSVP").style.color='#350f61';
    let classNames = document.getElementsByClassName("INFO");
    for (let i = 0; i < classNames.length; i++) {
    classNames[i].style.color= "#C0C0C0";}
}     
    
function aceFunction() {
    document.getElementById("item3").style.backgroundImage= 'linear-gradient(rgb(0,0,0), rgba(0, 0, 0, 36), white, rgb(128, 0, 128))';
    document.getElementById("INVITED").style.color='rgb(128, 0, 128)';
    document.getElementById("INTRO").style.color='#D4AF37';
    document.getElementById("NAME1").style.color='rgb(128, 0, 128)';
    document.getElementById("NAME2").style.color='rgb(128, 0, 128)';
    document.getElementById("DATE").style.color='black';
    document.getElementById("TIME").style.color='black';
    document.getElementById("VENUE").style.color='black';
    document.getElementById("ADDRESS").style.color='black';
    document.getElementById("RSVP").style.color='black';
    let classNames = document.getElementsByClassName("INFO");
    for (let i = 0; i < classNames.length; i++) {
    classNames[i].style.color= '#fcc214';}                 
}
  
function lesbianFunction() {
    document.getElementById("item3").style.backgroundImage= 'linear-gradient(rgb(214, 41, 0), rgb(255, 155, 85), white, rgb(212, 97, 166), rgb(165, 0, 98))';
    document.getElementById("INVITED").style.color='#500e9c';
    document.getElementById("INTRO").style.color='#500e9c';
    document.getElementById("NAME1").style.color='#500e9c';
    document.getElementById("NAME2").style.color='#500e9c';
    document.getElementById("DATE").style.color='#500e9c';
    document.getElementById("TIME").style.color='#500e9c';
    document.getElementById("VENUE").style.color='#500e9c';
    document.getElementById("ADDRESS").style.color='#500e9c';
    document.getElementById("RSVP").style.color='#500e9c';
    let classNames = document.getElementsByClassName("INFO");
    for (let i = 0; i < classNames.length; i++) {
    classNames[i].style.color= '#500e9c';}
}     

    