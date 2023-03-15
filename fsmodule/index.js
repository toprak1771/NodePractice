import { readFile,writeFile,appendFile,unlink,mkdir,rmdir  } from 'node:fs';

//Dosya okumak
readFile('example.txt','utf8',(err,data) => {
    if(err) console.log(err);
    console.log(data);
})

//Dosya Yazmak
writeFile('deneme.json','{"name":"Ceku","kind":"Siyam"}','utf8',(err,data) => {
    if(err) console.log(err);
    console.log("Dosya basarıyla yazdırıldı");
}    
)

//Dosyaya veri eklemek
appendFile('example.txt','DENEME2',(err) => {
    if(err) console.log(err);
    console.log("Veri basarıyla eklendi");
})

//Dosya silmek
unlink('silinecek.txt',(err)=>{
    if(err) console.log(err);
    console.log("Dosya başarıyla silindi");
})

//Klasör oluşturmak
mkdir('ekleme/ekleme2',{recursive:true},(err)=>{
    if(err) console.log(err);
})

//Klasör silmek
rmdir('ekleme',{recursive:true},(err) => {
    if(err) console.log(err);
})