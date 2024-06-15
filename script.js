function boxFun1(){ document.getElementById("box5").style.zIndex = "1";
}
function boxFun2(){ document.getElementById("box2").style.zIndex = "1";
}
function boxFun3(){ document.getElementById("box3").style.zIndex = "1";
}
function boxFun4(){ document.getElementById("box4").style.zIndex = "1";
}
const n = document.getElementById('noBtn')
n.addEventListener("mouseover", noBtnFun)
function noBtnFun(){
  const i = Math.floor(Math.random()*100)+1;
  const j = Math.floor(Math.random()*100)+1;
  n.style.marginLeft=i+"px";
  n.style.marginTop=j+"px";
}
