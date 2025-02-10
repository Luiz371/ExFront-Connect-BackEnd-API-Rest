document.addEventListener("DOMContentLoaded", async function () {
  try {
    const response = await fetch("../componentes/navbar.html");
    if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
    const data = await response.text();
    document.getElementById("navbar-container").innerHTML = data;
  } catch (error) {
    console.error("Erro ao carregar barra de navegação:", error);
  }
});
