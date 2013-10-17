jQuery.sap.declare("cloudsamples.SampleAppModel");
views = [ {
	viewDescription : {
		viewId : "item_hanasample",
		viewTitle : "HANA Demo"
	},

	modelData : {
		headerTitle : "Experience HANA",
		headerImage : "images/hana.png",
		pageContents : "<font size=4><p>Run your business in real real time. SAP and partner solutions powered by SAP HANA can help you dramatically accelerate analytics, business processes, predictive analysis, and sentiment data processing - all on a single in-memory computing platform. </p>"
				+ "<p>With this sample application you can explore the capabilites of SAP HANA. Find out if in-memory database technology is the right choice for your business. Discover what impact it could have on your cloud computing efforts - and learn why SAP HANA is setting new standards in the market.</p>"
				+ "<p>Experience the speed and flexibility of SAP HANA for yourself. Test drive this solution powered by our in-memory technology - and work through timed challenges in a range of corporate roles. </p></font>",
	},

	buttons : [
			{
				id : "demo_hana",
				text : "See Demo",
				image : "images/demo.png",
				url : "https://hanasample.hanatrial.ondemand.com/HANA_DATA_CONSUMPTION/"
			},
			{
				id : "blog_hana",
				text : "Read Blog",
				image : "images/help.png",
				url : "http://scn.sap.com/community/developer-center/cloud-platform/blog/2013/07/16/using-hana-modeler-in-sap-hana-cloud"
			} ]
},
{
	viewDescription : {
		viewId : "item_paulpredicts_sample",
		viewTitle : "Paul the Octopus"
	},

	modelData : {
		headerTitle : "Experience SAP HANA Cloud services and HTML5 (SAPUI5)",
		headerImage : "images/UI_Development.png",
		pageContents : "<font size=4>"
				+ "<p>The Web application \"Paul the Octopus\" shows how the SAP HANA Cloud services and capabilities can be combined to build more complex Web applications, which can be deployed on the SAP HANA Cloud platform.</p>"
				+ "<p>Features of \"Paul the Octopus\": </p>"
				+ "<ul>"
				+ "<li>It is intended for anyone who would like to gain hands-on experience with the SAP HANA Cloud platform. </li>"
				+ "<li>It involves the following platform services: identity, connectivity, persistence, and document.</li>"
				+ "<li>Its user interface is developed via SAPUI5 and is based on the Model-View-Controller concept. SAPUI5 is based on HTML5 and can be used for building applications with sophisticated UI. Other technologies that you can see in action in \"Paul the Octopus\" are REST services and job scheduling.</li>"
				+ "</ul>"
	},

	buttons : [
			{
				id : "demo_paulpredicts_sample",
				text : "See Demo",
				image : "images/demo.png",
				url : "https://paulsample.hanatrial.ondemand.com/server/"
			},
			{
				id : "blog_paulpredicts_sample",
				text : "Read Blog",
				image : "images/help.png",
				url : "http://scn.sap.com/community/developer-center/cloud-platform/blog/2012/12/21/get-ready-for-your-paul-position"
			},
			{
				id : "download_paulpredicts_sample",
				text : "Get Source",
				image : "images/source.png",
				url : "http://github.com/SAP/cloud-paulpredicts/"
			}]
},
{
	viewDescription : {
		viewId : "item_library_sample",
		viewTitle : "SAP Library"
	},

	modelData : {
		headerTitle : "Hands-on experience with the SAP HANA Cloud capabilities",
		headerImage : "images/connectivity.png",
		pageContents : "<font size=4>"
				+ "<p>The Web application \"SAP Library\" demonstrates the usage of several SAP HANA Cloud services in one integrated scenario, closely following the product documentation. You can import it as a Maven project, play around with your own library, and have a look at how it is implemented. It allows you to reserve and return books, edit details of existing ones, add new titles, maintain library users' profiles and so on.</p>"
				+ "<p>Features of \"SAP Library\": </p>"
				+ "<ul>"
				+ "<li>The library users authenticate using the identity service. It supports Single Sign-On (SSO).</li>"
				+ "<li>The books status and features are persisted using the persistence service.</li>"
				+ "<li>Book's details are retrieved using a public Internet Web service, demonstrating usage of the connectivity service.</li>"
				+ "<li>When you upload your profile image, it is persisted using the document service.</li>"
				+ "</ul>"
	},

	buttons : [
			{
				id : "demo_library",
				text : "See Demo",
				image : "images/demo.png",
				url : "https://librarysample.hanatrial.ondemand.com/library"
			},
			{
				id : "blog_library",
				text : "Read Blog",
				image : "images/help.png",
				url : "http://scn.sap.com/community/developer-center/cloud-platform/blog/2013/07/01/welcome-to-the-library"
			},
			{
				id : "download_library_sample",
				text : "Get Source",
				image : "images/source.png",
				url : "https://github.com/SAP/cloud-sample-library/"
			}]
},
];
