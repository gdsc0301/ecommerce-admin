import * as enDict from '../dictionaries/en.json';

const getTranslation = (text: string, lang: string = 'en') => {
  switch (lang) {
    case 'en':
      return enDict[text as keyof typeof enDict] || text;
    default:
      return enDict[text as keyof typeof enDict] || text;
  }
};

interface TranslatedTextProps {
  children: string;
  lang?: string;
}

const TranslatedText = ({children, lang = 'en'}: TranslatedTextProps) => {
  return (
    <>{getTranslation(children, lang)}</>
  );
}

export {getTranslation as __, TranslatedText as _e};