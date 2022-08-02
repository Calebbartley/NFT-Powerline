import React from 'react'
import CollectionCard from './CollectionCard'
import './PowerlineList.css'


const PowerlineList = ({powerLineData}) => {
  return (
    <div className='powerlineList' >
        {powerLineData.map(powerline => (
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

export default PowerlineList;
