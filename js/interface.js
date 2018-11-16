document.addEventListener("DOMContentLoaded", function(event) {
var newsFeed = new NewsFeed
newsFeed.getFeed()

setTimeout(displayHeadlines, 1000);

function displayHeadlines () {

  for (i = 0; i < newsFeed.news_articles.length; i++) {

    // createHTMLObject("div", [{attr: "id", val: "headline_"+i}],"headlines")
    var div = document.createElement("div")
    div.setAttribute("id", "headline_" + i)
    document.getElementById("headlines").appendChild(div);
    var img = document.createElement("img");
    img.setAttribute("src", newsFeed.news_articles[i].thumbnail);
    img.setAttribute("id", "thumbnail_" + i)
    img.setAttribute("class", "thumbnail");
    document.getElementById("headline_" + i).appendChild(img);
    console.log("headline_"+i)
    // createHTMLObject("img", [{attr: "id", val: "thumbnail_" + i},{attr: "class", val: "thumbnail"},{attr: "src", val: newsFeed.news_articles[i].thumbnail}],"headline_"+i)
    var heading = document.createElement("h2")
    heading.setAttribute("class", "heading");
    heading.setAttribute("id", "heading_" + i);
    // createHTMLObject("h2", [{attr: "id", val: "heading_"+i},{attr: "class", val: "heading"}],"headline_" + i)
    heading.innerHTML += newsFeed.news_articles[i].webTitle;
    document.getElementById("headline_" + i).appendChild(heading);
    var link_container = document.createElement("p")
    link_container.setAttribute("class", "link_container");
    link_container.setAttribute("id", "link_container_" + i);
    document.getElementById("headline_" + i).appendChild(link_container);
    var link = document.createElement("a")
    link.setAttribute("class", "link");
    link.setAttribute("id", "link_" + i);
    link.setAttribute("href", newsFeed.news_articles[i].webUrl);
    link.setAttribute("target", "_blank");
    link.innerHTML = "View link on guardian site"
    document.getElementById("link_container_" + i).appendChild(link);
    var new_win_icon = document.createElement("img")
    new_win_icon.setAttribute("src", "images/new_window.png");
      var hr = document.createElement("hr")
      document.getElementById("headline_" + i).appendChild(hr);
  }

  var headingclass = document.getElementsByClassName("heading");
  var thumbnailclass = document.getElementsByClassName("thumbnail");

  var getIDfromClick = function() {
    console.log(this.getAttribute("class"))
    var attribute = this.getAttribute("id");
    var itemclass = this.getAttribute("class");
    id = attribute.replace(itemclass + "_", "")
    // showArticle(id)
    showArticleTEST(id)
  };

  function showArticleTEST(id) {
    console.log("abc")
    var url = newsFeed.news_articles[id].webUrl
    newsFeed.getArticle(url)
    setTimeout(articleprinter, 1000);

  }

  function articleprinter() {
    console.log(newsFeed.article)
    document.getElementById("headlines").style.display = "none"
    document.getElementById("article").style.display = "block"
    document.getElementById("article").innerHTML = ""
    var img = document.createElement("img")
    img.setAttribute("src", newsFeed.news_articles[id].thumbnail);
    img.setAttribute("id", "thumbnail_" + id)
    document.getElementById("article").appendChild(img);
    var heading = document.createElement("h2")
    heading.setAttribute("id", "heading_" + id);
    heading.innerHTML += newsFeed.news_articles[id].webTitle;
    document.getElementById("article").appendChild(heading);
    for (i = 0; i < newsFeed.article.length; i++) {
      var sentence = document.createElement("p")
      sentence.setAttribute("class", "sentence");
      sentence.setAttribute("id", "sentence_" + i);
      sentence.innerHTML = newsFeed.article[i];
      document.getElementById("article").appendChild(sentence);
    }

    var backbutton = document.createElement("button")
    backbutton.setAttribute("class", "backbutton");
    backbutton.setAttribute("id", "backbutton");
    backbutton.setAttribute("value", "Back");
    backbutton.innerHTML = "Back to headlines"
    document.getElementById("article").appendChild(backbutton);
    document.getElementById("backbutton").addEventListener("click", function() {
      document.getElementById("headlines").style.display = "block"
      document.getElementById("article").style.display = "none"
})
  }

  for (var i = 0; i < headingclass.length; i++) {
    headingclass[i].addEventListener('click', getIDfromClick, false);
  }
  for (var i = 0; i < thumbnailclass.length; i++) {
    thumbnailclass[i].addEventListener('click', getIDfromClick, false);
  }

//   var showArticle = function(id) {
//     document.getElementById("headlines").style.display = "none"
//     document.getElementById("article").style.display = "block"
//     var url = newsFeed.news_articles[id].webUrl
//     var apiUrl = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + url + ""
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         document.getElementById("article").innerHTML = ""
//         var data = JSON.parse(this.response);
//         var img = document.createElement("img")
//         img.setAttribute("src", newsFeed.news_articles[id].thumbnail);
//         img.setAttribute("id", "thumbnail_" + id)
//         document.getElementById("article").appendChild(img);
//         var heading = document.createElement("h2")
//         heading.setAttribute("id", "heading_" + id);
//         heading.innerHTML += newsFeed.news_articles[id].webTitle;
//         document.getElementById("article").appendChild(heading);
//         var sentences = data.sentences
//         for (i = 0; i < sentences.length; i++) {
//           var sentence = document.createElement("p")
//           sentence.setAttribute("class", "sentence");
//           sentence.setAttribute("id", "sentence_" + i);
//           sentence.innerHTML = data.sentences[i];
//           document.getElementById("article").appendChild(sentence);
//         }
//         var backbutton = document.createElement("button")
//         backbutton.setAttribute("class", "backbutton");
//         backbutton.setAttribute("id", "backbutton");
//         backbutton.setAttribute("value", "Back");
//         backbutton.innerHTML = "Back to headlines"
//         document.getElementById("article").appendChild(backbutton);
//         document.getElementById("backbutton").addEventListener("click", function() {
//           document.getElementById("headlines").style.display = "block"
//           document.getElementById("article").style.display = "none"
//
//         });
//
//       }
//     }
//     xhttp.open("GET", apiUrl, true);
//     xhttp.send();
//
// }

// displayHeadlines()

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
  // if (this.readyState == 4 && this.status == 200) {
  //   var data = JSON.parse(this.response);
  //   var news = data.response.results
    // console.log(newsFeed.news_articles.length)
    // for (i = 0; i < newsFeed.news_articles.length; i++) {
    //   // for (i = 0; i < 8; i++) {
    //   // console.log(newsFeed.news_articles)
    //   var div = document.createElement("div")
    //   div.setAttribute("id", "headline_" + i)
    //   document.getElementById("headlines").appendChild(div);
    //   var img = document.createElement("img");
    //   img.setAttribute("src", newsFeed.news_articles[i].thumbnail);
    //   img.setAttribute("id", "thumbnail_" + i)
    //   img.setAttribute("class", "thumbnail");
    //   document.getElementById("headline_" + i).appendChild(img);
    //   var heading = document.createElement("h2")
    //   heading.setAttribute("class", "heading");
    //   heading.setAttribute("id", "heading_" + i);
    //   heading.innerHTML += newsFeed.news_articles[i].webTitle;
    //   document.getElementById("headline_" + i).appendChild(heading);
    //   var link_container = document.createElement("p")
    //   link_container.setAttribute("class", "link_container");
    //   link_container.setAttribute("id", "link_container_" + i);
    //   document.getElementById("headline_" + i).appendChild(link_container);
    //   var link = document.createElement("a")
    //   link.setAttribute("class", "link");
    //   link.setAttribute("id", "link_" + i);
    //   link.setAttribute("href", newsFeed.news_articles[i].webUrl);
    //   link.setAttribute("target", "_blank");
    //   link.innerHTML = "View link on guardian site"
    //   document.getElementById("link_container_" + i).appendChild(link);
    //   var new_win_icon = document.createElement("img")
    //   new_win_icon.setAttribute("src", "images/new_window.png");
    //     var hr = document.createElement("hr")
    //     document.getElementById("headline_" + i).appendChild(hr);
    // }

    // var headingclass = document.getElementsByClassName("heading");
    // var thumbnailclass = document.getElementsByClassName("thumbnail");
    //
    // var getIDfromClick = function() {
    //   console.log(this.getAttribute("class"))
    //   var attribute = this.getAttribute("id");
    //   var itemclass = this.getAttribute("class");
    //   id = attribute.replace(itemclass + "_", "")
    //   showArticle(id)
    // };
    //
    // for (var i = 0; i < headingclass.length; i++) {
    //   headingclass[i].addEventListener('click', getIDfromClick, false);
    // }
    // for (var i = 0; i < thumbnailclass.length; i++) {
    //   thumbnailclass[i].addEventListener('click', getIDfromClick, false);
    // }
    //
    // var showArticle = function(id) {
    //   document.getElementById("headlines").style.display = "none"
    //   document.getElementById("article").style.display = "block"
    //   var url = news[id].webUrl
    //   var apiUrl = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + url + ""
    //   var xhttp = new XMLHttpRequest();
    //   xhttp.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //       document.getElementById("article").innerHTML = ""
    //       var data = JSON.parse(this.response);
    //       var img = document.createElement("img")
    //       img.setAttribute("src", news[id].fields.thumbnail);
    //       img.setAttribute("id", "thumbnail_" + id)
    //       document.getElementById("article").appendChild(img);
    //       var heading = document.createElement("h2")
    //       heading.setAttribute("id", "heading_" + id);
    //       heading.innerHTML += news[id].webTitle;
    //       document.getElementById("article").appendChild(heading);
    //       var sentences = data.sentences
    //       for (i = 0; i < sentences.length; i++) {
    //         var sentence = document.createElement("p")
    //         sentence.setAttribute("class", "sentence");
    //         sentence.setAttribute("id", "sentence_" + i);
    //         sentence.innerHTML = data.sentences[i];
    //         document.getElementById("article").appendChild(sentence);
    //       }
    //       var backbutton = document.createElement("button")
    //       backbutton.setAttribute("class", "backbutton");
    //       backbutton.setAttribute("id", "backbutton");
    //       backbutton.setAttribute("value", "Back");
    //       backbutton.innerHTML = "Back to headlines"
    //       document.getElementById("article").appendChild(backbutton);
    //       document.getElementById("backbutton").addEventListener("click", function() {
    //         document.getElementById("headlines").style.display = "block"
    //         document.getElementById("article").style.display = "none"
    //
    //       });
    //
    //     }
    //   }
    //   xhttp.open("GET", apiUrl, true);
    //   xhttp.send();
    // }


  // }
};
// xhttp.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail,headline,trailText,bodyText&show-tags=all", true);
// xhttp.send();


})
