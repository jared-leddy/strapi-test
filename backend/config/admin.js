module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '481bdeb90460929ea3898cf14950e7ef'),
  },
});
