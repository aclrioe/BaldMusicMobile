import find from '@/assets/imgs/icon_find.png';
import findAC from '@/assets/imgs/icon_find_AC.png';
import my from '@/assets/imgs/icon_my.png';
import myAC from '@/assets/imgs/icon_my_AC.png';
import login from '@/assets/imgs/icon_login.png';
import dynamic from '@/assets/imgs/icon_dynamic.png';
import dynamicAC from '@/assets/imgs/icon_dynamic_AC.png';
import personal from '@/assets/imgs/icon_personal.png';
import personalAC from '@/assets/imgs/icon_personal_AC.png';

const indexTabs = [
  {
    title: "Music Hall"
  },
  {
    title: "Recommend"
  },
  {
    title: "Circle"
  },

]

const tabBarData = [
  {
    pageUrl: '#/Home',
    imgPath: find,
    imgSelectPath: findAC,
    title: 'Find',
  },
  {
    pageUrl: '#/My',
    imgPath: my,
    imgSelectPath: myAC,
    title: 'My',
  },
  {
    pageUrl: '#/Login',
    imgPath: login,
    imgSelectPath: '',
    title: '',
  },
  {
    pageUrl: '#/dynamic',
    imgPath: dynamic,
    imgSelectPath: dynamicAC,
    title: 'Dynamic',
  },
  {
    pageUrl: '#/Personal',
    imgPath: personal,
    imgSelectPath: personalAC,
    title: 'Personal',
  },
];
const quickEntryData = [
  {
    title: "Music Hall",
    path: ""
  },
  {
    title: "Recommend",
    path: ""
  },
  {
    title: "Circle",
    path: ""
  },
]

export { 
  indexTabs,
  tabBarData,
  quickEntryData
}