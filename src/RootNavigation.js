/*
 *  Navigating without the navigation prop
 *    https://github.com/react-navigation/react-navigation.github.io/blob/952b9ffe5b1dbf9cc8e9264770eaaa0e927931f2/versioned_docs/version-5.x/navigating-without-navigation-prop.md
 */

import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
