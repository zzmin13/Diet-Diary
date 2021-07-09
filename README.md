#다다(Diet-Diary)

---

##프로젝트 설명
**다다**는 '다이어트 다이어리' 의 줄임말로 지어진 이름입니다.

다이어트는 현대인들에게 단순한 미용 목적의 체중 감량을 넘어서 '건강한 삶'을 위한 행위로서 중요한 의미를 갖습니다.

이러한 다이어트를 성공하기 위해 '기록' 은 매우 중요합니다.
어제 무엇을 먹었고 열량은 얼마나 섭취했고 운동을 얼마나했는지 정확히 기억하시나요? 그게 지난 주, 지난 달, 작년이라면 모두 기억이 날까요?

기록은 우리 삶을 돌아보게 만들며 앞으로 나아갈 기초를 쌓게 만들어줍니다.
다이어트도 마찬가지입니다. 기록을 하면 원인을 파악하고 더 나은 변화를 만들어낼 수 있습니다.

다이어트를 기록하는 것만으로도 기록하지 않은 사람보다 체중 감소 효과가 크다는 사실 알고 계신가요? 이미 많은 연구가 이를 증명하고 있습니다.

먹은 음식을 기록하는 것 뿐만 아니라 음식과 그 날 한 운동에 대한 열량을 계산하여 기록하는 것은 스스로 책임감을 부여하기 때문에 다이어트에 훨씬 도움이 된다고 합니다.

다다는 이러한 생각 속에서 개발된 다이어트 기록을 위한 웹 어플리케이션입니다.

다다와 함께 식단기록, 운동기록, 신체기록을 남겨보세요.

##Development Environment

- React 17.0.2
- Redux 4.1.0
- Firebase 8.6.3
- Moment 2.29.1
  ##Prerequisite
  실행하기 위해 필요한 node_modules를 다음과 같은 명령어를 통해 다운받을 수 있습니다.

```
npm install
```

또는

```
yarn install
```

##실행 방법
node_modules를 설치하셨다면 다음과 같은 명령어를 통해 실행할 수 있습니다.

```
npm start
```

또는

```
yarn start
```

##주요 기능 설명
####Home (/ , /home)
홈 화면

- '지금 시작하기' 버튼을 누르면 로그인 페이지로 이동합니다.
- 헤더의 로그인 또는 회원가입 버튼을 누르면 나오는 모달창을 통해서도 시작할 수 있습니다.

![home 페이지 사진](page_description_image\home.png)

####Login (/login)
로그인 페이지

- 다다 내에서 직접 가입한 이메일과 패스워드를 통해 로그인하는 기능
- SNS 계정으로도 로그인이 가능합니다. (구글, 깃허브, 페이스북)
- Join 또는 가입하기 링크를 통해 join 페이지로 이동합니다.
- 'Forgot your ID / Password?' 링크를 통해 비밀번호 재설정 페이지로 이동합니다.

![login 페이지 사진](page_description_image\login.png)

###Find (/find)
비밀번호 재설정 페이지

- 다다 내에서 직접 가입한 이메일 계정이 있다면 해당 계정으로 비밀번호 재설정 이메일을 전송하는 페이지 입니다.

![find 페이지 사진](page_description_image\find.png)
![find done 페이지 사진](page_description_image\find_done.png)
####Join (/join)
회원가입 페이지

- 다다 내에서 직접 이메일과 패스워드를 설정하여 가입하는 기능을 제공합니다.
- SNS 계정으로도 가입이 가능합니다. (구글, 깃허브, 페이스북)

![join 페이지 사진](page_description_image\join.png)

####Register(/register)
필수정보 등록 페이지
(가입하고 로그인 후 필수정보를 등록하지 않았을 때에만 나오는 화면으로, 한 번 필수정보를 등록하면 이후에는 나타나지 않습니다.)

- 유저의 성별, 키, 몸무게, 나이, 활동량 정보를 받아 DB에 저장합니다.
- 받은 정보를 기반으로 하여 하루권장칼로리를 계산합니다.

![register 페이지 사진](page_description_image\register.png)

<!-- Table -->

|  정보  |                   사진                    |
| :----: | :---------------------------------------: |
|  성별  | ![](page_description_image\register1.PNG) |
|  나이  | ![](page_description_image\register2.PNG) |
|   키   | ![](page_description_image\register3.PNG) |
| 몸무게 | ![](page_description_image\register4.PNG) |
| 활동량 | ![](page_description_image\register5.PNG) |

####Main (/main)
메인 다이어리 페이지

- 로그인 되어있는 상태라면 기본으로 메인 페이지로 이동하며 DB에서 유저의 정보를 불러옵니다.
- 유저가 입력했던 필수정보를 기반으로 계산된 하루 권장 칼로리가 이 화면에 표시됩니다.
- 메인 화면에서 달력으로 날짜를 선택할 수 있으며, 일기가 있는 날에는 핑크색 밑줄로 표시됩니다.
- 메인 다이어리에서 각 항목의 연필모양을 누르면 편집화면으로 이동합니다. (예를 들어 오늘의 식사 옆의 연필모양을 누르면 그 날의 식사 상세 페이지로 이동)
- 일기 삭제하기 버튼을 통해 일기를 삭제할 수 있습니다.
- 일기가 없는 날에는 '일기가 없습니다' 와 함께 일기 쓰기 버튼이 나타납니다.
- 달력에서 날짜 선택 후 네비게이션 바에서 일기, 식사, 물, 운동 선택 시 선택된 날짜의 활동을 볼 수 있습니다.
  ![main 페이지 사진1](page_description_image\main.png)
  ![main 페이지 사진2](page_description_image\main2.png)

####Diary 페이지 (/diary)
일기 페이지

- 메인 달력에서 선택된 날짜의 일기를 작성할 수 있습니다.
- 작성 완료를 누르면 DB와 상태에 즉각 반영됩니다.

![diary 페이지 사진](page_description_image\diary.png)

####Diet 페이지 (/diet)
식사 페이지

- 메인 달력에서 선택된 날짜의 식사를 상세히 볼 수 있습니다.
- '식사 검색하여 추가하기' 버튼을 누르면 (/diet/search) 페이지로 이동하며 식사 이름을 검색하여 추가할 수 있습니다.
- '식사 직접 추가하기' 버튼을 누르면 (/diet/directly) 페이지로 이동하며 직접 식사 이름과 양, 칼로리를 입력하여 추가할 수 있습니다.
- 추가된 식사 목록에서 연필모양을 누르면 (/diet/edit/:식사id) 식사 편집페이지로 이동하며 식사 정보를 수정할 수 있습니다.
- 추가된 식사 목록에서 X를 누르면 해당 식사를 삭제할 수 있습니다.

![diet 페이지 사진](page_description_image\diet.png)

####Diet Search 페이지(/diet/search)
식사 검색 페이지

- 식품 정보 api를 활용한 기능으로, 검색창에 식품 이름을 검색하면 식품 목록이 나옵니다.
- 식품 목록 중에 원하는 것을 클릭하면 선택된 항목에 표시되며 몇 인분인지 양을 조정할 수 있습니다.
- 식사 시간을 선택 후 추가하기 버튼을 누르면 상태가 반영됩니다.

![diet search 페이지 사진](page_description_image\diet-search_2.PNG)

####Diet Directly 페이지(/diet/directly)
식사 직접 추가 페이지

- 음식명, 음식량, 칼로리, 식사 시간을 입력 후 추가하기 버튼을 누르면 직접 식사를 추가할 수 있습니다.

![diet directly 페이지 사진](page_description_image\diet-directly.png)

####Water 페이지(/water)
물 페이지

- 메인 달력에서 선택된 날짜에 기록된 물을 상세히 볼 수 있습니다.
- 물 수정하기 버튼을 누르면 시간대별 물 양을 수정할 수 있는 페이지로 이동합니다. (/water/edit)
- 물 추가하기 버튼을 누르면 먹은 물의 양을 추가할 수 있는 페이지로 이동합니다. (/water/add)

![water 페이지 사진](page_description_image\water.png)

####Water Edit 페이지(/water/edit)
물 수정 페이지

- 시간대 별 먹은 물의 양을 수정할 수 있습니다.

![water edit 페이지 사진](page_description_image\water-edit.png)

####Water Add 페이지(/water/add)
물 추가 페이지

- 원하는 시간대에 먹은 물의 양을 추가할 수 있습니다.

![water add 페이지 사진](page_description_image\water-add.PNG)

####Exercise 페이지(/exercise)
운동 페이지

- 메인 달력에서 선택된 날짜에 기록된 운동을 확인할 수 있습니다.
- 작성된 운동 이름 옆의 연필 모양을 누르면 운동 정보를 편집할 수 있는 페이지로 이동합니다.(/exercise/edit)
- 작성된 운동 이름 옆의 X 를 누르면 해당 운동을 삭제할 수 있습니다.
- 운동 검색하여 추가하기 버튼을 누르면 운동을 검색하여 추가할 수 있는 페이지로 이동합니다.(/exercise/search)
- 운동 직접 추가하기 버튼을 누르면 운동 정보를 직접 입력하여 추가할 수 있는 페이지로 이동합니다.(/exercise/directly)

![exercise 페이지 사진](page_description_image\exercise.png)

####Exercise Search 페이지(/exercise/search)
운동 검색 페이지

- 운동을 검색하여 추가할 수 있는 페이지 입니다.
- 검색창에 운동 이름을 검색하면 검색결과를 기다릴 필요 없이 즉각적으로 나타나며 원하는 운동을 선택 후 시간을 조정하고 추가하기 버튼을 누르면 상태가 반영됩니다.

![exercise search 페이지 사진](page_description_image\exercise-search.png)

####Exercise Directly 페이지 (/exercise/directly)
운동 직접 추가 페이지

- 운동 정보를 직접 입력하여 추가할 수 있는 페이지입니다.

![exercise directly 페이지 사진](page_description_image\exercise-directly.png)

###Mypage 페이지(/mypage)
마이 페이지

- 헤더에서 로그인한 상태에서 보이는 원형의 프로필 사진을 누르면 마이페이지로 이동할 수 있는 버튼이 있습니다.
- 계정 설정, 비밀번호 변경, 건강 정보 설정, 회원 탈퇴 버튼이 있으며 누르면 각 페이지로 이동합니다.

![mypage 페이지 사진](page_description_image\mypage.png)

####Mypage - Account 페이지 (/mypage/account)
계정 설정 페이지

- 유저의 프로필 사진, 프로필 이미지, 닉네임을 변경할 수 있습니다.

![mypage account 페이지 사진](page_description_image\mypage-account.png)

####Mypage - Change Password 페이지 (/mypage/changepassword)
비밀번호 변경 페이지

- 이메일과 패스워드 방식으로 가입한 유저의 비밀번호를 변경할 수 있습니다.

![mypage changepassword 페이지 사진](page_description_image\changepassword.png)

####Mypage - health 페이지(/mypage/health)
건강정보 수정 페이지

- 처음에 등록했었던 건강정보를 수정할 수 있습니다.
- 하루 권장 칼로리를 직접 입력할 수도 있으며 아래에 입력한 키,몸무게 등 기본 정보에 의해 자동 계산 방식을 사용할 수도 있습니다.

![mypage health 페이지 사진](page_description_image\mypage-health.png)

####Mypage - withdrawal 페이지(/mypage/withdrawal)
회원탈퇴 페이지

- 동의 버튼을 체크한 후, 이메일과 패스워드 방식으로 가입한 유저는 비밀번호를 입력하고 SNS 계정으로 로그인한 유저는 다시 한번 인증을 받은 후 회원 탈퇴 버튼을 누르면 회원탈퇴 됩니다.

![mypage withdrawal 페이지 사진](page_description_image\withdrawal.png)

![mypage withdrawal done 페이지 사진](page_description_image\withdrawal-done.png)
