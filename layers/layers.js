var wms_layers = [];


        var lyr_CartoDark_0 = new ol.layer.Tile({
            'title': 'Carto Dark',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });
var format_Rios_1 = new ol.format.GeoJSON();
var features_Rios_1 = format_Rios_1.readFeatures(json_Rios_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rios_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rios_1.addFeatures(features_Rios_1);
var lyr_Rios_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rios_1, 
                style: style_Rios_1,
                interactive: true,
                title: '<img src="styles/legend/Rios_1.png" /> Rios'
            });
var format_Divisadebairros_2 = new ol.format.GeoJSON();
var features_Divisadebairros_2 = format_Divisadebairros_2.readFeatures(json_Divisadebairros_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Divisadebairros_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Divisadebairros_2.addFeatures(features_Divisadebairros_2);
var lyr_Divisadebairros_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Divisadebairros_2, 
                style: style_Divisadebairros_2,
                interactive: true,
                title: '<img src="styles/legend/Divisadebairros_2.png" /> Divisa de bairros'
            });
var format_Parquesybosques_3 = new ol.format.GeoJSON();
var features_Parquesybosques_3 = format_Parquesybosques_3.readFeatures(json_Parquesybosques_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parquesybosques_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parquesybosques_3.addFeatures(features_Parquesybosques_3);
var lyr_Parquesybosques_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parquesybosques_3, 
                style: style_Parquesybosques_3,
                interactive: true,
                title: '<img src="styles/legend/Parquesybosques_3.png" /> Parques y bosques'
            });
var format_Zoneamiento_4 = new ol.format.GeoJSON();
var features_Zoneamiento_4 = format_Zoneamiento_4.readFeatures(json_Zoneamiento_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zoneamiento_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoneamiento_4.addFeatures(features_Zoneamiento_4);
var lyr_Zoneamiento_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zoneamiento_4, 
                style: style_Zoneamiento_4,
                interactive: true,
    title: 'Zoneamiento<br />\
    <img src="styles/legend/Zoneamiento_4_0.png" /> Área de Proteção Ambiental do Iguaçu<br />\
    <img src="styles/legend/Zoneamiento_4_1.png" /> Área de Proteção Ambiental do Passaúna<br />\
    <img src="styles/legend/Zoneamiento_4_2.png" /> Eixo Estruturantes<br />\
    <img src="styles/legend/Zoneamiento_4_3.png" /> Eixo Metropolitano - Linha Verde<br />\
    <img src="styles/legend/Zoneamiento_4_4.png" /> Eixos Conectores<br />\
    <img src="styles/legend/Zoneamiento_4_5.png" /> Eixos de Adensamento<br />\
    <img src="styles/legend/Zoneamiento_4_6.png" /> Setores Especiais<br />\
    <img src="styles/legend/Zoneamiento_4_7.png" /> Unidade de Conservação<br />\
    <img src="styles/legend/Zoneamiento_4_8.png" /> Zona Central<br />\
    <img src="styles/legend/Zoneamiento_4_9.png" /> Zonas com Destinação Específica<br />\
    <img src="styles/legend/Zoneamiento_4_10.png" /> Zonas de Uso Misto<br />\
    <img src="styles/legend/Zoneamiento_4_11.png" /> Zonas Residenciais<br />'
        });
var format_Divisaderegionais_5 = new ol.format.GeoJSON();
var features_Divisaderegionais_5 = format_Divisaderegionais_5.readFeatures(json_Divisaderegionais_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Divisaderegionais_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Divisaderegionais_5.addFeatures(features_Divisaderegionais_5);
var lyr_Divisaderegionais_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Divisaderegionais_5, 
                style: style_Divisaderegionais_5,
                interactive: true,
                title: '<img src="styles/legend/Divisaderegionais_5.png" /> Divisa de regionais'
            });
var format_Sistemaviarioclassificado_6 = new ol.format.GeoJSON();
var features_Sistemaviarioclassificado_6 = format_Sistemaviarioclassificado_6.readFeatures(json_Sistemaviarioclassificado_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sistemaviarioclassificado_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sistemaviarioclassificado_6.addFeatures(features_Sistemaviarioclassificado_6);
var lyr_Sistemaviarioclassificado_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sistemaviarioclassificado_6, 
                style: style_Sistemaviarioclassificado_6,
                interactive: true,
    title: 'Sistema viario classificado<br />\
    <img src="styles/legend/Sistemaviarioclassificado_6_0.png" /> Central<br />\
    <img src="styles/legend/Sistemaviarioclassificado_6_1.png" /> Coletora 1<br />\
    <img src="styles/legend/Sistemaviarioclassificado_6_2.png" /> Coletora 2<br />\
    <img src="styles/legend/Sistemaviarioclassificado_6_3.png" /> Externa<br />\
    <img src="styles/legend/Sistemaviarioclassificado_6_4.png" /> Outras Vias<br />\
    <img src="styles/legend/Sistemaviarioclassificado_6_5.png" /> Prioritária<br />\
    <img src="styles/legend/Sistemaviarioclassificado_6_6.png" /> Setorial 1<br />\
    <img src="styles/legend/Sistemaviarioclassificado_6_7.png" /> Setorial 2<br />'
        });
var format_Escolamunicipal_7 = new ol.format.GeoJSON();
var features_Escolamunicipal_7 = format_Escolamunicipal_7.readFeatures(json_Escolamunicipal_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Escolamunicipal_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Escolamunicipal_7.addFeatures(features_Escolamunicipal_7);
var lyr_Escolamunicipal_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Escolamunicipal_7, 
                style: style_Escolamunicipal_7,
                interactive: true,
                title: '<img src="styles/legend/Escolamunicipal_7.png" /> Escola municipal'
            });
var format_Hospital_8 = new ol.format.GeoJSON();
var features_Hospital_8 = format_Hospital_8.readFeatures(json_Hospital_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospital_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospital_8.addFeatures(features_Hospital_8);
var lyr_Hospital_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hospital_8, 
                style: style_Hospital_8,
                interactive: true,
                title: '<img src="styles/legend/Hospital_8.png" /> Hospital'
            });

lyr_CartoDark_0.setVisible(true);lyr_Rios_1.setVisible(true);lyr_Divisadebairros_2.setVisible(true);lyr_Parquesybosques_3.setVisible(true);lyr_Zoneamiento_4.setVisible(true);lyr_Divisaderegionais_5.setVisible(true);lyr_Sistemaviarioclassificado_6.setVisible(true);lyr_Escolamunicipal_7.setVisible(true);lyr_Hospital_8.setVisible(true);
var layersList = [lyr_CartoDark_0,lyr_Rios_1,lyr_Divisadebairros_2,lyr_Parquesybosques_3,lyr_Zoneamiento_4,lyr_Divisaderegionais_5,lyr_Sistemaviarioclassificado_6,lyr_Escolamunicipal_7,lyr_Hospital_8];
lyr_Rios_1.set('fieldAliases', {'TIPO': 'TIPO', 'NOME': 'NOME', });
lyr_Divisadebairros_2.set('fieldAliases', {'TIPO': 'TIPO', 'NOME': 'NOME', 'NM_REGIONA': 'NM_REGIONA', });
lyr_Parquesybosques_3.set('fieldAliases', {'TIPO': 'TIPO', 'NOME': 'NOME', 'TEXTO_MAPA': 'TEXTO_MAPA', });
lyr_Zoneamiento_4.set('fieldAliases', {'NM_GRUPO': 'NM_GRUPO', 'NM_ZONA': 'NM_ZONA', 'SG_ZONA': 'SG_ZONA', 'LEGISLACAO': 'LEGISLACAO', });
lyr_Divisaderegionais_5.set('fieldAliases', {'NOME_LEG': 'NOME_LEG', });
lyr_Sistemaviarioclassificado_6.set('fieldAliases', {'NMVIA': 'NMVIA', 'STATUS': 'STATUS', 'SIST_VIARI': 'SIST_VIARI', 'SIST_VIA_1': 'SIST_VIA_1', });
lyr_Escolamunicipal_7.set('fieldAliases', {'TEMA': 'TEMA', 'EQUIPAMENT': 'EQUIPAMENT', 'TIPO_EQUI': 'TIPO_EQUI', 'DEP_ADMIN': 'DEP_ADMIN', 'NOME_COMPL': 'NOME_COMPL', 'PRE_NOME': 'PRE_NOME', 'NOME': 'NOME', 'CONVENIADO': 'CONVENIADO', 'NOME_ABREV': 'NOME_ABREV', 'NOME_MAPA': 'NOME_MAPA', 'NOME_RUA': 'NOME_RUA', 'DIVULGAR_E': 'DIVULGAR_E', 'BAIRRO': 'BAIRRO', 'QUADR_EQUI': 'QUADR_EQUI', 'REGIONAL': 'REGIONAL', 'FUNC_MANHA': 'FUNC_MANHA', 'FUNC_TARDE': 'FUNC_TARDE', 'FUNC_NOITE': 'FUNC_NOITE', 'FUNC_24HR': 'FUNC_24HR', 'OBSERVACAO': 'OBSERVACAO', 'FONTE': 'FONTE', 'DS_MANTENE': 'DS_MANTENE', });
lyr_Hospital_8.set('fieldAliases', {'TEMA': 'TEMA', 'EQUIPAMENT': 'EQUIPAMENT', 'TIPO_EQUI': 'TIPO_EQUI', 'DEP_ADMIN': 'DEP_ADMIN', 'NOME_COMPL': 'NOME_COMPL', 'PRE_NOME': 'PRE_NOME', 'NOME': 'NOME', 'SIGLA_EQUI': 'SIGLA_EQUI', 'CONVENIADO': 'CONVENIADO', 'NOME_ABREV': 'NOME_ABREV', 'NOME_MAPA': 'NOME_MAPA', 'NOME_RUA': 'NOME_RUA', 'COMPL_END': 'COMPL_END', 'DIVULGAR_E': 'DIVULGAR_E', 'CD_BAIRRO': 'CD_BAIRRO', 'BAIRRO': 'BAIRRO', 'QUADR_EQUI': 'QUADR_EQUI', 'REGIONAL': 'REGIONAL', 'FUNC_MANHA': 'FUNC_MANHA', 'FUNC_TARDE': 'FUNC_TARDE', 'FUNC_NOITE': 'FUNC_NOITE', 'FUNC_24HR': 'FUNC_24HR', 'EMAIL': 'EMAIL', 'SITE': 'SITE', 'OBSERVACAO': 'OBSERVACAO', 'FONTE': 'FONTE', });
lyr_Rios_1.set('fieldImages', {'TIPO': 'TextEdit', 'NOME': 'TextEdit', });
lyr_Divisadebairros_2.set('fieldImages', {'TIPO': 'TextEdit', 'NOME': 'TextEdit', 'NM_REGIONA': 'TextEdit', });
lyr_Parquesybosques_3.set('fieldImages', {'TIPO': 'TextEdit', 'NOME': 'TextEdit', 'TEXTO_MAPA': 'TextEdit', });
lyr_Zoneamiento_4.set('fieldImages', {'NM_GRUPO': 'TextEdit', 'NM_ZONA': 'TextEdit', 'SG_ZONA': 'TextEdit', 'LEGISLACAO': 'TextEdit', });
lyr_Divisaderegionais_5.set('fieldImages', {'NOME_LEG': 'TextEdit', });
lyr_Sistemaviarioclassificado_6.set('fieldImages', {'NMVIA': 'TextEdit', 'STATUS': 'TextEdit', 'SIST_VIARI': 'TextEdit', 'SIST_VIA_1': 'TextEdit', });
lyr_Escolamunicipal_7.set('fieldImages', {'TEMA': 'TextEdit', 'EQUIPAMENT': 'TextEdit', 'TIPO_EQUI': 'TextEdit', 'DEP_ADMIN': 'TextEdit', 'NOME_COMPL': 'TextEdit', 'PRE_NOME': 'TextEdit', 'NOME': 'TextEdit', 'CONVENIADO': 'TextEdit', 'NOME_ABREV': 'TextEdit', 'NOME_MAPA': 'TextEdit', 'NOME_RUA': 'TextEdit', 'DIVULGAR_E': 'TextEdit', 'BAIRRO': 'TextEdit', 'QUADR_EQUI': 'TextEdit', 'REGIONAL': 'TextEdit', 'FUNC_MANHA': 'TextEdit', 'FUNC_TARDE': 'TextEdit', 'FUNC_NOITE': 'TextEdit', 'FUNC_24HR': 'TextEdit', 'OBSERVACAO': 'TextEdit', 'FONTE': 'TextEdit', 'DS_MANTENE': 'TextEdit', });
lyr_Hospital_8.set('fieldImages', {'TEMA': 'TextEdit', 'EQUIPAMENT': 'TextEdit', 'TIPO_EQUI': 'TextEdit', 'DEP_ADMIN': 'TextEdit', 'NOME_COMPL': 'TextEdit', 'PRE_NOME': 'TextEdit', 'NOME': 'TextEdit', 'SIGLA_EQUI': 'TextEdit', 'CONVENIADO': 'TextEdit', 'NOME_ABREV': 'TextEdit', 'NOME_MAPA': 'TextEdit', 'NOME_RUA': 'TextEdit', 'COMPL_END': 'TextEdit', 'DIVULGAR_E': 'TextEdit', 'CD_BAIRRO': 'Range', 'BAIRRO': 'TextEdit', 'QUADR_EQUI': 'TextEdit', 'REGIONAL': 'TextEdit', 'FUNC_MANHA': 'TextEdit', 'FUNC_TARDE': 'TextEdit', 'FUNC_NOITE': 'TextEdit', 'FUNC_24HR': 'TextEdit', 'EMAIL': 'TextEdit', 'SITE': 'TextEdit', 'OBSERVACAO': 'TextEdit', 'FONTE': 'TextEdit', });
lyr_Rios_1.set('fieldLabels', {'TIPO': 'inline label', 'NOME': 'header label', });
lyr_Divisadebairros_2.set('fieldLabels', {'TIPO': 'no label', 'NOME': 'header label', 'NM_REGIONA': 'no label', });
lyr_Parquesybosques_3.set('fieldLabels', {'TIPO': 'no label', 'NOME': 'header label', 'TEXTO_MAPA': 'no label', });
lyr_Zoneamiento_4.set('fieldLabels', {'NM_GRUPO': 'header label', 'NM_ZONA': 'no label', 'SG_ZONA': 'no label', 'LEGISLACAO': 'no label', });
lyr_Divisaderegionais_5.set('fieldLabels', {'NOME_LEG': 'no label', });
lyr_Sistemaviarioclassificado_6.set('fieldLabels', {'NMVIA': 'header label', 'STATUS': 'no label', 'SIST_VIARI': 'no label', 'SIST_VIA_1': 'no label', });
lyr_Escolamunicipal_7.set('fieldLabels', {'TEMA': 'no label', 'EQUIPAMENT': 'no label', 'TIPO_EQUI': 'no label', 'DEP_ADMIN': 'no label', 'NOME_COMPL': 'no label', 'PRE_NOME': 'no label', 'NOME': 'header label', 'CONVENIADO': 'no label', 'NOME_ABREV': 'no label', 'NOME_MAPA': 'no label', 'NOME_RUA': 'no label', 'DIVULGAR_E': 'no label', 'BAIRRO': 'no label', 'QUADR_EQUI': 'no label', 'REGIONAL': 'no label', 'FUNC_MANHA': 'no label', 'FUNC_TARDE': 'no label', 'FUNC_NOITE': 'no label', 'FUNC_24HR': 'no label', 'OBSERVACAO': 'no label', 'FONTE': 'no label', 'DS_MANTENE': 'no label', });
lyr_Hospital_8.set('fieldLabels', {'TEMA': 'no label', 'EQUIPAMENT': 'no label', 'TIPO_EQUI': 'no label', 'DEP_ADMIN': 'no label', 'NOME_COMPL': 'no label', 'PRE_NOME': 'no label', 'NOME': 'header label', 'SIGLA_EQUI': 'no label', 'CONVENIADO': 'no label', 'NOME_ABREV': 'no label', 'NOME_MAPA': 'no label', 'NOME_RUA': 'no label', 'COMPL_END': 'no label', 'DIVULGAR_E': 'no label', 'CD_BAIRRO': 'no label', 'BAIRRO': 'no label', 'QUADR_EQUI': 'no label', 'REGIONAL': 'no label', 'FUNC_MANHA': 'no label', 'FUNC_TARDE': 'no label', 'FUNC_NOITE': 'no label', 'FUNC_24HR': 'no label', 'EMAIL': 'no label', 'SITE': 'no label', 'OBSERVACAO': 'no label', 'FONTE': 'no label', });
lyr_Hospital_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});