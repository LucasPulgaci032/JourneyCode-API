import app from './app.js'

import dotenv from "dotenv";
dotenv.config();

const PORT  = process.env.PORT

app.listen(PORT,"0.0.0.0", () => {

    console.log(`SERVER RODANDO NA PORTA ${PORT}`);
  
    
}) 