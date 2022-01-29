console.log("this is index.js file");

// Grab a news container 
let newsAccordion = document.getElementById('newsAccordion');

//Create a ajax get request 
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/everything?q=Apple&from=2022-01-29&sortBy=popularity&apiKey=3f96d63c21304c78a8a82fbc21c188e6', true);

// What to do when response is reaedy 
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let newsHtml = "" ;
        console.log(json);
        articles.forEach(function(element) {
        let news = `<div class="card">
              <h2 class="card-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                ${element["title"]} 
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                ${element["content"]}. <a href = "${element['url']}" target = "_blank> Read more here </a>
                </div>
              </div>

</div>`
newsHtml += news ;
});
newsAccordion.innerHTML = newsHtml ;


    } else {
        console.log("Some error occured");
    }
}
xhr.send();