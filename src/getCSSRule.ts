export default function getCSSRule(ruleName: string, deleteFlag = false) {
  // Returns requested style object
  if (document.styleSheets) {
    // This filter is to remove stylesheets that are pulled from different origins
    const styleSheets = Array.from(document.styleSheets).filter(
      (styleSheet) => !styleSheet.href
        || styleSheet.href.startsWith(window.location.origin),
    );
    // If browser can play with stylesheets
    for (let i = 0; i < styleSheets.length; i += 1) {
      // For each stylesheet
      const styleSheet = styleSheets[i]; // Get the current Stylesheet
      let ii = 0; // Initialize subCounter.
      let cssRule = null; // Initialize cssRule.
      do {
        // For each rule in stylesheet
        if (styleSheet.cssRules) {
          // Browser uses cssRules?
          cssRule = styleSheet.cssRules[ii]; // Yes --Mozilla Style
        } else {
          // Browser usses rules?
          cssRule = styleSheet.rules[ii]; // Yes IE style.
        } // End IE check.
        if (cssRule) {
          // If we found a rule...
          if (cssRule.selectorText === ruleName) {
            //  match ruleName?
            if (deleteFlag) {
              // Yes.  Are we deleteing?
              if (styleSheet.cssRules) {
                // Yes, deleting...
                styleSheet.deleteRule(ii); // Delete rule, Moz Style
              } else {
                // Still deleting.
                styleSheet.removeRule(ii); // Delete rule IE style.
              } // End IE check.
              return true; // return true, class deleted.
            }
            // found and not deleting.
            return cssRule; // return the style object.
            // End delete Check
          } // End found rule name
        } // end found cssRule
        ii += 1; // Increment sub-counter
      } while (cssRule); // end While loop
    } // end For loop
  } // end styleSheet ability check
  // eslint-disable-next-line no-console
  console.info('No stylesheets found!');
  return false; // we found NOTHING!
}
