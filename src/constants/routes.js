import urls from "./urls";
import images from "./images";

export default { 
	home: {
		url: "/",
		title: t => t("header.home"),
		meta: {
			title: t => t("home.meta.title"),
			description: t => t("home.meta.description"),
			keywords: t => t("home.meta.keywords"),
			socialTitle: () => "",
			url: () => urls.website.baseUrl,
			image: () => images.social,
			icon: images.favicon
		}
	},
	about: {
		url: "/sobre",
		title: t => t("header.about"),
		meta: {
			title: t => t("about.meta.title"),
			description: t => t("about.meta.description"),
			keywords: t => t("about.meta.keywords"),
			socialTitle: () => "",
			url: () => `${urls.website.baseUrl}/sobre`,
			image: () => images.social,
			icon: images.favicon
		}
	},
	services: {
		url: "/atuacao",
		title: t => t("header.services"),
		meta: {
			title: t => t("services.meta.title"),
			description: t => t("services.meta.description"),
			keywords: t => t("services.meta.keywords"),
			socialTitle: () => "",
			url: () => `${urls.website.baseUrl}/sobre`,
			image: () => images.social,
			icon: images.favicon
		}
	},
	adms: {
		url: "/socios",
		title: t => t("header.adms"),
		meta: {
			title: t => t("adms.meta.title"),
			description: t => t("adms.meta.description"),
			keywords: t => t("adms.meta.keywords"),
			socialTitle: () => "",
			url: () => `${urls.website.baseUrl}/sobre`,
			image: () => images.social,
			icon: images.favicon
		}
	},
	error: {
		meta: {
			title: t => t("error.meta.title"),
			icon: images.favicon,
			simpleMap: true,
		}
	}
};
