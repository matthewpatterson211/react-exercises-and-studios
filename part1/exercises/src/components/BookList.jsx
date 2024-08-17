export default function BookList() {
   let pageTitle = "Book List";
   let book1 = "https://www.freidamcfadden.com/uploads/1/3/3/4/133401022/published/inmate2.jpg?1713564226";
   let book2 = "https://www.freidamcfadden.com/uploads/1/3/3/4/133401022/published/neverlie.jpg?1713564199";
   let book3 = "https://www.freidamcfadden.com/uploads/1/3/3/4/133401022/published/perfectsonstairs.jpg?1713564621";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Inmate by Freida Mcfadden" />
         <img src={book2} alt="Never Lie by Freida Mcfadden" />
         <img src={book3} alt="The Perfect Son by Freida Mcfadden" />
      </div>      
   );
}