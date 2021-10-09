export const MOBILE_BREAKPOINT_WIDTH = 740
export const MOBILE_BREAKPOINT_WIDTH_PX = '740px'

const getLinkIcon = (link: Link) => {
  switch (link.type) {
    case 'google_play':
      return 'Google Play';
    case 'executable':
      return 'Download';
    case 'website':
    default:
      return 'Link'
  }
}
  
const getLinkText = (link: Link) => {
  switch (link.type) {
    case 'google_play':
      return 'Google Play';
    case 'executable':
      return 'Download';
    case 'website':
    default:
      return 'Link'
  }
}