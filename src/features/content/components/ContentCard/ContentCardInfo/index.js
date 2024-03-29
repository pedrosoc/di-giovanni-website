import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import ContentCardInfoHeader from "./ContentCardInfoHeader";
import ContentCardInfoDescription from "./ContentCardInfoDescription";

const ContentCardInfo = ({ className, author, title, episode, description }) => {
	return (
		<div className={className}>
			<ContentCardInfoHeader title={title} author={author} episode={episode} />
			<ContentCardInfoDescription description={description} />
		</div>
	);
}

ContentCardInfo.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	author: PropTypes.string,
	episode: PropTypes.string,
	description: PropTypes.string,
    type: PropTypes.string,
};

export default styled(ContentCardInfo)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    width: 100%;
    height: ${props => props.type === "text" ? "100%" : "auto"};
`;
