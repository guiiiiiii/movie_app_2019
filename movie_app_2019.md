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

- Fetching data  

  - fetch를 대신하여 axios 를 사용할 것임

    `npm i axios` 를 하여 설치해준 뒤

    `import axios from 'axios';`

  - componentDidMount안에서 `axios.get('URL')`을 사용하여 정상적으로 data를 가져오는지 확인할 수 있다. <u>이 때 axios는 때때로 데이터를 가져오는 속도가 느리므로 async를 사용하여 비동기/동기를 시켜줘야함</u> 

  - 또는 axios를 시행할 함수를 하나 더 만든 뒤 Didmount에서 이 함수를 호출하는 방법도 존재!  (이 방법을 사용할것임)

    > async와 await은 짝꿍이다! await 단독으로 사용할 수 없음!

    `getMovies= async () =>{`

    ​    `const  movies =await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');`

      `}`

      `componentDidMount(){`

    ​    `this.getMovies();`

      `}`

  - 가져온 영화의 목록을 state에 setting하기 위해 setState를 사용

    > 이 때 , 위에서처럼 movies로 저장하게되면 set할 때 movies.data.data.movies로 저장해야한다 (데이터가 data-> data-> movie형식이기 때문)
    >
    > 이와같은 방식이 불편하므로 변수를 초기화 해줄 때에
    >
    > {data: {data: {movies}}} 로 저장해줄것임
    >
    > ` const  {data: {data: {movies}}} =await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');`

- Rendering movies

  - App.js가 복잡해지므로 Movie.js를 새로 만들어 작업

  - <b>형식확인</b>을 해주기 위해 prop-types를 import해준뒤 작업

  - movies component는 <u>state가 필요하지 않으므로 class component가 아닌 function component로 작업</u>해도 무방!

  - *화면에 rendering해줄 때에는 항상 propType을 확인*해주는  습관 키우기

    > `function Movie({id,year,title,summary,poster}){`
    >
    > ​    `return (<h4>{title}</h4>`
    >
    > ​    `);`
    >
    > `}`
    >
    > `Movie.propTypes={`
    >
    > ​    `id:PropTypes.number.isRequired,`
    >
    > ​    `year:PropTypes.number.isRequired,`
    >
    > ​    `title:PropTypes.string.isRequired,`
    >
    > ​    `summary:PropTypes.string.isRequired,`
    >
    > ​    `poster:PropTypes.string.isRequired`
    >
    > `}`

  - App.js에서 영화의 목록을 Movie.js로 보내주는 부분을 완성하기 위해 render함수 재작성

    > 1. `render(){`
    >
    > 2. `const {isLoading,movies} = this.state;`
    >
    > 3. `return <div>`
    >
    > 4. `{isLoading ? "Loading...":movies.map(movie=> {`
    >
    > 5. `return (`
    >
    > 6. `<Movie` 
    >
    > 7. `key={movie.id}`
    >
    > 8. `id={movie.id}` 
    >
    > 9. `year={movie.year}` 
    >
    > 10. `title={movie.title}` 
    >
    > 11. `summary={movie.summary}` 
    >
    > 12. `poster={movie.medium_cover_image}/>`
    >
    > 13. `);`
    >
    > 14. `})}`
    >
    > 15. `</div>`
    >
    > 16. `}`
    >
    > 2 - state의 현재 값 중 isLoading과 movies를 가져온다
    >
    > 4 - isLoading의 값을 확인하여 true일 때에는 Loading..을 화면에 출력하고 로딩이 완료되면 movies에서 영화의 목록을 가져올 것.
    >
    > 이 때에 map함수를 사용, 각 객체의 내용을 Movie.js 의 Movie function을 통하여 출력할 것
    >
    > 7~12 - movie는 5개의 prop을 사용하므로 prop전달

- 

