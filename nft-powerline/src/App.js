import './App.css';
import Header from './Components/Header';
import CollectionCard from './Components/CollectionCard';
import {useState, useEffect} from 'react'
import axios from 'axios';


function App() {
const [powelineData, setPowerlineData] = useState([])

useEffect(()=> {
  const getMyNfts = async ()=>{
    const openseaData = await axios.get('https://testnet.opensea.io/api/v1/assets?asset_contract_address=0xB094c25AbBFb45A37F195a1BCFC25029481F6Acf')
    console.log(openseaData.data.assets)
  }
  return getMyNfts()
}
)

return (
  <div className='app'>
    <Header/>
    <CollectionCard
    id={0}
    name={'ogPurp'}
    traits={[{'value': 7}]}
    image='https://lh3.googleusercontent.com/l8-sK4SSZ_hvEOrxYSBAyWukROeUny3hxbVMibbJMG9xclOc-Sntx5Q50c1hbitG897jSHViVC1Fd33nECOOcF4Zrp7WOmRhYelyxg=s0' />
  </div>

)
}

export default App;
