import { css } from 'styled-components';

// Constants
import { BREAKPOINTS } from '../constants/breakpoints';

/**
 * @param   {string|object} arg
 * @param   {object}        [breakpoints]
 * @returns {*}
 */
const breakpoint = arg => {
  const breakpointObj = BREAKPOINTS[arg] || arg;

  return (...args) => css`@media (${breakpointObj.type}-width: ${breakpointObj.value}px) {
    // @ts-ignore
    ${css(...args)}
  }`;
};

/**
 * @param   {*|object}  value
 * @param   {function}  mapValueToCSS
 * @param   {object}    [breakpoints]
 * @returns {*}
 */
export const map = (value, mapValueToCSS, breakpoints) => {
  const type = typeof value;

  if (type === 'object') {
    return [
      mapValueToCSS(undefined), // set the default value
      // @ts-ignore
      ...Object.keys(value).map(key => breakpoint(key, breakpoints)(...mapValueToCSS(value[key]))),
    ];
  }

  return mapValueToCSS(value);
};

export default breakpoint;
