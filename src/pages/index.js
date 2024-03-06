import React, { useState, Fragment } from 'react';
import { object } from 'prop-types';
import getQueryValue from '@helpers/getQueryValue';
/**
 * List of local components
 */
import MainLayout from '@components/Layout';
import WelcomeSection from '@components/WelcomeSection';
import HelloSection from '@components/HelloSection';
import WeddingSection from '@components/WeddingSection';
import LocationSection from '@components/LocationSection';
import StorySection from '@components/StorySection';
import PhotoSection from '@components/PhotoSection/Loadable';
import ConfirmationSection from '@components/ConfirmationSection';
import FooterSection from '@components/FooterSection';
import FloatingMusic from '@components/FloatingMusic/Loadable';

function Home({ location }) {
    const guestName = decodeURIComponent(getQueryValue(location, 'to') || '');
    const isInvitation = getQueryValue(location, 'type') === 'invitation';
    const firstName = guestName.replace(/ .*/, '');
    const isAnonymGuest = guestName === '' && !isInvitation;
    const codeLink = getQueryValue(location, 'code') || '';
    const finalTicketLink = `code=${codeLink}&name=${guestName}`;

    const [showDetailContent, setShowDetailContent] = useState(false);

    const handleClickDetail = () => {
        setShowDetailContent(true);
    };

    const renderDetailContent = () => {
        if (!showDetailContent) return null;

        return (
            <Fragment>
                <HelloSection isInvitation={isInvitation} />
                <WeddingSection isInvitation={isInvitation} />
                <LocationSection
                    eventTitle="Tilak Ceremony Venue"
                    addressTitle=" Manish Tilak Party"
                    mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.083857538838!2d84.34864887486032!3d26.291381386516765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992ffe0f3fa9dfb%3A0x6312d954b3aa4500!2sGyanti%20Residency!5e0!3m2!1sen!2sin!4v1709750650005!5m2!1sen!2sin"
                    addressLine1="Gyanti Residency"
                    addressLine2="Vill + PO - Sarsar, Ward No - 1, Dist. - Siwan"
                    addressLine3="Bihar - 841226"
                    addressLink="https://maps.app.goo.gl/sdo7iDcF5SwQeJE67"
                />
                <LocationSection
                    eventTitle="Wedding Ceremony Venue"
                    addressTitle="Manish & Kajal Wedding Party"
                    mapLink="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3578.337397540725!2d84.47623107541679!3d26.25071097704796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDE1JzAyLjYiTiA4NMKwMjgnNDMuNyJF!5e0!3m2!1sen!2sin!4v1709751080983!5m2!1sen!2sin"
                    addressLine1="Babhanbara"
                    addressLine2="Vill + PO - Babhanbara, Ward No - 12, Tehsil - Barhariya, Dist. - Siwan"
                    addressLine3="Bihar - 841226"
                    addressLink="https://maps.app.goo.gl/SrdxxTpKf8Htah1F9"
                />
                <StorySection />
                <PhotoSection />
                <ConfirmationSection guestName={firstName} isInvitation={isInvitation} codeLink={finalTicketLink} />
                <FooterSection isInvitation={isInvitation} />
            </Fragment>
        );
    };

    return (
        <MainLayout>
            <WelcomeSection
                guestName={guestName}
                isAnonymGuest={isAnonymGuest}
                isInvitation={isInvitation}
                location={location}
                codeLink={finalTicketLink}
                onClickDetail={handleClickDetail}
            />
            {renderDetailContent()}
            <FloatingMusic />
        </MainLayout>
    );
}

Home.propTypes = {
    location: object.isRequired,
};

export default Home;
