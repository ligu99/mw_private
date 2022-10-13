module.exports = {
    title: 'Hello World',
    description: 'Hello World',
    // base: '/got_address/' /* DEV基础虚拟路径 */,
    base: '../' /* PROD 虚拟路径 */,
    dest: './dist',
    head: [
        [
            'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
            { rel: 'icon', href: 'logo.png' }
        ]
    ],
    themeConfig: {
        logo: '/logo.png',
        sidebar: [
            {
                title: 'Movie',
                collapsable: false,
                children: [
                    '/chapter1/mobile',
                    '/chapter1/pc',
                    '/chapter1/UNNATURAL',
                    '/chapter1/GOT_S01',
                    '/chapter1/GOT_S02',
                    '/chapter1/GOT_S03',
                    '/chapter1/GOT_S04',
                    '/chapter1/GOT_S05',
                    '/chapter1/GOT_S06',
                    '/chapter1/GOT_S07',
                    '/chapter1/GOT_S08',
                    
                ]
            }
        ]
    },
}
