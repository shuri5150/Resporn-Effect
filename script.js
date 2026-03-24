const translations = {
    ja: {
        "nav-features": "機能",
        "nav-showcase": "作品",
        "nav-contact": "連絡先",
        "hero-title": "キラキラ輝く、魔法のエフェクト",
        "hero-subtitle": "あなたのゲームを彩る、幻想的なパーティクルアセット",
        "intro-desc": "respawn effectsは、Unityで簡単に使える高品質なエフェクト素材集です。<br>星やハートが舞う幻想的な演出を、クリック一つであなたの作品に追加できます。",
        "cta-btn": "ストアで詳しく見る",
        "lang-toggle": "EN"
    },
    en: {
        "nav-features": "Features",
        "nav-showcase": "Showcase",
        "nav-contact": "Contact",
        "hero-title": "Sparkling, Magical Effects",
        "hero-subtitle": "Enchanting particle assets to color your game world",
        "intro-desc": "respawn effects is a high-quality collection of effect materials that are easy to use in Unity.<br>Add ethereal performances like dancing stars and hearts to your work with just one click.",
        "cta-btn": "View on Store",
        "lang-toggle": "JP"
    }
};

let currentLang = localStorage.getItem('lang') || (navigator.language.startsWith('ja') ? 'ja' : 'en');

function updateContent() {
    const data = translations[currentLang];
    for (const key in data) {
        const element = document.getElementById(key);
        if (element) {
            if (key === "intro-desc") {
                element.innerHTML = data[key];
            } else {
                element.innerText = data[key];
            }
        }
    }
    // Update button text
    document.getElementById('lang-toggle').innerText = currentLang === 'ja' ? 'EN' : 'JP';
}

document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'ja' ? 'en' : 'ja';
    localStorage.setItem('lang', currentLang);
    updateContent();
});

// Initial load
document.addEventListener('DOMContentLoaded', updateContent);
