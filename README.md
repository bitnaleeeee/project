# 팀명 우솝


# 1. 팀 소개

---

### 팀 명을 작성해주세요

<aside>
👉 우 솝

</aside>

### 팀원 소개를 작성해주세요

<aside>

### 프론트엔드

김준호
소재현
이빛나

### 백엔드

류예린
이상엽
이상우

</aside>

# 2. 서비스 소개

---

### 우리 서비스의 핵심 강점을 강조하여, 소개 문구를 작성합니다

<aside>
👉 소비자에게 소비를 유도하는 보기  편안한 직관적이고 깔끔한 UI 구성

</aside>

### 제공하는 메인 서비스를 소개해주세요

<aside>
👉 소비자 구매 유도를 높일 수 있는 타입별 제품 추천 기능 및 제품 상세 안내

</aside>

# 3. 필수 구현 사항

---

### 이번 프로젝트에서 꼭 구현하고 싶은 기능을 정리해주세요

<aside>
👉 1. 사용자 회원가입 기능 
2. 사용자 로그인 기능
3. nav bar (카테고리)
4. 상품 목록 페이지
   - 필터링
   - 정렬
   - 페이지네이션
5. 상품 상세 페이지
  - !) 상품 상세 설명 이미지 X
6. 장바구니 기능
  - 장바구니에 상품 추가 기능
  - 장바구니에 추가된 상품 수정 기능
  - 장바구니에 추가된 상품 조회 기능
  - 장바구니에 추가된 상품 삭제 기능

</aside>

# 4. 추가 구현 사항

---

### 핵심 기능 외에 추가적으로 구현하고 싶은 기능을 정리해주세요

<aside>
👉 
7. 검색 기능 </br>
8. 주문 기능 </br>
  - 결제 제외 </br>
9. 사랑받는 제품 조회 </br>
——————————————————————————————————————————————
10. 상품 별점 - 상품 추천 기능 </br>
11. 상품 리뷰 기능 </br>
12. 비회원 </br>
13. 스토어 </br>
14. 검색

</aside>

<aside>
🧭 **[Example]** 
1. 자주 묻는 질문 구현하기 </br>
2. 실제 결제 구현하기

</aside>



# 5. 개선 사항

---

### 현재 서비스에서 개선하고자 하는 점을 작성해주세요

<aside>
👉 상품 좋아요 기능

</aside>

<aside>
🧭 **[Example]**
1. 개별 작품 소개 페이지로 진입할 때, 로딩 이미지가 없어서 지루하다고 생각해서 로딩될 때를 알려주는 아이콘을 넣고 싶다. </br>
2. 작품 찜하기를 상세 페이지에서만 할 수 있는데, 리스트에서도 할 수 있도록 만들고싶다. </br>
3. 결제를 구현하기 어려우니, 유저가 가입하면 기본 포인트를 주고, 결제를 하면 포인트가 차감되는 형식으로 기획을 바꾸고 싶다.

</aside>

# 6. 백엔드팀 개발 프로세스

---

`공통`

- 매일 코드 리뷰 시간 : 오전 10시 - 오후 12시 30분

`이번주`

- 화 - 초기세팅 / 확정된 기획을 기반으로 ERD 작성 (회원, 상품, 장바구니, 주문)
- 수 - 오후 2시 모델링 리뷰 → ERD 확정 / dbmate를 사용해서 database 구축 (PR도 올려주세요.)
- 목 - 1차 데이터를 구축
  - csv 파일 형태로 상품 정보.csv, 유저 정보.csv 등등
  - uploader.js 파일을 만들어서, csv 파일을 열어서 database에 데이터를 저장할 수 있는 스크립트 작성
- 금 - 2차 데이터를 구축 / 기능 개발

`다음주`

- 월~목요일까지 기능 개발
- AWS 학습 후 목요일에 서비스 배포
- 금요일 오전에 프로젝트 발표
