'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { defaultLanguage, dictionaries, getNestedValue, languages } from '../lib/i18n'

const I18nContext = createContext(null)

export function I18nProvider({ children }) {
  const [language, setLanguageState] = useState(defaultLanguage)

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem('themezyo-language')
    if (storedLanguage && languages.some((item) => item.code === storedLanguage)) {
      setLanguageState(storedLanguage)
    }
  }, [])

  const languageMeta = languages.find((item) => item.code === language) || languages[0]

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = languageMeta.dir
  }, [language, languageMeta.dir])

  function setLanguage(nextLanguage) {
    if (!dictionaries[nextLanguage]) return
    setLanguageState(nextLanguage)
    window.localStorage.setItem('themezyo-language', nextLanguage)
  }

  const value = useMemo(() => {
    const dictionary = dictionaries[language] || dictionaries[defaultLanguage]

    function t(path, fallback = path) {
      const translated = getNestedValue(dictionary, path)
      const defaultValue = getNestedValue(dictionaries[defaultLanguage], path)
      return translated ?? defaultValue ?? fallback
    }

    return { language, languageMeta, languages, setLanguage, t }
  }, [language, languageMeta])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used inside I18nProvider')
  }
  return context
}
