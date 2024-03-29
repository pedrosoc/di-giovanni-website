import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

const ContentCardInfoDescription = ({ className, description }) => {
	return (
		<p className={className}>{description}</p>
	);
}

ContentCardInfoDescription.propTypes = {
	className: PropTypes.string,
	description: PropTypes.string
};

export default styled(ContentCardInfoDescription)`
    font-size: 16px;
    margin-bottom: 0;
    color: rgba(240, 240, 240, 0.68);

	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
`;
