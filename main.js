// day / night mode 기능
const background = document.querySelector('body');
const introText = document.querySelector('.introduce-text');
const infoText = document.querySelector('.information-text');
const footText = document.querySelector('.footer-text');

 document.getElementById('modeBtn').addEventListener('click', function(){
  toggleText = document.getElementById('modeState');
  if (toggleText.innerText === 'Day') {
    toggleText.innerText = 'Night';
    background.style.backgroundColor = 'black';
    background.style.color = 'white';
    introText.style.color = 'white';
    infoText.style.color = 'white';
    footText.style.color = 'white';
    document.querySelector('.title-container').style.filter = 'invert(100%)';
    document.querySelector('.social-img').style.filter = 'invert(100%)';
    document.querySelector('.myhobby-sport').style.filter = 'invert(100%)';
    document.querySelector('.myhobby-wardrobe').style.filter = 'invert(100%)';
  } else {
    toggleText.innerText = 'Day';
    background.style.backgroundColor = 'white';
    background.style.color = 'black';
    introText.style.color = 'black';
    infoText.style.color = 'black';
    footText.style.color = 'black';
    document.querySelector('.social-img').style.filter = 'invert(0%)';
    document.querySelector('.title-container').style.filter = 'invert(0%)';
    document.querySelector('.myhobby-sport').style.filter = 'invert(0%)';
    document.querySelector('.myhobby-wardrobe').style.filter = 'invert(0%)';
  }
});

// Remove Info! 토글버튼 클릭시 개인정보 삭제 활성/비활성 기능
const info = {
  infoTitle: document.getElementById('information_title'),
  infoName: document.getElementById('information_name'),
  infoMajor: document.getElementById('information_major'),
  infoHobby: document.getElementById('information_hobby'),
  infoAddress: document.getElementById('information_address')
}
let state = false;
document.getElementById('removeInfoBtn').addEventListener('click', function(){
  if(state === false){
    state = true;
    info.infoTitle.style.backgroundColor = "Black";
    info.infoName.style.backgroundColor = "Black";
    info.infoMajor.style.backgroundColor = "Black";
    info.infoHobby.style.backgroundColor = "Black";
    info.infoAddress.style.backgroundColor = "Black";
  } else{
    state = false;
    info.infoTitle.style.backgroundColor = "White";
    info.infoName.style.backgroundColor = "White";
    info.infoMajor.style.backgroundColor = "White";
    info.infoHobby.style.backgroundColor = "White";
    info.infoAddress.style.backgroundColor = "White";
  }
})

// Left, Right 버튼 클릭 시 이미지 변경 기능
let pic = document.getElementById('face');
let picNo = document.getElementById('picNo');
let i = 1;
document.getElementById('rightBtn').addEventListener('click', function(idx){
  if(idx){
    if(i == 4) return;
    i++;
  }
  pic.setAttribute("src", "./images/center/centerImg" + i + ".jpeg");
  picNo.innerHTML = i;
});
document.getElementById('leftBtn').addEventListener('click', function(idx){
  if(idx){
    if(i==1) return;
    i--;
  }
  pic.setAttribute("src", "./images/center/centerImg" + i + ".jpeg");
  picNo.innerHTML = i;
});