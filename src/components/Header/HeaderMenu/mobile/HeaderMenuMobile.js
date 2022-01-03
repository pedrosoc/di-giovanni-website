import React from "react";

import PropTypes from "prop-types";

import Modal from "@/components/Modal";
import SVG from "@/components/SVG";

import HeaderMenuMobileContent from "./HeaderMenuMobileContent";
import styled from "styled-components";
import styles from "@/constants/styles";

const HeaderMenuMobile = ({ className, contents, social }) => {
	return (
		<Modal
			trigger={<SVG className={className} name="menu" width="25" fill="#f0f0f0" />}
			content={<HeaderMenuMobileContent social={social} contents={contents} />}
		/>
	);
};

HeaderMenuMobile.propTypes = {
    className: PropTypes.string,
	social: PropTypes.array,
	contents: PropTypes.array
};

export default styled(HeaderMenuMobile)`
    display: block;

    @media only screen and (min-width: ${styles.breakpoint_large}) {
        display: none;
    }
`;
