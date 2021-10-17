import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import Container from "./Container";
import styles from "@/constants/styles";

const Section = ({ className, colored, backgroundImage, type, children }) => {
	return (
		<div className={className}>
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
	type: PropTypes.string
};

export default styled(Section)`
    height: 500px;
    background-color: ${props => props.colored ? props.colored : "transparent"};

    background-image: ${props => props.backgroundImage ? `url("${props.backgroundImage}")` : "transparent"};
    background-size: cover;
    background-position-x: center;
    background-position-y: 20%;

    margin: ${props => props.first ? 0 : styles.container_margin_medium} 0 ${styles.container_margin_medium};

    @media only screen and (min-width: ${styles.breakpoint_medium}) {
        margin: ${props => props.first ? 0 : styles.container_margin_large} 0 ${styles.container_margin_large};
    }

`;
