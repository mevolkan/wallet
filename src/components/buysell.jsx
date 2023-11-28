import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

library.add(faDollarSign);

export default function BuySell() {
  return (
    <div className='buysell'>
      <div className='buy button-container'>
        <span className='icon'><FontAwesomeIcon icon={faDollarSign} /></span>
        <span>Buy BTC</span>
      </div>
      <div className='sell button-container'>
        <span className='icon'><FontAwesomeIcon icon={faDollarSign} /></span>
        <span>Sell BTC</span>
      </div>
    </div>

  )
}