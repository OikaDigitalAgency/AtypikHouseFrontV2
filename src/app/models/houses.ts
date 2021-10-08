export interface IRegisterHouses {
  id : number,
  title: string;
  description: string;
  address: string;
  zipcode: number;
  city: string;
  status: boolean;
  nbbeds: number;
  price: number;
  tax: number;
  listeActivities: string[];
  listIdEquipements: string[],
  listidTags: string[],
  fileUrl: string;
  dateDebut?: string,
  dateFin?: string,
  categorie: string;
  idUser: string;
}

export interface IHousesEntity {
  id : number,
  title: string;
  description: string;
  address: string;
  zipcode: number;
  city: string;
  status: boolean;
  nbbeds: number;
  price: number;
  tax: number;
  listeActivities: string[];
  listIdEquipements: string[],
  listidTags: string[],
  fileUrl: string;
  dateDebut?: string,
  dateFin?: string,
  categorie: string;
  idUser: string;
}



