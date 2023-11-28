import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronLeft,faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

library.add(faChevronLeft,faEllipsisVertical);

export default function Navigation() {
    return (
        <nav>
            <div>
            <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div>
                <h1>Bitcoin Wallet</h1>
            </div>
            <div>
            <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
        </nav>
    )
}