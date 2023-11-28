type inputType = 'text' | 'password'

interface IValidInput {
    isValid: boolean,
    message: string
}

export interface IInputProps {
    value: string,
    title: string,
    type: inputType,
    required: boolean,
    changeHandler: (e: React.ChangeEvent) => void,
    onFocusHandler: () => void
    validationResult: IValidInput
}