import logo from './logo.svg';
import react, { useEffect } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Example from './table';
// import axios from 'axios';

function App() {

    // useEffect(async()=>{
      
  //    await axios.get('http://localhost:8080/pdf')
  // .then(function (response) {
  //   // handle success
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // })


    // },[1])  
    // useEffect(() => {
    //   axios.get('https://jsonplaceholder.typicode.com/posts/1').then(response => {
    //     // setPost(response.data);
    //   });
    // }, []);
 
  return (
    <>
<Example/>
</>
  );
}

export default App;
