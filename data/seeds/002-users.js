
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          full_name: 'Jane Fonda',
          password: 'password',
          email: 'janefonda4lyfe@yahoo.com',
          profilePhoto: 'https://pixel.nymag.com/imgs/fashion/daily/2015/02/25/25-jane-fonda-lede.w330.h412.jpg', 
        }, 
        {
          full_name: 'Richard Simmons',
          password: 'password',
          email: 'richardnotgene@gmail.com',
          profilePhoto: 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/769341148/b973d4fb-8d82-4df8-a15a-4be17765b4db/036ecf3b-ed34-439f-bfb6-5dbe7676965d/1280x720/match/image.jpg' 
        }, 
        {
          full_name: 'Jack LaLanne',
          password: 'password',
          email: 'jacklalanne@aol.com',
          profilePhoto: 'https://cbsnews2.cbsistatic.com/hub/i/r/2011/01/24/bd3d463d-a642-11e2-a3f0-029118418759/resize/620x465/0d0d9383885c4882b821593ff0507a2f/AP80022001195.jpg'
        }
      ]);
    });
};
