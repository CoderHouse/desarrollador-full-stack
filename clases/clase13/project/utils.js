search = (query) => {
    return element => {
        for(let i in query) {
            if(query[i] != element[i]) {
                return false;
            }
        }
        return true;
    }
};

exports.search = (list, query) => {
    return list.filter(search(query));
};