import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import Container from "./Container";
import styles from "@/constants/styles";

const Section = ({ className, colored, backgroundImage, type, children, styleA }) => {
	return (
		<div className={className} style={styleA}>
			<Container type={type}>
				{children}
			</Container>
		</div>
	);
};

Section.propTypes = {
	className: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
	colored: PropTypes.string,
    backgroundImage: PropTypes.string,
	type: PropTypes.string,
    styleA: PropTypes.object
};

export default styled(Section)`
    //height: ${props => props.backgroundImage ? "400px" : "auto"};
    background-color: ${props => props.colored ? props.colored : "transparent"};
    //filter: ${props => props.gray ? "grayscale(1)" : "inherit"};

    background-image: ${props => props.backgroundImage ? `linear-gradient(to left, rgba(117, 19, 93, 0), rgba(255, 255, 255, 1) 60%), url("${props.backgroundImage}")` : "transparent"};
    background-size: cover;
    background-position-x: 70%;
    background-position-y: 40%;

    margin: ${props => props.first ? 0 : styles.container_margin_medium} 0 ${styles.container_margin_medium};

    @media only screen and (min-width: ${styles.breakpoint_medium}) {
        margin: ${props => props.first ? 0 : styles.container_margin_large} 0 ${styles.container_margin_medium};
    }

`;
