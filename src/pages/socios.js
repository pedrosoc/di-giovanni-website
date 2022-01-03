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
						<p>Conheça Ricardo Di Giovanni e Elaine Di Giovanni, os sócios fundadores dessa bem sucedida sociedade de advogados. Se quiser conhecer mais sobre a sociedade e alguma especialidade, entre em contato pelo telefone ou diretamento no e-mail de algum dos sócios abaixo.</p>
					</div>
                    <br/>
                    <br/>
					<div>
						<h3>Ricardo Piza Di Giovanni</h3>
						<span className="email"><b>Especialidade:</b> Tributário</span><br/>
						<span className="email"><b>Email:</b> ricardodigiovanni@digiovanni-law.com</span>
                        <br/>
                        <br/>
                        <div className="img" style={{ backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/di-giovanni-website.appspot.com/o/Ricardo-Piza-Di-Giovanni.jpg?alt=media&token=77c631f8-21f4-4573-9a27-35bfa3437cad")`}} />
                        <br/>
						{/*<p>{t("about.description")}</p>*/}
                        <div>
                            <div>
                                <b>Formação</b>
                                <ul>
                                    <li>Advogado formado pela Puc-Campinas no ano 2000.</li>
                                    <li>Pós Graduado em Direito Tributário pela PUC-Campinas </li>
                                    <li>Pós Graduado em Direito Tributário  pelo IBET.</li>
                                    <li>Doutorado pela PUC-São Paulo em Direito Tributário (Aluno Ouvinte)</li>
                                    <li>Especialista em Contratos Internacional pela COGEA (PUC-SP).</li>
                                    <li>Especialista em Gestão e Estratégia de Empresas pela Unicamp.</li>
                                    <li>Fluência em inglês adquirida em cursos internacionais realizados em 4 viagens de imersão nos Estados Unidos da América.</li>
                                </ul>
                            </div>
                            <div>
                                <b>Experiência</b>
                                <p>Significativa experiência (20 anos), tendo trabalhado internamente na:</p> 
                                <ul>
                                    <li>Rhodia</li>
                                    <li>Deloitte Touche Tohmatsu  </li>
                                    <li>Brasil Ferrovias S/A (atual Rumo ALL), </li>
                                    <li>Rigesa Celulose, Papel e Embalagens Ltda (Multinational norteamericana, atual WestRock),</li>
                                    <li>Huawei</li>
                                    <li>Fertilizantes  Heringer S/A; </li>
                                    <li>Guardian Vidros, Automotivo e Produtos para construção</li>
                                    <li>Honda South America.</li>
                                    <li>Yara</li>
                                </ul>
                                <p>Sobre suas atuações</p>
                                <ul>
                                    <li>Gerente Jurídico e Tributário nas empresas Brasil Ferrovias, Rigesa, F. Heringer, Guardian e Honda. </li>
                                    <li>Na Honda atuou em projetos de planejamento tributário internacional e novos negócios internacionais. </li>
                                    <li>Foi indicado pelo CIESP, pela FIESP e pela CNI – Confederação Nacional da Indústria, para representar o setor industrial, como julgador, no Conselho Administrativo de Recursos Fiscais – CARF.</li>
                                    <li>Professor de Direito Tributário na Faculdade de Paulínia </li>
                                    <li>Professor de Pós Graduação/MBA de Tributário na UNIP Campinas </li>
                                    <li>Atua como Diretor Jurídico do CIESP e Secretário Executivo da Divisão Tributária do CIESP-Campinas.</li>
                                </ul>
                            </div>
                        </div>

					</div>
                    <br/>
                    <br/>
					<div>
						<h3>Elaine Vidal Bergara Di Giovanni</h3>
						<span className="email"><b>Especialidade:</b> Societário</span><br/>
						<span className="email"><b>Email:</b> elainedigiovanni@digiovanni-law.com</span>
                        <br/>
                        <br/>
                        <div className="img" style={{ backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/di-giovanni-website.appspot.com/o/Group%205.png?alt=media&token=1affceb0-9b0c-413a-8a99-67bd38260033")`}} />
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
				color: rgba(240, 240, 240, .68);
				border-bottom: solid 1px rgba(240, 240, 240, .68);
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
