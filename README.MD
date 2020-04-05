# Doctor Lookup

#### A web app that helps users to search for doctors

#### **By Stephanie Podolak**

## Description

This web application intakes search information such as symptoms or doctor name and returns Portland area physicians that meet the criteria utilizing [BetterDoctor, Inc API](https://developer.betterdoctor.com/). An exercise in making API calls with javascript.


### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Intakes user search information including symptoms and stores it** | Back pain | Symptom: Back pain |
| **Intakes user search information including doctor name and stores it** | Dr. Jamce Corden | Doctor: James Corden |
| **Retrieves API from BetterDoctor, Inc. and stores information in a way that is searchable by our program** | fetch API remotely | save API locally |
| **Searches through API data to find doctor information that matches our user search** | Symptom: Backpain | Doctor: James Corden who treats back pain |
| **Display doctor information that matches user search** | Doctor: James Corden | Here are some doctors that can help you with your back pain: |

## Setup/Installation Requirements

1. Clone this repository to your desktop using your prefered terminal. If using git bash type: "git clone https://github.com/spodolak/DoctorFinderAPI.git" into your command line while in desktop directory.
2. Navigate inside project directory by entering "cd DoctorFinderAPI" in your terminal.
3. Install node modules using command: "node install -y".
4. Build webpack using command: "npm run build" OR launch a live server for development by using the command "npm run start".


## Known Bugs
* No known bugs at this time.

## Technologies Used
* JavaScript
* jQuery-3.4.1
* HTML
* CSS
* Bootstrap-4.4.1
* Node
* BetterDoctor, Inc. (API)

## Link to GitHub Pages
[Doctor Lookup](https://spodolak.github.io/doctor-lookup/)

## Support and Contact Details

_For any questions or comments please contact:_ Stephanie Podolak


### License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2020 **_{Stephanie Podolak}_**
