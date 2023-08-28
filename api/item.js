export default async function handler(req, res){

    const search = req.query.search || '';

    var inventory = [ {

        "header": "T-Shirt",
        "subheading": "A card with optional accent stylings.",
        "content": "This card is highly customizable to contain any content you'd like",
        "image": "https://cdn.shopify.com/s/files/1/0259/5448/4284/products/SKIMS-LOUNGEWEAR-AP-TNK-0282-ONX-FL_1456x_jpeg.jpg?v=1675404669&width=1200"
        
    },
    {

        "header": "Shorts",
        "subheading": "A card with optional accent stylings.",
        "content": "This card is highly customizable to contain any content you'd like",
        "image": "http://placekitten.com/200/600"
        
    },
    {

        "header": "Pants",
        "subheading": "A card with optional accent stylings.",
        "content": "This card is highly customizable to contain any content you'd like",
        "image": "http://placekitten.com/200/600"
        
    },
    {

        "header": "T-Shirt",
        "subheading": "A card with optional accent stylings.",
        "content": "This card is highly customizable to contain any content you'd like",
        "image": "https://cdn.shopify.com/s/files/1/0259/5448/4284/products/SKIMS-LOUNGEWEAR-AP-TNK-0282-ONX-FL_1456x_jpeg.jpg?v=1675404669&width=1200"
        
    },
    {

        "header": "Shorts",
        "subheading": "A card with optional accent stylings.",
        "content": "This card is highly customizable to contain any content you'd like",
        "image": "http://placekitten.com/200/600"
        
    },
    {

        "header": "Pants",
        "subheading": "A card with optional accent stylings.",
        "content": "This card is highly customizable to contain any content you'd like",
        "image": "http://placekitten.com/200/600"
        
    }]; 



    if(search === ''){
        iventory = iventory.slice(0,4);
        iventory.map((items) => {
          return items;
        });
        
      }else{ 
  
      inventory.map((items) => {
          items.index = items.header.toLowerCase() + " " + items.subheading.toLowerCase() + " " + items.content.toLowerCase();
        });
        inventory = inventory.filter((items) => {
          return schoolBadges.index.indexOf(search.toLowerCase()) > -1;
        });
      }

    console.log(inventory);
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(iventory);

}