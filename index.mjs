export default (
  dropDownContainerClass,
  dropDownItemClass,
  dropdownItemsDisplayType
) => {
  const dropdownContainer = document.querySelector(dropDownContainerClass);
  const dropdownItems = document.querySelectorAll(dropDownItemClass);

  dropdownItems.forEach((item) => (item.style.display = "none"));

  dropdownContainer.onclick = () => {
    dropdownItems.forEach((item) => {
      item.style.display = item.style.display === "none" ? dropdownItemsDisplayType : "none"; 
    });
  };
};
