import getCSSRule from './getCSSRule';

interface CSSProperties {
  fontFamily: string,
}

// TODO: Add a useImportant feature
export default function modifyCSSRule(ruleName: string, propertiesToModify: CSSProperties) {
  const cssRule = getCSSRule(ruleName);

  const cssProperties = Object.keys(propertiesToModify);

  cssProperties.forEach((cssProperty) => {
    cssRule.style[cssProperty] = propertiesToModify[cssProperty];
  });
}
