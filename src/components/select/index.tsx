import * as S from './style'

interface RadioProps {
  text: string;
  value: string;
  selectedValue: string;
  onChange: (value: string) => void;
}

const RadioBox = ({ text, value, selectedValue, onChange }: RadioProps) => {
  return (
    <>
      <S.Wrap as="label">
        <p>{text}</p>
        <input 
          type="radio" 
          name="radio" 
          value={value} 
          checked={selectedValue === value}
          onChange={() => onChange(value)}
        />
      </S.Wrap>
    </>
  );
};

export default RadioBox;
