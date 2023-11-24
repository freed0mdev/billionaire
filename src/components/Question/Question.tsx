import React from 'react';

interface QuestionProps {
  label: string
}

function Question({ label }: QuestionProps) {
  return <h2 className="h2 game-page__question">{label}</h2>;
}

export default Question;
