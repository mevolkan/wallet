import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faWallet,faCompass, faBell, faGear } from "@fortawesome/free-solid-svg-icons";

library.add(faWallet,faCompass, faBell, faGear);

export default function NavDrawer() {
    return (
        <nav className='navdrawer'>
            <FontAwesomeIcon icon={faWallet} />
            <FontAwesomeIcon icon={faCompass} />
            <FontAwesomeIcon icon={faBell} />
            <FontAwesomeIcon icon={faGear} />
        </nav>
    )
}