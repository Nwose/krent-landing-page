import React from 'react'

const Showcase = () => {
  return (
    <section className='showcase'>
      <div className='case-1'>
           <h1>Find Your dream home today</h1>
           <p className='white'>we have just what your looking here at krent space.</p>
      </div>
      <div className='case-2'>
          <div className='case-3'>
              <div className='purple case-button'><p>Rent Property</p></div>
              <div className='case-button'><p>Buy Property</p></div>
              <div className='case-button normal'><p>Short Let</p></div>
          </div>
          <div className='case-4'>
                <div  className='select'>
                  <p>location</p>
                  <select className='strong'>
                    <option>Port Harcourt</option>
                  </select>
                </div>
                <div className='select'>
                   <p>Property Type</p>
                  <select className='strong'>
                    <option>Private House</option>
                  </select>
                </div>
                <div className='select'>
                   <p>Property Size</p>
                  <select className='strong'>
                    <option>120m - 150m</option>
                  </select>
                </div>
                <div className='select'>
                     <p>price range</p>
                  <select className='strong'>
                    <option>$8000-$9000</option>
                  </select>
                </div>
                <div className='select'>
                   <button className='btn btc'> Search</button>
                </div>
          </div>
      </div>
    </section>
  )
}

export default Showcase