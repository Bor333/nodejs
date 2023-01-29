import colors from 'colors'

export default function body(a, b) {

    let res = []

    for (let i = a; i <= b; i++) {
        if (isSimple(i) == true) res.push(i)
    }

    if (res.length != 0) {
        printLights(res)
    } else {
        console.log(colors.red('Нет простых чисел!'))
    
    }
}


function isSimple(num) {
    if (num < 2) return false

    for (let i = 3; i <= num / 2; i++) {
        if (num % i == 0) return false
    }

    return true
}

function printLights(arr) {
    for (let i = 0; i < arr.length; i++) {

        if ((i + 1) % 3 == 0) {
            console.log(colors.red(arr[i]))
        } else if ((i + 1) % 2 == 0) {
            console.log(colors.yellow(arr[i]))
        } else {
            console.log(colors.green(arr[i]))
        }
    }
}