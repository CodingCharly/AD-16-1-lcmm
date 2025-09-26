let isStyled = false;//Variable para porcion estilizada
let originalStyles = {};//variable para el estilo original

function js_style() {
  const paragraph = document.getElementById("text"); //Variable para el párrafo llamando a la porción 'text' del html

  if (!isStyled) {
    // almacenamiento del estilo original
    originalStyles = {
      fontFamily: paragraph.style.fontFamily,
      fontSize: paragraph.style.fontSize,
      color: paragraph.style.color
    };

    // aplicación del estilo nuevo 
    paragraph.style.fontFamily = "Courier New, monospace"; //estilo de la fuente nuevo
    paragraph.style.fontSize = "20px"; // tamaño de la fuenta nuevo 
    paragraph.style.color = "#2E8B57"; // color ver coquetón

    isStyled = true;
  } else {
    // Si trae el estilo nuevo, lo revierte con base en los valores que quedaron registrados en originalStyles
    paragraph.style.fontFamily = originalStyles.fontFamily;
    paragraph.style.fontSize = originalStyles.fontSize;
    paragraph.style.color = originalStyles.color;

    isStyled = false;
  }
}