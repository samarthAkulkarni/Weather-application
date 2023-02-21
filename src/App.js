import './App.css';
import Box from './components/Box';
import { useRef } from 'react';

function App() {

  var content = useRef(null);
  var loading = useRef(null);
  var temperature = useRef(null);
  var city_name = useRef(null);
  var city_n = useRef(null);


  const load = () => {
    content.current.setAttribute('class', 'temp-content hidden');
    loading.current.setAttribute('class', 'loading');
    setTimeout(() => {
      content.current.setAttribute('class', 'temp-content');
      loading.current.setAttribute('class', 'loading hidden');
    }, 3000)
  }





  async function enter() {

    var url = 'https://goweather.herokuapp.com/weather/';

    var city = city_name.current.value;
    city_name.current.value = '';


    if (city === '') {
      alert('please enter city name')
    }


    else {
      var t = await fetch(url + city)
      var temp = await t.json()


      if (temp.temperature === '') {
        temperature.current.innerText = 'not found'
        alert('please enter a valid city name')
      }

      else if (temp.message === 'NOT_FOUND') {
        alert('sorry! we are having some problem with api!')
      }
      else {
        temperature.current.innerText = temp.temperature.replace('+', '');

        load();
        city_n.current.innerText = city
      }
    }
  }

  return (
    <>

      <Box content={content} loading={loading} temperature={temperature} enter={enter} city_name={city_name} city_n={city_n} />



    </>
  );
}

export default App;
