type InputType = 'login' | 'password'

interface IValidationResult {
    isValid: boolean
    message: string
}

const emptyInput = (inputName: string): string => {
    const name = inputName[0].toLowerCase() + inputName.slice(1)
    return `Пожалуйста введите ${name}`
}

export const inputValidation = (type: InputType, text: string, inputName: string):IValidationResult  => {
    switch(type){
        case 'login':
            if (!text) {
                return {isValid: false, message: emptyInput(inputName)}
            }
            if (text) {
                return {isValid: true, message: ''}
            }
            break
        case 'password':
            if (!text) {
                return {isValid: false, message: emptyInput(inputName)}
            }
            if (text) {
                return {isValid: true, message: ''}
            }
            break
        default:
            return {isValid: false, message: ''}    

    }

    return { isValid: false, message: '' }
}