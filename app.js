const express = require("express");
const path = require("path");
const app = express();

//MIDDLEWARE
app.use(express.static('public'))


app.get('/', (req,res)=>{
    //dosyayı çözümlemek için
   res.sendFile(path.resolve(__dirname,"./temp/index.html"));
});


const port = 3000;

app.listen(port, () => {
    console.log(`Sunucumuz ${port} portunda dinleniyor.`);
})