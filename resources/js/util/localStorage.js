export default class LocalStorageManager {

    static setData(item, data) {
        localStorage.setItem(item, JSON.stringify(data));
    }

    static getRawItem(item) {
        let data = localStorage.getItem(item);

        data ? data : {};

        return data;
    }
    
    static getItem(item) {
        let data = localStorage.getItem(item);

        data ? data = JSON.parse(data) : data = {};

        return data;
    }
}

/*

data format:

authData = {
    isLoggedIn: bool
    user:           
        id: int,
        name: string,
        email: string,
        activation_token: string
}

childrenData = {
    count = int,
    children: {
        child1: {
            name: string,
            age: int,
            avatarUrl: /img/avatars/avatar_1.png
            activityCats: [
                'cuisine',
                'truc',
                'machin
            ]
        }
        child2, child3...
    }
}


*/