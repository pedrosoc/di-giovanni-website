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

const About = ({ className, t, categories }) => {
	return (
		<Fragment>
			<MetaHeader meta={routes.about.meta} />
            <Header categories={categories} social={social} />

			<Section first type={containerTypes.text}>
				<div className={className}>
					<div>
						<h5>{t("about.title")}</h5>
						{/*<p>{t("about.description")}</p>*/}
						<p>A empresa Di Giovanni Sociedade De Advogados que tem como razão social Di Giovanni Sociedade De Advogados foi fundada em 18/09/2017 e está cadastrada na Solutudo no segmento de Advocacias com o CNPJ 28.702.861/0001-30. No mercado, a empresa está localizada no Edifício Easy Office, Rua Barata Ribeiro, nº 79 - Sala 1106, no bairro Vila Itapura, Campinas - SP, 13015-097. A empresa Di Giovanni Sociedade De Advogados está cadastrada na Receita Federal sob o CNAE 6911-7/01 com atividade fim de Serviços Advocatícios.</p>
					</div>
                    {/*<div className="second">
						<h4>{t("about.help.sponsorTitle")}</h4>
						<p>{t("about.help.sponsor")}</p>
                    </div>
					<div className="second">
						<h4>{t("about.help.title")}</h4>
						<p>{t("about.help.description")}</p>
						<p className="list">
							<span>{t("about.help.link.description")}</span>
							<a href="https://apoia.se/ajudeomacacast" target="_blank" rel="noopener noreferrer">
								<span className="arrow">-</span>
								<span className="underline">{t("about.help.link.single")}</span>
								<span className="link">{t("about.help.link.singleLink")}</span>
							</a>
							<a href="https://apoia.se/macacast" target="_blank" rel="noopener noreferrer">
								<span className="arrow">-</span>
								<span className="underline">{t("about.help.link.monthly")}</span>
								<span className="link">{t("about.help.link.monthlyLink")}</span>
							</a>
						</p>
                    </div>*/}
				</div>
			</Section>

			<Footer />
		</Fragment>
	);
};

About.propTypes = {
	className: PropTypes.string,
	t: PropTypes.func,
    categories: PropTypes.array
}

export const getStaticProps = async () => {
    return { props: { content: [], categories: [] } };
}


export default withTranslation("common")(styled(About)`
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
				color: rgba(0, 0, 0, .68);
				border-bottom: solid 1px rgba(0, 0, 0, .68);
			}
		}
	}

	& a .arrow {
		border-bottom: 2px solid transparent;
	}
`);
