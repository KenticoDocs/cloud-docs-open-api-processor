const typography = '--options.theme.typography';
const rightPanel = '--options.theme.rightPanel';
const menu = '--options.theme.menu';
const colors = '--options.theme.colors';
const spacing = '--options.theme.spacing';
const schema = '--options.theme.schema';
const general = '--options';

export const prerenderOptions = [
    `${general}.disableSearch=true`,
    `${general}.pathInMiddlePanel=true`,
    `${spacing}.unit=4`,
    `${colors}.primary.main=#2D373B`,
    `${colors}.responses.success.color=#00A54B`,
    `${colors}.responses.success.backgroundColor=#e3f0e1`,
    `${colors}.responses.success.backgroundColorHover=#C8E2C4`,
    `${colors}.responses.error.color=#E73430`,
    `${colors}.responses.error.backgroundColor=#fdf0ec`,
    `${colors}.responses.error.backgroundColorHover=#FCE2D9`,
    `${colors}.responses.redirect.color=#FBC15E`,
    `${colors}.responses.info.color=#007DCC`,
    `${colors}.http.get=#67B870`,
    `${colors}.http.post=#007DCC`,
    `${colors}.http.put=#937AB4`,
    `${colors}.http.options=#FBC15E`,
    `${colors}.http.patch=#FBC15E`,
    `${colors}.http.delete=#ED6A56`,
    `${colors}.http.basic=#6B7C85`,
    `${colors}.http.link=#6B7C85`,
    `${colors}.http.head=#937AB4`,
    `${typography}.fontFamily="Source Sans Pro, Helvetica, Arial, sans-serif"`,
    `${typography}.fontSize=1em`,
    `${typography}.fontWeightBold=700`,
    `${typography}.headings.fontFamily="Source Sans Pro, Helvetica, Arial, sans-serif"`,
    `${typography}.headings.fontWeight=400`,
    `${typography}.headings.lineHeight=1.25em`,
    `${typography}.headings.fontSize=1.875em`,
    `${typography}.links.color=#007DCC`,
    `${typography}.links.hover=#e46952`,
    `${typography}.code.fontFamily="Inconsolata, monospace"`,
    `${typography}.code.fontSize=.875em`,
    `${typography}.code.color=#E73430`,
    `${typography}.code.backgroundColor=#f3f6f7`,
    `${rightPanel}.backgroundColor=#2D373B`,
    `${rightPanel}.width=40%`,
    `${rightPanel}.textColor=#F3F6F7`,
    `${menu}.width=352px`,
    `${menu}.textColor=#6B7C85`,
    `${menu}.backgroundColor=#fff`,
    `${menu}.arrow.size=1.125em`,
    `${menu}.arrow.color=#008AE1`,
    `${schema}.linesColor=#AEBCC5`,
    `${schema}.typeNameColor=#80939e`,
    `${schema}.typeTitleColor=#F49300`,
    `${schema}.requireLabelColor=#ED6A56`,
    `${schema}.labelsTextSize=0.875em`,
    `${schema}.nestedBackground=#f3f6f7`,
];
