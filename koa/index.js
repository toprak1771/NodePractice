const Koa = require("koa");
const app = new Koa();

app.use(async ctx => {
    if(ctx.url == "/about"){
        ctx.body = "<h1>Hakkında Sayfasına Hoşgeldiniz...</h1>"
    }
});

app.use(async ctx => {
    if(ctx.url == "/contact"){
        ctx.body = "<h1>İletişim Sayfasına Hoşgeldiniz...</h1>"
    }
});

app.use(async ctx => {
    if(ctx.url == "/index"){
        ctx.body = "<h1>İndex Sayfasına Hoşgeldiniz...</h1>"
    }
});

const port= 3000;

app.listen(port,()=>{
    console.log(`Server ${port} üzerinde başlatıldı.`)
});