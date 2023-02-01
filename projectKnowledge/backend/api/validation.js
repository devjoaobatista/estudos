module.exports = app => {
    function existsOrError(value, mensage) {
        if(!value) throw mensage
        if(Array.isArray(value) && value.length === 0) throw mensage
        if(typeof value === "string" && !value.trin()) throw mensage
    }
    
    function notExistsOrError(value, mensage) {
        try{
            existsOrError(value, mensage)
        } catch {
            return
        }
        throw mensage
    }
    
    function equalsOrError(valueA, valueB, mensage){
        if(valueA !== valueB) throw mensage
    }

    return {existsOrError, notExistsOrError, equalsOrError}
}