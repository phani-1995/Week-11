$(document).ready(function(){

	var worksheets = [
		'', // defaults to first worksheet without id
		'ouab0ad'];

	worksheets.forEach(function(worksheet){
 		$.googleSheetToJSON('19qwQFNQguV248AGxRj1jzN83idzRUppQ2pE8W0oegIY', worksheet)
			.done(function(rows){

				var $container = $('<div>');
				$container.append('<h1>' + (worksheet || 'default') + '</h1>');
				rows.forEach(function(row){
					$dl = $('<dl>');
					Object.getOwnPropertyNames(row).forEach(function(name){
						var val = [].concat(row[name]).join(' / ');
						$dl.append('<dt>' + name + '</dt><dd>' + val + '</dd>');
					});
					$container.append($dl);
				});
				$(document.body).append($container);
			})
			.fail(function(err){
				console.log('error!', err);
			});

//			var FusionCharts = require('fusioncharts');
//            var Charts = require('fusioncharts/fusioncharts.charts');
//            var FusionTheme = require('fusioncharts/themes/fusioncharts.theme.fusion');
//            var $ = require('jquery');
//            var jQueryFusionCharts = require('jquery-fusioncharts');
//
//            Charts(FusionCharts); // Resolve Charts as dependency for FusionCharts
//            FusionTheme(FusionCharts); // Resolve Fusion theme as dependency for FusionCharts
//            jQueryFusionCharts(FusionCharts); // Resolve FusionCharts as dependency for jqueryFusionCharts


	});
});