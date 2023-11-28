import { IUser } from "../models"
import { getRandomInt } from '../utils'

class DataService {
    private users: IUser[] 
    constructor() {
        this.users = [
            {
                "username": "Petya",
                "password": "12345"
            },
            {
                "username": "admin",
                "password": "admin"
            },
            {
                "username": "Sveta",
                "password": "54321"
            }
        ]
    }

    getUsers = async ():Promise<IUser[]> => {
        return new Promise((resolve,reject) => {
            const randomInt = getRandomInt(1,10)
            setTimeout(()=>{
                    if(randomInt === 1) {
                        reject('Ошибка')
                    }else {
                        resolve(this.users)
                    }
            },2000)
        })
    }

    setToLocalStorage = (key: string, data: string) => {
        localStorage.setItem( key , data)
    }

    removeLocalStorage = (key: string) => {
        localStorage.removeItem(key)
    }

    getFromLocalStorage = (key: string) => {
        return localStorage.getItem(key)
    }
}

export const dataService = new DataService() 