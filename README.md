# 포켓몬 도감 프로젝트

### TypeScript와 React 프레임워크 Next.js를 사용한 프로젝트입니다. 

## 시작하기

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) 에서 확인해 보실 수 있습니다. 


## 구현 기능

- 포켓몬 순서에 맞게 포켓몬 목록이 나오는 메인 화면
- 포켓몬 번호 검색 기능
- 무한 스크롤 페이지네이션
- 메인 화면에서 포켓몬을 눌렀을 때 디테일 화면
- 포켓몬 정보와 진화단계가 보여지는 디테일 화면
- 캐시 및 렌더링 최적화
- 메인 화면과 디테일 화면 SEO 최적화
- 포켓몬 한글 이름 출력


## 프로젝트 구조

```bash
├── .next
├── node_modules
├── public
├── src
│   ├── app
│   ├── axios
│   ├── components
│   ├── hooks
│   ├── models
│   ├── recoil
│   ├── services
│   ├── utils
│   └── views
├── .gitignore
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── postcss.config.js
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

### 프로젝트 핵심 구조 설명
`hooks` 기반으로 `APP` 레이어, `Service` 레이어, `Hook` 레이어, `View` 레이어로 나누어 역할과 책임을 분리하였습니다. 
#### App - 도메인별 화면을 구성하는 기준이 되고, SEO와 서버사이드렌더링, 데이터 프리패칭을 처리합니다.  
#### Service - 서버에서 데이터를 패칭하는 API 역할을 하고 데이터를 가공하여 최종적으로 View에서 사용할 수 있는 데이터를 반환합니다. 
#### Hook - UI 로직을 담당하는 helpers와 서버 데이터를 관리하는 query로 구성됩니다. 
#### View - App 화면에서 보여지는 유저의 행동에 대응하는 컴포넌트 전체를 통칭합니다.  

## 기술 스택
```bash
- Next.js (v13.4.19)
- Tailwindcss (v3.3.3)
- TypeScript (v5.2.2)
- React-query (v4.33.0)
- Recoil (v0.7.7)
```
