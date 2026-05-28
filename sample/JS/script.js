//円グラフ
var pieDate={
    labels:["Wedデザイナー","コーダー","SVエンジニア","その他"],
    series:[35,30,20,15]
};

var pieOptions={
    width:'100%',
    height:'440px',
};

new Chartist.Pie('.pie-chart',pieDate,pieOptions);

//棒グラフ
var barDate={
    labels:['2023年','2024年','2025年'],
    series:[[10,16,29]]
};

var barOptions={
    axisY:{
        offset: 60,
        scaleMinSpace: 50,
        labelInterpolationFnc:function(value){
            return value+'人'
        }
    },
    width:'100%',
    height:'400px'
};

new Chartist.Bar('.bar-chart',barDate,barOptions);