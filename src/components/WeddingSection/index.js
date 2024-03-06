import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
import { styWrapper } from './styles';

function WeddingSection({ isInvitation }) {
    const renderGuestInfo = () => {
        return (
            <Fragment>
                <div className="col-md-8 col-md-offset-4">
                    <WeddingInfoBox title="" time="08.00 PM" date="Wednesday, April 17, 2024" />
                </div>
            </Fragment>
        );
    };

    return (
        <Fragment>
            <div id="fh5co-event" css={styWrapper}>
                <div className="overlay" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <span className="bismillah">Marriage should be a duet, when one sings, the other claps.</span>
                            <h2 className="main-font main-font__wedding">Wedding of Manish and Kajal </h2>
                            <span className="sub-title sub-title__wedding">Will be held on</span>
                        </div>
                    </div>
                    <div className="row">
                        {!isInvitation && renderGuestInfo()}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

WeddingSection.propTypes = {
    isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
