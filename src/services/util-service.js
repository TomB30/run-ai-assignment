export const utilService = {
    createDep,
    createEmp
}

function createDep(name){
    return {
        name,
        id:_makeId(),
        desc:''
    }
}

function createEmp(name,departmentId){
    return {
        name,
        departmentId,
        id:_makeId(),
        createdAt:Date.now()
    }
}

function _makeId(length = 5) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}