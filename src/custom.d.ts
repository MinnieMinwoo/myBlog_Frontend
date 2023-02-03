declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";

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
}
