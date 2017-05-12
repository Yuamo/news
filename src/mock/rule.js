import './random' // 引入

const rule = {
  data: {
    name: '@cname',
    'age|1-100': 100,
    email: '@email'
  },
  getHosList: {
    hos_ID: '@guid',
    'age|1-100': 100,
    email: '@email'
  },
  // 获取科室信息
  getOfficeInfos: {
    'array|1-3': [
      {
        deptAttr: '@cname',
        deptHisCode: '@guid',
        deptId: '@id',
        deptIntro: '介绍介绍介绍',
        deptName: '@dep',
        deptPinyCode: '@title(5)',
        deptPosi: '@ctitle(5)',
        deptTelep: '@mobile',
        deptType: '@ctitle(5)',
        hosAreaId: '@guid',
        hosDisAreaId: '@guid',
        hosId: '@guid',
        remarks: '@cparagraph()',
        deptState: '启用',
        hosName: '@hos'
      }
    ]
  },
  // 获取科室信息
  dd: {},
  // 医院信息
  getHospital: {
    'posList|1-10': [
      {
        posName: '@hos',
        grade: '@hosgrade',
        url: 'hospital/history@3x.png'
      }
    ]
  }
}

export default rule
