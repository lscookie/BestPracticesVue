
import HelloWorld from './HelloWorld.vue'
import AntDesignVue from './componentLibrary/AntDesignVue.vue'
import ElementPlus from './componentLibrary/ElementPlus.vue'
import Vant from './componentLibrary/Vant.vue'
import VueAdminPro from './componentLibrary/VueAdminPro.vue'
import EchartsView from './plugs/EchartsView.vue'
import Orgchart from './plugs/Orgchart.vue'
import Ztree from './plugs/Ztree.vue'
import ArgGis from './plugs/ArgGis.vue'


export default class viewIndex {
    static routes = [
        {
            path: '/hello',
            redirect: '/hello/AntDesignVue'
        },
        {
            path: '/hello/AntDesignVue',
            component: AntDesignVue
        },
        {
            path: '/hello/ElementPlus',
            component: ElementPlus
        },
        {
            path: '/hello/Vant',
            component: Vant
        },
        {
            path: '/hello/VueAdminPro',
            component: VueAdminPro
        },
        {
            path: '/hello/Echarts',
            component: EchartsView
        },
        {
            path: '/hello/Orgchart',
            component: Orgchart
        },
        {
            path: '/hello/Ztree',
            component: Ztree
        },
        {
            path: '/hello/ArgGis',
            component: ArgGis
        }
    ]
    static viewList: Array<any> = [
        HelloWorld,
        AntDesignVue,
        ElementPlus,
        Vant,
        VueAdminPro,
        EchartsView,
        Orgchart,
        Ztree
    ]
}
