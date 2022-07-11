const todaysDate = moment().format("LL");

const todaysDateEl = document.getElementById("currentDay");

todaysDateEl.textContent = todaysDate;

// Load schedule from storage
var schedule = window.localStorage.getItem( "workDaySchedule" );
if ( schedule !== null )
{
    
}

class timeBlock 
{
   constructor( startHour )
   {
      
   }
}

// create time block element 
function addTimeBlock( hour )
{
   // Create the elements for our time block
   ContainerEl = document.createElement("section");
   hourContainerEl = document.createElement("div");
   hourTextEl = document.createElement("p");
   timeBlockTextEl = document.createElement("textarea");
   saveButtonEl = document.createElement("button");

   hourContainerEl.appendChild(hourTextEl);
   
   ContainerEl.appendChild(hourContainerEl);
   ContainerEl.appendChild(timeBlockTextEl);
   ContainerEl.appendChild(saveButtonEl);

   document.querySelector( ".container" ).appendChild(ContainerEl);
}

for ( let h = 9;  i < 17;  i++ )
{
   addTimeBlock( h );
}
