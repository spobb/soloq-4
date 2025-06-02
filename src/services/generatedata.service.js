import { exec } from 'child_process';

const user = 'Nagi Seishiro#00100';

(async () => {
    const [username, tag] = user.split('#');
    const response = await fetch(`https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${username}/${tag}`, {
        headers: {
            'X-Riot-Token': process.env.VITE_API_KEY
        }
    });
    const userInfo = await response.json();

    const proc = exec('clip');

    const formatted = Object.entries({ ...userInfo, coefficient: 1 })
        .map(([key, value]) => {
            if (key == 'coefficient') return `${key}: ${value}`
            return `${key}: '${value}'`
        })
        .join(', ');
    proc.stdin.write(`{${formatted}},`);
    proc.stdin.end();
})();