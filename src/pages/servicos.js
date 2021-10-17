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

const Servicos = ({ className, t, categories }) => {
	return (
		<Fragment>
			<MetaHeader meta={routes.about.meta} />
            <Header categories={categories} social={social} />

			<Section first type={containerTypes.text}>
				<div className={className}>
					<div>
						<h5>Serviços oferecidos</h5>
						{/*<p>{t("about.description")}</p>*/}
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus massa diam, eget malesuada sem dictum sit amet. In feugiat ex eu eros ornare hendrerit. Nam eu auctor leo, eget tristique magna. Cras et augue quam. Integer posuere massa nec urna lobortis mollis. Integer lacinia quis sapien a finibus. Curabitur blandit, quam in pellentesque dapibus, dolor tellus luctus metus, eget tristique odio risus pellentesque orci. Nulla vitae vestibulum purus. Proin enim ex, vulputate vel nunc nec, interdum tempor lorem. Maecenas et finibus lectus. Ut rhoncus fermentum pretium. Morbi sollicitudin dui hendrerit justo suscipit, id hendrerit tellus euismod.</p>
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
		font-family: "Roboto", sans-serif;
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
