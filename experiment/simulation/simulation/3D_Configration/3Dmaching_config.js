var MachingObj = MachingObj || {};

MaterialArr = [
	"Wood",
	 "Metal (CI, Brass, Al, White metal)",
	"Plastics",
	"Rubbers",
	"Plasters",
	"Molding Waxes",
	"Chemical Wood", 
	"Foam", 
	"Acrylic", 
	"Poly acetate", 
	"ABS", 
	"PC board"

] 

Tools = [
	"1mm Square",
	"2mm Square",
	"3mm Square",
	"4mm Square",
	"5mm Square",
	"6mm Square",
	"R0.5 Bell",
	"R1 Ball",
	"R1.5 Ball",
	"R2 Ball",
	"R2.5 Ball",
	"R3 Ball",
	"0.2mm conical"
]


ToolTypejson = [
	{"name":"stright-square","src":"simulation/diagram/fablab pics/stright-square.png"},
	{"name":"Bell","src":"simulation/diagram/fablab pics/ball.png"},
	{"name":"Redius","src":"simulation/diagram/fablab pics/redius.png"},
	{"name":"Conical","src":"simulation/diagram/fablab pics/conical.png"},
	{"name":"Drill","src":"simulation/diagram/fablab pics/Drill.png"}]


ToolPathjson = [
	{"name":"Scan line.png","src":"simulation/diagram/fablab pics/Scan line.png"},
	{"name":"Uni-directional","src":"simulation/diagram/fablab pics/Uni-directional.png"},
	{"name":"Contour line","src":"simulation/diagram/fablab pics/Contour line.png"},
	{"name":"Sprial","src":"simulation/diagram/fablab pics/Sprial.png"},
]


var Imgsrc = null;
MaterialJson = {}
MachingObj.selectMaterial = function(){
	
	
	var MatrialHtm = ''
		
		MatrialHtm += '<div class="container-fluid">'
			+'<div class="row">'
			
			+'<div class="col-sm-12 col-md-3 col-xl-2" id="ConfigSection">'
			
			+'<h1>Matrial</h1>'
			+'<section>'
			+'<h3>Select Material </h3>'
			+'<select class="form-control" id="Materialtype">'
			MatrialHtm +='<option value="0">Select value</option>'
			for(var i = 0; i < MaterialArr.length; i++ )
				{
				
		MatrialHtm +='<option value='+MaterialArr[i]+'>'+MaterialArr[i]+'</option>'
				}
	    MatrialHtm +='</select>'
		
	    	+'<h3>Machining Process</h3></br>'
	    	+'<input type="radio" name="MachingProcess" value="Surfacing" disabled>&nbsp;Surfacing </br>'
	    	+'<input type="radio" name="MachingProcess" value="Roughing" checked="checked">&nbsp;Roughing  </br>'
	    	+'<input type="radio" name="MachingProcess" value="Finishing" disabled>&nbsp;Finishing </br>'
	    	+'<input type="radio" name="MachingProcess" value="Drilling" disabled>&nbsp;Drilling </br>'
	    	
	    	+'<button id="getMachning" class="btn btn-success">Rander</button>'
	    	
	    	+'<br/><button id="SelectModelpropBtn" data-toggle="modal" data-target="#MaterialModal" class="btn btn-info" disabled>Model property</button>'
			
	    +'</section>'
	    	+'</div>'
			
			+'<div class="col-sm-12 col-md-9 col-xl-10" id="WoodCuttingSection">'
			+'<img id="MaterialImg" src="simulation/diagram/fablab pics/rowMaterial.PNG">'
			
			+'</div>'
			
			+'</div>'
			+'</div>'
	
			+'<div class="modal" id="MaterialModal" data-keyboard="false" data-backdrop="static">'
			+'<div class="modal-dialog">'
			+'<div class="modal-content container-fluid">'

				    +'<div class="modal-header">'
				    +'<h4 class="modal-title">Material Modal Details</h4>'
				    +'<button type="button" class="close" data-dismiss="modal">&times;</button>'
				    +'</div>'

	    			+'<div class="modal-body row" id="detailsData">'
	    			+'<div class="col-sm-12 col-md-5 col-xl-5" >'
			       
			        +'<section>'
			        +'<h3>Model size</h3>'
			        +'<input type="radio" name="MachingSize" value="Length" >&nbspLength </br>'
			    	+'<input type="radio" name="MachingSize" value="Scale" >&nbspScale </br>'
			    	+'</section>'
			    	
			    	+'<section>'
			    	+'<h3>Material Dimension</h3>'
			    	+'X:&nbsp<input type="number" id="X_Value">&nbspmm</br>'
			    	+'Y:&nbsp<input type="number" id="Y_Value">&nbspmm</br>'
			    	+'Z:&nbsp<input type="number" id="Z_Value">&nbspmm</br>'
			    	+'</section>'
			    	
			    	+'<section>'
			    	 +'<h3>Rotation</h3>'
			    	 +'Rotate &nbsp; : &nbsp;<input type="number" min="0" max="45" id="rotation"> &nbsp; Degrees around Z axis'
			    	 +'</section>'
			    	 
			    	+'<hr></hr>'
			    	+'</div>'
			    	+'<div class="col-sm-12 col-md-7 col-xl-7" >'
			    	
			    	+'<section class="">'
			    	
			    	+'<h3>Orientation</h3>'
			    	+'<div class="row">'
			    	+'<div class="col-sm-12 col-md-6 col-xl-6" >'
			    	+'<img src="simulation/diagram/fablab pics/Orientation.PNG">'
			    	+'</div>'
			    	+'<div class="col-sm-12 col-md-6 col-xl-6" >'
			    	+'<h4>Select top surface</h4>'
			    	+'<div class="orignBk">'
			    	+'<img src="simulation/diagram/fablab pics/orign.PNG" class="orgimg">'
			    	
			    	 +'<input type="radio" name="selectTopsurface" value="top" class="top"> </br>'
			    	 +'<input type="radio" name="selectTopsurface" value="top left" class="topleft"> '
			    	 +'<input type="radio" name="selectTopsurface" value="top right" class="topright"> </br>'
			    	 +'<input type="radio" name="selectTopsurface" value="bottom left" class="bottomleft"> '
			    	 +'<input type="radio" name="selectTopsurface" value="bottom right" class="bottomright"> </br>'
			    	 +'<input type="radio" name="selectTopsurface" value="bottom" class="bottom"> </br>'
			    	
			    	 +'</div>'
			    	 +'</div>'
			    	
			    	+'</div>'
			    	
			    	+'</section>'
			    	+'</div>'
			        +'</div>'

			    
				    +'<div class="modal-footer">'
				    +'<button type="button" class="btn btn-success" id="saveOrientation" data-keyboard="false" data-backdrop="static">Ok</button>'
				    +'<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'
			        +'</div>'

			 +'</div>'
			 +'</div>'
			 +'</div>'
			
			 
				
			 
			 
	 $("#mainDiv").html();
	$("#mainDiv").html(MatrialHtm);
	
	
	$("#saveOrientation").click( function(){
		
		MaterialJson.MachingSize = $("input[name='MachingSize']:checked").val();
		MaterialJson.X_Value = $("#X_Value").val();
		MaterialJson.Y_Value = $("#Y_Value").val();
		MaterialJson.Z_Value = $("#Z_Value").val();
		MaterialJson.selectTopsurface = $("input[name='selectTopsurface']:checked").val();
		MaterialJson.rotation = $("#rotation").val();
		
		if ($("input[name='MachingSize']:checked").val() != undefined && $("#X_Value").val() != "" && $("#Y_Value").val() != "" && $("#Z_Value").val() != "" && $("input[name='selectTopsurface']:checked").val() != undefined && $("#rotation").val() != "") 
		{
			$('#MaterialModal').modal('hide');
			
			MachingObj.Settools() ;
			console.log(MaterialJson)
		}
		else
	   {
			
			alertify.alert('Warning!!','Please enter all the inputs' );
			 $(".ajs-header").css("background-color","#ce6058");
			 $("#saveOrientation").attr({"data-keyboard":"false","data-backdrop":"static"})
	   }
	})
	
	$("#getMachning").click( function(){
		
		
		MaterialJson.Materialtype = $("#Materialtype").val();
		MaterialJson.Materialprocess = $("input[name='MachingProcess']:checked").val();
		
		console.log(MaterialJson);
		
		if($("#Materialtype").val() != "0" && $("input[name='MachingProcess']:checked").val() != "")
			{
			$("#SelectModelpropBtn").prop("disabled",false);
			$("#MaterialImg").attr("src","simulation/diagram/fablab pics/Step1.png");
			}
		else{
			alertify.alert('Warning!!','Please enter all the inputs' );
			 $(".ajs-header").css("background-color","#ce6058");
		}
	})
	
	MachingObj.CuttingParameter = function(){
		
		var MatrialHtm = ''
			
			MatrialHtm += '<div class="container-fluid">'
				+'<div class="row">'
				  +'<h1>Set Cutting Parameter</h1>'
				
				 +'</div>'
				 +'</div>'
		 $("#ConfigSection").html();
			$("#ConfigSection").html(MatrialHtm);
	}
	

			MachingObj.Settools = function() {
					
							var MatrialHtm = ''
					
							MatrialHtm += '<div class="container-fluid">' + '<div class="row">'
									+ '<h1>Set Tools</h1>' + '<section>' + '<h3>Tools</h3>'
									+ '<select id="selectTool" class="form-control">'
							for (var i = 0; i < Tools.length; i++) {
								MatrialHtm += '<option value=' + Tools[i] + '>' + Tools[i]
										+ '</option>'
							}
							MatrialHtm += '</select>'
									+ '</section>'
									+ '<section>'
									+ '<h3>Tool Type</h3>'
									+ '<select id="selectToolType" class="form-control" onchange="changeimage()">'
									+ '<option value="0">Select tool</option>'
							for (var i = 0; i < ToolTypejson.length; i++) {
								MatrialHtm += '<option value=' + ToolTypejson[i].name + '>'
										+ ToolTypejson[i].name + '</option>'
					
							}
							MatrialHtm += '</select>'
							MatrialHtm += '<img  id="ToolTypeimg"><br/>'
					
							+ '<h3>Tool material</h3>'
									+ '<input type="number" class="form-control" id="Toolmaterial">'
									+ '<h3>Dimeter</h3>'
									+ '<input type="number" class="form-control" id="ToolDimeter">'
							MatrialHtm += '</section>' + '</div>' 
							+'<button id="ToolSelectBtn" class="btn btn-success">Submit</button>'
							+ '</div>'
							
							
							
							+'<div class="modal" id="toolpathModal" data-keyboard="false" data-backdrop="static">'
							+'<div class="modal-dialog">'
							+'<div class="modal-content container-fluid">'
	
								    +'<div class="modal-header">'
								    +'<h4 class="modal-title">Tool path</h4>'
								    +'<button type="button" class="close" data-dismiss="modal">&times;</button>'
								    +'</div>'
	
					    			+'<div class="modal-body row" id="ToolPathData">'
					    			+'<div class="col-sm-12 col-md-12 col-xl-12" >'
					    			+'<section>'
					    			+"<h3>select tool path</h3>"
					    			for (var i = 0; i < ToolPathjson.length; i++) {
										
					    				MatrialHtm +='<input type="radio" name="toolpath" value='+ToolPathjson[i].name+' onclick="changeToolimage('+i+')">&nbsp;'+ToolPathjson[i].name+'</br>'
							
									}
							MatrialHtm +='<img id="toolpathImg"/>'
							+'</div>'
								
								   
								    +'</section>'
							        +'</div>'
	
							    
								    +'<div class="modal-footer">'
								    +'<button type="button" class="btn btn-success" id="saveToolPathBtn" >Ok</button>'
								    +'<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'
							        +'</div>'
	
							 +'</div>'
							 +'</div>'
							 +'</div>'
							$("#ConfigSection").html();
							$("#ConfigSection").html(MatrialHtm);
					
							changeimage = function() {
					
								for (var i = 0; i < ToolTypejson.length; i++) {
									if ($("#selectToolType").val() == ToolTypejson[i].name) {
										$("#ToolTypeimg").attr("src", ToolTypejson[i].src);
					
									}
								}
							}
							
							changeToolimage = function(i) {
								
	//							for (var i = 0; i < ToolTypejson.length; i++) {
	//								if ($("#selectToolType").val() == ToolTypejson[i].name) {
										$("#toolpathImg").attr("src", ToolPathjson[i].src);
					
	//								}
	//							}
							}
							$("#ToolSelectBtn").click( function ()
							{
								MaterialJson.ToolType = $("#selectToolType").val();
								MaterialJson.selectedTool = $("#selectTool option:selected").text();
								MaterialJson.Toolmaterial = $("#Toolmaterial").val();
								MaterialJson.ToolDimeter = $("#ToolDimeter").val();
								
								console.log(MaterialJson);
								
								if($("#selectToolType").val() != "" && $("#selectTool").val() != 0 &&  $("#Toolmaterial").val() != "" &&  $("#ToolDimeter").val() != "" )
									{
									$('#toolpathModal').modal('show');
									
									}
								else
									{
									alertify.alert('Warning!!','Please enter/select all the inputs' );
									 $(".ajs-header").css("background-color","#ce6058");
									}
							});
							
							
							
							$("#saveToolPathBtn").click( function ()
									{
										
										MaterialJson.selectTopsurface = $("input[name='toolpath']:checked").val();
										
										
										
										if($("input[name='toolpath']:checked").val() != undefined )
											{
											$('#toolpathModal').modal('hide');
											
											console.log(MaterialJson);
											$("#MaterialImg").css("display","none");
											alertify.confirm('Confirmation!!', 'Are you sure you want to start the animation ? ', function(){
									    		 
												//animation start 
												paper = Raphael("WoodCuttingSection", 1400, 800);	
												 
												 
												 MachineDrawing();
												}, function(){
													$('#toolpathModal').modal('show');
												});
									    	  $(".ajs-header").css("background-color","#17a2b8");
											}
										else{
											$('#toolpathModal').modal('show');
											alertify.alert('Warning!!','Please select the tool path' );
											 $(".ajs-header").css("background-color","#ce6058");
										}
									});
				}
}