import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

import { withTranslation } from "@i18n";

import styles from "@/constants/styles";

import Container from "./Section/Container";

const Footer = ({ className, t }) => {
	return (
		<Container className={className}>
			{t("footer.copyright")}
			<span>{t("footer.title")}</span>
		</Container>
	);
};

Footer.propTypes = {
    className: PropTypes.string,
    t: PropTypes.func,
};

export default withTranslation("common")(styled(Footer)`
    display: flex;
    flex-direction: column;

	font-family: Georgia, "URW Bookman L", serif;
    color: rgba(240, 240, 240, 0.68);
    font-size: 12px;
    
    padding: ${styles.container_margin_small};
    border-top: 1px solid rgba(6, 11, 14, .20);

    @media only screen and (min-width: ${styles.breakpoint_medium}) {
        flex-direction: row;

        & > span {
            margin-left: 10px;
            padding-left: 10px;
            border-left: 1px solid rgba(6, 11, 14, .20);
        }
	}
`);
