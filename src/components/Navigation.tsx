import { NavLink } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

interface NavigationProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

function Navigation({ darkMode, setDarkMode }: NavigationProps) {
  const { language, setLanguage, t } = useLanguage();

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-lg text-sm font-medium tracking-wide transition-colors duration-200 ${isActive
      ? 'bg-indigo-500 text-white'
      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10'
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-[#0A0A0F]/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10">
      <div className="max-w-5xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">📚</span>
            <span className="font-semibold tracking-tight text-gray-800 dark:text-white">
              {t('appName') || 'SE Fundamentals'}
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-2">
            <NavLink to="/" className={navLinkClass}>
              {t('topics') || 'Topics'}
            </NavLink>
            <NavLink to="/architecture" className={navLinkClass}>
              {t('architecture') || 'Architecture'}
            </NavLink>
          </div>

          {/* Toggle Buttons */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'lo' : 'en')}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-white/5 dark:border dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors duration-200"
            >
              <span className="text-lg">{language === 'en' ? '🇱🇦' : '🇺🇸'}</span>
              <span className="text-xs font-medium text-gray-700 dark:text-gray-200">
                {language === 'en' ? 'ລາວ' : 'EN'}
              </span>
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-white/5 dark:border dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors duration-200"
            >
              {darkMode ? (
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
