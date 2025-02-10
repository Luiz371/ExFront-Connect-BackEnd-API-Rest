async function carregarFormulario() {
    try {
        const response = await fetch("../componentes/formulario.html");
        if (!response.ok) {
            throw new Error(`Erro ao carregar formulário: ${response.statusText}`);
        }
        const html = await response.text();

        const tabPane = document.getElementById("profile-tab-pane");
        if (tabPane) {
            tabPane.innerHTML = html;
        } else {
            console.error("Elemento 'profile-tab-pane' não encontrado.");
        }
    } catch (error) {
        console.error("Erro ao carregar o formulário:", error);
        document.getElementById("profile-tab-pane").innerHTML = `<p>Erro ao carregar o formulário</p>`;
    }
}

document.addEventListener("DOMContentLoaded", () => {

    setTimeout(() => {
        const cadastrarTab = document.querySelector("#profile-tab"); // Pega o botão correto
        if (cadastrarTab) {
            cadastrarTab.addEventListener("click", carregarFormulario);
        } else {
            console.error("Elemento profile-tab não encontrado.");
        }
    }, 500);
});
