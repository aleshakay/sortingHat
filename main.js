console.log('sortingHats')

array =
[
    "Gryffindor", "Hufflepuff", "Ravenclaw","Slytherin"
]
const printToDom = (divId, stringToPrint) => {
    document.getElementById(divId).innerHTML = stringToPrint;
}

/* document.getElementById('sortHatsButton').addEventListener('click',(e) =>{
   let domString = `

    <form>
        <div class="form-group">
        <label for="exampleInputEmail1">Student's Name:</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name Here">
        </div>
        <button type="submit" class="btn btn-primary">Happy Sorting</button>
    </form>`
}
printToDom('studentForm', domString)
) */
document.getElementById('studentForm').style.visibility="hidden"; //start with the form hidden
document.getElementById('sortHatsButton').addEventListener('click',(e) =>{ //button click to bring down the student form
document.getElementById('studentForm').style.visibility="visible"; //make the form visible 

})
let newStdName = [];

document.getElementById('sumbitStdName').addEventListener('click',(e) =>{
    let boxvalue = document.getElementById('exampleInputEmail1').value;
    newStdName.push(boxvalue);  
}
)

