import React from 'react';
import PropTypes from "prop-types";

function Food({fav, image, rating}){
  return <div>
    <h3>I love {fav}</h3>
    <h4>{rating} /5.0</h4>
    <img src={image} art={fav}></img>
    </div>;
}

Food.propTypes={
 fav:PropTypes.string.isRequired,
 image:PropTypes.string.isRequired,
 rating:PropTypes.number.isRequired
}

const foodILike=[
{
  id:1,
  name:'kimchi',
  image:
  'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fpostfiles12.naver.net%2F20150812_267%2Fbbtreecorp_1439341990481E7n1n_PNG%2FOPENAS_1461378.png%3Ftype%3Dw1&f=1',
  rating:3
},
{
  id:2,
  name:'samgubsal',
  image:
  'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.news.zumst.com%2Fimages%2F2%2F2017%2F02%2F26%2F2030c76e427f4c278c16ab0eb81bd45d.jpg&f=1',
  rating:5
},
{
  id:3,
  name:'ramen',
  image:'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-ALeeHZxJuzw%2FUPefoU-0TWI%2FAAAAAAAABzg%2FprqkJwHOSlU%2Fs1600%2F%25EB%259D%25BC%25EB%25A9%25B4%25EB%25A7%259B%25EC%259E%2588%25EA%25B2%258C%2B%25EB%2581%2593%25EC%259D%25B4%25EB%258A%2594%2B%25EB%25B0%25A9%25EB%25B2%25953.png&f=1',
  rating:4.5

}]


function App() {
  return <div>
  {foodILike.map(function(dish){
     return <Food key={dish.id} fav={dish.name} image={dish.image} rating={dish.rating}/>;
  })}
  </div>
}

export default App;
