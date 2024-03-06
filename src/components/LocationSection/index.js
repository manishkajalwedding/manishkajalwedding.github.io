import React, { Fragment } from 'react';
import { styWrapper } from './styles';

function LocationSection({ eventTitle, addressTitle, addressLine1, addressLine2, addressLine3, addressLink, mapLink }) {
    return (
        <Fragment>
            <div id="fh5co-couple-story" className="fh5co-section-gray" css={styWrapper}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                            <h2 className="main-font">{eventTitle}</h2>
                            <p className="sub-title">
                                <a href={addressLink}
                                    title={addressTitle}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ color: '#828282' }}>
                                    <strong>{addressLine1}</strong>
                                </a>{' '}
                                <br />
                                {addressLine2}
                                <br />
                                {addressLine3}
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <iframe
                                src={mapLink}
                                width="100%"
                                height="450"
                                frameBorder="0"
                                style={{ border: '0' }}
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex="0"
                                title={addressTitle}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default React.memo(LocationSection);
