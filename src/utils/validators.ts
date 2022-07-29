export const required = (value: string) =>
    value ? undefined : 'Field is required'

export const maxLength = (max: number) => (value: string) =>
    value.length <= max ? undefined : `Max length is ${max} symbols`