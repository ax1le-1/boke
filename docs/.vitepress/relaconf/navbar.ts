import { DefaultTheme } from 'vitepress';
export const nav: DefaultTheme.NavItem[] = [
  {
    text: '首页',
    link: '/' // 表示docs/index.md
  },
  {
    text: '个人成长',
    items: [
      {
        text: 'mysql',
        link: '/column/database/' // 对应docs/column/Algorithm下的idnex.md文件
      }
    ]
  }
];
