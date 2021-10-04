export type Theme = {
  profile: string,
  body: string,
  text: string,
  toggleBorder: string,
  background: string,
  toggleButtonBackground: string;
  button: string,
  buttonBorder: string,
  buttonTint: string,
  cardBackground: string,
  cardTint: string,
  labelBackground: string,
  labelTint: string,
}

export const lightTheme: Theme = {
  profile: '#EEE',
  body: '#FFF',
  text: '#363537',
  background: '#363537',
  toggleBorder: '#FFF',
  toggleButtonBackground: '#999',
  // button: 'linear-gradient(#39598A, #79D7ED)',
  button: '#424282',
  buttonBorder: '#363537',
  buttonTint: '#FAFAFA',
  cardBackground: '#EEE',
  cardTint: '#363537',
  labelBackground: '#FFF',
  labelTint: '#363537',
}

export const darkTheme: Theme = {
  profile: '#262527',
  body: '#363537',
  text: '#FAFAFA',
  background: '#999',
  toggleBorder: '#6B8096',
  toggleButtonBackground: '#363537',
  // button: 'linear-gradient(#091236, #1E215D)',
  button: '#424282',
  buttonBorder: '#FAFAFA',
  buttonTint: '#FAFAFA',
  cardBackground: '#262527',
  cardTint: '#FAFAFA',
  labelBackground: '#363537',
  labelTint: '#FAFAFA',
}