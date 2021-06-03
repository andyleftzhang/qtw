'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "4b6db237b3514a88107a422469adfb0f",
"index.html": "632460aa67c95fd571f114a0c38dc766",
"/": "632460aa67c95fd571f114a0c38dc766",
"main.dart.js": "b0551bc405249811d49e6788938b8ec7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "15f73b7e8a8209c2206210b3ac8dea1b",
"assets/images/2.0x/icon_fanhui_hei.png": "71bd0e45ed2a21238a38eaabf1e4684f",
"assets/images/2.0x/icon_chongmingming.png": "c3a5ccec05f21714c19c61052a4d08aa",
"assets/images/2.0x/icon_touxiang_nv.png": "842180bc4bbd18ff68803a3e589eac71",
"assets/images/2.0x/icon_shanchu_jinyong.png": "bd3741afa75f31b7d46936edbf2cd0fb",
"assets/images/2.0x/icon_youjian_jinyong.png": "c7bc1effc5c2dfb6d729230854038c58",
"assets/images/2.0x/icon_yijianshanchu.png": "13a8c7fc7d877f0efaf4ec780c5944e0",
"assets/images/2.0x/icon_kehuguanli_xuanzhong.png": "f7c7fa515a5996da260de2df836ba13a",
"assets/images/2.0x/icon_duoxuan_xuanzhong.png": "99c56eff6d47e2457abfbb93b0f0263d",
"assets/images/2.0x/icon_add_user.png": "39e8e040f99f91e6b132b12c65c5cf5b",
"assets/images/2.0x/icon_danxuan_xuanzhong.png": "3e14b62f76891a0d112c8e7b0ffa3e5b",
"assets/images/2.0x/icon_tiaozhuan.png": "29d122bfafdd7e7a42a0b5f9b9d91d29",
"assets/images/2.0x/icon_dianhua.png": "60b2d8a40314f74049bc700b96ea834a",
"assets/images/2.0x/icon_tiaozhuan_light.png": "65bd2b28833f33f02f49c3ef1ebae669",
"assets/images/2.0x/icon_fanhui_bai.png": "f1be90d953af60cc41315fc0fc49bb93",
"assets/images/2.0x/icon_sousuowujieguo_home.png": "840cdaaa2629f0bd6029f15b6c1a0502",
"assets/images/2.0x/icon_chongmingming_jinyong.png": "c74e7fb32ac77e9f4d985019e309e2f3",
"assets/images/2.0x/icon_duoxuan_weixuanzhong.png": "00e9636cf8bf51180ee6444c5af3a03c",
"assets/images/2.0x/icon_shaixuan.png": "84d9186f5b99b8a1185ac50151d28b02",
"assets/images/2.0x/icon_qingchu.png": "eb965e0d34a91b246b555a654b36495e",
"assets/images/2.0x/icon_shijian.png": "9114c5ca87c742ea070e511e594b6cfa",
"assets/images/2.0x/icon_youjian.png": "51252f9aeae74026637e906101bac13f",
"assets/images/2.0x/icon_touxiang_nan.png": "aaa42a0afd8c58ce111f4a0833a00bd1",
"assets/images/2.0x/icon_yinsi_bukeshi.png": "4198e5d79e1d87fede9418bec6a018c3",
"assets/images/2.0x/icon_xiazai_hei.png": "d9b633b004b13174e28fbe7da0391422",
"assets/images/2.0x/icon_selected_multi.png": "e421b7ea66ecda22d37f8fee0aa02603",
"assets/images/2.0x/icon_shanchu_hei.png": "269f42765200590cd40fcccc2dba1ac8",
"assets/images/2.0x/icon_guanbi.png": "07e8df019c7aec4d5ba37c0b73ef8e0d",
"assets/images/2.0x/icon_diyakuaidai_weixuanzhong.png": "7a837615fbb12ed8c36ee8bf31c0d0e2",
"assets/images/2.0x/icon_sousuowujieguo.png": "2c4e2780f1b5522ac5cb17b5c29c3504",
"assets/images/2.0x/icon_tianjia_lan.png": "dedb580b568ac7021eb6cafb82e720a4",
"assets/images/2.0x/icon_dizhi.png": "781abfe0fa2e008eca2344b9fb5adce0",
"assets/images/2.0x/icon_zhankai.png": "d6e14b28d1d51dc03c2758e490d5faec",
"assets/images/2.0x/icon_duoxuan_xuanzhong_yuan.png": "f38d4f8c2f09d81904d9e91d9e77d025",
"assets/images/2.0x/icon_duoxuan_weixuanzhong_yuan.png": "036d1e97a44e0f7cbbd46f113b0590fe",
"assets/images/2.0x/icon_xiazai_bai.png": "fa9bda9bb7e48719d72a4a1411dca22d",
"assets/images/2.0x/icon_danxuan_weixuanzhong.png": "53f3bd2974939f9ebf01f1d9aee5202e",
"assets/images/2.0x/icon_sousuoye_sousuo.png": "fc58170c8ee45bf8fc48a10b24f2e2e4",
"assets/images/2.0x/icon_tianjiatupian.png": "c740266480c6473085b0e7ec66cc81ad",
"assets/images/2.0x/icon_shouqi.png": "6a272580b7686ad2e0c9ce8e27381984",
"assets/images/2.0x/icon_guanbi_light.png": "4d1dddf0cbe6b6729d2e0a3e44909991",
"assets/images/2.0x/icon_xiazai_jinyong.png": "38a76e9f9947eff5cfff564111df682a",
"assets/images/2.0x/icon_shanchu_bai.png": "14b7d508f700eea38e0181c259494cee",
"assets/images/2.0x/icon_cailiaobao.png": "cdc74f3e48b5e642afce65e7cb195562",
"assets/images/2.0x/icon_sousuo.png": "38fdbf2032f5ac66a5a338529b8d16a2",
"assets/images/2.0x/icon_xinzengcailiaobao.png": "db196ce2eda06f1822d4812e4414063e",
"assets/images/2.0x/icon_gerenzhongxin.png": "5720508d2bc27c18022ae0684b2292ca",
"assets/images/2.0x/icon_bianji.png": "7249bb16239c4832ab9e083d527ffd6d",
"assets/images/2.0x/icon_selected_single.png": "3e14b62f76891a0d112c8e7b0ffa3e5b",
"assets/images/2.0x/icon_yinsi_keshi.png": "0be95f72e6031fe44bf3f047b53174d9",
"assets/images/3.0x/icon_fanhui_hei.png": "d6bb79658870eed9d6558100934aecaf",
"assets/images/3.0x/icon_chongmingming.png": "fb432aaef2462856b09cc7cd1a9b1b42",
"assets/images/3.0x/icon_touxiang_nv.png": "7fee01e060921c4712d39bbd1a4e8ba1",
"assets/images/3.0x/icon_shanchu_jinyong.png": "96595d2b75da3241f2e1d8b6d7b9e875",
"assets/images/3.0x/icon_youjian_jinyong.png": "d7df8370823b8673ce99c91e36bb63a8",
"assets/images/3.0x/icon_yijianshanchu.png": "4a7910bb66922df86e2e60bc6291b8f6",
"assets/images/3.0x/icon_kehuguanli_xuanzhong.png": "bde652ab94160525edb8546364546455",
"assets/images/3.0x/icon_duoxuan_xuanzhong.png": "c8c8e4930b207df193b734f76c3453c0",
"assets/images/3.0x/icon_add_user.png": "8c6f6c1f574c250b996285cb746b5ee1",
"assets/images/3.0x/icon_danxuan_xuanzhong.png": "a1ebbcdf5ba621733b5b172522166aa2",
"assets/images/3.0x/icon_tiaozhuan.png": "059cf01ed4f2601e09291453d56a2fe7",
"assets/images/3.0x/icon_dianhua.png": "819bd37e5cbe185288746bd6d13d6781",
"assets/images/3.0x/icon_tiaozhuan_light.png": "8c27c0d5c748d3d5b17dda3e4a0671c8",
"assets/images/3.0x/icon_fanhui_bai.png": "1a404dfa059cf868745476165b5f4e43",
"assets/images/3.0x/icon_sousuowujieguo_home.png": "23071d24b94cf9c62cc01a70e939f951",
"assets/images/3.0x/icon_chongmingming_jinyong.png": "59fae52163e895add07726cd994a3072",
"assets/images/3.0x/icon_duoxuan_weixuanzhong.png": "32975c55768e35bc16bc1234bfb69d9d",
"assets/images/3.0x/icon_shaixuan.png": "000d4e021aa5cb8c16cf276ad5cf2b8f",
"assets/images/3.0x/icon_qingchu.png": "b05e7061a71a01c927c78199592c24ae",
"assets/images/3.0x/icon_shijian.png": "ccc92158c5822b6041b883145e9e49f0",
"assets/images/3.0x/icon_youjian.png": "b8ac1f040c2fa8eeb719d1c760588be9",
"assets/images/3.0x/icon_touxiang_nan.png": "7d783822666a5aa8f87f6da2b3ba348a",
"assets/images/3.0x/icon_yinsi_bukeshi.png": "b18215fe327e3962359066ccdc3e970a",
"assets/images/3.0x/icon_xiazai_hei.png": "26c87c301082cca52a8142e1b402b834",
"assets/images/3.0x/icon_selected_multi.png": "c03f15e17b7b747ae2040ce759156fda",
"assets/images/3.0x/icon_shanchu_hei.png": "88809bb8783d93de11e29ddef639c483",
"assets/images/3.0x/icon_guanbi.png": "ea4ecf0e09d08f156efb8f316ae90a4f",
"assets/images/3.0x/icon_diyakuaidai_weixuanzhong.png": "f22eb75febca0a77b70ff1ab9c6c7a01",
"assets/images/3.0x/icon_sousuowujieguo.png": "16947e1905babb9bbd325c024cb4ac80",
"assets/images/3.0x/icon_tianjia_lan.png": "d07e2fa208e0227ee4441fbd8923f4f7",
"assets/images/3.0x/icon_dizhi.png": "ea59882647d7104fe59ed0623efb44c7",
"assets/images/3.0x/icon_zhankai.png": "bd61ba31abefb2d756d34ba67da7b7cb",
"assets/images/3.0x/icon_duoxuan_xuanzhong_yuan.png": "c16973bcf9b4c0db2bc082c658e0a9bc",
"assets/images/3.0x/icon_duoxuan_weixuanzhong_yuan.png": "44f938ec12e5f4bb0888009020044543",
"assets/images/3.0x/icon_xiazai_bai.png": "7f57671598ba93003a4e24919719cd01",
"assets/images/3.0x/icon_danxuan_weixuanzhong.png": "15b2b96490cfee614becb71992aa5a1e",
"assets/images/3.0x/icon_sousuoye_sousuo.png": "745e13d3437d0e634ab774f111f94916",
"assets/images/3.0x/icon_tianjiatupian.png": "3aaf968be7049f09012893746626e2f5",
"assets/images/3.0x/icon_shouqi.png": "e04fd56119e47ffd448229227b07918b",
"assets/images/3.0x/icon_guanbi_light.png": "35dae827972628b65026303a59d8d5a7",
"assets/images/3.0x/icon_xiazai_jinyong.png": "daaea3e2953e12a8cbc50ded9426fdf8",
"assets/images/3.0x/icon_shanchu_bai.png": "93bea36303d975b5ad944f93fc22ad33",
"assets/images/3.0x/icon_cailiaobao.png": "4bed8f71d9a6bc27d09b9f3a882bff38",
"assets/images/3.0x/icon_sousuo.png": "ea980e0eac8d6ea2d2b2c3a71b19a3ca",
"assets/images/3.0x/icon_xinzengcailiaobao.png": "bf8a200384f03267a3165a1c7b07336a",
"assets/images/3.0x/icon_gerenzhongxin.png": "b641af264f4ceb6e997c7f08824286f7",
"assets/images/3.0x/icon_bianji.png": "c6ffd0e2db3c7f1bcd0afafc73e20462",
"assets/images/3.0x/icon_selected_single.png": "a1ebbcdf5ba621733b5b172522166aa2",
"assets/images/3.0x/icon_yinsi_keshi.png": "7ecaf3553deed10af42f5d84fbb3c486",
"assets/images/test.png": "5e733170a44bf8c29c45ce9fe55d4a03",
"assets/AssetManifest.json": "b574bb84899192b6454ee4cd30c05b3c",
"assets/NOTICES": "9be81f446ada9bbfbc95fe693ddccdc7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_fanhui_hei.png": "71bd0e45ed2a21238a38eaabf1e4684f",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_chongmingming.png": "c3a5ccec05f21714c19c61052a4d08aa",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_touxiang_nv.png": "842180bc4bbd18ff68803a3e589eac71",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_shanchu_jinyong.png": "bd3741afa75f31b7d46936edbf2cd0fb",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_youjian_jinyong.png": "c7bc1effc5c2dfb6d729230854038c58",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_yijianshanchu.png": "13a8c7fc7d877f0efaf4ec780c5944e0",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_kehuguanli_xuanzhong.png": "f7c7fa515a5996da260de2df836ba13a",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_duoxuan_xuanzhong.png": "99c56eff6d47e2457abfbb93b0f0263d",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_add_user.png": "39e8e040f99f91e6b132b12c65c5cf5b",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_danxuan_xuanzhong.png": "3e14b62f76891a0d112c8e7b0ffa3e5b",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_tiaozhuan.png": "29d122bfafdd7e7a42a0b5f9b9d91d29",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_dianhua.png": "60b2d8a40314f74049bc700b96ea834a",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_tiaozhuan_light.png": "65bd2b28833f33f02f49c3ef1ebae669",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_fanhui_bai.png": "f1be90d953af60cc41315fc0fc49bb93",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_sousuowujieguo_home.png": "840cdaaa2629f0bd6029f15b6c1a0502",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_chongmingming_jinyong.png": "c74e7fb32ac77e9f4d985019e309e2f3",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_duoxuan_weixuanzhong.png": "00e9636cf8bf51180ee6444c5af3a03c",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_shaixuan.png": "84d9186f5b99b8a1185ac50151d28b02",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_qingchu.png": "eb965e0d34a91b246b555a654b36495e",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_shijian.png": "9114c5ca87c742ea070e511e594b6cfa",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_youjian.png": "51252f9aeae74026637e906101bac13f",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_touxiang_nan.png": "aaa42a0afd8c58ce111f4a0833a00bd1",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_yinsi_bukeshi.png": "4198e5d79e1d87fede9418bec6a018c3",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_xiazai_hei.png": "d9b633b004b13174e28fbe7da0391422",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_selected_multi.png": "e421b7ea66ecda22d37f8fee0aa02603",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_shanchu_hei.png": "269f42765200590cd40fcccc2dba1ac8",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_guanbi.png": "07e8df019c7aec4d5ba37c0b73ef8e0d",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_diyakuaidai_weixuanzhong.png": "7a837615fbb12ed8c36ee8bf31c0d0e2",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_sousuowujieguo.png": "2c4e2780f1b5522ac5cb17b5c29c3504",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_tianjia_lan.png": "dedb580b568ac7021eb6cafb82e720a4",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_dizhi.png": "781abfe0fa2e008eca2344b9fb5adce0",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_zhankai.png": "d6e14b28d1d51dc03c2758e490d5faec",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_duoxuan_xuanzhong_yuan.png": "f38d4f8c2f09d81904d9e91d9e77d025",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_duoxuan_weixuanzhong_yuan.png": "036d1e97a44e0f7cbbd46f113b0590fe",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_xiazai_bai.png": "fa9bda9bb7e48719d72a4a1411dca22d",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_danxuan_weixuanzhong.png": "53f3bd2974939f9ebf01f1d9aee5202e",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_sousuoye_sousuo.png": "fc58170c8ee45bf8fc48a10b24f2e2e4",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_tianjiatupian.png": "c740266480c6473085b0e7ec66cc81ad",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_shouqi.png": "6a272580b7686ad2e0c9ce8e27381984",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_guanbi_light.png": "4d1dddf0cbe6b6729d2e0a3e44909991",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_xiazai_jinyong.png": "38a76e9f9947eff5cfff564111df682a",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_shanchu_bai.png": "14b7d508f700eea38e0181c259494cee",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_cailiaobao.png": "cdc74f3e48b5e642afce65e7cb195562",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_sousuo.png": "38fdbf2032f5ac66a5a338529b8d16a2",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_xinzengcailiaobao.png": "db196ce2eda06f1822d4812e4414063e",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_gerenzhongxin.png": "5720508d2bc27c18022ae0684b2292ca",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_bianji.png": "7249bb16239c4832ab9e083d527ffd6d",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_selected_single.png": "3e14b62f76891a0d112c8e7b0ffa3e5b",
"assets/packages/ccbscf_standard_component/images/2.0x/icon_yinsi_keshi.png": "0be95f72e6031fe44bf3f047b53174d9",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_fanhui_hei.png": "d6bb79658870eed9d6558100934aecaf",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_chongmingming.png": "fb432aaef2462856b09cc7cd1a9b1b42",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_touxiang_nv.png": "7fee01e060921c4712d39bbd1a4e8ba1",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_shanchu_jinyong.png": "96595d2b75da3241f2e1d8b6d7b9e875",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_youjian_jinyong.png": "d7df8370823b8673ce99c91e36bb63a8",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_yijianshanchu.png": "4a7910bb66922df86e2e60bc6291b8f6",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_kehuguanli_xuanzhong.png": "bde652ab94160525edb8546364546455",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_duoxuan_xuanzhong.png": "c8c8e4930b207df193b734f76c3453c0",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_add_user.png": "8c6f6c1f574c250b996285cb746b5ee1",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_danxuan_xuanzhong.png": "a1ebbcdf5ba621733b5b172522166aa2",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_tiaozhuan.png": "059cf01ed4f2601e09291453d56a2fe7",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_dianhua.png": "819bd37e5cbe185288746bd6d13d6781",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_tiaozhuan_light.png": "8c27c0d5c748d3d5b17dda3e4a0671c8",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_fanhui_bai.png": "1a404dfa059cf868745476165b5f4e43",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_sousuowujieguo_home.png": "23071d24b94cf9c62cc01a70e939f951",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_chongmingming_jinyong.png": "59fae52163e895add07726cd994a3072",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_duoxuan_weixuanzhong.png": "32975c55768e35bc16bc1234bfb69d9d",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_shaixuan.png": "000d4e021aa5cb8c16cf276ad5cf2b8f",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_qingchu.png": "b05e7061a71a01c927c78199592c24ae",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_shijian.png": "ccc92158c5822b6041b883145e9e49f0",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_youjian.png": "b8ac1f040c2fa8eeb719d1c760588be9",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_touxiang_nan.png": "7d783822666a5aa8f87f6da2b3ba348a",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_yinsi_bukeshi.png": "b18215fe327e3962359066ccdc3e970a",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_xiazai_hei.png": "26c87c301082cca52a8142e1b402b834",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_selected_multi.png": "c03f15e17b7b747ae2040ce759156fda",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_shanchu_hei.png": "88809bb8783d93de11e29ddef639c483",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_guanbi.png": "ea4ecf0e09d08f156efb8f316ae90a4f",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_diyakuaidai_weixuanzhong.png": "f22eb75febca0a77b70ff1ab9c6c7a01",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_sousuowujieguo.png": "16947e1905babb9bbd325c024cb4ac80",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_tianjia_lan.png": "d07e2fa208e0227ee4441fbd8923f4f7",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_dizhi.png": "ea59882647d7104fe59ed0623efb44c7",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_zhankai.png": "bd61ba31abefb2d756d34ba67da7b7cb",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_duoxuan_xuanzhong_yuan.png": "c16973bcf9b4c0db2bc082c658e0a9bc",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_duoxuan_weixuanzhong_yuan.png": "44f938ec12e5f4bb0888009020044543",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_xiazai_bai.png": "7f57671598ba93003a4e24919719cd01",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_danxuan_weixuanzhong.png": "15b2b96490cfee614becb71992aa5a1e",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_sousuoye_sousuo.png": "745e13d3437d0e634ab774f111f94916",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_tianjiatupian.png": "3aaf968be7049f09012893746626e2f5",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_shouqi.png": "e04fd56119e47ffd448229227b07918b",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_guanbi_light.png": "35dae827972628b65026303a59d8d5a7",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_xiazai_jinyong.png": "daaea3e2953e12a8cbc50ded9426fdf8",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_shanchu_bai.png": "93bea36303d975b5ad944f93fc22ad33",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_cailiaobao.png": "4bed8f71d9a6bc27d09b9f3a882bff38",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_sousuo.png": "ea980e0eac8d6ea2d2b2c3a71b19a3ca",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_xinzengcailiaobao.png": "bf8a200384f03267a3165a1c7b07336a",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_gerenzhongxin.png": "b641af264f4ceb6e997c7f08824286f7",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_bianji.png": "c6ffd0e2db3c7f1bcd0afafc73e20462",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_selected_single.png": "a1ebbcdf5ba621733b5b172522166aa2",
"assets/packages/ccbscf_standard_component/images/3.0x/icon_yinsi_keshi.png": "7ecaf3553deed10af42f5d84fbb3c486",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
