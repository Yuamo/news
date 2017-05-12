import Mock from 'mockjs'

Mock.Random.extend({
    mobile: () => {
        let a = [3, 4, 5, 7, 8]
        return '1' +
            a[parseInt(Math.random() * 10) % 5] +
            parseInt(Math.random() * 1000000000)
    }
})
Mock.Random.extend({
    hos: () => {
        let hosList = ['西北妇幼', '陕西省人民医院', '交大二附院', '交通医院']
        let i = parseInt(Math.random() * 10) % hosList.length
        return hosList[i]
    }
})

Mock.Random.extend({
    dep: () => {
        let depList = ['内科', '外科', '儿科', '骨科']
        let i = parseInt(Math.random() * 10) % depList.length
        return depList[i]
    }
})

Mock.Random.extend({
    hosgrade: () => {
        let gradeList = ['三级甲等', '三级乙等', '三级丙等', '二级甲等', '二级乙等']
        let i = parseInt(Math.random() * 10) % gradeList.length
        return gradeList[i]
    }
})