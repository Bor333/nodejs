import colors from 'colors'
//const colors = require('colors')

const args = process.argv.slice(2)


console.log(`Hello ${colors.green(args.join(', '))}!`)