import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";

import { withTranslation } from "@i18n";

import SocialIcons from "@/components/SocialIcons";
import styles from "@/constants/styles";

const HeaderSocial = ({ className, t, social }) => {
	const isMobile = useMediaQuery({
		query: `(max-device-width: ${styles.breakpoint_large_max})`
	});

	return (
		<SocialIcons
			className={className}
			title={isMobile ? t("header.social") : ""}
			uuid="header"
			size={"20"}
			distance="9px"
			fill="rgb(254, 254, 254)"
			socialList={social}
		/>
	);
};

HeaderSocial.propTypes = {
	className: PropTypes.string,
	t: PropTypes.func,
	social: PropTypes.array
};

export default withTranslation("common")(styled(HeaderSocial)`
	display: flex;
	justify-content: space-between;
	width: fit-content;
	margin-top: ${styles.container_margin_large};

	@media only screen and (min-width: ${styles.breakpoint_large}) {
		margin-top: 0;
		margin-left: ${styles.container_margin_medium};
	}
`);
