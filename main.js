const main_body = document.getElementById("main-body");
const postListDiv = document.getElementById("postlist");
const postDiv = document.getElementById("post");
const converter = new showdown.Converter();

let root = null;
let useHash = true;
let hash = '#';
let router = new Navigo(root, useHash, hash);

/*document.body.onload = () => {
    getPostList();
}*/

const getPostList = () => {
    let text = ``;
    posts.forEach(item => {
        text += `<p class="postlink" data-link="${item.link}" onclick="router.navigate('/${item.link}')">• ${item.name}</p><br>`;
    })
    main_body.innerHTML = text;
}

const fetchPost = (link) => {
    //console.log(e);
    //let link = e.dataset.link;
    //console.log(link);
    fetch(`./posts/${link}`, {mode:'no-cors'})
    .then(res => res.text())
    .then(data => {
        //console.log(data);
        let html = `<p class='custom-link' onclick="router.navigate('/')">< go home</p>`
        html += converter.makeHtml(data);
        //console.log(html);
        main_body.innerHTML = html;
    })
    .catch(err => console.error(err));
}

router.on(() => {
    getPostList();
})
.resolve();

router.on({
    '/:id': (params) => {
        fetchPost(params.id+'.md');
        console.log('Loaded!');
    }
})
.resolve();

router.notFound(() => {
    console.log('No such page! :o');
})