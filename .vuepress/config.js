module.exports = {
    base: '/',
    title: 'NanahaGrad_Docs',
    description: '赤星联邦Minecraft服文档',
    // ga: 'UA-87324178-1',
    configureWebpack: {
        serve: {
            hot: {
                port: 9091,
            },
        },
    },
    head: [
        ['link', {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/favicons/apple-touch-icon.png'
        }],
        ['link', {
            rel: 'icon',
            type: 'image/png',
            href: '/favicons/favicon-32x32.png',
            sizes: '32x32'
        }],
        ['link', {
            rel: 'icon',
            type: 'image/png',
            href: '/favicons/favicon-16x16.png',
            sizes: '16x16'
        }],
        ['link', {
            rel: 'mask-icon',
            href: '/favicons/safari-pinned-tab.svg',
            color: '#0e4688'
        }],
        ['link', {
            rel: 'manifest',
            href: '/favicons/manifest.json'
        }],
        ['link', {
            rel: 'shortcut icon',
            href: '/favicons/favicon.ico'
        }],
        ['meta', {
            name: 'msapplication-config',
            content: '/favicons/browserconfig.xml'
        }],
        ['meta', {
            name: 'theme-color',
            content: '#0e4688'
        }],
    ],
    themeConfig: {
        // repo: 'nanahagrad/README',
        // docsRepo: 'nanahagrad/README',
        // repoLabel: 'Contribute',
        // editLinkText: 'Help us improve this page.',
        // editLinks: true,
        logo: '/pterodactyl-flat.png',
        nav: [{
                text: '现在开始',
                link: '/project/introduction.md',
            },
            {
                text: '验证站',
                link: 'https://akahosi.nanahagrad.com/'
            },
            {
                text: 'Q群',
                link: 'https://jq.qq.com/?_wv=1027&k=5G1IN9B',
            }
        ],
        sidebar: {
            '/': [{
                    title: '服务器介绍',
                    collapsable: false,
                    children: [
                        '/project/introduction.md',
                        '/project/about.md',
                        '/project/terms.md',
                    ]
                },
                // {
                //     title: '面板',
                //     collapsable: false,
                //     children: [
                //         '/panel/getting_started',
                //         '/panel/webserver_configuration',
                //         '/panel/upgrading',
                //         '/panel/configuration',
                //         '/panel/troubleshooting',
                //     ]
                // },
                // {
                //     title: '守护进程',
                //     collapsable: false,
                //     children: [
                //         '/daemon/installing',
                //         '/daemon/upgrading',
                //         '/daemon/configuration',
                //         '/daemon/kernel_modifications',
                //         '/daemon/debian_8_docker',
                //         '/daemon/standalone_sftp',
                //     ]
                // },
                // {
                //     title: '教程',
                //     collapsable: false,
                //     children: [
                //         '/tutorials/mysql_setup.md',
                //         '/tutorials/creating_ssl_certificates.md',
                //     ],
                // },
                // {
                //     title: '开发 & 操作',
                //     collapsable: true,
                //     children: [
                //         '/ops/publish_release.md',
                //     ],
                // },
            ],
        },
    },
    postcss: {
        plugins: [
            require('postcss-import'),
            require('tailwindcss')('./tailwind.js'),
            require('precss'),
            require('autoprefixer'),
            require('cssnano'),
        ]
    }
};