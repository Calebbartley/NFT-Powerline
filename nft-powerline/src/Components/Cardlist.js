import React from 'react'
import CollectionCard from './CollectionCard'

const Cardlist = ({cardListData}) => {
  return (
    <div className='cardList' >
        {cardListData.map(card => (
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
