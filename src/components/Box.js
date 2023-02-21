import React from 'react'

export default function Box({ content, loading, temperature, enter, city_name, city_n }) {
  
  async function first() {
    var t = await fetch('https://goweather.herokuapp.com/weather/hubli')
    var temp = await t.json()
    temperature.current.innerText = temp.temperature.replace('+', '');
  }

  first()




  return (
    <div className='box'>


      <div className="inp-city">
        <input type="text" id='city' placeholder='Enter city' ref={city_name} />
      </div>


      <div className="enter-btn">
        <button id='enter' onClick={() => {enter()}}>ENTER</button>
      </div>


      <div className="temp-content" ref={content}>


        <div className="headline">
          Temperature in <span className='span-city' ref={city_n}>Hubli</span>
        </div>



        <div className="temp">
          <span className='temprature' ref={temperature}></span>
        </div>

        <div className="note">
          This is not an accurate temperature
        </div>
      </div>


    <div className="loading hidden" ref={loading}>
      <div className="circle"></div>
    </div>


    </div>
  )
}
