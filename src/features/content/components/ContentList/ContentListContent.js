import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import ContentCard from "../ContentCard";

import styles from "@/constants/styles";

const ContentListHeader = ({ className, posts, max, spotlight }) => {
	return (
		<div className={className}>
			{posts.map(p => <ContentCard key={p.id} post={p} max={max} spotlight={spotlight} />)}
		</div>
	);
}

ContentListHeader.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	posts: PropTypes.array,
    max: PropTypes.number,
    spotlight: PropTypes.bool
};

export default styled(ContentListHeader)`
	display: flex;
    flex-wrap: wrap;

    @media only screen and (min-width: ${styles.breakpoint_medium}) {
        & > a {
            margin-right: 13px;
        }
    }

    @media only screen and (min-width: ${styles.breakpoint_large}) {
        & > a {
            margin-right: 20px;
        }
    }

    & > a:nth-child(${props => props.max}n) {
        margin-right: 0;
    }
`;
