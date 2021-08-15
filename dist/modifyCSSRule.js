import getCSSRule from './getCSSRule';
// TODO: Add a useImportant feature
export default function modifyCSSRule(ruleName, propertiesToModify) {
    const cssRule = getCSSRule(ruleName);
    const cssProperties = Object.keys(propertiesToModify);
    cssProperties.forEach((cssProperty) => {
        cssRule.style[cssProperty] = propertiesToModify[cssProperty];
    });
}
