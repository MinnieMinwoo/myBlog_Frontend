declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.woff";

interface PostData {
  id: string;
  createdAt: number;
  createdBy: string;
  tag: string;
  thumbnailData: string;
  thumbnailImageURL: string;
  title: string;
}

interface PostDetail extends PostData {
  likes: number;
  detail: string;
  nickname: string;
  imageList: string[];
}

interface postEditData {
  title: string;
  postData: string;
  thumbnailImgLink: string;
  thumbnailData: string;
  imageList: string[];
}

interface UserData {
  isLoggedIn: boolean;
  uid?: string;
  email?: string;
  photoURL?: string;
  nickname?: string;
  description?: string;
  accessToken?: string;
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
