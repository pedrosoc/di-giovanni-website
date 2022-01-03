import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";
import styles from "@/constants/styles";
import SocialShare from "@/components/SocialShare";
import urls from "@/constants/urls";

const ContentPage = ({ className, content }) => {
	return (
        <div className={className}>
            <div className="titleContainer">
                <h1>{content.title}</h1>
                <div className="text" dangerouslySetInnerHTML={{__html: content.text}}></div>
                <div className="extraContainer">
                    <div className="authorContainer">
                        <span className="author">Compartilhe essa página: </span>
                    </div>
                    <div className="shareContainer">
                        <SocialShare url={`${urls.website.baseUrl}${content.route}`} title={content.title} iconSize={36} />
                    </div>
                </div>
            </div>
            <hr />
        </div>
	);
};

ContentPage.propTypes = {
	className: PropTypes.string,
	content: PropTypes.object,
};

ContentPage.defaultProps = {
	content: {},
};

export default styled(ContentPage)`
    
    & {

        > .titleContainer {
            display: flex;
            flex-direction: column;

            > * {
                margin-bottom: 30px;
            }

            > h1 {
                font-size: 35px;
                margin-bottom: 20px;
            }

            > .text {

                blockquote {
                    margin-inline-start: 0;
                    margin-inline-end: 0;
                    padding-left: 20px;
                    border-left: 5px solid #eaeaea;
                }

                p {
                    margin: 0;
                    line-height: 1.4;
                }

                img {
                    max-width: 100%;
                }

                img ~ s {
                    display: block;
                    position: relative;
                    text-decoration: none;
                    top: -5px;
                    padding: 10px;
                    font-size: 14px;
                    background-color: #eaeaea;
                }
            }

            .extraContainer {
                display: flex;
                flex-direction: column;

                @media only screen and (min-width: ${styles.breakpoint_medium}) {
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                }

                .authorContainer {
                    font-size: 16px;
                    font-weight: bold;
                }

                .shareContainer {
                    margin-top: 30px;

                    @media only screen and (min-width: ${styles.breakpoint_medium}) {
                        margin-top: 0;
                    }

                    > * {
                        margin-right: 5px;

                        @media only screen and (min-width: ${styles.breakpoint_medium}) {
                            margin-left: 5px;
                            margin-right: 0;
                        }
                    }
                }
            }
        }

        > hr {
            border-top: 1px solid #fff;
        }
        
        > .img {
            width: 100%;
            height: 500px;
            background-color: transparent;
            background-image: url("${props => props.content.img}");
            background-size: cover;
            background-position: center;
        }

    }
`;
