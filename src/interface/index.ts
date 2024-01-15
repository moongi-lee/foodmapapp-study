export interface StoreType {
  id: number;
  phone?: string | null ;
  address?: string | null ;
  lat: string | null ;
  lng: string | null ;
  name: string | null ;
  category: string | null ;
  storeType: string | null ;
  foodCertifyName: string | null ;
}

export interface StoreApiResponse {
  data: StoreType[];
  page?: string | number;
  totalPage?: number;
  totalCount?: number;
}

export interface LocationType {
  lat?: string | null ;
  lng?: string | null ;
  zoom?: number;
}

export interface SearchType {
  q?: string;
  district?: string;
}