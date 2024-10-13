document.getElementById('searchCep').addEventListener('click', async () => {
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            document.getElementById('result').innerHTML = formatCepData(data);
        } else {
            document.getElementById('result').innerHTML = 'CEP não encontrado';
        }
    } catch (error) {
        document.getElementById('result').innerHTML = 'Erro ao buscar CEP';
    }
});

function formatCepData(data) {
    return `
        <table class="table table-striped table-bordered">
            <tr><th>CEP</th><td>${data.cep}</td></tr>
            <tr><th>Logradouro</th><td>${data.logradouro}</td></tr>
            <tr><th>Bairro</th><td>${data.bairro}</td></tr>
            <tr><th>Localidade</th><td>${data.localidade}</td></tr>
            <tr><th>UF</th><td>${data.uf}</td></tr>
            <tr><th>IBGE</th><td>${data.ibge}</td></tr>
            <tr><th>DDD</th><td>${data.ddd}</td></tr>
            <tr><th>SIAFI</th><td>${data.siafi}</td></tr>
        </table>
    `;
}
