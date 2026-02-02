## 🎮 미니게임
숫자 맞히기, 반응 속도 테스트, 상식 퀴즈까지 총 3가지 미니 게임으로 구성된 웹 게임 프로젝트입니다. 간단하게 즐기며 결과를 바로 확인해보세요!
### [▶️ 게임 플레이하기](https://mini-game-black.vercel.app/)

<br />

## 📆 프로젝트 기간
2025.12.29 ~ 2026.01.21 (약 3주)
<br />
피드백을 반영하며 지속적으로 개선 중입니다.

<br />

## ✅ 기능 소개
### 1️⃣ 숫자 맞히기 게임
<img width="1912" height="902" alt="image" src="https://github.com/user-attachments/assets/c3a06d07-4113-4530-b2f0-d93d3dd5a6d7" />
1부터 100까지의 숫자 중 하나를 추측하여 맞히는 게임입니다.

- 총 10번의 기회가 주어집니다.
- 남은 기회가 5번 이하일 경우, 최대 3번의 힌트를 제공하여 문제 해결을 돕습니다.

<br />

### 2️⃣ 반응 속도 테스트
<img width="1918" height="903" alt="image" src="https://github.com/user-attachments/assets/789f9ddf-8522-402a-a480-b4175cbd006b" />
<img width="1915" height="900" alt="image" src="https://github.com/user-attachments/assets/8dc9610f-22b1-4815-b54f-0bb8260ce4c1" />
화면을 클릭하여 사용자의 반응 속도를 측정하는 게임입니다.

- 총 5번의 기회가 주어집니다.
- 핑크색 화면에서 초록색 화면으로 변경되는 순간 클릭합니다.
- 5번의 반응 속도를 평균 내어, 상위 몇 퍼센트의 반응 속도인지 결과를 확인할 수 있습니다.

<br />

### 3️⃣ 상식 퀴즈
<img width="1916" height="897" alt="image" src="https://github.com/user-attachments/assets/e525375d-916b-4df7-ae46-366241ec6335" />
<img width="1918" height="900" alt="image" src="https://github.com/user-attachments/assets/1bbaab14-8d69-4517-8d7e-7d5aaed6af1a" />
다양한 문제를 통해 나의 상식 수준을 확인할 수 있는 퀴즈 게임입니다.

- 총 10개의 문제가 주관식과 객관식으로 구성되어 있습니다.
- 각 문제를 풀고 즉시 정답을 확인할 수 있습니다.
- 정답률을 기준으로 나의 상식 수준을 확인할 수 있습니다.

<br />

## 💡 구현 포인트
### 🎯 숫자 맞히기 게임
- 게임 시작 시 랜덤 숫자를 생성하여 매번 다른 결과를 경험할 수 있도록 구현했습니다.
- 재시작 시 상태를 초기화하여 이전 플레이의 영향을 받지 않도록 했습니다.

### ⚡ 반응 속도 테스트
- 여러 번의 측정 결과를 평균으로 계산하여, 단발성 결과보다 신뢰도를 높였습니다.

### 🏅 상식 퀴즈
- 전체 문제 데이터 중 일부를 랜덤으로 추출하여 매번 다른 문제 조합을 제공했습니다.
- 문제 → 결과 → 다음 문제 흐름을 phase 단위로 관리했습니다.

<br />

## 🛠️ 기술 스택
### Frontend
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38BDF8?logo=tailwindcss&logoColor=white)

### Build & Tooling
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)





