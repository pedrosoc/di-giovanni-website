import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "@i18n";
import SVG from "../SVG";

const HeaderContent = ({ className }) => {
	return (
		<Link href="/">
			<a className={className}>
                <SVG name="justice" width="50" />
                <div>
                    <h2> DI GIOVANNI </h2>
                    <h6> SOCIEDADE DE ADVOGADOS </h6>
                </div>
            </a>
		</Link>
	);
};

HeaderContent.propTypes = {
	className: PropTypes.string
};

export default styled(HeaderContent)`
	color: #000;
	text-decoration: none;
    display: flex;
    align-items: center;

    & > div {
        position: relative;
        top: 5px;
        margin-left: 10px;
    }

    & > div > h6 {
        position: relative;
        top: -5px;
    }
`;
