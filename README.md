## Using  openai_cloudflare_worker_proxy 
### First, you must have a top-level domain name and transfer your domain DNS to cloudflare , because Cloudflare blocks all subdomains of worker from being visited from China. (I'm not blaming Cloudflare, you know what I mean.)

### Second:    [copy these code of link and change password to yourself  password](https://github.com/isxuelinme/openai_cloudflare_worker_proxy/blob/ "copy the code and change password to yourself password") 

### Third : create a worker by your cloudflare dashboard,  and past above code of link to your worker online editer 


### when you request , add the following header to your http request 
```js
header["x-l-password"] = <yourself password you set on secound step>,
```
####The role of the password is to protect your cloudflare from overloading

