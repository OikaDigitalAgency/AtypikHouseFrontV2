export interface IRegisterHouses {
  title: string;
  description: string;
  address: string;
  zipecode: number;
  city: string;
  status: boolean;
  nbbeds: number;
  price: number;
  tax: number;
  listeActivities: string[];
  listidPics: string[];
  dateDebut: string,
  dateFin: string,
  idCategory: string;
  idUser: string;
}

export interface IHousesEntity {
  title: string;
  description: string;
  address: string;
  zipecode: number;
  city: string;
  status: boolean;
  nbbeds: number;
  price: number;
  tax: number;
  listeActivities: string[];
  listidPics: string[];
  dateDebut: string,
  dateFin: string,
  idCategory: string;
  idUser: string;
}



