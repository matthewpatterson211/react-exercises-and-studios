export default function ChoresList () {
   let pageTitle = "Today's Chores";
   let chore1 = "Empty dishwasher";
   let chore2 = "Complete prep work";
   let chore3 = "Buy Groceries";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <ul>
            <li>{chore1}</li>
            <li>{chore2}</li>
            <li>{chore3}</li>
         </ul>
      </div>      
   );
}