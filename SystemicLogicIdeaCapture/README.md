https://github.com/Edward-Motloung/systemic-idea-capture-form.git

Responsive idea capture form built in HTML, CSS, JQuery, and Angularjs.

## Choice of Libraries/Frameworks
	- Foundation
	- Angularjs
	- JQuery

## Assumptions
	- The project should be embedded in a widget.

## Start

SystemicLogic Idea Capture is a web based form that captures a user's idea and posts
the idea to a specifed url using AJAX.
The app has a widget that enables the form to appear.
After submitting your idea, the form closes and the widget reappears
with a result of the previous idea as a JSON-object and reformated into the 
html view.

## Running the form.
Using a localserver to run the app is the best way to do it.
follow the instructions below:

	When using xampp.
	1. Download and unzip the file from (https://github.com/Edward-Motloung/systemic-idea-capture-form.git).
	2. Copy the unzipped file to xampp folder in applications
		- Mac : Applications/XAMPP/htdocs
		- Windows: c:/XAMPP/htdocs
		- Ensure that Apache web server is running.
		- In your browser, type in the following: http://localhost/SystemicLogicIdeaCapture

	When using nodejs
	1. Download and unzip the file from (https://github.com/Edward-Motloung/systemic-idea-capture-form.git).
	2. In terminal, navigate to the unzipped folder and type (live-server).
		- This will run the app on the local server.

## Using the form.
It is very simple to use. A form will appear with a button "Record your idea...". 
Clicking the button will bring up the idea for which will allow you then to record your idea.

## REQUIRED PARAGRAPH and Breakdown of project
I wrote my paragraph in emacs which is part of the breakdown as to how I went
about solving this problem.

find the emacs file(IdeaCaptureForm.org) in the root of the project folder.

download emacs : https://www.gnu.org/software/emacs/download.html


