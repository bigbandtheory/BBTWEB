import React, {Fragment} from 'react';

export default () => {

    return (
        <Fragment>
            <div className="row">
                <h3 className="t-center c-white col-lg-12 col-sm-12 col-xs-12 col-centered f-raleway fw-100 fs-italic mBottom30">
                    <span className="f-robotoSlab fw-900 c-yellow fs-italic">Good</span>
                    Music
                    <span className="f-robotoSlab fw-900 c-yellow fs-italic">Good</span> Business</h3>
            </div>
            <div className={"col-lg-10 col-sm-12 col-xs-12 col-centered"}>
                <div className={"col-lg-6 col-sm-6 col-xs-12 c-white"}>
                    <h6 className={"f-robotoSlab fw-900 c-yellow"}>
                        <span className={"dropCap-2 c-darkGrey"}>01</span>Nullam felis metus, elementum in ante et</h6>
                    <p>
                        Cras arcu enim, pulvinar sit amet sodales eu,
                        egestas at dui. Curabitur placerat, enim a pretium elementum, dolor eros rhoncus lacus,
                        varius dictum velit turpis vel nisi. Nullam felis metus, elementum.
                    </p>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12 c-white">
                    <h6 className="f-robotoSlab fw-900 c-yellow">
                        <span className="dropCap-2 c-darkGrey">02</span>
                        Sed semper dolor nec lacus consectetur
                    </h6>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters.</p>
                </div>
            </div>
        </Fragment>
    );
}