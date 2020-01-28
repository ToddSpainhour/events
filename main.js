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
            instructor: "Todd"
        }

]

console.log("pies", pies);

const printToDom = (divId, textToPrint) => {
    const printToThisArea = document.getElementById(divId);
    printToThisArea.innerHTML = textToPrint;
}



const pieBuilder = () => {
    let domString = "";
    for(i = 0; i < pies.length; i++) {
        domString += `<div class="individualPie">`;
        domString += `<h6 class="type"> ${pies[i].name}</h6>`;
        domString += `<p class="price">${pies[i].price}</p>`;
        domString += `<p class="isWarm"> ${pies[i].isWarm}<p/>`;
        domString += `<p class="isOrganic"> ${pies[i].isOrganic}</p>`;
        domString += `<p class="crust"> ${pies[i].crust}</p>`;
        domString += `<p class="iceCream">  ${pies[i].iceCream}</p>`;
        domString += `<p class="isAvaliable"> ${pies[i].isAvaliable}</p>`;
        domString += `<img src=${pies[i].imageUrl} class="petImage">`;
        domString += `<p class="drinkPairing"> ${pies[i].drinkPairing}</p>`;
        domString += `<p class="instructor"> ${pies[i].instructor}</p>`;
        domString += `</div>`;
    } 
    printToDom("printToThisArea", domString)


};

pieBuilder()