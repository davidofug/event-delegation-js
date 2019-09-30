//Retrieve tbody of table whose id is register
const TABLE_BODY = document.querySelector('#register tbody')

//Attach @click event listener to tbody.
//Will help to delegate events to children elements, the ones we add after page load.
//Elements added via dom by clicking the add link.
TABLE_BODY.addEventListener('click', event => {

    //Check if the clicked element has a class .add
    if(event.target.matches('.add')) {
        //Do whatever you want here

        //For me, I cloned ancestor element(tr) of the clicked element
        const PARENT_EL = event.target.parentElement.parentElement.cloneNode(true)

        //The default tr has id row_0. I obtain it, split it.
        //Did this for my personal reasons. For example, in the future I might want to re-again the rows
        const PARENT_ID_PARTS = PARENT_EL.id.split("_")
        
        //Get the second element of the PARENT_ID_PARTS, by default it's a string but I turn it to int
        //use: parsentInt
        //Add 1 to the result and assign to newID
        let newID = parseInt(PARENT_ID_PARTS[1]) + 1
        
        //Set the new id for the clone
        PARENT_EL.setAttribute('id',`row_${newID}`)

        //Attach clone to the tbody
        TABLE_BODY.appendChild(PARENT_EL)
    }

    //Check if clicked element has class .delete
    if(event.target.matches('.delete')) {
        //Retrieve ancestor of clicked element
        //Assign to EL variable
        const EL = event.target.parentElement.parentElement
        //If id of EL is not row_0, remove the element from DOM
        if( EL.id != 'row_0') EL.remove()
    }
})

