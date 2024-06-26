# Drug Abuse Prevention Website
by Adam Zorgo + Emad Hassan 

## Goals and Meaning of the Project

* Addictive substances like **drugs** can (and have) become one of the biggest plagues on human life.
* It is important for all of those struggling with an addiction to realize that they **are not alone**.
* Equally as important, is the ability to **notice the early signs** of a drug addiction or the likelyhood of one in the future, after all, an ounce of prevention is worth a pound of cure.
* We combined **all of these critical functionalities** into one project, while also utilizing the knowledge we had gained this semester.
![image](https://github.com/Adam-Zorgo/drug-abuse-website-react/assets/162918688/0abee434-6d82-423b-bd6a-c6c2a08d6888)


## Installation and usage

*__Step By Step Guide__*
1. Clone this repository or download it as a zip and extract.
2. Make sure you have Node.js installed.
3. Open the terminal and install react-router-dom as well as react-icons and express.
5. Open the terminal in the risk-assessment-backround directory and start the ExpressServer.js
6. Finally build and run with npm run.
7. **Viola-** the website should be up and running on http://localhost:3000/
![png-transparent-install-icon-installation-computer-icons-computer-software-installer-blue-text-logo](https://github.com/Adam-Zorgo/drug-abuse-website-react/assets/162918688/923b4698-09bb-4237-947e-a5ddeff610be)


## The Code

#### First are some files that are autogenerated and neccessary for the build
![image](https://github.com/Adam-Zorgo/drug-abuse-website-react/assets/162918688/32e94574-1ca3-426a-a149-d061ce4e4095)
Nonetheless, *ExpressServer.js* is convenient because it holds the entire (albeit small) backend logic.
![image](https://github.com/Adam-Zorgo/drug-abuse-website-react/assets/162918688/fe5507b5-39a4-43e8-a3d7-0a056bab307c)
As can be seen above, the express server takes the number from the file of the risk given, and increments it.


#### Here is where almost the entire relevant codebase lies.
![image](https://github.com/Adam-Zorgo/drug-abuse-website-react/assets/162918688/1ba07d32-b88f-458b-8d8b-55bbbed107cc)

#### Assets merely holds the images and Icons used on the site.

#### GetHelp.js is the script for the Get Help page on the website.
![image](https://github.com/Adam-Zorgo/drug-abuse-website-react/assets/162918688/73e02915-a6bb-4ed9-8c63-925103885941)

#### Home.js is the home, and main page of the website.
![image](https://github.com/Adam-Zorgo/drug-abuse-website-react/assets/162918688/52d8967b-0d2c-421d-9dfa-6a1a97e29a20)

#### MutexRiskCounter.js is our (quite simple) js implementation of a basic mutex lock that we use to update the number values in the text files.
![image](https://github.com/Adam-Zorgo/drug-abuse-website-react/assets/162918688/cbd3c270-0dfa-4960-9a1b-6bb894ae1a24)

#### Navbar.js was one of the most difficult elements of the website to get working correctly. It implements three reactive links as well as a drawer with similar capabilities.
![image](https://github.com/Adam-Zorgo/drug-abuse-website-react/assets/162918688/da40fff2-91b2-4976-b773-1028d5387dab)

#### RiskAssessment.js is a very important page as it utilizes the mutex lock, as well as being the most dynamic part of the project.
![image](https://github.com/Adam-Zorgo/drug-abuse-website-react/assets/162918688/7e0c921d-e6e7-4294-b250-a301c564de7f)
![image](https://github.com/Adam-Zorgo/drug-abuse-website-react/assets/162918688/1c568a0f-e3ca-4567-940b-083d3c72e6c5)

#### The three txt files are self explanatory.
![image](https://github.com/Adam-Zorgo/drug-abuse-website-react/assets/162918688/a22acd8d-0a6a-4389-8bee-210ac3513539)

#### App.css contains all of the __non-inline__ styling.
![image](https://github.com/Adam-Zorgo/drug-abuse-website-react/assets/162918688/f1ca576a-5485-4d20-83a4-0d25541f4c9e)

#### App.js and *index.js* are merely wrappers used for routing.
![image](https://github.com/Adam-Zorgo/drug-abuse-website-react/assets/162918688/f20623ca-c8f3-4a7d-b4e7-d9c735369c7c)


## Results
![image](https://github.com/Adam-Zorgo/drug-abuse-website-react/assets/162918688/79d70d5f-e556-4600-9602-ec1ebeff1672)
![image](https://github.com/Adam-Zorgo/drug-abuse-website-react/assets/162918688/bc1aed14-9fdc-4506-8959-e40184264493)
![image](https://github.com/Adam-Zorgo/drug-abuse-website-react/assets/162918688/b4a601c9-fba3-4d64-8324-68b987c5df11)
![image](https://github.com/Adam-Zorgo/drug-abuse-website-react/assets/162918688/9b6f3eb7-8168-4b85-84b8-2c721b75dbbf)
![image](https://github.com/Adam-Zorgo/drug-abuse-website-react/assets/162918688/52df8c1c-5dde-4e68-b723-cc46b2fbbc5a)


## Discussion and Conclusions
- Overall I think it was a successfull and enjoyable project, and I feel that we did well.
- The Biggest issue we have is probably with the number update not always writing for some, still unknown reason.
- The Largest challenge was probably just learning a new environment, as I am not normally a Javascript/React type of person.
- Sometimes the formatting was glitchy, and it took hours to fix.
- Regardless, I cannot complain about the experience. I think the website is quite good for this level and could definately be used in some capacity.









