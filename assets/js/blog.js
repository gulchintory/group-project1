// Calls the information from the form.html posts it to the blog dynamically
// Save the information to user storage 
function saveBlog() {
    var title = document.getElementById("title");
    var body = document.getElementById("body");
    var date = document.getElementById("date");
    var map = document.getElementById("multi-state");
    var name = document.getElementById("name");
    var blog = {
        title: title.value,
        body: body.value.trim(),
        date: date.value,
        map: map.value,
        name: name.value,
    };
  localStorage.setItem("blog", JSON.stringify(blog));
}

function renderBlog() {
    var lastBlog = JSON.parse(localStorage.getItem("blog"));
    if (lastBlog !== null) {
        document.getElementById("saved-title").innerHTML = lastBlog.title;
        document.getElementById("saved-body").innerHTML = lastBlog.body;
        document.getElementById("saved-date").innerHTML = lastBlog.date;
        document.getElementById("saved-map").innerHTML = lastBlog.map;
        document.getElementById("saved-name").innerHTML = lastBlog.name;
    } else {
        return;
    }
}
//console log to check if the function is working
console.log("blog.js is working");


// define sumbit button
var submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    saveBlog();
    renderBlog();
});

function init() {
    renderBlog();
}
init();


/* Attempt to save multiple user blogs to local storage

    var title = document.getElementById("title");
    var body = document.getElementById("body");
    var date = document.getElementById("date");
    var map = document.getElementById("multi-state");
    var name = document.getElementById("name");
    var blog = [];

    function renderBlog() {
        blog.innerHTML = "";
        blogCountSpan.textContent = blog.length;

        for (var i = 0; i < blog.length; i++) {
            var blog = blog[i];

            var li = document.createElement("li");
            li.textContent = blog;
            li.setAttribute("data-index", i);

            var button = document.createElement("button");
            button.textContent = "Complete ✔️";

            li.appendChild(button);
            blogList.appendChild(li);
        }
    }

    function init() {
        var storedBlog = JSON.parse(localStorage.getItem("blog"));

        if (storedBlog !== null) {
            blog = storedBlog;
        }

        renderBlog();
    }

    function storeBlog() {
        localStorage.setItem("blog", JSON.stringify(blog));
    }

    blogForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var blogText = blogInput.value.trim();

        if (blogText === "") {
            return;
        }

        blog.push(blogText);
        blogInput.value = "";

        storeBlog();
        renderBlog();
    });
*/