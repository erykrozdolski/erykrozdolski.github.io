export const Article = ({ article }: { article: { name: string } }) => {
  return (
    <div>
      <p className="font-black">{article.name}</p>
    </div>
  );
};
