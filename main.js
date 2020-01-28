console.log("Your JS is connected.")

const pies = [
    {
        name: "Apple",
        price: 1000, 
        isWarm: false,
        isOrganic: true,
        crust: "extra flakey", 
        iceCream: "vinilla",
        isAvaliable: true,
        imageUrl: "https://www.gannett-cdn.com/presto/2018/10/12/PNJM/a9db5aeb-878d-4a1a-9fa7-a436b5c5e78e-thanksgiving_bakeries_--_grace_cranberry_pie.jpg?width=534&height=401&fit=bounds&auto=webp",
        drinkPairing: "whiskey", 
        instructor: "Zoe"
    },

    {
        name: "Regular Apple Pie",
        price: 5000, 
        isWarm: true,
        isOrganic: true,
        crust: "under baked", 
        iceCream: "Vegan Chocolate",
        isAvaliable: true,
        imageUrl: "https://images.heb.com/is/image/HEBGrocery/prd-email/best-organic-pumpkin-pie-recipe.jpg",
        drinkPairing: "wine", 
        instructor: "Mary"
    },

    {
        name: "Pizza Pie",
        price: 5000, 
        isWarm: true,
        isOrganic: true,
        crust: "under baked", 
        iceCream: "Vegan Chocolate",
        isAvaliable: true,
        imageUrl: "http://www.rhodesbread.com/blog/images/YvonneF/10102016/rhodes-pizza-pie-10.jpg",
        drinkPairing: "High Life", 
        instructor: "Luke"
        },

        {
            name: "Pi",
            price: 3.14, 
            isWarm: false,
            isOrganic: true,
            crust: "Crumb", 
            iceCream: "Moose Tracks",
            isAvaliable: true,
            imageUrl: "https://images-gmi-pmc.edge-generalmills.com/2252a28f-3470-443c-adb2-b08deea71be0.jpg",
            drinkPairing: "Milk", 
            instructor: "Luke"
        },

        {
            name: "Best Pie",
            price: 15, 
            isWarm: false,
            isOrganic: true,
            crust: "bread", 
            iceCream: "melted",
            isAvaliable: true,
            imageUrl: "https://www.discoverlosangeles.com/sites/default/files/styles/hero/public/images/2019-03/The%20Rose%20Banana%20Cream%20Pie.jpg?itok=tAm7rvMO",
            drinkPairing: "water", 
            instructor: "Todd"
        },

        {
            name: "Award Winning Pie",
            price: 150, 
            isWarm: true,
            isOrganic: true,
            crust: "tastey", 
            iceCream: "one scoop",
            isAvaliable: true,
            imageUrl: "https://www.phillymag.com/wp-content/uploads/sites/3/2014/12/apple-pie.jpg",
            drinkPairing: "soda", 
            instructor: "Zoe"
        }

]

console.log("pies", pies);

const printToDom = (divId, textToPrint) => {
    const printToThisArea = document.getElementById(divId);
    printToThisArea.innerHTML = textToPrint;
}



const pieBuilder = (monkeyButtArray) => {
    let domString = "";
    for(i = 0; i < monkeyButtArray.length; i++) {
        domString += `<div class="individualPie">`;
        domString += `<h6 class="type"> ${monkeyButtArray[i].name}</h6>`;
        domString += `<p class="price">${monkeyButtArray[i].price}</p>`;
        domString += `<p class="isWarm"> ${monkeyButtArray[i].isWarm}<p/>`;
        domString += `<p class="isOrganic"> ${monkeyButtArray[i].isOrganic}</p>`;
        domString += `<p class="crust"> ${monkeyButtArray[i].crust}</p>`;
        domString += `<p class="iceCream">  ${monkeyButtArray[i].iceCream}</p>`;
        domString += `<p class="isAvaliable"> ${monkeyButtArray[i].isAvaliable}</p>`;
        domString += `<img src=${monkeyButtArray[i].imageUrl} class="petImage">`;
        domString += `<p class="drinkPairing"> ${monkeyButtArray[i].drinkPairing}</p>`;
        domString += `<p class="instructor"> ${monkeyButtArray[i].instructor}</p>`;
        domString += `</div>`;
    } 
    printToDom("printToThisArea", domString)


};

/*
zoesPies = () => {
   console.log("inside zoesPies");
   const myPies = []
   for(i = 0; i < pies.length; i++) {
    if( pies[i].instructor === "Zoe"){
        myPies.push(pies[i]);
    } 
    }
    pieBuilder(myPies, pieBuilder(pies))
}

marysPies = () => {
    console.log("inside marysPies");
    const myPies = []
    for(i = 0; i < pies.length; i++) {
     if( pies[i].instructor === "Mary"){
         myPies.push(pies[i]);
     } 
     }
     pieBuilder(myPies, pieBuilder(pies))
 }

 lukesPies = () => {
    console.log("inside lukesPies");
    const myPies = []
    for(i = 0; i < pies.length; i++) {
     if( pies[i].instructor === "Luke"){
         myPies.push(pies[i]);
     } 
     }
     pieBuilder(myPies, pieBuilder(pies))
 }


 marysPies()
*/


const findMyPies = (e) => {
    const buttonId = e.target.id
    if (buttonId === "All"){
        pieBuilder(pies);
    } else {
    const myPies = []
    for(i = 0; i < pies.length; i++) {
     if( pies[i].instructor === buttonId){
         myPies.push(pies[i]);
     } 
     }
     pieBuilder(myPies, pieBuilder(pies))
}
}


const events = () => {
    document.getElementById('Zoe').addEventListener('click', findMyPies);
    document.getElementById('Mary').addEventListener('click', findMyPies);
    document.getElementById('Luke').addEventListener('click', findMyPies);
    document.getElementById('Todd').addEventListener('click', findMyPies);
    document.getElementById('All').addEventListener('click', findMyPies);
    
    document.getElementById('buttonId').addEventListener('click', findMyPies);
}

const init = () =>{
pieBuilder(pies)
events()
};

init()



