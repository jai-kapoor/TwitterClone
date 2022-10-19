
function processForm(e){
    e.preventDefault();
    console.log(e);

    const tweet = document.getElementById("tweet");

    //return false if the tweet is empty
    if (tweet.value.length == 0){  	
         return false;
      }  	



    const ul = document.getElementById("timeline");
    const blockquote = document.createElement("blockquote");

    blockquote.appendChild(document.createTextNode(tweet.value));
    ul.appendChild(blockquote)
    tweet.value = "";

    //clear the box

    return false;
}

const form = document.getElementById("send-tweet");
form.addEventListener("submit", processForm);

