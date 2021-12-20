import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { withTranslation } from "@i18n";
import { useRouter } from "next/router";

import Error from "../404";

import MetaHeader from "@/components/MetaHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

import ContentDetails from "@/features/content/components/ContentDetails";
import ContentList from "@/features/content/components/ContentList";

import social from "@/features/me/constants/social";

import routes from "@/constants/routes";
import containerTypes from "@/constants/containerTypes";
import contentsStatus from "@/constants/contentsStatus";
import contentsConfig from "@/constants/contentsConfig";
import services from "@/constants/services";
import ContentPage from "@/features/content/components/ContentPage";

const ContentPost = ({ t, content }) => {
    const router = useRouter();
    if (router.isFallback)
		return <Fragment />

	if (!content || !content.id)
		return <Error categories={[]} />

	return (
		<Fragment>
			<MetaHeader meta={routes.services.meta} />
            <Header categories={[]} social={social} />

			<Section first type={containerTypes.text}>
                <ContentPage content={content} />
			</Section>

            <Section type={containerTypes.text}>
                <ContentList title={"Outras áreas de atuação"} posts={services} max={2} />
            </Section>

            <Footer />
		</Fragment>
	);
};

ContentPost.propTypes = {
    t: PropTypes.func,
    content: PropTypes.object,
};

export const getStaticPaths = async () => {
    const paths = services.map(m => ({ params: { id: m.id } }));
    return { paths, fallback: true }
}

export const getStaticProps = async ({ params }) => {
    const content = services.find(c => c.id === params.id);
    return { props: { content }, revalidate: 1 };
}

export default withTranslation("common")(ContentPost);
