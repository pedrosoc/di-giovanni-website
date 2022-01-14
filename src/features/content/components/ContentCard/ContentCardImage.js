import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import styles from "@/constants/styles";
import images from "@/constants/images";

const ContentCardImage = ({ className, color, title, spotlight }) => {
    return (
		<div className={className} />
	);
}

ContentCardImage.propTypes = {
	className: PropTypes.string,
	color: PropTypes.string,
	title: PropTypes.string,
	spotlight: PropTypes.bool
};

export default styled(ContentCardImage)`
    border-radius:  5px 5px 0 0;
    width: 100%;
    height: 10px;
    object-fit: cover;
    background-color: ${props => props.color ? props.color : "#fff"};

    @media only screen and (min-width: ${styles.breakpoint_medium}) {
       // height: ${props => props.spotlight ? "329px" : "10px"};
    }

    @media only screen and (min-width: ${styles.container_large}) {
        // height: ${props => props.spotlight ? "564px" : "10px"};
    }
`;
