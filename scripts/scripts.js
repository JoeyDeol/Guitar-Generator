// I will design a landing page that has a button to start the guitar generator. This button will have an event watcher on it, that once triggered, will disappear the landing portion of the site and then bring up the guitar generator.
    // This can probably be achieved through toggling classes of both the landing div and the generator div, switching them between display:none and display:block.

//Next I will make it so that in the guitar generator there are 4 categories (this could scale up to more) and they have a few options each. 
    // each of the options will be retrieved as userInputs, and depending on which inputs are picked, I will try to run .filter() array methods to use the inputs to pear down the possible outputs. 

// At the bottom of the generator page there will be an submit button, which will have another event watcher that will do a similar toggling of classes to the first button, but will instead toggle only for the generator section and the results section.

// The final page will have the filtered result and a few extra buttons to show my personal choice and ryan's personal choice in guitar as well as a quiz again button to go back to the landing/starting section of the generator.

const guitarGen = {};

guitarGen.inventory = [
    // $ PRICED GUITARS START HERE!
    {
        guitar: "Squier Classic Vibe Stratocaster 60s",
        skill: ["Beginner"],
        price: "$",
        genre: ["Blues"]
    },
    {
        guitar: "Squier Classic Vibe Telecaster 50s",
        skill: ["Beginner"],
        price: "$",
        genre: ["Country"]
    },
    {
        guitar: "Gretsch Double Jet",
        skill: ["Intermediate", "Expert"],
        price: "$",
        genre: ["Rock"]
    },
    {
        guitar: "Fender Standard Stratocaster",
        skill: ["Intermediate", "Expert"],
        price: "$",
        genre: ["Rock","Blues"]
    },
    {
        guitar: "Fender Standard Telecaster",
        skill: ["Intermediate", "Expert"],
        price: "$",
        genre: ["Rock","Blues","Country"]
    },
    {
        guitar: "Ibanez RG450DX",
        skill: ["Beginner","Intermediate","Expert"],
        price: "$",
        genre: ["Rock","Metal"]
    },
    // $ PRICED GUITARS END HERE!
    // $$ PRICED GUITARS START HERE!
    
    {
        guitar: "Gibson SG Standard",
        skill: ["Intermediate","Expert"],
        price: "$$",
        genre: ["Rock"]
    },
    {
        guitar: "American Professional Series Stratocaster",
        skill: ["Intermediate", "Expert"],
        price: "$$",
        genre: ["Blues"]
    },
    {
        guitar: "Gretsch Country Gentleman",
        skill: ["Intermediate", "Expert"],
        price: "$$",
        genre: ["Country"]
    },
    {
        guitar: "Gibson Flying V",
        skill: ["Intermediate", "Expert"],
        price: "$$",
        genre: ["Metal"]
    },    
    {
        guitar: "Fender EOB Stratocaster",
        skill: ["Intermediate","Expert"],
        price: "$$", 
        genre: ["SpaceAge"]
    },
    // $$ PRICED GUITARS END HERE!
    // $$$ PRICED GUITARS START HERE!
    {
        guitar: "Fender Custom Shop John Mayer Limited Edition Black1",
        skill: ["Expert"],
        price: "$$$",
        genre: ["Blues"]
    },
    {
        guitar: "Jimmy Page Number Two Les Paul",
        skill: ["Expert"],
        price: "$$$",
        genre: ["Rock"]
    },
    {
        guitar: "Gretsch White Falcon",
        skill: ["Expert"],
        price: "$$$",
        genre: ["Country"]
    },
    {
        guitar: "ESP Orihalcon",
        skill: ["Expert"],
        price: "$$$",
        genre: ["Metal"]
    },
    {
        guitar: "The Destroyer by Mark Dalzell",
        skill: ["Expert"],
        price: "$$$",
        genre: ["SpaceAge"]
    },    
    
    // $$$ PRICED GUITARS END HERE!
];

guitarGen.init = function() {
    console.log("working") 
    guitarGen.pickAGuitar();
};

guitarGen.pickAGuitar = function() {
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
        });
        if ((userPrice === '$$' || userPrice === '$$$')  && userSkill === 'Beginner'){
            swal({
                title: 'Slow Down Slayer! Save Your Bacon!',  text: 'Fledgling Rock-Gods should avoiding spending so much coin!',
                icon:'warning',
                button: 'Go Back and Pay Less',
            });
        }
        guitarGen.showMyAxe(suggestedSelection[0]);
    });
};

guitarGen.showMyAxe = function(selectedGuitar) {
    $('body').append(`<h1>${selectedGuitar.guitar}</h1>`);
};

$(function() {
    guitarGen.init();
    $('.landing-start input').on('click', function(e) {
        e.preventDefault();
        console.log('I have been clicked!');
    });
});    