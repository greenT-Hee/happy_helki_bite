const totalStep = 10;
const select = new Array(22);
let targetArr = [];
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
      
  // 정답을 선택
  const $answerBtn = document.querySelectorAll('#answer-box > button');
  $answerBtn?.forEach((ele, order) => {
    ele.addEventListener('click', () => {
      // 가중치 추가
      if(idx === 9) {
        const shareCode = randomCode();
        let result = calculateResult();
        let random = Math.floor(Math.random() * (result.length -1));
        location.href = '../pages/result-' + parseInt(result[random] + 1).toString() + '.html?&' + shareCode;
      }
      targetArr = qList[idx].answer[order].type;
      targetArr.map(ele => select[ele - 1] += 1);
      // 다음 넘기기
      idx += 1;
      loadList();
    })
  });
}

const calculateResult = () => {
  // let result = select.indexOf(Math.max(...select));
  let max = Math.max(...select);
  let result = [];
  select.forEach((ele, idxOfResult) => {
    if(ele === max) result.push(idxOfResult)
  })
  return result;
}

const copyCode = (content, msg) => {
    navigator.clipboard.writeText(content)
    .then(() => alert(msg))
    .catch(() => {alert('코드 복사에 실패아였습니다.'); console.log(err)})
}
const $shareBox = document.querySelector(".share-btns-box");
$shareBox?.addEventListener('click', (e) => {
  if(e.target.id === 'btn-copy-code') {
    const code = document.querySelector('.code-box > p').textContent;
    copyCode(code, "코드가 복사되었습니다.");
  }
  if(e.target.id === 'btn-url') {
    const url = location.href;
    copyCode(url, "url이 복사되었습니다.");
  }
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


const randomNum = () => {
  return Math.floor(Math.random() * 10);
}
const randomTxt = () => {
  return Math.random().toString(36).substring(2, 12);
}
const randomCode = () => {
  const radomCode = randomNum() + randomTxt() + randomNum();
  return radomCode;
}


const getCoupon = () => {
  const $eventModal = document.querySelector('#event-modal');
  const $closeBtn = document.querySelector('#btn-close');
  const $input = document.querySelector('#code-input');
  const $startDate = document.querySelector('#start-date');
  const $endDate = document.querySelector('#end-date');
  if(!$input.value) {
    alert('코드를 입력해주세요.')
    return;
  };
  // if($input.value != localStorage.getItem('code')) {
  //   alert('유효한 코드번호가 아닙니다.');
  //   return;
  // }

  $eventModal.style.display = 'block';
  $closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    $eventModal.style.display = 'none';
  });

  const date = new Date();
  let today = date.toLocaleDateString().replaceAll(' ', '');
  let nextMonth = new Date(date.setMonth(date.getMonth() + 1)).toLocaleDateString().replaceAll(' ', '');
  $startDate.textContent =today;
  $endDate.textContent = nextMonth;
}

window.addEventListener('load', () => {
  if(!location.href.includes('pages')) {
    for(let i = 0; i < select.length; i++) {
      select[i] = 0
    }
    loadFlash();
  }

  // 결과 페이지
  if(location.href.includes('result')) {
    const code = location.search.split('&')[1];
    const $codeP = document.querySelector('.code-box > p');
    if(!code) {
      alert("찰떡궁합 테스트를 먼저 진행해주세요.");
      location.href = '/';
      return;
    }
    $codeP.textContent = code;
  }
  // 쿠폰 페이지
  if(location.href.includes('coupon')) {
    const $btnGetCoupon = document.querySelector('#btn-coupon');
    $btnGetCoupon.addEventListener('click', () => getCoupon());
  }
  
})