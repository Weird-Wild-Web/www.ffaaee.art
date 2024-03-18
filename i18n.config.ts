import { datetimeFormats } from './datetime-formats';
import en from './locales/en.json';
import fr from './locales/fr.json';
import ru from './locales/ru.json';
import de from './locales/de.json';
import ua from './locales/ua.json';
import ko from './locales/ko.json';

export default defineI18nConfig(() => ({
    legacy: false,
    globalInjection: true,

    messages: {
      en,
      fr,
      ru,
      de,
      ua,
      ko,
    },
    datetimeFormats,
}))
