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
			<MetaHeader meta={routes.adms.meta} />
            <Header categories={categories} social={social} />

			<Section first type={containerTypes.text}>
				<div className={className}>
					<div>
						<h5>{t("adms.title")}</h5>
						{/*<p>{t("about.description")}</p>*/}
						<p>Conheça Elaine Di Giovanni, a sócia fundadora dessa bem sucedida sociedade de advogados. Se quiser conhecer mais sobre a sociedade e alguma especialidade, entre em contato pelo telefone ou diretamento no e-mail de algum dos sócios abaixo.</p>
					</div>
                    <br/>
                    <br/>
					<div>
						<h3>Elaine Vidal Bergara Di Giovanni</h3>
						<span className="email"><b>Especialidade:</b> Societário</span><br/>
						<span className="email"><b>Email:</b> elainedigiovanni@digiovanni-law.com</span>
                        <br/>
                        <br/>
                        <div className="img" style={{ backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/di-giovanni-website.appspot.com/o/Group%205%20(1).png?alt=media&token=3c917d19-ae49-4e58-96c9-be44cf8df213")`}} />
						{/*<p>{t("about.description")}</p>*/}
						<br/>
                        <div>
                            <div>
                                <b>Formação</b>
                                <ul>
                                    <li>Advogada formada pela Unimep Piracicaba no ano de 1996</li>
                                    <li>Pós Graduado em Direito Tributário pela PUC-Campinas </li>
                                    <li>Especialização em Societário nas em  “big four” que atuou (EY, DTT, KPMG).</li>
                                    <li>Fluência em inglês (com diversas experiências Internacionais).</li>
                                </ul>
                            </div>
                            <div>
                                <b>Experiência</b>
                                <p>Significativa experiência (25 anos), tendo trabalhado, antes de tornar-se profissional liberal, na:</p>
                                <ul>
                                    <li>Ernst & Yong</li>
                                    <li>Deloitte Touche Tohmatsu  </li>
                                    <li>Romi S/A; </li>
                                    <li>KPMG</li>
                                </ul>
                                <p>Sobre suas atuações</p>
                                <ul>
                                    <li>Foi Gerente Jurídico Societário na Romi S/A (gestora de toda atividade societária da multinacional brasileira, inclusive das filiais no exterior).</li>
                                </ul>
                            </div>
                        </div>
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

    & .img {
        width: 100%;
        height: 500px;
        background-color: transparent;
        background-size: cover;
        background-position: center;
    }

    & h3 {
        font-size: 24px;
    }
`);
