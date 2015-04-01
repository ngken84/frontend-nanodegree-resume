// Click Listener
var locationArray = [];

$(document).click(function(loc) {
	locationArray.push({"X" : loc.pageX, "Y" : loc.pageY});
	console.log(locationArray);
});

// Append internationalizeButton
$('.container').append(internationalizeButton);

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

			// Variables containing divs to be inserted
			var HTMLheaderName = '<h1 id="name" class="light-yellow-text profile-header">%data%</h1>';
			var HTMLheaderRole = '<span class="white-text">%data%</span><hr/>';

			var HTMLbioPic = '<img src="%data%" class="biopic img-responsive">';
			var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

			var HTMLcontactGeneric = '<li class="flex-item"><span class="light-yellow-text">%contact%</span><span class="white-text">%data%</span></li>';
			var HTMLmobile = '<li class="flex-item"><span class="light-yellow-text">mobile</span><span class="white-text">%data%</span></li>';
			var HTMLemail = '<li class="flex-item"><span class="light-yellow-text">email</span><span class="white-text">%data%</span></li>';
			var HTMLtwitter = '<li class="flex-item"><span class="light-yellow-text">twitter</span><span class="white-text">%data%</span></li>';
			var HTMLgithub = '<li class="flex-item"><span class="light-yellow-text">github</span><span class="white-text">%data%</span></li>';
			var HTMLblog = '<li class="flex-item"><span class="light-yellow-text">blog</span><span class="white-text">%data%</span></li>';
			var HTMLlocation = '<li class="flex-item"><span class="light-yellow-text">location</span><span class="white-text">%data%</span></li>';

			var HTMLskillsStart = '<h3 id="skillsH3" class="light-yellow-text">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
			var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';
			var data = '%data%';

			// Append Name and role
			var header = $('#header');
			header.prepend(HTMLheaderRole.replace(data,this.role));
			header.prepend(HTMLheaderName.replace(data,this.name));

			// Append header image
			$('#headerimg').prepend(HTMLbioPic.replace(data, this.biopic));


			// Append contact information
			var topContacts = $('#topContacts');
			var bottomContacts = $('#footerContacts');

			// Define function to append content to header and footer
			var appendContact= function(appendData) {
				topContacts.append(appendData);
				bottomContacts.append(appendData);
			};

			var mobileContact = HTMLmobile.replace(data, this.contacts.mobile);
			appendContact(mobileContact);

			var emailContact = HTMLemail.replace(data, this.contacts.email);
			appendContact(emailContact);

			var githubContact = HTMLgithub.replace(data, this.contacts.github);
			appendContact(githubContact);

			var locationContact = HTMLlocation.replace(data, this.contacts.location);
			appendContact(locationContact);

			// Append all skills
			var headerContent = $('#headerContent');
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
			var data = '%data%';

			// String variables that contain htm to insert
			var HTMLschoolStart = '<div class="education-entry"></div>';
			var HTMLschoolName = '<a href="#">%data%';
			var HTMLschoolDegree = ' -- %data%</a>';
			var HTMLschoolDates = '<div class="date-text">%data%</div>';
			var HTMLschoolLocation = '<div class="location-text">%data%</div>';
			var HTMLschoolMajor = '<em><br>Major: %data%</em>';

			var HTMLonlineClasses = '<h3 class="dark-gray-color">Online Classes</h3>';
			var HTMLonlineTitle = '<a href="#">%data%';
			var HTMLonlineSchool = ' - %data%</a>';
			var HTMLonlineDates = '<div class="date-text">%data%</div>';
			var HTMLonlineURL = '<br><a href="#">%data%</a>';

			// Insert all schools
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

			// Insert all online classes
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

			// String variables that contain htm to insert
			var data = '%data%';

			var HTMLworkStart = '<div class="work-entry"></div>';
			var HTMLworkEmployer = '<a href="#">%data%';
			var HTMLworkTitle = ' - %data%</a>';
			var HTMLworkDates = '<div class="date-text">%data%</div>';
			var HTMLworkLocation = '<div class="location-text">%data%</div>';
			var HTMLworkDescription = '<p><br>%data%</p>';

			// Insert all jobs
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

			// String variables that contain htm to insert
			var projectDiv = $('#projects');
			var data = '%data%';

			var HTMLprojectStart = '<div class="project-entry"></div>';
			var HTMLprojectTitle = '<a href="#">%data%</a>';
			var HTMLprojectDates = '<div class="date-text">%data%</div>';
			var HTMLprojectDescription = '<p><br>%data%</p>';
			var HTMLprojectImage = '<img src="%data%">';

			// Insert all projects
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

	bio.display();
	work.display();
	projects.display();
	education.display();
	$('#mapDiv').append(googleMap);
	initializeMap(bio, education, work);

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




