import React from 'react';
import Banner from '../../Components/Banner/Banner';
import MitolynCard from '../../Components/MitolynCard/MitolynCard';
import MoneyGuarantee from '../../Components/MoneyGuarantee/MoneyGuarantee';
import Bonuses from '../../Components/Bonuses/Bonuses';
import FreeShipping from '../../Components/FreeShipping/FreeShipping';
import HarvardScientist from '../../Components/HarvardScientist/HarvardScientist';
import Mitolyn from '../../Components/Mitolyn/Mitolyn';
import FetchMitolyn from '../../Components/FetchMitolyn/FetchMitolyn';
import LikeSection from '../../Components/LikeSection/LikeSection';
import MitolynUser from '../../Components/MitolynUser/MitolynUser';
import Faq from '../../Components/Faq/Faq';
import References from '../../Components/References/References';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MitolynCard></MitolynCard>
            <MoneyGuarantee></MoneyGuarantee>
            <Bonuses></Bonuses>
            <FreeShipping></FreeShipping>
            <HarvardScientist></HarvardScientist>
            <Mitolyn></Mitolyn>
            <FetchMitolyn></FetchMitolyn>
            <LikeSection></LikeSection>
            <MitolynUser></MitolynUser>
            <MitolynCard></MitolynCard>
            <MoneyGuarantee></MoneyGuarantee>
            <Faq></Faq>
            <MitolynCard></MitolynCard>
            <References></References>
            <Footer></Footer>
          
        </div>
    );
};

export default Home;