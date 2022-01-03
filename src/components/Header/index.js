import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

import HeaderContainer from "./HeaderContainer";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";

const Header = ({ className, social, categories }) => {
	return (
		<div className={className}>
			<HeaderContainer>
				<HeaderLogo />
				<HeaderMenu social={social} contents={categories} />
			</HeaderContainer>
		</div>
	);
};

Header.propTypes = {
	className: PropTypes.string,
	social: PropTypes.array,
	categories: PropTypes.array
};

export default styled(Header)`
    position: ${props => props.relative ? "absolute" : "static"};
    width: 100%;
    background-color: #060b0e;

	font-family: Georgia, "URW Bookman L", serif;
	box-shadow: ${props => !props.relative ? "0 4px 12px 0 rgba(0, 0, 0, 0.05)" : "0 0 0 0"};
`;
