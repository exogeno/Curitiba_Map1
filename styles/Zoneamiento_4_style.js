var size = 0;
var placement = 'point';
function categories_Zoneamiento_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'ÁREA DE PROTEÇÃO AMBIENTAL DO IGUAÇU':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(68,1,84,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ÁREA DE PROTEÇÃO AMBIENTAL DO PASSAÚNA':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(72,33,115,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'EIXO ESTRUTURANTES':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(66,62,133,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'EIXO METROPOLITANO - LINHA VERDE':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(56,88,140,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'EIXOS CONECTORES':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(45,111,142,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'EIXOS DE ADENSAMENTO':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(36,133,142,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SETORES ESPECIAIS':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(30,155,137,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'UNIDADE DE CONSERVAÇÃO':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(42,176,126,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ZONA CENTRAL':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(81,197,105,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ZONAS COM DESTINAÇÃO ESPECÍFICA':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(133,213,74,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ZONAS DE USO MISTO':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(194,224,35,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ZONAS RESIDENCIAIS':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,231,37,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Zoneamiento_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("NM_GRUPO");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Zoneamiento_4(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
