# React 사용해보기

---



#### 시작하기

- VSC termenal에 npm start 또는 yarn start를 치면 react 실행

  > > > > > > >이 때 npm과 yarn은 같은말

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

- React App은 여러 component를 가질 수 없다 (ReactDOM)

  

  예를들면

  `ReactDOM.render(<App />, document.getElementById('root'));` 

  는 가능하지만

  `ReactDOM.render(<App , Potato/>,`

  `document.getElementById('root'));`는 불가능하다.

> #### map
>
> - map은 javascript에서 사용하는 함수이다
>
>   foodILike라는 object가 있을 때 이 object안의 모든 객체들에 대해 함수를 적용하고 싶을때 map을 사용한다.
>
>   `foodILike.map(function(dish){`
>
>   ` return <Food fav={dish.name} image={dish.image}/>;`
>
>   `})`
>
>   또는
>
>   `foodILike.map(dish =>`
>
>   ` <Food fav={dish.name} image={dish.image}/> `
>
>   `)` 와 같이 사용할 수 있다.
>
>   _주의할 점으로는 react안에서 위와같이 javascript함수를 사용하고자 할 때에는 <b>{}안에</b>  사용해주어야 한다._
>
>   ex)
>
>   `{foodILike.map(function(dish){`
>
>   ` return <Food fav={dish.name} image={dish.image}/>;`
>
>   `})}`



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



#### state

- state 는 동적 데이터와 함께 작업할 때 만들어진다. 
- 변하는 데이터, 존재하지 않는 데이터

> #### Class Component
>
> - 지금까지는 function component을 사용하여 screen에 표시해 왔다. 하지만 또다른 방법이 있는데 바로 class component
> - class component를 사용하기 위해서는 <b>React.Component</b> 를 상속받는 class를 생성하여 사용하면 된다.
>
> > - `class app extends React.Component`
>
> - React component에는 return값이 없다!!  <u>따라서 screen에 띄우기 위해서는 render라는 함수를 사용</u> 해주어야 하고 바로 이 render가 return해주어 screen에 띄워주는 역할을 하게 된다
>
>     `render(){`
>
>   ​    `return <h1>Im a class Component</h1>`
>
>     `}`
>
> - react는 자동적으로 모든 class component의 render method를 실행한다

- state = {} 안에 데이터를 넣어 변수를 초기화할수 있다. ( 이 때 데이터는 obejct 형식으로 초기화)

  `state{ count :0 }`

- 사용할 때에는 this.state.변수명 으로 사용할 수 있다.

  `render(){`

  `<h1>The number is {this.state.count}</h1>`

  `}`

> es6에서 새롭게 추가된 함수 선언방법
>
> - 함수이름 = (파라미터) => {return할 내용};
>
> - (ex) `add =() =>{`
>
>      	 `console.log("add");`
>
>    	` };`
>
> 위 함수를 button onClick에서 이용할 때에는 `onClick={this.add}`로 사용한다. <u>이 때 this.add()를 하지 않는 이유는 ()를 붙이게 되면 버튼의 클릭과 상관없이 바로 실행되기 때문</u>이다

- state의 값을 변경하고 싶다고 함수 내에서 독단적으로 `this.state.count =1`이런식으로 변경할 수는 없다. 정확히 말해서 이런 방식으로 변경하게되면 <u>render method가 실행되지 않아 변경되는것을 screen에서 확인할수가 없다</u>

- state 값을 변경할 때에는 setState를 사용한다

  `this.setState({count:this.state.count +1})`

  이 때 this.state.count 로 state값을 불러와서 사용해도 되지만 동적 데이터라는 state의 특징에는 맞지 않는 방법이다.

  `this.setState(current => ({count:current.count +1}));`

  current로 현재 값을 가져온 뒤 값을 변경시켜주는것이 더 좋은 방법이다!

- <b>setState가 발생하면 react는 자동으로 render method를 실행한다</b>



#### react life cycle

![http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ogimage.201804100050.png](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ogimage.201804100050.png)