import { createSitemap } from "@/utils/seo";

import contentsStatus from "@/constants/contentsStatus";

const Sitemap = () => {};

Sitemap.getInitialProps = async ({ res }) => {
    
    res.setHeader("Content-Type", "text/xml");
    res.write(createSitemap());
    res.end();
    
    return { namespacesRequired: [] };
}

export default Sitemap;
