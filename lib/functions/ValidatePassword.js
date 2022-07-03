const ValidatePassword = (password) => {

    // Check length
    if (password.length < 8) 
        return 'Password must be atleast 8 characters long'

    // Check Case
    if (password == password.toLowerCase() && password != password.toUpperCase()) 
        return 'Password must contain at least on capital letter'

    // Check special chars and numebers
    if (!/\d/.test(password)) // Check for numbers
        if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) // Check for special characters
            return 'Password must contain a number or special character'

    // Success
    return ''
     
}

export default ValidatePassword