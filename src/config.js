let env = process.env

let config = {
    api: {
        'CRUD_BASE_URL':  env.REACT_APP_CRUD_API_BASE_URL,
    },
    DEFAULT_DATE_FORMAT: 'DD / MM / YYYY',
    APP_AUTHORIZATION: 'Bearer 38e8a0d8fc82419289bd5ed947f395dc',
    env,
}
export default config;