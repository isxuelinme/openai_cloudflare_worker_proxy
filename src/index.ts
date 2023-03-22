import useReflare from "reflare";
const password = "hhahahah"
const handleRequest = async (request: Request): Promise<Response> => {
  const reflare = await useReflare();
  reflare.push({
    path: "*",
    upstream: {
      domain: "api.openai.com",
      protocol: "https",
    },
  });

  return reflare.handle(request);
};

addEventListener("fetch", (event) => {
	console.log(password)
	if(event.request.headers.get("x-l-password") === password) {
		return event.respondWith(handleRequest(event.request));
	}else{
		event.request.headers.delete("x-l-password")
		return event.respondWith(new Response('{"code":403,"msg":"Wrong password"}', {status: 403}));
	}
});