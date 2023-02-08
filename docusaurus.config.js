// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'ISPP 2023 Gestor del conocimiento',
    tagline: 'Herramienta de gestión del conocimiento/feedback para la asignatura ISPP 2023',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://your-docusaurus-test-site.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    organizationName: 'josdelsan',
    projectName: 'SW-ISPP-2023-Feedback',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'es',
        locales: ['en', 'es'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'ISPP-2023',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
            items: [{
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: 'Gestión del conocimiento',
                },
                {
                    href: 'https://github.com/Josdelsan/SW-ISPP-2023-Feedback',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Gestión del conocimiento',
                    items: [{
                        label: 'Feedback',
                        to: '/docs/intro',
                    }, ],
                },
                {
                    title: 'Comunidad docusaurus',
                    items: [{
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/docusaurus',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/docusaurus',
                        },
                    ],
                },
                {
                    title: 'Más',
                    items: [{
                            label: 'GitHub docosaurus',
                            href: 'https://github.com/facebook/docusaurus',
                        },
                        {
                            label: 'GitHub de la aplicación',
                            href: 'https://github.com/Josdelsan/SW-ISPP-2023-Feedback',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} SW-ISPP-2023-Feedback, José María Delgado Sánchez. Built with Docusaurus.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }),
};

module.exports = config;