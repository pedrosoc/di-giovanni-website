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
						<p>Di Giovanni Advogados nasceu de um sonho de fazer o direito uma maneira de melhorar a vida das pessoas, por meio do crescimento sustentável dos negócios, das empresas, do diálogo. Os sócios fundadores acreditam que se as empresa tiverem uma ambiente seguro para investirem e crescerem poderão agregar ainda mais valor na sociedade, melhorando a economia e as oportunidades de evolução social. Oficialmente  Di Giovanni Advogados foi fundado em 18/09/2017 (CNPJ 28.702.861/0001-30). Mas muito anos dessa data seus sócios tinham em seus corações a semente de transformar o direito em instrumento de viabilização de crescimento econômico e social. A sede da empresa está localizada no Edifício Easy Office, Rua Barata Ribeiro, nº 79 - Sala 1106, no bairro Vila Itapura, Campinas - SP, 13015-097. Local de fácil acesso e no coração da Região Metropolitana de Campinas de onde vem projetando os negócios de seus clientes para o mundo todo.</p>
					</div>
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
				color: rgba(240, 240, 240, 0.68);
				border-bottom: solid 1px rgba(240, 240, 240, 0.68);
			}
		}
	}

	& a .arrow {
		border-bottom: 2px solid transparent;
	}
`);
