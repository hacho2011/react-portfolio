export interface PortfolioPostProps {
  portfolio: PortfolioPostType;
}

export interface PortfolioPostType {
  title: string;
  startDate: Date;
  endDate: Date;
  comment: string;
  developPoint: string[];
  stacks: string[];
  createdAt: Date;
  link: string;
  img: string;
}
