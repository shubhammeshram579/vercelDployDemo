var express = require('express');

// var connectDB = require(".//../db/mongodb.js")
const Products = require(".//../models/product.js")

var router = express.Router();


// connectDB();

router.get("/" , function(req, res,next){
  
        let products  =  [{
       
            producttitle: "Change the course cook kit",
            quantity: 1,
            pPrice: 96,
            pImage: "https://cdn.sanity.io/images/w8f1ak3c/production/adb77436d60e62d2b5b0574016abcc864b8e65b0-4498x2999.png/DSC0078_Dexter%20Kim.png?rect=470,108,3458,2760&fp-x=0.4888698630136987&fp-y=0.49614340367765025&w=1024&h=817&fit=crop&crop=focalpoint&auto=format",
            createdAt: new Date().toISOString()
        },
          {
            producttitle: "The cookbook due kit",
            quantity: 1,
            pPrice: 72,
            pImage: "https://cdn.sanity.io/images/w8f1ak3c/production/4206e9c3f7ab098369c39a2194b82eeca6bb0664-6166x4111.png/DSC0005_Dexter%20Kim.png?rect=2,0,6163,4111&w=1024&h=683&auto=format",
            createdAt: new Date().toISOString()
          },
          {
            producttitle: "two hugs candle",
            quantity: 1,
            pPrice: 69,
            pImage: "https://cdn.sanity.io/images/w8f1ak3c/production/d38a94692dcb9250bb49632883f8e31c4a11e123-1408x1408.png/Two%20Hugs%20Candle%20Two%20Good%20Co.png?w=1024&h=1024&auto=format",
            createdAt: new Date().toISOString()
          },
          {
            producttitle: "The good night's sleep care pack",
            quantity: 1,
            pPrice: 96,
            pImage: "https://cdn.sanity.io/images/w8f1ak3c/production/5ff174456e7f3a000b5bcdd6768155d29570c39b-5000x5000.png/Good-Nights-Sleep-Pack-Expanded-Two-Good-Co.png?w=1024&h=1024&auto=format",
            createdAt: new Date().toISOString()
           
          },
          {
            producttitle: "THE LOVE + CARE PACK",
            quantity: 1,
            pPrice: 50,
            pImage: "https://cdn.sanity.io/images/w8f1ak3c/production/d6a2a4be8e3063d64648773f57f5f447609a93ab-5000x5000.png/Love-Care-Pack-Expanded-Two-Good-Co.png?w=640&h=640&auto=format",
            createdAt: new Date().toISOString()
          },
          {
            producttitle: "DONATE 20 MEALS TO A WOMEN'S SHELTER",
            quantity: 1,
            pPrice: 200,
            pImage: "https://cdn.sanity.io/images/w8f1ak3c/production/3dab242fa3387f3fc93a1663d944ff8fab1d00a7-2900x2900.png/Donate-20-meals-womens-shelter-two-good-co.png?w=640&h=640&auto=format",
            createdAt: new Date().toISOString()
          },
          {
            producttitle: "EGGPLANT KASUNDI",
            quantity: 1,
            pPrice: 16,
            pImage: "https://cdn.sanity.io/images/w8f1ak3c/production/cfc4a477bb738edb9066c176d79133e85e8b3f15-2900x2900.png/Eggplant-Kasundi-Two-Good-Co.png?w=640&h=640&auto=format",
            createdAt: new Date().toISOString()
          },
          {
            producttitle: "CLEANSE & HYDRATE SHAMPOO",
            quantity: 1,
            pPrice: 38,
            pImage: "https://cdn.sanity.io/images/w8f1ak3c/production/fd32cb5a89c680203e25b1e29921c7fcf17b8a3e-1408x1408.png/Cleanse%20&%20Hydrate%20Shampoo%20Two%20Good%20Co.png?w=640&h=640&auto=format",
            createdAt: new Date().toISOString()
          }];
    
        //   console.log(products);
        res.render('index',{products})
   
  
});


router.get("/profile" ,async (req,res,next) => {
  const productlist = await Products.find({});
  console.log(productlist)
    res.render("profile" ,{productlist})
})



module.exports = router