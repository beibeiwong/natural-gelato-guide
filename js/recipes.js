// Recipe data for Natural Gelato Learning App - Traditional Chinese Version

const RECIPES = {
    // Advanced Custard-Based Gelato Recipes (with egg yolks)
    'vanilla-custard': {
        name: {
            en: 'Vanilla Custard Gelato (Advanced)',
            zh: '香草卡仕達義式冰淇淋（進階版）'
        },
        description: {
            en: 'Rich and creamy custard-based gelato with real vanilla beans',
            zh: '濃郁奶油狀卡仕達基底配真正香草豆'
        },
        difficulty: 'advanced',
        prepTime: 45,
        freezeTime: 240,
        servings: 8,
        ingredients: [
            { name: { en: 'Whole milk', zh: '全脂牛奶' }, amount: 2, unit: { en: 'cups', zh: '杯' } },
            { name: { en: 'Heavy cream', zh: '淡奶油' }, amount: 1, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Sugar', zh: '糖' }, amount: 0.75, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Egg yolks', zh: '蛋黃' }, amount: 6, unit: { en: 'large yolks', zh: '個大蛋黃' } },
            { name: { en: 'Vanilla bean (split & scraped)', zh: '香草豆（切開刮取）' }, amount: 1, unit: { en: 'bean', zh: '根' } },
            { name: { en: 'Salt', zh: '鹽' }, amount: 1, unit: { en: 'pinch', zh: '少許' } }
        ],
        instructions: [
            {
                step: 1,
                title: { en: 'Prepare custard base', zh: '準備卡仕達基底' },
                description: { en: 'Heat milk, cream, vanilla bean seeds and pod, and half the sugar in a saucepan until steaming (don\'t boil).', zh: '在平底鍋中加熱牛奶、奶油、香草豆籽和豆莢，以及一半的糖，直到冒蒸汽（不要煮沸）。' },
                duration: 8
            },
            {
                step: 2,
                title: { en: 'Whisk egg yolks', zh: '攪拌蛋黃' },
                description: { en: 'In a bowl, whisk egg yolks with remaining sugar and salt until pale and thick.', zh: '在碗中將蛋黃與剩餘的糖和鹽攪拌至顏色變淺且濃稠。' },
                duration: 5
            },
            {
                step: 3,
                title: { en: 'Temper the eggs', zh: '調溫蛋液' },
                description: { en: 'Slowly pour 1/3 of hot milk mixture into egg yolks, whisking constantly to prevent curdling.', zh: '慢慢將1/3的熱牛奶混合物倒入蛋黃中，不斷攪拌以防結塊。' },
                duration: 3
            },
            {
                step: 4,
                title: { en: 'Cook the custard', zh: '煮製卡仕達' },
                description: { en: 'Return mixture to saucepan and cook over low heat, stirring constantly, until it coats the back of a spoon (170°F/77°C).', zh: '將混合物倒回平底鍋，用小火加熱，不斷攪拌，直到能掛在湯匙背面（170°F/77°C）。' },
                duration: 8
            },
            {
                step: 5,
                title: { en: 'Strain and cool', zh: '過濾和冷卻' },
                description: { en: 'Strain custard through fine mesh, remove vanilla pod, cover with plastic wrap touching surface, and chill for at least 4 hours.', zh: '用細網過濾卡仕達，取出香草豆莢，用保鮮膜貼面覆蓋，冷藏至少4小時。' },
                duration: 240
            },
            {
                step: 6,
                title: { en: 'Freeze and stir', zh: '冷凍和攪拌' },
                description: { en: 'Pour chilled custard into shallow container, freeze 45 minutes, then stir vigorously every 30 minutes for 3-4 hours until creamy.', zh: '將冷卻的卡仕達倒入淺容器中，冷凍45分鐘，然後每30分鐘大力攪拌一次，持續3-4小時直至呈奶油狀。' },
                duration: 240
            }
        ]
    },
    'chocolate-custard': {
        name: {
            en: 'Rich Chocolate Custard Gelato',
            zh: '濃郁巧克力卡仕達義式冰淇淋'
        },
        description: {
            en: 'Decadent chocolate gelato with egg custard base',
            zh: '奢華巧克力義式冰淇淋配蛋液卡仕達基底'
        },
        difficulty: 'advanced',
        prepTime: 50,
        freezeTime: 240,
        servings: 8,
        ingredients: [
            { name: { en: 'Whole milk', zh: '全脂牛奶' }, amount: 1.5, unit: { en: 'cups', zh: '杯' } },
            { name: { en: 'Heavy cream', zh: '淡奶油' }, amount: 1, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Sugar', zh: '糖' }, amount: 0.75, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Egg yolks', zh: '蛋黃' }, amount: 5, unit: { en: 'large yolks', zh: '個大蛋黃' } },
            { name: { en: 'Dark chocolate (70% cocoa)', zh: '黑巧克力（70%可可）' }, amount: 4, unit: { en: 'oz chopped', zh: '盎司切碎' } },
            { name: { en: 'Cocoa powder (unsweetened)', zh: '可可粉（無糖）' }, amount: 3, unit: { en: 'tbsp', zh: '大匙' } },
            { name: { en: 'Vanilla extract', zh: '香草精' }, amount: 1, unit: { en: 'tsp', zh: '茶匙' } }
        ],
        instructions: [
            {
                step: 1,
                title: { en: 'Melt chocolate', zh: '融化巧克力' },
                description: { en: 'Melt chopped chocolate in a double boiler or microwave, stir until smooth. Set aside.', zh: '用雙層鍋或微波爐融化切碎的巧克力，攪拌至光滑。放置一旁。' },
                duration: 5
            },
            {
                step: 2,
                title: { en: 'Heat milk mixture', zh: '加熱牛奶混合物' },
                description: { en: 'Heat milk, cream, cocoa powder, and half the sugar, whisking until cocoa dissolves and mixture steams.', zh: '加熱牛奶、奶油、可可粉和一半的糖，攪拌至可可粉溶解且混合物冒蒸汽。' },
                duration: 8
            },
            {
                step: 3,
                title: { en: 'Prepare egg mixture', zh: '準備蛋液混合物' },
                description: { en: 'Whisk egg yolks with remaining sugar until pale. Slowly temper with hot milk mixture.', zh: '將蛋黃與剩餘的糖攪拌至顏色變淺。慢慢用熱牛奶混合物調溫。' },
                duration: 5
            },
            {
                step: 4,
                title: { en: 'Cook custard', zh: '煮製卡仕達' },
                description: { en: 'Return to saucepan, cook over low heat stirring constantly until it coats spoon (170°F/77°C).', zh: '倒回平底鍋，用小火加熱並不斷攪拌，直到能掛在湯匙上（170°F/77°C）。' },
                duration: 10
            },
            {
                step: 5,
                title: { en: 'Add chocolate', zh: '加入巧克力' },
                description: { en: 'Remove from heat, whisk in melted chocolate and vanilla until smooth. Strain and chill 4+ hours.', zh: '離火，攪拌入融化的巧克力和香草精至光滑。過濾並冷藏4小時以上。' },
                duration: 240
            },
            {
                step: 6,
                title: { en: 'Freeze and stir', zh: '冷凍和攪拌' },
                description: { en: 'Freeze in shallow container 45 minutes, stir every 30 minutes for 3-4 hours until creamy.', zh: '在淺容器中冷凍45分鐘，每30分鐘攪拌一次，持續3-4小時直至呈奶油狀。' },
                duration: 240
            }
        ]
    },
    'pistachio-custard': {
        name: {
            en: 'Authentic Pistachio Custard Gelato',
            zh: '正宗開心果卡仕達義式冰淇淋'
        },
        description: {
            en: 'Traditional Italian pistachio gelato with rich custard base',
            zh: '傳統義式開心果義式冰淇淋配濃郁卡仕達基底'
        },
        difficulty: 'advanced',
        prepTime: 60,
        freezeTime: 240,
        servings: 8,
        ingredients: [
            { name: { en: 'Whole milk', zh: '全脂牛奶' }, amount: 2, unit: { en: 'cups', zh: '杯' } },
            { name: { en: 'Heavy cream', zh: '淡奶油' }, amount: 0.75, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Sugar', zh: '糖' }, amount: 0.75, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Egg yolks', zh: '蛋黃' }, amount: 6, unit: { en: 'large yolks', zh: '個大蛋黃' } },
            { name: { en: 'Shelled pistachios (unsalted)', zh: '去殼開心果（無鹽）' }, amount: 1.5, unit: { en: 'cups', zh: '杯' } },
            { name: { en: 'Almond extract', zh: '杏仁精' }, amount: 0.25, unit: { en: 'tsp', zh: '茶匙' } },
            { name: { en: 'Salt', zh: '鹽' }, amount: 1, unit: { en: 'pinch', zh: '少許' } }
        ],
        instructions: [
            {
                step: 1,
                title: { en: 'Prepare pistachio paste', zh: '準備開心果醬' },
                description: { en: 'Blanch pistachios in boiling water 2 minutes, peel skins. Grind in food processor with 2 tbsp sugar until very fine paste forms.', zh: '將開心果在沸水中燙2分鐘，去皮。用食物處理器與2大匙糖一起研磨至形成非常細的醬狀。' },
                duration: 15
            },
            {
                step: 2,
                title: { en: 'Infuse milk', zh: '浸泡牛奶' },
                description: { en: 'Heat milk, cream, and pistachio paste until steaming. Let steep 30 minutes, then strain through fine mesh, pressing solids.', zh: '加熱牛奶、奶油和開心果醬至冒蒸汽。浸泡30分鐘，然後用細網過濾，壓榨固體物。' },
                duration: 35
            },
            {
                step: 3,
                title: { en: 'Make custard', zh: '製作卡仕達' },
                description: { en: 'Whisk egg yolks with remaining sugar. Temper with hot pistachio milk, return to pan and cook until it coats spoon.', zh: '將蛋黃與剩餘的糖攪拌。用熱開心果牛奶調溫，倒回鍋中煮至能掛在湯匙上。' },
                duration: 10
            },
            {
                step: 4,
                title: { en: 'Finish and chill', zh: '完成和冷卻' },
                description: { en: 'Stir in almond extract and salt. Strain, cover surface with plastic wrap, chill 4+ hours.', zh: '攪拌入杏仁精和鹽。過濾，用保鮮膜貼面覆蓋，冷藏4小時以上。' },
                duration: 240
            },
            {
                step: 5,
                title: { en: 'Freeze and stir', zh: '冷凍和攪拌' },
                description: { en: 'Freeze custard in shallow container 45 minutes, stir every 30 minutes for 3-4 hours until creamy.', zh: '將卡仕達在淺容器中冷凍45分鐘，每30分鐘攪拌一次，持續3-4小時直至呈奶油狀。' },
                duration: 240
            }
        ]
    },
    'stracciatella-custard': {
        name: {
            en: 'Stracciatella Custard Gelato',
            zh: '史特拉奇亞泰拉卡仕達義式冰淇淋'
        },
        description: {
            en: 'Classic Italian vanilla custard gelato with chocolate shavings',
            zh: '經典義式香草卡仕達義式冰淇淋配巧克力碎片'
        },
        difficulty: 'advanced',
        prepTime: 50,
        freezeTime: 240,
        servings: 8,
        ingredients: [
            { name: { en: 'Whole milk', zh: '全脂牛奶' }, amount: 2, unit: { en: 'cups', zh: '杯' } },
            { name: { en: 'Heavy cream', zh: '淡奶油' }, amount: 1, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Sugar', zh: '糖' }, amount: 0.75, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Egg yolks', zh: '蛋黃' }, amount: 6, unit: { en: 'large yolks', zh: '個大蛋黃' } },
            { name: { en: 'Vanilla extract', zh: '香草精' }, amount: 2, unit: { en: 'tsp', zh: '茶匙' } },
            { name: { en: 'Dark chocolate (for shaving)', zh: '黑巧克力（用於刨片）' }, amount: 3, unit: { en: 'oz', zh: '盎司' } },
            { name: { en: 'Salt', zh: '鹽' }, amount: 1, unit: { en: 'pinch', zh: '少許' } }
        ],
        instructions: [
            {
                step: 1,
                title: { en: 'Make vanilla custard', zh: '製作香草卡仕達' },
                description: { en: 'Heat milk and cream until steaming. Whisk egg yolks with sugar, temper with hot milk, cook until it coats spoon.', zh: '加熱牛奶和奶油至冒蒸汽。將蛋黃與糖攪拌，用熱牛奶調溫，煮至能掛在湯匙上。' },
                duration: 15
            },
            {
                step: 2,
                title: { en: 'Add vanilla and chill', zh: '加入香草和冷卻' },
                description: { en: 'Stir in vanilla extract and salt. Strain, cover surface, chill 4+ hours.', zh: '攪拌入香草精和鹽。過濾，覆蓋表面，冷藏4小時以上。' },
                duration: 240
            },
            {
                step: 3,
                title: { en: 'Prepare chocolate', zh: '準備巧克力' },
                description: { en: 'Melt chocolate slightly, then use a knife to shave into small irregular pieces. Keep cool.', zh: '將巧克力稍微融化，然後用刀刨成小的不規則片狀。保持冷卻。' },
                duration: 10
            },
            {
                step: 4,
                title: { en: 'Freeze base', zh: '冷凍基底' },
                description: { en: 'Freeze custard in shallow container 45 minutes, stir every 30 minutes for 2 hours.', zh: '將卡仕達在淺容器中冷凍45分鐘，每30分鐘攪拌一次，持續2小時。' },
                duration: 120
            },
            {
                step: 5,
                title: { en: 'Add chocolate shavings', zh: '加入巧克力碎片' },
                description: { en: 'When gelato is almost set, fold in chocolate shavings gently. Continue freezing 1-2 hours, stirring every 30 minutes.', zh: '當義式冰淇淋幾乎凝固時，輕輕拌入巧克力碎片。繼續冷凍1-2小時，每30分鐘攪拌一次。' },
                duration: 120
            }
        ]
    },
    'honey-lavender': {
        name: {
            en: 'Honey Lavender Gelato',
            zh: '蜂蜜薰衣草義式冰淇淋'
        },
        description: {
            en: 'A delicate floral gelato with natural honey sweetness',
            zh: '帶有天然蜂蜜甜味的精緻花香義式冰淇淋'
        },
        difficulty: 'intermediate',
        prepTime: 20,
        freezeTime: 180,
        servings: 6,
        ingredients: [
            { name: { en: 'Whole milk', zh: '全脂牛奶' }, amount: 2, unit: { en: 'cups', zh: '杯' } },
            { name: { en: 'Heavy cream', zh: '淡奶油' }, amount: 1, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Honey', zh: '蜂蜜' }, amount: 0.5, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Dried lavender flowers', zh: '乾薰衣草花' }, amount: 2, unit: { en: 'tbsp', zh: '大匙' } }
        ],
        instructions: [
            {
                step: 1,
                title: { en: 'Infuse the milk', zh: '浸泡牛奶' },
                description: { en: 'Heat milk gently with lavender flowers until warm (do not boil).', zh: '將牛奶與薰衣草花一起輕輕加熱至溫熱（不要煮沸）。' },
                duration: 5
            },
            {
                step: 2,
                title: { en: 'Steep and strain', zh: '浸泡和過濾' },
                description: { en: 'Let lavender steep for 15 minutes, then strain to remove flowers.', zh: '讓薰衣草浸泡15分鐘，然後過濾去除花朵。' },
                duration: 15
            },
            {
                step: 3,
                title: { en: 'Mix ingredients', zh: '混合配料' },
                description: { en: 'Stir in cream and honey until completely mixed.', zh: '加入奶油和蜂蜜，攪拌至完全混合。' },
                duration: 3
            },
            {
                step: 4,
                title: { en: 'Initial freeze', zh: '初次冷凍' },
                description: { en: 'Freeze in shallow container for 30 minutes, then stir vigorously.', zh: '在淺容器中冷凍30分鐘，然後大力攪拌。' },
                duration: 30
            },
            {
                step: 5,
                title: { en: 'Continue freezing', zh: '繼續冷凍' },
                description: { en: 'Repeat stirring every 30 minutes for 3 hours until creamy.', zh: '每30分鐘重複攪拌一次，持續3小時直至呈奶油狀。' },
                duration: 180
            }
        ]
    },
    'matcha': {
        name: {
            en: 'Matcha Green Tea Gelato',
            zh: '抹茶綠茶義式冰淇淋'
        },
        description: {
            en: 'Rich and earthy Japanese matcha flavor',
            zh: '濃郁的日式抹茶風味'
        },
        difficulty: 'beginner',
        prepTime: 15,
        freezeTime: 180,
        servings: 6,
        ingredients: [
            { name: { en: 'Whole milk', zh: '全脂牛奶' }, amount: 2.5, unit: { en: 'cups', zh: '杯' } },
            { name: { en: 'Heavy cream', zh: '淡奶油' }, amount: 1, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Sugar', zh: '糖' }, amount: 0.75, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Matcha green tea powder (sifted)', zh: '抹茶粉（過篩）' }, amount: 2, unit: { en: 'tbsp', zh: '大匙' } }
        ],
        instructions: [
            {
                step: 1,
                title: { en: 'Dissolve sugar', zh: '溶解糖' },
                description: { en: 'Whisk sugar and milk until sugar dissolves.', zh: '將糖和牛奶攪拌至糖完全溶解。' },
                duration: 3
            },
            {
                step: 2,
                title: { en: 'Add matcha', zh: '加入抹茶' },
                description: { en: 'Slowly add sifted matcha powder, whisking thoroughly to avoid lumps.', zh: '慢慢加入過篩的抹茶粉，充分攪拌避免結塊。' },
                duration: 5
            },
            {
                step: 3,
                title: { en: 'Add cream', zh: '加入奶油' },
                description: { en: 'Stir in cream.', zh: '加入奶油攪拌。' },
                duration: 2
            },
            {
                step: 4,
                title: { en: 'Freeze and stir', zh: '冷凍和攪拌' },
                description: { en: 'Freeze 30 minutes, stir vigorously every 30 minutes for 3 hours.', zh: '冷凍30分鐘，每30分鐘大力攪拌一次，持續3小時。' },
                duration: 180
            }
        ]
    },
    'chocolate-chili': {
        name: {
            en: 'Chocolate Chili Gelato',
            zh: '巧克力辣椒義式冰淇淋'
        },
        description: {
            en: 'Rich chocolate with a spicy kick',
            zh: '濃郁巧克力配辛辣口感'
        },
        difficulty: 'intermediate',
        prepTime: 15,
        freezeTime: 180,
        servings: 6,
        ingredients: [
            { name: { en: 'Whole milk', zh: '全脂牛奶' }, amount: 2, unit: { en: 'cups', zh: '杯' } },
            { name: { en: 'Heavy cream', zh: '淡奶油' }, amount: 1, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Sugar', zh: '糖' }, amount: 0.75, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Cocoa powder (unsweetened)', zh: '可可粉（無糖）' }, amount: 0.5, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Chili powder or cayenne pepper', zh: '辣椒粉或卡宴胡椒' }, amount: 0.25, unit: { en: 'tsp', zh: '茶匙' } }
        ],
        instructions: [
            {
                step: 1,
                title: { en: 'Mix dry ingredients', zh: '混合乾配料' },
                description: { en: 'Whisk sugar and cocoa powder into milk until fully dissolved.', zh: '將糖和可可粉加入牛奶中攪拌至完全溶解。' },
                duration: 5
            },
            {
                step: 2,
                title: { en: 'Add spice and cream', zh: '加入香料和奶油' },
                description: { en: 'Add chili powder and cream, mix well.', zh: '加入辣椒粉和奶油，充分混合。' },
                duration: 3
            },
            {
                step: 3,
                title: { en: 'Freeze and stir', zh: '冷凍和攪拌' },
                description: { en: 'Freeze 30 minutes, stir vigorously every 30 minutes for 3 hours.', zh: '冷凍30分鐘，每30分鐘大力攪拌一次，持續3小時。' },
                duration: 180
            }
        ]
    },
    'coconut-lime': {
        name: {
            en: 'Coconut Lime Gelato',
            zh: '椰子青檸義式冰淇淋'
        },
        description: {
            en: 'Tropical coconut with zesty lime',
            zh: '熱帶椰子配清香青檸'
        },
        difficulty: 'beginner',
        prepTime: 10,
        freezeTime: 180,
        servings: 6,
        ingredients: [
            { name: { en: 'Canned full-fat coconut milk', zh: '罐裝全脂椰奶' }, amount: 2, unit: { en: 'cups', zh: '杯' } },
            { name: { en: 'Heavy cream', zh: '淡奶油' }, amount: 1, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Sugar', zh: '糖' }, amount: 0.75, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Lime zest', zh: '青檸皮屑' }, amount: 2, unit: { en: 'limes', zh: '個青檸的皮屑' } }
        ],
        instructions: [
            {
                step: 1,
                title: { en: 'Mix all ingredients', zh: '混合所有配料' },
                description: { en: 'Whisk coconut milk, cream, sugar, and lime zest until sugar dissolves.', zh: '將椰奶、奶油、糖和青檸皮屑攪拌至糖完全溶解。' },
                duration: 5
            },
            {
                step: 2,
                title: { en: 'Initial freeze', zh: '初次冷凍' },
                description: { en: 'Pour into a shallow container and freeze 30 minutes.', zh: '倒入淺容器中冷凍30分鐘。' },
                duration: 30
            },
            {
                step: 3,
                title: { en: 'Continue freezing', zh: '繼續冷凍' },
                description: { en: 'Stir vigorously every 30 minutes for 3 hours until creamy.', zh: '每30分鐘大力攪拌一次，持續3小時直至呈奶油狀。' },
                duration: 180
            }
        ]
    },
    'rose-cardamom': {
        name: {
            en: 'Rose and Cardamom Gelato',
            zh: '玫瑰豆蔻義式冰淇淋'
        },
        description: {
            en: 'Elegant floral rose with aromatic cardamom',
            zh: '優雅的玫瑰花香配芳香豆蔻'
        },
        difficulty: 'intermediate',
        prepTime: 25,
        freezeTime: 180,
        servings: 6,
        ingredients: [
            { name: { en: 'Whole milk', zh: '全脂牛奶' }, amount: 2.5, unit: { en: 'cups', zh: '杯' } },
            { name: { en: 'Heavy cream', zh: '淡奶油' }, amount: 1, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Sugar', zh: '糖' }, amount: 0.75, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Rosewater', zh: '玫瑰水' }, amount: 1, unit: { en: 'tsp', zh: '茶匙' } },
            { name: { en: 'Cardamom pods (crushed)', zh: '豆蔻莢（壓碎）' }, amount: 5, unit: { en: 'pods', zh: '個' } }
        ],
        instructions: [
            {
                step: 1,
                title: { en: 'Infuse cardamom', zh: '浸泡豆蔻' },
                description: { en: 'Heat the milk with crushed cardamom pods until warm; steep 15 mins and strain out pods.', zh: '將牛奶與壓碎的豆蔻莢一起加熱至溫熱；浸泡15分鐘後過濾去除豆蔻莢。' },
                duration: 20
            },
            {
                step: 2,
                title: { en: 'Add sugar and cream', zh: '加入糖和奶油' },
                description: { en: 'Stir sugar and cream into the milk until sugar dissolves.', zh: '將糖和奶油加入牛奶中攪拌至糖完全溶解。' },
                duration: 3
            },
            {
                step: 3,
                title: { en: 'Add rosewater', zh: '加入玫瑰水' },
                description: { en: 'Add rosewater.', zh: '加入玫瑰水。' },
                duration: 1
            },
            {
                step: 4,
                title: { en: 'Freeze and stir', zh: '冷凍和攪拌' },
                description: { en: 'Freeze 30 minutes and stir every 30 mins for 3 hours.', zh: '冷凍30分鐘，每30分鐘攪拌一次，持續3小時。' },
                duration: 180
            }
        ]
    },
    'salted-caramel': {
        name: {
            en: 'Salted Caramel Gelato',
            zh: '鹽焦糖義式冰淇淋'
        },
        description: {
            en: 'Rich caramel with a hint of sea salt',
            zh: '濃郁焦糖配海鹽提味'
        },
        difficulty: 'advanced',
        prepTime: 30,
        freezeTime: 180,
        servings: 6,
        ingredients: [
            { name: { en: 'Granulated sugar', zh: '細砂糖' }, amount: 1, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Unsalted butter', zh: '無鹽奶油' }, amount: 3, unit: { en: 'tbsp', zh: '大匙' } },
            { name: { en: 'Heavy cream', zh: '淡奶油' }, amount: 1, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Whole milk', zh: '全脂牛奶' }, amount: 1.5, unit: { en: 'cups', zh: '杯' } },
            { name: { en: 'Sea salt', zh: '海鹽' }, amount: 1, unit: { en: 'tsp', zh: '茶匙' } }
        ],
        instructions: [
            {
                step: 1,
                title: { en: 'Make caramel', zh: '製作焦糖' },
                description: { en: 'In a saucepan, melt sugar over medium heat, stirring till deep amber color forms.', zh: '在平底鍋中用中火融化糖，攪拌至形成深琥珀色。' },
                duration: 10
            },
            {
                step: 2,
                title: { en: 'Add butter', zh: '加入奶油' },
                description: { en: 'Remove from heat; stir in butter until melted.', zh: '離火；加入奶油攪拌至融化。' },
                duration: 2
            },
            {
                step: 3,
                title: { en: 'Add cream and milk', zh: '加入奶油和牛奶' },
                description: { en: 'Slowly add cream, stirring constantly. Stir in milk and salt, cool completely.', zh: '慢慢加入奶油，不斷攪拌。加入牛奶和鹽，完全冷卻。' },
                duration: 15
            },
            {
                step: 4,
                title: { en: 'Freeze and stir', zh: '冷凍和攪拌' },
                description: { en: 'Freeze in shallow container 30 minutes; stir every 30 minutes for 3 hours.', zh: '在淺容器中冷凍30分鐘；每30分鐘攪拌一次，持續3小時。' },
                duration: 180
            }
        ]
    },
    'pineapple-basil': {
        name: {
            en: 'Pineapple Basil Gelato',
            zh: '鳳梨羅勒義式冰淇淋'
        },
        description: {
            en: 'Sweet tropical pineapple with fresh basil',
            zh: '甜美熱帶鳳梨配新鮮羅勒'
        },
        difficulty: 'intermediate',
        prepTime: 15,
        freezeTime: 180,
        servings: 6,
        ingredients: [
            { name: { en: 'Fresh pineapple puree', zh: '新鮮鳳梨泥' }, amount: 2, unit: { en: 'cups', zh: '杯' } },
            { name: { en: 'Whole milk', zh: '全脂牛奶' }, amount: 1, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Heavy cream', zh: '淡奶油' }, amount: 1, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Sugar', zh: '糖' }, amount: 0.75, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Fresh basil leaves (finely chopped)', zh: '新鮮羅勒葉（切碎）' }, amount: 10, unit: { en: 'leaves', zh: '片' } }
        ],
        instructions: [
            {
                step: 1,
                title: { en: 'Mix all ingredients', zh: '混合所有配料' },
                description: { en: 'Mix pineapple puree with milk, cream, sugar, and chopped basil.', zh: '將鳳梨泥與牛奶、奶油、糖和切碎的羅勒混合。' },
                duration: 5
            },
            {
                step: 2,
                title: { en: 'Freeze and stir', zh: '冷凍和攪拌' },
                description: { en: 'Freeze in shallow dish 30 minutes; stir vigorously every 30 minutes for 3 hours.', zh: '在淺盤中冷凍30分鐘；每30分鐘大力攪拌一次，持續3小時。' },
                duration: 180
            }
        ]
    },
    'espresso': {
        name: {
            en: 'Espresso Gelato',
            zh: '濃縮咖啡義式冰淇淋'
        },
        description: {
            en: 'Rich and bold coffee flavor',
            zh: '濃郁醇厚的咖啡風味'
        },
        difficulty: 'beginner',
        prepTime: 10,
        freezeTime: 180,
        servings: 6,
        ingredients: [
            { name: { en: 'Whole milk', zh: '全脂牛奶' }, amount: 2.5, unit: { en: 'cups', zh: '杯' } },
            { name: { en: 'Heavy cream', zh: '淡奶油' }, amount: 1, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Sugar', zh: '糖' }, amount: 0.75, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Instant espresso powder or strong brewed espresso', zh: '速溶濃縮咖啡粉或濃縮咖啡' }, amount: 2, unit: { en: 'tbsp', zh: '大匙' } }
        ],
        instructions: [
            {
                step: 1,
                title: { en: 'Dissolve espresso', zh: '溶解咖啡' },
                description: { en: 'Dissolve espresso powder or brewed espresso in milk.', zh: '將速溶咖啡粉或濃縮咖啡在牛奶中溶解。' },
                duration: 3
            },
            {
                step: 2,
                title: { en: 'Add sugar and cream', zh: '加入糖和奶油' },
                description: { en: 'Add sugar and cream, whisk until sugar dissolves.', zh: '加入糖和奶油，攪拌至糖完全溶解。' },
                duration: 3
            },
            {
                step: 3,
                title: { en: 'Freeze and stir', zh: '冷凍和攪拌' },
                description: { en: 'Freeze 30 minutes; stir every 30 minutes for 3 hours.', zh: '冷凍30分鐘；每30分鐘攪拌一次，持續3小時。' },
                duration: 180
            }
        ]
    },
    'sea-salt-blue-milk': {
        name: {
            en: 'Sea Salt & Blue Milk Gelato',
            zh: '海鹽藍牛奶義式冰淇淋'
        },
        description: {
            en: 'Creamy milk gelato with sea salt and natural blue color',
            zh: '奶香濃郁配海鹽和天然藍色'
        },
        difficulty: 'beginner',
        prepTime: 15,
        freezeTime: 180,
        servings: 6,
        ingredients: [
            { name: { en: 'Whole milk', zh: '全脂牛奶' }, amount: 2, unit: { en: 'cups', zh: '杯' } },
            { name: { en: 'Heavy cream', zh: '淡奶油' }, amount: 1, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Granulated sugar', zh: '細砂糖' }, amount: 0.75, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Sea salt', zh: '海鹽' }, amount: 0.5, unit: { en: 'tsp', zh: '茶匙' } },
            { name: { en: 'Blue spirulina powder or butterfly pea flower tea', zh: '藍藻粉或蝶豆花茶' }, amount: 1, unit: { en: 'tsp or 1/4 cup', zh: '茶匙或1/4杯' } }
        ],
        instructions: [
            {
                step: 1,
                title: { en: 'Mix base ingredients', zh: '混合基礎配料' },
                description: { en: 'In a bowl, whisk together milk, cream, sugar, and sea salt until sugar dissolves.', zh: '在碗中將牛奶、奶油、糖和海鹽攪拌至糖完全溶解。' },
                duration: 5
            },
            {
                step: 2,
                title: { en: 'Add natural coloring', zh: '加入天然色素' },
                description: { en: 'Add blue spirulina powder or butterfly pea flower tea to give a natural blue color, mix well.', zh: '加入藍藻粉或蝶豆花茶製造天然藍色，充分混合。' },
                duration: 3
            },
            {
                step: 3,
                title: { en: 'Initial freeze', zh: '初次冷凍' },
                description: { en: 'Pour mixture into a shallow metal or glass container. Freeze for 30 minutes.', zh: '將混合物倒入淺金屬或玻璃容器中。冷凍30分鐘。' },
                duration: 30
            },
            {
                step: 4,
                title: { en: 'Stir and repeat', zh: '攪拌並重複' },
                description: { en: 'Remove and stir vigorously with a whisk or fork to break ice crystals. Repeat stirring every 30 minutes for 3 hours until gelato has a smooth, creamy consistency.', zh: '取出用攪拌器或叉子大力攪拌打散冰晶。每30分鐘重複攪拌一次，持續3小時直至呈光滑奶油狀。' },
                duration: 180
            }
        ]
    },
    'raspberry': {
        name: {
            en: 'Raspberry Gelato',
            zh: '覆盆子義式冰淇淋'
        },
        description: {
            en: 'Fresh and tangy raspberry with natural fruit flavor',
            zh: '新鮮酸甜覆盆子天然果味'
        },
        difficulty: 'beginner',
        prepTime: 15,
        freezeTime: 180,
        servings: 6,
        ingredients: [
            { name: { en: 'Fresh or frozen raspberries', zh: '新鮮或冷凍覆盆子' }, amount: 2, unit: { en: 'cups', zh: '杯' } },
            { name: { en: 'Whole milk', zh: '全脂牛奶' }, amount: 2, unit: { en: 'cups', zh: '杯' } },
            { name: { en: 'Heavy cream', zh: '淡奶油' }, amount: 1, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Sugar', zh: '糖' }, amount: 0.75, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Lemon juice', zh: '檸檬汁' }, amount: 1, unit: { en: 'tbsp', zh: '大匙' } }
        ],
        instructions: [
            {
                step: 1,
                title: { en: 'Prepare raspberries', zh: '準備覆盆子' },
                description: { en: 'Mash the raspberries with a fork or blend lightly; strain seeds if desired.', zh: '用叉子壓碎覆盆子或輕微攪拌；如需要可過濾種子。' },
                duration: 5
            },
            {
                step: 2,
                title: { en: 'Mix dairy base', zh: '混合乳製品基底' },
                description: { en: 'In a bowl, mix milk, cream, sugar until sugar dissolves.', zh: '在碗中將牛奶、奶油、糖混合至糖完全溶解。' },
                duration: 3
            },
            {
                step: 3,
                title: { en: 'Combine ingredients', zh: '合併配料' },
                description: { en: 'Stir in raspberry puree and lemon juice.', zh: '加入覆盆子泥和檸檬汁攪拌。' },
                duration: 2
            },
            {
                step: 4,
                title: { en: 'Freeze and stir', zh: '冷凍和攪拌' },
                description: { en: 'Pour into shallow container and freeze 30 minutes. Stir every 30 minutes for about 3 hours until creamy.', zh: '倒入淺容器中冷凍30分鐘。每30分鐘攪拌一次，約3小時直至呈奶油狀。' },
                duration: 180
            }
        ]
    },
    'rainbow': {
        name: {
            en: 'Rainbow Gelato',
            zh: '彩虹義式冰淇淋'
        },
        description: {
            en: 'Layered fruit purees creating a beautiful rainbow effect',
            zh: '分層果泥製造美麗彩虹效果'
        },
        difficulty: 'advanced',
        prepTime: 45,
        freezeTime: 120,
        servings: 6,
        ingredients: [
            { name: { en: 'Kiwi (mashed)', zh: '奇異果（壓碎）' }, amount: 0.5, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Mango (blended)', zh: '芒果（攪拌）' }, amount: 0.5, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Raspberries (mashed)', zh: '覆盆子（壓碎）' }, amount: 0.5, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Blueberries (mashed)', zh: '藍莓（壓碎）' }, amount: 0.5, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Passionfruit pulp', zh: '百香果果肉' }, amount: 0.5, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Whole milk (for each layer)', zh: '全脂牛奶（每層）' }, amount: 2.5, unit: { en: 'cups total', zh: '杯總計' } },
            { name: { en: 'Sugar (for each layer)', zh: '糖（每層）' }, amount: 1.25, unit: { en: 'cups total', zh: '杯總計' } }
        ],
        instructions: [
            {
                step: 1,
                title: { en: 'Prepare fruit purees', zh: '準備果泥' },
                description: { en: 'For each fruit puree, mix with 1/2 cup milk and 1/4 cup sugar until sugar dissolves.', zh: '每種果泥與1/2杯牛奶和1/4杯糖混合至糖完全溶解。' },
                duration: 15
            },
            {
                step: 2,
                title: { en: 'Layer the colors', zh: '分層顏色' },
                description: { en: 'Layer each fruit mixture gently in a shallow container (e.g., kiwi first, freeze 15 minutes, then mango, freeze 15 minutes, etc.).', zh: '在淺容器中輕輕分層每種果汁混合物（如先放奇異果，冷凍15分鐘，然後芒果，冷凍15分鐘，等等）。' },
                duration: 75
            },
            {
                step: 3,
                title: { en: 'Final freeze', zh: '最終冷凍' },
                description: { en: 'Freeze fully after layering all colors (about 2 hours).', zh: '所有顏色分層後完全冷凍（約2小時）。' },
                duration: 120
            },
            {
                step: 4,
                title: { en: 'Serve carefully', zh: '小心盛裝' },
                description: { en: 'To serve, scoop gently to keep color layers distinct.', zh: '盛裝時輕輕舀取以保持顏色層次分明。' },
                duration: 0
            }
        ]
    },
    'pistachio': {
        name: {
            en: 'Pistachio Gelato',
            zh: '開心果義式冰淇淋'
        },
        description: {
            en: 'Rich and nutty pistachio with authentic Italian flavor',
            zh: '濃郁堅果開心果正宗義式風味'
        },
        difficulty: 'intermediate',
        prepTime: 20,
        freezeTime: 180,
        servings: 6,
        ingredients: [
            { name: { en: 'Shelled pistachios (unsalted)', zh: '去殼開心果（無鹽）' }, amount: 1, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Whole milk', zh: '全脂牛奶' }, amount: 2.5, unit: { en: 'cups', zh: '杯' } },
            { name: { en: 'Heavy cream', zh: '淡奶油' }, amount: 1, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Sugar', zh: '糖' }, amount: 0.75, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Salt', zh: '鹽' }, amount: 1, unit: { en: 'pinch', zh: '少許' } }
        ],
        instructions: [
            {
                step: 1,
                title: { en: 'Grind pistachios', zh: '研磨開心果' },
                description: { en: 'Grind pistachios finely in a food processor or blender into buttery texture.', zh: '用食物處理器或攪拌機將開心果研磨成細膩的奶油狀質地。' },
                duration: 5
            },
            {
                step: 2,
                title: { en: 'Heat milk mixture', zh: '加熱牛奶混合物' },
                description: { en: 'Heat milk, sugar, and salt in a saucepan until sugar dissolves (don\'t boil). Cool.', zh: '在平底鍋中加熱牛奶、糖和鹽至糖完全溶解（不要煮沸）。冷卻。' },
                duration: 10
            },
            {
                step: 3,
                title: { en: 'Combine ingredients', zh: '合併配料' },
                description: { en: 'Stir in cream and ground pistachios.', zh: '加入奶油和研磨的開心果攪拌。' },
                duration: 3
            },
            {
                step: 4,
                title: { en: 'Freeze and stir', zh: '冷凍和攪拌' },
                description: { en: 'Pour into container, freeze 30 mins, stir vigorously. Repeat stirring every 30 mins for 3 hours.', zh: '倒入容器中，冷凍30分鐘，大力攪拌。每30分鐘重複攪拌一次，持續3小時。' },
                duration: 180
            }
        ]
    },
    'mango': {
        name: {
            en: 'Mango Gelato',
            zh: '芒果義式冰淇淋'
        },
        description: {
            en: 'Tropical mango with bright citrus notes',
            zh: '熱帶芒果配明亮柑橘香調'
        },
        difficulty: 'beginner',
        prepTime: 15,
        freezeTime: 180,
        servings: 6,
        ingredients: [
            { name: { en: 'Ripe mango puree', zh: '成熟芒果泥' }, amount: 2, unit: { en: 'cups (2 medium mangoes)', zh: '杯（2個中等芒果）' } },
            { name: { en: 'Whole milk', zh: '全脂牛奶' }, amount: 2, unit: { en: 'cups', zh: '杯' } },
            { name: { en: 'Heavy cream', zh: '淡奶油' }, amount: 1, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Sugar', zh: '糖' }, amount: 0.75, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Lime zest', zh: '青檸皮屑' }, amount: 1, unit: { en: 'tsp', zh: '茶匙' } }
        ],
        instructions: [
            {
                step: 1,
                title: { en: 'Mix dairy base', zh: '混合乳製品基底' },
                description: { en: 'In a bowl, mix milk, cream, sugar until sugar dissolves.', zh: '在碗中將牛奶、奶油、糖混合至糖完全溶解。' },
                duration: 5
            },
            {
                step: 2,
                title: { en: 'Add mango and lime', zh: '加入芒果和青檸' },
                description: { en: 'Stir in mango puree and lime zest.', zh: '加入芒果泥和青檸皮屑攪拌。' },
                duration: 3
            },
            {
                step: 3,
                title: { en: 'Freeze and stir', zh: '冷凍和攪拌' },
                description: { en: 'Freeze in shallow container for 30 mins. Stir vigorously. Repeat stirring every 30 mins for 3 hours till creamy.', zh: '在淺容器中冷凍30分鐘。大力攪拌。每30分鐘重複攪拌一次，持續3小時直至呈奶油狀。' },
                duration: 180
            }
        ]
    },
    'tofu-vegan': {
        name: {
            en: 'Tofu Gelato (Vegan)',
            zh: '豆腐義式冰淇淋（純素）'
        },
        description: {
            en: 'Creamy vegan gelato made with silken tofu and coconut milk',
            zh: '用嫩豆腐和椰奶製作的奶油狀純素義式冰淇淋'
        },
        difficulty: 'beginner',
        prepTime: 10,
        freezeTime: 180,
        servings: 6,
        ingredients: [
            { name: { en: 'Silken tofu', zh: '嫩豆腐' }, amount: 1, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Canned full-fat coconut milk', zh: '罐裝全脂椰奶' }, amount: 1.5, unit: { en: 'cups', zh: '杯' } },
            { name: { en: 'Maple syrup or agave', zh: '楓糖漿或龍舌蘭糖漿' }, amount: 0.5, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Vanilla extract', zh: '香草精' }, amount: 1, unit: { en: 'tsp', zh: '茶匙' } }
        ],
        instructions: [
            {
                step: 1,
                title: { en: 'Blend ingredients', zh: '攪拌配料' },
                description: { en: 'Blend silken tofu, coconut milk, maple syrup, and vanilla until smooth.', zh: '將嫩豆腐、椰奶、楓糖漿和香草精攪拌至光滑。' },
                duration: 5
            },
            {
                step: 2,
                title: { en: 'Initial freeze', zh: '初次冷凍' },
                description: { en: 'Pour into shallow container. Freeze 30 minutes, stir vigorously with fork.', zh: '倒入淺容器中。冷凍30分鐘，用叉子大力攪拌。' },
                duration: 30
            },
            {
                step: 3,
                title: { en: 'Continue freezing', zh: '繼續冷凍' },
                description: { en: 'Repeat stirring every 30 minutes for 3 hours until ready.', zh: '每30分鐘重複攪拌一次，持續3小時直至完成。' },
                duration: 180
            }
        ]
    },
    'vanilla-bean': {
        name: {
            en: 'Vanilla Bean Gelato',
            zh: '香草豆義式冰淇淋'
        },
        description: {
            en: 'Classic vanilla with real vanilla bean specks',
            zh: '經典香草配真正香草豆斑點'
        },
        difficulty: 'beginner',
        prepTime: 15,
        freezeTime: 180,
        servings: 6,
        ingredients: [
            { name: { en: 'Whole milk', zh: '全脂牛奶' }, amount: 2.5, unit: { en: 'cups', zh: '杯' } },
            { name: { en: 'Heavy cream', zh: '淡奶油' }, amount: 1, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Sugar', zh: '糖' }, amount: 0.75, unit: { en: 'cup', zh: '杯' } },
            { name: { en: 'Vanilla bean (split & scraped) or vanilla extract', zh: '香草豆（切開刮取）或香草精' }, amount: 1, unit: { en: 'bean or 2 tsp extract', zh: '根或2茶匙香草精' } }
        ],
        instructions: [
            {
                step: 1,
                title: { en: 'Heat milk mixture', zh: '加熱牛奶混合物' },
                description: { en: 'Heat milk, cream, sugar, and vanilla bean seeds + pod in saucepan until sugar dissolves (don\'t boil), then cool.', zh: '在平底鍋中加熱牛奶、奶油、糖和香草豆籽+豆莢至糖完全溶解（不要煮沸），然後冷卻。' },
                duration: 10
            },
            {
                step: 2,
                title: { en: 'Remove vanilla pod', zh: '取出香草豆莢' },
                description: { en: 'Remove vanilla pod if used.', zh: '如使用香草豆莢則取出。' },
                duration: 1
            },
            {
                step: 3,
                title: { en: 'Freeze and stir', zh: '冷凍和攪拌' },
                description: { en: 'Freeze in shallow container 30 minutes. Stir vigorously. Repeat stirring every 30 minutes for 3 hours.', zh: '在淺容器中冷凍30分鐘。大力攪拌。每30分鐘重複攪拌一次，持續3小時。' },
                duration: 180
            }
        ]
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RECIPES;
}