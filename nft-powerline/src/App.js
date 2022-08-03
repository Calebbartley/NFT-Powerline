import './App.css';
import Header from './Components/Header';
import {useState, useEffect} from 'react'
import axios from 'axios';
import PowerlineList from './Components/PowerlineList';
import Main from './Components/Main';

function App() {
  const [powerLineData, setPowerLineData] = useState([]);
  const [selectedPowerline, setSelectedPowerline] = useState(0);

  

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0x78272EFB09bBfBEa2b2556d903d2Bc438ab6cA14&order_direction=asc'
      );
      console.log(openseaData.data.assets);
      setPowerLineData(openseaData.data.assets);
    }
    getMyNfts();
  }, []);

return (
     <div className='app'>
      <Header/>
      {powerLineData.length > 0 && (
          <>
            <Main powerLineData={powerLineData} selectedPowerline={selectedPowerline}/>
            <PowerlineList 
            powerLineData={powerLineData} 
            setSelectedPowerline={setSelectedPowerline} 
            />
          </>
        )}
    </div>
  )
}
export default App;