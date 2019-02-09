/*
 * File: config.js
 * Project: notes
 * File Created: Wednesday, 5th September 2018 2:54:40 pm
 * Author: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Last Modified: Wednesday, 5th September 2018 4:36:09 pm
 * Modified By: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Copyright 2017 - 2018
 */
module.exports = {
    title: 'Hello VuePress',
    description: '',
    evergreen: true,
    plugins: ['@vuepress/medium-zoom', '@vuepress/back-to-top'],
    themeConfig: {
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'VuePress',
                link: 'https://vuepress.vuejs.org/'
            },
        ],
        sidebar: [
            // {
            //     title: 'Group 1',
            //     collapsable: false,
            //     children: [
            //     '/'
            //     ]
            // },
            '/',
            '/A',
        ],
        lastUpdated: 'Last Updated',
        serviceWorker: {
            updatePopup: true
        },
        editLinks: true,
    },
    markdown: {
        lineNumbers: true,
        extendMarkdown: md => {
            md.set({
                breaks: true
            })
        }
    }
}