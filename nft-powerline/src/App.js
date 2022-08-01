import './App.css';
import Header from './Components/Header';
import CollectionCard from './Components/CollectionCard';
import {useState, useEffect} from 'react'
import axios from 'axios';
import CardList from './Components/CardList';

function App() {
  const [powerLineData, setPowerLineData] = useState([]);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0x78272EFB09bBfBEa2b2556d903d2Bc438ab6cA14&order_direction=asc'
      );
      console.log(openseaData.data.assets);

    }
    return getMyNfts();
  }, []);

return (
  <div className='app'>
    <Header/>
    <CollectionCard
    id={0}
    name={'ogPurp'}
    traits={[{'value': 7}]}
    image='https://lh3.googleusercontent.com/l8-sK4SSZ_hvEOrxYSBAyWukROeUny3hxbVMibbJMG9xclOc-Sntx5Q50c1hbitG897jSHViVC1Fd33nECOOcF4Zrp7WOmRhYelyxg=s0' 
    />
    <CardList powerlineData={[]} />

  </div>

)
}
export default App;