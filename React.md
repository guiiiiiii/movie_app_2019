# React 사용해보기

---



#### 시작하기

- VSC termenal에 npm start 또는 yarn start를 치면 react 실행

  > > > > > > >이 때 npm과 yarn은 같은말
  > > > > > > >
  > > > > > > >

- node.js에 설치하는 방법은 npm i _____

  `npm i prop-types`



#### JSX

`const element = <h1>Hello, world!</h1>;`

- 위와같은 태그문법을 JSX라고 부르며 이는 자바스크립트의 문법 확장이다

- JSX는 React Component를 만들어주는 역할을 한다.

- JSX안에 자바스크립트 표현식을 중괄호 즉, {}로 묶어서 포함시킬 수 있다

  ```react
  const element = (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  );
  ```

#### component

- conponent는 html을 변환하는 함수라고 생각할 수 있다

- React App은 여러 component를 가질 수 없다

  

  예를들면

  `ReactDOM.render(<App />, document.getElementById('root'));` 

  는 가능하지만

  `ReactDOM.render(<App , Potato/>,`

  `document.getElementById('root'));`는 불가능하다.

#### map

- map은 javascript에서 사용하는 함수이다

  foodILike라는 object가 있을 때 이 object안의 모든 객체들에 대해 함수를 적용하고 싶을때 map을 사용한다.

  `foodILike.map(function(dish){`

  ` return <Food fav={dish.name} image={dish.image}/>;`

  `})`

  또는

  `foodILike.map(dish =>`

  ` <Food fav={dish.name} image={dish.image}/> `

  `)` 와 같이 사용할 수 있다.

  ___ 주의할 점으로는 react안에서 위와같이 javascript함수를 사용하고자 할 때에는 <i>{}안에</i>  사용해주어야 한다.___

  ex)

  `{foodILike.map(function(dish){`

  ` return <Food fav={dish.name} image={dish.image}/>;`

  `})}`

  

#### PropTypes(유효성 검사)

- prop-types 라이브러리를 설치하여 사용 `npm i prop-types`
- 앱의 커짐에 따라 타입체크를 통하여 많은 버그를 잡을 수 있는데, <b>React에서는 이러한 타입체크를 할수있게끔 빌트인이 되어있다</b>
- Food라는 객체의 타입체킹이 하고싶다 가정하자

> > > ​		`Food.propTypes={`
> > >
> > > ​		`fav:PropTypes.string.isRequired,`
> > >
> > > ​		`image:PropTypes.string.isRequired,`
> > >
> > > ​		`rating:PropTypes.number.isRequired`
> > >
> > > ​		`}` 
> > >
> > > ​	이런 식으로 타입체크를 할 수 있다.

