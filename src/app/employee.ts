export class Employee 
{
    user_id: number;
    firstName: string;
    lastName: string;
    password: string;
    role: string;
    
    constructor(id: number,firstName:string,lastName:string,password:string,role:string) 
    {
       this.user_id = id;
       this.firstName=firstName;
       this.lastName = lastName;
       this.password = password;
       this.role = role;
    }
}
