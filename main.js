let sliderHeading = document.getElementById('sliderHeading');

let arrowRight = document.getElementById('arrowRight');
let sliderImage = document.getElementById('sliderImage');
let currentPage = 1;
const numberOfPages = 5;

function changeContentToNext () {
    if (currentPage < numberOfPages) {
        currentPage += 1;
        switch (currentPage.toString()) {
            case '1':
                sliderHeading.innerHTML = 'Mailchimp’s robust support and documentation has allowed us to explore unique solutions and evolve with our brand\'s needs in ways other ‘enterprise’ marketing platforms should take notice of.';
                break;
            case '2':
                sliderHeading.innerHTML = 'Take to other explore should allowed unique documentation solutions evolve our robust platforms ways brand\'s marketing us and support and notice in ‘enterprise’ with has needs of. Mailchimp’s ';
                break;
            case '3':
                sliderHeading.innerHTML = 'And brand\'s needs and other documentation notice has ways allowed platforms should to mailchimp’s explore our robust solutions ‘enterprise’ of. Marketing us in evolve unique support take with ';
                break;
            case '4':
                sliderHeading.innerHTML = 'Notice other needs marketing ways in explore to unique and of. Solutions should ‘enterprise’ has documentation evolve with take robust brand\'s and platforms mailchimp’s support our us allowed';
                break;
            case '5':
                sliderHeading.innerHTML = 'Unique allowed support evolve solutions should marketing notice explore documentation and our robust needs brand\'s to other in with has ‘enterprise’ platforms mailchimp’s us take ways and of.';
                break;
        }
        console.log(currentPage);
        sliderImage.src = '/img/partner' + currentPage + '.jpg';
        changeCircle()
    }
}
function changeContentToLast () {
    if (currentPage > 1) {
        currentPage -= 1;
        console.log(currentPage);
        switch (currentPage.toString()) {
            case '1':
                sliderHeading.innerHTML = 'Mailchimp’s robust support and documentation has allowed us to explore unique solutions and evolve with our brand\'s needs in ways other ‘enterprise’ marketing platforms should take notice of.';
                break;
            case '2':
                sliderHeading.innerHTML = 'Take to other explore should allowed unique documentation solutions evolve our robust platforms ways brand\'s marketing us and support and notice in ‘enterprise’ with has needs of. Mailchimp’s ';
                break;
            case '3':
                sliderHeading.innerHTML = 'And brand\'s needs and other documentation notice has ways allowed platforms should to mailchimp’s explore our robust solutions ‘enterprise’ of. Marketing us in evolve unique support take with ';
                break;
            case '4':
                sliderHeading.innerHTML = 'Notice other needs marketing ways in explore to unique and of. Solutions should ‘enterprise’ has documentation evolve with take robust brand\'s and platforms mailchimp’s support our us allowed';
                break;
            case '5':
                sliderHeading.innerHTML = 'Unique allowed support evolve solutions should marketing notice explore documentation and our robust needs brand\'s to other in with has ‘enterprise’ platforms mailchimp’s us take ways and of.';
                break;
        }
        sliderImage.src = '/img/partner' + currentPage + '.jpg';
        changeCircle()
    }
}

function changeCircle () {
    let currentCircle = document.getElementById('circle' + currentPage);
    if (currentPage > 1) {
        let lastCircle = document.getElementById('circle' + (currentPage - 1));
        lastCircle.src = 'img/sliderCircle.png';
    }
    if (currentPage < numberOfPages) {
        let nextCircle = document.getElementById('circle' + (currentPage + 1));
        nextCircle.src = 'img/sliderCircle.png';
    }
    currentCircle.src = 'img/sliderCircleActive.png';
}
