<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# sdiff

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the k-th discrete forward difference of a single-precision floating-point strided array.

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-ext-base-sdiff
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var sdiff = require( '@stdlib/blas-ext-base-sdiff' );
```

<!-- lint disable maximum-heading-length -->

#### sdiff( N, k, x, strideX, N1, prepend, strideP, N2, append, strideA, out, strideOut, workspace, strideW )

Calculates the k-th discrete forward difference of a single-precision floating-point strided array.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 2.0, 4.0, 6.0, 8.0, 10.0 ] );
var p = new Float32Array( [ 1.0 ] );
var a = new Float32Array( [ 11.0 ] );
var out = new Float32Array( 6 );
var w = new Float32Array( 6 );

sdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 );

console.log( out );
// out => <Float32Array>[ 1.0, 2.0, 2.0, 2.0, 2.0, 1.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **k**: number of times to recursively compute differences.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: stride length for `x`.
-   **N1**: number of indexed elements to `prepend`.
-   **prepend**: a [`Float32Array`][@stdlib/array/float32] containing values to prepend prior to computing differences.
-   **strideP**: stride length for `prepend`.
-   **N2**: number of indexed elements to `append`.
-   **append**: a [`Float32Array`][@stdlib/array/float32] containing values to append prior to computing differences.
-   **strideA**: stride length for `append`.
-   **out**: output [`Float32Array`][@stdlib/array/float32]. Must have `N + N1 + N2 - k` elements.
-   **strideOut**: stride length for `out`.
-   **workspace**: workspace [`Float32Array`][@stdlib/array/float32]. Must have `N + N1 + N2 - 1` elements.
-   **strideW**: stride length for `workspace`.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to compute differences of every other element:

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 2.0, 4.0, 6.0, 8.0, 10.0 ] );
var p = new Float32Array( [ 1.0 ] );
var a = new Float32Array( [ 11.0 ] );
var out = new Float32Array( 4 );
var w = new Float32Array( 4 );

sdiff( 3, 1, x, 2, 1, p, 1, 1, a, 1, out, 1, w, 1 );

console.log( out );
// out => <Float32Array>[ 1.0, 4.0, 4.0, 1.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

// Initial array...
var x0 = new Float32Array( [ 2.0, 4.0, 6.0, 8.0, 10.0 ] );

// Create an offset view...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var p = new Float32Array( [ 1.0 ] );
var a = new Float32Array( [ 11.0 ] );
var out = new Float32Array( 5 );
var w = new Float32Array( 5 );

sdiff( x1.length, 1, x1, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 );

console.log( out );
// out => <Float32Array>[ 3.0, 2.0, 2.0, 2.0, 1.0 ]
```

<!-- lint disable maximum-heading-length -->

#### sdiff.ndarray( N, k, x, strideX, offsetX, N1, prepend, strideP, offsetP, N2, append, strideA, offsetA, out, strideOut, offsetOut, workspace, strideW, offsetW )

Calculates the k-th discrete forward difference of a single-precision floating-point strided array using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 2.0, 4.0, 6.0, 8.0, 10.0 ] );
var p = new Float32Array( [ 1.0 ] );
var a = new Float32Array( [ 11.0 ] );
var out = new Float32Array( 6 );
var w = new Float32Array( 6 );

sdiff.ndarray( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 );

console.log( out );
// out => <Float32Array>[ 1.0, 2.0, 2.0, 2.0, 2.0, 1.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetP**: starting index for `prepend`.
-   **offsetA**: starting index for `append`.
-   **offsetOut**: starting index for `out`.
-   **offsetW**: starting index for `workspace`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to access only the last three elements:

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 2.0, 4.0, 6.0, 8.0, 10.0 ] );
var p = new Float32Array( [ 1.0 ] );
var a = new Float32Array( [ 11.0 ] );
var out = new Float32Array( 4 );
var w = new Float32Array( 4 );

sdiff.ndarray( 3, 1, x, 1, x.length-3, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 );

console.log( out );
// out => <Float32Array>[ 5.0, 2.0, 2.0, 1.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   When `k <= 1`, the workspace array is unused and thus ignored.
-   If `N + N1 + N2 <= 1` or `k >= N + N1 + N2`, both functions return the output array unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var Float32Array = require( '@stdlib/array-float32' );
var sdiff = require( '@stdlib/blas-ext-base-sdiff' );

var x = discreteUniform( 10, -100, 100, {
    'dtype': 'float32'
});
console.log( 'Input array: ', x );

var p = discreteUniform( 2, -100, 100, {
    'dtype': 'float32'
});
console.log( 'Prepend array: ', p );

var a = discreteUniform( 2, -100, 100, {
    'dtype': 'float32'
});
console.log( 'Append array: ', a );

var out = new Float32Array( 10 );
var w = new Float32Array( 13 );

sdiff( x.length, 4, x, 1, 2, p, 1, 2, a, 1, out, 1, w, 1 );
console.log( 'Output: ', out );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/blas/ext/base/sdiff.h"
```

<!-- lint disable maximum-heading-length -->

#### stdlib_strided_sdiff( N, k, \*X, strideX, N1, \*Prepend, strideP, N2, \*Append, strideA, \*Out, strideOut, \*Workspace, strideW )

Calculates the k-th discrete forward difference of a single-precision floating-point strided array.

```c
const float x[] = { 2.0f, 4.0f, 6.0f, 8.0f, 10.0f };
const float p[] = { 1.0f };
const float a[] = { 11.0f };
float out[] = { 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f };
float w[] = { 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f };

stdlib_strided_sdiff( 5, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **k**: `[in] CBLAS_INT` number of times to recursively compute differences.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **N1**: `[in] CBLAS_INT` number of indexed elements for `Prepend`.
-   **Prepend**: `[in] float*` array containing values to prepend prior to computing differences.
-   **strideP**: `[in] CBLAS_INT` stride length for `Prepend`.
-   **N2**: `[in] CBLAS_INT` number of indexed elements for `Append`.
-   **Append**: `[in] float*` array containing values to append prior to computing differences.
-   **strideA**: `[in] CBLAS_INT` stride length for `Append`.
-   **Out**: `[out] float*` output array. Must have `N + N1 + N2 - k` elements.
-   **strideOut**: `[in] CBLAS_INT` stride length for `Out`.
-   **Workspace**: `[out] float*` workspace array. Must have `N + N1 + N2 - 1` elements.
-   **strideW**: `[in] CBLAS_INT` stride length for `Workspace`.

```c
void stdlib_strided_sdiff( const CBLAS_INT N, const CBLAS_INT k, const float *X, const CBLAS_INT strideX, const CBLAS_INT N1, const float *Prepend, const CBLAS_INT strideP, const CBLAS_INT N2, const float *Append, const CBLAS_INT strideA, float *Out, const CBLAS_INT strideOut, float *Workspace, const CBLAS_INT strideW );
```

<!-- lint disable maximum-heading-length -->

#### stdlib_strided_sdiff_ndarray( N, k, \*X, strideX, offsetX, N1, \*Prepend, strideP, offsetP, N2, \*Append, strideA, offsetA, \*Out, strideOut, offsetOut, \*Workspace, strideW, offsetW )

Calculates the k-th discrete forward difference of a single-precision floating-point strided array using alternative indexing semantics.

```c
const float x[] = { 2.0f, 4.0f, 6.0f, 8.0f, 10.0f };
const float p[] = { 1.0f };
const float a[] = { 11.0f };
float out[] = { 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f };
float w[] = { 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f };

stdlib_strided_sdiff_ndarray( 5, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **k**: `[in] CBLAS_INT` number of times to recursively compute differences.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.
-   **N1**: `[in] CBLAS_INT` number of indexed elements for `Prepend`.
-   **Prepend**: `[in] float*` array containing values to prepend prior to computing differences.
-   **strideP**: `[in] CBLAS_INT` stride length for `Prepend`.
-   **offsetP**: `[in] CBLAS_INT` starting index for `Prepend`.
-   **N2**: `[in] CBLAS_INT` number of indexed elements for `Append`.
-   **Append**: `[in] float*` array containing values to append prior to computing differences.
-   **strideA**: `[in] CBLAS_INT` stride length for `Append`.
-   **offsetA**: `[in] CBLAS_INT` starting index for `Append`.
-   **Out**: `[out] float*` output array. Must have `N + N1 + N2 - k` elements.
-   **strideOut**: `[in] CBLAS_INT` stride length for `Out`.
-   **offsetOut**: `[in] CBLAS_INT` starting index for `Out`.
-   **Workspace**: `[out] float*` workspace array. Must have `N + N1 + N2 - 1` elements.
-   **strideW**: `[in] CBLAS_INT` stride length for `Workspace`.
-   **offsetW**: `[in] CBLAS_INT` starting index for `Workspace`.

```c
void stdlib_strided_sdiff_ndarray( const CBLAS_INT N, const CBLAS_INT k, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const CBLAS_INT N1, const float *Prepend, const CBLAS_INT strideP, const CBLAS_INT offsetP, const CBLAS_INT N2, const float *Append, const CBLAS_INT strideA, const CBLAS_INT offsetA, float *Out, const CBLAS_INT strideOut, const CBLAS_INT offsetOut, float *Workspace, const CBLAS_INT strideW, const CBLAS_INT offsetW );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/blas/ext/base/sdiff.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    const float x[] = { 1.0f, -2.0f, 3.0f, -4.0f, 5.0f, -6.0f, 7.0f, -8.0f };

    // Define a list of values to prepend:
    const float p[] = { -1.0f };

    // Define a list of values to append:
    const float a[] = { 10.0f };

    // Define an output array:
    float out[] = { 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f };

    // Define a workspace:
    float w[] = { 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f };

    // Compute forward differences:
    stdlib_strided_sdiff( 8, 3, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 );

    // Print the result:
    for ( int i = 0; i < 7; i++ ) {
        printf( "out[ %i ] = %f\n", i, out[ i ] );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-sdiff.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-sdiff

[test-image]: https://github.com/stdlib-js/blas-ext-base-sdiff/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-sdiff/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-sdiff/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-sdiff?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-sdiff.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-sdiff/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-sdiff/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-sdiff/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-sdiff/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-sdiff/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-sdiff/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-sdiff/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-sdiff/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-sdiff/main/LICENSE

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
