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
        image: "img/scfccf.jpg",
        badge: "signature",
        hot: true
    },
    {
        id: 3,
        name: "招牌六鲜炒饭",
        category: "signature",
        price: 33,
        description: "甄选虾仁、鸡蛋、火腿、青豆、玉米与香菇，大火快炒，粒粒分明、鲜香浓郁",
        image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=500&q=80",
        badge: "signature"
    },

    // 海鲜系列
    {
        id: 4,
        name: "鸭血粉丝汤",
        category: "seafood",
        price: 22,
        description: "鸭血，粉丝，鸭杂，油豆腐，香菜，葱花",
        image: "img/yxfst.jpg",
        badge: "hot"
    },
    {
        id: 5,
        name: "青菜豆腐汤",
        category: "seafood",
        price: 16,
        description: "青菜，豆腐，食用油，盐",
        image: "img/qcdft.jpg"
        
    },
    {
        id: 6,
        name: "冬瓜排骨汤",
        category: "seafood",
        price: 28,
        description: "冬瓜，排骨，香油，葱，姜，花椒，食盐各适量",
        image: "img/dgpgt.jpg",
        badge: "new"
        
    },
    {
        id: 7,
        name: "皮肚三鲜汤",
        category: "seafood",
        price: 21,
        description: "皮肚，木耳，咸肉，菇，笋片，毛豆米",
        image: "img/pidusxt.jpg"
    },

    // 肉类系列
    {
        id: 8,
        name: "酱爆鱿鱼炒面",
        category: "meat",
        price: 32,
        description: "鱿鱼，青彩椒，红彩椒，葱，盐，油",
        image: "img/youyuchaom.jpg",
        hot: true
    },
    {
        id: 9,
        name: "六鲜炒面",
        category: "meat",
        price: 33,
        description: "面条配虾仁、香肠、鸡蛋、时蔬六鲜合炒，口味鲜美",
        image: "img/liuxianmian.jpg"
    },
    {
        id: 10,
        name: "酸菜肥肠炒面",
        category: "meat",
        price: 32,
        description: "酸菜、卤肥肠、面条、鸡蛋，配蒜末与葱花大火翻炒",
        image: "img/scfccm.jpg"
    },
    {
        id: 11,
        name: "狮子头炒面",
        category: "meat",
        price: 22,
        description: "狮子头、面条、鸡蛋，香葱，创意融合",
        image: "img/scfccm.jpg",
        badge: "new"
    },
    {
        id: 12,
        name: "香菇青菜炒面",
        category: "meat",
        price: 18,
        description: "面条，鸡蛋，香菇，小青菜，香葱",
        image: "img/xianggusumian.jpg"
    },

    // 素菜系列-饮料啤酒
    {
        id: 13,
        name: "雪碧可乐",
        category: "vegetable",
        price: 4,
        description: "透心凉，渴释放",
        image: "img/cola.jpg"
    },
    {
        id: 14,
        name: "啤酒",
        category: "vegetable",
        price: 28,
        description: "沁心啤酒，纯属生活",
        image: "img/beer_0.jpg",
        badge: "new"
    },
    {
        id: 15,
        name: "毛铺苦荞酒",
        category: "vegetable",
        price: 26,
        description: "荞韵流芳匠心酿，劲享品质毛铺香",
        image: "img/kuqiaojiu.jpg",
        hot: true
    },
    {
        id: 16,
        name: "北冰洋汽水",
        category: "vegetable",
        price: 3,
        description: "一口爽到北冰洋",
        image: "img/bbyqs.jpg"
    }
];

// Export menu data
if (typeof module !== 'undefined' && module.exports) {
    module.exports = menuData;
}
