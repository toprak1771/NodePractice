import { readFile,writeFile,appendFile,unlink,mkdir,rmdir  } from 'node:fs';
import { Buffer } from 'node:buffer';

writeFile('emloyees.json','{"name":"Employees 1 Name","salary":2000}','utf8',(err,data)=>{
    if(err) console.log(err)
    console.log("Data başarıyla oluşturuldu");
})

readFile('emloyees.json','utf8',(err,data) => {
    if(err) console.log(err)
    console.log(data);
})

appendFile('emloyees.json','{"name":"Employees 2 Name","salary":1700}',(err) => {
    if(err) console.log(err);
    console.log("Veri basarıyla eklendi");
})

unlink('emloyees.json',(err) =>{
    if(err) console.log(err)
    console.log("Dosya başarıyla silindi");
})