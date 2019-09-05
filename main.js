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