import React from 'react';

interface QuestionProps {
  question: string;
  options: string[];
  onSelectOption: (index: number) => void;
  selectedOption: number | null;
}

const Question: React.FC<QuestionProps> = ({ question, options, onSelectOption, selectedOption }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">{question}</h2>
      <div className="space-y-2">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelectOption(index)}
            className={`block w-full p-4 border rounded-lg text-left ${selectedOption === index ? 'bg-blue-200 border-blue-400' : 'border-gray-300'}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;

