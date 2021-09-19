import React from 'react';
// Importing partials (Header adn Footer)

import Navbar from '../Partial/Header';
import Footer from '../Partial/Footer';

// Importing Main Components

import Main from './components/Main';

function LandingPage(params) {
    return(
        <div>
            {/* Header */}
                <Navbar />
            {/* Main */}
                <Main />
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default LandingPage;