/* eslint-disable @typescript-eslint/consistent-type-imports */

// these global definitions are only needed to make Typescript work: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/60924
// the `fetch` is already available as part of the Node.js Runtime >= 18.x which we use
import {
	type HeadersInit as HeadersInitType,
} from 'undici';


declare global {
	// Re-export undici fetch function and various classes to global scope.
	// These are classes and functions expected to be at global scope according to Node.js v18 API
	// documentation.
	// See: https://nodejs.org/dist/latest-v18.x/docs/api/globals.html
	// eslint-disable-next-line no-var

	type HeadersInit = HeadersInitType;
}
