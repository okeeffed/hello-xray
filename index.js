const Xray = require('x-ray');

function getPosts(url = 'https://blog.dennisokeeffe.com/') {
  const x = Xray();
  return new Promise((resolve, reject) => {
    x(`${url}`, 'main:last-child', {
      items: x('div', [
        {
          title: 'h3 > a',
          description: 'p',
          link: 'h3 > a@href',
          date: 'small',
        },
      ]),
    })((err, data) => {
      if (err) {
        reject(err);
      }

      resolve(data);
    });
  });
}

const main = async () => {
  const posts = await getPosts();
  console.log(posts);
};

main();
