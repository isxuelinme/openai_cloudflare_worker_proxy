## 使用教程
### 首先你需要有一个顶级域名并将你的DNS解析服务迁移到Cloudflare,你无法在中国使用cloudflare worker的子域名，因为cloudflare肯定屏蔽了中国IP地址（希望你相信我说的，中文是这样。

### 第二步:    [点击这个链接，复制其中的代码保存在你本地的“记事本”里，并将其中的密码改为你自己的](https://github.com/isxuelinme/openai_cloudflare_worker_proxy/blob/main/dist/copy.js "点击这个链接，复制其中的代码保存在你本地的“记事本”里，并将其中的密码改为你自己的") 

### 第三步 : 登陆你的cloudflare后台， 然后创建一个worker, 并分配一个子域名给自己的worker, 然后在网页上进行在线编辑，把第二步准备好的代码粘贴进去，进行部署。


### 访问的时候就是把api.openai.com这个域名换成你自己的，然后加一个http头在请求里，
```js
header["x-l-password"] = 第二步里你自己设置的密码,
```
#### 密码是防止你的woker被人滥用，超过每日100000次访问的限制，别问我如何创建worker等，问这种问题我建议你付费。

