import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { withTranslation } from "@i18n";

import MetaHeader from "@/components/MetaHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

import HomeBanner from "@/features/me/components/HomeBanner";
import FullContentResume from "@/features/content/components/FullContentResume";

import routes from "@/constants/routes";
import social from "@/features/me/constants/social";

import contentsStatus from "@/constants/contentsStatus";
import images from "@/constants/images";
import ContentList from "@/features/content/components/ContentList";
import styled from "styled-components";
import styles from "@/constants/styles";
import services from "@/constants/services";

const img = "https://firebasestorage.googleapis.com/v0/b/di-giovanni-website.appspot.com/o/pexels-sora-shimazaki-5668494-min%20(1).jpg?alt=media&token=92000055-f85d-4226-b879-6b272891af7d";
const img2 = "https://firebasestorage.googleapis.com/v0/b/di-giovanni-website.appspot.com/o/pexels-august-de-richelieu-4427430-min%20(1).jpg?alt=media&token=1f97ae32-d68d-4680-a5a0-35450476c303";
const img3 = "https://firebasestorage.googleapis.com/v0/b/di-giovanni-website.appspot.com/o/Screenshot%20from%202021-11-02%2019-21-58.png?alt=media&token=b5aa717b-09c0-4fef-8743-22355368070e";

const Home = ({ className, t, contents, categories }) => {
    return (
		<div className={className}>
			<MetaHeader meta={routes.home.meta} />
            <Header categories={categories} social={social} />

			<Section first backgroundImage={images.background}>
				<HomeBanner />
			</Section>

			<Section>
				{/* <FullContentResume contents={contents} /> */}
                <div style={{ textAlign: "center" }}>
                    <h1 style={{ marginBottom: "15px" }}>Confiança, transparência e excelência</h1>
                    <div style={{ maxWidth: "620px", margin: "15px auto 40px" }}>
                        <span>
                            A Di Giovanni (CNPJ 28.702.861/0001-30) é uma sociedade de advogados, localizada em Campinas (SP), especializada em direito tributário, societário e contratual.
                        </span>
                    </div>
                    <div 
                        style={{
                            borderColor: "#000",
                            backgroundColor: "#000",
                            color: "#fff",
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: "bold",
                            padding: "15px 20px",
                            borderRadius: "50px",
                            cursor: "pointer",
                            margin: "0 auto 40px",
                            width: "fit-content",
                            fontSize: "14px"
                        }}
                    >
                        Conheça nossos serviços
                    </div>
                </div>
            </Section>
            
            <Section
                backgroundImage={img}
                styleA={{
                    height: "400px",
                    backgroundPositionY: "60%"
                }}
            />

            <Section>
				{/* <FullContentResume contents={contents} /> */}
                <div style={{ textAlign: "center" }}>
                    <h1 style={{ marginBottom: "15px" }}>Nossas especialidades</h1>
                    <div style={{ maxWidth: "620px", margin: "15px auto 40px" }}>
                        <span>
                            A Di Giovanni possui advogados preparados para atuar nos principais ramos de direito tributário, societário e contratual. Conheça mais sobre cada uma das nossas especialidades abaixo. 
                        </span>
                    </div>
                    <ContentList posts={services}/>
                </div>
            </Section>

            <Section>
				{/* <FullContentResume contents={contents} /> */}
                <div className="socios" style={{ display: "flex", alignItems: "center" }}>
                    <div className="socios1">
                        <h1 style={{ marginBottom: "15px" }}>Nossos sócios</h1>
                        <div style={{ maxWidth: "400px", margin: "15px auto 40px" }}>
                            <span>
                                Conheça Ricardo e Elaine, os sócios fundadores da bem sucedida socidade de advogados, Di Giovanni. 
                            </span>
                        </div>

                        <div 
                            style={{
                                borderColor: "#000",
                                backgroundColor: "#000",
                                color: "#fff",
                                fontFamily: "Poppins, sans-serif",
                                fontWeight: "bold",
                                padding: "15px 20px",
                                borderRadius: "50px",
                                cursor: "pointer",
                                marginBottom: "40px",
                                width: "fit-content",
                                fontSize: "14px"
                            }}
                        >
                            Conheça nossos sócios
                        </div>
                    </div>
                    <div className="socios2">
                        <img src={img2} style={{ width: "100%" }} />
                    </div>
                </div>
            </Section>
            
            <Section className="contato" colored="#000" styleA={{ color: "#fff" }}>
				{/* <FullContentResume contents={contents} /> */}
                <div className="socios" style={{ display: "flex", alignItems: "center" }}>
                    <div className="socios1">
                        <h1 style={{ marginBottom: "15px" }}>Contato</h1>
                        <div style={{ maxWidth: "400px", margin: "15px auto 40px" }}>
                            <p>
                                <b>Endereço:</b> Edifício Easy Office - R. Barata Ribeiro, 79 - Sala 1106 - Vila Itapura, Campinas - SP, 13015-097
                            </p>
                            <p>
                                <b>Telefone:</b> (19) 3296-0715
                            </p>
                        </div>
                    </div>
                    <div className="socios2">
                        <img src={img3} style={{ width: "100%" }} />
                    </div>
                </div>
            </Section>

			<Footer />
		</div>
	);
};

Home.propTypes = {
	t: PropTypes.func,
	contents: PropTypes.array,
	categories: PropTypes.array,
    className: PropTypes.string,
};

export const getStaticProps = async () => {
    return { props: { contents: [], categories: [] }, revalidate: 1 };
}

export default withTranslation("common")(styled(Home)`
    & .contato input {
        background-color: #fff !important;
        border-color: #fff !important;
        color: #000 !important;
    }

    & .socios {
        flex-direction: column;
        align-items: center;
        
        & > * {
            width: 100%;
        }
    }
    
    & .socios1 {
        text-align: center;
    }
    
    @media only screen and (min-width: ${styles.breakpoint_large}) {
        & .socios {
            flex-direction: row;
        }
        
        & .socios1 {
            text-align: left;
        }
        
        & .socios1 {
            width: 30%;
        }
        
        & .socios2 {
            width: 70%;
            margin-left: 10%;
        }
	}
`);
