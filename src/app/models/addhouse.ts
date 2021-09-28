export interface IAddHouses {
  title: string;
  description: string;
  address: string;
  city: string;
  zipecode: number;
  nbbeds: number;
  price: number;
  tax: number;
  listeActivities: string[];
  imagefile: ImageData;
}


export interface IAddHousesEntity {
    title: string;
    description: string;
    address: string;
    city: string;
    zipecode: number;
    nbbeds: number;
    price: number;
    tax: number;
    listeActivities: string[];
    imagefile: ImageData;
  }