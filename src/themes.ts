const Colors = {
  backgroundDark: '#161517',
  secondaryBackgroundDark: '#212022',
  backgroundLight: '#FFF',
  secondaryBackgroundLight: '#DDD',
  actionDark: '#795548',
  actionLight: '#8D6E63',
  primaryDark: '#2e355c',
  primaryLight: '#3a4373',
  secondaryDark: '#353535',
  secondaryLight: '#C1C1C1',
  textDark: '#FAFAFA',
  textLight: '#363537',
}

export type Theme = {
  profile: string,
  profileTint: string,
  body: string,
  text: string,
  toggleBorder: string,
  dateBannerBackground: string,
  filterBackground: string,
  filterDropdown: string,
  filterOptionActive: string,
  toggleButtonBackground: string;
  button: string,
  buttonBorder: string,
  buttonBorderActive: string,
  buttonTint: string,
  cardBackdrop: string,
  cardBackground: string,
  cardBody: string,
  cardTint: string,
  labelBackground: string,
  labelTint: string,
  themeToggleBackground: string,
  themeToggleTint: string,
  recordListHeader: string,
}

export const lightTheme: Theme = {
  profile: Colors.primaryLight,
  profileTint: Colors.textDark,
  body: Colors.backgroundLight,
  text: Colors.textLight,
  dateBannerBackground: Colors.secondaryBackgroundLight,
  filterBackground: Colors.secondaryBackgroundLight,
  filterDropdown: Colors.backgroundLight,
  filterOptionActive: Colors.secondaryLight,
  toggleBorder: Colors.secondaryLight,
  toggleButtonBackground: '#999',
  // button: 'linear-gradient(#39598A, #79D7ED)',
  button: Colors.actionLight,
  buttonBorder: Colors.textLight,
  buttonBorderActive: '#161517',
  buttonTint: '#FAFAFA',
  cardBackdrop: '#99918A',
  cardBackground: Colors.secondaryLight,
  cardBody: Colors.secondaryBackgroundLight,
  cardTint: Colors.textLight,
  labelBackground: Colors.secondaryLight,
  labelTint: Colors.textLight,
  themeToggleBackground: '#7781bb',
  themeToggleTint: 'yellow',
  recordListHeader: '#5e5528',
}

export const darkTheme: Theme = {
  profile: Colors.primaryDark,
  profileTint: Colors.textDark,
  body: Colors.backgroundDark,
  text: Colors.textDark,
  dateBannerBackground: Colors.secondaryBackgroundDark,
  filterBackground: Colors.secondaryBackgroundDark,
  filterDropdown: Colors.backgroundDark,
  filterOptionActive: Colors.secondaryDark,
  toggleBorder: '#6B8096',
  toggleButtonBackground: Colors.primaryDark,
  // button: 'linear-gradient(#091236, #1E215D)',
  button:  Colors.actionDark,
  buttonBorder: '#CCC',
  buttonBorderActive: Colors.textDark,
  buttonTint: Colors.textDark,
  cardBackdrop: '#5e5528',
  cardBackground: Colors.secondaryDark,
  cardBody: Colors.secondaryBackgroundDark,
  cardTint: Colors.textDark,
  labelBackground: Colors.primaryDark,
  labelTint: Colors.textDark,
  themeToggleBackground: Colors.secondaryBackgroundDark,
  themeToggleTint: 'yellow',
  recordListHeader: '#5e5528',
}