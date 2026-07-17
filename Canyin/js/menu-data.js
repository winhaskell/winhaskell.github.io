// Menu Data for 绝摆哥炒饭
const menuData = [
    // 招牌系列
    {
        id: 1,
        name: "红烧肉炒饭",
        category: "signature",
        price: 28,
        description: "米饭、红烧五花肉、鸡蛋、青葱、胡萝卜、洋葱、秘制酱汁",
        image: "img/hsrcf.jpg",
        badge: "signature",
        hot: true
    },
    {
        id: 2,
        name: "酸菜肥肠炒饭",
        category: "signature",
        price: 32,
        description: "酸菜、卤肥肠、米饭、鸡蛋、葱花",
        image: "img/scfccf.jpg",
        badge: "signature",
        hot: true
    },
    {
        id: 3,
        name: "招牌六鲜炒饭",
        category: "signature",
        price: 32,
        description: "甄选虾仁、鸡蛋、火腿、青豆、玉米、香菇",
        image: "img/liuxianchfan.jpg",
        badge: "signature"
    },

    // 海鲜系列
    {
        id: 4,
        name: "鸭血粉丝汤",
        category: "seafood",
        price: 22,
        description: "鸭血、粉丝、鸭杂、香菜，葱花",
        image: "img/yxfst.jpg",
        badge: "hot"
    },
    {
        id: 5,
        name: "青菜肉圆汤",
        category: "seafood",
        price: 26,
        description: "新鲜青菜、手工肉圆、葱花、姜丝、食盐",
        image: "img/qcryt.jpg"
        
    },
    {
        id: 6,
        name: "冬瓜排骨汤",
        category: "seafood",
        price: 28,
        description: "冬瓜，排骨，香油，葱，姜，花椒",
        image: "img/dgpgt.jpg",
        badge: "new"
        
    },
    {
        id: 7,
        name: "皮肚三鲜汤",
        category: "seafood",
        price: 20,
        description: "皮肚、木耳、咸肉、菇、笋片、毛豆米",
        image: "img/pidusxt.jpg"
    },

    // 肉类系列
    {
        id: 8,
        name: "酱爆鱿鱼炒面/河粉",
        category: "meat",
        price: 32,
        description: "鱿鱼、青彩椒、红彩椒、鸡蛋、面条、葱",
        image: "img/youyuchaom.jpg",
        hot: true
    },
    {
        id: 9,
        name: "招牌六鲜炒面/河粉",
        category: "meat",
        price: 32,
        description: "虾仁、香肠、鸡蛋、面条、时蔬",
        image: "img/liuxianmian.jpg"
    },
    {
        id: 10,
        name: "酸菜肥肠炒面/河粉",
        category: "meat",
        price: 30,
        description: "卤肥肠、酸菜、面条、鸡蛋、蒜末、葱花",
        image: "img/scfccm.jpg"
    },
    {
        id: 11,
        name: "五彩虾仁炒面/河粉",
        category: "meat",
        price: 28,
        description: "鲜嫩虾仁、搭配胡萝卜、鸡蛋、面条、青豆、彩椒",
        image: "img/wucxrcm.jpg",
        badge: "new"
    },
    {
        id: 12,
        name: "香菇青菜炒面/河粉",
        category: "meat",
        price: 18,
        description: "面条、鸡蛋、香菇、小青菜、香葱",
        image: "img/xianggusumian.jpg"
    },

    // 素菜系列-饮料啤酒
    {
        id: 13,
        name: "招牌肥肠面",
        category: "vegetable",
        price: 30,
        description: "卤肥肠、面条、青菜、葱花、香菜、高汤",
        image: "img/zpfcm.jpg"
    },
    {
        id: 14,
        name: "金陵皮肚面",
        category: "vegetable",
        price: 28,
        description: "皮肚、猪肝、肉丝、西红柿、青菜、高汤、葱花",
        image: "img/pidum.jpg",
        badge: "new"
    },
    {
        id: 15,
        name: "青椒肉丝盖浇饭",
        category: "vegetable",
        price: 23,
        description: "肉丝、青椒、洋葱、蒜末、优质米饭",
        image: "img/qjrsgjf.jpg",
        hot: true
    },
    {
        id: 16,
        name: "北冰洋汽水/可乐/雪碧/啤酒",
        category: "vegetable",
        price: 4,
        description: "一口爽到北冰洋、透心凉、渴释放",
        image: "img/bbykele.jpg"
    }
];

// Export menu data
if (typeof module !== 'undefined' && module.exports) {
    module.exports = menuData;
}
