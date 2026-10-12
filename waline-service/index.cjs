process.env.GRAVATAR_STR ||= 'https://seccdn.libravatar.org/avatar/{{mail | trim | lower | md5}}';

const Waline = require('@waline/vercel');

module.exports = Waline({ plugins: [] });
