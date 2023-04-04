import chef from "../images/chef.jpg";
import restaurant from "../images/restaurant.jpg";
import "../Styles/Chicago.css";
function Chicago () {
    return (
        <div class="chica">
            <div class="story">
            <div class="storytitles">
            <h1 class="storyhead">Little Lemon</h1>
            <h2 class="storysub">Chicago</h2>
            </div>
            <p class="actualstory">Little Lemon was an inspiration from our Mediterranean ancestors.<br />
            Mama Mara always prepared to us her delicious recipes that she learned when she was a kid. <br />
            She was the pioneer of this dream making it true. <br/>We proudly serve to our customers
            the best mediterranean recipes and we do it with the same love that Mama Mara put into her recipes. </p>
            </div>
            <div class="storyimages">
            <div class="chef1">
            <img src={chef} class="chef" width="260px" height="230px"/>
            </div>
            <div class="chef2">
            <img src={restaurant} class="restaurant" width="260px" height="230px"/>
            </div>
            </div>
        </div>
    )
}

export default Chicago;