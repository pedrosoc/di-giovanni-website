import React, { Fragment } from "react";

import PropTypes from "prop-types";

import { isEmptyList } from "@/utils/list";

import ContentListHeader from "./ContentListHeader";
import ContentListContent from "./ContentListContent";

const ContentList = ({ title, posts, link, max, spotlight }) => {
    if (isEmptyList(posts))
		return <Fragment />

	return (
		<Fragment>
			<ContentListHeader title={title} link={link} />
			<ContentListContent posts={posts} max={max} spotlight={spotlight} />
		</Fragment>
	);
}

ContentList.propTypes = {
	title: PropTypes.string,
	posts: PropTypes.array,
	link: PropTypes.string,
	max: PropTypes.number,
    spotlight: PropTypes.bool
};

ContentList.defaultProps = {
    max: 3,
}

export default ContentList;
