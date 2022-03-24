const bttns = document.getElementsByClassName('btn');
var selectedBttn = null;
var finalRating = document.getElementById('selectedRating');

for (var i = 0; i < bttns.length; i++) {
    bttns[i].addEventListener('click', function handleClick(event) {
        if (selectedBttn !== null) {
            if (selectedBttn.id !== event.target.id) {
                selectedBttn.classList.remove('clickedButton')
            }
        }
        selectedBttn = event.target
        selectedBttn.classList.add('clickedButton')
    })
}

const submitBttn = document.getElementById('submitBttn')
let selectedValue = null;

submitBttn.addEventListener('click', function handleClick(event) {
    if (selectedBttn !== null) {
        selectedValue = selectedBttn.value;
        var addedText = document.createTextNode(
            selectedValue + ' out of 5'
        )
        finalRating.appendChild(addedText);
        document.getElementById('startDiv').style.display = 'none';
        document.getElementById('thankYouDiv').style.display = 'flex';
//         fetch("https://subteweb.gatsbyjs.io/api/challenge", {
//             method: "post",
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 rating: selectedValue,
//             })
//         })
// .then( (response) => {
//     if (response.ok) {
//         console.log('ok')
//     }
// });
    }
    else {
        alert('You have to select a number before submitting your answer.')
    }
});