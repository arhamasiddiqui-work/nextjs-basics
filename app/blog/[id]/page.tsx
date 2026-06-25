//dynamic pages
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Single Article",
  description: "working on single articles",
};

const ArticlePage = async ({ params }) => {
  const { id } = await params;
  //data fetch
  return <div>Single Article Page: {id}</div>;
};
export default ArticlePage;
