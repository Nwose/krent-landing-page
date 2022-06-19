import React from 'react'
import data from '../data'

const Cards = () => {
    // eslint-disable-next-line
    const [cards, setCards] = React.useState(data)
  return (
    <>
        <section className='wex'>
            {cards.map((card) => {
                const {id, image, title, message} = card
                return (
                    <article key={id} className='card'>
                             <img src={image} alt='home card'  className='card-img'/>
                        <div className='card-title'>
                             <h3>{title}</h3>
                             <p>{message}</p>
                             <p className='card-btn'>read more</p>
                        </div>
                    </article>
                )
            })}
            
        </section>
        <button className='post'>View All Posts</button>
    </>
  )
}

export default Cards