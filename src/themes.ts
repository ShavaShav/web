const Colors = {
  backgroundDark: "#161517",
  secondaryBackgroundDark: "#212022",
  backgroundLight: "#FFF",
  secondaryBackgroundLight: "#E5E5E5",
  actionDark: "#59532E",
  actionLight: "#736A3A",
  primaryDark: "#2e3459",
  primaryLight: "#3a4373",
  secondaryDark: "#353535",
  secondaryLight: "#CACACA",
  textDark: "#FAFAFA",
  textLight: "#363537",
  secondaryTextDark: "#AAA",
  secondaryTextLight: "#555",
};

export type Theme = {
  profile: string;
  profileTint: string;
  profileBtn: string;
  profileBtnActive: string;
  body: string;
  text: string;
  textInactive: string;
  toggleBorder: string;
  dateBannerBackground: string;
  dateBannerText: string;
  filterBackground: string;
  filterDropdown: string;
  filterOptionActive: string;
  toggleButtonBackground: string;
  button: string;
  buttonBorder: string;
  buttonBorderActive: string;
  buttonTint: string;
  cardBackdrop: string;
  cardBackground: string;
  cardBody: string;
  cardBorderActive: string;
  cardTint: string;
  labelBackground: string;
  labelTint: string;
  themeToggleBackground: string;
  themeToggleTint: string;
  recordListHeader: string;
  recordListHeaderTint: string;
  buttonBackgroundGradient: string;
};

export const lightTheme: Theme = {
  profile: Colors.primaryLight,
  profileTint: Colors.textDark,
  profileBtn: "#BBB",
  profileBtnActive: "#EEE",
  body: Colors.backgroundLight,
  text: Colors.textLight,
  textInactive: Colors.secondaryDark,
  dateBannerBackground: Colors.secondaryBackgroundLight,
  dateBannerText: Colors.secondaryTextLight,
  filterBackground: Colors.secondaryBackgroundLight,
  filterDropdown: Colors.backgroundLight,
  filterOptionActive: Colors.secondaryLight,
  toggleBorder: Colors.secondaryLight,
  toggleButtonBackground: "#999",
  button: Colors.actionLight,
  buttonBorder: Colors.textLight,
  buttonBorderActive: "#161517",
  buttonTint: "#FAFAFA",
  cardBackdrop: "#99918A",
  cardBackground: Colors.secondaryLight,
  cardBody: Colors.secondaryBackgroundLight,
  cardBorderActive: "#AAA",
  cardTint: Colors.textLight,
  labelBackground: Colors.secondaryLight,
  labelTint: Colors.textLight,
  themeToggleBackground: "#7781bb",
  themeToggleTint: "yellow",
  recordListHeader: Colors.secondaryLight,
  recordListHeaderTint: Colors.textLight,
  buttonBackgroundGradient:
    "linear-gradient(transparent,rgba(44, 44, 44, 0.3)) top/100% 800%",
};

export const darkTheme: Theme = {
  profile: Colors.primaryDark,
  profileTint: Colors.textDark,
  profileBtn: "#BBB",
  profileBtnActive: "#EEE",
  body: Colors.backgroundDark,
  text: Colors.textDark,
  textInactive: Colors.secondaryLight,
  dateBannerBackground: Colors.secondaryBackgroundDark,
  dateBannerText: Colors.secondaryTextDark,
  filterBackground: Colors.secondaryBackgroundDark,
  filterDropdown: Colors.backgroundDark,
  filterOptionActive: Colors.secondaryDark,
  toggleBorder: "#6B8096",
  toggleButtonBackground: Colors.primaryDark,
  button: Colors.actionDark,
  buttonBorder: "#999",
  buttonBorderActive: "#EEE",
  buttonTint: Colors.textDark,
  cardBackdrop: "#5e5528",
  cardBackground: Colors.secondaryDark,
  cardBody: Colors.secondaryBackgroundDark,
  cardBorderActive: "#555",
  cardTint: Colors.textDark,
  labelBackground: Colors.primaryDark,
  labelTint: Colors.textDark,
  themeToggleBackground: Colors.secondaryBackgroundDark,
  themeToggleTint: "yellow",
  recordListHeader: Colors.secondaryDark,
  recordListHeaderTint: Colors.textDark,
  buttonBackgroundGradient:
    "linear-gradient(transparent,rgba(156, 156, 156, 0.25)) top/100% 800%",
};
