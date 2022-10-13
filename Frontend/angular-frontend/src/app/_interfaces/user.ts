export interface IUser {
    id: number,
    username: string,
    password: string,
    first_name: string,
    last_name: string,
    email: string,
    role: string,
    age: number,
    img: string
}

export interface ISingleUser{
    data: IUser
}

// export interface IDataUser{
//     data: IUser[]
// }