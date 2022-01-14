import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "@i18n";
import SVG from "../SVG";

const HeaderContent = ({ className }) => {
	return (
		<Link href="/">
			<a className={className}>
                <div>
                    <h2> Di Giovanni </h2>
                    <h6> Advogados </h6>
                </div>
            </a>
		</Link>
	);
};

HeaderContent.propTypes = {
	className: PropTypes.string
};

export default styled(HeaderContent)`
    // REVIEW: Testar tirar fonte
    position: relative;
    top: -5px;
	color: #f0f0f0;
	text-decoration: none;
    display: flex;
    align-items: center;

    & > div {
        position: relative;
        top: 5px;
        margin-left: 10px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    & > div > h2 {
        font-family: Georgia, "URW Bookman L", serif;
        font-style: italic;
    }
    
    & > div > h6 {
        font-family: Georgia, "URW Bookman L", serif;
        position: relative;
        top: 0px;
        font-size: 16px;
        color: rgba(240,240,240,.68);
    }
`;
