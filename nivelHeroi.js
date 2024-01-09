let heroName = "Spider-Man";
let heroXPLevel = 6000;

let XPLevel = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Platina', 'Ascendente', 'Importal', 'Radiante'];

if (heroXPLevel < 1000) {
    level = "";
    for (let i = 0; i < XPLevel.length; i++) {
        if (XPLevel[i] === 'Ferro') {
            level = XPLevel[i];
        }
    }

    console.log(`O Herói de nome ${heroName} está no nível de ${level}`);
} else if (heroXPLevel >= 1000 && heroXPLevel <= 2000) {
    level = "";
    for (let i = 0; i < XPLevel.length; i++) {
        if (XPLevel[i] === 'Bronze') {
            level = XPLevel[i];
        }
    }

    console.log(`O Herói de nome ${heroName} está no nível de ${level}`);
} else if (heroXPLevel > 2000 && heroXPLevel <= 5000) {
    level = "";
    for (let i = 0; i < XPLevel.length; i++) {
        if (XPLevel[i] === 'Prata') {
            level = XPLevel[i];
        }
    }

    console.log(`O Herói de nome ${heroName} está no nível de ${level}`);
} else if (heroXPLevel > 5000 && heroXPLevel <= 7000) {
    level = "";
    for (let i = 0; i < XPLevel.length; i++) {
        if (XPLevel[i] === 'Ouro') {
            level = XPLevel[i];
        }
    }

    console.log(`O Herói de nome ${heroName} está no nível de ${level}`);
} else if (heroXPLevel > 7000 && heroXPLevel <= 8000) {
    level = "";
    for (let i = 0; i < XPLevel.length; i++) {
        if (XPLevel[i] === 'Platina') {
            level = XPLevel[i];
        }
    }

    console.log(`O Herói de nome ${heroName} está no nível de ${level}`);
} else if (heroXPLevel > 8000 && heroXPLevel <= 9000) {
    level = "";
    for (let i = 0; i < XPLevel.length; i++) {
        if (XPLevel[i] === 'Ascendente') {
            level = XPLevel[i];
        }
    }

    console.log(`O Herói de nome ${heroName} está no nível de ${level}`);
} else if (heroXPLevel > 9000 && heroXPLevel <= 10000) {
    level = "";
    for (let i = 0; i < XPLevel.length; i++) {
        if (XPLevel[i] === 'Importal') {
            level = XPLevel[i];
        }
    }

    console.log(`O Herói de nome ${heroName} está no nível de ${level}`);
} else if (heroXPLevel > 10000) {
    level = "";
    for (let i = 0; i < XPLevel.length; i++) {
        if (XPLevel[i] === 'Radiante') {
            level = XPLevel[i];
        }
    }

    console.log(`O Herói de nome ${heroName} está no nível de ${level}`);
}