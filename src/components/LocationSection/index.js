import React, { Fragment } from 'react';
import { GOOGLE_MAPS_LINK } from '@/constants';
import { styWrapper } from './styles';

function LocationSection() {
    return (
        <Fragment>
            <div id="fh5co-couple-story" className="fh5co-section-gray" css={styWrapper}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                            <h2 className="main-font">Event Location</h2>
                            <p className="sub-title">
                                <a
                                    href={GOOGLE_MAPS_LINK}
                                    title="Click untuk melihat peta di Google Maps"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ color: '#828282' }}
                                >
                                    <strong>Babhanbara</strong>
                                </a>{' '}
                                <br />
                                Vill + PO - Babhanbara, Tehsil - Barhariya, Dist. - Siwan
                                <br />
                                Bihar - 841226
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.3212591529923!2d84.47920285!3d26.25123495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992e309b089b1b5%3A0x598e77ba20ac1c23!2sBabhanbara%2C%20Bihar%20841232!5e0!3m2!1sen!2sin!4v1709497985200!5m2!1sen!2sin"
                                width="100%"
                                height="450"
                                frameBorder="0"
                                style={{ border: '0' }}
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex="0"
                                title="Google Maps - Manish & Kajal Wedding Party"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default React.memo(LocationSection);
