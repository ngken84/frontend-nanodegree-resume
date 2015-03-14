var bio =
{
	"name" : "Ken Ng",
	"role" : "Front-End Web Developer",
	"contacts" :
	{
		"mobile" : "(650)269-3919",
		"email" : "ng.ken84@gmail.com",
		"github" : "https://github.com/ngken84",
		"location" : "Sacramento, California"
	},
	"picture url" : "http://placehold.it/500x500",
	"welcomeMessage" : "Welcome Future Employers!",
	"biopic" : "../images/profile.jpg",
	"skills" : ["C++", "Java", "Python", "HTML5", "CSS3", "JavaScript", "Android", "iOS"],
	"display" : function() {}
};

var education = {
	"schools" : [
		{
			"name" : "Johns Hopkins University",
			"city" : "Baltimore, Maryland",
			"degree" : "BS",
			"major" : ["Biomedical Engineering"],
			"dates" : 2008

		},
		{
			"name" : "UC Santa Cruz",
			"city" : "Santa Cruz, California",
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
		}
	],
	"display" : function () {}
};

var work =
{
	"job" : [
		{
			"employer" : "California Legislative Data Center",
			"position" : "Software Developer",
			"work dates" : "Fall 2013 - Present",
			"city" : "Sacramento, California",
			"description" : ["Collaborate with a team to create a suite of applications to organize Committee Hearings and Bills",
				"Developed Android Application to Committee Members to view and annotate bills"]
		},
		{
			"employer" : "Sony Computer Entertainement",
			"position" : "Senior Tester",
			"work dates" : "Fall 2011 - Winter 2012",
			"city" : "Foster City, California",
			"description" : ["Ensured software released on PlayStation platforms adhered to SCEA's Technical Requirements Checklist",
						"Discovered, researched, and summarized violations of SCEA's TRCs both individually and in a team environment",
						"Created a Format QA tester wiki site that consolidates information needed to thoroughly complete test cases in SCEA's TRCs",
						"Earned top performer on multiple occasions"]
		},
		{
			"employer" : "Weil Gotshals & Manges LLP",
			"position" : "Paralegal",
			"work dates" : "Winter 2007 - Spring 2011",
			"city" : "Redwood City, Sacramento",
			"description" : ["Ensured attorneys had the materials needed for proceedings such as depositions and trials",
						"Assisted with the drafting of attorney briefs, presentations and expert reports",
						"Performed special assignments at attorney request including research and document review",
						"Managed and organized large record databases for multiple litigation cases"]
		}
	],
	"display" : function() {}
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
	"display" : function() {}
}


// Append Skills

if(bio.skills && bio.skills.length > 0)
{
	$('#header').append(HTMLskillsStart);
	for(i = 0, x = bio.skills.length; i < x; ++i)
	{
		$('#skills').append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

// Append Employers

for(index in work.job)
{
	$('#workExperience').append(HTMLworkStart);
	var workEntry = $('.work-entry').last();
	var workJob = work.job[index];
	workEntry.append(HTMLworkEmployer.replace('%data%', workJob.employer) + HTMLworkTitle.replace('%data%', work.job[index].position));
	workEntry.append(HTMLworkDates.replace('%data%', workJob['work dates']));
	workEntry.append(HTMLworkLocation.replace('%data%', workJob.city));
	workEntry.append(HTMLworkDescription.replace('%data%', workJob.description.join("<br>")));
}



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




