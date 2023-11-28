import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBitcoinSign } from "@fortawesome/free-solid-svg-icons";

library.add(faBitcoinSign);

export default function Currency() {
    return (
        <div className='shadow currency-container'>
            <div className='header'>
                <div>
                    <FontAwesomeIcon icon={faBitcoinSign} />
                    <span>Bitcoin</span>
                </div>BTC</div>
            <div>
                <div className='currency-amt'>Bitcoin Wallet</div>
                <div className='currency-value'>Bitcoin Wallet <span className='rate'>-2.32%</span></div>
            </div>
        </div>
    )
}