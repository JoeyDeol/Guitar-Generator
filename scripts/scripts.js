// I will design a landing page that has a button to start the guitar generator. This button will have an event watcher on it, that once triggered, will disappear the landing portion of the site and then bring up the guitar generator.
    // This can probably be achieved through toggling classes of both the landing div and the generator div, switching them between display:none and display:block.

//Next I will make it so that in the guitar generator there are 4 categories (this could scale up to more) and they have a few options each. 
    // each of the options will be retrieved as userInputs, and depending on which inputs are picked, I will try to run .filter() array methods to use the inputs to pear down the possible outputs. 

// At the bottom of the generator page there will be an submit button, which will have another event watcher that will do a similar toggling of classes to the first button, but will instead toggle only for the generator section and the results section.

// The final page will have the filtered result and a few extra buttons to show my personal choice and ryan's personal choice in guitar as well as a quiz again button to go back to the landing/starting section of the generator.

const guitarGen = {};

guitarGen.inventory = [
    {
        guitar: "Squier Classic Vibe Stratocaster",
        skill: ["Beginner","Expert"],
        price: "$",
        genre: ["Blues"]
    },
    {
        guitar: "Fender Standard Stratocaster",
        skill: ["Beginner", "Intermediate"],
        price: "$",
        genre: ["Rock","Blues"]
    },
    {
        guitar: "Fender Standard Telecaster",
        skill: ["Beginner", "Intermediate"],
        price: "$",
        genre: ["Rock","Country"]
    },
    {
        guitar: "Gretsch Double Jet",
        skill: ["Beginner", "Intermediate"],
        price: "$",
        genre: ["Rock"]
    },
    {
        guitar: "Fender EOB Stratocaster",
        skill: ["Intermediate","Expert"],
        price: "$$", 
        genre: ["Rock","SpaceAge"]
    },
    {
        guitar: "Gibson SG Standard",
        skill: ["Intermediate"],
        price: "$$$",
        genre: ["Rock","Metal"]
    },
];

//    const selectedGenre = 
   
//    guitarGen.inventory.forEach(function(item){
//         let userInput = item.genre[selectedItems];
//         if(user)
//    })

$(function() {
    $('.landing-start input').on('click', function(e) {
        e.preventDefault();
        console.log('I have been clicked!');
    });

    $('form').on('submit', function(event) {
        event.preventDefault();
        const userPrice = $('input[name=guitarPrice]:checked').val();
        const userSkill = $('input[name=guitarSkill]:checked').val();
        const userGenre = $('input[name=guitarGenre]:checked').val();
       
        const suggestedSelection = guitarGen.inventory.filter(function(guitar) {
            return guitar.price === userPrice;
        }).filter(function(guitar) {
            return guitar.skill.includes(userSkill);
        }).filter(function(guitar) {
            return guitar.genre.includes(userGenre);
        // }).filter(function(guitar) {

        });
        console.log(suggestedSelection);
    });
});    