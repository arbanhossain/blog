## Blog

The blog system fetches posts from `/posts` folder in markdown format. Each markdown file in that folder is considered an unique post.

#### Setting Up

Create two folders named `images` and `posts`.

In the `posts.js` file, add the name and link to your posts. Like this:
```Javascript
let posts = [
    {
        "name": "First Post",
        "link": "first"
    },
    {
        "name": "Robots and Future",
        "link": "robot-future"
    },
    ...
    ...
]
```

Make sure you dont add the `.md` extension in the link. The script automatically adds `.md` at the end.

~~All your images should go to the `/images` folder. Just type the filename of the image in your markdown file.~~ You need link them manually for now. 

#### Styling

By default, [water.css](https://github.com/kognise/water.css) is used as a stylesheet. You can delete the reference to this in the `<head>` of `index.html`. Your CSS should be in `main.css`.