export const utilService = {
    makeId,
    createDep,
    createEmp
}


function makeId(length = 5) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}


function createDep(name){
    return {
        name,
        id:makeId(),
        desc:''
    }
}
function createEmp(name,departmentId){
    return {
        name,
        departmentId,
        id:makeId(),
        createdAt:Date.now()
    }
}