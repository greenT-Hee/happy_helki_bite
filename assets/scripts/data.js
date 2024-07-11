const qList = [
  {
    question : "육류와 해산물 중 선호도는?",
    answer : [
      {answer : "뜯고 씹고 맛보고, 고기가 최고지", type: [2,5,14,15,16,19,20]},
      {answer : "담백한 해산물이 더 좋아", type: [3,4,6,7,8,13,17,21,22]},
      {answer : "고를 수 없어", type: [1,9,10,11,12,18]},
    ],
    image: "./assets/images/question-1.png"
  },
  {
    question : "주말 오전 10시 아점으로\n한식 or 브런치?",
    answer : [
      {answer : "한국인은 밥심이지", type: [1,2,3,4,5,6,7,8,13,14,15]},
      {answer : "밀가루가 최고야 짜릿해", type: [16,17,18,19,20,21,22]},
      {answer : "고를 수 없어", type: [9,10,11,12]},
    ],
    image: "./assets/images/question-2.png"
  },
  {
    question : "영하 10도 한파에도 얼죽아지!",
    answer : [
      {answer : "얼음 없는 커피는 그냥 검은 물이야", type: [10,11,12,16,17,18,19,20,21,22]},
      {answer : "뜨끈한~ 검은물 주세요", type: [9,13,14,15]},
      {answer : "고를 수 없어", type: [1,2,3,4,5,6,7,8]},
    ],
    image: "./assets/images/question-3.png"
  },
  {
    question : "스트레스를 받으면\n엽떡처럼 매운맛이 땡겨?",
    answer : [
      {answer : "매운 음식을 먹으면 기분이 좋아", type: [9,14,15]},
      {answer : "나는 맵찔이라 오히려 힘들어", type: [1,2,3,4,5,6,7,8,10,13,16,17,18,19,20,21,22]},
      {answer : "고를 수 없어", type: [11,12]},
    ],
    image: "./assets/images/question-4.png"
  },
  {
    question : "이번 여름 이열치열 어때?",
    answer : [
      {answer : "더워 죽겠어, 시원한 냉면이나 먹을래", type: [10,11,12,16,17,18,19,20,21,22]},
      {answer : "삼계탕으로 땀 흘리며 원기회복", type: [9,13,14,1]},
      {answer : "고를 수 없어", type: [1,2,3,4,5,6,7,8]},
    ],
    image: "./assets/images/question-5.png"
  },
  {
    question : "아삭아삭한 식감을 좋아해?",
    answer : [
      {answer : "응 나는 쩝쩝박사야", type: [6,12,16,17,18,19,20,21,22]},
      {answer : "내향형이라 조용한 음식이 좋아", type: [1,2,3,4,5,7,8]},
      {answer : "보통이야", type: [9,10,11,13,14,15]},
    ],
    image: "./assets/images/question-6.png"
  }, 
  {
    question : "하루에 커피를 몇 잔 마셔?",
    answer : [
      {answer : "3 잔 이상", type: [16,17,18,19,20,21,22]},
      {answer : "1~2 잔", type: [1,2,3,4,5,6,7,8,]},
      {answer : "커피를 즐기지 않아", type: [9,10,11,12,13,14,15]},
    ],
    image: "./assets/images/question-7.png"
  },
  {
    question : "식사시간이 항상 넉넉한 편이야?",
    answer : [
      {answer : "나는 멋진 배짱이야", type: [9,13,14,15]},
      {answer : "바쁘다 바빠 현대 사회", type: [1,2,3,4,5,6,7,8,20,21,22]},
      {answer : "항상 일정하지 않아", type: [10,11,12,16,17,18,19]},
    ],
    image: "./assets/images/question-8.png"
  },
  {
    question : "불금에 먹는 치킨,\n가장 먼저 먹는 부위는?",
    answer : [
      {answer : "퍽퍽해도 양 많은 닭가슴살", type: [2,3,4,13,14,15,16,19,20,21]},
      {answer : "절대 지켜 닭다리", type: [1,5,6,7,8,18,22]},
      {answer : "항상관 없어, 다 맛있으니까", type: [9,10,11,12,17]},
    ],
    image: "./assets/images/question-9.png"
  },
  {
    question : "해장은 얼큰한 짬뽕?\n고기 패티 두툼한 햄버거?",
    answer : [
      {answer : "칼칼한 얼큰파야", type: [9,11,12,14,15]},
      {answer : "나는 느끼파야", type: [3,4,5,6,8,13,21]},
      {answer : "숙취를 느낀 적이 없어", type: [1,2,7,10,16,17,18,19,20,22]},
    ],
    image: "./assets/images/question-10.png"
  },
]

const menuList = [
  {
    id:1, 
    title: "키토 김밥", 
    desc: ""
  },
  {
    id:2, 
    title: "닭가슴살 김밥", 
    desc: ""
  },
  {
    id:3, 
    title: "참치 김밥", 
    desc: ""
  },
  {
    id:4, 
    title: "연어 김밥", 
    desc: ""
  },
  {
    id:5, 
    title: "베이컨 김밥", 
    desc: ""
  },
  {
    id:6, 
    title: "묵은지 참치 김밥", 
    desc: ""
  },
  {
    id:7, 
    title: "현미강황 크래미 김밥", 
    desc: ""
  },
  {
    id:8, 
    title: "현미강황 연어 김밥", 
    desc: ""
  },
  {
    id:9, 
    title: "저당 스리라차 떡볶이", 
    desc: ""
  },
  {
    id:10, 
    title: "저당 메밀 물냉면", 
    desc: ""
  },
  {
    id:11, 
    title: "저당 메밀 비빔냉면", 
    desc: ""
  },
  {
    id:12, 
    title: "저당 쫄면", 
    desc: ""
  },
  {
    id:13, 
    title: "라이트 참치 덮밥", 
    desc: ""
  },
  {
    id:14, 
    title: "스리라차 닭가슴살 덮밥", 
    desc: ""
  },
  {
    id:15, 
    title: "스리라차 불고기 덮밥", 
    desc: ""
  },
  {
    id:16, 
    title: "닭가슴살 샐러드", 
    desc: ""
  },
  {
    id:17, 
    title: "쉬림프 샐러드", 
    desc: ""
  },
  {
    id:18, 
    title: "아보카도 샐러드", 
    desc: ""
  },
  {
    id:19, 
    title: "불고기 샐러드", 
    desc: ""
  },
  {
    id:20, 
    title: "라이트 닭가슴살 브리또", 
    desc: ""
  },
  {
    id:21, 
    title: "라이트 참치 브리또", 
    desc: ""
  },
  {
    id:22, 
    title: "라이트 크래미 브리또", 
    desc: ""
  },
]