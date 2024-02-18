export const faq = ({ question, answer }: { question: string; answer: string }) => {
  return (
    <div>
      <div>{question}</div>
      <div>{answer}</div>
    </div>
  );
};
