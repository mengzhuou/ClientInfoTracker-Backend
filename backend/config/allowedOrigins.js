// only these url are allowed to access our api, otherwise our api is open to the public
const allowedOrigins = [
    'http://localhost:3000',
    'https://zwj-info-tracker-backend-cd756f069f6f.herokuapp.com',
    'https://zwj-info-tracker.netlify.app'
]

module.exports = allowedOrigins