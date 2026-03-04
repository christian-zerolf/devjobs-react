import { useState } from "react";

let timeoutId = null;

export function useSearchForm({
  idTechnology,
  idLocation,
  idExperienceLevel,
  idText,
  onSearch,
  onTextFilter,
}) {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    if (event.target.name === idText) {
      return;
    }

    const filters = {
      technology: formData.get(idTechnology),
      location: formData.get(idLocation),
      experienceLevel: formData.get(idExperienceLevel),
    };

    onSearch(filters);
  };

  const handleTextChange = (event) => {
    const text = event.target.value;
    setSearchText(text); // actualiza el input inmediatamente
    /***
     * Debounce: cancelar el timeout anterior
     */
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      onTextFilter(text);
    }, 500);
  };

  return {
    searchText,
    handleSubmit,
    handleTextChange,
  };
}
