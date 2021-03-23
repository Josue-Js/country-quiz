
// random number
export const randomNumber = (end: number) => Math.floor(Math.random() * end)



// check if have number repetition in an array
export function numberRepeat(numbers: number[]) {

    const tempArray: number[] = []

    const isNumberRepeat = numbers.filter(number => {

        if (!tempArray.includes(number)) {
            tempArray.push(number)
            return false
        } 

        return number
    })

    if(isNumberRepeat.length > 0) {
        return true
    }

    return false
}