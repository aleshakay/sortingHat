console.log('sortingHats')

HouseArr =["Gryffindor", "Hufflepuff", "Ravenclaw","Slytherin"]


const printToDom = (divId, stringToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

const sortForm = () => {
    let domString = '';
    domString = `
    <form class="form-inline">
    <div class="form-group mb-2">
    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">
                Student's Name:
            </label>
            <div id="newStudentInput" class="studentsName">
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name Here">
            </div>
        </div>
        <button id="sumbitStuName" type="submit" value = "submit" class="btn btn-primary">Happy Sorting</button>
        </form>`
    printToDom('studentForm', domString);
  }

const studentHouseCards = (houses) => {
    let Studentvalue = document.getElementById('exampleInputEmail1').value;
    let arrHouse = houses[Math.floor(Math.random()*houses.length)];
    let domString = "";
    domString += `
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">${Studentvalue}</h3>
            <h3 class="card-subtitle mb-2 text-muted">${arrHouse}!</h3>
            <button id="exit" class="card-link exit">Expel</button>
        </div>
    </div>`
    printToDom('studentCards', domString);
    exampleInputEmail1.value='';
}
document.body.addEventListener('click',(e) =>{ //button click to bring down the student form
    if (event.target.id === ('sortHatsButton')){
       console.log('hi');
       sortForm();
    } if (event.target.id === ('sumbitStuName')){
       studentHouseCards(HouseArr);
    }
   })

const deletecard = () => {
const removeHogwart = document.getElementsByClassName('exit');
for(let i = 0; i < removeHogwart.length; i++) {
    const expelledStu = removeHogwart[i];
    expelledStu.addEventListener('click', (e) =>{
        const expelatHogwarts = e.target;
        const removeHogwart = expelatHogwarts.parentNode.parentNode;
        removeHogwart.remove();
    })
}
};
