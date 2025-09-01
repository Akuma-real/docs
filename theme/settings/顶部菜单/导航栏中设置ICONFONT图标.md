# 导航栏中设置ICONFONT图标

> 本文主要讲解如何在在导航栏中设置ICONFONT图标
>



## 管理图标样式
1. 打开[阿里巴巴矢量图标库](https://www.iconfont.cn)
2. 登录成功后打开“我的项目”![我的项目页面](/images/theme/settings/iconfont-my-projects.png)
3. 新建空白项目![新建项目界面](/images/theme/settings/iconfont-new-project.png)
4. 在搜索框中搜索自己想要的图标类型并选择图标添加入库![搜索和选择图标](/images/theme/settings/iconfont-search-icons.png)
5. 完成全部图标添加后点击右上角购物车选择加入项目![加入项目购物车](/images/theme/settings/iconfont-cart-to-project.png)
6. 在“我的项目”中选择刚才添加图标的项目，查看在线链接并更新地址![在线链接查看](/images/theme/settings/iconfont-online-link.png)
7. 复制生成的地址，用于后续引入

## 引入图标样式
1. 打开halo博客后台管理面板
2. 在“系统”-“设置”-“代码注入”中填写引用样式(注意修改代码块中引用地址为上一步中获取的实际项目地址)![代码注入设置](/images/theme/settings/iconfont-code-injection.png)

```html
<link rel="stylesheet" href="//at.alicdn.com/t/c/font_1861900_k5kocin72wp.css" >
```

## 使用
1. 打开halo系统后台管理面板
2. 在“菜单”中编辑你想要设置图标的菜单项
3. 在编辑页面中的图标输入框填写代码![图标代码输入](/images/theme/settings/iconfont-icon-input.png)
4. 其中“iconfont” 为固定前缀，后面加上图标的描述
5. 图标描述可以通过阿里巴巴矢量图标库中项目中的图标，点击“复制代码”获取
6. ![微件配置界面](/images/theme/settings/widget-configuration.png)