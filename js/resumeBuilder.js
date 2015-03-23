var data = '%data%';

var bio =
{
	"name" : "Ken Ng",
	"role" : "Front-End Web Developer",
	"contacts" :
	{
		"mobile" : "(650)269-3919",
		"email" : "ng.ken84@gmail.com",
		"github" : "https://github.com/ngken84",
		"location" : "Sacramento, CA"
	},
	"picture url" : "images/ken.jpg",
	"welcomeMessage" : "Welcome Future Employers!",
	"biopic" : "images/profile.jpg",
	"skills" : ["C++", "Java", "Python", "HTML5", "CSS3", "JavaScript", "Android", "iOS"],
	"display" : function() {
		var header = $('#header');
		var headerContent = $('#headerContent');

		$('#headerimg').prepend(HTMLbioPic.replace(data, this.biopic));
		header.prepend(HTMLheaderRole.replace(data,this.role));
		header.prepend(HTMLheaderName.replace(data,this.name));
		var topContacts = $('#topContacts');
		topContacts.append(HTMLmobile.replace(data, this.contacts.mobile));
		topContacts.append(HTMLemail.replace(data, this.contacts.email));
		topContacts.append(HTMLgithub.replace(data, this.contacts.github));
		topContacts.append(HTMLlocation.replace(data, this.contacts.location));
		if(this.skills && this.skills.length > 0)
		{
			headerContent.append(HTMLskillsStart);
			for(i = 0, x = this.skills.length; i < x; ++i)
			{
				$('#skills').append(HTMLskills.replace(data, this.skills[i]));
			}
		}
		headerContent.prepend(HTMLwelcomeMsg.replace(data, this.welcomeMessage));
	}
};

var education = {
	"schools" : [
		{
			"name" : "Johns Hopkins University",
			"location" : "Baltimore, MD",
			"degree" : "BS",
			"major" : ["Biomedical Engineering"],
			"dates" : 2008

		},
		{
			"name" : "UC Santa Cruz",
			"location" : "Santa Cruz, CA",
			"degree" : "Certificate in Computer Programming with Honors",
			"major" : ["Computer Science"],
			"dates" : 2012
		}
	],
	"onlineCourses" : [
		{
			"title" : "Web Development",
			"school" : "Udacity",
			"degree" : "Verfied Certificate of Completion",
			"date" : 2014,
			"url" : "http://www.udacity.com"
		},
		{
			"title" : "Intro to HTML and CSS",
			"school" : "Udacity",
			"degree" : "Verfied Certificate of Completion",
			"date" : 2015,
			"url" : "http://www.udacity.com"
		}
	],
	"display" : function () {
		var eduDiv = $('#education');
		for(var schoolIndex in this.schools)
		{
			eduDiv.append(HTMLschoolStart);
			var schoolDiv = $('.education-entry:last');
			var currentSchool = this.schools[schoolIndex];
			schoolDiv.append(HTMLschoolName.replace(data, currentSchool.name) + HTMLschoolDegree.replace(data, currentSchool.degree));
			schoolDiv.append(HTMLschoolDates.replace(data, 'Graduated ' + currentSchool.dates));
			schoolDiv.append(HTMLschoolLocation.replace(data, currentSchool.location));
			schoolDiv.append(HTMLschoolMajor.replace(data, currentSchool.major.join(", ")));
		}
		if(this.onlineCourses.length > 0)
		{
			eduDiv.append(HTMLonlineClasses);
			for(var schoolIndex in this.onlineCourses)
			{
				var onlineClass = this.onlineCourses[schoolIndex];
				eduDiv.append(HTMLschoolStart);
				var schoolDiv = $('.education-entry:last');
				schoolDiv.append(HTMLonlineTitle.replace(data, onlineClass.title) + HTMLonlineSchool.replace(data, onlineClass.school));
				schoolDiv.append(HTMLonlineDates.replace(data, 'Completed ' + onlineClass.date));
				schoolDiv.append(HTMLonlineURL.replace(data, onlineClass.url));
			}
		}


	}
};

var work =
{
	"job" : [
		{
			"employer" : "California Legislative Data Center",
			"position" : "Software Developer",
			"work dates" : "Fall 2013 - Present",
			"city" : "Sacramento, CA",
			"description" : ["Collaborate with a team to create a suite of applications to organize Committee Hearings and Bills",
				"Developed Android Application to Committee Members to view and annotate bills"]
		},
		{
			"employer" : "Sony Computer Entertainement",
			"position" : "Senior Tester",
			"work dates" : "Fall 2011 - Winter 2012",
			"city" : "Foster City, CA",
			"description" : ["Ensured software released on PlayStation platforms adhered to SCEA's Technical Requirements Checklist",
						"Discovered, researched, and summarized violations of SCEA's TRCs both individually and in a team environment",
						"Created a Format QA tester wiki site that consolidates information needed to thoroughly complete test cases in SCEA's TRCs",
						"Earned top performer on multiple occasions"]
		},
		{
			"employer" : "Weil Gotshals & Manges LLP",
			"position" : "Paralegal",
			"work dates" : "Winter 2007 - Spring 2011",
			"city" : "Redwood City, CA",
			"description" : ["Ensured attorneys had the materials needed for proceedings such as depositions and trials",
						"Assisted with the drafting of attorney briefs, presentations and expert reports",
						"Performed special assignments at attorney request including research and document review",
						"Managed and organized large record databases for multiple litigation cases"]
		}
	],
	"display" : function() {
		for(var index in work.job)
		{
			$('#workExperience').append(HTMLworkStart);
			var workEntry = $('.work-entry').last();
			var workJob = this.job[index];
			workEntry.append(HTMLworkEmployer.replace('%data%', workJob.employer) + HTMLworkTitle.replace('%data%', work.job[index].position));
			workEntry.append(HTMLworkDates.replace('%data%', workJob['work dates']));
			workEntry.append(HTMLworkLocation.replace('%data%', workJob.city));
			workEntry.append(HTMLworkDescription.replace('%data%', workJob.description.join("<br>")));
		}
	}
};

var projects =
{
	"projects" : [
		{
			"title" : "Salon Valenti App",
			"dates" : "February 2013 - April 2013",
			"description" : "A hybrid Android application that allows users to schedule appointments, view staff pages, view Yelp reviews, contact the Salon and retrieve directions to the Salon. Create, edit and delete user profiles using a SQLite database."
		}
	],
	"display" : function() {
		var projectDiv = $('#projects');
		for(var projectIndex in this.projects)
		{
			projectDiv.append(HTMLprojectStart);
			var projEntry = $('.project-entry').last();
			var currProj = this.projects[projectIndex];
			projEntry.append(HTMLprojectTitle.replace('%data%', currProj.title));
			projEntry.append(HTMLprojectDates.replace('%data%', currProj.dates));
			projEntry.append(HTMLprojectDescription.replace('%data%', currProj.description));
			for(projImgIndex in currProj.images)
			{
				projEntry.append(HTMLprojectImage.replace('%data%', currProj.images[projImgIndex]));
			}
		}
	}
}

// Click Listener
var locationArray = [];

$(document).click(function(loc) {
	locationArray.push({"X" : loc.pageX, "Y" : loc.pageY});
	console.log(locationArray);
});

// Append internationalizeButton

$('#main').append(internationalizeButton);

function inName()
{
	var name = $('#name').text();
	var splitName = name.split(' ');
	splitName[0] = splitName[0].slice(0,1).toUpperCase() + splitName[0].slice(1).toLowerCase();
	splitName[1] = splitName[1].toUpperCase();
	return splitName.join(" ");
}

function appendAllData()
{
	bio.display();
	work.display();
	projects.display();
	education.display();
	$('#mapDiv').append(googleMap);


	if(document.getElementsByClassName('flex-item').length === 0) {
		document.getElementById('topContacts').style['background-color'] = 'black';
	}
	if(document.getElementsByTagName('h1').length === 0) {
		document.getElementById('header').style['background-color'] = 'black';
	}
	if(document.getElementsByClassName('work-entry').length === 0) {
		document.getElementById('workExperience')['background-color'] = 'black';
	}
	if(document.getElementsByClassName('project-entry').length === 0) {
		document.getElementById('projects').style['background-color'] = 'black';
	}
	if(document.getElementsByClassName('education-entry').length === 0) {
		document.getElementById('education').style['background-color'] = 'black';
	}
	if(document.getElementsByClassName('flex-item').length === 0) {
		document.getElementById('letsConnect').style['background-color'] = 'black';
	}
	if(document.getElementById('map') === null) {
		document.getElementById('mapDiv').style['background-color'] = 'black';
	}
}

$(appendAllData);
/*
var formattedContact = HTMLcontactGeneric.replace("%contact%", bio["contact info"]);

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#education").append(HTMLskillsStart);
console.log(bio.skills);
for(i = 0, x = bio.skills.length; i < x; ++i)
{
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
}

$("#workExperience").append(HTMLworkStart);

{

	work.position = "Software Developer";
	work.employer = "California Legislative Data Center";
	work["work dates"] = "September 2013 - Present";
	work.city = "Sacramento, California";
	work["work description"] = ["Collaborate with a team to create a suite of applications to organize Committee Hearings and Bills", "Developed Android Application to Committee Members to view and annotate bills"];

	var workEntry = $(".work-entry");
	workEntry.append(HTMLworkEmployer.replace("%data%", work.employer) + HTMLworkTitle.replace("%data%", work.position));
	workEntry.append(HTMLworkDates.replace("%data%", work["work dates"]));
	workEntry.append(HTMLworkLocation.replace("%data%", work.city));
	var workDescriptions = work["work description"];
	console.log(workDescriptions);
	for(i = 0, x = workDescriptions.length; i < x; i++)
	{
		workEntry.append(HTMLworkDescription.replace("%data%", workDescriptions[i]));
	}
}

{

	education["school"] = "UC Santa Cruz Extension";
	education["years attended"] = "2011-2012";
	education["city"] = "Santa Cruz, California";

	var schoolEntry = $("#education");
	schoolEntry.append(education["school"]);
}
*/




