$("#main").append("Ken Ng");

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
for(i = 0, x = bio.skills.length; i < x; ++i)
{
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
}

