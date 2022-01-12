import { CommunityPostType } from '@/interfaces/communityPost';

export const posts: CommunityPostType[] = [
  {
    title: '제목입니다',
    nickname: '하얀초계국수',
    comments: ['댓글1', '댓글2', '댓글3'],
    tags: ['태그1', '태그2', '태그3'],
    createdAt: new Date(),
  },
  {
    title: '뿌엥입니다',
    nickname: '뿌엥',
    comments: ['댓글1', '댓글2', '댓글3'],
    tags: ['태그1', '태그2', '태그3'],
    createdAt: new Date(),
  },
  {
    title: '띠용입니다',
    nickname: '띠용',
    comments: ['댓글1', '댓글2', '댓글3'],
    tags: ['태그1', '태그2', '태그3'],
    createdAt: new Date(),
  },
];
