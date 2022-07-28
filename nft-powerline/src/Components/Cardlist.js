import React from 'react'
import CollectionCard from './CollectionCard'

const Cardlist = ({powerlineData}) => {
  return (
    <div className='cardList' >
        {powerlineData.map(card => (
            <div>
                <CollectionCard
                key={card.token_id}
                id={card.token_id}
                name={card.name}
                traits={card.traits}
                image={card.image_original_url}
                />
            </div>
        ))}
    </div>
  )
}

export default Cardlist;
