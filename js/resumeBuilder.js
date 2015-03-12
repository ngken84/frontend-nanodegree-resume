var bio =
{
	"name" : "Ken Ng",
	"role" : "Front-End Web Developer",
	"contact info" : "ng.ken84@gmail.com",
	"picture url" : "http://placehold.it/500x500",
	"welcome message" : "Welcome Potential Employers, Have some cookies",
	"skills" : ["HTML5", "CSS3", "JavaScript", "Python", "Java", "C++", "Android Developer"]
};



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
	var work = {};
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
	var education = {};
	education["school"] = "UC Santa Cruz Extension";
	education["years attended"] = "2011-2012";
	education["city"] = "Santa Cruz, California";

	var schoolEntry = $("#education");
	schoolEntry.append(education["school"]);
}





