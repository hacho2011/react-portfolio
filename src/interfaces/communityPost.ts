export interface CommunityPostProps {
  post: CommunityPostType;
}

export interface CommunityPostType {
  title: string;
  nickname: string;
  comments: string[];
  tags: string[];
  createdAt: Date;
}
