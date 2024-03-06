export const tokenStatus = Boolean(localStorage.getItem('token')==''||localStorage.getItem('token')==undefined||localStorage.getItem('token')==null)


export const navLinks = [
    {link: '/', label: 'Home'},
    {link:'/myprofile', label:'Profile'},
    {link:tokenStatus?'/login':'/logout', label:tokenStatus?'Sign in/Register':'Log Out'}
]

export const levels = [
    'Blue','Rare','Medium-Rare','Medium','Medium-Well','Well-Done'
]

export const STATUS ={
    SUCCESS : 'success',
    ERROR : "error",
    LOADING : 'loading'
}