const postListDiv = document.getElementById("postlist");
const postDiv = document.getElementById("post");
const converter = new showdown.Converter();

document.body.onload = () => {
    getPostList();
}

const getPostList = () => {
    let text = ``;
    posts.forEach(item => {
        text += `<a href="#" id="postlink" data-link="${item.link}" onclick="fetchPost(this)">${item.name}</a><br>`;
    })
    postListDiv.innerHTML = text;
}

const fetchPost = (e) => {
    //console.log(e);
    let link = e.dataset.link;
    console.log(link);
    fetch(`./posts/${link}`, {mode:'no-cors'})
    .then(res => res.text())
    .then(data => {
        console.log(data);
        let html = converter.makeHtml(data);
        console.log(html);
        postDiv.innerHTML = html;
    })
    .catch(err => console.error(err));
}