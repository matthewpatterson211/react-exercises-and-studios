import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    let authorLink = "https://joyfoodsunshine.com/about-laura/";
    let authorPhoto = "https://joyfoodsunshine.com/wp-content/uploads/2024/06/2024-family-photo-scaled.jpg";
    let authorName = "Laura";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Blog name</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {
    render() {

        return (
        <div> 
            <div>
            <h1>Recipe Title</h1>
            <p>Short recipe description</p>
        </div>
        <RecipeAuthor />
    </div>
    )
    }

}

export default RecipeDescription;