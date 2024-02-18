export default (
  dropDownContainerSelector,
  dropDownItemSelector,
  dropDownElementSelector,
  dropdownItemsDisplaySelector
) => {
  const dropdownItems = document.querySelectorAll(`${dropDownContainerSelector} ${dropDownItemSelector}`);
  const dropdownElement = document.querySelector(`${dropDownContainerSelector} > ${dropDownElementSelector}`);

  dropdownItems.forEach((item) => (item.style.display = "none"));

  dropdownElement.onclick = () => {
    dropdownItems.forEach((item) => {
      item.style.display =
        item.style.display === "none" ? dropdownItemsDisplaySelector : "none";
    });
  };
};
