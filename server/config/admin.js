module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e6150e1117157f9af7c95af3badc8bef'),
  },
});
