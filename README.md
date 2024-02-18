# Dropdown Menu JS

Dropdown Menu JS is a lightweight JavaScript package designed to simplify the creation and management of dropdown menus on your web projects. With just a few lines of code, you can enhance the user experience by adding interactive dropdown functionality.

## Installation

You can install Dropdown Menu JS via npm:

```bash
npm install dropdown-menu-js
```

## Usage

To use Dropdown Menu JS, import the default function and call it with the necessary parameters:

```javascript
import dropdownMenu from "dropdown-menu-js";

// Replace these variables with your specific selector names and options
const dropDownContainerSelector = ".dropdown-container";
const dropDownItemSelector = ".dropdown-item";
//This is the element that the dropdown will be activated uppon
const dropDownElementSelector = ".dropdown-element"
const dropdownItemsDisplayType = "block";

dropdownMenu(
  dropDownContainerSelector,
  dropDownItemSelector,
  dropDownElementSelector,
  dropdownItemsDisplayType
);
```

- `dropDownContainerSelector`: The selector name of the dropdown container element.
- `dropDownItemSelector`: The selector name of the dropdown item elements.
- `dropDownElementSelector`: The selector name of the dropdown element that the dropdown will be activated uppon.
- `dropdownItemsDisplayType`: The display type for dropdown items (e.g., 'block', 'flex', etc.).

## Example

HTML:

```html
<div class="dropdown-container">
  <button class="dropdown-btn">DropDown Btn</button>
  <div class="dropdown-item">Item 1</div>
  <div class="dropdown-item">Item 2</div>
  <div class="dropdown-item">Item 3</div>
</div>
```

JavaScript:

```javascript
import dropdownMenu from "<File-path>";

const dropDownContainerClass = ".dropdown-container";
const dropDownItemClass = ".dropdown-item";
const dropdownElementClass = ".dropdown-btn";
const dropdownItemsDisplayType = "block";

dropdownMenu(
  dropDownContainerClass,
  dropDownItemClass,
  dropdownElementClass,
  dropdownItemsDisplayType
);
```

This will initialize the dropdown menu functionality for the specified container and items, making them visible upon interaction.
