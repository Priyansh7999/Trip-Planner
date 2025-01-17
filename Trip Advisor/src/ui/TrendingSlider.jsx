
import React , { useEffect, useState } from 'react'
import "./TrendingSlider.css"
export default function TrendingSlider({cards,text}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (cards && cards.length > 0) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [cards]);
  return (
    <>
      <div className="card-container">
      {loaded ? (
          cards.map((item, index) => (
            <div key={index} className="homepage-card">
              <img src={item.src} alt={item.title} />
              <div className="card-title">
                <h2>{item.title}</h2>
                <p>{item.des}</p>
                <div className="explore">
                  <button onClick={() => (window.location.href = `/city/${item.title}`)}>
                    Explore {item.title}
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1 style={{ color: 'black' }}>Loading...</h1>
        )}
        <div className='see-more'>
          {loaded? <button class="glow-on-hover" type="button" onClick={() => {
            text==='city' ? window.location.href = `/all-city` : window.location.href = `/all-place`
          }}>SEE MORE</button> : null}
        </div>
      </div>
    </>
  )
}
          // <div key={index} className="card">
          //   <img src={item.src} alt={item.title} />
          //   <div className="card-title">{item.title}</div>
          // </div>