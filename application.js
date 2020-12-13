'use strict'
/**
 * deploying server 
 * with express application 
 */
const app = require("./server");
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("application deployed on port" + port);
}); 
