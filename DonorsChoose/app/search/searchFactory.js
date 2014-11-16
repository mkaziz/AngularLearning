angular.module("donorsApp").factory('SearchFactory', [function() {
    
    return {
        
        subjects: [
            {
                id: "",
                title: ""
            },
            {
                id: -1,
                base: true,
                title: "Music and the Arts"
            },
            {
                id: 1,
                title: "Performing Atrs"
            },
            {
                id: 11,
                title: "Visual Arts"
            },
            {
                id: 12,
                title: "Music"
            },
            {
                id: -2,
                base: true,
                title: "Health & Sports"
            },
            {
                id: 2,
                title: "Sports"
            },
            {
                id: 27,
                title: "Health & Wellness"
            },
            {
                id: 28,
                title: "Nutrition"
            },
            {
                id: 29,
                title: "Gym & Fitness"
            },
            {
                id: -6,
                base: true,
                title: "Literacy & Language"
            },
            {
                id: 10,
                title: "Literacy"
            },
            {
                id: 3,
                title: "Literature & Writing"
            },
            {
                id: 22,
                title: "Foreign Languages"
            },
            {
                id: 25,
                title: "ESL"
            },
            {
                id: -3,
                base: true,
                title: "History & Civics"
            },
            {
                id: 9,
                title: "History & Geography"
            },
            {
                id: 13,
                title: "Civics & Government"
            },
            {
                id: 14,
                title: "Economics"
            },
            {
                id: 15,
                title: "Social Sciences"
            },
            {
                id: -4,
                base: true,
                title: "Math & Science"
            },
            {
                id: 4,
                title: "Health & Life Science"
            },
            {
                id: 6,
                title: "Applied Science"
            },
            {
                id: 7,
                title: "Environmental Science"
            },
            {
                id: 8,
                title: "Mathematics"
            },
            {
                id: -7,
                base: true,
                title: "Special Needs"
            },
            {
                id: -5,
                base: true,
                title: "Applied Learning"
            },
            {
                id: 18,
                title: "Early Development"
            },
            {
                id: 21,
                title: "Community Service"
            },
            {
                id: 26,
                title: "Character Education"
            },
            {
                id: 16,
                title: "College & Career Prep"
            },
            {
                id: 17,
                title: "Extra Curricular"
            },
            {
                id: 20,
                title: "Parental Involvement"
            },
            {
                id: 19,
                title: "Other"
            }
        ],
        
        costToCompletes: [
            {
                id: "",
                title: ""
            },
            {
                id: 1,
                title: "$99 or less"
            },
            {
                id: 2,
                title: "$100-$200"
            },
            {
                id: 3,
                title: "$200-$1000"
            },
            {
                id: 4,
                title: "$1000-above"
            }
        ],
        
        gradeLevels: [
            {
                id: "",
                title: ""
            },
            {
                id: 1,
                title: "Grades PreK-2"
            },
            {
                id: 2,
                title: "Grades 3-5"
            },
            {
                id: 3,
                title: "Grades 6-8"
            },
            {
                id: 4,
                title: "High School"
            },
            {
                id: 5,
                title: "Adult Education"
            }
        ],
        
        sortBys: [
            {
                id: "",
                title: ""
            },
            {
                id: 0,
                title: "High Urgency"
            },
            {
                id: 1,
                title: "High Poverty"
            },
            {
                id: 2,
                title: "Almost Completed"
            },
            {
                id: 4,
                title: "Most Popular"
            },
            {
                id: 5,
                title: "Almost Expired"
            },
            {
                id: 7,
                title: "Most Recent"
            }
        ],
        
        
    }
    
}]);