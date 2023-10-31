import { atom } from 'nanostores'

export const $theme = atom('')

export function initTheme() {
  const localTheme = window.localStorage.getItem('theme')
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"

  document.querySelector('html').classList.add(localTheme || systemTheme)
  $theme.set(localTheme || systemTheme)
}

export function toggleTheme() {
  $theme.set($theme.get() === 'dark' ? 'light' : 'dark')
  document.querySelector('html').classList.toggle('dark')
  window.localStorage.setItem('theme', $theme.get())
}