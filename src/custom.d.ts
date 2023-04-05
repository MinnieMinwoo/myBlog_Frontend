declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.woff";

interface PostData {
  id: string;
  createdAt: number;
  createdBy: string;
  category?: string[];
  tag: string[];
  thumbnailData: string;
  thumbnailImageURL: string;
  title: string;
}

interface PostDetail extends PostData {
  likes: string[];
  detail: string;
  nickname: string;
  imageList: string[];
}

interface postEditData {
  title: string;
  category: string[];
  postData: string;
  thumbnailImgLink: string;
  thumbnailData: string;
  imageList: string[];
  tag: string[];
}

interface UserData {
  isLoggedIn: boolean;
  uid?: string;
  email?: string;
  photoURL?: string;
  nickname?: string;
  description?: string;
  accessToken?: string;
  isGoogleLink?: boolean;
  isFacebookLink?: boolean;
  isTwitterLink?: boolean;
}

interface CategoryData {
  mainField: string;
  subField: string[];
  thumbnailLink: string[];
}

type BootStrapColor =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";
