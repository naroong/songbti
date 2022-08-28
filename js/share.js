const btnShareTw = document.querySelector('#shareTw');

btnShareTw.addEventListener('click', () => {
  const sendText = '눈송마을 속 나는 어떤 주민일까? %23송BTI  %23눈송마을  %23나는_무슨송이일까';
  const pageUrl = 'https://songbti2.netlify.app/index.html';
  window.open(`https://twitter.com/intent/tweet?text=${sendText}&url=${pageUrl}`);
})


const btnShareFb = document.querySelector('#shareFb');

btnShareFb.addEventListener('click', () => {
    const pageUrl = 'https://songbti2.netlify.app/index.html';
    window.open(`http://www.facebook.com/sharer/sharer.php?u=${pageUrl}`);
})



function kakaoShare(){
    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '송BTI',
          description: '눈송마을 속 나는 어떤 주민일까?',
          imageUrl:
            'https://smwufestival2022mbti.netlify.app/img/cover.png',
          link: {
            mobileWebUrl: 'https://songbti2.netlify.app/index.html',
            androidExecutionParams: 'test',
          },
        },
      });
}






function clip(){

	var url = 'https://songbti2.netlify.app/index.html';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	url = 'https://songbti2.netlify.app/index.html';
	textarea.value = url;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("복사했송!")
}
