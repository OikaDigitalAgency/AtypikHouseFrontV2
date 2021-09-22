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
  filePath: string;
  fileUrl: string;
  file: string;
  createdAt: string;
  updatedAt: string;
  dateDebut: string,
  dateFin: string,
  categories: string;
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
  filePath: string;
  fileUrl: string;
  file: string;
  createdAt: string;
  updatedAt: string;
  dateDebut: string,
  dateFin: string,
  categories: string;
  idUser: string;
}



