// Menu Data for 绝摆哥炒饭
const menuData = [
    // 招牌系列
    {
        id: 1,
        name: "五彩虾仁炒饭",
        category: "signature",
        price: 30,
        description: "招牌必点！选用优质大米，搭配新鲜鸡蛋，粒粒分明，金黄诱人",
        image: "img/bg-1.png",
        badge: "signature",
        hot: true
    },
    {
        id: 2,
        name: "酸菜肥肠炒饭",
        category: "signature",
        price: 32,
        description: "酸菜、卤肥肠、米饭、鸡蛋，配蒜末与葱花大火翻炒，咸香微酸",
        image: "img/bg-1.png",
        badge: "signature",
        hot: true
    },
    {
        id: 3,
        name: "招牌六鲜炒饭",
        category: "signature",
        price: 33,
        description: "虾仁、鱿鱼、蟹肉棒三鲜组合，鲜香四溢，回味无穷",
        image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=500&q=80",
        badge: "signature"
    },

    // 海鲜系列
    {
        id: 4,
        name: "鸭血粉丝汤",
        category: "seafood",
        price: 45,
        description: "鸭血，粉丝，鸭杂，油豆腐泡，鸭汤，香菜，葱花，榨菜",
        image: "img/yxfst.jpg",
        badge: "hot"
    },
    {
        id: 5,
        name: "虾仁蛋炒饭",
        category: "seafood",
        price: 38,
        description: "Q弹虾仁配嫩滑鸡蛋，清淡鲜香，营养丰富",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&q=80"
    },
    {
        id: 6,
        name: "鱿鱼墨鱼炒饭",
        category: "seafood",
        price: 42,
        description: "新鲜鱿鱼和墨鱼，口感劲道，海洋风味浓郁",
        image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=500&q=80",
        badge: "new"
    },
    {
        id: 7,
        name: "三文鱼炒饭",
        category: "seafood",
        price: 48,
        description: "进口三文鱼配特制酱油，营养美味，高端享受",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=500&q=80"
    },

    // 肉类系列
    {
        id: 8,
        name: "黑椒牛肉炒饭",
        category: "meat",
        price: 36,
        description: "精选牛里脊，搭配黑椒酱，肉质鲜嫩，香辣开胃",
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500&q=80",
        hot: true
    },
    {
        id: 9,
        name: "叉烧炒饭",
        category: "meat",
        price: 33,
        description: "广式叉烧搭配炒饭，甜咸适中，经典粤式风味",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&q=80"
    },
    {
        id: 10,
        name: "腊肠炒饭",
        category: "meat",
        price: 30,
        description: "精选广式腊肠，油脂丰富，香气扑鼻，家的味道",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&q=80"
    },
    {
        id: 11,
        name: "培根芝士炒饭",
        category: "meat",
        price: 35,
        description: "西式培根配芝士，创意融合，奶香浓郁",
        image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=500&q=80",
        badge: "new"
    },
    {
        id: 12,
        name: "鸡肉菌菇炒饭",
        category: "meat",
        price: 32,
        description: "嫩滑鸡肉配香菇、平菇，营养搭配，清香可口",
        image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=500&q=80"
    },

    // 素菜系列
    {
        id: 13,
        name: "什锦蔬菜炒饭",
        category: "vegetable",
        price: 25,
        description: "多种时令蔬菜，色彩缤纷，清淡健康",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&q=80"
    },
    {
        id: 14,
        name: "菌菇素炒饭",
        category: "vegetable",
        price: 28,
        description: "香菇、平菇、金针菇三菇组合，鲜美营养",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&q=80",
        badge: "new"
    },
    {
        id: 15,
        name: "番茄鸡蛋炒饭",
        category: "vegetable",
        price: 26,
        description: "经典家常组合，酸甜可口，老少皆宜",
        image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=500&q=80",
        hot: true
    },
    {
        id: 16,
        name: "玉米青豆炒饭",
        category: "vegetable",
        price: 24,
        description: "甜玉米配青豆，清新爽口，适合儿童",
        image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=500&q=80"
    }
];

// Export menu data
if (typeof module !== 'undefined' && module.exports) {
    module.exports = menuData;
}
