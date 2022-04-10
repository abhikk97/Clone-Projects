import React, { useState } from 'react';
import Footer from '../../components/common/footer/index.js';
import Header from "../../components/common/header/index.js"
import TabOptions from '../../components/common/tabOptions/index.js';
import Delivery from '../../components/delivery/index.js';
import DiningOut from '../../components/diningOut/index.js';
import NightLife from '../../components/nightLife/index.js';

const HomePage = () => {
    const [activeTab, setActiveTab] = useState('Delivery')
    return (
        <div>
            <Header />
            <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
            {/*------Diff screen----*/}
            {getCorrectScreen(activeTab)}
            <Footer />
        </div>
    );
}

const getCorrectScreen = (tab) => {
    switch (tab) {
        case 'Delivery': return <Delivery />
        case 'Dining Out': return <DiningOut />
        case 'NightLife': return <NightLife />
        default:
            return <div>Delivery</div>


    }
}

export default HomePage;


// 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