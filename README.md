# 🎗️ only-JavaScript

## 🟡 Operator Precedence
|    Precedence    |   Expression   |
|:----------------:|:--------------:|
|15: postfix operators|x++; x--|
|14: prefix operators|++x; --x; !x; ~x; +x; -x|
|13: exponentiation|x**y|
|12: multiplicative operators|x*y; x/y; x%y|
|11: additive operators|x+y; x-y|
|10: bitwise shift|x<<y; x>>y; x>>>y|
|9: relational operators|x<y; x<=y; x>y; x>=y|
|8: equality operators|x==y; x!=y; x===y; x!==y|
|7: bitwise AND|x&y|
|6: bitwise XOR|x^y|
|5: bitwise OR|x\|y|
|4: logical AND|x&&y|
|3: logical OR, nullish coalescing|x\|\|y; x??y|
|2: assignment and miscellaneous|x=y; x+=y; x-=y; x**=y; x*=y; x/=y; x%=y;x<<=y; x>>=y; x>>>=y; x^=y; x\|=y; x&&=y; x\|\|=y; x??=y; x?y:z; x=>y|
|1: comma|x,y|

## 🟢 Basic DOM Operations
### 🔍 Selection
| Operation                 | Method/Property                        | Example |
|---------------------------|--------------------------------------|---------|
| Get by ID                 | `document.getElementById(id)`         | `document.getElementById("main-title");` |
| Get by Class              | `document.getElementsByClassName(className)` | `document.getElementsByClassName("btn");` |
| Get by Tag                | `document.getElementsByTagName(tagName)` | `document.getElementsByTagName("p");` |
| Query single element      | `document.querySelector(selector)`   | `document.querySelector(".btn");` |
| Query multiple elements   | `document.querySelectorAll(selector)` | `document.querySelectorAll(".btn");` |
### ✏️ Modification
| Operation                 | Method/Property                        | Example |
|---------------------------|--------------------------------------|---------|
| Change text               | `element.textContent`                | `title.textContent = "New Title";` |
| Change HTML               | `element.innerHTML`                  | `title.innerHTML = "<strong>Bold</strong>";` |
| Set attribute             | `element.setAttribute(attr, val)`    | `title.setAttribute("class", "highlight");` |
| Get attribute             | `element.getAttribute(attr)`         | `title.getAttribute("class");` |
| Remove attribute          | `element.removeAttribute(attr)`      | `title.removeAttribute("class");` |
| Change style              | `element.style.property`             | `title.style.color = "red";` |
### 🏗️ Creation & Deletion
| Operation                 | Method/Property                        | Example |
|---------------------------|--------------------------------------|---------|
| Create element            | `document.createElement(tagName)`    | `let newDiv = document.createElement("div");` |
| Append element            | `parent.appendChild(child)`         | `document.body.appendChild(newDiv);` |
| Insert before another     | `parent.insertBefore(newNode, ref)` | `document.body.insertBefore(newDiv, title);` |
| Remove element            | `parent.removeChild(child)`         | `document.body.removeChild(title);` |
### 🎯 Event Handling
| Operation                 | Method/Property                        | Example |
|---------------------------|--------------------------------------|---------|
| Add event listener        | `element.addEventListener(event, cb)` | `title.addEventListener("click", () => alert("Clicked!"));` |
| Remove event listener     | `element.removeEventListener(event, cb)` | `title.removeEventListener("click", handleClick);` |
