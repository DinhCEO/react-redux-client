const MENU_USER_LOGIN = [
    {
        name : 'Profile',
        link : '/abc'
    },
    {
        name : 'Profile-2',
        link : '/abc'
    },
    {
        name : 'Profil-3',
        link : '/abc'
    },
    {
        name : 'Profile-4',
        link : '/abc'
    },
];


class MenuService {
    constructor() {

    }

   static getMenu() {
        //todo check role then return menu
        return MENU_USER_LOGIN;
    }
}

export default MenuService;