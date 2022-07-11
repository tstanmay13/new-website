// template_6j174dj
// service_e0cmeyn
// pDlKgbHRQ6pawlQE9

function contact(event){
    event.preventDefault();
    emaijs
        .sendForm(
            'service_e0cmeyn',
            'template_6j174dj',
            event.target,
            'pDlKgbHRQ6pawlQE9'
        ) .then(() => {
            console.log('This worked');
        })
    
}


