import { DefaultTheme } from 'vitepress';
export const sidebar: DefaultTheme.Sidebar = {
  // /column/database/表示对这个文件夹下的所有md文件做侧边栏配置
  '/column/database/': [
     // 第一部分
    {
      text: '栈和队列',
      items: [
        {
          text: '栈-深拷贝和浅拷贝',
          link: '/column/database/001_Stack'
        },
        {
          text: '队列-事件循环',
          link: '/column/database/002_Queue'
        }
      ]
    },
    // 第二部分
    {
      text: '字典和树',
      items: [
        {
          text: '字典和集合-Set和Map',
          link: '/column/database/003_Dictionary'
        },
        {
          text: '树-深/广度优先遍历',
          link: '/column/database/004_Tree'
        }
      ]
    }
  ],
  '/column/markdown/': [
    {
      text: 'markdown基本语法',
      link: '/column/markdown/'
    }
  ]
}