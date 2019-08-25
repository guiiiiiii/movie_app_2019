# movie_app_2019

- 시작

  - state에 `isLoading:true`선언

  - componentDidMount에서 setTimeout을 사용하여 로딩한지 6초가 지나면 isLoading값을 false로 바꾸어준다 (추후 isLoading 이 false가 되면 movie 목록을 rendering할것)

    `class App extends React.Component{`

      `state={`

    ​    `isLoading:true,`

    ​    `movies:[]`

      `};`

      `componentDidMount(){`

    ​    `setTimeout(()=>{`

    ​      `this.setState({isLoading:false});`

    ​    `},6000);`

      `}`

      `render(){`

    ​    `const {isLoading} = this.state;`

    ​    `return <div>`

    ​      `{isLoading ? "Loading...":"We are ready"}`

    ​      `</div>`

      `}`

    `}`

