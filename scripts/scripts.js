const guitarGen = {};

guitarGen.inventory = [
    // $ PRICED GUITARS START HERE!
    {
        guitar: "Squier Classic Vibe Stratocaster 60s",
        skill: ["Beginner"],
        price: "$",
        genre: ["Blues"],
        img:'classicVibeStrat.jpg',
    },
    {
        guitar: "Squier Classic Vibe Telecaster 50s",
        skill: ["Beginner"],
        price: "$",
        genre: ["Country"],
        img: 'classicVibeTele.jpg',
    },
    {
        guitar: "Gretsch Double Jet",
        skill: ["Intermediate", "Expert"],
        price: "$",
        genre: ["Rock"],
        img: 'gretschDoubleJet.png',
    },
    {
        guitar: "Fender Standard Stratocaster",
        skill: ["Intermediate", "Expert"],
        price: "$",
        genre: ["Rock","Blues"],
        img: 'standardStrat.jpg',
    },
    {
        guitar: "Fender Standard Telecaster",
        skill: ["Intermediate", "Expert"],
        price: "$",
        genre: ["Rock","Blues","Country"],
        img: 'standardTele.jpg',
    },
    {
        guitar: "Fender Starcaster",
        skill: ["Beginner", "Intermediate", "Expert"],
        price: "$",
        genre: ["SpaceAge"],
        img: "starcaster.jpg",
    },
    {
        guitar: "Ibanez RG450DX",
        skill: ["Beginner", "Intermediate", "Expert"],
        price: "$",
        genre: ["Rock", "Metal"],
        img: 'ibanez.jpg',
    },
    // $ PRICED GUITARS END HERE!
    // $$ PRICED GUITARS START HERE!
    
    {
        guitar: "Gibson SG Standard",
        skill: ["Intermediate","Expert"],
        price: "$$",
        genre: ["Rock"],
        img: 'sgStandard.jpg',
    },
    {
        guitar: "American Professional Series Stratocaster",
        skill: ["Intermediate", "Expert"],
        price: "$$",
        genre: ["Blues"],
        img: 'americanProfStrat.jpg',
    },
    {
        guitar: "Gretsch Country Gentleman",
        skill: ["Intermediate", "Expert"],
        price: "$$",
        genre: ["Country"],
        img: 'gretschCountry.png',
    },
    {
        guitar: "Gibson Flying V",
        skill: ["Intermediate", "Expert"],
        price: "$$",
        genre: ["Metal"],
        img: 'flyingV.jpg',
    },    
    {
        guitar: "Fender EOB Stratocaster",
        skill: ["Intermediate","Expert"],
        price: "$$", 
        genre: ["SpaceAge"],
        img: 'eobStrat.jpg',
    },
    // $$ PRICED GUITARS END HERE!
    // $$$ PRICED GUITARS START HERE!
    {
        guitar: "Gretsch White Penguin",
        skill: ["Intermediate"],
        price: "$$$",
        genre: ["Rock","Blues"],
        img: 'gretschPenguin.png',
    },
    {
        guitar: "Gretsch White Falcon",
        skill: ["Intermediate","Expert"],
        price: "$$$",
        genre: ["Country"],
        img: 'gretschFalcon.png',
    },
    {
        guitar: "PRS Custom 24",
        skill: ["Intermediate"],
        price: "$$$",
        genre: ["Metal"],
        img: 'custom24.png',
    },
    {
        guitar: "65 Supro Martinique",
        skill: ["Intermediate"],
        price: "$$$",
        genre: ["SpaceAge"],
        img: 'supro.png',
    },
    {
        guitar: "Fender Custom Shop John Mayer Limited Edition Black1",
        skill: ["Expert"],
        price: "$$$",
        genre: ["Blues"],
        img: 'black1.jpg',

    },
    {
        guitar: "Jimmy Page Number Two Les Paul",
        skill: ["Expert"],
        price: "$$$",
        genre: ["Rock"],
        img: 'page1.jpg',
    },
    {
        guitar: "ESP Orihalcon",
        skill: ["Expert"],
        price: "$$$",
        genre: ["Metal"],
        img: "orihalcon.png"
    },
    {
        guitar: "The Destroyer by Mark Dalzell",
        skill: ["Expert"],
        price: "$$$",
        genre: ["SpaceAge"],
        img: 'theDestroyer.jpg',
    },    
    // $$$ PRICED GUITARS END HERE!
];

// JS FUNCTIONS START HERE!

guitarGen.init = function() {
    guitarGen.pickAGuitar();
    guitarGen.smoothStart();
    // guitarGen.choicePicked();
    guitarGen.choiceColorChange();
    guitarGen.joeyButton();
    guitarGen.ryanButton();
    guitarGen.resetButton();
};

guitarGen.smoothStart = function() {
    $('a').smoothScroll({
        speed: 800,
    });
};

guitarGen.choiceColorChange = function () {    
    $('.guitar__price__choices input').on('click', function () {
        $('.guitar__price__choices input').next().removeClass('classAdd')
        $(this).next().addClass('classAdd')
    })

    $('.guitar__skill__choices input').on('click', function () {
        $('.guitar__skill__choices input').next().removeClass('classAdd')
        $(this).next().addClass('classAdd')
    })

    $('.guitar__Genre__choices input').on('click', function () {
        $('.guitar__Genre__choices input').next().removeClass('classAdd')
        $(this).next().addClass('classAdd')
    })
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
                title: 'Slow Your Roll! Save Your Bacon!',  text: 'Fledgling Rock-Gods should avoiding spending so much coin!',
                icon:'warning',
                button: 'Go Back and Pay Less',
            });
            $('input[type=radio]').prop('checked', false);
            $('label').removeClass('classAdd');
        };
        $('html, body').animate({
            scrollTop: $('.guitar-showcase').offset().top
        }, 800);
        guitarGen.showMyAxe(suggestedSelection[0]);
    });
};

guitarGen.showMyAxe = function(selectedGuitar) {
    if (!selectedGuitar) {
        return;
    };
    $('.guitar-showcase').append(`
        <div class="displayedGuitar">
            <h2>${selectedGuitar.guitar}</h2>
            <img src="./assets/${selectedGuitar.img}" alt="guitar image">
            <button class="reset-button">Forge Yourself a New Axe!</button>
            <div class="extraPicks">
                <button class="joeyPick">Joey's Pick</button>
                <button class="ryanPick">Ryan's Pick</button>
            </div>
        </div>
    `);
};

guitarGen.joeyButton = function () {
    $('.guitar-showcase').on('click', '.joeyPick', function (e) {
        e.preventDefault();
        $('input[type=radio]').prop('checked', false);
        $('label').removeClass('classAdd');
        $('.displayedGuitar').remove();
        $('.guitar-showcase').append(`
        <div class="displayedGuitar">
            <h2>Johnny Marr Jaguar</h2>
            <img src="./assets/johnnyMarr.jpg" alt="guitar image">
            <button class="reset-button">Forge Yourself a New Axe!</button>
            <div class="extraPicks">
                <button class="ryanPick">Ryan's Pick</button>
            </div>
        </div>
        `);
    });
}; 

guitarGen.ryanButton = function () {
    $('.guitar-showcase').on('click', '.ryanPick', function (e) {
        e.preventDefault();
        $('input[type=radio]').prop('checked', false);
        $('label').removeClass('classAdd');
        $('.displayedGuitar').remove();
        $('.guitar-showcase').append(`
        <div class="displayedGuitar">
            <h2>Bolt-On PRS CE 24</h2>
            <img src="./assets/prsCE24.jpg" alt="guitar image">
            <button class="reset-button">Forge Yourself a New Axe!</button>
            <div class="extraPicks">
                <button class="joeyPick">Joey's Pick</button>
            </div>
        </div>
        `);
    });
}; 

guitarGen.resetButton = function() {
    $('.guitar-showcase').on('click','.reset-button',function(e) {
        e.preventDefault();
        $('input[type=radio]').prop('checked', false);
        $('label').removeClass('classAdd');
        $('.displayedGuitar').remove();
        $('html, body').animate({
            scrollTop: $('#beginning').offset().top
        }, 800);
    });
};

// JS FUNCTIONS END HERE!

// DOCUMENT READY STARTS HERE!
$(function() {
    guitarGen.init();
});    
// DOCUMENT READY ENDS HERE!