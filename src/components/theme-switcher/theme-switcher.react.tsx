import { useEffect } from 'react'
import { useStore } from '@nanostores/react'
import { $theme, toggleTheme, initTheme } from '@store'
import './styles.css'

export default function ThemeSwitcher () {
  useEffect(() => initTheme(), [])

  const theme = useStore($theme)
  const color = theme === 'dark' ? '#313131' : '#DDDDDD'

  return (
    <div onClick={() => toggleTheme()} className={'theme-switch'}>
      {
        theme === 'dark'
          ? (
            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="6" stroke={color} strokeWidth="2"/>
              <path d="M12 2V3" stroke={color} strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 21V22" stroke={color} strokeWidth="2" strokeLinecap="round"/>
              <path d="M22 12L21 12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
              <path d="M3 12L2 12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
              <path d="M19.0708 4.92969L18.678 5.32252" stroke={color} strokeWidth="2" strokeLinecap="round"/>
              <path d="M5.32178 18.6777L4.92894 19.0706" stroke={color} strokeWidth="2" strokeLinecap="round"/>
              <path d="M19.0708 19.0703L18.678 18.6775" stroke={color} strokeWidth="2" strokeLinecap="round"/>
              <path d="M5.32178 5.32227L4.92894 4.92943" stroke={color} strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12.0972 2.53039C12.2913 2.8649 12.2752 3.28136 12.0557 3.5998C11.3898 4.56594 11 5.73595 11 7.00002C11 10.3137 13.6863 13 17 13C18.2641 13 19.4341 12.6102 20.4002 11.9443C20.7187 11.7249 21.1351 11.7087 21.4696 11.9028C21.8041 12.0969 21.9967 12.4665 21.9642 12.8519C21.5313 17.9765 17.236 22 12 22C6.47715 22 2 17.5229 2 12C2 6.76398 6.02351 2.46874 11.1481 2.03585C11.5335 2.0033 11.9031 2.19588 12.0972 2.53039ZM9.42424 4.42352C6.26994 5.49553 4 8.48306 4 12C4 16.4183 7.58172 20 12 20C15.517 20 18.5045 17.7301 19.5765 14.5758C18.7676 14.8508 17.9008 15 17 15C12.5817 15 9 11.4183 9 7.00002C9 6.09922 9.1492 5.2324 9.42424 4.42352Z" fill={color}/>
            </svg>
          )
      }
    </div>
  )
}