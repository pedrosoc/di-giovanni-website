import React, { Fragment } from "react";

import MediaQuery, { useMediaQuery }  from "react-responsive";
import PropTypes from "prop-types";

import styles from "@/constants/styles";

import HeaderMenuMobile from "./mobile/HeaderMenuMobile";
import HeaderMenuDesktop from "./desktop/HeaderMenuDesktop";
import ContentDetailsInfoTitle from "@/features/content/components/ContentDetails/ContentDetailsSerie/ContentDetailsInfo/ContentDetailsInfoTitle";

const HeaderMenu = ({ contents, social }) => {
    return (
		<Fragment>
			<HeaderMenuMobile contents={contents} social={social} />
			<HeaderMenuDesktop contents={contents} social={social}  />
		</Fragment>
	);
};

HeaderMenu.propTypes = {
    social: PropTypes.array,
    contents: PropTypes.array
};

export default HeaderMenu;
