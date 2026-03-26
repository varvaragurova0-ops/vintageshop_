// ==================== БАЗА ДАННЫХ ТОВАРОВ (31 ТОВАР) ====================
const productsData = [
    // ОДЕЖДА - Джинсы
    { id: 1, name: "Juicy Couture джинсы", price: 45990, category: "Одежда", subcategory: "Джинсы", image: "Товары/джинсы JC.jpg", rating: 4.8, isNew: false, description: "Аутентичные винтажные джинсы Juicy Couture 2000-х. Культовая модель с заниженной талией и характерным логотипом на заднем кармане.", specs: ["Тип джинсов: Клеш", "Тип посадки: Низкая", "Материал: Хлопок 90%", "Цвет: Синий"], hasSize: true, sizeType: "clothes" },
    { id: 2, name: "CHANEL джинсы", price: 45990, category: "Одежда", subcategory: "Джинсы", image: "Товары/джинсы 2.jpg", rating: 4.9, isNew: false, description: "Аутентичные винтажные джинсы CHANEL 2000-х. Культовая модель с заниженной талией.", specs: ["Тип джинсов: Прямые", "Тип посадки: Низкая", "Материал: Хлопок 90%", "Цвет: Синий"], hasSize: true, sizeType: "clothes" },
    
    // ОДЕЖДА - Топы
    { id: 3, name: "Топ DIOR", price: 9000, category: "Одежда", subcategory: "Топы", image: "Товары/футболка 1.jpg", rating: 4.7, isNew: false, description: "Облегающий топ с логотипом DIOR, выложенным стразами.", specs: ["Тип: Топ-футболка", "Материал: Хлопок", "Цвет: Розовый"], hasSize: true, sizeType: "clothes" },
    { id: 4, name: "Топ PlayBoy", price: 2990, category: "Одежда", subcategory: "Топы", image: "Товары/топ 2.jpg", rating: 4.6, isNew: false, description: "Топ с крупным принтом Playboy, обрамленным стразами.", specs: ["Тип: Топ-футболка", "Материал: Хлопок", "Цвет: Белый"], hasSize: true, sizeType: "clothes" },
    { id: 5, name: "Топ Rottweiler", price: 2500, category: "Одежда", subcategory: "Топы", image: "Товары/футболка 2.jpg", rating: 4.5, isNew: false, description: "Дерзкий топ с принтом Rottweiler.", specs: ["Тип: Топ-футболка", "Материал: Хлопок", "Цвет: Горчичный"], hasSize: true, sizeType: "clothes" },
    
    // ОДЕЖДА - Худи
    { id: 6, name: "Зип-Худи PlayBoy", price: 12000, category: "Одежда", subcategory: "Худи", image: "Товары/худи 1.jpg", rating: 4.8, isNew: true, description: "Стильное худи от Playboy с фирменной символикой.", specs: ["Тип: Зип-Худи", "Материал: Хлопок", "Цвет: Розовый"], hasSize: true, sizeType: "clothes" },
    { id: 7, name: "Зип-Худи Ed Hardy", price: 15000, category: "Одежда", subcategory: "Худи", image: "Товары/худи 2.jpg", rating: 4.9, isNew: true, description: "Выразительное худи с принтами в стиле тату-арт.", specs: ["Тип: Зип-Худи", "Материал: Хлопок", "Цвет: Розовый"], hasSize: true, sizeType: "clothes" },
    
    // КОСМЕТИКА - Декоративная
    { id: 8, name: "Брелок-тени для век BRATZ", price: 3000, category: "Косметика", subcategory: "Декоративная косметика", image: "Товары/декоративная.jpg", rating: 4.6, isNew: false, description: "Тени для век в виде брелка с персонажем Хлоя.", specs: ["Тип: Декоративная косметика", "Цвет: Silver Stardust"], hasSize: false },
    { id: 9, name: "Набор масел для губ BRATZ", price: 8000, category: "Косметика", subcategory: "Декоративная косметика", image: "Товары/декоративная 2.jpg", rating: 4.9, isNew: true, description: "Набор из 4 масел для губ по персонажам Bratz.", specs: ["Штук в наборе: 4", "Цвета: Фуксия, Пыльная роза, Стекло, Диско шар"], hasSize: false },
    
    // КОСМЕТИКА - Парфюмерия
    { id: 10, name: "Jean Paul Gaultier Classique Betty Boop", price: 20000, category: "Косметика", subcategory: "Парфюмерия", image: "Товары/духи.jpg", rating: 4.9, isNew: true, description: "Лимитированная туалетная вода с изображением Betty Boop.", specs: ["Группа: Восточно-цветочные", "Объём: 100 мл"], hasSize: false },
    { id: 11, name: "Juicy Couture Viva La Juicy", price: 10000, category: "Косметика", subcategory: "Парфюмерия", image: "Товары/духи 2.jpg", rating: 4.8, isNew: false, description: "Яркий и запоминающийся аромат.", specs: ["Группа: Сладкие", "Объём: 100 мл"], hasSize: false },
    
    // КОСМЕТИКА - Уходовая
    { id: 12, name: "Набор лосьонов Betty Boop", price: 10000, category: "Косметика", subcategory: "Уходовая косметика", image: "Товары/уход 2.jpg", rating: 4.7, isNew: false, description: "Набор из 3 парфюмированных лосьонов для тела.", specs: ["Штук в наборе: 3", "Объём: 60 мл"], hasSize: false },
    { id: 13, name: "Набор Juicy Couture", price: 5000, category: "Косметика", subcategory: "Уходовая косметика", image: "Товары/уход.jpg", rating: 4.6, isNew: false, description: "Набор уходовых продуктов для расслабления.", specs: ["Штук в наборе: 3", "Объём: 60 мл"], hasSize: false },
    
    // КОЛЛЕКЦИОНИРОВАНИЕ
    { id: 14, name: "Кукла BRATZ SWEET HEART", price: 10000, category: "Коллекционирование", subcategory: "Фигурки и Куклы", image: "Товары/кукла.jpg", rating: 4.8, isNew: false, description: "Коллекционная кукла Bratz Sweet Heart.", specs: ["Материал: Пластик", "Цвет: Розовый"], hasSize: false },
    { id: 15, name: "Набор Littlest Pet Shop", price: 5000, category: "Коллекционирование", subcategory: "Фигурки и Куклы", image: "Товары/фигурка.jpg", rating: 4.6, isNew: false, description: "Лимитированная серия «Раскрась своего питомца».", specs: ["Материал: Пластик", "Цвет: Розовый"], hasSize: false },
    { id: 16, name: "Мишка Ralph Lauren", price: 6000, category: "Коллекционирование", subcategory: "Мягкие игрушки", image: "Товары/игрушка.jpg", rating: 4.9, isNew: true, description: "Редкий плюшевый мишка в фирменной коробке.", specs: ["Материал: Плюш", "Цвет: Розовый"], hasSize: false },
    
    // ОБУВЬ
    { id: 17, name: "Кеды Ed Hardy", price: 25000, category: "Обувь", subcategory: "Кроссовки и кеды", image: "Товары/кеды.jpg", rating: 4.8, isNew: false, description: "Лимитированные кеды с ярким дизайном.", specs: ["Тип: Кеды", "Цвет: Розовый"], hasSize: true, sizeType: "shoes" },
    { id: 18, name: "ADIDAS JEREMY SCOTT", price: 35000, category: "Обувь", subcategory: "Кроссовки и кеды", image: "Товары/кроссовки.jpg", rating: 4.9, isNew: true, description: "Культовая модель с объемными крыльями.", specs: ["Тип: Кроссовки", "Цвет: Перламутрово-розовый"], hasSize: true, sizeType: "shoes" },
    { id: 19, name: "Мюли Christian Dior", price: 29900, category: "Обувь", subcategory: "Туфли", image: "Товары/туфли 1.jpg", rating: 4.9, isNew: true, description: "Стильные мюли с прозрачной платформой.", specs: ["Тип: Мюли", "Цвет: Розовый"], hasSize: true, sizeType: "shoes" },
    
    // СУМКИ
    { id: 20, name: "Сумка Betty Boop", price: 15000, category: "Сумки", subcategory: "Сумки и Косметички", image: "Товары/сумка 1.jpg", rating: 4.7, isNew: false, description: "Яркая сумка с изображением Betty Boop.", specs: ["Тип: Хобо", "Материал: Полиэстер", "Цвет: Розовый"], hasSize: false },
    { id: 21, name: "LV x Takashi Murakami", price: 80000, category: "Сумки", subcategory: "Сумки и Косметички", image: "Товары/сумка 2.jpg", rating: 5.0, isNew: true, description: "Культовая сумка Speedy 30 из коллаборации 2003 года.", specs: ["Тип: Саквояж", "Материал: Monogram Multicolore", "Цвет: Белый"], hasSize: false },
    { id: 22, name: "Косметичка A Bathing Ape", price: 6000, category: "Сумки", subcategory: "Сумки и Косметички", image: "Товары/косметичка 1.jpg", rating: 4.5, isNew: false, description: "Косметичка с фирменным камуфляжным принтом BAPE.", specs: ["Материал: Текстиль", "Цвет: Белый, розовый"], hasSize: false },
    { id: 23, name: "Набор косметичек Ed Hardy", price: 5000, category: "Сумки", subcategory: "Сумки и Косметички", image: "Товары/косметичка 2.jpg", rating: 4.7, isNew: false, description: "Набор из двух стильных косметичек.", specs: ["Штук в наборе: 2", "Цвет: Черный, розовый"], hasSize: false },
    { id: 24, name: "Брелок PlayBoy", price: 2499, category: "Сумки", subcategory: "Обвесы и брелоки", image: "Товары/брелок 1.jpg", rating: 4.7, isNew: false, description: "Винтажный брелок в форме сердца с логотипом Playboy.", specs: ["Материал: Металл", "Цвет: Розовый"], hasSize: false },
    
    // УКРАШЕНИЯ
    { id: 25, name: "DIOR гавайский браслет", price: 15900, category: "Украшения", subcategory: "Кольца и браслеты", image: "Товары/браслет 2.jpg", rating: 4.9, isNew: true, description: "Винтажный браслет Dior в гавайском стиле.", specs: ["Материал: Серебро", "Цвет: Розовый"], hasSize: true, sizeType: "bracelet" },
    { id: 26, name: "Набор колец Vivienne Westwood", price: 17900, category: "Украшения", subcategory: "Кольца и браслеты", image: "Товары/кольцо 2.jpg", rating: 5.0, isNew: true, description: "Комплект колец с мотивом Orb.", specs: ["Материал: Серебро", "Штук в наборе: 6"], hasSize: true, sizeType: "ring" },
    { id: 27, name: "Подвеска Vivienne Westwood", price: 15000, category: "Украшения", subcategory: "Ожерелья и подвески", image: "Товары/ожерелье 1.jpg", rating: 4.8, isNew: false, description: "Подвеска в виде клубники с логотипом.", specs: ["Материал: Серебро", "Цвет: Красный"], hasSize: false },
    { id: 28, name: "Подвеска Ed Hardy", price: 8000, category: "Украшения", subcategory: "Ожерелья и подвески", image: "Товары/подвеска.jpg", rating: 4.7, isNew: false, description: "Кулон в стиле тату-арт.", specs: ["Материал: Серебро", "Цвет: Розовый"], hasSize: false },
    { id: 29, name: "Очки DIOR", price: 25000, category: "Украшения", subcategory: "Очки", image: "Товары/очки 1.jpg", rating: 4.8, isNew: false, description: "Солнцезащитные очки Dior с логотипом.", specs: ["Материал: Пластик", "Цвет: Розовый"], hasSize: false },
    { id: 30, name: "Очки DIOR", price: 25000, category: "Украшения", subcategory: "Очки", image: "Товары/очки 2.jpg", rating: 4.8, isNew: false, description: "Винтажные солнцезащитные очки Dior.", specs: ["Материал: Пластик", "Цвет: Белый"], hasSize: false },
    { id: 31, name: "Часы Juicy Couture", price: 20000, category: "Украшения", subcategory: "Часы", image: "Товары/часы.jpg", rating: 4.9, isNew: true, description: "Винтажные часы с циферблатом в форме сердца.", specs: ["Материал: Серебро", "Цвет: Золотой"], hasSize: true, sizeType: "bracelet" }
];

// Сохраняем товары в localStorage
localStorage.setItem('products', JSON.stringify(productsData));
console.log('Товары сохранены в localStorage. Количество:', productsData.length);