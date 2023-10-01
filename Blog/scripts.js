const posts = [
    {
        title: 'Google',
        content: 'this is a text example'
    },
    {
        title: 'Mozilla',
        content: 'this is a text example'
    },
    {
        title: 'Opera',
        content: 'this is a text example'
    },
    
];

const wrapper = document.getElementById('posts');

for (var i=0; i<posts.length; i++) {
    const postData = posts[i];
    console.log(postData);

    const article = document.createElement('article');
    article.classList.add('article');

    const title = document.createElement('h2');
    title.classList.add('article-title');
    const titleText = document.createTextNode(postData.title);
    title.appendChild(titleText);
    article.appendChild(title);
    
    const content = document.createElement('p');
    const contentText = document.createTextNode(postData.content);
    content.appendChild(contentText);
    article.appendChild(content);
    
    wrapper.appendChild(article)
}



