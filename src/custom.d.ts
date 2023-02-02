declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";

type PostData = {
    id: string;
    createdAt: number;
    createdBy: string;
    tag: string;
    thumbnailData: string;
    thumbnailImageURL: string;
    title: string;
};
