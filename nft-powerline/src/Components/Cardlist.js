import React from 'react'
import CollectionCard from './CollectionCard'
import App from '../App'

const CardList = ({powerlineData}) => {
  return (
    <div className='cardList' >
        {powerlineData.map(powerline => (
            <div>
                <CollectionCard
                key={powerline.token_id}
                id={powerline.token_id}
                name={powerline.name}
                traits={powerline.traits}
                image={powerline.image_original_url}
                />
            </div>
        ))}
    </div>
  )
}

export default CardList;
