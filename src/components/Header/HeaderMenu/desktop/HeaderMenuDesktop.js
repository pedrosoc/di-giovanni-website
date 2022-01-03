import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

import HeaderItems from "../components/HeaderItems";
import HeaderSocial from "../components/HeaderSocial";
import styles from "@/constants/styles";

const HeaderMenuDesktop = ({ className, contents, social }) => {
	return (
		<div className={className}>
			<HeaderItems contents={contents} />
			<HeaderSocial social={social} />
		</div>
	);
};

HeaderMenuDesktop.propTypes = {
	className: PropTypes.string,
	social: PropTypes.array,
	contents: PropTypes.array
};

export default styled(HeaderMenuDesktop)`
    display: none;
    
    @media only screen and (min-width: ${styles.breakpoint_large}) {
        display: flex;
        align-items: center;
    }
`;
