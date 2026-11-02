/** The greeting for a visitor called `name`, in French when `language` is 'fr' and in English otherwise. */
export const greet = (name, language = 'en') =>
  language === 'fr' ? `Bonjour, ${name}!` : `Hello, ${name}!`;
