document.addEventListener('DOMContentLoaded', async () => {
    function updateLeaderboard() {
        fetch('http://localhost:3000/getLeaderboard', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#leaderboardTable tbody');
            tableBody.innerHTML = ''; // Limpar tabela antes de atualizar

            data.forEach(player => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${player.name}</td>
                    <td>${player.victories}</td>
                    <td>${player.defeats}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar o placar:', error);
        });
    }

    // Atualizar o placar a cada 5 segundos
    setInterval(updateLeaderboard, 5000);

    // Atualizar imediatamente ao carregar a página
    updateLeaderboard();

    // Voltar ao jogo
    document.getElementById('backToGame').onclick = function() {
        window.location.href = 'game.html';
    };
});
