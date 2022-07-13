const todaysDate = moment().format("LL");

const todaysDateEl = document.getElementById("currentDay");

todaysDateEl.textContent = todaysDate;

// An array of one hour time blocks
class timeBlock 
{
   constructor( startHour, stopHour )
   {
      this.timeBlock = [];
      
      for ( let i = startHour;   i < stopHour;   i++ )
      {
         this.timeBlock.push( { hour: i,   body: "" } );
      }

      return this.timeBlock;
   }
}

// Load schedule from storage or create a new schedule
var schedule = window.localStorage.getItem( "workDaySchedule" );
if ( schedule === null )
{
   schedule = new timeBlock( 9, 17 );
   window.localStorage.setItem("workDaySchedule", JSON.stringify(schedule));
}

// create time block element 
function addTimeBlock( s, index )
{
   // Create the elements for our time block
   ContainerEl = document.createElement("section");
   hourContainerEl = document.createElement("div");
   hourTextEl = document.createElement("span");
   timeBlockTextEl = document.createElement("textarea");
   saveButtonEl = document.createElement("button");

   hourContainerEl.appendChild(hourTextEl);
   
   ContainerEl.appendChild(hourContainerEl);
   ContainerEl.appendChild(timeBlockTextEl);
   ContainerEl.appendChild(saveButtonEl);

   document.querySelector( ".container" ).appendChild(ContainerEl);

   ContainerEl.setAttribute("data-index", JSON.stringify(index))
   timeBlockTextEl.textContent = s[ index ].body;
   hourTextEl.textContent = s[ index ].hour;
   saveButtonEl.textContent = "Save";
}

function saveTimeBlock( index )
{
   localStorage.setItem("workDaySchedule")
}

for ( let i = 0;  i < schedule.length;  i++ )
{
   addTimeBlock( schedule, i );
}
