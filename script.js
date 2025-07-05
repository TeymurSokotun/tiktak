document.addEventListener('DOMContentLoaded', () => {
    // --- Модуль для Галереї Модів ---
    const modGridContainer = document.getElementById('mod-grid-container');
    const modDetailPage = document.getElementById('mod-detail-page');
    const modsGallerySection = document.getElementById('mods-gallery-section');
    const backToModsBtn = document.getElementById('back-to-mods');
    const modSearchInput = document.getElementById('mod-search');
    const modVersionFilter = document.getElementById('mod-version-filter');
    const modCategoryFilter = document.getElementById('mod-category-filter');

    // Sample Mod Data (імітація даних з сервера)
    const modsData = [
        {
            id: 'journeymap',
            title: 'JourneyMap',
            image: 'images/mods/journeymap_thumb.jpg', // Замінено на передбачуване зображення
            description: 'Один з найкращих модів для карти в Minecraft. Дозволяє переглядати світ у реальному часі, ставити мітки та багато іншого.',
            fullDescription: 'JourneyMap - це мод для Minecraft, який відображає ваш світ у реальному часі під час дослідження. Ви можете переглядати карту у веб-браузері або в грі, на міні-карті або у повноекранному режимі. Мод також пропонує безліч корисних функцій, таких як встановлення шляхових точок, відображення мобів і печер, а також можливість зберігати та завантажувати карти.',
            version: '1.20.1',
            category: 'Дослідження',
            // !!! ВАЖНО: ЗАМЕНИТЕ ЭТУ ССЫЛКУ НА РЕАЛЬНЫЙ ПУТЬ К ВАШЕМУ .JAR ФАЙЛУ МОДА !!!
            downloadLink: 'https://example.com/downloads/journeymap-1.20.1.jar',
            screenshots: [
                'images/mods/journeymap_screenshot1.jpg', // Замінено на передбачувані зображення
                'images/mods/journeymap_screenshot2.jpg',
                'images/mods/journeymap_screenshot3.jpg'
            ]
        },
        {
            id: 'create',
            title: 'Create Mod',
            image: 'images/mods/create_thumb.png', // Замінено на передбачуване зображення
            description: 'Мод на автоматизацію та створення складних механізмів з унікальною фізикою.',
            fullDescription: 'Мод Create додає в Minecraft безліч інструментів і блоків для створення складних автоматизованих систем і машин. Він фокусується на кінетичній енергії, дозволяючи будувати механізми, такі як конвеєри, підйомники, автоматичні ферми, і багато іншого, з використанням шестерень, двигунів та інших інтерактивних блоків. Create пропонує унікальний підхід до автоматизації, що відрізняється від традиційних технічних модів.',
            version: '1.20.1',
            category: 'Технології',
            // !!! ВАЖНО: ЗАМЕНИТЕ ЭТУ ССЫЛКУ НА РЕАЛЬНЫЙ ПУТЬ К ВАШЕМУ .JAR ФАЙЛУ МОДА !!!
            downloadLink: 'https://example.com/downloads/create-mod-1.20.1.jar',
            screenshots: [
                'images/mods/create_screenshot1.png', // Замінено на передбачувані зображення
                'images/mods/create_screenshot2.png',
                'images/mods/create_screenshot3.png'
            ]
        },
        {
            id: 'farmers-delight',
            title: 'Farmer\'s Delight',
            image: 'images/mods/farmersdelight_thumb.jpg', // Замінено на передбачуване зображення
            description: 'Розширює можливості фермерства та кулінарії в Minecraft, додаючи нові культури та страви.',
            fullDescription: 'Farmer\'s Delight - це мод, який значно покращує аспекти фермерства та кулінарії в Minecraft. Він додає безліч нових культур, рецептів, інструментів і блоків, дозволяючи гравцям створювати більш різноманітні та складні страви. Мод також включає в себе нові способи зберігання продуктів і приготування їжі, роблячи фермерство більш захоплюючим і корисним заняттям.',
            version: '1.19.2',
            category: 'Виживання',
            // !!! ВАЖНО: ЗАМЕНИТЕ ЭТУ ССЫЛКУ НА РЕАЛЬНЫЙ ПУТЬ К ВАШЕМУ .JAR ФАЙЛУ МОДА !!!
            downloadLink: 'https://example.com/downloads/farmers-delight-1.19.2.jar',
            screenshots: [
                'images/mods/farmersdelight_screenshot1.jpg', // Замінено на передбачувані зображення
                'images/mods/farmersdelight_screenshot2.jpg',
                'images/mods/farmersdelight_screenshot3.jpg'
            ]
        },
        {
            id: 'comfort',
            title: 'Comforts',
            image: 'images/mods/comforts_thumb.png', // Замінено на передбачуване зображення
            description: 'Додає спальні мішки, які можна використовувати будь-де.',
            fullDescription: 'Мод Comforts вводить в гру спальні мішки, які працюють як звичайні ліжка, але мають ряд переваг: їх можна розмістити і використовувати де завгодно (навіть у Незері або Енді), вони не встановлюють точку відродження і можуть бути легко підібрані. Це ідеальне рішення для мандрівників та дослідників, яким потрібен швидкий спосіб пропустити ніч без втрати місця спавну.',
            version: '1.20.1',
            category: 'Виживання',
            // !!! ВАЖНО: ЗАМЕНИТЕ ЭТУ ССЫЛКУ НА РЕАЛЬНЫЙ ПУТЬ К ВАШЕМУ .JAR ФАЙЛУ МОДА !!!
            downloadLink: 'https://example.com/downloads/comforts-1.20.1.jar',
            screenshots: [
                'images/mods/comforts_screenshot1.png', // Замінено на передбачувані зображення
                'images/mods/comforts_screenshot2.png'
            ]
        },
        {
            id: 'decorative-blocks',
            title: 'Decorative Blocks',
            image: 'images/mods/decorativeblocks_thumb.png', // Замінено на передбачуване зображення
            description: 'Безліч нових декоративних блоків для будівництва та прикраси.',
            fullDescription: 'Мод Decorative Blocks додає в Minecraft широкий асортимент нових блоків, призначених виключно для декоративних цілей. Це включає в себе різні види колод, столи, стільці, паркани, решітки, лампи та багато іншого, що дозволяє гравцям створювати більш деталізовані та естетично приємні споруди. Мод ідеально підходить для тих, хто любить прикрашати свої бази та міста.',
            version: '1.18.2',
            category: 'Декор',
            // !!! ВАЖНО: ЗАМЕНИТЕ ЭТУ ССЫЛКУ НА РЕАЛЬНЫЙ ПУТЬ К ВАШЕМУ .JAR ФАЙЛУ МОДА !!!
            downloadLink: 'https://example.com/downloads/decorative-blocks-1.18.2.jar',
            screenshots: [
                'images/mods/decorativeblocks_screenshot1.png', // Замінено на передбачувані зображення
                'images/mods/decorativeblocks_screenshot2.png'
            ]
        },
        {
            id: 'ice-and-fire',
            title: 'Ice and Fire: Dragons in a new world',
            image: 'images/mods/iceandfire_thumb.jpg', // Замінено на передбачуване зображення
            description: 'Додає драконів та інших міфічних істот у світ Minecraft.',
            fullDescription: 'Ice and Fire - це епічний мод, який приносить у світ Minecraft могутніх драконів та інших фантастичних істот. Гравці можуть зіткнутися з крижаними та вогняними драконами, грифонами, гідрами, химерами та багатьма іншими. Мод дозволяє полювати на цих істот, приручати їх, використовувати їхні частини для створення броні та зброї, або навіть літати на драконах. Це значно розширює дослідження та пригоди в грі.',
            version: '1.16.5',
            category: 'Дослідження',
            // !!! ВАЖНО: ЗАМЕНИТЕ ЭТУ ССЫЛКУ НА РЕАЛЬНЫЙ ПУТЬ К ВАШЕМУ .JAR ФАЙЛУ МОДА !!!
            downloadLink: 'https://example.com/downloads/ice-and-fire-1.16.5.jar',
            screenshots: [
                'images/mods/iceandfire_screenshot1.jpg', // Замінено на передбачувані зображення
                'images/mods/iceandfire_screenshot2.jpg',
                'images/mods/iceandfire_screenshot3.jpg'
            ]
        }
    ];

    let currentMods = [...modsData]; // Масив для поточного відображення (для фільтрації)

    function renderMods(modsToRender) {
        if (!modGridContainer) return;
        modGridContainer.innerHTML = '';

        if (modsToRender.length === 0) {
            modGridContainer.innerHTML = '<p class="no-results">Моди не знайдено.</p>';
            return;
        }

        modsToRender.forEach(mod => {
            const modCard = document.createElement('div');
            modCard.classList.add('mod-card');
            modCard.dataset.id = mod.id; // Для зв'язку з детальною сторінкою

            modCard.innerHTML = `
                <img src="${mod.image}" alt="${mod.title}">
                <div class="mod-card-content">
                    <h3>${mod.title}</h3>
                    <p>${mod.description}</p>
                    <div class="mod-card-meta">
                        <span>Версія: ${mod.version}</span>
                        <span>Категорія: ${mod.category}</span>
                    </div>
                </div>
            `;
            modGridContainer.appendChild(modCard);

            modCard.addEventListener('click', () => showModDetail(mod.id));
        });
    }

    function showModDetail(modId) {
        const mod = modsData.find(m => m.id === modId);
        if (!mod) return;

        if (modDetailPage && modsGallerySection) {
            modsGallerySection.style.display = 'none'; // Приховуємо сітку модів
            modDetailPage.style.display = 'block';    // Показуємо детальну сторінку

            document.getElementById('mod-detail-title').textContent = mod.title;
            document.getElementById('mod-detail-image').src = mod.image;
            document.getElementById('mod-detail-image').alt = mod.title;
            document.getElementById('mod-detail-version').textContent = mod.version;
            document.getElementById('mod-detail-category').textContent = mod.category;
            document.getElementById('mod-detail-full-description').textContent = mod.fullDescription;

            const downloadBtn = document.getElementById('detail-download');
            downloadBtn.href = mod.downloadLink;
            downloadBtn.download = mod.title.replace(/[^a-z0-9]/gi, '_') + '_' + mod.version + '.jar'; // Динамічне ім'я файлу для завантаження

            const screenshotsContainer = document.getElementById('mod-detail-screenshots');
            screenshotsContainer.innerHTML = ''; // Очищаємо старі скріншоти
            mod.screenshots.forEach(screenshotUrl => {
                const img = document.createElement('img');
                img.src = screenshotUrl;
                img.alt = `Скріншот моду ${mod.title}`;
                screenshotsContainer.appendChild(img);
            });
        }
    }

    if (backToModsBtn) {
        backToModsBtn.addEventListener('click', () => {
            if (modDetailPage && modsGallerySection) {
                modsGallerySection.style.display = 'block';
                modDetailPage.style.display = 'none';
            }
        });
    }

    function applyModFilters() {
        const searchTerm = modSearchInput.value.toLowerCase();
        const selectedVersion = modVersionFilter.value;
        const selectedCategory = modCategoryFilter.value;

        currentMods = modsData.filter(mod => {
            const matchesSearch = mod.title.toLowerCase().includes(searchTerm) ||
                                 mod.description.toLowerCase().includes(searchTerm) ||
                                 mod.fullDescription.toLowerCase().includes(searchTerm);

            const matchesVersion = selectedVersion === '' || mod.version === selectedVersion;
            const matchesCategory = selectedCategory === '' || mod.category === selectedCategory;

            return matchesSearch && matchesVersion && matchesCategory;
        });

        renderMods(currentMods);
    }

    if (modSearchInput) {
        modSearchInput.addEventListener('input', applyModFilters);
    }
    if (modVersionFilter) {
        modVersionFilter.addEventListener('change', applyModFilters);
    }
    if (modCategoryFilter) {
        modCategoryFilter.addEventListener('change', applyModFilters);
    }

    // Ініціалізація: якщо ми на сторінці mods.html, відображаємо моди
    if (window.location.pathname.includes('mods.html')) {
        renderMods(modsData); // Спочатку показуємо всі моди
    }

    // --- Модуль для Гайдів ---
    const guideGridContainer = document.getElementById('guide-grid-container');
    const guideDetailPage = document.getElementById('guide-detail-page');
    const guidesGallerySection = document.getElementById('guides-gallery-section');
    const backToGuidesBtn = document.getElementById('back-to-guides');

    // Sample Guide Data (імітація даних з сервера)
    const guidesData = [
        {
            id: 'starting-survival',
            title: 'Як почати виживання в Minecraft',
            image: 'gaud/go.jfif', // Замінено на передбачуване зображення
            summary: 'Покроковий гайд для новачків по перших днях у світі Minecraft.',
            fullContent: `
                <h3>День 1: Основи виживання</h3>
                <p>Ваша перша задача - добути дерево. Знайдіть найближче дерево, утримуйте ліву кнопку миші, щоб зрубати його. Зберіть близько 10-15 блоків дерева. Відкрийте інвентар (клавіша 'E'), перетягніть дерево у вікно крафту, щоб отримати дошки.</p>
                <p>З дощок зробіть верстак (4 дошки в квадраті 2x2). Встановіть верстак на землю і використовуйте його, щоб скрафтити дерев'яні інструменти: кирку, сокиру, лопату і меч. Кирка потрібна для видобутку каменю, сокира - для дерева, лопата - для землі, меч - для захисту.</p>
                <h3>Пошук укриття</h3>
                <p>До настання ночі вам потрібно знайти або побудувати укриття. Це може бути невелика землянка, вирита в схилі гори, або проста коробка з дерева. Головне - запечатати вхід і бути в безпеці від монстрів.</p>
                <ul>
                    <li><strong>Переконайтеся, що у вас є:</strong></li>
                    <li>Верстак</li>
                    <li>Дерев'яні інструменти</li>
                    <li>Невелике укриття</li>
                    <li>Пара смолоскипів (крафтяться з вугілля/деревного вугілля та палиці)</li>
                </ul>
                <h3>Ніч і видобуток</h3>
                <p>У першу ніч краще залишатися в укритті. Якщо у вас є дерев'яна кирка, почніть копати вниз (прямо під собою - не найкращий варіант, краще сходинками) або вбік, щоб знайти камінь і вугілля. Камінь дозволить вам створити кам'яні інструменти, які набагато міцніші за дерев'яні. Вугілля потрібне для смолоскипів і плавки.</p>
                <p>Коли ви знайдете вугілля, скрафтіть смолоскипи (вугілля зверху, палиця знизу на верстаку). Смолоскипи освітлять ваше притулок і запобігнуть появі мобів.</p>
                <h3>Подальший розвиток</h3>
                <p>Після першої ночі ви можете почати розширювати своє укриття, досліджувати світ, шукати їжу та нові ресурси. Пам'ятайте про важливість ліжка, щоб встановити точку відродження та пропускати ночі.</p>
            `
        },
        {
            id: 'getting-diamonds',
            title: 'Як знайти алмази в Minecraft',
            image: 'gaud/goalmaz.webp', // Замінено на передбачуване зображення
            summary: 'Детальний посібник з ефективного пошуку найцінніших ресурсів.',
            fullContent: `
                <h3>Де шукати алмази?</h3>
                <p>Алмази в Minecraft найчастіше зустрічаються на глибоких рівнях під землею. Найкращі шари для пошуку алмазів: Y-рівень від <strong>-58 до -59</strong> у версії 1.18+ (нижче 0). До версії 1.18 це були шари 11-12.</p>
                <p>Щоб дізнатися ваш поточний Y-рівень, натисніть F3 (або Fn+F3 на деяких ноутбуках) і знайдіть рядок з координатами (X, Y, Z). Вам потрібен показник Y.</p>
                <h3>Підготовка до видобутку</h3>
                <ul>
                    <li><strong>Залізна кирка або краще:</strong> Алмази можна добути лише залізною, алмазною або незерітовою киркою.</li>
                    <li><strong>Смолоскипи:</strong> Багато смолоскипів для освітлення печер і шахт, запобігання появі мобів.</li>
                    <li><strong>Їжа:</strong> Достатньо їжі, щоб відновлювати голод.</li>
                    <li><strong>Відро води:</strong> Для захисту від лави та створення обсидіану.</li>
                    <li><strong>Броня:</strong> Захист від мобів.</li>
                    <li><strong>Зброя:</strong> Для боротьби з ворогами.</li>
                </ul>
                <h3>Ефективні методи видобутку</h3>
                <p>Найбільш популярні та ефективні методи видобутку алмазів:</p>
                <ol>
                    <li><strong>Стрип-майнінг (Strip Mining):</strong> Копайте довгі прямі тунелі на оптимальному рівні, залишаючи між ними 2-3 блоки. Це дозволяє охопити велику площу.</li>
                    <li><strong>Кейв-майнінг (Cave Mining):</strong> Дослідження природних печер. Це більш ризикований, але потенційно швидкий спосіб знайти алмази, оскільки вони часто відкриті в стінах печер. Будьте обережні з лавою та мобами.</li>
                    <li><strong>Тунелі 2x1:</strong> Копайте тунелі 2 блоки заввишки та 1 блок завширшки. Це економить кирки та час.</li>
                </ol>
                <h3>Поради з безпеки</h3>
                <p>Завжди будьте обережні з лавою! Алмази часто зустрічаються поруч із нею. При попаданні в лаву, відро води допоможе вам швидко вибратися, перетворивши лаву на обсидіан. Завжди тримайте смолоскипи під рукою, щоб уникнути появи кріперів та інших ворожих мобів.</p>
            `
        },
        {
            id: 'nether-survival',
            title: 'Виживання в Нижньому Світі',
            image: 'gaud/goada.webp', // Замінено на передбачуване зображення
            summary: 'Посібник з виживання та дослідження небезпечного виміру.',
            fullContent: `
                <h3>Вхід у Нижній Світ</h3>
                <p>Для входу в Нижній Світ (The Nether) вам знадобиться портал. Він будується з мінімум 10 блоків обсидіану (рамка 4x5, кути можна пропускати). Активується портал кресалом, яким потрібно клікнути по одному з внутрішніх блоків рамки.</p>
                <p><strong>Обережно!</strong> Точка появи в Нижньому Світі може бути небезпечною. Відразу після входу встановіть портал у безпечному місці та подумайте про його захист від гастів.</p>
                <h3>Ресурси Нижнього Світу</h3>
                <p>У Нижньому Світі можна знайти унікальні ресурси:</p>
                <ul>
                    <li><strong>Незеррак (Netherrack):</strong> Основний блок, легко добувається.</li>
                    <li><strong>Кварцова руда (Nether Quartz Ore):</strong> Джерело кварцу для досвіду та крафту компараторів.</li>
                    <li><strong>Уламки давнини (Ancient Debris):</strong> Найрідкісніший ресурс для створення незерітових злитків. Добувається лише алмазною киркою або краще, плавиться в печі.</li>
                    <li><strong>Магма-блоки (Magma Blocks):</strong> Наносять шкоду при контакті, але їх можна добути.</li>
                    <li><strong>Базальт (Basalt), Чорнокамінь (Blackstone):</strong> Нові блоки для будівництва.</li>
                    <li><strong>Пісок душ (Soul Sand) та Ґрунт душ (Soul Soil):</strong> Уповільнюючі блоки, на них ростуть гриби, використовуються для спавнерів візерів.</li>
                </ul>
                <h3>Небезпеки Нижнього Світу</h3>
                <p>Нижній Світ сповнений небезпек:</p>
                <ul>
                    <li><strong>Лава:</strong> Океани лави всюди. Завжди будьте готові побудувати міст або використовувати відро води (якщо ви вийшли з порталу у верхньому світі та захопили його з собою).</li>
                    <li><strong>Моби:</strong> Гасти (стріляють вогняними кулями), свинозомбі/пігліни (агресивні, якщо їх атакувати або брати золото), блейзи (літають і стріляють вогнем), скелети-візери (накладають висушення, дропають черепи для Візера), страйдери (дружелюбні, по них можна подорожувати по лаві).</li>
                    <li><strong>Висота:</strong> Падіння з висоти часто смертельне.</li>
                </ul>
                <h3>Дослідження Фортець Нижнього Світу</h3>
                <p>Фортеці (Nether Fortresses) - це структури, де можна знайти цінні ресурси та спавнери блейзів. Вам знадобляться стрижні блейза для створення Ока Ендера та порошок блейза для зілля. Остерігайтеся скелетів-візерів.</p>
            `
        }
    ];

    function renderGuides(guidesToRender) {
        if (!guideGridContainer) return;
        guideGridContainer.innerHTML = '';

        if (guidesToRender.length === 0) {
            guideGridContainer.innerHTML = '<p class="no-results">Гайдів не знайдено.</p>';
            return;
        }

        guidesToRender.forEach(guide => {
            const guideCard = document.createElement('div');
            guideCard.classList.add('guide-card');
            guideCard.dataset.id = guide.id;

            guideCard.innerHTML = `
                <img src="${guide.image}" alt="${guide.title}">
                <div class="guide-card-content">
                    <h3>${guide.title}</h3>
                    <p>${guide.summary}</p>
                </div>
            `;
            guideGridContainer.appendChild(guideCard);

            guideCard.addEventListener('click', () => showGuideDetail(guide.id));
        });
    }

    function showGuideDetail(guideId) {
        const guide = guidesData.find(g => g.id === guideId);
        if (!guide) return;

        if (guideDetailPage && guidesGallerySection) {
            guidesGallerySection.style.display = 'none';
            guideDetailPage.style.display = 'block';

            document.getElementById('guide-detail-title').textContent = guide.title;
            document.getElementById('guide-detail-image').src = guide.image;
            document.getElementById('guide-detail-image').alt = guide.title;
            document.getElementById('guide-detail-summary').textContent = guide.summary;
            document.getElementById('guide-detail-full-content').innerHTML = guide.fullContent;
        }
    }

    if (backToGuidesBtn) {
        backToGuidesBtn.addEventListener('click', () => {
            if (guideDetailPage && guidesGallerySection) {
                guidesGallerySection.style.display = 'block';
                guideDetailPage.style.display = 'none';
            }
        });
    }

    // Ініціалізація: якщо ми на сторінці guides.html, відображаємо гайди
    if (window.location.pathname.includes('guides.html')) {
        renderGuides(guidesData);
    }

    // --- Модуль для Крафта ---
    const craftGridContainer = document.getElementById('craft-grid-container');
    const craftDetailPage = document.getElementById('craft-detail-page');
    const craftingGallerySection = document.getElementById('crafting-gallery-section');
    const backToCraftsBtn = document.getElementById('back-to-crafts');
    const craftSearchInput = document.getElementById('craft-search');
    const craftCategoryFilter = document.getElementById('craft-category-filter');

    // Sample Crafting Data (імітація даних з сервера)
    const craftingRecipesData = [
        {
            id: 'wooden_pickaxe',
            title: 'Дерев\'яна кирка',
            image: 'a78f6c2337e234addda44ceecfcd576b.jpg', // Використовуємо надане зображення
            category: 'Інструменти',
            description: 'Ваш перший інструмент для видобутку каменю.',
            ingredients: [
                'Oak_Planks.png', 'Oak_Planks.png', 'Oak_Planks.png',
                null, 'Палка_JE1_BE1.webp', null,
                null, 'Палка_JE1_BE1.webp', null
            ]
        },
        {
            id: 'crafting_table',
            title: 'Верстак',
            image: 'Farm.webp', // Використовуємо надане зображення
            category: 'Блоки',
            description: 'Основний блок для створення більшості предметів.',
            ingredients: [
                'Oak_Planks.png', 'Oak_Planks.png', null,
                'Oak_Planks.png', 'Oak_Planks.png', null,
                null, null, null
            ]
        },
        {
            id: 'furnace',
            title: 'Піч',
            image: '3F3F_JE4.webp', // Використовуємо надане зображення
            category: 'Блоки',
            description: 'Використовується для переплавки руди та готування їжі.',
            ingredients: [
                '3F3F3F3F_JE3_BE2.webp', '3F3F3F3F_JE3_BE2.webp', '3F3F3F3F_JE3_BE2.webp',
                '3F3F3F3F_JE3_BE2.webp', null, '3F3F3F3F_JE3_BE2.webp',
                '3F3F3F3F_JE3_BE2.webp', '3F3F3F3F_JE3_BE2.webp', '3F3F3F3F_JE3_BE2.webp'
            ]
        },
        {
            id: 'stone_sword',
            title: 'Кам\'яний меч',
            image: 'dod.webp', // Використовуємо надане зображення
            category: 'Зброя',
            description: 'Покращена зброя для захисту від монстрів.',
            ingredients: [
                null, '3F3F3F3F_JE3_BE2.webp', null,
                null, '3F3F3F3F_JE3_BE2.webp', null,
                null, 'Палка_JE1_BE1.webp', null
            ]
        },
        {
            id: 'chest',
            title: 'Скриня',
            image: 'foni-papik-pro-1wzc-p-kartinki-sunduk-mainkraft-na-prozrachnom-f-2.png', // Зображення для скрині не надано
            category: 'Блоки',
            description: 'Для зберігання ваших предметів.',
            ingredients: [
                'Oak_Planks.png', 'Oak_Planks.png', 'Oak_Planks.png',
                'Oak_Planks.png', null, 'Oak_Planks.png',
                'Oak_Planks.png', 'Oak_Planks.png', 'Oak_Planks.png'
            ]
        },
        {
            id: 'bread',
            title: 'Хліб',
            image: '3F3F_JE3_BE3.webp', // Використовуємо надане зображення
            category: 'Їжа',
            description: 'Просте джерело їжі для відновлення голоду.',
            ingredients: [
                null, null, null,
                'gettak.webp', 'gettak.webp', 'gettak.webp', // Використовуємо надане зображення
                null, null, null
            ]
        }
    ];

    let currentCrafts = [...craftingRecipesData];

    function renderCrafts(craftsToRender) {
        if (!craftGridContainer) return;
        craftGridContainer.innerHTML = '';

        if (craftsToRender.length === 0) {
            craftGridContainer.innerHTML = '<p class="no-results">Рецептів не знайдено.</p>';
            return;
        }

        craftsToRender.forEach(craft => {
            const craftCard = document.createElement('div');
            craftCard.classList.add('craft-card');
            craftCard.dataset.id = craft.id;

            craftCard.innerHTML = `
                <img src="${craft.image}" alt="${craft.title}">
                <div class="craft-card-content">
                    <h3>${craft.title}</h3>
                    <p>${craft.description}</p>
                </div>
            `;
            craftGridContainer.appendChild(craftCard);

            craftCard.addEventListener('click', () => showCraftDetail(craft.id));
        });
    }

    function showCraftDetail(craftId) {
        const craft = craftingRecipesData.find(c => c.id === craftId);
        if (!craft) return;

        if (craftDetailPage && craftingGallerySection) {
            craftingGallerySection.style.display = 'none';
            craftDetailPage.style.display = 'block';

            document.getElementById('craft-detail-title').textContent = craft.title;
            document.getElementById('craft-detail-result-image').src = craft.image;
            document.getElementById('craft-detail-result-image').alt = craft.title;
            document.getElementById('craft-detail-category').textContent = craft.category;
            document.getElementById('craft-detail-description').textContent = craft.description;

            const craftingGridElement = document.getElementById('craft-detail-grid');
            craftingGridElement.innerHTML = '';
            for (let i = 0; i < 9; i++) {
                const slot = document.createElement('div');
                slot.classList.add('crafting-slot');
                if (craft.ingredients[i]) {
                    const img = document.createElement('img');
                    img.src = craft.ingredients[i];
                    img.alt = `Інгредієнт ${i + 1}`;
                    slot.appendChild(img);
                }
                craftingGridElement.appendChild(slot);
            }
        }
    }

    if (backToCraftsBtn) {
        backToCraftsBtn.addEventListener('click', () => {
            if (craftDetailPage && craftingGallerySection) {
                craftingGallerySection.style.display = 'block';
                craftDetailPage.style.display = 'none';
            }
        });
    }

    function applyCraftFilters() {
        const searchTerm = craftSearchInput.value.toLowerCase();
        const selectedCategory = craftCategoryFilter.value;

        currentCrafts = craftingRecipesData.filter(craft => {
            const matchesSearch = craft.title.toLowerCase().includes(searchTerm) ||
                                 craft.description.toLowerCase().includes(searchTerm);

            const matchesCategory = selectedCategory === '' || craft.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });

        renderCrafts(currentCrafts);
    }

    if (craftSearchInput) {
        craftSearchInput.addEventListener('input', applyCraftFilters);
    }
    if (craftCategoryFilter) {
        craftCategoryFilter.addEventListener('change', applyCraftFilters);
    }

    // Ініціалізація: якщо ми на сторінці crafting.html, відображаємо рецепти
    if (window.location.pathname.includes('crafting.html')) {
        renderCrafts(craftingRecipesData);
    }

   // --- Модуль для Серверов ---
    const serverGridContainer = document.getElementById('server-grid-container'); // Get the new container

    // Sample Server Data (имитация данных с сервера)
    const serversData = [
        {
            id: 'hypixel',
            title: 'Hypixel Network',
            ip: 'mc.hypixel.net',
            description: 'Один из самых крупных и популярных серверов мини-игр в мире Minecraft. Тысячи игроков ежедневно соревнуются в SkyWars, Bed Wars, Murder Mystery и многих других режимах.',
            version: '1.8 - 1.20+',
            website: 'https://hypixel.net/',
            image: 'DdNypQdN_400x400.png' // Your provided image
        },
        {
            id: 'mineplex',
            title: 'Mineplex',
            ip: 'us.mineplex.com',
            description: 'Ещё один легендарный сервер мини-игр с огромным выбором режимов, включая Death Tag, Super Smash Mobs, Bridges и Clans. Отличный выбор для активного времяпровождения.',
            version: '1.8 - 1.20+',
            website: 'https://www.mineplex.com/',
            image: 'images.png' // Your provided image
        },
        {
            id: 'cs-money',
            title: 'CS.MONEY',
            ip: 'play.cs.money',
            description: 'Сервер для любителей CS:GO со скинами и кейсами в Minecraft. Здесь вы можете открывать кейсы, получать скины и участвовать в уникальных мини-играх, вдохновленных CS:GO.',
            version: '1.16 - 1.20+',
            website: '#', // No specific website provided, keep '#' for placeholder or remove
            image: 'maxresdefault.jpg' // Your provided image
        }
    ];

    function renderServers(serversToRender) {
        if (!serverGridContainer) return; // Ensure the container exists
        serverGridContainer.innerHTML = ''; // Clear existing content

        if (serversToRender.length === 0) {
            serverGridContainer.innerHTML = '<p class="no-results">Серверы не найдены.</p>';
            return;
        }

        serversToRender.forEach(server => {
            const serverCard = document.createElement('div');
            serverCard.classList.add('server-card');

            // Construct the website link, disable if '#'
            const websiteLinkHtml = server.website && server.website !== '#'
                ? `<a href="${server.website}" target="_blank" class="visit-website-btn">Перейти на сайт</a>`
                : `<a href="#" class="visit-website-btn disabled-link">Сайт не требуется</a>`;

            serverCard.innerHTML = `
                <img src="${server.image}" alt="${server.title} Logo" class="server-logo">
                <h3>${server.title}</h3>
                <p>${server.description}</p>
                <div class="server-info">
                    <span>Версия: ${server.version}</span>
                    <span class="ip-address" id="ip-${server.id}">${server.ip}</span>
                </div>
                <button class="copy-ip-btn" data-ip="${server.ip}">Копировать IP</button>
                ${websiteLinkHtml}
            `;
            serverGridContainer.appendChild(serverCard);
        });
        // Re-attach event listeners for new buttons after rendering
        attachCopyIpListeners();
    }

    // Function to handle copying IP, separated for reusability
    async function handleCopyIp(event) {
        const button = event.target;
        const ipAddress = button.dataset.ip;

        try {
            await navigator.clipboard.writeText(ipAddress);
            const originalText = button.textContent;
            button.textContent = 'IP скопирован!';
            setTimeout(() => {
                button.textContent = originalText;
            }, 2000);
        } catch (err) {
            console.error('Не удалось скопировать IP:', err);
            alert('Ошибка при копировании IP. Попробуйте скопировать вручную: ' + ipAddress);
        }
    }

    // Function to attach listeners to copy IP buttons
    function attachCopyIpListeners() {
        const copyIpButtons = document.querySelectorAll('.copy-ip-btn');
        copyIpButtons.forEach(button => {
            button.removeEventListener('click', handleCopyIp); // Remove existing to prevent duplicates
            button.addEventListener('click', handleCopyIp);
        });
    }

    // Initialization: if we are on the servers.html page, render the servers
    if (window.location.pathname.includes('servers.html')) {
        renderServers(serversData);
    }
});
