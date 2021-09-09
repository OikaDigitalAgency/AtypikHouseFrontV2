export interface IRegister {
    email: string;
    firstName: string; 
    lastName: string;
    address: string; 
    city: string;
    zipCode: number;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
  }

export interface IUserEntity {
  email: string;
  firstname: string; 
  lastname: string;
  address: string; 
  city: string;
  zipcode: number;
  phone: string;
  plainPassword: string;
}