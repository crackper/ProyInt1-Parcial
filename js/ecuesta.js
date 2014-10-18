ProyInt1.encuesta = (function(){
	var data = [
	{id:0,descripcion:"CONOCIENDO AL USUARIO",fechaIni:"15/10/14",fechaFin:"16/10/14",comentario:"",preguntas:[]},
	{id:1,descripcion:"ENCUESTA NPS",fechaIni:"16/10/14",fechaFin:"20/10/14",comentario:"",preguntas:[]}];

	var viewModel = kendo.observable({
		dataSource:[],
		selectedEncuesta:{},
		newEncuesta:{},
		newPregunta:{},
		onAddEncuesta:function(){
			var encuesta = this.get("newEncuesta");
			encuesta.id = data.length;
			encuesta.preguntas = [];
			data.push(encuesta);
			console.log(data);
			ProyInt1.app.getApplication().navigate("#encuestasView");
		},
		onAddPregunta:function(){
			var encuesta = this.get("selectedEncuesta");
			var pregunta = this.get("newPregunta");
			encuesta.preguntas.push(pregunta);
			data[encuesta.id] = encuesta;			
			console.log(data);	
			pregunta = {};
			this.set("newPregunta",pregunta);		
			ProyInt1.app.getApplication().navigate("#encuestasView");
		}
	});

	function onShow()
	{
		viewModel.set("dataSource",data);
		console.log(data);
	}

	function onShowDetalle()
	{
		console.log("Detalle encuesta");
		var encuesta = viewModel.get("selectedEncuesta");

		$("#listPeguntas").kendoMobileListView({
            dataSource: kendo.data.DataSource.create({data: encuesta.preguntas, group: "descripcion" }),
            template: $("#detalleTemplate").html(),
            headerTemplate: '${value}'
        });

        console.log(encuesta);
	}

	function onOpenOptions(e)
	{
		viewModel.set("selectedEncuesta",data[e.context])
		console.log(data[e.context]);
	}

	function onAddOptionPregunta(e)
    {
        ProyInt1.app.getApplication().navigate("#addOptionPreguntaEncuestaView");
    }

   function onVerEncuesta(e){
        console.log("Ver encuesta:");
        console.log(data[e.context]);
        viewModel.set("selectedEncuesta",data[e.context])
        ProyInt1.app.getApplication().navigate("#detalleEncuestaView");
   }

	return {
		viewModel:viewModel,
		onShow:onShow,
		onShowDetalle:onShowDetalle,
		onOpenOptions:onOpenOptions,
		onAddOptionPregunta:onAddOptionPregunta,
		onVerEncuesta:onVerEncuesta
	};

})(window);