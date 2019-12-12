import { User } from '../models/User';

export class Users {
    private users: Array<User> = [];

    public getUsers (loginSubstring: string): Array<User> {
        if(loginSubstring){
            return this.users.filter(user => !user.isDeleted && user.login.indexOf(loginSubstring) !== -1);
        }else{
            return this.users.filter(user => !user.isDeleted);
        }

    }

    public getUser(id: string): User | undefined {
        return this.users.find((user: User) => user.id == id);
    }

    public setUser(userData: User) {
        this.users.push(userData);
    }

    public editUser(id: string, data: User): void {
        const i = this.users.findIndex(user => user.id === id);
        if (i !== -1) {
            this.users.splice(i,1,data);
        }
    }

    public deleteUser(id: string): void {
        this.users.map((user: User) => {
            if(user.id === id){
                user.isDeleted = true;
            }
            return this.users;
        });
    }
}
