
export default function createJerk(root, { handleFight }) {
    
    return ({ jerks }) => {
        root.innerHTML = '';

        for (const jerk of jerks) {

            const jerk1 = Jerk({ jerk, handleFight });
            root.append(jerk1);
        }
    };
}

export function Jerk({ jerk, handleFight }) {
    const button = document.createElement('button');
    button.classList.add('jerk');

    button.addEventListener('click', () => {
        handleFight(jerk);
    });

    const name1 = document.createElement('p');
    name1.classList.add('jerk-name');
    name1.textContent = jerk.name;

    const img1 = document.createElement('img');
    img1.classList.value = 'jerk-image';
    img1.src = '../assets/jerk.png';

    const hp1 = document.createElement('p');
    hp1.classList.add('jerk-hp');
    hp1.textContent = jerk.hp;

    button.append(name1, img1, hp1);

    return button;
}