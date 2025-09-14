// Natural Gelato Learning App - Main Application

class GelatoApp {
    constructor() {
        this.currentLanguage = 'en';
        this.currentRecipe = null;
        this.init();
    }

    init() {
        this.setupLanguageToggle();
        this.setupModalHandlers();
        this.loadInitialContent();
    }

    setupLanguageToggle() {
        const languageToggle = document.getElementById('language-toggle');
        if (languageToggle) {
            languageToggle.addEventListener('click', () => {
                this.toggleLanguage();
            });
        }
    }

    setupModalHandlers() {
        const modal = document.getElementById('recipe-modal');
        const closeButton = document.querySelector('.close-button');
        
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                this.closeRecipeModal();
            });
        }

        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeRecipeModal();
                }
            });
        }
    }

    toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'en' ? 'zh' : 'en';
        const toggleButton = document.getElementById('language-toggle');
        if (toggleButton) {
            toggleButton.textContent = this.currentLanguage === 'en' ? '中文' : 'English';
        }
        this.loadContent();
        
        // Update recipe modal if it's open
        if (this.currentRecipe) {
            this.displayRecipe(this.currentRecipe);
        }
    }

    loadInitialContent() {
        const content = document.getElementById('content');
        if (content) {
            const welcomeText = {
                en: {
                    title: 'Welcome to Natural Gelato Learning',
                    subtitle: 'Learn to make delicious gelato with natural ingredients using simple kitchen tools!',
                    selectFlavor: 'Select a Gelato Flavor to Get Started:'
                },
                zh: {
                    title: '歡迎來到天然義式冰淇淋學習',
                    subtitle: '學習使用天然配料和簡單廚具製作美味的義式冰淇淋！',
                    selectFlavor: '選擇一種義式冰淇淋口味開始：'
                }
            };

            const text = welcomeText[this.currentLanguage];
            
            content.innerHTML = `
                <div class="welcome-section">
                    <h2>${text.title}</h2>
                    <p>${text.subtitle}</p>
                    <h3>${text.selectFlavor}</h3>
                    <div class="recipe-categories">
                        <button class="category-btn active" data-category="all">
                            ${this.currentLanguage === 'en' ? 'All Recipes' : '所有食譜'}
                        </button>
                        <button class="category-btn" data-category="simple">
                            ${this.currentLanguage === 'en' ? 'Simple (No Eggs)' : '簡單版（無蛋）'}
                        </button>
                        <button class="category-btn" data-category="custard">
                            ${this.currentLanguage === 'en' ? 'Custard Base (With Eggs)' : '卡仕達基底（含蛋）'}
                        </button>
                    </div>
                    <div class="flavor-grid">
                        ${this.generateFlavorButtons()}
                    </div>
                    <div class="techniques-section">
                        <h3>${this.currentLanguage === 'en' ? 'Gelato Making Techniques' : '義式冰淇淋製作技巧'}</h3>
                        <button class="techniques-btn" id="techniques-btn" onclick="showTechniques()">
                            ${this.currentLanguage === 'en' ? 'Learn Advanced Techniques' : '學習進階技巧'}
                        </button>
                    </div>
                </div>
            `;

            this.setupFlavorButtons();
        }
    }

    generateFlavorButtons() {
        const flavors = Object.keys(RECIPES);
        return flavors.map(flavorKey => {
            const recipe = RECIPES[flavorKey];
            const name = recipe.name[this.currentLanguage];
            const description = recipe.description[this.currentLanguage];
            const difficultyText = {
                en: { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced' },
                zh: { beginner: '初級', intermediate: '中級', advanced: '高級' }
            };
            const difficulty = difficultyText[this.currentLanguage][recipe.difficulty];
            
            return `
                <button class="flavor-button" data-flavor="${flavorKey}">
                    <div class="flavor-name">${name}</div>
                    <div class="flavor-description">${description}</div>
                    <div class="flavor-meta">
                        <span class="difficulty ${recipe.difficulty}">${difficulty}</span>
                        <span class="time">${recipe.prepTime + recipe.freezeTime} min</span>
                    </div>
                </button>
            `;
        }).join('');
    }

    setupFlavorButtons() {
        const flavorButtons = document.querySelectorAll('.flavor-button');
        flavorButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const flavorKey = e.currentTarget.getAttribute('data-flavor');
                this.showRecipe(flavorKey);
            });
        });

        // Setup category filtering
        const categoryButtons = document.querySelectorAll('.category-btn');
        categoryButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                // Remove active class from all buttons
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                e.target.classList.add('active');
                
                const category = e.target.getAttribute('data-category');
                this.filterRecipes(category);
            });
        });

        // Setup techniques button
        const techniquesButton = document.getElementById('techniques-btn');
        if (techniquesButton) {
            techniquesButton.addEventListener('click', () => {
                console.log('Techniques button clicked!'); // Debug log
                this.showTechniques();
            });
        } else {
            console.log('Techniques button not found!'); // Debug log
        }
    }

    filterRecipes(category) {
        const flavorButtons = document.querySelectorAll('.flavor-button');
        
        flavorButtons.forEach(button => {
            const flavorKey = button.getAttribute('data-flavor');
            const recipe = RECIPES[flavorKey];
            
            if (category === 'all') {
                button.style.display = 'block';
            } else if (category === 'simple') {
                // Show recipes without egg yolks
                const hasEggs = recipe.ingredients.some(ingredient => 
                    ingredient.name.en.toLowerCase().includes('egg yolk')
                );
                button.style.display = hasEggs ? 'none' : 'block';
            } else if (category === 'custard') {
                // Show recipes with egg yolks
                const hasEggs = recipe.ingredients.some(ingredient => 
                    ingredient.name.en.toLowerCase().includes('egg yolk')
                );
                button.style.display = hasEggs ? 'block' : 'none';
            }
        });
    }

    showRecipe(flavorKey) {
        this.currentRecipe = flavorKey;
        this.displayRecipe(flavorKey);
        this.openRecipeModal();
    }

    displayRecipe(flavorKey) {
        const recipe = RECIPES[flavorKey];
        const recipeContent = document.getElementById('recipe-content');
        
        const labels = {
            en: {
                ingredients: 'Ingredients',
                instructions: 'Instructions',
                servings: 'Servings',
                prepTime: 'Prep Time',
                freezeTime: 'Freeze Time',
                difficulty: 'Difficulty',
                step: 'Step',
                duration: 'Duration',
                minutes: 'minutes'
            },
            zh: {
                ingredients: '配料',
                instructions: '製作步驟',
                servings: '份量',
                prepTime: '準備時間',
                freezeTime: '冷凍時間',
                difficulty: '難度',
                step: '步驟',
                duration: '時長',
                minutes: '分鐘'
            }
        };

        const text = labels[this.currentLanguage];
        const difficultyText = {
            en: { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced' },
            zh: { beginner: '初級', intermediate: '中級', advanced: '高級' }
        };

        if (recipeContent) {
            recipeContent.innerHTML = `
                <div class="recipe-header">
                    <h2>${recipe.name[this.currentLanguage]}</h2>
                    <p class="recipe-description">${recipe.description[this.currentLanguage]}</p>
                    <div class="recipe-meta">
                        <span><strong>${text.servings}:</strong> ${recipe.servings}</span>
                        <span><strong>${text.prepTime}:</strong> ${recipe.prepTime} ${text.minutes}</span>
                        <span><strong>${text.freezeTime}:</strong> ${recipe.freezeTime} ${text.minutes}</span>
                        <span><strong>${text.difficulty}:</strong> ${difficultyText[this.currentLanguage][recipe.difficulty]}</span>
                    </div>
                </div>
                
                <div class="recipe-body">
                    <div class="ingredients-section">
                        <h3>${text.ingredients}</h3>
                        <ul class="ingredients-list">
                            ${recipe.ingredients.map(ingredient => `
                                <li>
                                    <strong>${ingredient.amount} ${ingredient.unit[this.currentLanguage]}</strong> 
                                    ${ingredient.name[this.currentLanguage]}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                    
                    <div class="instructions-section">
                        <h3>${text.instructions}</h3>
                        <div class="instructions-list">
                            ${recipe.instructions.map(instruction => `
                                <div class="instruction-step">
                                    <div class="step-header">
                                        <span class="step-number">${text.step} ${instruction.step}</span>
                                        <span class="step-title">${instruction.title[this.currentLanguage]}</span>
                                        ${instruction.duration ? `<span class="step-duration">${instruction.duration} ${text.minutes}</span>` : ''}
                                    </div>
                                    <p class="step-description">${instruction.description[this.currentLanguage]}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }
    }

    openRecipeModal() {
        const modal = document.getElementById('recipe-modal');
        if (modal) {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    }

    closeRecipeModal() {
        const modal = document.getElementById('recipe-modal');
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
            this.currentRecipe = null;
        }
    }

    showTechniques() {
        console.log('showTechniques called!'); // Debug log
        const techniques = {
            en: {
                title: 'Advanced Gelato Making Techniques & Storage',
                sections: [
                    {
                        title: '🥚 Custard Base Mastery (Crema Base)',
                        content: 'The custard base creates the richest, most authentic gelato texture. Egg yolks contain lecithin, a natural emulsifier that creates silky smoothness and prevents ice crystals. Use 4-6 yolks per quart for optimal richness.',
                        tips: [
                            'Use room temperature eggs for easier mixing',
                            'Separate eggs when cold, then let yolks warm up',
                            'Save egg whites for meringues or other desserts'
                        ]
                    },
                    {
                        title: '🌡️ Perfect Tempering Technique',
                        content: 'Tempering prevents scrambled eggs and ensures smooth custard. The key is gradual temperature adjustment.',
                        tips: [
                            'Heat milk to 180°F (82°C) - just before boiling',
                            'Whisk yolks constantly while adding hot milk',
                            'Add hot milk in 3 stages: 1/4, 1/4, then remainder',
                            'If mixture curdles, immediately strain and whisk vigorously'
                        ]
                    },
                    {
                        title: '🔥 Temperature Control & Cooking',
                        content: 'Precise temperature control is crucial for perfect custard. Cook to exactly 170-175°F (77-79°C).',
                        tips: [
                            'Use an instant-read thermometer for accuracy',
                            'Stir constantly in figure-8 pattern',
                            'Test doneness: custard should coat spoon and hold a line when finger is drawn across',
                            'Never let custard boil - it will curdle instantly'
                        ]
                    },
                    {
                        title: '🔄 Professional Straining Methods',
                        content: 'Straining removes lumps and creates silky texture. Use proper technique for best results.',
                        tips: [
                            'Use fine-mesh sieve (at least 100 mesh)',
                            'Press custard through with rubber spatula',
                            'For ultra-smooth texture, strain twice',
                            'Clean sieve between strainings'
                        ]
                    },
                    {
                        title: '❄️ Aging & Chilling Process',
                        content: 'Proper aging develops flavors and improves texture. This step is crucial for professional results.',
                        tips: [
                            'Chill custard for minimum 4 hours, preferably overnight',
                            'Cover surface with plastic wrap to prevent skin forming',
                            'Stir once during chilling to prevent separation',
                            'Aged custard churns faster and smoother'
                        ]
                    },
                    {
                        title: '🥄 Advanced Hand-Churning Techniques',
                        content: 'Master hand-churning for creamy gelato without machines. Technique and timing are everything.',
                        tips: [
                            'Use shallow, wide container for faster freezing',
                            'Stir every 30 minutes for first 2 hours',
                            'Then every 20 minutes for next 2 hours',
                            'Use fork to break large ice crystals',
                            'Whisk vigorously to incorporate air'
                        ]
                    },
                    {
                        title: '🧊 Ice Crystal Prevention',
                        content: 'Small ice crystals create smooth texture. Large crystals make grainy gelato.',
                        tips: [
                            'Add 1-2 tbsp alcohol (rum, vodka) to prevent large crystals',
                            'Use glucose or corn syrup (1-2 tbsp) for smoother texture',
                            'Higher fat content = smaller ice crystals',
                            'Serve gelato at 10-15°F (-12 to -9°C) for best texture'
                        ]
                    },
                    {
                        title: '🍯 Natural Stabilizers & Emulsifiers',
                        content: 'Use natural ingredients to improve texture without artificial additives.',
                        tips: [
                            'Honey: adds sweetness and prevents crystallization',
                            'Egg yolks: natural emulsifier (lecithin)',
                            'Cornstarch: 1 tsp per cup for thicker texture',
                            'Gelatin: 1/2 tsp bloomed gelatin for stability'
                        ]
                    }
                ],
                storage: {
                    title: '📦 Professional Storage Techniques',
                    methods: [
                        {
                            title: 'Immediate Storage (0-2 hours)',
                            content: 'Cover surface with plastic wrap, store in shallow container in coldest part of freezer (-5°F to 0°F).'
                        },
                        {
                            title: 'Short-term Storage (2-5 days)',
                            content: 'Transfer to airtight container, press plastic wrap directly onto surface, seal tightly. Store at 0°F (-18°C).'
                        },
                        {
                            title: 'Long-term Storage (up to 1 month)',
                            content: 'Wrap container in aluminum foil, label with date and flavor. Store in back of freezer where temperature is most stable.'
                        },
                        {
                            title: 'Serving Preparation',
                            content: 'Remove from freezer 5-10 minutes before serving. Gelato should be soft enough to scoop but not melted.'
                        }
                    ]
                },
                troubleshooting: {
                    title: '🔧 Common Problems & Solutions',
                    problems: [
                        {
                            problem: 'Grainy texture',
                            solution: 'Ice crystals too large. Stir more frequently, add alcohol or corn syrup, ensure proper chilling.'
                        },
                        {
                            problem: 'Too hard to scoop',
                            solution: 'Too much sugar or not enough fat. Add cream or reduce sugar. Let soften before serving.'
                        },
                        {
                            problem: 'Custard curdled',
                            solution: 'Temperature too high. Strain immediately, whisk vigorously, or blend with immersion blender.'
                        },
                        {
                            problem: 'Lacks flavor',
                            solution: 'Flavors muted by cold. Increase flavoring by 25-50%. Taste base before freezing.'
                        },
                        {
                            problem: 'Melts too quickly',
                            solution: 'Not enough stabilizers. Add egg yolks or small amount of cornstarch.'
                        }
                    ]
                }
            },
            zh: {
                title: '進階義式冰淇淋製作技巧與保存',
                sections: [
                    {
                        title: '🥚 卡仕達基底精通（奶蛋基底）',
                        content: '卡仕達基底創造最豐富、最正宗的義式冰淇淋質地。蛋黃含有卵磷脂，是天然乳化劑，創造絲滑順暢並防止冰晶。每夸脫使用4-6個蛋黃以獲得最佳豐富度。',
                        tips: [
                            '使用室溫雞蛋更容易混合',
                            '雞蛋冷時分離，然後讓蛋黃回溫',
                            '保存蛋白用於蛋白霜或其他甜點'
                        ]
                    },
                    {
                        title: '🌡️ 完美調溫技巧',
                        content: '調溫防止雞蛋結塊並確保卡仕達順滑。關鍵是逐漸調整溫度。',
                        tips: [
                            '將牛奶加熱至180°F（82°C）- 剛好煮沸前',
                            '加入熱牛奶時不斷攪拌蛋黃',
                            '分3階段加入熱牛奶：1/4、1/4，然後剩餘部分',
                            '如果混合物結塊，立即過濾並大力攪拌'
                        ]
                    },
                    {
                        title: '🔥 溫度控制與烹飪',
                        content: '精確的溫度控制對完美卡仕達至關重要。煮至正好170-175°F（77-79°C）。',
                        tips: [
                            '使用即時溫度計確保準確性',
                            '以8字形不斷攪拌',
                            '測試熟度：卡仕達應掛在湯匙上，用手指劃過時保持線條',
                            '絕不要讓卡仕達煮沸 - 會立即結塊'
                        ]
                    },
                    {
                        title: '🔄 專業過濾方法',
                        content: '過濾去除結塊並創造絲滑質地。使用正確技巧獲得最佳效果。',
                        tips: [
                            '使用細網篩（至少100目）',
                            '用橡膠刮刀將卡仕達壓過篩網',
                            '要獲得超順滑質地，過濾兩次',
                            '過濾間隙清潔篩網'
                        ]
                    },
                    {
                        title: '❄️ 熟成與冷卻過程',
                        content: '適當熟成發展風味並改善質地。這個步驟對專業效果至關重要。',
                        tips: [
                            '將卡仕達冷藏至少4小時，最好過夜',
                            '用保鮮膜覆蓋表面防止結皮',
                            '冷藏期間攪拌一次防止分離',
                            '熟成的卡仕達攪拌更快更順滑'
                        ]
                    },
                    {
                        title: '🥄 進階手工攪拌技巧',
                        content: '掌握手工攪拌技巧，無需機器製作奶油狀義式冰淇淋。技巧和時機就是一切。',
                        tips: [
                            '使用淺而寬的容器加快冷凍',
                            '前2小時每30分鐘攪拌一次',
                            '然後接下來2小時每20分鐘攪拌一次',
                            '用叉子打散大冰晶',
                            '大力攪拌融入空氣'
                        ]
                    },
                    {
                        title: '🧊 防止冰晶技巧',
                        content: '小冰晶創造順滑質地。大冰晶使義式冰淇淋顆粒感。',
                        tips: [
                            '加入1-2大匙酒精（朗姆酒、伏特加）防止大冰晶',
                            '使用葡萄糖或玉米糖漿（1-2大匙）獲得更順滑質地',
                            '更高脂肪含量 = 更小冰晶',
                            '在10-15°F（-12到-9°C）享用義式冰淇淋獲得最佳質地'
                        ]
                    },
                    {
                        title: '🍯 天然穩定劑與乳化劑',
                        content: '使用天然成分改善質地，無需人工添加劑。',
                        tips: [
                            '蜂蜜：增加甜味並防止結晶',
                            '蛋黃：天然乳化劑（卵磷脂）',
                            '玉米澱粉：每杯1茶匙獲得更濃稠質地',
                            '明膠：1/2茶匙泡發明膠增加穩定性'
                        ]
                    }
                ],
                storage: {
                    title: '📦 專業保存技巧',
                    methods: [
                        {
                            title: '即時保存（0-2小時）',
                            content: '用保鮮膜覆蓋表面，存放在淺容器中，置於冷凍庫最冷部分（-5°F到0°F）。'
                        },
                        {
                            title: '短期保存（2-5天）',
                            content: '轉移到密封容器中，將保鮮膜直接壓在表面上，密封緊實。存放在0°F（-18°C）。'
                        },
                        {
                            title: '長期保存（最多1個月）',
                            content: '用鋁箔包裹容器，標記日期和口味。存放在冷凍庫後部溫度最穩定的地方。'
                        },
                        {
                            title: '享用準備',
                            content: '享用前5-10分鐘從冷凍庫取出。義式冰淇淋應該軟到可以舀取但不融化。'
                        }
                    ]
                },
                troubleshooting: {
                    title: '🔧 常見問題與解決方案',
                    problems: [
                        {
                            problem: '顆粒質地',
                            solution: '冰晶太大。更頻繁攪拌，加入酒精或玉米糖漿，確保適當冷卻。'
                        },
                        {
                            problem: '太硬難舀',
                            solution: '糖太多或脂肪不足。加入奶油或減少糖。享用前讓其軟化。'
                        },
                        {
                            problem: '卡仕達結塊',
                            solution: '溫度太高。立即過濾，大力攪拌，或用浸入式攪拌器攪拌。'
                        },
                        {
                            problem: '缺乏風味',
                            solution: '風味被冷溫抑制。增加調味料25-50%。冷凍前品嚐基底。'
                        },
                        {
                            problem: '融化太快',
                            solution: '穩定劑不足。加入蛋黃或少量玉米澱粉。'
                        }
                    ]
                }
            }
        };

        const content = techniques[this.currentLanguage];
        const recipeContent = document.getElementById('recipe-content');
        
        if (recipeContent) {
            recipeContent.innerHTML = `
                <div class="techniques-content">
                    <h2>${content.title}</h2>
                    
                    <div class="techniques-grid">
                        ${content.sections.map(section => `
                            <div class="technique-section">
                                <h3>${section.title}</h3>
                                <p>${section.content}</p>
                                ${section.tips ? `
                                    <div class="technique-tips">
                                        <h4>${this.currentLanguage === 'en' ? 'Pro Tips:' : '專業提示：'}</h4>
                                        <ul>
                                            ${section.tips.map(tip => `<li>${tip}</li>`).join('')}
                                        </ul>
                                    </div>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>

                    <div class="storage-section">
                        <h2>${content.storage.title}</h2>
                        <div class="storage-methods">
                            ${content.storage.methods.map(method => `
                                <div class="storage-method">
                                    <h4>${method.title}</h4>
                                    <p>${method.content}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div class="troubleshooting-section">
                        <h2>${content.troubleshooting.title}</h2>
                        <div class="troubleshooting-grid">
                            ${content.troubleshooting.problems.map(item => `
                                <div class="troubleshooting-item">
                                    <h4>${this.currentLanguage === 'en' ? 'Problem:' : '問題：'} ${item.problem}</h4>
                                    <p><strong>${this.currentLanguage === 'en' ? 'Solution:' : '解決方案：'}</strong> ${item.solution}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div class="safety-tips">
                        <h3>${this.currentLanguage === 'en' ? '⚠️ Safety Guidelines' : '⚠️ 安全指南'}</h3>
                        <ul>
                            <li>${this.currentLanguage === 'en' ? 'Always use fresh eggs from a reliable source (check expiration dates)' : '總是使用來自可靠來源的新鮮雞蛋（檢查保質期）'}</li>
                            <li>${this.currentLanguage === 'en' ? 'Keep custard refrigerated and use within 2-3 days maximum' : '將卡仕達冷藏保存並在最多2-3天內使用'}</li>
                            <li>${this.currentLanguage === 'en' ? 'Never let custard boil - it will curdle instantly and cannot be fixed' : '絕不要讓卡仕達煮沸 - 它會立即結塊且無法修復'}</li>
                            <li>${this.currentLanguage === 'en' ? 'Use a digital thermometer for accurate temperature control (±1°F accuracy)' : '使用數字溫度計進行準確的溫度控制（±1°F精度）'}</li>
                            <li>${this.currentLanguage === 'en' ? 'Wash hands thoroughly when handling raw eggs' : '處理生雞蛋時徹底洗手'}</li>
                            <li>${this.currentLanguage === 'en' ? 'Store gelato at 0°F (-18°C) or below for food safety' : '為食品安全，將義式冰淇淋存放在0°F（-18°C）或以下'}</li>
                        </ul>
                    </div>

                    <div class="equipment-guide">
                        <h3>${this.currentLanguage === 'en' ? '🔧 Essential Equipment' : '🔧 必需設備'}</h3>
                        <div class="equipment-list">
                            <div class="equipment-item">
                                <strong>${this.currentLanguage === 'en' ? 'Digital Thermometer' : '數字溫度計'}</strong>
                                <p>${this.currentLanguage === 'en' ? 'Instant-read thermometer with ±1°F accuracy for perfect custard' : '即時讀取溫度計，±1°F精度，製作完美卡仕達'}</p>
                            </div>
                            <div class="equipment-item">
                                <strong>${this.currentLanguage === 'en' ? 'Fine-Mesh Sieve' : '細網篩'}</strong>
                                <p>${this.currentLanguage === 'en' ? '100+ mesh sieve for silky smooth texture' : '100+目篩網，獲得絲滑順暢質地'}</p>
                            </div>
                            <div class="equipment-item">
                                <strong>${this.currentLanguage === 'en' ? 'Heavy-Bottom Saucepan' : '厚底平底鍋'}</strong>
                                <p>${this.currentLanguage === 'en' ? 'Even heat distribution prevents hot spots and curdling' : '均勻導熱防止熱點和結塊'}</p>
                            </div>
                            <div class="equipment-item">
                                <strong>${this.currentLanguage === 'en' ? 'Shallow Freezer Container' : '淺冷凍容器'}</strong>
                                <p>${this.currentLanguage === 'en' ? 'Wide, shallow container for faster, more even freezing' : '寬而淺的容器，冷凍更快更均勻'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
        
        this.openRecipeModal();
    }

    loadContent() {
        this.loadInitialContent();
    }
}

// Initialize the app when DOM is loaded
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new GelatoApp();
    
    // Make showTechniques globally available as backup
    window.showTechniques = () => {
        if (app) {
            app.showTechniques();
        }
    };
});