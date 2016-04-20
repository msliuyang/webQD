/**
 * Created by seven on 2016/3/28.
 */
    // 路径配置
require.config({
    paths: {
        echarts: 'js/dist'
    }
});

// 使用
require(
    [
        'echarts',
        'echarts/chart/line',
        'echarts/chart/bar',
        'echarts/chart/scatter',
        'echarts/chart/k',
        'echarts/chart/pie',
        'echarts/chart/radar',
        'echarts/chart/chord',
        'echarts/chart/map',
        'echarts/chart/heatmap',
        'echarts/chart/gauge',
        'echarts/chart/funnel',
        'echarts/chart/eventRiver',
        'echarts/chart/treemap',
        'echarts/chart/venn',
        'echarts/chart/tree',
        'echarts/chart/wordCloud'
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myPie = ec.init(document.getElementById('pie'));
        var myPie2 = ec.init(document.getElementById('pie2'));
        var myPie3 = ec.init(document.getElementById('pie3'));
        myPie.setOption(pie);
        myPie2.setOption(pie);
        myPie3.setOption(pie);

        var myPie4 = ec.init(document.getElementById('pie4'));
        var myPie5 = ec.init(document.getElementById('pie5'));
        var myPie6 = ec.init(document.getElementById('pie6'));
        myPie4.setOption(pie);
        myPie5.setOption(pie);
        myPie6.setOption(pie);

        var myBar = ec.init(document.getElementById('bar'));
        var myBar2 = ec.init(document.getElementById('bar2'));
        var myBar3 = ec.init(document.getElementById('bar3'));
        myBar.setOption(bar);
        myBar2.setOption(bar);
        myBar3.setOption(bar);
    }
);


var pie = {
    title : {
        text: '水用量异常统计 ',
        //subtext: '子标题',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    calculable : false,
    series : [
        {
            name:'访问来源',
            type:'pie',
            center : ['50%', '50%'],    // 默认全局居中
            radius : 80,
            clockWise : false,          // 默认逆时针
            startAngle: 0,
            minAngle: 0,
            data:[
                {value:65, name:'直接访问'},
                {value:400, name:'联盟广告'},
                {value:80, name:'邮件营销'}

            ]
        }
    ]
};
var bar = {
    title : {
        text: '水用量异常统计',
        x:'center'
        //subtext: '纯属虚构'
    },
    tooltip : {
        trigger: 'axis'
    },
    calculable : false,
    xAxis : [
        {
            type : 'category',
            data : ['1月','2月','3月','4月','5月','6月']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'蒸发量',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7]
        }
    ]
};

