export default function HobbyLinks() {
    const hobbyLinks = ["https://www.goodreads.com", "https://www.ign.com"];

    return (
        <div>
            <a herf = {hobbyLinks[0]}>Goodreads</a>
            <a href = {hobbyLinks[1]}>Video Games</a>
        </div>
    );

}