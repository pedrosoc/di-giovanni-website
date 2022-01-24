import React, { Fragment } from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import MetaHeader from "@/components/MetaHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

import containerTypes from "@/constants/containerTypes";
import { withTranslation } from "@i18n";

import routes from "@/constants/routes";
import social from "@/features/me/constants/social";
import ContentList from "@/features/content/components/ContentList";
import services from "@/constants/services";

const Servicos = ({ className, t, categories }) => {
	return (
		<Fragment>
			<MetaHeader meta={routes.services.meta} />
            <Header categories={categories} social={social} />

			<Section first type={containerTypes.text}>
				<div className={className}>
                    <h5>Nossa atuação</h5>
                    {/*<p>{t("about.description")}</p>*/}
                    <p>Di Giovanni possui advogados preparados para atuar nos principais ramos de direito empresarial especialmente em Direito Tributário,  Societário e Contratual e Internacional.</p>
                    <ContentList posts={services} max={2} />
				</div>
			</Section>

			<Footer />
		</Fragment>
	);
};

Servicos.propTypes = {
	className: PropTypes.string,
	t: PropTypes.func,
    categories: PropTypes.array
}

export const getStaticProps = async () => {
    return { props: { content: [], categories: [] } };
}


export default withTranslation("common")(styled(Servicos)`
	& h5 {
		font-size: 35px;
	}

	& .second {
		margin-top: 50px;
	}

	& p.list {
		display: flex;
		flex-direction: column;

		& > a {
			margin-top: 5px;
		}
	}

	& a {
		font-family: Georgia, "URW Bookman L", serif;
		font-size: 18px;
		color: #111;

		& span {
			margin-right: 10px;
		
			&.link {
				color: rgba(240, 240, 240, 0.68);
				border-bottom: solid 1px rgba(240, 240, 240, 0.68);
			}
		}
	}

	& a .arrow {
		border-bottom: 2px solid transparent;
	}
`);
