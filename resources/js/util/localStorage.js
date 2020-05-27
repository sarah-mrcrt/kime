export default class LocalStorageManager {

    static setData(item, data) {
        localStorage.setItem(item, JSON.stringify(data));
    }

    static getStringifiedItem(item) {
        let data = localStorage.getItem(item);

        
        data ? data=data : data={}; // We return an empty object if item is not found

        return data;
    }
    
    static getItem(item) {
        let data = localStorage.getItem(item);

        data ? data = JSON.parse(data) : data = {}; // Samesies

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