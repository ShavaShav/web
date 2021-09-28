export type Theme = {
  profile: string,
  body: string,
  text: string,
  toggleBorder: string,
  background: string,
}

export const lightTheme: Theme = {
  profile: '#EEE',
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
}

export const darkTheme: Theme = {
  profile: '#262527',
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
}