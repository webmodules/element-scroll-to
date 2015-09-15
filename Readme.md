# element-scroll-to

Makes sure an element is fully visible on the browser viewport,
by recursively scrolling all elements that might be containing it,
along with the browser window.

If scrolling the entirety of the element into the viewport is not
possible (e.g. it's larger than the viewport, or positioned outside
of the page) a best effort is made to position it on the viewport.

If the supplied element is `position: fixed` or `position: sticky`,
the behavior is undefined.

## Usage

```js
var scrollTo = require('element-scroll-to');

// ...

scrollTo(element, options);
```

options may include:

- `margin` (default 0): additional gutters around the element

## License

The MIT License (MIT)

Copyright (c) 2015 Automattic Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
