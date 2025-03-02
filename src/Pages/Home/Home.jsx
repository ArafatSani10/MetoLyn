import React from 'react';
import Banner from '../../Components/Banner/Banner';
import MitolynCard from '../../Components/MitolynCard/MitolynCard';
import MoneyGuarantee from '../../Components/MoneyGuarantee/MoneyGuarantee';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MitolynCard></MitolynCard>
            <MoneyGuarantee></MoneyGuarantee>
        </div>
    );
};

export default Home;