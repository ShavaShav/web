export type Theme = {
  profile: string,
  body: string,
  text: string,
  toggleBorder: string,
  background: string,
  button: string,
  toggleButtonBackground: string;
}

export const lightTheme: Theme = {
  profile: '#EEE',
  body: '#FFF',
  text: '#363537',
  background: '#363537',
  toggleBorder: '#FFF',
  toggleButtonBackground: '#999',
  button: 'linear-gradient(#39598A, #79D7ED)',
}

export const darkTheme: Theme = {
  profile: '#262527',
  body: '#363537',
  text: '#FAFAFA',
  background: '#999',
  toggleBorder: '#6B8096',
  toggleButtonBackground: '#363537',
  button: 'linear-gradient(#091236, #1E215D)',
}