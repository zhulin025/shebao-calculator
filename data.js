export const POLICY_DATE='2026-10-12';
export const sources={retirement:['渐进式延迟法定退休年龄与最低缴费年限','https://www.hmo.gov.cn/2026/08/21/ARTI6kpLUW6qilBUClmQ6bio260821.shtml'],flexible:['实施弹性退休制度暂行办法','https://www.mohrss.gov.cn/wap/zc/zcwj/202501/t20250101_533701.html'],formula:['基本养老金计发公式（济南人社）','https://jnhrss.jinan.gov.cn/col126021/art/2025/art_126021_4812880.html'],divisor:['个人账户养老金计发月数表','https://fgk.chinatax.gov.cn/zcfgk/c102440/c5194509/content.html'],annuity:['机关事业单位职业年金办法','https://www.mof.gov.cn/zhengwuxinxi/zhengcefabu/201504/t20150406_1213145.htm'],rates:['降低社会保险费率综合方案','https://www.mohrss.gov.cn/yanglaobxs/YLBXSzhengcewenjian/201904/t20190408_314038.html']};
const roundup='https://zwfw.gansu.gov.cn/lingtai/zczx/zxfb/art/2026/art_ba28f1c9e78e46e0bd743ef901b3baeb.html';
const rows=[
['beijing','北京','直辖市',7270,36348,2026,'https://rsj.beijing.gov.cn/xxgk/2024zcjd/202608/t20260821_4831476.html','2026年7月起'],
['shanghai','上海','直辖市',7546,37731,2026,'https://shanghai.chinatax.gov.cn/bsfw/nszx/hdfk/202609/t481435.html','2026年7月起'],
['tianjin','天津','直辖市',5180,25902,2026,'https://tianjin.chinatax.gov.cn/11200000000/0300/030004/03000419/20260824171546537.shtml','2026年9月起'],
['chongqing','重庆','直辖市',4553,22765,2026,'https://m12333.cn/policy/srrsp.html','2026年度（转载参考）'],
['shijiazhuang','石家庄','河北',4076,20382,2026,roundup,'2026年度'],
['taiyuan','太原','山西',4244,21219,2026,'https://shanxi.chinatax.gov.cn/son/detail/sz-11406-522-1824057','2026年度'],
['hohhot','呼和浩特','内蒙古',5058,25290,2026,'https://neimenggu.chinatax.gov.cn/xxgk/tzgg/202608/t20260831_897017.html','2026年度'],
['shenyang','沈阳','辽宁',4533,22665,2026,'https://liaoning.chinatax.gov.cn/art/2026/9/4/art_99_174883.html','2026年度'],
['changchun','长春','吉林',4393.2,21966,2025,'https://xxgk.jl.gov.cn/zcbm/fgw_97992/xxgkmlqy/202509/t20250922_9324837.html','历史标准：2025年7月—2026年6月'],
['harbin','哈尔滨','黑龙江',null,null,null,null,'待核验'],
['nanjing','南京','江苏',4952,24762,2025,'https://gtm-cn-2r42yzjvn0s.jiangsu.chinatax.gov.cn/art/2026/1/9/art_8274_1695385.html','2026年初暂行，待更新'],
['hangzhou','杭州','浙江',4986,25299,2025,'https://zhejiang.chinatax.gov.cn/art/2025/12/11/art_13314_645797.html','2025历史参考，待更新'],
['hefei','合肥','安徽',4354,21772,2026,'https://rsj.huaibei.gov.cn/gzdt/gfxwj/58052711.html','2026年1月起'],
['fuzhou','福州','福建',4579,22893,2026,'https://rst.fj.gov.cn/zw/ztzl/zxzt/sbhm/zxsl/zcfg/202610/t20261008_7221778.htm','2026年1月起'],
['nanchang','南昌','江西',null,null,null,null,'待核验'],
['jinan','济南','山东',4573,22863,2026,'https://jnhrss.jinan.gov.cn/col126019/art/2025/art_126019_4815063.html','2026年度'],
['zhengzhou','郑州','河南',3831,19155,2025,'https://www.ayx.gov.cn/2026/02-04/3620463.html','历史标准：2025年7月—2026年6月'],
['wuhan','武汉','湖北',4552,22761,2026,'https://rst.hubei.gov.cn/zfxxgk/zc/qtzdgkwj/202610/t20261008_6027858.shtml','2026社保年度'],
['changsha','长沙','湖南',4106,20529,2026,'https://rst.hunan.gov.cn/rst/xxgk/zcfg/zcjd/202608/t20260822_34049203.html','2026年度'],
['guangzhou','广州','广东',5521,27603,2026,'https://guangdong.chinatax.gov.cn/gdsw/ssfggds/2026-10/08/content_b40dcb7bf605411fbb12e0f81281dc6b.shtml','企业2026年7月起；机关2026年1月起'],
['nanning','南宁','广西',null,null,null,null,'待核验'],
['haikou','海口','海南',null,null,null,null,'待核验'],
['chengdu','成都','四川',4699,23493,2026,roundup,'2026年度'],
['guiyang','贵阳','贵州',null,null,null,null,'待核验'],
['kunming','昆明','云南',4403,22017,2026,'https://www.yn.gov.cn/hdjl/msgq/202608/t20260829_330317.html','2026年度'],
['lhasa','拉萨','西藏',7172.4,35862,2026,roundup,'2026年度'],
['xian','西安','陕西',4737,23685,2026,'https://rsc.nwsuaf.edu.cn/tzgg2/253fc534e03d406fbbc6e77c552e54de.htm','2026年度（高校官方转述）'],
['lanzhou','兰州','甘肃',4526,22626,2026,'https://zwfw.gansu.gov.cn/zhuoni/zxgg/art/2026/art_aeb5c182550742a89010ff23bfb15696.html','2026年度'],
['xining','西宁','青海',null,null,null,null,'待核验'],
['yinchuan','银川','宁夏',null,null,null,null,'待核验'],
['urumqi','乌鲁木齐','新疆',5246,26231,2026,'https://rst.xinjiang.gov.cn/xjrst/c112734/202609/234e01d8b8b9404ca3c98c2cee384903.shtml','2026年度']
];
export const cities=rows.map(([id,name,province,min,max,year,url,period])=>({id,name,province,min,max,year,url,period,social:max?max/3:null,verified:!!url,medical:null,unemployment:null}));
Object.assign(cities.find(c=>c.id==='beijing'),{social:12116,medical:{personal:2,personalFixed:3,unit:9.8,flexFixed:593.68,min:7270,max:36348,complete:true,url:'https://zyk.bjhd.gov.cn/zwdt/tdzt/2018/csrlsb/cjwtcs/shbxdj/202510/t20251022_4790568.shtml',note:'职工医保含生育；灵活就业医保固定593.68元/月。'},unemployment:{personal:.5,unit:.5,flex:1},healthYears:{male:25,female:20,note:'需按当地实际缴费要求核定'}});
Object.assign(cities.find(c=>c.id==='shanghai'),{social:12577,medical:{personal:2,unit:9,flexRate:10,min:7546,max:37731,complete:true,url:'https://shanghai.chinatax.gov.cn/zzzb/zcwj/202603/t479836.html',note:'医保单位9%、灵活10%有效至2027年2月28日。'},unemployment:{personal:.5,unit:.5,flex:0}});
Object.assign(cities.find(c=>c.id==='chongqing'),{verified:false,note:'具体上下限依据通知转载，官方原文访问失败；待官方核对。'});
export async function loadExtras(){for(const file of ['city-extra.json','medical-extra.json','medical-additional.json','medical-north.json']){try{const res=await fetch('./'+file);if(!res.ok)continue;const data=await res.json();for(const update of (Array.isArray(data)?data:data.cities||[])){const city=cities.find(c=>c.id===update.id);if(city)Object.assign(city,update);}}catch{}}return cities;}
