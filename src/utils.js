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