export interface User{
    id: number;
    name: string;
    email: string;
    age: number;
}

//Base de datos (colrccion) simulada
export const users: User[] = [
    {id: 1, name: 'Luis Romero', email: 'luisromero@gmail.com', age:20},
    {id: 2, name: 'Juan Gonzalez', email:'JuanFe@gmail.com', age:17},
    {id: 3, name: 'Juan Lopez', email:'juanlopez@gmail.com', age:18},
];