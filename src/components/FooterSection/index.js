import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import { styWrapper } from '../HelloSection/styles';

function FooterSection({ isInvitation }) {
    return (
        <Fragment>
            {!isInvitation && (
                <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapper}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                                <h2 className="main-font">Thank you</h2>
                                <p className="info"> Thank you in advance; we sincerely hope you'll grace us with your presence at the wedding celebration.
                                </p>
                                <p className="info"> In the dance of time, your presence at the wedding adds a meaningful note to the symphony of shared moments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <footer id="fh5co-footer" role="contentinfo">
                <div className="container">
                    <div className="row copyright">
                        <div className="col-md-12 text-center">
                            <p>
                                <small className="block">&copy; 2024 Kajal & Manish Wedding. All Rights Reserved.</small>
                                <small className="block">
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}

FooterSection.propTypes = {
    isInvitation: bool.isRequired,
};

export default React.memo(FooterSection);
