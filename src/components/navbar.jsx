import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronLeft,faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

library.add(faChevronLeft,faEllipsisVertical);

export default function Navigation() {
    return (
        <nav className='navbar'>
            <FontAwesomeIcon icon={faChevronLeft} />
            <div>
                <span>Bitcoin Wallet</span>
            </div>
            <FontAwesomeIcon icon={faEllipsisVertical} />
        </nav>
    )
}