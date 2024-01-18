import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTranslation } from 'react-i18next';

const languages = [
  {
    code: 'en',
    name: 'English',
  },
  {
    code: 'hi',
    name: 'Hindi',
  },
  {
    code: 'fr',
    name: 'French',
  },
];

const Localization = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex justify-around items-center">
      <div className="text-4xl font-semibold text-primary">{t('greeting')}</div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-gray-200 p-2 rounded-lg">
            Change Language
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Can Change Lanugage </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {languages.map((language) => (
              <DropdownMenuItem
                key={language.code}
                onClick={() => i18n.changeLanguage(language.code)}
              >
                {language.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Localization;
