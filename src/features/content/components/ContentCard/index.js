import React, { Fragment } from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "@i18n";

import routes from "@/constants/routes";
import styles from "@/constants/styles";

import ContentCardInfo from "./ContentCardInfo";
import ContentCardImage from "./ContentCardImage";

const ContentCard = ({ className, post, spotlight }) => {
	if (!post)
		return <Fragment />

    if (post.type === "text")
        return (
            <div className={className}>
                <ContentCardInfo title={post.title} type={post.type} author={post.author} episode={post.episode} description={post.description} />
            </div>
        );

	return (
		<Link href={post.route}>
			<a className={className}>
				<ContentCardImage spotlight={spotlight} color={post.color} title={post.title} />
				<ContentCardInfo title={post.title} author={post.author} episode={post.episode} description={post.description} />
			</a>
		</Link>
	);
}

ContentCard.propTypes = {
	className: PropTypes.string,
	post: PropTypes.object,
	spotlight: PropTypes.bool,
    max: PropTypes.number
};

export default styled(ContentCard)`
	width: 100%;
    margin-bottom: 50px;
    box-shadow: ${props => props.post.type === "text" ? "0" : "0 1px 3px 0 #f0f0f0, 0 0 0 1px #f0f0f0"};
    border-radius: 5px;
    font-size: 14px;
    text-decoration: none;
    text-align: initial;
    
	@media only screen and (min-width: ${styles.breakpoint_medium}) {
        width: ${props => props.spotlight ? "49%" : props.max == 2 ? "329px" : "215px"};
        margin-bottom: 20px;
	}

	@media only screen and (min-width: ${styles.breakpoint_large}) {
    	width: ${props => props.spotlight ? "49%" : props.max == 2 ? "325px" : "370px"};
	}
`;
