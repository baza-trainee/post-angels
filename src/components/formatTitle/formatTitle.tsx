export const formatTitle = (title: string) => {
  const editTitle = (title: string) => {
    const words = title.split(' ');

    return (
      <>
        {words.slice(0, 1).join(' ')}&nbsp;
        <span>{words.slice(1).join(' ')}</span>
      </>
    );
  };
  return editTitle(title);
};
