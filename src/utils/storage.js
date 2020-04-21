export function Usestorage(settings){
    if(!!arguments.length){
        localStorage.setItem('react-storage',JSON.stringify(settings))
    }
    else{
        let storage = localStorage.getItem('react-storage') || '{}'
        return JSON.parse(storage)
    }
}
export function Removestorage () {
    localStorage.removeItem('react-storage')
}