const Xray = require('x-ray');

/**
 * ! NOT COMPLETE
 * Return blog posts from https://dennisokeeffe.com/blog
 * @return {Promise} [posts]
 */
function getPosts(url = 'https://dennisokeeffe.com/blog') {
    const x = Xray();
    return new Promise((resolve, reject) => {
        x(`${url}`, '.component-ga-tagged-list-one div.item.four', [
            {
                title: 'h3.text.bold',
                description: '.text.description',
                tags: ['.text.link.tag'],
                image: 'a.text.link@href'
            }
        ])((err, data) => {
            if (err) {
                reject(err);
            }
            // console.log(data);
            resolve(data);
        });
    });
}

/**
 * Function to run from script.
 *
 */
const run = async() => {
    const posts = await getPosts();
    console.log(posts);
}

run();