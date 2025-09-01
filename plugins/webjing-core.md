# webjing核心插件使用文档

## 插件功能介绍
Webjing 核心插件文档提供了 webjing 开发的系列插件常用 API 以及授权管理功能。需要站内会员身份才能使用！  
购买站内的产品即可成为站内会员，站内会员享受的功能如下：

+ 所有购买插件和主题以及其他产品的维护更新，
+ 新产品折扣优惠。
+ 远程技术支持
+ 工单支持（正在开发开发中...）
+ 其他支持（敬请期待）

## 使用
### 步骤一：
在 [webjing的工作坊](https://webjing.com/signup) 注册账号。注册完账号之后购买相应产品即可成为站内会员。

### 步骤二：
**在自己的halo站点里**安装 **webjing 核心插件**，在购买相应产品后 `webjing 核心插件`是会自动赠送的，所以此插件无需购买，产品界面已经设置了占位价格。

### 步骤三：
登录你在 `webjing的工作坊` 注册的账户。 紧接着在你自己的halo站的插件列表点击webjing核心插件进入插件设置页面，点击`绑定令牌`。  
![绑定令牌](/images/plugins/webjing-core/bind-token.png)

接着会自动跳入`webjing的工作坊`个人中心的令牌绑定页面，这里由于我已经绑定了账户，所以会显示删除并重新绑定按钮，初次进入会显示绑定令牌按钮，点击绑定即可。  
![绑定PAT令牌](/images/plugins/webjing-core/bind-pat.png)

此时会弹出一个 pat_token 的界面，点击复制后即可绑定成功。

## 授权
**在进行授权的时候必须确保你提交的授权域名和halo系统概览信息中的外部地址的域名是一致的，这非常重要！！！**

![系统概览](/images/plugins/webjing-core/system-overview.png)

### 申请授权
![申请授权](/images/plugins/webjing-core/auth-request.png)

### 在线授权
在线授权确保你已经提交了授权申请。  
![在线授权](/images/plugins/webjing-core/online-auth.png)

### 离线授权
离线授权需要复制许可证内容，首先需要在 `webjing核心插件` 的设置中选择离线模式。之后操作按照红框内的步骤进行操作。

![离线授权](/images/plugins/webjing-core/offline-auth.png)

将获取到的离线许可证粘贴到下方点击授权即可。

![离线许可证](/images/plugins/webjing-core/offline-license.png)