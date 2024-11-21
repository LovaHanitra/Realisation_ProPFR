var wms_layers = [];

var format_Limitecommuneavoisinante_0 = new ol.format.GeoJSON();
var features_Limitecommuneavoisinante_0 = format_Limitecommuneavoisinante_0.readFeatures(json_Limitecommuneavoisinante_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitecommuneavoisinante_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitecommuneavoisinante_0.addFeatures(features_Limitecommuneavoisinante_0);
var lyr_Limitecommuneavoisinante_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitecommuneavoisinante_0, 
                style: style_Limitecommuneavoisinante_0,
                popuplayertitle: "Limite commune avoisinante",
                interactive: false,
                title: '<img src="styles/legend/Limitecommuneavoisinante_0.png" /> Limite commune avoisinante'
            });
var format_Parcelle_communautaire_1 = new ol.format.GeoJSON();
var features_Parcelle_communautaire_1 = format_Parcelle_communautaire_1.readFeatures(json_Parcelle_communautaire_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcelle_communautaire_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcelle_communautaire_1.addFeatures(features_Parcelle_communautaire_1);
var lyr_Parcelle_communautaire_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcelle_communautaire_1, 
                style: style_Parcelle_communautaire_1,
                popuplayertitle: "Parcelle_communautaire",
                interactive: false,
                title: '<img src="styles/legend/Parcelle_communautaire_1.png" /> Parcelle_communautaire'
            });
var format_TitreissudelODOC_Ambondromamy_2 = new ol.format.GeoJSON();
var features_TitreissudelODOC_Ambondromamy_2 = format_TitreissudelODOC_Ambondromamy_2.readFeatures(json_TitreissudelODOC_Ambondromamy_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitreissudelODOC_Ambondromamy_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitreissudelODOC_Ambondromamy_2.addFeatures(features_TitreissudelODOC_Ambondromamy_2);
var lyr_TitreissudelODOC_Ambondromamy_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitreissudelODOC_Ambondromamy_2, 
                style: style_TitreissudelODOC_Ambondromamy_2,
                popuplayertitle: "Titre issu de l'ODOC_Ambondromamy",
                interactive: false,
                title: '<img src="styles/legend/TitreissudelODOC_Ambondromamy_2.png" /> Titre issu de l\'ODOC_Ambondromamy'
            });
var format_TitreissudelODOC_Marovoay_3 = new ol.format.GeoJSON();
var features_TitreissudelODOC_Marovoay_3 = format_TitreissudelODOC_Marovoay_3.readFeatures(json_TitreissudelODOC_Marovoay_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitreissudelODOC_Marovoay_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitreissudelODOC_Marovoay_3.addFeatures(features_TitreissudelODOC_Marovoay_3);
var lyr_TitreissudelODOC_Marovoay_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitreissudelODOC_Marovoay_3, 
                style: style_TitreissudelODOC_Marovoay_3,
                popuplayertitle: "Titre issu de l'ODOC_ Marovoay",
                interactive: false,
                title: '<img src="styles/legend/TitreissudelODOC_Marovoay_3.png" /> Titre issu de l\'ODOC_ Marovoay'
            });
var format_Certificat_Andranoboka_4 = new ol.format.GeoJSON();
var features_Certificat_Andranoboka_4 = format_Certificat_Andranoboka_4.readFeatures(json_Certificat_Andranoboka_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Certificat_Andranoboka_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Certificat_Andranoboka_4.addFeatures(features_Certificat_Andranoboka_4);
var lyr_Certificat_Andranoboka_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Certificat_Andranoboka_4, 
                style: style_Certificat_Andranoboka_4,
                popuplayertitle: "Certificat_Andranoboka",
                interactive: true,
                title: '<img src="styles/legend/Certificat_Andranoboka_4.png" /> Certificat_Andranoboka'
            });
var format_Limite_Commune_ProPFR_5 = new ol.format.GeoJSON();
var features_Limite_Commune_ProPFR_5 = format_Limite_Commune_ProPFR_5.readFeatures(json_Limite_Commune_ProPFR_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_Commune_ProPFR_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_Commune_ProPFR_5.addFeatures(features_Limite_Commune_ProPFR_5);
var lyr_Limite_Commune_ProPFR_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limite_Commune_ProPFR_5, 
                style: style_Limite_Commune_ProPFR_5,
                popuplayertitle: "Limite_Commune_ProPFR",
                interactive: false,
                title: '<img src="styles/legend/Limite_Commune_ProPFR_5.png" /> Limite_Commune_ProPFR'
            });

lyr_Limitecommuneavoisinante_0.setVisible(true);lyr_Parcelle_communautaire_1.setVisible(true);lyr_TitreissudelODOC_Ambondromamy_2.setVisible(true);lyr_TitreissudelODOC_Marovoay_3.setVisible(true);lyr_Certificat_Andranoboka_4.setVisible(true);lyr_Limite_Commune_ProPFR_5.setVisible(true);
var layersList = [lyr_Limitecommuneavoisinante_0,lyr_Parcelle_communautaire_1,lyr_TitreissudelODOC_Ambondromamy_2,lyr_TitreissudelODOC_Marovoay_3,lyr_Certificat_Andranoboka_4,lyr_Limite_Commune_ProPFR_5];
lyr_Limitecommuneavoisinante_0.set('fieldAliases', {'NOM_REGION': 'NOM_REGION', 'NOM_DISTRI': 'NOM_DISTRI', 'NOM_COMMUN': 'NOM_COMMUN', 'C_Com': 'C_Com', 'C_Dst': 'C_Dst', 'C_Rg': 'C_Rg', 'CLASSE': 'CLASSE', 'Gd_Sud': 'Gd_Sud', 'Etiquette': 'Etiquette', 'areaa': 'areaa', 'Projet': 'Projet', 'GF': 'GF', 'Nasir': 'Nasir', 'ProPFR': 'ProPFR', 'Eval_2023': 'Eval_2023', 'Numero': 'Numero', 'Legende': 'Legende', '2019-2021': '2019-2021', 'Synergie': 'Synergie', 'Prop_hub': 'Prop_hub', });
lyr_Parcelle_communautaire_1.set('fieldAliases', {'id': 'id', 'Nom_Entite': 'Nom_Entite', 'Type': 'Type', 'Area(Ha)': 'Area(Ha)', 'Commune': 'Commune', });
lyr_TitreissudelODOC_Ambondromamy_2.set('fieldAliases', {'numTitre': 'numTitre', 'nomProprie': 'nomProprie', 'Sur_Plan': 'Sur_Plan', 'Titre_R': 'Titre_R', 'Parcelle': 'Parcelle', 'Partie': 'Partie', 'Feuille': 'Feuille', });
lyr_TitreissudelODOC_Marovoay_3.set('fieldAliases', {'observatio': 'observatio', 'nomproprie': 'nomproprie', 'consistanc': 'consistanc', 'classe': 'classe', 'Num_Titre': 'Num_Titre', 'CONT': 'CONT', 'DEMANDEUR': 'DEMANDEUR', 'RTX': 'RTX', 'datertx': 'datertx', 'affBT': 'affBT', 'REQUISITR': 'REQUISITR', 'X': 'X', 'Y': 'Y', 'Y1': 'Y1', 'surface': 'surface', });
lyr_Certificat_Andranoboka_4.set('fieldAliases', {'gid': 'gid', 'numerocert': 'numerocert', 'idcommune': 'idcommune', 'idcertific': 'idcertific', 'idpersonne': 'idpersonne', 'nompersonn': 'nompersonn', 'prenompers': 'prenompers', 'sexeperson': 'sexeperson', 'datenaissa': 'datenaissa', 'nevers': 'nevers', 'lieunaissa': 'lieunaissa', 'numciperso': 'numciperso', 'datecipers': 'datecipers', 'lieucipers': 'lieucipers', 'numactenai': 'numactenai', 'dateactena': 'dateactena', 'lieuactena': 'lieuactena', 'nompere': 'nompere', 'nommere': 'nommere', 'numdemande': 'numdemande', 'datedemand': 'datedemand', 'datereconn': 'datereconn', 'fokontany': 'fokontany', 'consistanc': 'consistanc', 'datedecisi': 'datedecisi', 'categorie': 'categorie', 'numdecisio': 'numdecisio', 'Comm': 'Comm', 'iddemande': 'iddemande', 'Area(Ha)': 'Area(Ha)', 'X': 'X', 'Y': 'Y', 'Parc_ProSo': 'Parc_ProSo', });
lyr_Limite_Commune_ProPFR_5.set('fieldAliases', {'NOM_REGION': 'NOM_REGION', 'NOM_DISTRI': 'NOM_DISTRI', 'NOM_COMMUN': 'NOM_COMMUN', 'C_Com': 'C_Com', 'C_Dst': 'C_Dst', 'C_Rg': 'C_Rg', 'CLASSE': 'CLASSE', 'Gd_Sud': 'Gd_Sud', 'Etiquette': 'Etiquette', 'areaa': 'areaa', 'Projet': 'Projet', 'GF': 'GF', 'Nasir': 'Nasir', 'ProPFR': 'ProPFR', 'Eval_2023': 'Eval_2023', 'Numero': 'Numero', 'Legende': 'Legende', '2019-2021': '2019-2021', 'Synergie': 'Synergie', 'Prop_hub': 'Prop_hub', });
lyr_Limitecommuneavoisinante_0.set('fieldImages', {'NOM_REGION': 'TextEdit', 'NOM_DISTRI': 'TextEdit', 'NOM_COMMUN': 'TextEdit', 'C_Com': 'Range', 'C_Dst': 'Range', 'C_Rg': 'Range', 'CLASSE': 'TextEdit', 'Gd_Sud': 'TextEdit', 'Etiquette': 'TextEdit', 'areaa': 'TextEdit', 'Projet': 'TextEdit', 'GF': 'TextEdit', 'Nasir': 'TextEdit', 'ProPFR': 'TextEdit', 'Eval_2023': 'TextEdit', 'Numero': 'TextEdit', 'Legende': 'TextEdit', '2019-2021': 'TextEdit', 'Synergie': 'TextEdit', 'Prop_hub': 'TextEdit', });
lyr_Parcelle_communautaire_1.set('fieldImages', {'id': 'TextEdit', 'Nom_Entite': 'TextEdit', 'Type': 'TextEdit', 'Area(Ha)': 'TextEdit', 'Commune': 'TextEdit', });
lyr_TitreissudelODOC_Ambondromamy_2.set('fieldImages', {'numTitre': '', 'nomProprie': '', 'Sur_Plan': '', 'Titre_R': '', 'Parcelle': '', 'Partie': '', 'Feuille': '', });
lyr_TitreissudelODOC_Marovoay_3.set('fieldImages', {'observatio': 'TextEdit', 'nomproprie': 'TextEdit', 'consistanc': 'TextEdit', 'classe': 'TextEdit', 'Num_Titre': 'TextEdit', 'CONT': 'Range', 'DEMANDEUR': 'TextEdit', 'RTX': 'TextEdit', 'datertx': 'DateTime', 'affBT': 'TextEdit', 'REQUISITR': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Y1': 'Range', 'surface': 'TextEdit', });
lyr_Certificat_Andranoboka_4.set('fieldImages', {'gid': 'TextEdit', 'numerocert': 'TextEdit', 'idcommune': 'TextEdit', 'idcertific': 'TextEdit', 'idpersonne': 'TextEdit', 'nompersonn': 'TextEdit', 'prenompers': 'TextEdit', 'sexeperson': 'TextEdit', 'datenaissa': 'DateTime', 'nevers': 'TextEdit', 'lieunaissa': 'TextEdit', 'numciperso': 'TextEdit', 'datecipers': 'DateTime', 'lieucipers': 'TextEdit', 'numactenai': 'TextEdit', 'dateactena': 'DateTime', 'lieuactena': 'TextEdit', 'nompere': 'TextEdit', 'nommere': 'TextEdit', 'numdemande': 'TextEdit', 'datedemand': 'TextEdit', 'datereconn': 'TextEdit', 'fokontany': 'TextEdit', 'consistanc': 'TextEdit', 'datedecisi': 'TextEdit', 'categorie': 'TextEdit', 'numdecisio': 'TextEdit', 'Comm': 'TextEdit', 'iddemande': 'TextEdit', 'Area(Ha)': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Parc_ProSo': 'TextEdit', });
lyr_Limite_Commune_ProPFR_5.set('fieldImages', {'NOM_REGION': 'TextEdit', 'NOM_DISTRI': 'TextEdit', 'NOM_COMMUN': 'TextEdit', 'C_Com': 'Range', 'C_Dst': 'Range', 'C_Rg': 'Range', 'CLASSE': 'TextEdit', 'Gd_Sud': 'TextEdit', 'Etiquette': 'TextEdit', 'areaa': 'TextEdit', 'Projet': 'TextEdit', 'GF': 'TextEdit', 'Nasir': 'TextEdit', 'ProPFR': 'TextEdit', 'Eval_2023': 'TextEdit', 'Numero': 'TextEdit', 'Legende': 'TextEdit', '2019-2021': 'TextEdit', 'Synergie': 'TextEdit', 'Prop_hub': 'TextEdit', });
lyr_Limitecommuneavoisinante_0.set('fieldLabels', {'NOM_REGION': 'no label', 'NOM_DISTRI': 'no label', 'NOM_COMMUN': 'no label', 'C_Com': 'no label', 'C_Dst': 'no label', 'C_Rg': 'no label', 'CLASSE': 'no label', 'Gd_Sud': 'no label', 'Etiquette': 'no label', 'areaa': 'no label', 'Projet': 'no label', 'GF': 'no label', 'Nasir': 'no label', 'ProPFR': 'no label', 'Eval_2023': 'no label', 'Numero': 'no label', 'Legende': 'no label', '2019-2021': 'no label', 'Synergie': 'no label', 'Prop_hub': 'no label', });
lyr_Parcelle_communautaire_1.set('fieldLabels', {'id': 'no label', 'Nom_Entite': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Area(Ha)': 'inline label - visible with data', 'Commune': 'inline label - visible with data', });
lyr_TitreissudelODOC_Ambondromamy_2.set('fieldLabels', {'numTitre': 'no label', 'nomProprie': 'no label', 'Sur_Plan': 'no label', 'Titre_R': 'no label', 'Parcelle': 'no label', 'Partie': 'no label', 'Feuille': 'no label', });
lyr_TitreissudelODOC_Marovoay_3.set('fieldLabels', {'observatio': 'no label', 'nomproprie': 'no label', 'consistanc': 'no label', 'classe': 'no label', 'Num_Titre': 'no label', 'CONT': 'no label', 'DEMANDEUR': 'no label', 'RTX': 'no label', 'datertx': 'no label', 'affBT': 'no label', 'REQUISITR': 'no label', 'X': 'no label', 'Y': 'no label', 'Y1': 'no label', 'surface': 'no label', });
lyr_Certificat_Andranoboka_4.set('fieldLabels', {'gid': 'no label', 'numerocert': 'inline label - visible with data', 'idcommune': 'no label', 'idcertific': 'no label', 'idpersonne': 'no label', 'nompersonn': 'inline label - visible with data', 'prenompers': 'inline label - visible with data', 'sexeperson': 'no label', 'datenaissa': 'no label', 'nevers': 'no label', 'lieunaissa': 'no label', 'numciperso': 'no label', 'datecipers': 'no label', 'lieucipers': 'no label', 'numactenai': 'no label', 'dateactena': 'no label', 'lieuactena': 'no label', 'nompere': 'no label', 'nommere': 'no label', 'numdemande': 'inline label - visible with data', 'datedemand': 'inline label - visible with data', 'datereconn': 'inline label - visible with data', 'fokontany': 'no label', 'consistanc': 'inline label - visible with data', 'datedecisi': 'no label', 'categorie': 'no label', 'numdecisio': 'no label', 'Comm': 'no label', 'iddemande': 'no label', 'Area(Ha)': 'inline label - visible with data', 'X': 'no label', 'Y': 'no label', 'Parc_ProSo': 'no label', });
lyr_Limite_Commune_ProPFR_5.set('fieldLabels', {'NOM_REGION': 'no label', 'NOM_DISTRI': 'no label', 'NOM_COMMUN': 'inline label - visible with data', 'C_Com': 'no label', 'C_Dst': 'no label', 'C_Rg': 'no label', 'CLASSE': 'no label', 'Gd_Sud': 'no label', 'Etiquette': 'no label', 'areaa': 'no label', 'Projet': 'no label', 'GF': 'no label', 'Nasir': 'no label', 'ProPFR': 'no label', 'Eval_2023': 'no label', 'Numero': 'no label', 'Legende': 'no label', '2019-2021': 'no label', 'Synergie': 'no label', 'Prop_hub': 'no label', });
lyr_Limite_Commune_ProPFR_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});