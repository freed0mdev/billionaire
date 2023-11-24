import React from 'react';

interface QuestionProps {
  label: string
}

function Question({ label }: QuestionProps) {
  return <h2 className="h2">{label}</h2>;
}

export default Question;
