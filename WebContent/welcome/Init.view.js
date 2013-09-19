jQuery.sap.require("sap.ui.commons.TextViewColor");
jQuery.sap.require("sap.ui.commons.TextViewDesign");
jQuery.sap.require("sap.ui.commons.TextView");
sap.ui
		.jsview(
				"welcome.Init",
				{
					getControllerName : function() {
						return "welcome.Init";
					},

					createContent : function(oController) {
						var modelData = this.getViewData().modelData;
						var viewId = this.getViewData().viewDescription.viewId;
						var oLayout = new sap.ui.commons.layout.VerticalLayout(
								{
									width : "100%"
								});
						var oHorizontalLayout = new sap.ui.commons.layout.HorizontalLayout(
								{
									width : "100%"
								});
						var htmlContent = new sap.ui.core.HTML(
								"htmlContent" + viewId,
								{
									content : this.assembleHeaderTitle(modelData.headerTitle),
									preferDOM : false,
									wrapping : true
								});
						var oImage = new sap.ui.commons.Image("i1" + viewId);
						oImage.setSrc(modelData.headerImage);
						oHorizontalLayout.addContent(oImage);
						oHorizontalLayout.addContent(htmlContent);
						oLayout.addContent(oHorizontalLayout);
						var pageContents = new sap.ui.core.HTML(
								"pageContents" + viewId,
								{
									content : modelData.pageContents,
									preferDOM : false,

								});
						oLayout.addContent(pageContents);

						var buttonsLayout = new sap.ui.commons.layout.MatrixLayout("m1" + viewId);

						var oMLR = new sap.ui.commons.layout.MatrixLayoutRow("m1_1" + viewId);
						buttonsLayout.addRow(oMLR);
						var buttonsData = this.getViewData().buttons;
						jQuery.each(buttonsData, function(i, buttonElement) {
							var button = new sap.ui.commons.Button(
									{
										id : buttonElement.id,
										text : buttonElement.text,
										width : "100px",
										icon : buttonElement.image,
										press : function() {
											window.open(buttonElement.url);
										}
									});
							var cell = new sap.ui.commons.layout.MatrixLayoutCell(buttonElement.id + i);
							cell.addContent(button);
							oMLR.addCell(cell);
						});
						var width = 110 * buttonsData.length;
						buttonsLayout.setWidth(width +"px");
						oLayout.addContent(buttonsLayout);
						return oLayout;
					},

					assembleHeaderTitle : function(headerText){
						var title = "<font size=\"7\">" + headerText + "</font>";
						return title;
					}
				});
