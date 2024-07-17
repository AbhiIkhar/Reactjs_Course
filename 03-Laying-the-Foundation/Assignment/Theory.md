## What is JSX?

--> JSX is new way to write react.createElement using HTML like syntax. It is JSX ==> Extension of javascript.

## Superpowers of JSX :

1. JSX can be written in html like syntax.
2. We can eject our js syntax in jsx using {}.
3. If we want eject some data which we fetching from some third party then we can do so without be woried about cross site scripting because jsx takes care of that.

## Why do multiple JSX tags need to be wrapped?

--> Because at the end we JSX is not HTML it has html like syntax so it get converted into js object and function can not return more than 1 object that's why it must be wrapped inside 1 parent tag or fragment.

## Role of type attribute in script tag? What options can I use there?

--> 1. Type attribute identify the content between the scripts (The type of this content ). 2. Different options :

1. module: tells to treat the script as module. Unlike classic scripts, module scripts require the use of the CORS protocol for cross-origin fetching.

2. importmap:
   This value indicates that the body of the element contains an import map. The import map is a JSON object that developers can use to control how the browser resolves module specifiers when importing.

3. speculationrules:
   This value indicates that the body of the element contains speculation rules. Speculation rules take the form of a JSON object that determine what resources should be prefetched or prerendered by the browser. This is part of the speculation rules API.

## Modules :

1. Module is use strict mode.
2. The main in which u imported all ur module is consider to be top level module.
3. Module are by default defer.
4. Module get executed once even if they are referenced in multiple script.
5. module features are imported into the scope of a single script — they aren't available in the global scope. Therefore, you will only be able to access imported features in the script they are imported into
