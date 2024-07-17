TODO: Make a website similar to this : https://www2.hm.com/en_in/productpage.1229310003.html

What would happen if we do console.log(useState())?
=> It will return the list of 2 size in which the first element will be the intialize value for the state variable and 2nd element will be the setFunction.

Howwill useEffect behave if we don't add a dependency array
=> At every rendering of the comonenent the effect function will called.

What is SPA?
=> Single Page Application is web application or website that interact with user by dyanmically loading the necessary content on the same html page rather than fetching the whole html document.

What is difference between Client Side Routing and Server Side Routing?
=> Client side routing the handline url is done at client side.

1.  It doesn't load the full HTML document.
2.  Only load the necessary content.
3.  Faster navigation.
4.  Less SEO friendly.
5.  Can be use for SPA.

Server Side Routing:
In this url handling done at server side, whenever user click on some link that request is processed at server side. 1. It loads whole html page. 2. Slower navigation. 3. Better seo.

Whatare various ways to add images into our App? Explain with code examples

=>
Adding images to a web application can be done in various ways, depending on the context and the framework or library you are using. Here are several common methods to include images in your app, with examples:

### 1. Using HTML `<img>` Tag

The simplest way to add an image is by using the HTML `<img>` tag.

#### Example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Image Example</title>
  </head>
  <body>
    <img src="path/to/image.jpg" alt="Description of Image" />
  </body>
</html>
```

### 2. Using CSS `background-image`

Images can also be added as background images in CSS.

#### Example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS Background Image</title>
    <style>
      .background {
        width: 300px;
        height: 300px;
        background-image: url("path/to/image.jpg");
        background-size: cover; /* Ensures the image covers the element */
      }
    </style>
  </head>
  <body>
    <div class="background"></div>
  </body>
</html>
```

### 3. Importing Images in React

When using React, you can import images and use them in your components.

#### Example:

```javascript
import React from "react";
import logo from "./logo.png"; // Assuming the image is in the same directory

function App() {
  return (
    <div>
      <img src={logo} alt="Logo" />
    </div>
  );
}

export default App;
```

### 4. Using Images from URLs

You can directly use image URLs to display images from external sources.

#### Example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Image from URL</title>
  </head>
  <body>
    <img src="https://example.com/path/to/image.jpg" alt="External Image" />
  </body>
</html>
```

### 5. Base64 Encoding

Images can be embedded directly into HTML or CSS using Base64 encoding. This method is useful for small images or icons.

#### Example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Base64 Image</title>
  </head>
  <body>
    <img
      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD... (Base64 data)"
      alt="Base64 Image"
    />
  </body>
</html>
```

### 6. Inline SVG

If you need to include vector images, inline SVG is a powerful method. SVGs are XML-based and can be included directly in your HTML.

#### Example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Inline SVG</title>
  </head>
  <body>
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="black"
        stroke-width="3"
        fill="red"
      />
    </svg>
  </body>
</html>
```

### 7. Using `srcset` for Responsive Images

The `srcset` attribute allows you to specify different images for different screen sizes, which is useful for responsive design.

#### Example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Responsive Image</title>
  </head>
  <body>
    <img
      src="path/to/image-small.jpg"
      srcset="
        path/to/image-small.jpg   300w,
        path/to/image-medium.jpg  768w,
        path/to/image-large.jpg  1024w
      "
      sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1024px"
      alt="Responsive Image"
    />
  </body>
</html>
```

### 8. Using a CSS Framework (e.g., Bootstrap)

CSS frameworks often provide utilities for handling images, such as responsive images.

#### Example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bootstrap Image</title>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    />
  </head>
  <body>
    <img src="path/to/image.jpg" class="img-fluid" alt="Responsive Image" />
  </body>
</html>
```

### Conclusion

These are various ways to add images to your web application. The method you choose depends on the requirements of your project, the size and type of the image, and how you want the image to behave across different devices and screen sizes.
