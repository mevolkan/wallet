import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBitcoinSign } from "@fortawesome/free-solid-svg-icons";

library.add(faBitcoinSign);

export default function Currency() {
    return (
        <div className='currency-container'>
            <div className='header'>
                <div>
                    <FontAwesomeIcon icon={faBitcoinSign} />
                    <span>Bitcoin</span>
                </div>BTC</div>
            <div>
                <span>Bitcoin Wallet</span>
            </div>
        </div>
    )
}