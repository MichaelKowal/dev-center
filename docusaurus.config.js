const title = "Developer Center";
module.exports = {
    title,
    tagline: "by developers, for developers",
    url: "https://geocortex.github.io/",
    baseUrl: "/",
    favicon: "img/favicon.png",
    organizationName: "geocortex", // Usually your GitHub org/user name.
    projectName: "dev-center", // Usually your repo name.
    themeConfig: {
        navbar: {
            title,
            logo: {
                alt: "Geocortex Logo",
                src: "img/logo.png",
            },
            links: [
                { to: "docs/web/overview", label: "Web", position: "left" },
                { to: "docs/mobile/overview", label: "Mobile", position: "left" },
                { to: "docs/workflow/overview", label: "Workflow", position: "left" },
            ],
        },
        footer: {
            style: "dark",
            links: [],
            copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl: "https://github.com/geocortex/dev-center/edit/master/website/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
};