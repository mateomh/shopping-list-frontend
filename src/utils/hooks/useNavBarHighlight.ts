export const useNavbarHighlight = () => {
  const removeCurrentHighlight = () => {
    const selectedLink = document.getElementsByClassName("link-selected")[0];
    if (selectedLink !== undefined){
      selectedLink.classList.toggle("link-selected");
    }
  }

  const highlightSelectedRoute = (path:string) => {
    const selectedRouteItem = document.getElementById(path);
    selectedRouteItem?.classList.toggle("link-selected");
  }


  return (path:string) => {
    removeCurrentHighlight();
    highlightSelectedRoute(path);
  }
}