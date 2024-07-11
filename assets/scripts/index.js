const totalStep = 10;
let idx;
const $question = document.querySelector('#question');
const $image = document.querySelector('#question-img');
const $totalStep = document.querySelector('#total-step');
const $currentStep = document.querySelector('#current-step');
const $loadingStatus = document.querySelector('.loading-status');
const $answerBox = document.querySelector('#answer-box');
const $prevBtn = document.querySelector('#btn-prev');
const loadList = () => {
  if(idx >= 10) return;
  const question = qList[idx].question;
  const answer = qList[idx].answer;
  const image = qList[idx].image;
  if(idx === 9) $loadingStatus.style.borderRadius = '32px';
  if(idx === 0) {
    $prevBtn.style.display = 'none';
  } else {
    $prevBtn.style.display = 'block';
  }
  $answerBox.innerHTML = "";
  $loadingStatus.style.width = ((idx + 1) / totalStep) * 100 + '%';
  $totalStep.textContent = totalStep;
  $currentStep.textContent = idx + 1;
  $question.textContent = question;
  $image.setAttribute('src', image);
  $image.setAttribute('alt', '질문' + (idx + 1) + '썸네일');
  answer.forEach((ele) => {
    const $btn = document.createElement('button');
    $btn.textContent = ele.answer;
    $answerBox.append($btn);
  });
      
      
  const $answerBtn = document.querySelectorAll('#answer-box > button');
  $answerBtn?.forEach(ele => {
    ele.addEventListener('click', () => {
      idx += 1;
      loadList();
    })
  });
}
$prevBtn?.addEventListener('click', () => {
    idx -= 1;
    loadList();
})

const loadFlash = () => {
  const $flash = document.querySelector('section.start');
  const $btnStart = document.querySelector('.start-btn');
  const $question = document.querySelector('section.question');
  $flash.style.animation = 'fadeIn 2s';
  $btnStart.addEventListener('click', () => {
    idx=0
    loadList();
    $flash.style.animation = '0.5s fadeOut ease-in-out';
    setTimeout(() => {
      $flash.style.display = 'none';
      $question.style.display = 'block';
      $question.style.animation = '0.5s fadeIn ease-in';
    },500)
  })
};


window.addEventListener('load', () => {
  if(!location.href.includes('result'))loadFlash();
})