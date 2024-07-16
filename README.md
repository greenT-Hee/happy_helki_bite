#  🍀 happy_helki_bite
### 🥕 건강식품 브랜드 헬키푸키 메뉴를 추천하고, 공유 할인 프로모션이 가능한 심리테스트형 마케팅 서비스

**1) 개요**

- **기간 :** 2024.07.(3일)
- **Stack :**  `HTML` `CSS3` `JavaScript`
- **배포**: Netlify
- **바로가기 링크:  https://helkibite.netlify.app/**
- **깃헙 링크:**  https://github.com/greenT-Hee/happy_helki_bite

<br>

**2) 구현 기능**
- 10가지 질문을 통한 메뉴 별 가중치 계산 후 결과 페이지 도출
- 결과 페이지에서 쿠폰 할인 랜덤 코드 발급

<br>

**3) 디자인**

<div>
  <img src="" alt="시작화면">
  <img src="" alt="질문화면">
  <img src="" alt="결과화면">
  <img src="" alt="이벤트화면">
</div>

<br>

**3) 이슈 & 해결**
- 가중치 계산을 위한 알고리즘 구성 비효율성 개선
    
    수정 전: 사용자가 답을 선택할 때마다 불필요하게 메뉴리스트 데이터 호출 및 반복문 실행
    
    수정 후:  빈 배열에 메뉴 개수만큼 0을 할당하고, 사용자가 선택하면 메뉴리스트의 id와 같은 위치에 있는 index에 1씩 증가 시키는 방식으로 수정
    

**4) 인사이트**
- 알고리즘 연습을 통해, 코드 효율 개선을 경험함