import dotenv from 'dotenv'

(() => {
    if (process.env.NODE_ENV === 'prod') {
        dotenv.config({path: './src/environment/prod.env'})
    } else if (process.env.NODE_ENV === 'uat') {
        dotenv.config({path: './src/environment/uat.env'})
    } else {
        dotenv.config({path: './src/environment/dev.env'})
    }
})()

export default {}