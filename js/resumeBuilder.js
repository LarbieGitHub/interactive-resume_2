var bio = {
    "name": "Andrew Larbie",
    "role": "Developer",
    "contacts": {
        "mobile": ": 777-777-7777",
        "email": ": andrew@web.com",
        "github": ": andrewGit",
        "twitter": ": @andrew",
        "location": ": New Jersey",
        "blog": ": blog"
    },
    "welcomeMessage": "lorem ipsum dolor sit amet etc etc.",
    "skills": [
        "Visio", "Ruby", "NetLink", "C++", "BMP"
    ],
    "bioPic": "images/fry.jpg"
};

var work = {
    "jobs": [
        {
            "employer": "AT&T Inc.",
            "title": "Developer",
            "location": "Bedminster, NJ",
            "dates": "05/15 - Present",
            "description": "Responsible for the monitoring of overall availability trends by performing data analysis to Identify service trends ensuring that availability levels are consistently met. Also responsible for production of IT Services Delivery performance metrics. This includes IT Service Results Leadership metrics Service Quality metrics. KPIs and Operational metrics. Also facilitate and administer the annual Mission Critical selection process benchmark and establish yearly performance targets and monitor ticket quality to ensure the integrety of IT metrics."
        },
        {
            "employer": "AT&T Inc.",
            "title": "Sr Specialist - Network Support",
            "location": "Bedminster, NJ",
            "dates": "09/04 - 04/15",
            "description": "Provides technical solutions and project mgmt for provisioning assurance. participates in software development project activities. Assists in coordination evaluation and partnership with tech vendors outside consultants and internal resources. part of a 24X7 staff delivering network tech support. provides tech troubleshooting and Leadership required to recover from the most complex network problems. Works closely with business partners to Identify or quantify business issues associated with specific projects develop or implement business strategy and Assists in setting strategic tech direction in support of customer facing organizations. May leads crossfunctional teams on specific issues or projects."
        },
        {
            "employer": "AT&T Corp",
            "title": "Switch Analyst",
            "location": "Dayton, NJ",
            "dates": "03/99 - 08/04",
            "description": "Monitor and troubleshoot Nortel’s Digital Multiplexing System (DMS). Lucent’s 5EES Switches Siemens Internet Offload Switch(IOS). Troubleshoot T1 T3 ISDN OC3 OC12 OC48 and SS7. Works with digital switching related trunks switch translations Centrex. Responsible for troubleshooting and maintenance of digital crossconnects system. telephony PBXs analog/digital interfaces AIN. Perform simple and complex translations analyzing and resolving switch and transport troubles. work service orders for lines trunks and links. Perform switch preventive maintenance and upgrades. Work with vendor and engineering personnel during new and growth installation work. Responsible for patch verifications switch translations provisioning trunk-up and testing. Complete acceptance testing for both T1 and fractional T1 circuits. Configure DACS port for proper framing and line coding. Interpret and diagnose various T1 fault conditions such as AIS red/yellow alarms."
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Make a Portfolio Page",
            "dates": "05/15 - 05/23",
            "description": "Download a design mockup file. Identify the various boxes you will need to build in order to recreate this design. Write your HTML and CSS files continue to iterate until your work is representative of the design mockup. Take the time to personalize your portfolio with custom colors additional content and your own images. Validate your HTML and CSS against the W3C's Validators.",
            "image": "http: //www.lorempixum.com/g/70/70/fashion"
        },
        {
            "title": "Interactive Resume",
            "dates": "06/15-07/12",
            "description": "To write JavaScript that powers my Interactive resume. Throughout the course I will build my resume by writing a JSscript that will combine my personal information with pre-written HTML and CSS templates to generate my resume.",
            "image": "http: //www.lorempixum.com/g/70/70/nature"
        }
    ]
};

var education = {
    "schools": [
        {
            "name": "New Jersey Institute of Technology",
            "location": "Newark, NJ",
            "degree": "MSc",
            "major": ["CS", "Business Admin"],
            "dates": 2011,
            "url": "http://www.njit.edu"
        },
        {
            "name": "New Jersey Institute of Technology",
            "location": "Newark, NJ",
            "degree": "BSc",
            "major": ["CS"],
            "dates": 2005,
            "url": "http://www.njit.edu"
        },
        {
            "name": "University of Ghana",
            "location": "Accra, Ghana",
            "degree": "BSc",
            "major": ["Physics", "Geology"],
            "dates": 1996,
            "url": "http://www.ug.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Nanodegree Courses",
            "school": "Udacity",
            "dates": 2015,
            "url": "http://www.udacity.com"
        }
    ]
};

// a function to display the bio 
bio.display = function () {    
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);
    var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedbioPic);
    
    // statement to display skills in bio
    $("#header").append(HTMLskillsStart);

    for (skill in bio.skills) {
        if (bio.skills.length > 0) {        
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
        }
    }
    var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
    $("#topContacts").prepend(formattedBlog);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").prepend(formattedLocation);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").prepend(formattedTwitter);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").prepend(formattedGitHub);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").prepend(formattedEmail);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").prepend(formattedMobile);

    //footerContacts
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGitHub);
    $("#footerContacts").append(formattedTwitter);
};
bio.display();

// a function to display the work functions
work.display = function() {
    for (job in work.jobs) {
    // create new div for work experience
        $("#workExperience").append(HTMLworkStart);
    // concatenate employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
work.display(); 

// a function to display the projects
projects.display = function() {
    for (project in projects.projects) {
    // create new div for projects
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
    }
};
projects.display();

// a function to display the school history
education.display = function () {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedName);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedDegree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedMajor);
        var formattedURL = HTMLschoolURL.replace("%data%", education.schools[school].url);
        $(".education-entry:last").append(formattedURL);
    }
    for (onlineCourse in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedClasses = HTMLonlineClasses;
        $(".education-entry:last").append(formattedClasses);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        $(".education-entry:last").append(formattedSchool);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
        $(".education-entry:last").append(formattedTitle);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
        $(".education-entry:last").append(formattedURL);
    }
};
education.display();

// Internationalize Names Solution
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] +" "+name[1];
}

$("#main").append(internationalizeButton);

// you want to see a map? here's a map
$("#mapDiv").append(googleMap);

// to retrieve the work locations -locationizer() work? 
function locationizer(work_obj) {
    var locationArray = [];

    for(job in work_obj.jobs) {
    	var newlocation = work_obj.jobs[job].location;
    	locationArray.push(newlocation);
    }

    return locationArray;
       
}

console.log(locationizer(work));
