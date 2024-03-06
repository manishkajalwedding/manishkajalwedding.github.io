import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Bride from '@assets/images/p-kajal.jpg';
import Groom from '@assets/images/p-manish.jpg';
import { GOOGLE_CALENDAR_LINK } from '@/constants'
import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
    const finalSubtitle = isInvitation ? 'Wednesday, Apr 17, 2024, Babhanbara, Badhariya, Siwan' : 'Wednesday, April 17, 2024';

    return (
        <Fragment>
            <div id="fh5co-couple" css={styWrapper}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <h2 className="main-font">Save the Date</h2>
                            <h3 className="sub-title hs"> <a href={GOOGLE_CALENDAR_LINK} target="_blank">{finalSubtitle}</a></h3>
                            <p className="info">
                                We extend a heartfelt invitation to join us in celebrating the joyous occasion of our wedding.
                                Your presence would mean the world to us as we embark on this beautiful journey together.
                                Your love and support are truly cherished, and we look forward to sharing this special day with you.
                            </p>
                        </div>
                    </div>
                    <div className="couple-wrap">
                        <div className="couple-half">
                            <div className="groom">
                                <img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
                            </div>
                            <div className="desc-groom">
                                <h3 className="main-font">Kajal Verma</h3>
                                <p className="parent-name parent-name__top">
                                    Daughter of Ms. Muni Devi <br />& Late Amarlok Prasad
                                </p>
                            </div>
                        </div>
                        <p className="heart text-center">
                            <i className="icon-heart2"></i>
                        </p>
                        <div className="and-love">
                            <i>&</i>
                        </div>
                        <div className="couple-half">
                            <div className="bride">
                                <img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
                            </div>
                            <div className="desc-bride">
                                <h3 className="main-font">Manish Verma</h3>
                                <p className="parent-name">
                                    Son of Ms. Gyanti Devi <br />& Late Mr. Ramayana Prasad
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

HelloSection.propTypes = {
    isInvitation: bool.isRequired,
};

export default HelloSection;
