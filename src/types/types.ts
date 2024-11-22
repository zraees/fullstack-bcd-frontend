export interface IBusiness {
  businessId: number;
  name: string;
  description: string;
  address: string;
  phoneNumber: string;
  email: string;
  website: string;
  hoursOfOperation: string;
  isFeatured: boolean,
  latitude: number,
  longitude: number,
  postalCode: number,
  city: ICity,
  category: ICategory;
  ownerId: number;
  businessPhotos: IBusinessPhoto[];
  businessReviews: IBusinessReview[];
}

export interface ICity {
  cityId: number;
  cityName: string
}

export interface ICategory {
  categoryId: number;
  name: string
  description: string;
}

export interface IBusinessPhoto {
  businessPhotoId: number;
  businessId: number
  url: string
  description: string;
}

export interface IBusinessReview {
  businessReviewId: number;
  businessId: number;
  rating: number;
  comment: string;
  createdAt: Date;
  user: IUser;
}

export interface IUser {
  userId: number;
  username: string;
  email: string;
  userTypeId: number;
  token: string;
}

export interface IBusinessCardMapProps {
  latitude: number
  longitude: number
}

export interface IBusinessCardProps {
  business: IBusiness;
  redirectToDetail: any;
}

export interface IBusinessPhotoProp {
  businessPhotos: IBusinessPhoto[];
}


export interface IBusinessOverviewProp {
  business: IBusiness;
}

export interface IBusinessReviewsProp {
  businessReviews: IBusinessReview[];
}

// Define the shape of the context
export interface ThemeContextType {
  isDarkTheme: boolean;
  toggleTheme: (isDark: boolean) => void;
}

export interface ThemeContextType {
  isDarkTheme: boolean;
  toggleTheme: (isDark: boolean) => void;
}

export interface AuthContextType {
  user: any;
  login: (user: any) => void;
  logout: () => void;
}
