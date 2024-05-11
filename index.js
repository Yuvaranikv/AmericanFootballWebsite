const teams = [
    {
        teamcode: "DAL",
        name: "Dallas Cowboys",
        locatedIn: "Arlington, TX"
    },
    {
        teamcode: "DEN",
        name: "Denver Broncos",
        locatedIn: "Denver, CO"
    },
    {
        teamcode: "HOU",
        name: "Houston Texans",
        locatedIn: "Houston, TX"
    },
    {
        teamcode: "KAN",
        name: "Kansas City Chiefs",
        locatedIn: "Kansas City, MO"
    }
];



window.onload = function () {

    // load the dropdown list (see function below)
    initTeamsDropdown();
    const teamList = document.getElementById("teamList");
    teamList.onchange = onStatesSelectionChanged;

    // other stuff

};
teamList.onchange = onStatesSelectionChanged;
function initTeamsDropdown() {
    const dropdown = document.getElementById("teamList");


    let length = teams.length;
    for (let i = 0; i < length; i++) {

        // create the option element and set the text and
        // value at the same time
        let theOption = new Option(teams[i].name, teams[i].teamcode, teams[i].locatedIn);

        // append the option as a child of (inside) the 
        // select element
        teamList.appendChild(theOption);
    }
    console.log(teamList);

}





// otherwise, selectedValue would be TX if Texas was selected
function onStatesSelectionChanged() {
    const dropdown = document.getElementById("teamList");
    let selectedValue = teamList.value;
    let locatedIn;
    const selectedOption = dropdown.options[dropdown.selectedIndex];
   
    // Get the text content of the selected <option>
    const selectedText = selectedOption.textContent;
 for (let i=0;i<teams.length;i++)
 {
    if (teams[i].teamcode===selectedValue)
         locatedIn=teams[i].locatedIn;
        
 }
    if (selectedValue == "") {
        // ugly popup!
        // exit the event handler
    }
    else
        return [selectedText, selectedValue,locatedIn];
}

function onBtnClick() {
    const [teamText, teamValue,locatedIn] = onStatesSelectionChanged();
    const pOutput = document.getElementById("pOutput");
    console.log(pOutput)
    pOutput.innerText = `You selected the ${teamText}(${teamValue}) who play in ${locatedIn}`;
}
