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

  images: any[]; // post
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
  business: IBusiness;
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
  businessId: number;
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

export interface IStarRatingProps {
  rating: number;
  onRatingChange: (rating: number) => void;
}

export interface IBusinessAddReviewProps {
  businessId: number;
  userId: number;
}

export interface IToastProps {
  show: boolean, 
  onClose: () => void,
  title: string, 
  message: string
}

export interface ICityProp {
    value: number,
    onChange: (e: number) => void;
}

export interface ICategoryProp {
  value: number,
  onChange: (e: number) => void;
}

export interface ISearchCriteria {
  searchText: string, 
  cityId: number, 
  categoryId: number
}