# percentage calculator

[<img src="readmeRes/1.jpg">](https://search.naver.com/search.naver?query=%EB%84%A4%EC%9D%B4%EB%B2%84+%ED%8D%BC%EC%84%BC%ED%8A%B8+%EA%B3%84%EC%82%B0%EA%B8%B0)

- 리액트로 만드는 네이버 퍼센트 계산기

## 결과

[![결과](readmeRes/2.jpg)](https://chinsun9.github.io/react-percentage-calculator/)

- https://chinsun9.github.io/react-percentage-calculator/

## 해결한 문제

### 부동소수점 계산 문제

> 1.9 \* 100 \* 0.01 = 1.9000000000000001  
> 0.1 + 0.2 = 0.30000000000000004

- mathjs 라이브러리를 사용해서 해결

## typescirpt에서 mathjs 사용하기

```command
yarn add mathjs
yarn add @types/mathjs -D
```

- mathjs만 설치하면 타입정의가 없기때문에 @types/mathjs 보조 라이브러리 설치

```ts
// import * as math from 'mathjs';
import { create, all } from 'mathjs';

const mathF = create(all, { number: 'Fraction' }) as math.MathJsStatic;
```

- 그냥 기본값으로 사용하려면 `import * as math from 'mathjs'`로 불러와 사용
- default export가 없어서 `import math from 'mathjs'`이런식으로 사용불가.
  - `Attempted import error: "mathjs" does not contain a default export`

* 지정 config를 적용해 사용하려면 create 메소드 사용
* `create(all, { number: 'Fraction' }) as math.MathJsStatic`
* as 키워드로 타입을 명시하지 않으면 undefined 에러 발생
  - `Cannot invoke an object which is possibly 'undefined'`

## 리액트 타입스크립트 시작하는 방법

```cmd cmd
npx create-react-app ts-react-redux-tutorial --typescript
cd ts-react-redux-tutorial
yarn add redux react-redux @types/react-redux
```

## 리액트 타입스크립트 공부

- [리액트 프로젝트에서 타입스크립트 사용하기](https://velog.io/@velopert/using-react-with-typescript)

## 리액트 공부

- [생활코딩 ; React - 15.1. State 소개](https://youtu.be/rOpg2KUPW2M)

- props ; 사용자에게 중요한 정보 ; 외부
- state ; 개발자에게 중요한 정보 ; 내부적으로 사용되는 변수
- 프롭스와 스테이트가 철저하게 분리되어있다. 좋은부품을 만드는데 핵심.
- 스테이트는 사용자로부터 가려짐.

## 리액트앱 깃허브에 올리기

- [React 프로젝트 GitHub Pages 배포하기](https://velog.io/@byjihye/react-github-pages)
- gh-pages
